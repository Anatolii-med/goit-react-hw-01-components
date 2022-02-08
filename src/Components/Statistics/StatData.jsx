import PropTypes from "prop-types";

const StatData = ({ stats }) => {
	return (
		<>
			<ul>
				{stats.map((stat) => (
					<li key={stat.id}>
						<span>{stat.label}</span>
						<span>{stat.percentage}</span>
					</li>
				))}
			</ul>
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
