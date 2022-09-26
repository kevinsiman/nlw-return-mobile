import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  button: {
    minWidth: 48,
    width: "auto",
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: getBottomSpace() + 16,
    right: 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary.dark,
    width: 56,
    padding: 0,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
});
