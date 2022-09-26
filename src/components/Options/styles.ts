import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  options: {
    flexDirection: "row",
    margimBottom: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: theme.fonts.medium,
    marginBottom: 32,
    fontSize: 20,
    color: theme.colors.text_primary.light,
  },
});
