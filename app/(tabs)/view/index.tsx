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


interface ISneaker {
  id: number | null;
  name: string | null;
  desc: string | null;
  image: string | null;
  price: number | null;
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
          top: height * 0.07,
          right: width * 0.07,
          backgroundColor: "#181818",
          borderRadius: 40,
        }}
      >
        <Icon name={"cards-heart-outline"} size={24} color={"#f5f5f5"}></Icon>
      </Pressable>
      <Image
        source={sneakerData.image}
        style={{ width: width, height: height / 2 }}
      />
      <Padding>
          <View style={{flex: 0.5,justifyContent:'center', marginTop: 10}}>
            <SneakerName >{sneakerData.name}</SneakerName>
          </View>
          
       
          <SelectOption headerText="Selecione o tamanho"/>
          
          <QuantityPriceComponent price={sneakerData.price ? sneakerData.price : '0'}/>
          <View style={{flex: 1, justifyContent:'center'}}>
            
            <CustomButton
                onPress={() => ""}
                text={"Comprar"}
                background={"#181818"}
              />
          </View>
        
        
        
      </Padding>
    </View>
  );
}
