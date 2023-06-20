import { TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useViewStore from "../../../stores/view";

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
import { AllShoesData } from "../../../services/allshoes";
import useFavoriteStore from "../../../stores/favorites";

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
  const [isFavorite, setIsFavorite]= useState<boolean>(false);
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
  const atCart = useCartStore(state => state.atCart);
  const removingAdorables = useFavoriteStore(state => state.removeFromAdorables);
  const addingAdorables = useFavoriteStore(state => state.addToAdorables);
  const adorables = useFavoriteStore(state => state.favoriteSneakers);
  

  useEffect(() => {
    const fetchData =  async ()  => {
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

  useEffect(() => {
    const isFav = adorables.find((sneaker: any) => sneaker.id === sneakerData.id);
    console.log(isFav, sneakerData.id)
    setIsFavorite(!!isFav);
  }, [adorables, sneakerData.id]);
  

  const { width, height } = useWindowDimensions();

  const handleSelectedNumber = (select: any) => {
    const number = Math.round(select);
    setSneakerData({...sneakerData, selectedNumber: number})
  }

  const handleQuantityAndPrice = (object: any) => {
    setSneakerData({...sneakerData, cart_price: object.price, cart_quantity: object.quantity})
  }

  const cartStore = useCartStore(state => state.addToCart);
  const atCartItems = useCartStore(state => state.atCart);
  const updateItemCart = useCartStore(state => state.updateItemCart)

  const handleCartItems  = () => {
    if(atCartItems.some((item:any) => item.id === sneakerData.id)){
      updateItemCart(sneakerData.id, sneakerData.cart_quantity)
      return
    }
    cartStore(sneakerData)
  }
  
  const handleFavItem = (isFavorite : boolean) => {
    
    if(isFavorite){
      if(adorables.length < 1){
        return
      }
      removingAdorables(sneakerData.id);
      return
    }

    addingAdorables(sneakerData);
 
  }

 
  return (
    <View style={{backgroundColor: "#f5f5f5",width: width,height: height,position: "relative",flex: 1,}}>
      <Link href="../(tabs)" style={{position: "relative",zIndex: 4,top: height * 0.07,left: width * 0.03,width: 100}}>
        <Icon name={"chevron-left"} size={40} style={{opacity: 0.7}}/>
      </Link>
      <LikeAndCartLabel isFavorite={isFavorite} atCartLength={atCart.length} containRef={true} href={'/cart'} like={false}  iconName={"cart-outline"} top={height * 0.075} right={width * 0.20}/>
      <LikeAndCartLabel isFavorite={isFavorite} isFav={handleFavItem} containRef={false} like={true} iconName={"cards-heart-outline"} sameRef={"cards-heart-outline"} variantIcon={'cards-heart'} top={height * 0.06} right={width * 0.05} href={'/adorables'}/>
      <Image source={sneakerData.image} style={{width: width, height: height / 2 }}/>
      <Padding>
          <View style={{flex: 0.3,justifyContent:'center'}}>
            <SneakerName style={{fontSize:RFValue(18)}}>{sneakerData.name}</SneakerName>
          </View>
          <View style={{flex: 1,justifyContent:'center'}}>
            <SelectOption headerText="Selecione o tamanho" refresh={currentSneakerIdToFetch} sendDataToParent={handleSelectedNumber}/>
            <QuantityPriceComponent price={sneakerData.price ? Math.round(sneakerData.price) : '-'} sendDataToParent={handleQuantityAndPrice}/>
          </View>
          <View style={{flex: 0.6, justifyContent:'center'}}>
            <CustomButton href="/cart"  widthButton={width * 0.9} onPress={()=>handleCartItems()} text={"Adicionar ao Carrinho"} background={"#161616"}/>
          </View>
      </Padding>
    </View>
  );
}
