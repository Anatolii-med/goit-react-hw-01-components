import PropTypes from "prop-types";

const TransactionItem = ({ id, type, amount, currency }) => {
	return (
		<tr key={id}>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
};
export default TransactionItem;

TransactionItem.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};
