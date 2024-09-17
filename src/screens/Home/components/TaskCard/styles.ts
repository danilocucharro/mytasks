import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContent: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#262626",
    alignItems: "center",
    padding: 12,
    borderRadius: 6,
    gap: 8
  },
  txtTaskDescription: {
    flex: 1,
    fontSize: 14,
    color: "#F2F2F2",
    flexWrap: "wrap"
  }
})