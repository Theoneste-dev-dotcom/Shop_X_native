import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ProductType } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {
  item: ProductType;
};
const width = Dimensions.get("window").width - 40

const ProductItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.images[0] }} style={styles.imagePro} />
      <TouchableOpacity style={styles.bookmarckBtn}>
        <Ionicons
        name='heart-outline'
        size={22}
        color={Colors.black}
        />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>
           ${item.price}
        </Text>
       <View style={styles.ratingWrapper}>
            <Ionicons
            name="star"
            size={20}
            color={"#D4AA37"}
            />
            <Text style={styles.rating}>
                4.7
            </Text>
      
       </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    container:{
        width:width/2 -10

    },
  imagePro: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarckBtn: {
    position:'absolute',
    right:20,
    top:20,
    backgroundColor:'rgba(255, 255, 255, 0.6)',
    padding:5,
    borderRadius:30
  },
  title: {
    fontSize:14,
    fontWeight:'600',
    color:Colors.black,
    letterSpacing:1.1
  },
  price: {
    fontSize:16,
    fontWeight:'700',
    color:Colors.primary

  },
  productInfo: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:12
  },
  rating:{
    fontSize:16,
    color:Colors.gray

  },
  ratingWrapper:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  }
});
