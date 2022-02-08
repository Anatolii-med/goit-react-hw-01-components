const FriendItem = (friends) => {
	return (
		<>
			<li key={friends.id}>
				<span>{friends.isOnline}</span>
				<img src={friends.avatar} alt={friends.name} width="48" />
				<p>{friends.name}</p>
			</li>
		</>
	);
};

export default FriendItem;
