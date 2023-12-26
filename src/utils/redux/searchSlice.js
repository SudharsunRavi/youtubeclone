import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        searchCache:(state,action)=>{
            return Object.assign(state, action.payload)
        },
    },
})

export const { searchCache } = searchSlice.actions

export default searchSlice.reducer