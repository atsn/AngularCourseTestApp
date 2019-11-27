import { Coordinate } from './coordinate';
export interface IPlayground {
  id: string;
  name: string;
  addressDescription?: string;
  description?: string;
  position: Coordinate;
}
