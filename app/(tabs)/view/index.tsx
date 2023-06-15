import { TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useViewStore from "../../../stores/view";
import { AllShoesData } from "../../../services/allshoes";
import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";
import {
  Padding,
  SneakerName,
} from "./styles";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../../../components/CustomButton";
import QuantityPriceComponent from "../../../components/QuantityPriceComponent";
import SelectOption from "../../../components/SelectOption";
import { RFValue } from "react-native-responsive-fontsize";
import LikeAndCartLabel from "../../../components/LikeAndCartLabel";
import useCartStore from "../../../stores/cart";



export interface ISneaker {
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
  const [sneakerData, setSneakerData] = useState<ISneaker>({
    id: null,
    name: null,
    desc: null,
    image: null,
    price: null,
    selectedNumber: 39,
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

  const cartStore = useCartStore(state => state.addToCart);


  return (
    <View style={{backgroundColor: "#f5f5f5",width: width,height: height,position: "relative",flex: 1,}}>
      <Link href="../(tabs)" style={{position: "relative",zIndex: 4,top: height * 0.07,left: width * 0.03,width: 100}}>
        <Icon name={"chevron-left"} size={40} style={{opacity: 0.7}}/>
      </Link>
      <LikeAndCartLabel like={false} onPress={()=> ''} iconName={"cart-outline"} top={height * 0.06} right={width * 0.20}/>
      <LikeAndCartLabel like={true} onPress={()=> ''} iconName={"cards-heart-outline"} sameRef={"cards-heart-outline"} variantIcon={'cards-heart'}  top={height * 0.06} right={width * 0.05}/>
      <Image source={sneakerData.image} style={{width: width, height: height / 2 }}/>
      <Padding>
          <View style={{flex: 0.4,justifyContent:'center'}}>
            <SneakerName style={{fontSize:RFValue(18)}}>{sneakerData.name}</SneakerName>
          </View>
          <View style={{flex: 1,justifyContent:'center'}}>
            <SelectOption headerText="Selecione o tamanho" refresh={currentSneakerIdToFetch} sendDataToParent={handleSelectedNumber}/>
            <QuantityPriceComponent price={sneakerData.price ? sneakerData.price : '-'} sendDataToParent={handleQuantityAndPrice}/>
          </View>
          <View style={{flex: 0.4, justifyContent:'center'}}>
            <CustomButton href="/cart" onPress={()=>cartStore(sneakerData)} text={"Adicionar ao Carrinho"} background={"#161616"}/>
          </View>
      </Padding>
    </View>
  );
}
