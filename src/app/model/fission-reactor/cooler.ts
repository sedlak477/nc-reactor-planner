import { ReactorComponent } from './reactor-component';

export interface Cooler extends ReactorComponent {
  type: 'cooler';
  rate: number;
}
