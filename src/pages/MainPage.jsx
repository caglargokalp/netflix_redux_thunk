import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../redux/actionTypes";
import { getGenres, getPopular } from "../redux/actions/movieActions";
import Loading from "../components/Loading";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);



  useEffect(() => {
    //FİLMLER İÇİN YÜKLENİYOR STATİNİ AKTİF EDEN aksiyon
    dispatch({ type: actionTypes.SET_MOVIES_LOADING });
    //polüler filmleri al VE STORA AKTAR
    dispatch(getPopular());
    //türleri al
    dispatch({ type: actionTypes.SET_GENRES_LOADING });
    dispatch(getGenres());
  }, []);
  return (
    <div>
      {/* karşılama kamp */}
      <Hero />
      {/* her bir kategory için ekrana o kategorinin flimlerini bbas */}

      {state.isGenresLoading ? (
        <Loading />
      ) : state.isGenresError ? (
        <p>üzgünüz hata oluştu</p>
      ) : (
        state.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
