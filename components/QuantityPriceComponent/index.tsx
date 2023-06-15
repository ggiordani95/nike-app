import { View, Text, useAnimatedValue } from 'react-native'
import { Circle, CircleGroup, Qtity, QuantityPriceSection, QuantityView, RowSpace, SneakerPrice, SneakerSubPrice, ViewHeaderSection } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const QuantityPriceComponent = ({price,sendDataToParent}: any) => {

  const [quantityItem, setQuantityItem] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number>(price);


  useEffect(() => {
    setCurrentPrice(price);
    setQuantityItem(1);
    sendDataToParent({price: currentPrice, quantity: quantityItem})
    return () => {
      
    }
  }, [price])
  
  function handleQuantity(addingItem: boolean){
    if(addingItem){
      if(quantityItem >= 10){
        return
      }
      setQuantityItem(quantityItem + 1)
      setCurrentPrice(Math.round(currentPrice + price));
    }else{
      if(quantityItem <= 1){
        return
      }
      setQuantityItem(quantityItem - 1)
      setCurrentPrice(Math.round(currentPrice - price));
     
    }
    sendDataToParent({price: currentPrice + price, quantity: quantityItem + 1})
    scaleValue.value = withSpring(1.2,{}, () => {
      scaleValue.value = withSpring(1);
    })
  }

  const scaleValue = useSharedValue(1);

  const zoomInAnimate = useAnimatedStyle(() => {
      return {
        transform:[{ scale: scaleValue.value}]
      }
  })

  return (
    <QuantityPriceSection style={{flex: 1 , alignItems:'center', justifyContent:'center', marginVertical: 24}}>
          <RowSpace style={{width: '100%'}}>
            <QuantityView>
              
                <ViewHeaderSection>Quantidade</ViewHeaderSection>
             
              <CircleGroup>
                <Circle onPress={()=> handleQuantity(false)} style={{height: RFValue(26), width: RFValue(26)}}>
                  <Icon name={"chevron-left"} size={24} color={'#b9b9b9'}/>
                </Circle>
                  <Animated.View style={[zoomInAnimate]}>
                    <Qtity style={{marginHorizontal: 10}}>{quantityItem}</Qtity>
                  </Animated.View>
                <Circle onPress={()=> handleQuantity(true)} style={{height: RFValue(26), width: RFValue(26)}}>
                  <Icon name={"chevron-right"} size={24} color={'#b9b9b9'}/>
                </Circle>
              </CircleGroup>
            </QuantityView>
            { price && (
            <View style={{flexDirection: "column",justifyContent: "center",gap: 4, marginTop: RFValue(14), marginRight: RFValue(8)}}>
              <Animated.View style={[zoomInAnimate]}><SneakerPrice style={{fontSize: RFValue(20)}}>R$ {currentPrice.toString()}</SneakerPrice></Animated.View>
              <SneakerSubPrice>
                ou 10x de R${Math.floor(currentPrice / 10).toString()}
              </SneakerSubPrice>
            </View>
            )}
          </RowSpace>
    </QuantityPriceSection>
  )
}

export default QuantityPriceComponent