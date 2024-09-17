import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    backgroundColor: "#1A1A1A"
  },
  formTaskContent: {
    width: "100%",
    flexDirection: "row",
    height: "auto",
    marginTop: -34,
    marginBottom: 36,
    gap: 4,
  },
  inputTask: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 18,
    borderRadius: 6,
    fontSize: 16,
    color: "#F2F2F2"
  },
  btnAddTask: {
    backgroundColor: "#1E6F9F",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txtAddTask: {
    color: "#F2F2F2",
    fontWeight: "bold",
    fontSize: 24
  },
  infoTasks: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  progressContent: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center"
  },
  txtCreatedTasks: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  txtFinishedTasks: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8284FA"
  },
  txtCountTaskProgress: {
    color: "#F2F2F2",
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    borderRadius: 999,
    fontSize: 14,
    fontWeight: "bold"
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "#333333",
    marginTop: 12,
    borderRadius: 999
  },
  taskListEmpty: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  txtEmptyAlert: {
    textAlign: "center",
    fontSize: 14,
    color: "#808080"
  },
  txtEmptyAlertBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080"
  }
})