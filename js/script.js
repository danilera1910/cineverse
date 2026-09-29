const movies=[
  {
    "id": "interestelar",
    "title": "Interestelar",
    "year": 2014,
    "genre": "Ficção Científica",
    "rating": 8.7,
    "image": "imagens/interestelar.png",
    "link": "filmes/interestelar.html"
  },
  {
    "id": "avatar",
    "title": "Avatar",
    "year": 2009,
    "genre": "Ficção Científica",
    "rating": 7.8,
    "image": "imagens/avatar.png",
    "link": "filmes/avatar.html"
  },
  {
    "id": "planeta-dos-macacos",
    "title": "Planeta dos Macacos",
    "year": 2011,
    "genre": "Ficção Científica",
    "rating": 7.6,
    "image": "imagens/planeta-dos-macacos.png",
    "link": "filmes/planeta-dos-macacos.html"
  },
  {
    "id": "vingadores-ultimato",
    "title": "Vingadores: Ultimato",
    "year": 2019,
    "genre": "Ação",
    "rating": 8.4,
    "image": "imagens/vingadores-ultimato.png",
    "link": "filmes/vingadores-ultimato.html"
  },
  {
    "id": "batman",
    "title": "Batman: O Cavaleiro das Trevas",
    "year": 2008,
    "genre": "Ação",
    "rating": 9.0,
    "image": "imagens/batman.png",
    "link": "filmes/batman.html"
  },
  {
    "id": "homem-aranha",
    "title": "O Espetacular Homem-Aranha",
    "year": 2012,
    "genre": "Ação",
    "rating": 6.9,
    "image": "imagens/homem-aranha.png",
    "link": "filmes/homem-aranha.html"
  },
  {
    "id": "para-todos-os-garotos",
    "title": "Para Todos os Garotos que Já Amei",
    "year": 2018,
    "genre": "Romance",
    "rating": 7.0,
    "image": "imagens/para-todos-os-garotos.png",
    "link": "filmes/para-todos-os-garotos.html"
  },
  {
    "id": "diario-de-uma-paixao",
    "title": "Diário de uma Paixão",
    "year": 2004,
    "genre": "Romance",
    "rating": 7.8,
    "image": "imagens/diario-de-uma-paixao.png",
    "link": "filmes/diario-de-uma-paixao.html"
  },
  {
    "id": "50-first-dates",
    "title": "Como Se Fosse a Primeira Vez",
    "year": 2004,
    "genre": "Romance",
    "rating": 6.8,
    "image": "imagens/50-first-dates.png",
    "link": "filmes/50-first-dates.html"
  },
  {
    "id": "entidade",
    "title": "A Entidade",
    "year": 2012,
    "genre": "Terror",
    "rating": 6.8,
    "image": "imagens/entidade.png",
    "link": "filmes/entidade.html"
  },
  {
    "id": "invocacao-do-mal",
    "title": "Invocação do Mal",
    "year": 2013,
    "genre": "Terror",
    "rating": 7.5,
    "image": "imagens/invocacao-do-mal.png",
    "link": "filmes/invocacao-do-mal.html"
  },
  {
    "id": "corra",
    "title": "Corra!",
    "year": 2017,
    "genre": "Terror",
    "rating": 7.7,
    "image": "imagens/corra.png",
    "link": "filmes/corra.html"
  },
  {
    "id": "ratatouille",
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animação",
    "rating": 8.1,
    "image": "imagens/ratatouille.png",
    "link": "filmes/ratatouille.html"
  },
  {
    "id": "toy-story-3",
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animação",
    "rating": 8.3,
    "image": "imagens/toy-story-3.png",
    "link": "filmes/toy-story-3.html"
  },
  {
    "id": "enrolados",
    "title": "Enrolados",
    "year": 2010,
    "genre": "Animação",
    "rating": 7.7,
    "image": "imagens/enrolados.png",
    "link": "filmes/enrolados.html"
  },
  {
    "id": "shrek",
    "title": "Shrek",
    "year": 2001,
    "genre": "Comédia",
    "rating": 7.9,
    "image": "imagens/shrek.png",
    "link": "filmes/shrek.html"
  },
  {
    "id": "lobo-de-wall-street",
    "title": "O Lobo de Wall Street",
    "year": 2013,
    "genre": "Comédia",
    "rating": 8.2,
    "image": "imagens/lobo-de-wall-street.png",
    "link": "filmes/lobo-de-wall-street.html"
  },
  {
    "id": "up",
    "title": "Up: Altas Aventuras",
    "year": 2009,
    "genre": "Comédia",
    "rating": 8.3,
    "image": "imagens/up.png",
    "link": "filmes/up.html"
  }
];

const grid=document.getElementById("movieGrid"),input=document.getElementById("searchInput"),button=document.getElementById("searchButton"),select=document.getElementById("genreFilter"),message=document.getElementById("resultMessage");
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function render(list){if(!grid)return;grid.innerHTML=list.length?list.map(m=>`<article class="movie-card"><a href="${m.link}"><div class="movie-poster"><img src="${m.image}" alt="Capa de ${m.title}" loading="lazy"><span class="rating">★ ${m.rating}</span></div><div class="movie-info"><h3>${m.title}</h3><div class="movie-meta"><span>${m.year}</span><span>${m.genre}</span></div></div></a></article>`).join(""): '<div class="empty-state">Nenhum filme encontrado.</div>';}
function filter(){if(!grid)return;const q=norm(input?.value||""),g=select?.value||"Todos";const list=movies.filter(m=>(norm(m.title).includes(q)||norm(m.genre).includes(q))&&(g==="Todos"||m.genre===g));render(list);if(message)message.textContent=q?`${list.length} filme(s) encontrado(s) para "${input.value}".`:g!=="Todos"?`${list.length} filme(s) em ${g}.`:"";}
input?.addEventListener("input",filter);select?.addEventListener("change",filter);button?.addEventListener("click",()=>{if(grid)filter();else window.location.href=`../index.html?busca=${encodeURIComponent(input.value.trim())}`});input?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();button.click()}});document.querySelectorAll("[data-genre]").forEach(b=>b.addEventListener("click",()=>{select.value=b.dataset.genre;filter();document.getElementById("filmes")?.scrollIntoView({behavior:"smooth"})}));if(grid){const p=new URLSearchParams(location.search).get("busca");if(p)input.value=p;filter();}