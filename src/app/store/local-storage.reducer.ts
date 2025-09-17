import { localStorageSync } from "ngrx-store-localstorage";

export function localStorageSyncReducer(reducer: any) {
  return localStorageSync({
    keys: ['events'],
    rehydrate: true, 
  })(reducer);
}