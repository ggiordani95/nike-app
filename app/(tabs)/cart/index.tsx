import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import useCartStore from '../../../stores/cart';
import { FlatList } from 'react-native-gesture-handler';
import { ISneaker } from '../view';
import { RFValue } from 'react-native-responsive-fontsize';
import logo from '../../../assets/nikewhite.png'
import CustomButton from '../../../components/CustomButton';
import { Padding } from '../view/styles';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import finished from '../../../assets/concluido.png'


export default function index() {

  const atCart = useCartStore(state => state.atCart);
  const removeAllAtCart = useCartStore(state => state.removeAllItems)
  const [totalPrice,setTotalPrice] = useState<number>(0);

  function totalPriceAtCart(){ 
      let totalPrice:number =  0;
      const total = atCart.map((item:any)=>{
          totalPrice += (item.price * item.cart_quantity);
      })
      setTotalPrice(totalPrice);
      return totalPrice
  }

  useEffect(()=>{
    totalPriceAtCart()
  })

  const {height, width} = useWindowDimensions();

  const BOTTOM_SHEET_HEIGHT = (height / 2.5);

  const bottomSheetShared = useSharedValue(BOTTOM_SHEET_HEIGHT)

  const bottomSheetStyle = useAnimatedStyle(()=>{
    return {
        transform: [{translateY: bottomSheetShared.value}]
    }
  })

  function openDrawerBuy() {
    zIndexBlur.value = 1
    opacityBlur.value = withTiming(1, {duration: 1000})
    bottomSheetShared.value = withTiming(0, {duration: 1000})
   
  }
  function closeDrawerBuy() {
    setTimeout(()=>{
      router.push('/(tabs)')
      removeAllAtCart()
    },500)
    
    zIndexBlur.value = -3
    opacityBlur.value = 0
    bottomSheetShared.value = withTiming(BOTTOM_SHEET_HEIGHT, {duration: 1000})
  }

  const zIndexBlur = useSharedValue(-3)
  const opacityBlur = useSharedValue(0)

  const backgroundBlurStyle = useAnimatedStyle(()=>{
    return {
        zIndex: zIndexBlur.value,
        opacity: opacityBlur.value
    }
  })

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
  
  const router = useRouter();

  return (
    <View style={{flex: 1, alignItems:'center', backgroundColor:'#f3f3f3', position:'relative'}}>
      <Animated.View style={[{position:'absolute', bottom:0, width: width, height:BOTTOM_SHEET_HEIGHT, backgroundColor:'#131313',zIndex:8, borderTopRightRadius: 14, borderTopLeftRadius:14,justifyContent:'center',alignItems:'center', borderColor:'#0f0f0f', borderTopWidth:1},bottomSheetStyle]}>
        <View style={{justifyContent:'center',alignItems:'center', gap:24}}>
          <Image source={finished} style={{height:60, width: 60}}/>
          <Text style={{fontSize:RFValue(18), fontWeight: '500', color: '#d3d3d3'}}>Compra Realizada com Sucesso!</Text>
        </View>
      </Animated.View>
      <Animated.View style={[backgroundBlurStyle,{ backgroundColor:'#131313be', height:'100%', width: '100%', position:`absolute`,}]}>
        <Pressable onPress={closeDrawerBuy} style={{height:'100%',width:'100%'}}></Pressable>
      </Animated.View>
      <View style={{height: height / 6, width: width,backgroundColor:'#131313', justifyContent:"center",alignItems:'center'}}>
        <Pressable onPress={() => router.back()} style={{position: "absolute",zIndex: 4,top: height * 0.07,left: width * 0.03,width: 100}}>
          <Icon name={"chevron-left"} size={40} style={{opacity: 0.7}} color="#d3d3d3"/>
        </Pressable>
        <Image source={logo} style={{height: 45, width: 45, top: 10}}/>
      </View>
      <FlatList data={atCart} renderItem={({item,index}:any)=>(
        <View style={{flexDirection:'row',height:height / 7, width: width * 0.9, justifyContent:'space-between',alignItems:'center', backgroundColor:'#f3f3f3',}} key={index}>
          <Image source={{ uri: item.image }} style={{height: 70, width:70, borderWidth:1, borderColor:'#e7e7e7', borderRadius: 14}}/>
          <View style={{flexDirection:'column', alignItems: 'flex-start',justifyContent:'flex-start', gap: 4,width: width * 0.5}}>
            <Text style={{fontSize:RFValue(12)}}>{item.name}</Text>
            <Text style={{fontSize:RFValue(14), fontWeight: '500'}}>R$ {Math.round(item.price * item.cart_quantity)}</Text>
          </View>
            <View style={{backgroundColor:'#eeeeee',borderRadius:12, padding: 4,paddingRight:10, height: '40%', justifyContent:"center",alignItems:'center'}}>
              <Text style={{maxWidth:180}}> {item.cart_quantity} un</Text>
            </View>
        </View>
        )}
        ListFooterComponent={<View style={{height: height * 0.2}}></View>}
        showsVerticalScrollIndicator={false}
      />
      <Padding style={{position:'absolute',bottom:0,justifyContent:'space-between', flexDirection:'row', alignItems:'center', width: '100%', height: height / 6}}>
        <View style={{flexDirection:'column', justifyContent:'center',alignItems:'flex-start',marginLeft:4, padding:12, gap: 4}}>
          <Text style={{fontSize: RFValue(14)}}>Valor Total:</Text>
          <Text style={{fontSize: RFValue(18),fontWeight: '500'}}>R$ {Math.round(totalPrice)}</Text>
        </View>
          <CustomButton onPress={openDrawerBuy} cart={true} widthButton={'100%'} href="/cart"  text={"Finalizar Compra"} background={"#161616"}/>
      </Padding>
    </View>
  )
}