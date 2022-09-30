package de.neuefische.backend.service;


import de.neuefische.backend.model.Movie;
import de.neuefische.backend.repo.MovieDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private MovieDB movieDB;

    @Autowired
    public MovieService(MovieDB movieDB) {
        this.movieDB = movieDB;
    }

    public List<Movie> getAllMovies(){
      List<Movie> foundMovies = movieDB.getAllMovies();
      return foundMovies;

    }
}
