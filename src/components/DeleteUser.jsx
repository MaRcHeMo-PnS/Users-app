import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/DeleteUser.css';

function DeleteUser({ user, onSave }) {
	const { handleSubmit, reset } = useForm();

	useEffect(() => {
		if (user) {
			reset(user);
		} else {
			reset({
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				birthday: '',
			});
		}
	}, [user]);

	const onSubmit = (dataForm) => {
		if (user) {
			onSave(dataForm, user.id);
		} else {
			onSave(dataForm);
		}
	};

	return (
		<div className="delete">
			<h2 className="delete__title">Confirmar</h2>
			{/* <h2>Usuarios N° {user}</h2> */}
			<form className="form__content" onSubmit={handleSubmit(onSubmit)}>
				<button className="delete__title__btn" type="submit">
					Aceptar
				</button>
			</form>
		</div>
	);
}

export default DeleteUser;
