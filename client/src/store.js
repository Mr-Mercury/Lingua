import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './features/messageSlice';

export default configureStore({
    reducer:{
        message: messageReducer
    },
}) 