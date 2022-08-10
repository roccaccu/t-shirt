import { useState } from 'react'

const Categories = ({ value, onChangeCategory }) => {
	const categories = [
		'All',
		"Men's",
		'Female',
		'Childish',
		'Box',
		'Accessories',
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((c, index) => (
					<li
						key={c}
						className={value === index ? 'active' : ''}
						onClick={() => onChangeCategory(index)}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
