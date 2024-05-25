import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gold"
      }}
    >
      <Text style={{fontSize: 24}}>My name is <Text style={{fontWeight: "bold"}}>Isaiah</Text></Text>
    </View>
  );
}
