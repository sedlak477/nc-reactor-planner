export interface Accelerator {
  accelerator_electromagnet_power: number;
  accelerator_supercooler_coolant: number;
}

export interface Armor {
  armor_durability: number[];
  armor_enchantability: number[];
  armor_boron: number[];
  armor_tough: number[];
  armor_hard_carbon: number[];
  armor_boron_nitride: number[];
  armor_hazmat: number[];
  armor_toughness: number[];
  armor_conarm_register: boolean[];
}

export interface EnergyStorage {
  battery_capacity: number[];
}

export interface Entities {
  entity_tracking_range: number;
  entity_register: boolean[];
}

export interface Fission {
  fission_power: number;
  fission_fuel_use: number;
  fission_heat_generation: number;
  fission_cooling_rate: number[];
  fission_active_cooling_rate: number[];
  fission_water_cooler_requirement: boolean;
  fission_overheat: boolean;
  fission_explosions: boolean;
  fission_meltdown_radiation_multiplier: number;
  fission_min_size: number;
  fission_max_size: number;
  fission_comparator_max_heat: number;
  fission_force_heat_comparator: boolean;
  fission_active_cooler_max_rate: number;
  fission_sound_volume: number;
  fission_moderator_extra_power: number;
  fission_moderator_extra_heat: number;
  fission_neutron_reach: number;
  fission_thorium_fuel_time: number[];
  fission_thorium_power: number[];
  fission_thorium_heat_generation: number[];
  fission_thorium_radiation: number[];
  fission_uranium_fuel_time: number[];
  fission_uranium_power: number[];
  fission_uranium_heat_generation: number[];
  fission_uranium_radiation: number[];
  fission_neptunium_fuel_time: number[];
  fission_neptunium_power: number[];
  fission_neptunium_heat_generation: number[];
  fission_neptunium_radiation: number[];
  fission_plutonium_fuel_time: number[];
  fission_plutonium_power: number[];
  fission_plutonium_heat_generation: number[];
  fission_plutonium_radiation: number[];
  fission_mox_fuel_time: number[];
  fission_mox_power: number[];
  fission_mox_heat_generation: number[];
  fission_mox_radiation: number[];
  fission_americium_fuel_time: number[];
  fission_americium_power: number[];
  fission_americium_heat_generation: number[];
  fission_americium_radiation: number[];
  fission_curium_fuel_time: number[];
  fission_curium_power: number[];
  fission_curium_heat_generation: number[];
  fission_curium_radiation: number[];
  fission_berkelium_fuel_time: number[];
  fission_berkelium_power: number[];
  fission_berkelium_heat_generation: number[];
  fission_berkelium_radiation: number[];
  fission_californium_fuel_time: number[];
  fission_californium_power: number[];
  fission_californium_heat_generation: number[];
  fission_californium_radiation: number[];
}

export interface Fusion {
  fusion_base_power: number;
  fusion_fuel_use: number;
  fusion_heat_generation: number;
  fusion_heating_multiplier: number;
  fusion_overheat: boolean;
  fusion_meltdown_radiation_multiplier: number;
  fusion_active_cooling: boolean;
  fusion_active_cooling_rate: number[];
  fusion_min_size: number;
  fusion_max_size: number;
  fusion_comparator_max_efficiency: number;
  fusion_electromagnet_power: number;
  fusion_plasma_craziness: boolean;
  fusion_sound_volume: number;
  fusion_fuel_time: number[];
  fusion_power: number[];
  fusion_heat_variable: number[];
  fusion_radiation: number[];
}

export interface Generators {
  rtg_power: number[];
  solar_power: number[];
  decay_lifetime: number[];
  decay_power: number[];
}

export interface HeatExchanger {
  heat_exchanger_min_size: number;
  heat_exchanger_max_size: number;
  heat_exchanger_conductivity: number[];
  heat_exchanger_coolant_mult: number;
  heat_exchanger_alternate_exhaust_recipe: boolean;
}

export interface Ores {
  ore_dims: number[];
  ore_dims_list_type: boolean;
  ore_gen: boolean[];
  ore_size: number[];
  ore_rate: number[];
  ore_min_height: number[];
  ore_max_height: number[];
  ore_drops: boolean[];
  hide_disabled_ores: boolean;
  ore_harvest_levels: number[];
}

export interface Other {
  single_creative_tab: boolean;
  register_processor: boolean[];
  register_passive: boolean[];
  register_tool: boolean[];
  register_armor: boolean[];
  ctrl_info: boolean;
  jei_chance_items_include_null: boolean;
  rare_drops: boolean;
  dungeon_loot: boolean;
  wasteland_biome: boolean;
  wasteland_biome_weight: number;
  wasteland_dimension_gen: boolean;
  wasteland_dimension: number;
  mushroom_spread_rate: number;
  mushroom_gen: boolean;
  mushroom_gen_size: number;
  mushroom_gen_rate: number;
  register_fluid_blocks: boolean;
  register_cofh_fluids: boolean;
  register_projecte_emc: boolean;
  ore_dict_raw_material_recipes: boolean;
  ore_dict_priority_bool: boolean;
  ore_dict_priority: string[];
}

