export interface ICustomButton {
    text: string;
    onPress: () => void;
    background: string;
}

export interface ILabel {
    isFav?: (isFavorite: boolean) => void;
    iconName: string;
    top?: number;
    containRef: boolean;
    href: string;
    right?: number;
    like: boolean;
    sameRef?: string;
    variantIcon?: string;
    atCartLength?: number | undefined;
  }