export interface ICustomButton {
    text: string;
    onPress: () => void;
    background: string;
}

export interface ILabel {
    onPress: () => void;
    iconName: string;
    top?: number;
    right?: number;
    like: boolean;
    sameRef?: string;
    variantIcon?: string;
  }