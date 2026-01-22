import { Stack } from "expo-router";

export default function NotificationsLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                presentation: "modal",
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}
