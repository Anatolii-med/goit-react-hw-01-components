import PropTypes from "prop-types";
import {
	ProfileWrapDiv,
	ProfileAvatarImg,
	ProfileInfoDiv,
	ProfileStatWrapUl,
	ProfileStatItemLi,
} from "./Profile.styles";
const User = ({ username, tag, location, avatar, stats }) => {
	return (
		<ProfileWrapDiv>
			<ProfileInfoDiv>
				<ProfileAvatarImg
					src={avatar}
					alt="User avatar"
					className="avatar"
				/>
				<p className="name">{username}</p>
				<p className="tag">{"@" + tag}</p>
				<p className="location">{location}</p>
			</ProfileInfoDiv>

			<ProfileStatWrapUl>
				<ProfileStatItemLi>
					<span className="label">Followers</span>
					<span className="quantity">{stats.followers}</span>
				</ProfileStatItemLi>
				<ProfileStatItemLi>
					<span className="label">Views</span>
					<span className="quantity">{stats.views}</span>
				</ProfileStatItemLi>
				<ProfileStatItemLi>
					<span className="label">Likes</span>
					<span className="quantity">{stats.likes}</span>
				</ProfileStatItemLi>
			</ProfileStatWrapUl>
		</ProfileWrapDiv>
	);
};

User.propTypes = {
	username: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.exact({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}).isRequired,
};

export default User;
