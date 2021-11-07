import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../application/store/eventsSlice";
import { updateSelectionSuccess } from "../../../application/store/selectionsSlice";
import marketGroupConfig from "../../config/marketGroup.config";

const useEvents = (num) => new Array(num).fill(null);

const randomOdds = () => {
	const precision = 100;
	const random =
		Math.floor(
			Math.random() * (10 * precision - 1 * precision) + 1 * precision
		) /
		(1 * precision);

	return random.toFixed(2);
};

const useEventsTable = () => {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.events);

	useEffect(() => {
		dispatch(getEvents());

		const oddsChange1 = setInterval(() => {
			dispatch(
				updateSelectionSuccess({
					selectionId: "28067828:1::1",
					odds: randomOdds(),
				})
			);
		}, 3000);

		const oddsChange2 = setInterval(() => {
			dispatch(
				updateSelectionSuccess({
					selectionId: "28067828:90:total=1.5:12",
					odds: randomOdds(),
				})
			);
		}, 5000);

		const oddsChange3 = setInterval(() => {
			dispatch(
				updateSelectionSuccess({
					selectionId: "28067828:18:total=4:12",
					odds: randomOdds(),
				})
			);
		}, 7000);

		const oddsChange4 = setInterval(() => {
			dispatch(
				updateSelectionSuccess({
					selectionId: "28067828:18:total=2.5:13",
					odds: randomOdds(),
				})
			);
		}, 9000);

		return () => {
			clearInterval(oddsChange1);
			clearInterval(oddsChange2);
			clearInterval(oddsChange3);
			clearInterval(oddsChange4);
		};
	}, [dispatch]);

	return {
		events: Object.values(events),
		marketGroupConfig,
	};
};

export { useEvents, useEventsTable };
