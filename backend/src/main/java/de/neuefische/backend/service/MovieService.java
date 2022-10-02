package de.neuefische.backend.service;


import de.neuefische.backend.model.Movie;
import de.neuefische.backend.repo.MovieDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private MovieDB movieDB;
    private IdService idService;


    @Autowired
    public MovieService(MovieDB movieDB, IdService idService) {
        this.movieDB = movieDB;
        this.idService = idService;
    }

    public List<Movie> getAllMovies(){
      List<Movie> foundMovies = movieDB.getAllMovies();
      return foundMovies;
    }

    public Movie addNewMovieToDB(Movie movie){
        movie.setId(idService.generateID());
        Movie newMovie = movieDB.addNewMovie(movie);
        return newMovie;
    }
}
