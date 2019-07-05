import { FETCH_VAT_FAILURE } from '../../actions/actions';

const fetchVATFail = (state = {'error': false}, action) => {
	switch (action.type) {
		case FETCH_VAT_FAILURE:
			return {'error': action.error};
		default:
			return state;
	}
};

export default fetchVATFail
