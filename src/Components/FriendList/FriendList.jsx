import FriendItem from "./FriendItem";
const FriendList = ({ friends }) => {
	return (
		<ul>
			{friends.map((friend) => {
				return (
					<FriendItem
						key={friend.id}
						avatar={friend.avatar}
						name={friend.name}
						isOnline={friend.isOnline}
					/>
				);
			})}
		</ul>
	);
};

export default FriendList;
