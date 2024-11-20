import UserCard from './UserCard';
import '../styles/UserList.css';

function UserList({ users, openEdit, openDelet }) {
	return (
		<div className="cards">
			{users?.map((user) => (
				<UserCard
					key={user.id}
					user={user}
					openEdit={openEdit}
					openDelet={openDelet}
				/>
			))}
		</div>
	);
}

export default UserList;
