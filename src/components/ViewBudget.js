import React from 'react';

const ViewBudget = (props) => {
	return (
		<div>
			<span>Budget: ${props.budget}</span>
			<button type='button' className='btn btn-primary ml-2' onClick={props.handleEditClick}>
				Edit
			</button>
		</div>
	);
};

export default ViewBudget;