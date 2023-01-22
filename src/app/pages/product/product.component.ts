import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  httpClient: any;
  constructor(private productHttpService: ProductHttpServiceService) {};


  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    this.productHttpService.getOne(2).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:"gorra",
      price:5,
      description:"blanco-Adonis Mendoza",
      images:["https://th.bing.com/th/id/R.28775572c307d8a2b8dc0ecdffbbe3e6?rik=%2fAhs%2bvJeSzc%2bTQ&pid=ImgRaw&r=0"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/338";
    this.productHttpService.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"cadena",
      price:5,
      description:"Actualizado - Adonis Mendoza",
      images:["https://th.bing.com/th/id/R.28775572c307d8a2b8dc0ecdffbbe3e6?rik=%2fAhs%2bvJeSzc%2bTQ&pid=ImgRaw&r=0"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/338";
    this.productHttpService.update(30, data).subscribe(
      (response : any ) => {console.log(response);
      }
    );
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/338";
    this.productHttpService.destroy(61).subscribe(
      response => {console.log(response);
      }
    );
  }

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
   // this.deleteProduct();
  }

}