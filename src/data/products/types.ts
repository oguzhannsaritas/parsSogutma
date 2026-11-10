
export interface TranslatedString {
    TR: string;
    EN: string;
}

export interface ProductSpec {
  modules: string;
  sidePanel: number | string;
  temp: string;
  optionalAccessory: string[];
  technicalSpecification: string[];
}

export interface Product {
    id: number;
    name: TranslatedString;
    category: TranslatedString;
    type: TranslatedString;
    image: string;
    thumbnails?: string[];
    drawingImage?: string[];
    specs: {
        modules: string;
        sidePanel: number | string;
        temp: string;
        temperatureNote?: TranslatedString;
        optionalAccessory: TranslatedString[];
        technicalSpecification: TranslatedString[];
    };
}