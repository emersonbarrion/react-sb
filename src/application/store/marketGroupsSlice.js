import { createSlice } from "@reduxjs/toolkit";

export const marketGroupsSlice = createSlice({
	name: "marketGroup",
	initialState: {},
	reducers: {
		getMarketGroupsSuccess: (state, action) => {
			return marketGroupListUpdate(action.payload);
		},
	},
});

const marketGroupListUpdate = (payload) => {
	return payload.reduce((all, e) => {
		return {
			...all,
			[e.marketTemplateId]: all[e.marketTemplateId]
				? [
						...all[e.marketTemplateId].filter(
							(a) => a !== e.marketId
						),
						e.marketId,
				  ]
				: [e.marketId],
		};
	}, {});
};

export const { getMarketGroupsSuccess } = marketGroupsSlice.actions;
export default marketGroupsSlice.reducer;
