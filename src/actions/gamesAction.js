import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

//action creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(upcomingGamesUrl());
  const upcomingData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
