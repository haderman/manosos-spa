import { Starship } from './startchip';

export type People = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: Starship[];
  created: string;
  edited: string;
  url: string;
};

export const People = {
  decode(json: any): People {
    return {
      name: json.name,
      height: json.height,
      mass: json.mass,
      hairColor: json.hair_color,
      skinColor: json.skin_color,
      eyeColor: json.eye_color,
      birthYear: json.birth_year,
      gender: json.gender,
      homeworld: json.homeworld,
      films: json.films,
      species: json.species,
      vehicles: json.vehicles,
      starships: json.starships.map(Starship.decode),
      created: json.created,
      edited: json.edited,
      url: json.url,
    };
  },
}

