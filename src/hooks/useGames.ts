import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]; //array of objects where each object has property of type platform
    metacritic: number;
  }
  
const useGames = (gameQuery: GameQuery) => 
    useData<Game>("/games", {params: { 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id}
    }, 
    [gameQuery]);

export default useGames;