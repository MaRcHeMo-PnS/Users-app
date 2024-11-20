import { TiGift } from 'react-icons/ti';
import { TfiPencil } from 'react-icons/tfi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import '../styles/UserCard.css';

function UserCard({ user, openEdit, openDelet }) {
	return (
		<div className="card">
			<h3 className="card__name">
				<FaUser className="icon--gift3" />
				{''} {user?.first_name} {user?.last_name}
			</h3>
			<div className="card__info">
				<div>
					<span className="card__label">Correo</span>
					<span className="card__data">
						<MdOutlineMarkEmailUnread className="icon--gift2" />
						{user?.email}
					</span>
				</div>
				<div>
					<span className="card__label">Cumpleaños</span>
					<span className="card__data">
						<TiGift className="icon--gift" />
						{user?.birthday}
					</span>
				</div>
			</div>
			<div className="card__btns">
				<button className="btn btn--edit" onClick={() => openEdit(user)}>
					<TfiPencil />
				</button>
				<button className="btn btn--delete" onClick={() => openDelet(user?.id)}>
					<FaRegTrashAlt />
				</button>
			</div>
		</div>
	);
}

export default UserCard;
