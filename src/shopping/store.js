import {configureStore} from '@reduxjs/toolkit'
import postReducer from './admin/PostsSlice'

import storage from 'redux-persist/lib/storage'
import {
        persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      } from 'redux-persist'
const persistConfig = {
key: 'root',
storage,
}
const persistedReducer = persistReducer(persistConfig, postReducer)
export const store = configureStore(
{
reducer:{
        post: persistedReducer,
        },
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
serializableCheck: {
ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
},
}),

})
export const persistor = persistStore(store)