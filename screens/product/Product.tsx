import { useState } from "react";
import useViewStore from "../../stores/view";
import useLoading from "../../hooks/useLoading";
import useFetchSneakerData from "../../services/product/useFetchSneakerData";
import useProductIsFavorite from "../../services/product/useProductIsFavorite";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LikeAndCartLabel from "../../components/LikeAndCartLabel";
import { Padding, SneakerName } from "../../app/(tabs)/view/styles";
import SelectOption from "../../components/SelectOption";
import QuantityPriceComponent from "../../components/QuantityPriceComponent";
import CustomButton from "../../components/CustomButton";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "expo-image";
import useProductStore from "./useProductStore";
import { ISneaker } from "./types";
import useProduct from "./useProduct";
import {
  ButtonSection,
  ProductSection,
  SelectAndQuantitySection,
  SneakerNameSection,
} from "./styles";
import { StatusBar } from "expo-status-bar";

export default function Product() {
  const { width, height } = useWindowDimensions();
  const { currentSneakerIdToFetch } = useViewStore();
  const [isLoading, setIsLoading] = useLoading();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [sneakerData, setSneakerData] = useState<ISneaker>({
    id: null,
    name: null,
    desc: null,
    image: null,
    price: null,
    selectedNumber: 39,
    cart_price: null,
    cart_quantity: 1,
  });

  // stores
  const {
    atCart,
    removingAdorables,
    addingAdorables,
    adorables,
    cartStore,
    atCartItems,
    updateItemCart,
  } = useProductStore();

  // fetch data
  useFetchSneakerData({
    setIsLoading,
    currentSneakerIdToFetch,
    setSneakerData,
  });

  // check if product is favorite
  useProductIsFavorite({ adorables, sneakerData, setIsFavorite });

  // product hook functions
  const {
    handleSelectedNumber,
    handleQuantityAndPrice,
    handleCartItems,
    handleFavItem,
  } = useProduct({
    sneakerData,
    setSneakerData,
    atCartItems,
    updateItemCart,
    cartStore,
    adorables,
    removingAdorables,
    addingAdorables,
    setIsLoading,
  });

  return (
    <ProductSection>
      <StatusBar style={"dark"} />
      <Link
        href="../(tabs)"
        style={{
          position: "relative",
          zIndex: 4,
          top: height * 0.07,
          left: width * 0.03,
          width: 100,
        }}
      >
        <Icon name={"chevron-left"} size={40} style={{ opacity: 0.7 }} />
      </Link>
      <LikeAndCartLabel
        isFavorite={isFavorite}
        atCartLength={atCart.length}
        containRef={true}
        href={"/cart"}
        like={false}
        iconName={"cart-outline"}
        top={height * 0.075}
        right={width * 0.2}
      />
      <LikeAndCartLabel
        isFavorite={isFavorite}
        isFav={handleFavItem}
        containRef={false}
        like={true}
        iconName={"cards-heart-outline"}
        sameRef={"cards-heart-outline"}
        variantIcon={"cards-heart"}
        top={height * 0.06}
        right={width * 0.05}
        href={"/adorables"}
      />
      <Image
        source={sneakerData.image}
        style={{ width: width, height: height / 2 }}
      />
      <Padding>
        <SneakerNameSection>
          <SneakerName style={{ fontSize: RFValue(18) }}>
            {sneakerData.name}
          </SneakerName>
        </SneakerNameSection>
        <SelectAndQuantitySection>
          <SelectOption
            headerText="Selecione o tamanho"
            refresh={currentSneakerIdToFetch}
            sendDataToParent={handleSelectedNumber}
          />
          <QuantityPriceComponent
            price={sneakerData.price ? Math.round(sneakerData.price) : "-"}
            sendDataToParent={handleQuantityAndPrice}
          />
        </SelectAndQuantitySection>
        <ButtonSection>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <CustomButton
              cart={false}
              href="/cart"
              widthButton={width * 0.9}
              onPress={handleCartItems}
              text={"Adicionar ao Carrinho"}
              background={"#161616"}
            />
          )}
        </ButtonSection>
      </Padding>
    </ProductSection>
  );
}
