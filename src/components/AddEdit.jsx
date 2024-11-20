import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/AddEdit.css';

function AddEdit({ user, onSave }) {
	const { register, handleSubmit, reset } = useForm();

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
		<div className="form">
			<h2 className="form__title">{user ? 'Actualizar' : 'Registro'}</h2>
			<form className="form__content" onSubmit={handleSubmit(onSubmit)}>
				<div className="form__group">
					<label className="form__label">Nombre</label>
					<input
						className="form__input"
						type="text"
						placeholder="Nombre"
						{...register('first_name')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">Apellido</label>
					<input
						className="form__input"
						type="text"
						placeholder="Apellido"
						{...register('last_name')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">Correo</label>
					<input
						className="form__input"
						type="email"
						placeholder="Email"
						{...register('email')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">Contraseña</label>
					<input
						className="form__input"
						type="text"
						placeholder="Contraseña"
						{...register('contraseña')}
					/>
				</div>
				<div className="form__group">
					<label className="form__label">Cumpleaños</label>
					<input
						className="form__input"
						type="date"
						{...register('birthday')}
					/>
				</div>
				<button className="form__submit" type="submit">
					{user ? 'Actualizar' : 'Guardar'}
				</button>
			</form>
		</div>
	);
}

export default AddEdit;
