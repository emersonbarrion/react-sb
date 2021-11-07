import { createSlice } from "@reduxjs/toolkit";

export const marketsSlice = createSlice({
	name: "market",
	initialState: {},
	reducers: {
		getMarketsSuccess: (state, action) => {
			const marketUpdates = marketListUpdate(action.payload);
			return {
				...state,
				...marketUpdates,
			};
		},
	},
});

const marketListUpdate = (payload) => {
	return payload.reduce(
		(all, e) => ({
			...all,
			[e.marketId]: {
				marketId: e.marketId,
				marketName: e.marketName,
				marketStatusIdName: e.marketStatusIdName,
				marketStatusName: e.marketStatusName,
				marketTemplateId: e.marketTemplateId,
				selections: e.selections.map((s) => s.selectionId),
			},
		}),
		{}
	);
};

export const { getMarketsSuccess } = marketsSlice.actions;
export default marketsSlice.reducer;
