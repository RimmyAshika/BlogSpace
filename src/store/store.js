import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        // todo : need to add more slices here for posts
    },
});

export default store;
