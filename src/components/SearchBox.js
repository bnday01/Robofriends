import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
	return (
		<div>
<input 
		className='bg-lightest-blue ba b--green br3 pa3 ma2'
		type='search'
		placeholder='Search Robots'
		onChange={searchChange}
/>
		</div>
		)
}

export default SearchBox;