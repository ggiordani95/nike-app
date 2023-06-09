import { View, Text } from 'react-native'
import { Circle, CircleGroup,RowSpace,SelectSection, SelectionView, ViewHeaderSection } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from 'react';



interface ISelectOption {
    headerText: string;

}

const SelectOption = ({...props}: ISelectOption) => {


  const sneakerSizes = ['39','40','41','42','43'];  


  return (
    <SelectSection style={{flex: 1 , alignItems:'center', justifyContent:'center',marginVertical: 10}}>
          <RowSpace style={{width: '100%'}}>
          <SelectionView>
            <ViewHeaderSection>{props.headerText}</ViewHeaderSection>
            <CircleGroup>
                {sneakerSizes.map((size:string, key: number)=>{
                    return(
                        <Circle key={key} onPress={()=> ''}>
                            <Text>{size}</Text>
                        </Circle>
                    )
                 })
                }
            </CircleGroup>
          </SelectionView>
          </RowSpace>
    </SelectSection>
  )
}

export default SelectOption