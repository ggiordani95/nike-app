import { useEffect, useState } from "react"
import { Categories } from "../../services/Categories";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CategorySectionsContainer, SectionText } from './styles';
import { ICategory } from "./types";
import { ShoesFromCategory } from "../../services/Shoes";
import { Image } from 'expo-image';
import image1423 from '../../assets/shoes/1423.png';
import image1423_2 from '../../assets/shoes/1423_2.png';




export default function CategorySections() {

  const [categoryNames, setCategoryNames] = useState<Array<string>>([]);
  const [currentCategory, setCurrentCategory] = useState<Object[]>();
  const [sectionFocused, setSectionFocused] = useState<number | null>(0);
  
  function handleIndex(indexSection: any){
    setSectionFocused(indexSection);
    console.log(indexSection);
  }

  useEffect(()=>{
        async function fetchingData (){
          if(sectionFocused){
            const section = await ShoesFromCategory(sectionFocused)
            if(section){
              setCurrentCategory(section);
            }
          }else{
            const section = await ShoesFromCategory(0)
            if(section){
              setCurrentCategory(section);
            }
          }
        }
        fetchingData();
      
      return () => {
        console.log(currentCategory);
      
      }
      
  },[sectionFocused])

  useEffect(() => {
    async function fetchingData (){
      const fullCategories = await Categories();
      const newCategoryNames = fullCategories.map((category: any) => category.category_name);
      setCategoryNames([...categoryNames, ...newCategoryNames]);
      const firstSection:Object[] = await ShoesFromCategory(0);
      if(firstSection){
        setCurrentCategory(firstSection);
      }
     
    }
    fetchingData();
    
    return () => {
    
      
    }
  }, [])


  const SectionTextComponent = ({item, index, focused, indexSectionFocused}: any) => {

    function handleSectionFocused(index: number){
      indexSectionFocused(index);
    }

    return (
      <>
        <TouchableOpacity onPress={() => handleSectionFocused(index)}>
          <SectionText style={{fontWeight: focused ? 'bold' : '400', textDecorationLine: focused ? 'underline' : 'none'}}>{item}</SectionText>
        </TouchableOpacity>
      </>
    )
  }


  return (
    <CategorySectionsContainer>
      <FlatList
          data={categoryNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }: any) => <SectionTextComponent item={item} index={index} indexSectionFocused={handleIndex} focused={sectionFocused == index ? true : false}/>}
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
      />
     {currentCategory && currentCategory?.map((item: any, index: number)=>{
      return(
        <View key={index}>
        <Text>
          {item.name}
        </Text>
        <Image source={'https://github.com/giordani95.png'} style={{width: 140,height: 140, borderRadius: 40}}/>
        </View>
      )
     })}
    </CategorySectionsContainer>

  )
}