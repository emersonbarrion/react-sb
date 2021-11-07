import { useSelector } from "react-redux";

const useMarketGroup = (id) => {
	const marketGroup = useSelector((state) => state.marketGroups);

	return marketGroup && marketGroup[id] ? Object.values(marketGroup[id]) : [];
};

export { useMarketGroup };
