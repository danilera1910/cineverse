/* =====================================================
   CINEVERSE
   JAVASCRIPT PRINCIPAL
===================================================== */


/* =====================================================
   FILMES
===================================================== */

const movies = [

    {
        id: "interestelar",
        title: "Interestelar",
        year: 2014,
        genre: "Ficção Científica",
        rating: 8.7,
        image: "imagens/interestelar.png",
        link: "filmes/interestelar.html"
    },

    {
        id: "avatar",
        title: "Avatar",
        year: 2009,
        genre: "Ficção Científica",
        rating: 7.9,
        image: "imagens/avatar.png",
        link: "filmes/avatar.html"
    },

    {
        id: "planeta-dos-macacos",
        title: "Planeta dos Macacos",
        year: 2011,
        genre: "Ficção Científica",
        rating: 7.6,
        image: "imagens/planeta-dos-macacos.png",
        link: "filmes/planeta-dos-macacos.html"
    },

    {
        id: "vingadores-ultimato",
        title: "Vingadores: Ultimato",
        year: 2019,
        genre: "Ação",
        rating: 8.4,
        image: "imagens/vingadores-ultimato.png",
        link: "filmes/vingadores-ultimato.html"
    },

    {
        id: "batman",
        title: "O Cavaleiro das Trevas",
        year: 2008,
        genre: "Ação",
        rating: 9.0,
        image: "imagens/batman.png",
        link: "filmes/batman.html"
    },

    {
        id: "homem-aranha",
        title: "O Espetacular Homem-Aranha",
        year: 2012,
        genre: "Ação",
        rating: 6.9,
        image: "imagens/homem-aranha.png",
        link: "filmes/homem-aranha.html"
    },

    {
        id: "senhor-dos-aneis",
        title: "O Senhor dos Anéis",
        year: 2001,
        genre: "Ação",
        rating: 8.9,
        image: "imagens/senhor-dos-aneis.png",
        link: "filmes/senhor-dos-aneis.html"
    },

    {
        id: "rocky",
        title: "Rocky",
        year: 1976,
        genre: "Ação",
        rating: 8.1,
        image: "imagens/rocky.png",
        link: "filmes/rocky.html"
    },

    {
        id: "para-todos-os-garotos",
        title: "Para Todos os Garotos que Já Amei",
        year: 2018,
        genre: "Romance",
        rating: 7.0,
        image: "imagens/para-todos-os-garotos.png",
        link: "filmes/para-todos-os-garotos.html"
    },

    {
        id: "diario-de-uma-paixao",
        title: "Diário de uma Paixão",
        year: 2004,
        genre: "Romance",
        rating: 7.8,
        image: "imagens/diario-de-uma-paixao.png",
        link: "filmes/diario-de-uma-paixao.html"
    },

    {
        id: "50-first-dates",
        title: "Como Se Fosse a Primeira Vez",
        year: 2004,
        genre: "Romance",
        rating: 6.8,
        image: "imagens/50-first-dates.png",
        link: "filmes/50-first-dates.html"
    },

    {
        id: "invocacao-do-mal",
        title: "Invocação do Mal",
        year: 2013,
        genre: "Terror",
        rating: 7.5,
        image: "imagens/invocacao-do-mal.png",
        link: "filmes/invocacao-do-mal.html"
    },

    {
        id: "entidade",
        title: "A Entidade",
        year: 2012,
        genre: "Terror",
        rating: 6.8,
        image: "imagens/entidade.png",
        link: "filmes/entidade.html"
    },

    {
        id: "corra",
        title: "Corra!",
        year: 2017,
        genre: "Terror",
        rating: 7.8,
        image: "imagens/corra.png",
        link: "filmes/corra.html"
    },

    {
        id: "sinners",
        title: "Sinners",
        year: 2025,
        genre: "Terror",
        rating: 7.5,
        image: "imagens/sinners.png",
        link: "filmes/sinners.html"
    },

    {
        id: "ratatouille",
        title: "Ratatouille",
        year: 2007,
        genre: "Animação",
        rating: 8.1,
        image: "imagens/ratatouille.png",
        link: "filmes/ratatouille.html"
    },

    {
        id: "toy-story-3",
        title: "Toy Story 3",
        year: 2010,
        genre: "Animação",
        rating: 8.3,
        image: "imagens/toy-story-3.png",
        link: "filmes/toy-story-3.html"
    },

    {
        id: "enrolados",
        title: "Enrolados",
        year: 2010,
        genre: "Animação",
        rating: 7.7,
        image: "imagens/enrolados.png",
        link: "filmes/enrolados.html"
    },

    {
        id: "up",
        title: "Up: Altas Aventuras",
        year: 2009,
        genre: "Animação",
        rating: 8.3,
        image: "imagens/up.png",
        link: "filmes/up.html"
    },

    {
        id: "nemo",
        title: "Procurando Nemo",
        year: 2003,
        genre: "Animação",
        rating: 8.2,
        image: "imagens/nemo.png",
        link: "filmes/nemo.html"
    },

    {
        id: "shrek",
        title: "Shrek",
        year: 2001,
        genre: "Comédia",
        rating: 7.9,
        image: "imagens/shrek.png",
        link: "filmes/shrek.html"
    },

    {
        id: "lobo-de-wall-street",
        title: "O Lobo de Wall Street",
        year: 2013,
        genre: "Comédia",
        rating: 8.2,
        image: "imagens/lobo-de-wall-street.png",
        link: "filmes/lobo-de-wall-street.html"
    },

    {
        id: "whiplash",
        title: "Whiplash",
        year: 2014,
        genre: "Comédia",
        rating: 8.5,
        image: "imagens/whiplash.png",
        link: "filmes/whiplash.html"
    },

    {
        id: "clube-da-luta",
        title: "Clube da Luta",
        year: 1999,
        genre: "Comédia",
        rating: 8.8,
        image: "imagens/clube-da-luta.png",
        link: "filmes/clube-da-luta.html"
    },

    {
        id: "psicopata-americano",
        title: "Psicopata Americano",
        year: 2000,
        genre: "Terror",
        rating: 7.6,
        image: "imagens/psicopata-americano.png",
        link: "filmes/psicopata-americano.html"
    },

    {
        id: "parasita",
        title: "Parasita",
        year: 2019,
        genre: "Comédia",
        rating: 8.5,
        image: "imagens/parasita.png",
        link: "filmes/parasita.html"
    }

];


