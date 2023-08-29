import React, { useEffect } from "react";
import Movielisting from "../MovieListing/Movielisting";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <Movielisting />
    </div>
  );
};

export default Home;
