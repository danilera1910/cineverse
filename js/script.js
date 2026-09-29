// ==========================================
// BANCO DE FILMES
// ==========================================

const movies = [

    {
        id: 1,
        title: "Interestelar",
        year: 2014,
        genre: "Ficção Científica",
        rating: 8.7,
        director: "Christopher Nolan",

        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

        description:
            "Quando a Terra se torna inabitável, um grupo de exploradores parte em uma missão espacial através de um buraco de minhoca em busca de um novo lar para a humanidade."
    },

    {
        id: 2,
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        rating: 8.6,
        director: "Christopher Nolan",

        image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",

        description:
            "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da primeira bomba atômica."
    },

    {
        id: 3,
        title: "Batman: O Cavaleiro das Trevas",
        year: 2008,
        genre: "Ação",
        rating: 9.0,
        director: "Christopher Nolan",

        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

        description:
            "Batman enfrenta uma nova ameaça que mergulha Gotham em uma onda de caos e coloca seus princípios à prova."
    },

    {
        id: 4,
        title: "A Origem",
        year: 2010,
        genre: "Ficção Científica",
        rating: 8.8,
        director: "Christopher Nolan",

        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",

        description:
            "Um especialista em invadir sonhos recebe a missão de plantar uma ideia na mente de uma pessoa."
    },

    {
        id: 5,
        title: "Toy Story",
        year: 1995,
        genre: "Animação",
        rating: 8.3,
        director: "John Lasseter",

        image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",

        description:
            "Quando humanos não estão por perto, brinquedos ganham vida. Woody precisa lidar com a chegada de um novo brinquedo."
    },

    {
        id: 6,
        title: "Se Beber, Não Case!",
        year: 2009,
        genre: "Comédia",
        rating: 7.7,
        director: "Todd Phillips",

        image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",

        description:
            "Três amigos acordam depois de uma noite completamente fora de controle e precisam descobrir o que aconteceu."
    },

    {
        id: 7,
        title: "Invocação do Mal",
        year: 2013,
        genre: "Terror",
        rating: 7.5,
        director: "James Wan",

        image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",

        description:
            "Investigadores paranormais ajudam uma família que afirma estar sendo aterrorizada por uma presença sobrenatural."
    },

    {
        id: 8,
        title: "Vingadores: Ultimato",
        year: 2019,
        genre: "Ação",
        rating: 8.4,
        director: "Anthony Russo e Joe Russo",

        image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",

        description:
            "Os Vingadores restantes precisam encontrar uma maneira de reverter as consequências dos acontecimentos anteriores."
    }

];


// ==========================================
// ELEMENTOS HTML
// ==========================================

const movieGrid = document.getElementById("movieGrid");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const genreFilter = document.getElementById("genreFilter");


// ==========================================
// MOSTRAR FILMES
// ==========================================

function displayMovies(movieList) {

    movieGrid.innerHTML = "";

    if (movieList.length === 0) {

        movieGrid.innerHTML = `
            <p>
                Nenhum filme encontrado.
            </p>
        `;

        return;
    }


    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.classList.add("movie-card");

        card.onclick = () => openMovie(movie.id);


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
// ABRIR FILME
// ==========================================

function openMovie(id) {

    const movie = movies.find(movie => movie.id === id);

    if (!movie) return;


    document.getElementById("modalImage").src =
        movie.image;

    document.getElementById("modalImage").alt =
        movie.title;


    document.getElementById("modalTitle").textContent =
        movie.title;


    document.getElementById("modalGenre").textContent =
        movie.genre;


    document.getElementById("modalYear").textContent =
        movie.year;


    document.getElementById("modalRating").textContent =
        `⭐ ${movie.rating}`;


    document.getElementById("modalDescription").textContent =
        movie.description;


    document.getElementById("modalDirector").textContent =
        movie.director;


    showSimilarMovies(movie);


    document
        .getElementById("movieModal")
        .classList.add("active");

}


// ==========================================
// FECHAR FILME
// ==========================================

function closeMovie() {

    document
        .getElementById("movieModal")
        .classList.remove("active");

}


// ==========================================
// FILMES SEMELHANTES
// ==========================================

function showSimilarMovies(movie) {

    const container =
        document.getElementById("similarMovies");

    container.innerHTML = "";


    const similar = movies

        .filter(item =>
            item.genre === movie.genre &&
            item.id !== movie.id
        )

        .slice(0, 4);


    similar.forEach(item => {

        const card =
            document.createElement("div");

        card.classList.add("similar-card");

        card.onclick = () =>
            openMovie(item.id);


        card.innerHTML = `

            <img 
                src="${item.image}"
                alt="${item.title}"
            >

            <p>
                ${item.title}
            </p>

        `;


        container.appendChild(card);

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
// FECHAR MODAL CLICANDO FORA
// ==========================================

document
    .getElementById("movieModal")
    .addEventListener("click", event => {

        if (
            event.target.id ===
            "movieModal"
        ) {

            closeMovie();

        }

    });


// ==========================================
// INICIAR SITE
// ==========================================

displayMovies(movies);
```

