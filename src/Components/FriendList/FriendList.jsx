import FriendItem from "./FriendItem";

import { FriendListUl } from "./FriendList.styles";

const FriendList = ({ friends }) => {
	return (
		<FriendListUl>
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
		</FriendListUl>
	);
};

export default FriendList;
