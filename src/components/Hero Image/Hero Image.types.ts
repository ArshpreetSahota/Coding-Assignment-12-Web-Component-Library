export interface IHeroImage {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}