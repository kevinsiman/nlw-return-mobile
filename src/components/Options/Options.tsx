import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Option } from "../Option/Option";
import { Footer } from "../Footer/Footer";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Value } from "react-native-reanimated";

export const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} image={value.image} title={value.title}></Option>
        ))}
      </View>
      <Footer />
    </View>
  );
};
