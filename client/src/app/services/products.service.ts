import { Injectable } from '@angular/core';

const domain = 'https://ya.ru';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  }
}

const products: IProduct[] = [
  {
    id: '1',
    text: 'Бесплатный курс по Angular',
    title: 'Angular',
    link: '/courses/angular',
    image: '/img/icons/products/icon-ts.svg',
    time: 'С опытом 2 недели',
    type: ProductType.Course
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find(p => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
