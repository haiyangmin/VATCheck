
import { combineReducers } from 'redux';
import fetchVATBegin from './vat_actions/fetchVATBegin.js';
import fetchVATSuccess from './vat_actions/fetchVATSuccess.js';
import fetchVATFail from './vat_actions/fetchVATFail.js';

const reducers = combineReducers({ 
	fetchVATBegin, 
	fetchVATSuccess, 
	fetchVATFail
});

export default reducers;
