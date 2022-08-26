import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        inputValue:''
    },
    reducers:{
        setInputValue: (state, action) => {
            state.inputValue = action.payload.toLowerCase()
        }
    }
})

export const {setInputValue} = searchSlice.actions
export default searchSlice.reducer