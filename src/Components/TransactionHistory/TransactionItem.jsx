const TransactionItem = ({ id, type, amount, currency }) => {
	return (
		<tr ked={id}>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
};
export default TransactionItem;
