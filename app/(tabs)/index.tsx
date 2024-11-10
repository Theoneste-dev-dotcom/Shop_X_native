import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryType, ProductType } from '@/types/types'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import ProductItem from '@/components/ProductItem'
import { Colors } from '@/constants/Colors'
import ProductList from '@/components/ProductList'

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const getProducts = async() => {
    const URL = `http://localhost:8080/products`
    const response = await axios.get(URL)
    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }
  const getCategories = async() => {
    const URL = `http://localhost:8080/products`
    const response = await axios.get(URL)
    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }

  const getSaleProducts = async() => {
    const URL = `http://localhost:8080/products`
    const response = await axios.get(URL)
    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }


  useEffect(()=> {
    getProducts()
    getCategories()
    //call the get the sale products 

  }, [])
  return (
    <>
    <Stack.Screen 
    options={{
      headerShown: true,
      header:() => <Header/>
    }}/> 
     
  <ProductList products={products}/>
  <ProductList categories={categories}/>
   
    </>
 
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 

})