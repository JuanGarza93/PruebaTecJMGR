import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  baseUrl = enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  getData(index: number) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
