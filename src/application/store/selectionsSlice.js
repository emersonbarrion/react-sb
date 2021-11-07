import { createSlice } from "@reduxjs/toolkit";

export const selectionsSlice = createSlice({
	name: "selection",
	initialState: {},
	reducers: {
		updateSelectionSuccess: (state, action) => {
			return {
				...state,
				[action.payload.selectionId]: {
					...state[action.payload.selectionId],
					...action.payload,
				},
			};
		},
		getSelectionsSuccess: (state, action) => {
			const selectionUpdates = selectionListUpdate(action.payload);
			return {
				...state,
				...selectionUpdates,
			};
		},
	},
});

const selectionListUpdate = (payload) => {
	return payload.reduce(
		(all, e) => ({
			...all,
			[e.selectionId]: {
				selectionId: e.selectionId,
				selectionName: e.selectionName,
				odds: e.odds,
				isActive: e.isActive,
			},
		}),
		{}
	);
};

export const { getSelectionsSuccess, updateSelectionSuccess } =
	selectionsSlice.actions;
export default selectionsSlice.reducer;
