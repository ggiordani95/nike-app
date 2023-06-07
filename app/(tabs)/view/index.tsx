import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import useViewStore from '../../../stores/view'
import { AllShoesData } from '../../../services/allshoes';
import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
import { Padding, SneakerName, SneakerPrice, SneakerSubPrice } from './styles';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={{backgroundColor:"#f3f3f3" ,width: width, height: height, position: 'relative'}}>
        <Link href="../(tabs)" style={{position: 'absolute', zIndex: 9, top: height * 0.06, left: width * 0.03}}><Icon name={'chevron-left'} size={40}></Icon></Link>
        <Image source={sneakerData.image} style={{width: width, height: height / 2}}/>
        <Padding style={{position: 'relative', top: -(height * 0.04)}}>
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