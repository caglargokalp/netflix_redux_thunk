import axios from "axios";
import { options } from "../../components/constants/constans";
import { actionTypes } from "../actionTypes";




//base url belirleme
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//POPÜLER FİLMLERİ ALICAK
//VE STORA AKTARIR

export const getPopular = () => (dispatch) => {
  axios
    .get("/movie/popular", options)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => dispatch({ type: actionTypes.Set_ERROR }));
};

//tür verilerini al
//store aktar
export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list?language=en",options)
    //apiden olumlu cevap gelirse stora aktar
    .then((res) =>
      dispatch({ type: actionTypes.SET_GENRES, payload: res.data.genres })
    )
    //api dan olumsuz cevap gelirse stroru güncelle
    .catch((res) => dispatch({ type: actionTypes.SET_GENRES_ERROR }));
};



