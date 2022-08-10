import Header from './components/Header'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'

import './scss/app.scss'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { createContext, useState } from 'react'

export const SearchContext = createContext()

const App = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='wrapper'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App
