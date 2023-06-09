import { View, Text } from 'react-native'
import { Circle, CircleGroup, Qtity, QuantityPriceSection, QuantityView, RowSpace, SneakerPrice, SneakerSubPrice, ViewHeaderSection } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from 'react';

const QuantityPriceComponent = (price: any) => {

  const [quantityItem, setQuantityItem] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number>(price.price);


  useEffect(() => {
    setCurrentPrice(price.price);
    setQuantityItem(1);
    return () => {
     
    }
  }, [price.price])
  

  function handleQuantity(addingItem: boolean){
    if(addingItem){
      if(quantityItem >= 10){
        return
      }
      setQuantityItem(quantityItem + 1)
      setCurrentPrice(Math.round(currentPrice + price.price));
    }else{
      if(quantityItem <= 1){
        return
      }
      setQuantityItem(quantityItem - 1)
      setCurrentPrice(Math.round(currentPrice - price.price));
    }
  }


  return (
    <QuantityPriceSection style={{flex: 1 , alignItems:'center', justifyContent:'center', marginVertical: 10}}>
          <RowSpace style={{width: '100%'}}>
          <QuantityView>
            <ViewHeaderSection>Quantidade</ViewHeaderSection>
            <CircleGroup>
              <Circle onPress={()=> handleQuantity(false)}>
                <Icon name={"chevron-left"} size={24} color={'#b9b9b9'}></Icon>
              </Circle>
                <Qtity style={{marginHorizontal: 10}}>{quantityItem}</Qtity>
              <Circle onPress={()=> handleQuantity(true)}>
                <Icon name={"chevron-right"} size={24} color={'#b9b9b9'}></Icon>
              </Circle>
            </CircleGroup>
          </QuantityView>
          { price.price && (
            <View style={{flexDirection: "column",justifyContent: "center",gap: 4}}>
              <SneakerPrice>R$ {currentPrice.toString()}</SneakerPrice>
              <SneakerSubPrice>
                ou 10x de R${Math.floor(currentPrice / 10).toString()},99
              </SneakerSubPrice>
            </View>
          )}
          </RowSpace>
    </QuantityPriceSection>
  )
}

export default QuantityPriceComponent