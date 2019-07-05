import axios from 'axios';

export const FETCH_VAT_BEGIN = "FETCH_VAT_BEGIN";
export const FETCH_VAT_SUCCESS = "FETCH_VAT_SUCCESS";
export const FETCH_VAT_FAILURE = "FETCH_VAT_FAILURE";

export const fetch_VAT_Begin = (value) => ({
	type: FETCH_VAT_BEGIN,
	loading: value
});

export const fetch_VAT_Success = VAT => ({
	type: FETCH_VAT_SUCCESS,
	payload: VAT,
	loadingDone: true
});

export const fetch_VAT_Failure = (value) => ({
	type: FETCH_VAT_FAILURE,
	error: value
});

export function fetchVATData(vat) {
	return (dispatch) => {
		dispatch(fetch_VAT_Begin(true));
		dispatch(fetch_VAT_Failure(false));
		const request = axios.get('https://vat.erply.com/numbers?vatNumber=' + vat);
		request.then((response) => {
			if (response.statusText === 'OK') {
				dispatch(fetch_VAT_Success(response.data));
			}
			else {
				dispatch(fetch_VAT_Failure(true));
			}
		})
			.catch(() => {
				dispatch(fetch_VAT_Begin(false));
				dispatch(fetch_VAT_Failure(true));
			}
		);
	};
}
