import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View,
  Pressable,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import * as Notifications from "expo-notifications";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function LocalNotification() {
  useFocusEffect(
    useCallback(() => {
      const checkPermissions = async () => {
        const settings = await Notifications.getPermissionsAsync();
        if (
          !settings.granted ||
          settings.ios?.status !==
            Notifications.IosAuthorizationStatus.PROVISIONAL
        ) {
          await Notifications.requestPermissionsAsync({
            ios: {
              allowAlert: true,
              allowBadge: true,
              allowSound: true,
            },
          });
        }
      };

      checkPermissions();
    }, [])
  );

  const handleNotification = useCallback(async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notification Title",
        body: "Here is the notification body",
      },
      trigger: null,
    });
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Notification</ThemedText>
      </ThemedView>
      <Pressable onPress={handleNotification} style={styles.button}>
        <Text>Trigger Notification</Text>
      </Pressable>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    backgroundColor: "#add8e6",
    borderRadius: 8,
    padding: 16,
    alignSelf: "flex-start",
  },
});
