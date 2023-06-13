import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useViewStore from "../../../stores/view";
import { AllShoesData } from "../../../services/allshoes";
import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";
import {
  Padding,
  SneakerName,
  ViewHeaderSection,
} from "./styles";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../../../components/CustomButton";
import QuantityPriceComponent from "../../../components/QuantityPriceComponent";
import SelectOption from "../../../components/SelectOption";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";


interface ISneaker {
  id: number | null;
  name: string | null;
  desc: string | null;
  image: string | null;
  price: number | null;
  selectedNumber: number | null;
  cart_price: number | null;
  cart_quantity: number;
}

export default function index() {
  const { currentSneakerIdToFetch } = useViewStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [likeIsDisplayed,setLikeIsDisplayed] = useState<boolean>(false);
  const [cartIsDisplayed, setCartIsDisplayed] = useState<boolean>(false);
  const [sneakerData, setSneakerData] = useState<ISneaker>({
    id: null,
    name: null,
    desc: null,
    image: null,
    price: null,
    selectedNumber: null,
    cart_price: null,
    cart_quantity: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (currentSneakerIdToFetch) {
          const fetchedSneakerData: any = await AllShoesData(
            true,
            currentSneakerIdToFetch
          );
          setSneakerData(fetchedSneakerData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentSneakerIdToFetch]);

  const { width, height } = useWindowDimensions();

  const handleSelectedNumber = (select: any) => {
    const number = Math.round(select);
    setSneakerData({...sneakerData, selectedNumber: number})
  }

  const handleQuantityAndPrice = (object: any) => {
    setSneakerData({...sneakerData, cart_price: object.price, cart_quantity: object.quantity})
  }

  const likeOpacity = useSharedValue(0.5);
  const likeZoom = useSharedValue(1);

  const likeAnimation = useAnimatedStyle(()=>{
    return {
        opacity: likeOpacity.value,
        transform: [{scale: likeZoom.value}]
    }
  })

  const handleLikes = () => {
    if(!likeIsDisplayed){
      likeOpacity.value = withTiming(1, { duration: 700 });
      likeZoom.value = withTiming(1.3, { duration: 200 }, ()=>{
        likeZoom.value = withSpring(1);
      });
      setLikeIsDisplayed(true);
        return
    }
    likeOpacity.value = withTiming(0.5, { duration: 700 });
      likeZoom.value = withTiming(1.3, { duration: 200 }, ()=>{
        likeZoom.value = withSpring(1);
      });
        setLikeIsDisplayed(false);
  }
  const cartOpacity = useSharedValue(0.5);
  const cartZoom = useSharedValue(1);
  const cartAnimation = useAnimatedStyle(()=>{
    return {
        opacity: cartOpacity.value,
        transform: [{scale: cartZoom.value}]
    }
  })


  const handleCart = () => {
    if(!cartIsDisplayed){
      cartOpacity.value = withTiming(1, { duration: 700 });
      cartZoom.value = withTiming(1.3, { duration: 200 }, ()=>{
        cartZoom.value = withSpring(1);
      });
        setCartIsDisplayed(true);
        return
    }
    cartOpacity.value = withTiming(0.5, { duration: 700 });
    cartZoom.value = withTiming(1.3, { duration: 200 }, ()=>{
      cartZoom.value = withSpring(1);
      });
        setCartIsDisplayed(false);
  }

  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        width: width,
        height: height,
        position: "relative",
        flex: 1,
       
      }}
    >
      <Link
        href="../(tabs)"
        style={{
          position: "absolute",
          zIndex: 4,
          top: height * 0.07,
          left: width * 0.03,
          width: 100,
        }}
      >
        <Icon name={"chevron-left"} size={40}></Icon>
      </Link>
      <Pressable
        style={{
          position: "absolute",
          padding: 10,
          zIndex: 4,
          top: height * 0.06,
          right: width * 0.20,
          borderRadius: 40,
        }}
        onPress={handleCart}
      >
        <Animated.View style={[cartAnimation]}>
          <Icon name={"cart-outline"} size={32} color={"#242424"}></Icon>
        </Animated.View>
      </Pressable>
      <Pressable
        style={{
          position: "absolute",
          padding: 10,
          zIndex: 4,
          top: height * 0.06,
          right: width * 0.05,
          borderRadius: 40,
          justifyContent:'center',
          alignItems:'center'
        }}
        onPress={handleLikes}
      >
       <Animated.View style={[likeAnimation]}>
         <Icon name={likeIsDisplayed ? 'cards-heart' : "cards-heart-outline"} size={32} color={ likeIsDisplayed ? 'red' : "#242424"}/>
       </Animated.View>
        

       
      </Pressable>
      <Image
        source={sneakerData.image}
        style={{ width: width, height: height / 2 }}
      />
      <Padding>
          <View style={{flex: 0.4,justifyContent:'center'}}>
            <SneakerName style={{fontSize:RFValue(18)}}>{sneakerData.name}</SneakerName>
          </View>
          <View style={{flex: 1,justifyContent:'center'}}>
            <SelectOption headerText="Selecione o tamanho" refresh={currentSneakerIdToFetch} sendDataToParent={handleSelectedNumber}/>
            <QuantityPriceComponent price={sneakerData.price ? sneakerData.price : '0'} sendDataToParent={handleQuantityAndPrice}/>
          </View>
          <View style={{flex: 0.4, justifyContent:'center'}}>
           
            <CustomButton
                onPress={() => ""}
                text={"Adicionar ao Carrinho"}
                background={"#161616"}
              />
              
          </View>
      </Padding>
    </View>
  );
}
