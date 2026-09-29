// ==========================================
// FILMES
// ==========================================

const movies = [

    // =========================
    // FICÇÃO CIENTÍFICA
    // =========================

    {
        id: 1,
        title: "Interestelar",
        year: 2014,
        genre: "Ficção Científica",
        rating: 8.7,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        link: "filmes/interestelar.html"
    },

    {
        id: 2,
        title: "Avatar",
        year: 2009,
        genre: "Ficção Científica",
        rating: 7.8,
        image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        link: "filmes/avatar.html"
    },

    {
        id: 3,
        title: "Planeta dos Macacos",
        year: 2011,
        genre: "Ficção Científica",
        rating: 7.6,
        image: "https://image.tmdb.org/t/p/w500/cjLsuP75UDlRdJVMXzXg3TJ4umU.jpg",
        link: "filmes/planeta-dos-macacos.html"
    },


    // =========================
    // AÇÃO
    // =========================

    {
        id: 4,
        title: "Vingadores: Ultimato",
        year: 2019,
        genre: "Ação",
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
        link: "filmes/vingadores-ultimato.html"
    },

    {
        id: 5,
        title: "Batman: O Cavaleiro das Trevas",
        year: 2008,
        genre: "Ação",
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        link: "filmes/batman.html"
    },

    {
        id: 6,
        title: "O Espetacular Homem-Aranha",
        year: 2012,
        genre: "Ação",
        rating: 6.9,
        image: "https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bcnZYN9GUKQ7j.jpg",
        link: "filmes/homem-aranha.html"
    },


    // =========================
    // ROMANCE
    // =========================

    {
        id: 7,
        title: "Para Todos os Garotos que Já Amei",
        year: 2018,
        genre: "Romance",
        rating: 7.0,
        image: "https://image.tmdb.org/t/p/w500/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
        link: "filmes/para-todos-os-garotos.html"
    },

    {
        id: 8,
        title: "Diário de uma Paixão",
        year: 2004,
        genre: "Romance",
        rating: 7.8,
        image: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtvi0O2n9n.jpg",
        link: "filmes/diario-de-uma-paixao.html"
    },

    {
        id: 9,
        title: "Como Se Fosse a Primeira Vez",
        year: 2004,
        genre: "Romance",
        rating: 6.8,
        image: "https://image.tmdb.org/t/p/w500/6VqW8eKxZ0s2qM0t7L9mN9zYQzR.jpg",
        link: "filmes/50-first-dates.html"
    },


    // =========================
    // TERROR
    // =========================

    {
        id: 10,
        title: "A Entidade",
        year: 2012,
        genre: "Terror",
        rating: 6.8,
        image: "https://image.tmdb.org/t/p/w500/8H2G3W5Fh3qM4zX8L6Z9r0V1.jpg",
        link: "filmes/entidade.html"
    },

    {
        id: 11,
        title: "Invocação do Mal",
        year: 2013,
        genre: "Terror",
        rating: 7.5,
        image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        link: "filmes/invocacao-do-mal.html"
    },

    {
        id: 12,
        title: "Corra!",
        year: 2017,
        genre: "Terror",
        rating: 7.6,
        image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        link: "filmes/corra.html"
    },


    // =========================
    // ANIMAÇÃO
    // =========================

    {
        id: 13,
        title: "Ratatouille",
        year: 2007,
        genre: "Animação",
        rating: 8.1,
        image: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
        link: "filmes/ratatouille.html"
    },

    {
        id: 14,
        title: "Toy Story 3",
        year: 2010,
        genre: "Animação",
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/w500/AbbqzeZ8XizN7f6n2sYhYxK7JvF.jpg",
        link: "filmes/toy-story-3.html"
    },

    {
        id: 15,
        title: "Enrolados",
        year: 2010,
        genre: "Animação",
        rating: 7.7,
        image: "https://image.tmdb.org/t/p/w500/ym7bJ7V5eXJ9n0N5Z5h7J5F7Jv.jpg",
        link: "filmes/enrolados.html"
    },


    // =========================
    // COMÉDIA
    // =========================

    {
        id: 16,
        title: "Shrek",
        year: 2001,
        genre: "Comédia",
        rating: 7.9,
        image: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtUbAKK5q6wX0qG.jpg",
        link: "filmes/shrek.html"
    },

    {
        id: 17,
        title: "O Lobo de Wall Street",
        year: 2013,
        genre: "Comédia",
        rating: 8.2,
        image: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
        link: "filmes/lobo-de-wall-street.html"
    },

    {
        id: 18,
        title: "Up: Altas Aventuras",
        year: 2009,
        genre: "Comédia",
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
        link: "filmes/up.html"
    }

];


// ==========================================
// ELEMENTOS
// ==========================================

const movieGrid =
    document.getElementById("movieGrid");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const genreFilter =
    document.getElementById("genreFilter");


// ==========================================
// MOSTRAR FILMES
// ==========================================

function displayMovies(movieList) {

    movieGrid.innerHTML = "";


    if (movieList.length === 0) {

        movieGrid.innerHTML = `
            <p class="no-results">
                Nenhum filme encontrado.
            </p>
        `;

        return;
    }


    movieList.forEach(movie => {

        const card =
            document.createElement("a");

        card.classList.add("movie-card");

        card.href = movie.link;


        card.innerHTML = `

            <img
                src="${movie.image}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <div class="movie-meta">

                    <span>
                        ${movie.year}
                    </span>

                    <span class="rating">
                        ⭐ ${movie.rating}
                    </span>

                </div>

            </div>

        `;


        movieGrid.appendChild(card);

    });

}


// ==========================================
// PESQUISA
// ==========================================

function searchMovies() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const results =
        movies.filter(movie =>
            movie.title
                .toLowerCase()
                .includes(search)
        );


    displayMovies(results);

}


// ==========================================
// FILTRO DE GÊNERO
// ==========================================

function filterGenre(genre) {

    genreFilter.value = genre;


    const results =
        movies.filter(movie =>
            movie.genre === genre
        );


    displayMovies(results);


    document
        .getElementById("filmes")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// EVENTOS
// ==========================================

searchButton.addEventListener(
    "click",
    searchMovies
);


searchInput.addEventListener(
    "keyup",
    event => {

        if (event.key === "Enter") {

            searchMovies();

        }

    }
);


genreFilter.addEventListener(
    "change",
    () => {

        const genre =
            genreFilter.value;


        if (genre === "Todos") {

            displayMovies(movies);

        } else {

            filterGenre(genre);

        }

    }
);


// ==========================================
// INICIAR
// ==========================================

displayMovies(movies);
```
