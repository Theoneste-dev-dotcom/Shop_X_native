import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <View>
      <TextInput {...props} style={styles.inputField} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    marginBottom: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    fontSize: 16,
    color: Colors.black,
    width: 300,
  },
});
