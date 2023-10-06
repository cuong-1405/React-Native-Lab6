import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  return <MyPicker />;
}

const MyPicker = () => {
  const [selectedValue, setSelectedValue] = useState("java"); // Giá trị mặc định
  const thongBao = (itemValue) => {
    setSelectedValue(itemValue);
    // Alert.alert("Bạn đã chọn", itemValue);
    Alert.alert("Bạn đã chọn ", itemValue);
  };
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => thongBao(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="JavaScript" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C#" value="csharp" />
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    backgroundColor: "aqua",
    width: 400, // Điều chỉnh độ rộng của Picker tùy ý
  },
});
