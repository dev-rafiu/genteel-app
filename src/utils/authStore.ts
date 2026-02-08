import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const isWeb = Platform.OS === "web";

type UsersState = {
  hasCompletedOnboarding: boolean;
  isloggedin: boolean;
  _hasHydrated: boolean;
  logIn: () => void;
  logOut: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  setHasHydrated: (value: boolean) => void;
};

export const useAuthStore = create(
  persist<UsersState>(
    (set) => ({
      hasCompletedOnboarding: false,
      isloggedin: false,
      _hasHydrated: false,

      logIn: () =>
        set((state) => {
          return {
            ...state,
            isloggedin: true,
          };
        }),

      logOut: () =>
        set((state) => {
          return {
            ...state,
            isloggedin: false,
          };
        }),

      completeOnboarding: () =>
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding: true,
          };
        }),

      resetOnboarding: () =>
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding: false,
          };
        }),

      setHasHydrated: (value: boolean) => {
        set((state) => {
          return {
            ...state,
            _hasHydrated: value,
          };
        });
      },
    }),
    {
      name: "auth-storage",
      storage: isWeb
        ? createJSONStorage(() => localStorage)
        : createJSONStorage(() => ({
            setItem: (key: string, value: string) =>
              SecureStore.setItemAsync(key, value),
            getItem: (key: string) => SecureStore.getItemAsync(key),
            removeItem: (key: string) => SecureStore.deleteItemAsync(key),
          })),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);
