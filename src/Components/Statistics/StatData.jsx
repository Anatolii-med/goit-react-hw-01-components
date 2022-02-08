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
