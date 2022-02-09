import PropTypes from "prop-types";
import {
	TransactionItemTr,
	TransactionItemCelTd,
} from "./TransactionItem.style";

const TransactionItem = ({ id, type, amount, currency }) => {
	return (
		<TransactionItemTr key={id}>
			<TransactionItemCelTd>{type}</TransactionItemCelTd>
			<TransactionItemCelTd>{amount}</TransactionItemCelTd>
			<TransactionItemCelTd>{currency}</TransactionItemCelTd>
		</TransactionItemTr>
	);
};
export default TransactionItem;

TransactionItem.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};
