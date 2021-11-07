import Selection from "../Selection";
import useMarkets from "./Market";
import "./Market.css";

const Market = ({ id }) => {
	const market = useMarkets(id);

	return (
		<div className="market">
			<div className="selection-list">
				{market?.selections.map((s) => (
					<Selection id={s} key={s} />
				))}
			</div>
		</div>
	);
};

export default Market;
