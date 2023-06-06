import { useEffect, useState } from "react"
import { Categories } from "../../services/Categories";
import { View, useWindowDimensions } from "react-native";
import { FlatList,TouchableOpacity } from "react-native-gesture-handler";
import { CategorySectionsContainer, SectionText } from './styles';
import { ShoesFromCategory } from "../../services/Shoes";
import useFavoriteStore from "../../stores/favorites";
import CategorySneaker from "../CategorySneaker";

export default function CategorySections() {

  const [categoryNames, setCategoryNames] = useState<Array<string>>([]);
  const [currentCategory, setCurrentCategory] = useState<Object[]>();
  const [sectionFocused, setSectionFocused] = useState<number | null>(0);
  
  const {width, height} = useWindowDimensions();

  function handleIndex(indexSection: any){
    setSectionFocused(indexSection);
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
            renderItem={({ item, index }: any) => {
              return(
                <CategorySneaker name={item.name} image={item.image} id={item.id} index={index}/>
              )
            }}
            horizontal={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
        />
      </View>
    </CategorySectionsContainer>
  )
}

