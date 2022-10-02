package de.neuefische.backend.repo;

import de.neuefische.backend.model.Movie;

import java.util.HashMap;
import java.util.Map;

public class fakedb {
    private Map<String, Movie> movies = new HashMap<>(Map.of(
            "1",new Movie("1",
                    "Wars",
                    "1977",
                    "https://i.etsystatic.com/14140434/r/il/de4702/1526222179/il_fullxfull.1526222179_kl3i.jpg",
                    false),
            "2",new Movie("2",
                    "Kill Bill",
                    "2003",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Killbill-vol1-logo.svg/1200px-Killbill-vol1-logo.svg.png",
                    false),
            "3",new Movie("3",
                    "Per Anhalter durch die Galaxis",
                    "2005",
                    "https://m.media-amazon.com/images/I/611KJ5BEQ9L.jpg",
                    false )
    ));
}
