import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.surface_secondary,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    marginTop: 8,
    color: theme.colors.text_primary.light,
  },
  image: {
    width: 40,
    height: 40,
  },
});
