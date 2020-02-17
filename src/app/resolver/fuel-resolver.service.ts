import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Fuel } from '../model/fuel';

@Injectable({
  providedIn: 'root'
})
export class FuelResolverService implements Resolve<Fuel[]> {

  constructor(private data: DataService) { }

  resolve(): Observable<Fuel[]> {
    return this.data.fuels();
  }
}
