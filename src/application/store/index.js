import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./eventsSlice";
import marketGroupsSlice from "./marketGroupsSlice";
import marketsSlice from "./marketsSlice";
import selectionsSlice from "./selectionsSlice";

export default configureStore({
	reducer: {
		selections: selectionsSlice,
		events: eventsSlice,
		marketGroups: marketGroupsSlice,
		markets: marketsSlice,
	},
});
