import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(20,1) //for every 20 messages, it will delete the one from the beginning
            state.messages.unshift(action.payload); //unshift-pushes from the beginning
        },
    },
})

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;