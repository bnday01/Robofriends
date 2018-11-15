import React from 'react';
import Card from './Card.js';
import '../containers/App.css';


const CardList = ({robots}) =>{

	return (
		<div >
		{
		 robots.map((obj,i) => {
			return (
				<Card 
					key={i} 
					id={obj.id} 
					name={obj.name} 
					username={obj.username} 
					email={obj.email}
				/>
			);
		})
	};
	</div>);
}


export default CardList;