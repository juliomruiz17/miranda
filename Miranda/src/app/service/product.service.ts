import { Product } from './../components/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly URL_API = "http://localhost:4000/api/product";

  constructor(private http: HttpClient) { 
    this.selectedProduct = new Product();
  }

  postProduct(product: Product) {
    return this.http.post(this.URL_API, product);
  }

  createProduct(product: Product){
    return this.http.post(this.URL_API, product);
  }

  getProducts() {
    return this.http.get<Product[]>(this.URL_API);
  }

  putProduct(product: Product) {
    return this.http.put(this.URL_API + `/${product._id}`, product);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

