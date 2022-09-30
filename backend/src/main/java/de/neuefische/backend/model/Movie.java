package de.neuefische.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Movie {
    private String id ="";
    private String title = "";
    private String release ="";
    private String poster = "";
    private boolean isMarked = false;

}


