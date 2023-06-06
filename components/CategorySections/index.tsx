import { useEffect, useState } from "react"
import { Categories } from "../../services/Categories";
import { View, Text, Platform, useWindowDimensions } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CategorySectionView, CategorySectionsContainer, CategoryTextView, ProductTextName, SectionText } from './styles';
import { ICategory } from "./types";
import { ShoesFromCategory } from "../../services/Shoes";
import { Image } from 'expo-image';
import image1423 from '../../assets/shoes/1423.png';
import image1423_2 from '../../assets/shoes/1423_2.png';




export default function CategorySections() {

  const [categoryNames, setCategoryNames] = useState<Array<string>>([]);
  const [currentCategory, setCurrentCategory] = useState<Object[]>();
  const [sectionFocused, setSectionFocused] = useState<number | null>(0);
  
  const {width, height} = useWindowDimensions();


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
          style={{padding:6, backgroundColor:'#c7c7c7', width: width * 1, marginBottom: 20}}
      />
     

      
      <View style={{flexDirection:'row', maxWidth: width * 0.9, flexWrap: "wrap"}}>
      
      <FlatList
          data={currentCategory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }: any) => <CategorySectionView key={index} style={{width: width * 0.4 , height: width * 0.4, }}>
          <CategoryTextView style={{width: width * 0.4, height: 36}}>
            <ProductTextName>
              {item.name}
            </ProductTextName>
          </CategoryTextView>
          {item.image && <Image source={item.image} style={{width: width * 0.4,height: width * 0.4, borderRadius: 24, position:'absolute'}}/>}
        </CategorySectionView>}
          horizontal={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
      />
      </View>
     
    </CategorySectionsContainer>

  )
}