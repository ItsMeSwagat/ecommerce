import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:6000/register", user)
      .then((res) => {
        console.log(res);
        Alert.alert("Registration Successfull");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        Alert.alert("Registration Error");
        console.log("Registration Failed", err);
      });
  };

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
            Register to Your Account
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
            <Entypo name="user" size={24} color="black" />
            <TextInput
              value={name}
              onChange={(text) => setName(text)}
              style={{ fontSize: 18, marginVertical: 5, width: 300 }}
              placeholder="Enter Your Name"
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
            <MaterialIcons name="email" size={24} color="black" />
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
            onPress={() => handleRegister()}
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
              REGISTER NOW
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
          <Text style={{ fontSize: 16 }}>Already have an account?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Login Now</Text>
          </Pressable>
        </View>
        <View>
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
