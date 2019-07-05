import React from 'react'

const VAT = ({ vat }) => (
	<ul>
		<li key={vat.CountryCode}>
			<div>{vat.CountryCode}</div>
			<div>{vat.VATNumber}</div>
			<div>{vat.RequestDate}</div>
			<div>{vat.Valid}</div>
			<div>{vat.Name}</div>
			<div>{vat.Address}</div>
		</li>
	</ul>
);

export default VAT
