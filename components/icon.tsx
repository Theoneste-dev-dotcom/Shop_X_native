import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const icons = {
    index: ({color} : {color: string}) => (
        <Ionicons name='home-outline' size={22} color={color} />   
    ),
    explore: ({color} : {color: string}) => (
        <Ionicons name='search-outline' size={22} color={color} />   
    ),
    notifications: ({color} : {color: string}) => (
        <Ionicons name='notifications-outline' size={22} color={color} />   
    ),
    profile: ({color} : {color: string}) => (
        <Image source={{url :"https://something"}}/>
    ),
    cart: ({color} : {color: string}) => (
        <Ionicons name='cart-outline' size={22} color={color} />   
    ),
}

const styles = StyleSheet.create({
    userImage: {
        height:20,
        width:20,
    }

})