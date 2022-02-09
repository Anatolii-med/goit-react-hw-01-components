import PropTypes from "prop-types";

import TransactionItem from "./TransactionItem";
import {
	TransactionTable,
	TransactionTableTbody,
	TransactionTableHeadTHead,
	TransactionTableHeadItemTh,
	TransactionTableHeadTr,
} from "./TransactionHistory.style";
const TransactionHistory = ({ transactions }) => {
	return (
		<TransactionTable>
			<TransactionTableHeadTHead>
				<TransactionTableHeadTr>
					<TransactionTableHeadItemTh>
						Type
					</TransactionTableHeadItemTh>
					<TransactionTableHeadItemTh>
						Amount
					</TransactionTableHeadItemTh>
					<TransactionTableHeadItemTh>
						Currency
					</TransactionTableHeadItemTh>
				</TransactionTableHeadTr>
			</TransactionTableHeadTHead>

			<TransactionTableTbody>
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
			</TransactionTableTbody>
		</TransactionTable>
	);
};

export default TransactionHistory;

TransactionHistory.propTypes = {
	transactions: PropTypes.array,
};
