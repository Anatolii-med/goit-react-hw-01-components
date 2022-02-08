import PropTypes from "prop-types";

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
