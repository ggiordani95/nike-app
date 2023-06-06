import { Rounded, RoundedText } from "./styles";
import IRoundedInfo from "./types";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RoundedInfo({icon, size, isRoundedNumber, number}: IRoundedInfo){
    return(
        <Rounded>
            {icon && !isRoundedNumber && <Icon name={icon} size={size}/>}
            {isRoundedNumber && number && <RoundedText>{number}</RoundedText>}
        </Rounded>
    )
}