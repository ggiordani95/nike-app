import { SearchInput, SearchInputContainer, StyledIconRight } from "./styles";
import { useState } from "react";

export default function index() {

   const [isInputBlur, setIsInputBlur] = useState<boolean>(true);

  return (
    <SearchInputContainer>
        {isInputBlur && <StyledIconRight size={16} name="search"/>}
        <SearchInput placeholder={isInputBlur ? 'Digite o nome de um produto...' : ''} onFocus={() => setIsInputBlur(false)} onBlur={() => setIsInputBlur(true)} />
    </SearchInputContainer>
  )
}