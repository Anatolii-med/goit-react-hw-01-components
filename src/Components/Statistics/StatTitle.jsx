import { TitleWrapDiv } from "./StatTitle.style";
const StatTitle = ({ title }) => {
	return <TitleWrapDiv>{title ? <h2>Upload stats</h2> : ""}</TitleWrapDiv>;
};

export default StatTitle;