export interface Processors {
  processor_time: number[];
  processor_power: number[];
  speed_upgrade_power_laws_fp: number[];
  speed_upgrade_multipliers_fp: number[];
  energy_upgrade_power_laws_fp: number[];
  energy_upgrade_multipliers_fp: number[];
  rf_per_eu: number;
  enable_gtce_eu: boolean;
  enable_mek_gas: boolean;
  machine_update_rate: number;
  processor_passive_rate: number[];
  passive_push: boolean;
  cobble_gen_power: number;
  ore_processing: boolean;
  manufactory_wood: number[];
  rock_crusher_alternate: boolean;
  gtce_recipe_integration: boolean[];
  gtce_recipe_logging: boolean;
  smart_processor_input: boolean;
  passive_permeation: boolean;
  processor_particles: boolean;
}

export interface Radiation {
  radiation_enabled: boolean;
  radiation_world_chunks_per_tick: number;
  radiation_player_tick_rate: number;
  radiation_worlds: string[];
  radiation_biomes: string[];
  radiation_structures: string[];
  radiation_world_limits: any[];
  radiation_biome_limits: any[];
  radiation_from_biomes_dims_blacklist: number[];
  radiation_ores: string[];
  radiation_items: string[];
  radiation_blocks: any[];
  radiation_fluids: any[];
  radiation_foods: string[];
  radiation_ores_blacklist: any[];
  radiation_items_blacklist: any[];
  radiation_blocks_blacklist: any[];
  radiation_fluids_blacklist: any[];
  max_player_rads: number;
  radiation_player_decay_rate: number;
  radiation_entity_decay_rate: number;
  radiation_spread_rate: number;
  radiation_spread_gradient: number;
  radiation_decay_rate: number;
  radiation_lowest_rate: number;
  radiation_block_effects: string[];
  radiation_block_effect_limit: number;
  radiation_block_effect_max_rate: number;
  radiation_rain_mult: number;
  radiation_swim_mult: number;
  radiation_radaway_amount: number;
  radiation_radaway_slow_amount: number;
  radiation_radaway_rate: number;
  radiation_radaway_slow_rate: number;
  radiation_poison_time: number;
  radiation_radaway_cooldown: number;
  radiation_rad_x_amount: number;
  radiation_rad_x_lifetime: number;
  radiation_rad_x_cooldown: number;
  radiation_shielding_level: number[];
  radiation_tile_shielding: boolean;
  radiation_scrubber_fraction: number;
  radiation_scrubber_radius: number;
  radiation_scrubber_alt: boolean;
  radiation_scrubber_param: number[];
  radiation_scrubber_power: number;
  radiation_scrubber_borax_rate: number;
  radiation_geiger_block_redstone: number;
  radiation_shielding_default_recipes: boolean;
  radiation_shielding_item_blacklist: string[];
  radiation_shielding_custom_stacks: any[];
  radiation_shielding_default_levels: string[];
  radiation_hardcore_stacks: boolean;
  radiation_hardcore_containers: number;
  radiation_dropped_items: boolean;
  radiation_death_persist: boolean;
  radiation_death_persist_fraction: number;
  radiation_death_immunity_time: number;
  radiation_player_debuff_lists: string[];
  radiation_passive_debuff_lists: string[];
  radiation_mob_buff_lists: string[];
  radiation_horse_armor: boolean;
  radiation_hud_size: number;
  radiation_hud_position: number;
  radiation_hud_position_cartesian: any[];
  radiation_hud_text_outline: boolean;
  radiation_require_counter: boolean;
  radiation_chunk_boundaries: boolean;
  radiation_unit_prefixes: number;
  radiation_badge_durability: number;
  radiation_badge_info_rate: number;
}

export interface SaltFission {
  salt_fission_power: number;
  salt_fission_fuel_use: number;
  salt_fission_heat_generation: number;
  salt_fission_overheat: boolean;
  salt_fission_meltdown_radiation_multiplier: number;
  salt_fission_min_size: number;
  salt_fission_max_size: number;
  salt_fission_cooling_rate: number[];
  salt_fission_redstone_max_heat: number;
  salt_fission_max_distribution_rate: number;
}

export interface Tools {
  tool_mining_level: number[];
  tool_durability: number[];
  tool_speed: number[];
  tool_attack_damage: number[];
  tool_enchantability: number[];
  tool_handle_modifier: number[];
  tool_tic_register: boolean[];
}

export interface Turbine {
  turbine_min_size: number;
  turbine_max_size: number;
  turbine_blade_efficiency: number[];
  turbine_blade_expansion: number[];
  turbine_stator_expansion: number;
  turbine_coil_conductivity: number[];
  turbine_power_per_mb: number[];
  turbine_expansion_level: number[];
  turbine_mb_per_blade: number;
  turbine_sound_volume: number;
}

export interface NuclearcraftConfig {
  accelerator: Accelerator;
  armor: Armor;
  energy_storage: EnergyStorage;
  entities: Entities;
  fission: Fission;
  fusion: Fusion;
  generators: Generators;
  heat_exchanger: HeatExchanger;
  ores: Ores;
  other: Other;
  processors: Processors;
  radiation: Radiation;
  salt_fission: SaltFission;
  tools: Tools;
  turbine: Turbine;
}
