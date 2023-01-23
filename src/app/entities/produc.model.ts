import { CategoriModel} from "./categori.models";

export interface ProducModel{
    id:number;
    title:string;
    price:number;
    description:string;
    images:string[];
    category:CategoriModel;
};

export interface CreateProducDto extends Omit<ProducModel, 'id'| 'category'>{
    categoryId:number;
};

export interface UpdateProducDto extends Partial<ProducModel>{
    categoryId?:number;
}