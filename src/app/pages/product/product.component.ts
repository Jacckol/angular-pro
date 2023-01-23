import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { ProductHttpServiceService  } from 'src/app/services/product-http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
/*export class ProductComponent implements OnInit {
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

}*/
export class ProductComponent implements OnInit {
  httpClient: any;
  constructor(private producHttpService: ProductHttpServiceService) {};


  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    this.producHttpService.getAll().subscribe
    (response => {console.log(response);
    });
  }

  getProduc(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    this.producHttpService.getOne(2).subscribe
    (response => {console.log(response);
    });
  }

  createProduc(){
    const data = {
      title:"lapto",
      price:255,
      description:"Lenovo-Adonis Mendoza-Bryan chicaiza",
      images:["https://th.bing.com/th/id/R.3f4df010b0cffc48c3fe41ae3cd5793b?rik=8YnWFBLeyDIaLQ&riu=http%3a%2f%2fsabware.com%2f4854-large_default%2fcomputadora-completa-p-pentium-dual-core8gb-ramdd-256-gb-m2-nvme.jpg&ehk=WM8A%2f%2fVRTHsJHe%2bRv6PcF%2f1RH6APVEAoPvoAhu8FEpo%3d&risl=&pid=ImgRaw&r=0"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/338";
    this.producHttpService.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduc(){
    const data = {
      title:"cpu",
      price:255,
      description:"cpu actualizado - Adonis Mendoza-Bryan chicaiza",
      images:["https://th.bing.com/th/id/OIP.teO0dsk_d0sqtBhqoS9LcgHaE5?pid=ImgDet&rs=1"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/338";
    this.producHttpService.update(30, data).subscribe(
      (response : any ) => {console.log(response);
      }
    );
  }

  deleteProduc(){
    const url = "https://api.escuelajs.co/api/v1/products/338";
    this.producHttpService.destroy(61).subscribe(
      response => {console.log(response);
      }
    );
  }

  ngOnInit(): void{
    this.getProduc();
    this.getProduc();
    this.createProduc();
    this.updateProduc();
    this.deleteProduc();
  }

}