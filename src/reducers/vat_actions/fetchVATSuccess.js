import { FETCH_VAT_SUCCESS } from '../../actions/actions';

const fetchVATSuccess = (state = {'vat':{},'loadingDone':false}, action) => {
	switch (action.type) {
		case FETCH_VAT_SUCCESS:
			return {
				'vat':action.payload,
				'loadingDone':action.loadingDone
			};
		default:
			return state;
	}
};

export default fetchVATSuccess
