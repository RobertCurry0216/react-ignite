import axios from "axios";
import { popularGamesUrl } from "../api";

//action creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData,
    },
  });
};
