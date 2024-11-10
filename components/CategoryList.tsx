import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CategoryType, ProductType } from '@/types/types'
import ProductItem from './ProductItem'
import { Colors } from '@/constants/Colors'
import CategoryItem from './CategoryItem'

type Props = {
    categories:CategoryType[];
}

const CategoryList = ({categories}: Props) => {
  return (
    <>
      <View style={styles.container}>
       <View style={styles.titleWrapper}>
       <Text style={styles.title}> Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleTxt}>See All</Text>
        </TouchableOpacity>
       </View>
      
    <FlatList 
      numColumns={2}
     columnWrapperStyle={{justifyContent:'space-between', marginBottom:20}}
      data={categories}
      keyExtractor={(item)=> item.id.toString()} 
      renderItem={({index, item}) => (
   <CategoryItem item={item}/>
  )}
  
      />
       </View>
      </>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title:{
        fontSize:16,
        fontWeight:"600",
        letterSpacing:0.6,
        color:Colors.black
      },
      titleWrapper: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
      },
      titleTxt:{
        fontSize:16,
        fontWeight:"600",
        letterSpacing:0.6,
        color:Colors.black
      },
})