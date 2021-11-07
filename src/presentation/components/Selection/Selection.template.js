import { useSelection } from "./Selection";
import "./Selection.css";

const Selection = ({ id }) => {
	const { oddsChange, selection } = useSelection(id);

	return (
		<div className={"selection " + oddsChange}>
			<div className="selection-label">{selection?.selectionName}</div>
			<div className="odds">{selection?.odds}</div>
		</div>
	);
};

export default Selection;
