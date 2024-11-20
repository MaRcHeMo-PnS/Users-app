import '../styles/Paginacion.css';

function Pagination({ page, maxPage, setPage }) {
	const onPrev = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const onNext = () => {
		if (page < maxPage) {
			setPage(page + 1);
		}
	};

	return (
		<div className="pagination">
			<button onClick={onPrev} disabled={page === 1} className="btn2">
				Anterior
			</button>
			<span className="btn1">
				{page} / {maxPage}
			</span>
			<button onClick={onNext} disabled={page === maxPage} className="btn">
				Siguiente
			</button>
		</div>
	);
}
export default Pagination;
