import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import Layout from './layouts/Layout';
import AddEdit from './components/AddEdit';
import UserList from './components/UserList';
import Modal from './components/Modal';
import './styles/App.css';
import DeleteUser from './components/DeleteUser';
// import Pagination from './components/Pagination';
// import usePagination from './hooks/usePagination';

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1';

function App() {
	const [users, setUsers, loading] = useFetch();
	const [isOpen, setIsOpen] = useState(false);
	const [currentChild, serCurrentChild] = useState(null);

	// const { page, setPage, currentPageItems, maxPage } = usePagination({
	// 	itemsPerPage: 6,
	// 	totalItems: users?.length,
	// 	items: users,
	// });

	useEffect(() => {
		readUsers();
	}, []);

	const readUsers = () => {
		setUsers({ url: `${baseUrl}/users` });
	};

	const createUser = (dataForm) => {
		setUsers({
			url: `${baseUrl}/users`,
			method: 'POST',
			body: dataForm,
		});
		setIsOpen(false);
	};

	const openAdd = () => {
		setIsOpen(true);
		serCurrentChild(<AddEdit onSave={createUser} />);
	};

	const deleteUser = (userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'DELETE',
			// body: dataForm,
		});
		setIsOpen(false);
	};

	const updateUser = (dataForm, userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'PATCH',
			body: dataForm,
		});
		setIsOpen(false);
	};

	const openEdit = (user) => {
		setIsOpen(true);
		serCurrentChild(<AddEdit user={user} onSave={updateUser} />);
	};

	const openDelet = (user) => {
		setIsOpen(true);
		serCurrentChild(<DeleteUser user={user} onSave={deleteUser} />);
	};

	return (
		<Layout>
			<header className="header">
				<div className="header__container">
					<h1 className="header__title">Usuarios</h1>
					<h1 className="header__title__user">{users?.length}</h1>

					<button type="button" onClick={openAdd} className="header__button">
						Agregar Usuario
					</button>
				</div>
			</header>

			<main className="container">
				{loading ? (
					<h2>Cargando...</h2>
				) : (
					<UserList users={users} openEdit={openEdit} openDelet={openDelet} />
				)}
				<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
					{currentChild}
				</Modal>
			</main>
			{/* <Pagination page={page} setPage={setPage} maxPage={maxPage} /> */}
		</Layout>
	);
}

export default App;
