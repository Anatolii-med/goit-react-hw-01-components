import StatTitle from "./StatTitle";
import StatData from "./StatData";

import { StatItemsWrapDiv } from "./Statistic.style";

const Statistics = ({ title, stats }) => {
	return (
		<StatItemsWrapDiv>
			<StatTitle title={title} />
			<StatData stats={stats} />
		</StatItemsWrapDiv>
	);
};

export default Statistics;
