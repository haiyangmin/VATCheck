import React from 'react'
import { connect } from 'react-redux'
import { fetchVATData } from '../actions/actions.js';

const SearchVAT = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return
				}
				dispatch(fetchVATData (input.value));
			}}>
				<input ref={node => input = node} />
				<button type="submit">
					Verify
				</button>
			</form>
		</div>
	)
};

export default connect()(SearchVAT)
