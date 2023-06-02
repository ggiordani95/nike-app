import { useEffect, useState } from "react"
import { Categories } from "../../services/Categories";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CategorySectionsContainer, SectionText } from './styles';

export default function CategorySections() {

  const [categories, setCategories] = useState<Object[] | null>(null);
  const [categoryNames, setCategoryNames] = useState<Array<string>>([]);

  
  

  useEffect(() => {
    async function fetchingData (){
      const fullCategories = await Categories();
      setCategories(fullCategories);
      const newCategoryNames = fullCategories.map((category: any) => category.category_name);
      setCategoryNames([...categoryNames, ...newCategoryNames]);
      console.log(categoryNames);
      
    }
    fetchingData();
    
    return () => {
      if(categories){
        
        
      }
      
    }
  }, [])
  
  const SectionTextComponent = ({item, index}: any) => {
    
    const [isFocusIndex, setIsFocusIndex] = useState<number>(0);
    
    return (
      <>
        <TouchableOpacity onPress={()=> setIsFocusIndex(index)}>
          <SectionText style={{fontWeight: isFocusIndex === index ? 'bold' : '400'}}>{item}</SectionText>
        </TouchableOpacity>
      
      </>
    )
  }

  return (
    <CategorySectionsContainer>
      <FlatList
          data={categoryNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }: any) => <SectionTextComponent item={item} index={index}/>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
         
      />
    </CategorySectionsContainer>

  )
}