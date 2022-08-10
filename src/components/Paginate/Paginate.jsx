import ReactPaginate from 'react-paginate'

import styles from './Paginate.module.scss'

const Paginate = ({ onChangePage }) => {
	return (
		<div className={styles.paginateWrapper}>
			<ReactPaginate
				breakLabel='...'
				nextLabel='>'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={2}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Paginate
