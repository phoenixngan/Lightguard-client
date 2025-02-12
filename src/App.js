import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
//import { wrap } from "module";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          top: "13%",
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
        }}
      >
        Lightguard
      </Text>

      <Text
        style={{
          top: "17.5%",
          fontFamily: "Menlo",
          fontSize: 16,
          color: "white",
        }}
      >
        Log in to get started!
      </Text>

      <StatusBar style="auto" />

      <Input
        inputStyle={{
          color: "white",
          paddingLeft: "2%",
          fontFamily: "Menlo",
          fontSize: 13,
          paddingTop: "8%",
        }}
        containerStyle={{ width: "80%", top: "7%" }}
        placeholder="Email"
        leftIconContainerStyle={{
          paddingTop: "7%",
          paddingLeft: "5%",
        }}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "envelope",
        }}
      />
      <Input
        secureTextEntry={true}
        inputStyle={{
          color: "white",
          paddingLeft: "3%",
          fontFamily: "Menlo",
          fontSize: 13,
          paddingTop: "7%",
        }}
        containerStyle={{ width: "80%", bottom: "8%" }}
        placeholder="Password"
        leftIconContainerStyle={{
          paddingTop: "7%",
          paddingLeft: "5%",
        }}
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
      />
      <Button
        title="Let's go!"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          bottom: "2%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
      <Text
        style={{
          //position: "absolute",
          bottom: "11%",
          fontFamily: "Menlo",
          fontSize: 13,
          color: "#FFFFFF",
        }}
      >
        No account?{" "}
        <Text style={{ color: "#F9CB40", textDecorationLine: "underline" }}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    changeDirection: "inherit",
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
