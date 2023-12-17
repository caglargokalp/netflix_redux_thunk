import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { baseImageURL } from "./constants/constans";

const Hero = () => {
  const state = useSelector((store) => store);

  //O İLE 19 ARASINDA SAYI OLUŞTURMA

  const randomIndex = Math.round(Math.random() * 19);

  const randomMovie = !state.isMovieLoading && state.popularMovies[randomIndex];
  console.log("karaışık  1 bilm ", randomMovie);

  return (
    <div className="row p-4">
      {state.isMovieLoading || !randomMovie ? (
        <Loading />
      ) : (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center">
            <h1>{randomMovie.title} </h1>
            <p className="text">{randomMovie.overview} </p>
            <p>IMDB:{randomMovie.vote_average.toFixed(1)} </p>

            <div className="d-flex gap-3">
              <Link className="btn btn-danger" to={"/detay"}>
                Film İzle{" "}
              </Link>
              <Link className="btn btn-info" to={"#"}>
                Listeye Ekle
              </Link>
            </div>
          </div>
          <div className="col-md-6">

            <img className="img-fluid rounded shadow my-4" src={baseImageURL.concat(randomMovie.backdrop_path)}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
