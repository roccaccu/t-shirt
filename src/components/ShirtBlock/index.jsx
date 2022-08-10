import { useState } from 'react'

const TshirtBlock = ({ title, price, imageUrl, sizes, types }) => {
	const typesName = ['Хлопок', 'Синтетика']
	const [activeTypes, setActiveTypes] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const [shirt, setShirt] = useState(0)

	// Функция изменения количества товара
	const postProductToCart = () => {
		setShirt(shirt + 1)
	}

	return (
		<div className='shirt-block-wrapper'>
			<div className='shirt-block'>
				<a href='/'>
					<img className='shirt-block__image' src={imageUrl} alt='Tshirt' />
					<h4 className='shirt-block__title'>{title}</h4>
				</a>
				<div className='shirt-block__selector'>
					<ul>
						{types.map((type, index) => (
							<li
								key={type}
								onClick={() => setActiveTypes(index)}
								className={activeTypes === index ? 'active' : ''}
							>
								{typesName[type]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, index) => (
							<li
								key={size}
								onClick={() => setActiveSize(index)}
								className={activeSize === index ? 'active' : ''}
							>
								{size}
							</li>
						))}
					</ul>
				</div>
				<div className='shirt-block__bottom'>
					<div className='shirt-block__price'>от {price} $</div>
					<button
						onClick={postProductToCart}
						className='button button--outline button--add'
					>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
								fill='white'
							/>
						</svg>
						<span>Добавить</span>
						<i>{shirt}</i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default TshirtBlock
