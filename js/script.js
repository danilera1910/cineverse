const movies = [
    {
        id: "interestelar",
        title: "Interestelar",
        year: 2014,
        genre: "Ficção Científica",
        rating: 8.7,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        link: "filmes/interestelar.html"
    },
    {
        id: "avatar",
        title: "Avatar",
        year: 2009,
        genre: "Ficção Científica",
        rating: 7.9,
        image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        link: "filmes/avatar.html"
    },
    {
        id: "planeta-dos-macacos",
        title: "Planeta dos Macacos",
        year: 1968,
        genre: "Ficção Científica",
        rating: 8.0,
        image: "https://image.tmdb.org/t/p/w500/2r9iK1b7D9L1Gq2G8K5W0F5Vx1.jpg",
        link: "filmes/planeta-dos-macacos.html"
    },

    {
        id: "vingadores-ultimato",
        title: "Vingadores: Ultimato",
        year: 2019,
        genre: "Ação",
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        link: "filmes/vingadores-ultimato.html"
    },
    {
        id: "batman",
        title: "Batman: O Cavaleiro das Trevas",
        year: 2008,
        genre: "Ação",
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        link: "filmes/batman.html"
    },
    {
        id: "homem-aranha",
        title: "O Espetacular Homem-Aranha",
        year: 2012,
        genre: "Ação",
        rating: 6.9,
        image: "https://image.tmdb.org/t/p/w500/jexoNYnqfYSXkx2fB2R7Zf8M6K.jpg",
        link: "filmes/homem-aranha.html"
    },

    {
        id: "para-todos-os-garotos",
        title: "Para Todos os Garotos que Já Amei",
        year: 2018,
        genre: "Romance",
        rating: 7.0,
        image: "https://image.tmdb.org/t/p/w500/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
        link: "filmes/para-todos-os-garotos.html"
    },
    {
        id: "diario-de-uma-paixao",
        title: "Diário de uma Paixão",
        year: 2004,
        genre: "Romance",
        rating: 7.8,
        image: "https://image.tmdb.org/t/p/w500/rNzQ7Z2Kx7J1J9W8x3q1H4Q9Z7.jpg",
        link: "filmes/diario-de-uma-paixao.html"
    },
    {
        id: "50-first-dates",
        title: "Como Se Fosse a Primeira Vez",
        year: 2004,
        genre: "Romance",
        rating: 6.8,
        image: "https://image.tmdb.org/t/p/w500/lQ2xk8dX4N0qT3j6H8M1B5Y7P9.jpg",
        link: "filmes/50-first-dates.html"
    },

    {
        id: "entidade",
        title: "A Entidade",
        year: 2012,
        genre: "Terror",
        rating: 6.8,
        image: "https://image.tmdb.org/t/p/w500/n0u7P9M7H1E8Q6V4L3X2C5Z8K9.jpg",
        link: "filmes/entidade.html"
    },
    {
        id: "invocacao-do-mal",
        title: "Invocação do Mal",
        year: 2013,
        genre: "Terror",
        rating: 7.5,
        image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tm3B9k3N3qXJ8Q8.jpg",
        link: "filmes/invocacao-do-mal.html"
    },
    {
        id: "corra",
        title: "Corra!",
        year: 2017,
        genre: "Terror",
        rating: 7.6,
        image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        link: "filmes/corra.html"
    },

    {
        id: "ratatouille",
        title: "Ratatouille",
        year: 2007,
        genre: "Animação",
        rating: 8.1,
        image: "https://image.tmdb.org/t/p/w500/npH0nV9L5V4v7J5V8Z1M8C8D9.jpg",
        link: "filmes/ratatouille.html"
    },
    {
        id: "toy-story-3",
        title: "Toy Story 3",
        year: 2010,
        genre: "Animação",
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/w500/AbbXSPaH7N5L6xQ3qJ1B9X8Z2.jpg",
        link: "filmes/toy-story-3.html"
    },
    {
        id: "enrolados",
        title: "Enrolados",
        year: 2010,
        genre: "Animação",
        rating: 7.7,
        image: "https://image.tmdb.org/t/p/w500/ym7p4mQ5M8L3K2N7X9B4C6D1E.jpg",
        link: "filmes/enrolados.html"
    },

    {
        id: "shrek",
        title: "Shrek",
        year: 2001,
        genre: "Comédia",
        rating: 7.9,
        image: "https://image.tmdb.org/t/p/w500/dyHAK9X7m3N8P4Q5R1T6V2B0C.jpg",
        link: "filmes/shrek.html"
    },
    {
        id: "lobo-de-wall-street",
        title: "O Lobo de Wall Street",
        year: 2013,
        genre: "Comédia",
        rating: 8.2,
        image: "https://image.tmdb.org/t/p/w500/pWHf4khOlo99nT8E1p1M8byY.jpg",
        link: "filmes/lobo-de-wall-street.html"
    },
    {
        id: "up",
        title: "Up: Altas Aventuras",
        year: 2009,
        genre: "Comédia",
        rating: 8.3,
        image: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bz.jpg",
        link: "filmes/up.html"
    }
];

const movieGrid = document.getElementById("movieGrid");
const genreSelect = document.getElementById("genreSelect");
const genreButtons = document.querySelectorAll(".genre-btn");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


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

        const card = document.createElement("a");

        card.classList.add("movie-card");

        card.href = movie.link;

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span>★ ${movie.rating}</span>
                </div>

                <span class="movie-genre">
                    ${movie.genre}
                </span>

            </div>
        `;

        movieGrid.appendChild(card);
    });
}


function filterMovies() {

    const search = searchInput.value.toLowerCase().trim();

    const genre = genreSelect.value;

    const filteredMovies = movies.filter(movie => {

        const matchesSearch =
            movie.title.toLowerCase().includes(search);

        const matchesGenre =
            genre === "Todos" ||
            movie.genre === genre;

        return matchesSearch && matchesGenre;
    });

    displayMovies(filteredMovies);
}


genreSelect.addEventListener("change", filterMovies);


genreButtons.forEach(button => {

    button.addEventListener("click", () => {

        const genre = button.dataset.genre;

        genreSelect.value = genre;

        filterMovies();

        genreButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


searchButton.addEventListener("click", filterMovies);


searchInput.addEventListener("keyup", event => {

    if (event.key === "Enter") {
        filterMovies();
    }

});


displayMovies(movies);
