export type Planet = {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export const Planet = {
  decode(json: any): Planet {
    return {
      name: json.name,
      rotationPeriod: json.rotation_period,
      orbitalPeriod: json.orbital_period,
      diameter: json.diameter,
      climate: json.climate,
      gravity: json.gravity,
      terrain: json.terrain,
      surfaceWater: json.surface_water,
      population: json.population,
      residents: json.residents,
      films: json.films,
      created: json.created,
      edited: json.edited,
      url: json.url,
    };
  },
}
