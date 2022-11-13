import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
    name: "example",
    initialState: 0,
    reducers: {
        // keys are actions which can be dispatched

        /* 
        * increment: (state, data) => {
        *     state.count++
        * } 
        */
    }
})

// exporting actions
// export const {increment} = exampleSlice.actions

// export reducer
export default exampleSlice.reducer
