import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import Animated, {
  AnimatedStyleProp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ILabel } from "./types";
import { Link } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import React from "react";

const LikeAndCartLabel = ({ ...props }: ILabel) => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(props.isFavorite);

  useEffect(() => {
    setIsDisplayed(props.isFavorite);
  }, [props.isFavorite]);

  const opacity = useSharedValue(1);
  const zoom = useSharedValue(1);

  const animationStyle = useAnimatedStyle<AnimatedStyleProp<any>>(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: zoom.value }],
    };
  });

  const handleAnimation = () => {
    if (!isDisplayed) {
      opacity.value = withTiming(1, { duration: 700 });
      zoom.value = withTiming(1.3, { duration: 150 }, () => {
        zoom.value = withSpring(1);
      });
      setIsDisplayed(true);
      return;
    }
    opacity.value = withTiming(1, { duration: 700 });
    zoom.value = withTiming(1.3, { duration: 150 }, () => {
      zoom.value = withSpring(1);
    });
    setIsDisplayed(false);
  };

  const callToAction = () => {
    handleAnimation();

    if (props.isFav) {
      props.isFav(isDisplayed);
    }
  };

  const iconReferenceProps =
    props.iconName === props.sameRef && isDisplayed
      ? props.variantIcon
      : props.iconName;

  return (
    <>
      {props.containRef ? (
        <Link
          href={props.href}
          style={{
            position: "absolute",
            top: props.top,
            right: props.right,
            zIndex: 9,
            backgroundColor: "transparent",
          }}
          onPress={callToAction}
        >
          <Animated.View style={[animationStyle, { zIndex: 9 }]}>
            <View
              style={{
                position: "absolute",
                backgroundColor: "#242424",
                borderRadius: 10,
                height: 24,
                width: 24,
                zIndex: 14,
                left: 20,
                bottom: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "#fafafa",
                  fontSize: RFValue(12),
                }}
              >
                {props.atCartLength}
              </Text>
            </View>
            <Icon
              name={iconReferenceProps ? iconReferenceProps : ""}
              size={32}
              color={props.like && isDisplayed ? "red" : "#242424"}
            />
          </Animated.View>
        </Link>
      ) : (
        <Pressable
          style={{
            position: "absolute",
            top: props.top,
            right: props.right,
            padding: 10,
            borderRadius: 40,
            zIndex: 12,
            backgroundColor: "transparent",
          }}
          onPress={callToAction}
        >
          <Animated.View style={[animationStyle, { zIndex: 9 }]}>
            <Icon
              name={iconReferenceProps ? iconReferenceProps : ""}
              size={32}
              color={props.like && isDisplayed ? "red" : "#242424"}
            />
          </Animated.View>
        </Pressable>
      )}
    </>
  );
};

export default LikeAndCartLabel;
