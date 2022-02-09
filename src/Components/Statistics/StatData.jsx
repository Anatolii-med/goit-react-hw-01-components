import PropTypes from "prop-types";
import { StatDataWrapUl, StatDataItemLi } from "./StatData.style";
const StatData = ({ stats }) => {
	return (
		<>
			<StatDataWrapUl>
				{stats.map((stat) => (
					<StatDataItemLi key={stat.id}>
						<span>{stat.label}</span>
						<span>{stat.percentage}</span>
					</StatDataItemLi>
				))}
			</StatDataWrapUl>
		</>
	);
};

export default StatData;

StatData.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	),
};
