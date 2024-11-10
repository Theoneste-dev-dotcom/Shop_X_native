import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Href, Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {
    emailHref: Href<String | Object>,
}

const SocialLoginButton = (props: Props) => {
    const {emailHref} = props
  return (
    <View style={styles.socialLoginWrapper}>
    <Animated.View entering={FadeInDown.delay(300).duration(500)}>
      <Link href={emailHref} asChild>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="mail-outline"
            size={20}
            color={Colors.black}
          />
          <Text style={styles.btnTxt}>Continue with Email</Text>
        </TouchableOpacity>
      </Link>
    </Animated.View>

    <Animated.View entering={FadeInDown.delay(700).duration(500)}>
      <TouchableOpacity style={styles.button}>
      <Ionicons name='logo-google' width={20} size={20} height={20}/>
        <Text style={styles.btnTxt}>Continue with Google</Text>
      </TouchableOpacity>
    </Animated.View>

    <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
      <TouchableOpacity style={styles.button}>
        <Ionicons
          name="logo-apple"
          size={20}
          color={Colors.black}
        />
        <Text style={styles.btnTxt}>Continue with Apple</Text>
      </TouchableOpacity>
    </Animated.View>
  </View>
  )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    socialLoginWrapper: {
        marginBottom: 20,
      },
      button: {
        flexDirection: "row", // Added for button layout
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjusted for visibility
        borderWidth:StyleSheet.hairlineWidth
    
      },
      btnTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
        marginLeft: 8, // Added for spacing
      },
})