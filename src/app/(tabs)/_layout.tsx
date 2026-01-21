import { HapticTab } from "@/src/components/haptic-tab";
import { Catalog, Chat, HomeIcon, ShoppingCart } from "@/src/components/Icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function TabLayout() {
  const userImageUrl = "https://i.pravatar.cc/150?img=47";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#090A0A",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          elevation: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="(catalog)"
        options={{
          href: "/(tabs)/(catalog)",
          tabBarIcon: ({ color }) => <Catalog color={color} />,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => <Chat color={color} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => <ShoppingCart color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{ uri: userImageUrl }}
              className="w-7 h-7 rounded-full"
            />
          ),
        }}
      />
    </Tabs>
  );
}
