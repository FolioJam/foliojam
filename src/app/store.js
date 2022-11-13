import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./reducerSlices/example";

export default configureStore({
    reducer: {
        // add reducer slices
        // this will combine all reducers in a single one
        exampleReducer: exampleSlice
    }
})