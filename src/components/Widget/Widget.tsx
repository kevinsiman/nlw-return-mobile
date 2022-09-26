import React, { useRef } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ChatTeardropDots } from "phosphor-react-native";
import { theme } from "../../theme";

import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";

import { Options } from "../Options/Options";

const Widget = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
      >
        <Options />
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Widget);
