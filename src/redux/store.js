import { configureStore } from '@reduxjs/toolkit';
import picnicReducer from './picnicReducer';


const store = configureStore({
    reducer: picnicReducer})






export default store 