import PropTypes from "prop-types";
import { FriendItemLi, IsOnLineSpan, FriendNameP } from "./FriendItem.styles";

const FriendItem = (friends) => {
	return (
		<>
			<FriendItemLi key={friends.id}>
				<IsOnLineSpan isOnline={friends.isOnline}>
					{friends.isOnline}
				</IsOnLineSpan>
				<img src={friends.avatar} alt={friends.name} width="48" />
				<FriendNameP>{friends.name}</FriendNameP>
			</FriendItemLi>
		</>
	);
};

export default FriendItem;

FriendItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			friends: PropTypes.bool.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};
