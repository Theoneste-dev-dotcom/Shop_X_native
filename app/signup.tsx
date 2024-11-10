import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import SocialLoginButton from "@/components/SocialLoginButton";

type Props = {};

const SignUpScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => {
            return (
              <TouchableOpacity style={styles.x} onPress={() => router.back()}>
                <Ionicons name="close" size={20} color={Colors.black} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Create Account</Text>

          <InputField
            placeholder="Email address"
            placeholderTextColor={Colors.gray}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <InputField
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <InputField
            placeholder="Confirm Password"
            placeholderTextColor={Colors.gray}
            autoCapitalize="none"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Create an Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <SocialLoginButton emailHref={"/signin"} />
        <Text style={styles.loginTxt}>
          Already have an account?{" "}
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </Text>
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    marginBottom: 50,
    backgroundColor: Colors.background,
  },

  x: {
    marginLeft: 10,
    marginRight: 50,
    height: 20,
    width: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    width: 300,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginTxt: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider: {
    borderTopColor: Colors.black,
    borderTopWidth: 10,
    marginVertical: 20,
  },
});
