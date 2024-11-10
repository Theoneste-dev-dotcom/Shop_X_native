import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ProductType } from "@/types/types";
import ProductItem from "./ProductItem";
import { Colors } from "@/constants/Colors";

type Props = {
  products: ProductType[];
};

const ProductList = ({ products }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
         
            <Text style={styles.title}> For You</Text>
            <TouchableOpacity>
              <Text style={styles.titleTxt}>See All</Text>
            </TouchableOpacity>
       
        </View>

        <FlatList
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
            paddingHorizontal:5,
            gap:10,
          }}
          data={products}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ index, item }) => <ProductItem item={item} />}
        />
      </View>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleWrapper: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems:"center",
    justifyContent:"space-between",
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:5,
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
});
