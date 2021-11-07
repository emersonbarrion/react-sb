import { useSelector } from "react-redux";

const useMarkets = (id) => {
	const market = useSelector((state) => state.markets);

	return market[id];
};

export default useMarkets;
