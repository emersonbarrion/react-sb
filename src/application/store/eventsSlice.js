import { createSlice } from "@reduxjs/toolkit";
import * as sportsbookApi from "../../infrastructure/services/api";
import { getSelectionsSuccess } from "./selectionsSlice";
import { getMarketGroupsSuccess } from "./marketGroupsSlice";
import { getMarketsSuccess } from "./marketsSlice";

export const eventsSlice = createSlice({
	name: "events",
	initialState: {},
	reducers: {
		getEventsSuccess: (state, action) => {
			const fixtureUpdates = eventListUpdate(action.payload);
			return {
				...state,
				...fixtureUpdates,
			};
		},
	},
});

const eventListUpdate = (payload) => {
	return payload.reduce(
		(all, e) => ({
			...all,
			[e.fixtureId]: {
				fixtureId: e.fixtureId,
				sportName: e.sportName,
				leagueName: e.leagueName,
				fixtureName: e.fixtureName,
				fixtureStatusId: e.fixtureStatusId,
				fixtureStatusName: e.fixtureStatusName,
				markets: e.markets.map((m) => m.marketId),
			},
		}),
		{}
	);
};

// Thunk
export const getEvents = () => {
	return (dispatch) => {
		return sportsbookApi
			.getFixtures()
			.then((fixtures) => {
				dispatch(getEventsSuccess(fixtures));
				dispatch(
					getMarketGroupsSuccess(
						fixtures.map((f) => f.markets).flat()
					)
				);
				dispatch(
					getMarketsSuccess(fixtures.map((f) => f.markets).flat())
				);

				dispatch(
					getSelectionsSuccess(
						fixtures
							.map((f) => f.markets)
							.flat()
							.map((m) => m.selections)
							.flat()
					)
				);

				// dispatch(
				// 	getSelectionsSuccess({
				// 		1: { label: "Team A", odds: 1.65, status: "Open" },
				// 		2: { label: "Draw", odds: 2.45, status: "Open" },
				// 		3: { label: "Team B", odds: 12.5, status: "Open" },
				// 	})
				// );
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const { getEventsSuccess } = eventsSlice.actions;
export default eventsSlice.reducer;
