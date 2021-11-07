import "./MarketGroup.css";
import Market from "../Market";
import { useMarketGroup } from "./MarketGroup";

const MarketGroup = ({ id, label }) => {
	const markets = useMarketGroup(id);

	return (
		<div className="market-group">
			<div className="market-group-header">{label}</div>
			{markets.map((v) => (
				<Market id={v} key={v} />
			))}
		</div>
	);
};

export default MarketGroup;