/* =====================================================
   FILMES EM DESTAQUE
===================================================== */

const featuredMovies = [

    {
        title: "Interestelar",
        year: "2014",
        rating: "8.7",
        genre: "Ficção Científica",
        description:
            "Uma equipe de exploradores atravessa um buraco de minhoca em busca de um novo lar para a humanidade.",
        image: "imagens/interestelar.png",
        link: "filmes/interestelar.html"
    },

    {
        title: "O Cavaleiro das Trevas",
        year: "2008",
        rating: "9.0",
        genre: "Ação",
        description:
            "Batman enfrenta uma ameaça que coloca Gotham em caos e desafia todos os seus limites.",
        image: "imagens/batman.png",
        link: "filmes/batman.html"
    },

    {
        title: "Vingadores: Ultimato",
        year: "2019",
        rating: "8.4",
        genre: "Ação",
        description:
            "Os Vingadores precisam encontrar uma maneira de desfazer as consequências da batalha contra Thanos.",
        image: "imagens/vingadores-ultimato.png",
        link: "filmes/vingadores-ultimato.html"
    },

    {
        title: "Avatar",
        year: "2009",
        rating: "7.9",
        genre: "Ficção Científica",
        description:
            "Em um mundo distante, um ex-fuzileiro se envolve em um conflito que pode mudar o destino de um planeta.",
        image: "imagens/avatar.png",
        link: "filmes/avatar.html"
    },

    {
        title: "Whiplash",
        year: "2014",
        rating: "8.5",
        genre: "Drama",
        description:
            "Um jovem baterista busca a perfeição enquanto enfrenta os métodos extremos de seu professor.",
        image: "imagens/whiplash.png",
        link: "filmes/whiplash.html"
    }

];


let featuredIndex = 0;


/* =====================================================
   ELEMENTOS
===================================================== */

const movieGrid =
    document.getElementById("movieGrid");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const genreFilter =
    document.getElementById("genreFilter");

const resultMessage =
    document.getElementById("resultMessage");


/* =====================================================
   CRIAR CARDS
===================================================== */

