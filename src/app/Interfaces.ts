import {FormPageComponent} from "./form-page/form-page.component";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  info: string;
  specs: ProductSpecs;
}

export interface ProductSpecs {
  decorationType: string;
  color: string;
  material: string;
  piecesIncluded: number;
}

