function my_Dictionary() {
    var movie = {
        Title: "The Avengers",
        Genre: "Action",
        Director: "Joss Whedon",
        Rating: "PG-13", 
    };delete movie.Genre; //This function removes Genre from the KVP form the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = movie.Genre;
}