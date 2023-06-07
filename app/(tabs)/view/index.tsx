import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import useViewStore from '../../../stores/view'
import { AllShoesData } from '../../../services/allshoes';
import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
import { Padding, SneakerName, SneakerPrice, SneakerSubPrice } from './styles';

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
  })


  useEffect(()=>{

    const fetchData = async () => {
        setIsLoading(true);
        try{
            if(currentSneakerIdToFetch){
                const fetchedSneakerData:any = await AllShoesData(true, currentSneakerIdToFetch);
                setSneakerData(fetchedSneakerData);
                console.log(fetchedSneakerData);
            }
        } catch (error){
            console.log(error);
        } finally{
            setIsLoading(false);
        }
    }
    fetchData();
  },[currentSneakerIdToFetch])


  const { width, height } = useWindowDimensions();

  return (
    <View style={{backgroundColor:"#fafafa" ,width: width, height: height}}>
        <Image source={sneakerData.image} style={{width: width, height: height / 3}}/>
        <Padding>
            <SneakerName>{sneakerData.name}</SneakerName>
            {sneakerData.price &&
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <SneakerPrice>R$ {sneakerData.price.toString()}</SneakerPrice>
                    <SneakerSubPrice>ou 10x de R${Math.floor(sneakerData.price / 10).toString()},99</SneakerSubPrice>
                </View>
            }
            <Text>{sneakerData.desc}</Text>
        </Padding>
    </View>
  )
}