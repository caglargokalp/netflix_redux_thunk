import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImageURL, options } from "../components/constants/constans";
import axios from "axios";
import Loading from "../components/Loading";
import { Splide } from "@splidejs/react-splide";
import { SplideSlide } from "@splidejs/react-splide";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const[cast,setCast]=useState(null)

  useEffect(() => {
    //filmin bilgilerini alır
    axios
      .get(`/movie/${id}`, options)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log("Hata", err));
      //filmdeki kişilerin bilgilerini
      axios
      .get(`/movie/${id}/credits`, options)
      .then((res) => setCast(res.data.cast))
      .catch((err) => console.log("Hata", err));

  }, []);
  console.log(movie);
  return (
    <div className="row">
      {!movie ? (
        <Loading />
      ) : (
        <>
        {/* üst alan */}
          <div className="col-12 banner ">
            <img
              className="w-100  h-100 object-fit-cover"
              src={baseImageURL.concat(movie.backdrop_path)}
            />
            <div className="banner-bg">
              {" "}
              <span>{movie.title} </span>
            </div>
          </div>
         
          
          


          {/* SOL TARAF */}
          <div className="col-md-6 mt-4">
            <h3>Yapımcı şirketler</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie.production_companies.map((i) => (
                <div className="bg-white rounded p-1">
                  {i.logo_path ? (
                    <img
                      width={100}
                      title={i.name}
                      height={50}
                      src={baseImageURL.concat(i.logo_path)}
                    />
                  ) : (
                    <p style={{width:'100'}} className="text-black text-center d-flex align-items-center"> {i.name} </p>
                  )}
                  
                </div>
              ))}
            </div>
            {/* diller */}
            <h3 className="mt-4">Konuşulan Diller</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie.spoken_languages.map((i) => (
                <div className="bg-white rounded p-1 text-black">
                  <span>{i.name} </span>
                </div>
              ))}
            </div>
            <h3 className="mt-4">Yapımcı Ülkeler</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie.production_countries.map((i) => (
                <div className="bg-white rounded p-1 text-black">
                  <span>{i.name} </span>
                </div>
              ))}
            </div>
          </div>

          {/* sağ taraf */}
          <div className="col-md-6 mt-4 p-4 bilgi">
            <p className="lead ">{movie.overview} </p>
            <p>
              <span className="fw-bold">Bütçe:</span> {movie.budget}{" "}
            </p>
            <p>
              <span className="fw-bold">Gelir:</span> {movie.revenue}{" "}
            </p>
          </div>


           {/* kişiler */}
           <div className="col-12 my-3">  
          <h2>  Oyuncular</h2>
          <Splide  
          options={{
            height:'200px',
        autoWidth:true,
        pagination:false,
        gap:'10px'        
    }} 
    >
        {cast?.map((i) =>(
            <SplideSlide key={i.cast_id}>
              <div className="actor-card h-100"> 
             
            <img 
             className="movie" src={baseImageURL.concat(i.profile_path)} />
             <p>  <span>{i.name} </span></p> 
             </div>
       
          </SplideSlide>

        ))}
</Splide>
</div>
         
        </>
      )}
    </div>
  );
};

export default DetailPage;
