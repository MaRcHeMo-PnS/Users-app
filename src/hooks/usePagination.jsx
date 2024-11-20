import { useState } from 'react';

function usePagination({ itemsPerPage = 6, totalItems = 0, items = [] }) {
	const [page, setPage] = useState(1);

	const maxPage = Math.ceil(totalItems / itemsPerPage);
	// console.log(items);
	const currentPageItems = items.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage,
	);

	return { page, setPage, currentPageItems, maxPage };
}
export default usePagination;
