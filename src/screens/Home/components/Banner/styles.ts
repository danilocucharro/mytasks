import { StatusBar } from "react-native"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 173,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight
  }
})