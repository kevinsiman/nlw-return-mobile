import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from "react-native";
import { styles } from "./styles";

interface TouchableProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export const Option = ({ title, image, ...rest }: TouchableProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
