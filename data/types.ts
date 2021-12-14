export interface HeadInterface {
  pageTitle: string;
  description: string;
}

export interface HeaderInterface {
  title: string;
  subtitle: string;
  image: string;
  imageSize?: {
    height: number;
    width: number;
  };
}

export interface PageInterface extends HeadInterface, HeaderInterface {}
