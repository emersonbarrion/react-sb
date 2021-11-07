import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSelection = (id) => {
	let oddsChangeTimeout = undefined;
	const [oddsChange, setOddsChange] = useState("Same");
	const selection = useSelector(
		(state) => state.selections[id],
		(next, prev) => {
			if (prev.odds > next.odds) {
				setOddsChange("down");
			} else if (prev.odds < next.odds) {
				setOddsChange("up");
			}

			oddsChangeTimeout = setTimeout(() => {
				setOddsChange("Same");
			}, 500);

			return prev.odds === next.odds;
		}
	);

	useEffect(() => {
		return () => {
			clearTimeout(oddsChangeTimeout);
		};
	});

	return {
		oddsChange,
		selection,
	};
};

export { useSelection };
