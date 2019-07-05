import { FETCH_VAT_BEGIN } from '../../actions/actions';

const fetchVATBegin = (state = {'loading': false}, action) => {
	switch (action.type) {
		case FETCH_VAT_BEGIN:
			return {
				'loading':action.loading
			};
		default:
			return state;
	}
};

export default fetchVATBegin
