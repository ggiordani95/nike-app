import { View, Text, Image } from 'react-native'
import React from 'react'
import useCartStore from '../../../stores/cart';
import { FlatList } from 'react-native-gesture-handler';


export default function index() {
  const atCart = useCartStore(state => state.atCart);

  console.log(atCart);
  
  return (
    <View style={{flex: 1}}>
    
      <FlatList data={atCart} renderItem={({item}:any)=>(
      <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', backgroundColor:'#f8f8f8'}}>
        <Text style={{maxWidth:180}}> {item.cart_quantity}</Text>
        <Text style={{maxWidth:180}}> {item.name}</Text>
        <Image source={{ uri: item.image }} style={{height: 90, width:90}}/>
        
      </View>
      )}/>
    </View>
  )
}