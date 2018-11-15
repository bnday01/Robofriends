import React from 'react';


const Card = ({name, email, id, username}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card '>
			<img alt='robots' src={`https://robohash.org/${id}`} width='200' height='200'/>
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
				<p>{email}</p>
			</div>
		</div>
	);

}

export default Card;