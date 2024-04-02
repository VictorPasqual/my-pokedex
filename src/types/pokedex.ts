export type Pokemon = {
  id: number;
  number: string;
  name: string;
  type: string;
  types: string[];
  height?: number;
  weight?: number;
  sprites?: {
    front_shiny: any;
    back_shiny: any;
  };
}
