import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ILabel } from "./types";
import { Link } from "expo-router";

const LikeAndCartLabel = ({ ...props }: ILabel) => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  const opacity = useSharedValue(0.8);
  const zoom = useSharedValue(1);

  const animationStyle = useAnimatedStyle(() => {
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
    opacity.value = withTiming(0.8, { duration: 700 });
    zoom.value = withTiming(1.3, { duration: 150 }, () => {
      zoom.value = withSpring(1);
    });
    setIsDisplayed(false);
  };

  const callToAction = () => {
    handleAnimation();
    props.onPress;
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
            zIndex: 10,
            backgroundColor: "transparent",
          }}
          onPress={callToAction}
        >
          <Pressable
            style={{
              padding: 10,
              borderRadius: 40,
              zIndex: 4,
            }}
          >
            <Animated.View style={[animationStyle]}>
              <Icon
                name={iconReferenceProps ? iconReferenceProps : ""}
                size={32}
                color={props.like && isDisplayed ? "red" : "#242424"}
              />
            </Animated.View>
          </Pressable>
        </Link>
      ) : (
        <Pressable
          style={{
            position: "absolute",
            top: props.top,
            right: props.right,
            padding: 10,
            borderRadius: 40,
            zIndex: 4,
            backgroundColor: "transparent",
          }}
          onPress={callToAction}
        >
          <Animated.View style={[animationStyle]}>
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
