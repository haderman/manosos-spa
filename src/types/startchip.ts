export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  MGLT: string;
  starshipClass: string;
  pilots: any[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export const Starship = {
  decode(json: any): Starship {
    return {
      name: json.name,
      model: json.model,
      manufacturer: json.manufacturer,
      costInCredits: json.cost_in_credits,
      length: json.length,
      maxAtmospheringSpeed: json.max_atmosphering_speed,
      crew: json.crew,
      passengers: json.passengers,
      cargoCapacity: json.cargo_capacity,
      consumables: json.consumables,
      hyperdriveRating: json.hyperdrive_rating,
      MGLT: json.MGLT,
      starshipClass: json.starship_class,
      pilots: json.pilots,
      films: json.films,
      created: json.created,
      edited: json.edited,
      url: json.url,
    };
  },
};
