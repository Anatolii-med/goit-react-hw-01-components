import StatTitle from "./StatTitle";
import StatData from "./StatData";

const Statistics = ({ title, stats }) => {
	return (
		<div>
			<StatTitle title={title} />
			<StatData stats={stats} />
		</div>
	);
};

export default Statistics;
