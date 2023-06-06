import { CategorySectionView, CategoryTextView, ProductTextName } from "./styles";
import { Image } from 'expo-image'
import { useWindowDimensions } from 'react-native';
import useFavoriteStore from "../../stores/favorites";
import { CategorySneakerView } from "./types";


export default function CategorySneaker({name, image, id, index} : CategorySneakerView) {

    const {addToFavorites, removeFromFavorites} = useFavoriteStore();

    const {width, height} = useWindowDimensions();

    return (
        <CategorySectionView onPress={()=> addToFavorites(id)} activeOpacity={0.7} key={index} style={{width: width * 0.4 , height: width * 0.4 }}>
              <CategoryTextView style={{width: width * 0.4, height: 36}}>
              <ProductTextName>
                {name}
              </ProductTextName>
              </CategoryTextView>
              {image && 
              <Image source={image} style={{width: width * 0.4,height: width * 0.4, borderRadius: 24, position:'absolute'}}/>
              }
        </CategorySectionView>
    )
}


