import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../App'
import Categories from '../components/Categories'
import Paginate from '../components/Paginate/Paginate'
import TshirtBlock from '../components/ShirtBlock'
import ShirtSkeleton from '../components/ShirtBlock/ShirtSkeleton'
import Sort from '../components/Sort'

const Home = () => {
	const { searchValue } = useContext(SearchContext)
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])
	const [categoryId, setCategoryId] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [sortType, setSortType] = useState({
		name: 'popularity',
		sortProperty: 'rating',
	})

	useEffect(() => {
		setLoading(true)

		const category = categoryId > 0 ? (category = `${categoryId}`) : ''
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.sortProperty.replace('-', '')
		const search = searchValue ? `&search=${searchValue}` : ''

		fetch(
			`https://628de099a339dfef87a24573.mockapi.io/items?page=${currentPage}&limit=5&${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then(res => res.json())
			.then(data => {
				setProducts(data)
				setLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, currentPage])

	const loadingSkeleton = [...new Array(5)].map((_, index) => (
		<ShirtSkeleton key={index} />
	))

	const productsItems = products
		.filter(item =>
			item.title
				.toLowerCase()
				.replace(/ /g, '')
				.includes(searchValue.toLowerCase().replace(/ /g, ''))
		)
		.map(product => <TshirtBlock key={product.id} {...product} />)

	return (
		<>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onChangeCategory={index => setCategoryId(index)}
				/>
				<Sort value={sortType} onChangeSort={i => setSortType(i)} />
			</div>

			<h2 className='content__title'>Сhoose</h2>

			<Paginate onChangePage={number => setCurrentPage(number)} />

			<div className='content__items'>
				{loading ? loadingSkeleton : productsItems}
			</div>
		</>
	)
}

export default Home
