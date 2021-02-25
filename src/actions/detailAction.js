import axios from "axios";
import { gameDetailUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailUrl(id));
  const screenData = await axios.get(gameScreenshotUrl(id));

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
