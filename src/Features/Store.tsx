import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";

const Store = configureStore({
    reducer:DataSlice
})

export default Store