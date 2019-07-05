import React from 'react'
import { connect } from 'react-redux'
import Loading from '../components/loading'
import ErrorMsg from '../components/errorMsg'

const DisplayVAT = ({ loading,loadingDone,error,vat }) => {
	
	if (loading && !loadingDone) {
		return (
			<div>
				<Loading />
			</div>
		)
	}
	if (error) {
		return (
			<div>
				<ErrorMsg />
			</div>
		)
	}
	if (Object.keys(vat).length !== 0) {
		return (
			<div>
				<table>
					<tbody>
					<tr>
						<th>CountryCode</th>
						<th>VAT Number</th>
						<th>Name</th>
						<th>Address</th>
						<th>Validity</th>
						<th>Request Date</th>
					</tr>
					<tr>
						<td>{vat.CountryCode}</td>
						<td>{vat.VATNumber}</td>
						<td>{vat.Name}</td>
						<td>{vat.Address}</td>
						<td>{vat.Valid}</td>
						<td>{vat.RequestDate}</td>
					</tr>
					</tbody>
				</table>
			</div>
		)
	}
	else {
		return (
			<div> </div>
		)
	}
};

const mapStateToProps = (state) => ({
	vat: state.fetchVATSuccess.vat,
	loadingDone: state.fetchVATSuccess.loadingDone,
	loading: state.fetchVATBegin.loading,
	error: state.fetchVATFail.error
});

export default connect(mapStateToProps)(DisplayVAT)