function renderMovies(list) {

    movieGrid.innerHTML = "";


    if (list.length === 0) {

        movieGrid.innerHTML = `
            <div class="empty-state">
                Nenhum filme encontrado.
            </div>
        `;

        return;
    }


    list.forEach(movie => {

        const card = document.createElement("article");

        card.className = "movie-card";


        card.innerHTML = `

            <a href="${movie.link}">

                <div class="movie-poster">

                    <img
                        src="${movie.image}"
                        alt="Capa de ${movie.title}"
                        loading="lazy"
                    >

                    <span class="rating">
                        ★ ${movie.rating}
                    </span>

                </div>


                <div class="movie-info">

                    <h3>
                        ${movie.title}
                    </h3>

                    <div class="movie-meta">

                        <span>
                            ${movie.year}
                        </span>

                        <span>
                            ${movie.genre}
                        </span>

                    </div>

                </div>

            </a>
        `;


        movieGrid.appendChild(card);

    });

}


/* =====================================================
   FILTRO
===================================================== */

function filterMovies() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedGenre =
        genreFilter.value;


    const filteredMovies =
        movies.filter(movie => {

            const matchesSearch =
                movie.title
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesGenre =
                selectedGenre === "Todos" ||
                movie.genre === selectedGenre;


            return matchesSearch &&
                   matchesGenre;

        });


    renderMovies(filteredMovies);


    if (searchTerm !== "") {

        resultMessage.textContent =
            `${filteredMovies.length} filme(s) encontrado(s).`;

    } else if (selectedGenre !== "Todos") {

        resultMessage.textContent =
            `${filteredMovies.length} filme(s) em ${selectedGenre}.`;

    } else {

        resultMessage.textContent = "";

    }

}


/* =====================================================
   EVENTOS DE PESQUISA
===================================================== */

searchInput.addEventListener(
    "input",
    filterMovies
);


searchButton.addEventListener(
    "click",
    filterMovies
);


genreFilter.addEventListener(
    "change",
    filterMovies
);


/* =====================================================
   BOTÕES DE GÊNERO
===================================================== */

const genreButtons =
    document.querySelectorAll(
        ".genres button"
    );


genreButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const genre =
                button.dataset.genre;


            genreFilter.value =
                genre;


            filterMovies();


            document
                .getElementById("filmes")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


/* =====================================================
   ATUALIZAR DESTAQUE
===================================================== */

function updateFeaturedMovie() {

    const hero =
        document.querySelector(".hero");

    const content =
        document.querySelector(".hero-content");


    const title =
        document.getElementById(
            "featuredTitle"
        );

    const year =
        document.getElementById(
            "featuredYear"
        );

    const rating =
        document.getElementById(
            "featuredRating"
        );

    const genre =
        document.getElementById(
            "featuredGenre"
        );

    const description =
        document.getElementById(
            "featuredDescription"
        );

    const link =
        document.getElementById(
            "featuredLink"
        );


    if (!hero || !content) {
        return;
    }


    const movie =
        featuredMovies[featuredIndex];


    content.classList.add(
        "changing"
    );


    setTimeout(() => {

        title.textContent =
            movie.title;

        year.textContent =
            movie.year;

        rating.textContent =
            `★ ${movie.rating}`;

        genre.textContent =
            movie.genre;

        description.textContent =
            movie.description;

        link.href =
            movie.link;


        hero.style.backgroundImage = `

            linear-gradient(
                90deg,
                #09090d 0%,
                rgba(9, 9, 13, 0.90) 42%,
                rgba(9, 9, 13, 0.35) 75%,
                rgba(9, 9, 13, 0.95)
            ),

            url("${movie.image}")

        `;


        updateDots();


        content.classList.remove(
            "changing"
        );

    }, 400);

}


/* =====================================================
   DOTS
===================================================== */

function updateDots() {

    const dots =
        document.querySelectorAll(
            ".featured-dots button"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === featuredIndex
            );

        }
    );

}


/* =====================================================
   CLIQUE NOS DOTS
===================================================== */

const dots =
    document.querySelectorAll(
        ".featured-dots button"
    );


dots.forEach(dot => {

    dot.addEventListener(
        "click",
        () => {

            featuredIndex =
                Number(
                    dot.dataset.slide
                );


            updateFeaturedMovie();

        }
    );

});


/* =====================================================
   TROCA AUTOMÁTICA
===================================================== */

setInterval(() => {

    featuredIndex++;


    if (
        featuredIndex >=
        featuredMovies.length
    ) {

        featuredIndex = 0;

    }


    updateFeaturedMovie();

}, 5000);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

renderMovies(movies);
