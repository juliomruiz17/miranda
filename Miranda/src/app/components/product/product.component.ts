import { Product } from '../product.model';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this. getProducts();
  }

  addProduct(form?: NgForm){
    if ( form.value.name && form.value.descrition && form.value.price) {
      this.productService.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getProducts();
      });
    } else {
      this.productService.postProduct(form.value).subscribe((res) => {
        this.getProducts();
        this.resetForm(form);
      });
    }
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.productService.products = res;
    });
  }

  editProduct(product: Product) {
    this.productService.selectedProduct = product;
  }

  deleteProduct(_id: string, form: NgForm) {
    if (confirm("Tem certeza que deseja deletar?")) {
      this.productService.deleteProduct(_id).subscribe((res) => {
        this.getProducts();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
 