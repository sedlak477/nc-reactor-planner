import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Cooler } from '../model/fission-reactor/cooler';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class PassiveCoolersResolverService implements Resolve<Cooler[]> {

  constructor(private data: DataService) { }

  resolve(): Observable<Cooler[]> {
    return this.data.passiveCoolers();
  }
}
