import { useEffect, useState } from "react"
import { Categories } from "../../services/Categories";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CategorySectionsContainer, SectionText } from './styles';

export default function CategorySections() {

  const [categories, setCategories] = useState<Object[] | null>(null);
  const [categoryNames, setCategoryNames] = useState<Array<string>>([]);
  const [sectionFocused, setSectionFocused] = useState<number>(0);
  
  
  useEffect(()=>{
 
  },[sectionFocused])

  useEffect(() => {
    async function fetchingData (){
      const fullCategories = await Categories();
      setCategories(fullCategories);
      const newCategoryNames = fullCategories.map((category: any) => category.category_name);
      setCategoryNames([...categoryNames, ...newCategoryNames]);
      
    }
    fetchingData();
    
    return () => {
      if(categories){
        
        
      }
      
    }
  }, [])


  function handleIndex(indexSection: any){
    setSectionFocused(indexSection);
  }


  const SectionTextComponent = ({item, index, focused, indexSectionFocused}: any) => {
    function handleSectionFocused(index: number){
      indexSectionFocused(index);
    }
    return (
      <>
        <TouchableOpacity onPress={()=> handleSectionFocused(index)}>
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
    </CategorySectionsContainer>

  )
}