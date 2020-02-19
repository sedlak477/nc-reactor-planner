import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cooler } from './model/fission-reactor/cooler';
import { Fuel } from './model/fission-reactor/fuel';
import { Fission, NuclearcraftConfig } from './model/config';
import { parse } from 'minecraft-forge-cfg';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly config = new BehaviorSubject<NuclearcraftConfig>(null);

  constructor(private http: HttpClient) {
    if (window.localStorage) {
      try {
        const localConfig: NuclearcraftConfig = JSON.parse(window.localStorage.getItem('nc_config'));
        this.config.next(localConfig);
      } catch (e) {
        this.resetConfig();
      }

      this.config.subscribe(config => window.localStorage.setItem('nc_config', JSON.stringify(config)));
    } else {
      this.resetConfig();
    }
  }

  passiveCoolers(): Cooler[] {
    return this.passiveCoolerFromConfig();
  }

  fuels(): Fuel[] {
    return this.fuelFromConfig();
  }

  getConfig(): Observable<NuclearcraftConfig> {
    return this.config;
  }

  loadFile(file: File): void {
    const reader = new FileReader();

    reader.onerror = (error: any) =>  alert(error.toString());
    reader.onload = (event: any) => this.config.next(parse(event.target.result));

    reader.readAsText(file);
  }

  resetConfig(): void {
    this.http.get<NuclearcraftConfig>('assets/data/nuclearcraft_config.json').subscribe(config => this.config.next(config));
  }

  private passiveCoolerFromConfig(): Cooler[] {
    const config = this.config;
    return [
      {
        id: 'water',
        name: 'Water',
        description: 'Must be adjacent to at least one Reactor Cell or active moderator block.',
        get rate() { return config.value?.fission.fission_cooling_rate[0]; },
        icon: 'assets/icons/water.png',
        type: 'cooler'
      },
      {
        id: 'redstone',
        name: 'Redstone',
        description: 'Must be adjacent to at least one Reactor Cell.',
        get rate() { return config.value?.fission.fission_cooling_rate[1]; },
        icon: 'assets/icons/redstone.png',
        type: 'cooler'
      },
      {
        id: 'quartz',
        name: 'Quartz',
        description: 'Must be adjacent to at least one active moderator block.',
        get rate() { return config.value?.fission.fission_cooling_rate[2]; },
        icon: 'assets/icons/quartz.png',
        type: 'cooler'
      },
      {
        id: 'gold',
        name: 'Gold',
        description: 'Must be adjacent to at least one valid Water Cooler and one valid Redstone Cooler.',
        get rate() { return config.value?.fission.fission_cooling_rate[3]; },
        icon: 'assets/icons/gold.png',
        type: 'cooler'
      },
      {
        id: 'glowstone',
        name: 'Glowstone',
        description: 'Must be adjacent to at least two active moderator blocks.',
        get rate() { return config.value?.fission.fission_cooling_rate[4]; },
        icon: 'assets/icons/glowstone.png',
        type: 'cooler'
      },
      {
        id: 'lapis',
        name: 'Lapis Lazuli',
        description: 'Must be adjacent to at least one Reactor Cell and one Reactor Casing.',
        get rate() { return config.value?.fission.fission_cooling_rate[5]; },
        icon: 'assets/icons/lapis.png',
        type: 'cooler'
      },
      {
        id: 'diamond',
        name: 'Diamond',
        description: 'Must be adjacent to at least one valid Water Cooler and one valid Quartz Cooler.',
        get rate() { return config.value?.fission.fission_cooling_rate[6]; },
        icon: 'assets/icons/diamond.png',
        type: 'cooler'
      },
      {
        id: 'liquid_helium',
        name: 'Liquid Helium',
        description: 'Must be adjacent to exactly one valid Redstone Cooler and at least one Reactor Casing.',
        get rate() { return config.value?.fission.fission_cooling_rate[7]; },
        icon: 'assets/icons/helium.png',
        type: 'cooler'
      },
      {
        id: 'enderium',
        name: 'Enderium',
        description: 'Must be adjacent to exactly three Reactor Casings at exactly one vertex.',
        get rate() { return config.value?.fission.fission_cooling_rate[8]; },
        icon: 'assets/icons/enderium.png',
        type: 'cooler'
      },
      {
        id: 'cryotheum',
        name: 'Cryotheum',
        description: 'Must be adjacent to at least two Reactor Cells.',
        get rate() { return config.value?.fission.fission_cooling_rate[9]; },
        icon: 'assets/icons/cryotheum.png',
        type: 'cooler'
      },
      {
        id: 'iron',
        name: 'Iron',
        description: 'Must be adjacent to at least one valid Gold Cooler.',
        get rate() { return config.value?.fission.fission_cooling_rate[10]; },
        icon: 'assets/icons/iron.png',
        type: 'cooler'
      },
      {
        id: 'emerald',
        name: 'Emerald',
        description: 'Must be adjacent to at least one active moderator block and one Reactor Cell.',
        get rate() { return config.value?.fission.fission_cooling_rate[1]; },
        icon: 'assets/icons/emerald.png',
        type: 'cooler'
      },
      {
        id: 'copper',
        name: 'Copper',
        description: 'Must be adjacent to at least one valid Glowstone Cooler.',
        get rate() { return config.value?.fission.fission_cooling_rate[12]; },
        icon: 'assets/icons/copper.png',
        type: 'cooler'
      },
      {
        id: 'tin',
        name: 'Tin',
        description: 'Must be at least between two valid Lapis Coolers along the same axis.',
        get rate() { return config.value?.fission.fission_cooling_rate[13]; },
        icon: 'assets/icons/tin.png',
        type: 'cooler'
      },
      {
        id: 'magnesium',
        name: 'Magnesium',
        description: 'Must be adjacent to at least one Reactor Casing and one active moderator block.',
        get rate() { return config.value?.fission.fission_cooling_rate[14]; },
        icon: 'assets/icons/magnesium.png',
        type: 'cooler'
      }
    ];
  }

  private fuelFromConfig(): Fuel[] {
    const config = this.config;
    return [
      // Thorium
      {
        id: 'tbu', name: 'TBU',
        get fuel_time() { return config.value?.fission.fission_thorium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_thorium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_thorium_heat_generation[0]; },
      },
      {
        id: 'tbu_oxide', name: 'TBU Oxide',
        get fuel_time() { return config.value?.fission.fission_thorium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_thorium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_thorium_heat_generation[1]; },
      },

      // Uranium
      {
        id: 'leu_233', name: 'LEU-233',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_uranium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[0]; },
      },
      {
        id: 'leu_233_oxide', name: 'LEU-233 Oxide',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_uranium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[1]; },
      },
      {
        id: 'heu_233', name: 'HEU-233',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_uranium_power[2]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[2]; },
      },
      {
        id: 'heu_233_oxide', name: 'HEU-233 Oxide',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_uranium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[3]; },
      },
      {
        id: 'leu_235', name: 'LEU-235',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[4]; },
        get power() { return config.value?.fission.fission_uranium_power[4]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[4]; },
      },
      {
        id: 'leu_235_oxide', name: 'LEU-235 Oxide',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[5]; },
        get power() { return config.value?.fission.fission_uranium_power[5]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[5]; },
      },
      {
        id: 'heu_235', name: 'HEU-235',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[6]; },
        get power() { return config.value?.fission.fission_uranium_power[6]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[6]; },
      },
      {
        id: 'heu_235_oxide', name: 'HEU-235 Oxide',
        get fuel_time() { return config.value?.fission.fission_uranium_fuel_time[7]; },
        get power() { return config.value?.fission.fission_uranium_power[7]; },
        get heat_generation() { return config.value?.fission.fission_uranium_heat_generation[7]; },
      },

      // Neptunium
      {
        id: 'len_236', name: 'LEN-236',
        get fuel_time() { return config.value?.fission.fission_neptunium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_neptunium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_neptunium_heat_generation[0]; },
      },
      {
        id: 'len_236_oxide', name: 'LEN-236 Oxide',
        get fuel_time() { return config.value?.fission.fission_neptunium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_neptunium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_neptunium_heat_generation[1]; },
      },
      {
        id: 'hen_236', name: 'HEN-236',
        get fuel_time() { return config.value?.fission.fission_neptunium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_neptunium_power[2]; },
        get heat_generation() { return  config.value?.fission.fission_neptunium_heat_generation[2]; },
      },
      {
        id: 'hen_236_oxide', name: 'HEN-236 Oxide',
        get fuel_time() { return config.value?.fission.fission_neptunium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_neptunium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_neptunium_heat_generation[3]; },
      },

      // Plutonium
      {
        id: 'lep_239', name: 'LEP-239',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_plutonium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[0]; },
      },
      {
        id: 'lep_239_oxide', name: 'LEP-239 Oxide',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_plutonium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[1]; },
      },
      {
        id: 'hep_239', name: 'HEP-239',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_plutonium_power[2]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[2]; },
      },
      {
        id: 'hep_239_oxide', name: 'HEP-239 Oxide',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_plutonium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[3]; },
      },
      {
        id: 'lep_241', name: 'LEP-241',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[4]; },
        get power() { return config.value?.fission.fission_plutonium_power[4]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[4]; },
      },
      {
        id: 'lep_241_oxide', name: 'LEP-241 Oxide',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[5]; },
        get power() { return config.value?.fission.fission_plutonium_power[5]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[5]; },
      },
      {
        id: 'hep_241', name: 'HEP-241',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[6]; },
        get power() { return config.value?.fission.fission_plutonium_power[6]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[6]; },
      },
      {
        id: 'hep_241_oxide', name: 'HEP-241 Oxide',
        get fuel_time() { return config.value?.fission.fission_plutonium_fuel_time[7]; },
        get power() { return config.value?.fission.fission_plutonium_power[7]; },
        get heat_generation() { return config.value?.fission.fission_plutonium_heat_generation[7]; },
      },

      // MOX
      {
        id: 'mox_239', name: 'MOX-239',
        get fuel_time() { return config.value?.fission.fission_mox_fuel_time[0]; },
        get power() { return config.value?.fission.fission_mox_power[0]; },
        get heat_generation() { return config.value?.fission.fission_mox_heat_generation[0]; },
      },
      {
        id: 'mox_241', name: 'MOX-241',
        get fuel_time() { return config.value?.fission.fission_mox_fuel_time[1]; },
        get power() { return config.value?.fission.fission_mox_power[1]; },
        get heat_generation() { return config.value?.fission.fission_mox_heat_generation[1]; },
      },

      // Americium
      {
        id: 'lea_242', name: 'LEA-242',
        get fuel_time() { return config.value?.fission.fission_americium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_americium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_americium_heat_generation[0]; },
      },
      {
        id: 'lea_242_oxide', name: 'LEA-242 Oxide',
        get fuel_time() { return config.value?.fission.fission_americium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_americium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_americium_heat_generation[1]; },
      },
      {
        id: 'hea_242', name: 'HEA-242',
        get fuel_time() { return config.value?.fission.fission_americium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_americium_power[2]; },
        get heat_generation() { return config.value?.fission.fission_americium_heat_generation[2]; },
      },
      {
        id: 'hea_242_oxide', name: 'HEA-242 Oxide',
        get fuel_time() { return config.value?.fission.fission_americium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_americium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_americium_heat_generation[3]; },
      },

      // Curium
      {
        id: 'lecm_243', name: 'LECm-243',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_curium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[0]; },
      },
      {
        id: 'lecm_243_oxide', name: 'LECm-243 Oxide',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_curium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[1]; },
      },
      {
        id: 'hecm_243', name: 'HECm-243',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_curium_power[2]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[2]; },
      },
      {
        id: 'hecm_243_oxide', name: 'HECm-243 Oxide',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_curium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[3]; },
      },
      {
        id: 'lecm_245', name: 'LECm-245',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[4]; },
        get power() { return config.value?.fission.fission_curium_power[4]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[4]; },
      },
      {
        id: 'lecm_245_oxide', name: 'LECm-245 Oxide',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[5]; },
        get power() { return config.value?.fission.fission_curium_power[5]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[5]; },
      },
      {
        id: 'hecm_245', name: 'HECm-245',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[6]; },
        get power() { return config.value?.fission.fission_curium_power[6]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[6]; },
      },
      {
        id: 'hecm_245_oxide', name: 'HECm-245 Oxide',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[7]; },
        get power() { return config.value?.fission.fission_curium_power[7]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[7]; },
      },
      {
        id: 'lecm_247', name: 'LECm-247',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[8]; },
        get power() { return config.value?.fission.fission_curium_power[8]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[8]; },
      },
      {
        id: 'lecm_247_oxide', name: 'LECm-247 Oxide',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[9]; },
        get power() { return config.value?.fission.fission_curium_power[9]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[9]; },
      },
      {
        id: 'hecm_247', name: 'HECm-247',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[10]; },
        get power() { return config.value?.fission.fission_curium_power[10]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[10]; },
      },
      {
        id: 'hecm_247_oxide', name: 'HECm-247 Oxide',
        get fuel_time() { return config.value?.fission.fission_curium_fuel_time[11]; },
        get power() { return config.value?.fission.fission_curium_power[11]; },
        get heat_generation() { return config.value?.fission.fission_curium_heat_generation[11]; },
      },

      // Berkelium
      {
        id: 'leb_248', name: 'LEB-248',
        get fuel_time() { return config.value?.fission.fission_berkelium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_berkelium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_berkelium_heat_generation[0]; },
      },
      {
        id: 'leb_248_oxide', name: 'LEB-248 Oxide',
        get fuel_time() { return config.value?.fission.fission_berkelium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_berkelium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_berkelium_heat_generation[1]; },
      },
      {
        id: 'heb_248', name: 'HEB-248',
        get fuel_time() { return config.value?.fission.fission_berkelium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_berkelium_power[2]; },
        get heat_generation() { return config.value?.fission.fission_berkelium_heat_generation[2]; },
      },
      {
        id: 'heb_248_oxide', name: 'HEB-248 Oxide',
        get fuel_time() { return config.value?.fission.fission_berkelium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_berkelium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_berkelium_heat_generation[3]; },
      },

      // Californium
      {
        id: 'lecf_249', name: 'LECf-249',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[0]; },
        get power() { return config.value?.fission.fission_californium_power[0]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[0]; },
      },
      {
        id: 'lecf_249_oxide', name: 'LECf-249 Oxide',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[1]; },
        get power() { return config.value?.fission.fission_californium_power[1]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[1]; },
      },
      {
        id: 'hecf_249', name: 'HECf-249',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[2]; },
        get power() { return config.value?.fission.fission_californium_power[2]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[2]; },
      },
      {
        id: 'hecf_249_oxide', name: 'HECf-249 Oxide',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[3]; },
        get power() { return config.value?.fission.fission_californium_power[3]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[3]; },
      },
      {
        id: 'lecf_251', name: 'LECf-251',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[4]; },
        get power() { return config.value?.fission.fission_californium_power[4]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[4]; },
      },
      {
        id: 'lecf_251_oxide', name: 'LECf-251 Oxide',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[5]; },
        get power() { return config.value?.fission.fission_californium_power[5]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[5]; },
      },
      {
        id: 'hecf_251', name: 'HECf-251',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[6]; },
        get power() { return config.value?.fission.fission_californium_power[6]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[6]; },
      },
      {
        id: 'hecf_251_oxide', name: 'HECf-251 Oxide',
        get fuel_time() { return config.value?.fission.fission_californium_fuel_time[7]; },
        get power() { return config.value?.fission.fission_californium_power[7]; },
        get heat_generation() { return config.value?.fission.fission_californium_heat_generation[7]; },
      },
    ];
  }
}
