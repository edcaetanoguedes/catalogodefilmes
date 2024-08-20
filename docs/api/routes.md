
## Rotas de API

<code>/api/v1/authentication</code>

## Consulta de filmes

##### Busca títulos por "termo de pesquisa" com filtros configuráveis

<p style="color: #0f0">GET</p>
<code>/api/v1/search/movies?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. include_adult: `false` (por padrão, não inclui conteúdo adulto).
4. language: `pt-BR` (idioma padrão).
5. page: `1` (número da página de consulta).

```
{
  "page": {
    current: 1,
    total: 16
  },
  "results": [
    {
      "id": 000000,
      title: "",
      "resume": "...",
      "images": {
        poster_path: "~/abcd.jpg",
        backdrop_path: "~/abcd.jpg"
      },
      "genre": [...]
    }
  ]
```

##### Busca de título via ID

<code>/api/v1/search/movies?id=MOVIE_ID</code>
1. id: `MOVIE_ID`.

##### Lista de gêneros de filmes

<code>/api/v1/search/movies?list=genre</code>
1. list: `genre`.

## Consulta de séries

##### Busca de séries via "termo de pesquisa" com filtros configuráveis

<code>/api/v1/search/series?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>
1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. include_adult: `false` (por padrão, não inclui conteúdo adulto).
4. language: `pt-BR` (idioma padrão).
5. page: `1` (número da página de consulta).

<p style="color: #0f0">GET</p>

```
{
  "page": {
    current: 1,
    total: 16
  },
  "results": [
    {
      "id": 000000,
      title: "",
      "resume": "...",
      "images": {
        poster_path: "~/abcd.jpg",
        backdrop_path: "~/abcd.jpg"
      },
      "genre": [...]
    }
  ]
```

##### Busca de título via ID

<code>/api/v1/search/series?id=SERIE_ID</code>
1. id: `SERIE_ID`.

##### Lista de gêneros de séries

<code>/api/v1/search/series?list=genre</code>
1. list: `genre`.

## Consulta de coleções

##### Busca de coleções por "termo de pesquisa"

<code>/api/v1/search/collection?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1'</code>
1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. include_adult: `false` (por padrão, não inclui conteúdo adulto).
4. language: `pt-BR` (idioma padrão).
5. page: `1` (número da página de consulta).

## Consulta de pessoas

##### Busca de pessoas do mundo cinematográfico e da TV

<code>/api/v1/search/person?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

