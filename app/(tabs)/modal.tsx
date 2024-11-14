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
import { Portal } from "@gorhom/portal";
import { useState } from "react";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

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
        <ThemedText type="title">Modal</ThemedText>
      </ThemedView>
      <Pressable onPress={() => setShowModal(true)} style={styles.button}>
        <Text>Show Modal</Text>
      </Pressable>
      <Portal hostName="Modal">
        <View style={StyleSheet.absoluteFill}>
          {showModal ? (
            <Animated.View
              entering={SlideInDown}
              exiting={SlideOutDown}
              style={styles.modalContainer}
            >
              <View style={styles.modal}>
                <Text>Modal content</Text>
                <Pressable onPress={() => setShowModal(false)}>
                  <View style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close Modal</Text>
                  </View>
                </Pressable>
              </View>
            </Animated.View>
          ) : null}
        </View>
      </Portal>
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    backgroundColor: "#add8e6",
    width: "100%",
    borderRadius: 8,
    padding: 16,
  },
  button: {
    backgroundColor: "#add8e6",
    borderRadius: 8,
    padding: 16,
    alignSelf: "flex-start",
  },
  closeButton: {
    backgroundColor: "#ff033e",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
