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

export function isWaterCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'water';
}

export function isRedstoneCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'redstone';
}

export function isQuartzCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'quartz';
}

export function isGoldCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'gold';
}

export function isGlowstoneCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'glowstone';
}

export function isLapisCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'lapis';
}

export function isDiamondCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'diamond';
}

export function isLiquidHeliumCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'liquid_helium';
}

export function isEnderiumCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'enderium';
}

export function isCryotheumCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'cryotheum';
}

export function isIronCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'iron';
}

export function isEmeraldCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'emerald';
}

export function isCopperCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'copper';
}

export function isTinCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'tin';
}

export function isMagnesiumCooler(data: ReactorComponent): data is Cooler {
  return isCooler(data) && data.id === 'magnesium';
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
