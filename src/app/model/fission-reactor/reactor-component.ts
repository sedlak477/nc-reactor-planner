import { Cooler } from './cooler';

export interface ReactorComponent {
  type: 'cooler' | 'moderator' | 'fuel-cell' | 'air';
  id: string;
  name: string;
  description: string;
  icon: string;
}

export function isCooler(data: ReactorComponent): data is Cooler {
  if (!data) { return false; }
  return data.type === 'cooler';
}

export function isMediator(data: ReactorComponent): boolean {
  if (!data) { return false; }
  return data.type === 'moderator';
}

export function isFuelCell(data: ReactorComponent): boolean {
  if (!data) { return false; }
  return data.type === 'fuel-cell';
}

export function isAir(data: ReactorComponent): boolean {
  if (!data) { return true; }
  return data.type === 'air';
}

export const Components: {
    AIR: ReactorComponent;
    FUEL_CELL: ReactorComponent;
    GRAPHITE: ReactorComponent;
    BERYLLIUM: ReactorComponent;
  } = {
    AIR: {
      type: 'air',
      id: 'air',
      name: 'Air',
      description: 'Empty space',
      icon: 'assets/icons/air.png',
    },
    FUEL_CELL: {
      type: 'fuel-cell',
      id: 'fuel-cell',
      name: 'Fuel Cell',
      description: 'Fuel Cell',
      icon: 'assets/icons/fuelcell.png',
    },
    GRAPHITE: {
      type: 'moderator',
      id: 'graphite',
      name: 'Graphite',
      description: 'Graphite Moderator',
      icon: 'assets/icons/graphite.png',
    },
    BERYLLIUM: {
      type: 'moderator',
      id: 'beryllium',
      name: 'Beryllium',
      description: 'Beryllium Moderator',
      icon: 'assets/icons/beryllium.png',
    },
  };
