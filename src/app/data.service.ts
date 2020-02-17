import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cooler } from './model/fission-reactor/cooler';
import { Fuel } from './model/fuel';
import { FissionConfig } from './model/fission-config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fissionConfig: FissionConfig;

  constructor(private http: HttpClient) {
    this.http.get<FissionConfig>('assets/data/fission_config.json').subscribe(config => this.fissionConfig = config);
  }

  passiveCoolers(): Observable<Cooler[]> {
    return this.http.get<Cooler[]>('assets/data/passive_coolers.json');
  }

  fuels(): Observable<Fuel[]> {
    return this.http.get<Fuel[]>('assets/data/fuels.json');
  }
}
