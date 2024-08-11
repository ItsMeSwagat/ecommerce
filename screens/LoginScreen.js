import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          style={{ width: 200, height: 100 }}
          source={{
            uri: "https://imgs.search.brave.com/8IpOqcqNRXc-08en11EmP8ryL9KNyg2xsx-Ju1tUkb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE5Lzc2/Ni8yNDAvbm9uXzJ4/L2FtYXpvbi1sb2dv/LWFtYXpvbi1pY29u/LXRyYW5zcGFyZW50/LWZyZWUtcG5nLnBu/Zw",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20 }}>
            Login to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#f5f5f5",
              padding: 8,
              borderRadius: 5,
              borderWidth: 2,
            }}
          >
            <MaterialIcons name="email" size={25} color="black" />
            <TextInput
              value={email}
              onChange={(text) => setEmail(text)}
              style={{ fontSize: 18, marginVertical: 5, width: 300 }}
              placeholder="Enter Your Email"
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#f5f5f5",
              padding: 8,
              borderRadius: 5,
              borderWidth: 2,
            }}
          >
            <MaterialIcons name="password" size={24} color="black" />
            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{ fontSize: 18, marginVertical: 5, width: 300 }}
              placeholder="Enter Your Password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            gap: 5,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#000", fontSize: 16 }}>Keep me logged in</Text>
          <Text style={{ color: "#FF9900", fontSize: 16 }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <Pressable
            style={{
              width: 300,
              backgroundColor: "#FF9900",
              borderRadius: 5,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              LOGIN
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
