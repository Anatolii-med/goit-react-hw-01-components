import TransactionItem from "./TransactionItem";
const TransactionHistory = ({ transactions }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{transactions.map((transaction) => {
					return (
						<TransactionItem
							key={transaction.id}
							type={transaction.type}
							amount={transaction.amount}
							currency={transaction.currency}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default TransactionHistory;
