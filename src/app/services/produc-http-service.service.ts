import { Injectable } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';
import { CreateProducDto, ProducModel, UpdateProducDto } from '../entities/produc.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProducHttpServiceService {
  readonly API_URL ="https://api.escuelajs.co/api/v1/products";

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ProducModel[]>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProducModel[]>(url);
  }

  getOne(id:ProducModel['id']):Observable<ProducModel[]>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<ProducModel[]>(url);
  }

  store(produc:CreateProducDto):Observable<ProducModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProducModel>(url, produc)
  }

  update(id:ProducModel['id'], product:UpdateProducDto):Observable<ProducModel>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProducModel>(url, product)
  }

  destroy(id:ProducModel['id']):Observable<any>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: {rta:boolean}) => {
      return response.rta;
    })
    );
  }
}
