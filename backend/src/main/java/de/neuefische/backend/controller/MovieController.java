package de.neuefische.backend.controller;


import de.neuefische.backend.model.Movie;
import de.neuefische.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/movie/")
public class MovieController {

    private MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAllMovies(){
        List<Movie> foundMovies = movieService.getAllMovies();
        return foundMovies;
    }

    @PostMapping
    public Movie serviceAddNewMovieToDB(@RequestBody Movie movie) {
        return movieService.addNewMovieToDB(movie);
    }

    @PutMapping(path = "/{id}")
    public Movie serviceBookmarkMovie(@PathVariable String id, @RequestBody Movie movie){
        return movieService.serviceBookmarkMovie(movie);
    }
}


