import { CategoryTextView, ProductTextName } from "./styles";
import { Image } from 'expo-image'
import { useWindowDimensions } from 'react-native';

import { CategorySneakerView } from "./types";
import useViewStore from "../../stores/view";
import { Link } from "expo-router";


export default function CategorySneaker({ name, image, id, index }: CategorySneakerView) {

  const { fetchCurrentSneakerId } = useViewStore();

  const { width, height } = useWindowDimensions();

  return (
    <Link onPress={() => fetchCurrentSneakerId(id)} key={index} href="/view" style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', borderRadius: 14, margin:9, width: width * 0.4, height: width * 0.4 }}>
      <CategoryTextView style={{ width: width * 0.4, height: 36 }}>
        <ProductTextName>
          {name}
        </ProductTextName>
      </CategoryTextView>
      {image &&
        <Image source={image} style={{ width: width * 0.4, height: width * 0.4, borderRadius: 24, position: 'absolute' }} />
      }
    </Link>
  )
}


