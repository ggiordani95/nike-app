import { SearchInput, StyledIconRight } from "./styles";
import { useState } from "react";
import { View } from "react-native";
import React from "react";

export default function index() {
  const [isInputBlur, setIsInputBlur] = useState<boolean>(true);

  return (
    <View style={{ position: "relative" }}>
      {isInputBlur && <StyledIconRight size={16} name="search" />}
      <SearchInput
        placeholder={isInputBlur ? "Digite o nome de um produto..." : ""}
        onFocus={() => setIsInputBlur(false)}
        onBlur={() => setIsInputBlur(true)}
      />
    </View>
  );
}
