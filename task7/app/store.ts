import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { JobApi } from "./service/Datas";

export const store = configureStore({
  reducer: {
    [JobApi.reducerPath]: JobApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(JobApi.middleware);
  },
});


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
