import { View, Text, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import useCartStore from '../../../stores/cart';
import { FlatList } from 'react-native-gesture-handler';
import { ISneaker } from '../view';
import { RFValue } from 'react-native-responsive-fontsize';


export default function index() {
  const atCart = useCartStore(state => state.atCart);

  const [sneakerData, setSneakerData] = useState<ISneaker>({
    id: null,
    name: null,
    desc: null,
    image: null,
    price: null,
    selectedNumber: null,
    cart_price: null,
    cart_quantity: 0,
  });
  

  const {height, width} = useWindowDimensions();

  return (
    <View style={{flex: 1, alignItems:'center', backgroundColor:'#f3f3f3'}}>
      <FlatList data={atCart} renderItem={({item,index}:any)=>(
      <View style={{flexDirection:'row',height:height / 6, width: width * 0.9, justifyContent:'space-evenly',alignItems:'center', backgroundColor:'#f3f3f3',}} key={index}>
        <Image source={{ uri: item.image }} style={{height: 70, width:70, borderWidth:1, borderColor:'#e7e7e7', borderRadius: 14}}/>
        <View style={{flexDirection:'column', alignItems: 'flex-start',justifyContent:'flex-start', gap: 4,width: width * 0.5}}>
          <Text>{item.name}</Text>
          <Text style={{fontWeight:'bold'}}>R$ {Math.round(item.price * item.cart_quantity)}</Text>
        </View>
          <View style={{backgroundColor:'#eeeeee',borderRadius:12, padding: 4,paddingRight:10, height: '40%', justifyContent:"center",alignItems:'center'}}>
            <Text style={{maxWidth:180}}> {item.cart_quantity} un</Text>
          </View>
      </View>
      )}
      
      />
    </View>
  )
}