import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import articlesSlice from "./slices/articlesSlice";
import articleSlice from "./slices/articleSlice";

export const store = configureStore({
    reducer: {
        darkMode : darkModeReducer,
        articles : articlesSlice,
        article: articleSlice,
    }
});