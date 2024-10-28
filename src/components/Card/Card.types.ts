export interface ICard {
  imageUrl?: string;
  width?: string;
  title?: string;
  content?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  disabled?: boolean;
}