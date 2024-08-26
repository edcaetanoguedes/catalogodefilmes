
## Rotas de API

<code>/api/v1/authentication</code>

## Consulta de filmes

#### Filmes: Busca títulos por "termo de pesquisa" com filtros configuráveis

> ##### GET <code>/api/v1/search/movies?mode=MODE&query=TERMO_DE_PESQUISA&language=LANGUAGE&page=1</code>

1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. language: `pt-BR` (idioma padrão).
4. page: `1` (número da página de consulta).


> ##### GET <code>/api/v1/search/movies?mode=resume&query=TERMO_DE_PESQUISA&language=LANGUAGE&page=1</code>

```
{
  "page": {
    "current": 1,
    "total": 3
  },
  "total_results": 16,
  "results": [
    {
      "id": 000000,
      title: "Título do filme",
      "grade": 10.0,
      "images": {
        poster_path: "~/w500/poster_path.jpg",
        backdrop_path: "~/w500/backdrop_path.jpg"
      },
    }
  ]
```

> ##### GET <code>/api/v1/search/movies?mode=complete&query=TERMO_DE_PESQUISA&language=LANGUAGE&page=1</code>

```
response:
{
  "page": {
    "current": 1,
    "total": 3
  },
  "total_results": 16,
  "results": [
    {
      "id": 000000,
      title: "Título do filme",
      "grade": 10.0,
      "resume": "Resumo do título",
      "images": {
        poster_path: {
          original: "~/original/poster_path.jpg",
          w500: "~/w500/poster_path.jpg"
        },
        backdrop_path: {
          original: "~/original/backdrop_path.jpg",
          w500: "~/w500/backdrop_path.jpg"
        },
      },
      "genres": [ "Ação", "Crime", ... ]
    }
  ]
```

#### Filmes: Busca de título via ID

> ##### GET <code>/api/v1/search/movies?id=MOVIE_ID&language=LANGUAGE</code>
1. id: `MOVIE_ID`.
2. language: `pt-BR` (idioma padrão).

```
{
  "id": "00000",
  "imdb_id": "tt000000",
  "title": {
    "title": "Título no idioma configurado",
    "original": "Título no idioma original da obra"
  },
  "release": {
    "status": "status do lançamento",
    "date": "01/01/1900"
  },
  "origin_country": "US",
  "genres": [ "Ação", "Crime", ... ],
  "images": {
    backdrop_path: {
      original: "",
      w500: ""
    },
    poster_path: {
      original: "",
      w500: ""
    }
  },
  "collection": {
    "id": "ID da coleção",
    "name": "nome da coleção",
    "images": {
      "poster_path": {
        "original": "~/original/poster_path.jpg",
        "w500": "~/original/poster_path.jpg"
      },
      "backdrop_path": {
        "original": "~/original/backdrop_path.jpg",
        "w500": "~/original/backdrop_path.jpg"
      }
    }
  }
}
```

#### Filmes: Lista de gêneros

> ##### GET <code>/api/v1/search/movies?list=genre&language=LANGUAGE</code>
1. list: `genre`.
2. language: `LANGUAGE`.

```
{
  "results": [
    {
      "name": "Ação"
    },
    {
      "name": "Suspense"
    }
  ]
}
```

## Consulta de séries

#### Séries: Busca via "termo de pesquisa" com filtros configuráveis

> ##### GET <code>/api/v1/search/series?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>
1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. include_adult: `false` (por padrão, não inclui conteúdo adulto).
4. language: `pt-BR` (idioma padrão).
5. page: `1` (número da página de consulta).

> ##### GET <code>/api/v1/search/series?mode=resume&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

```
{
  "page": {
    current: 1,
    total: 3
  },
  "total_results": 16,
  "results": [
    {
      "id": 000000,
      title: "Título do filme",
      "grade": 10.0,
      "resume": "Resumo do título",
      "images": {
        poster_path: "~/w500/poster_path.jpg",
        backdrop_path: "~/w500/backdrop_path.jpg"
      }
    }
  ]
```

> ##### GET <code>/api/v1/search/series?mode=complete&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

```
{
  "page": {
    current: 1,
    total: 3
  },
  "total_results": 16,
  "results": [
    {
      "id": 000000,
      "title": "Título do filme",
      "release": {
        "date": "01/01/1900"
      },
      "grade": 10.0,
      "resume": "Resumo do título",
      "images": {
        poster_path: {
          original: "~/original/poster_path.jpg",
          w500: "~/w500/poster_path.jpg"
        },
        backdrop_path: {
          original: "~/original/backdrop_path.jpg",
          w500: "~/w500/backdrop_path.jpg"
        },
      },
      "genres": [ "Ação", "Crime", ... ],
    }
  ]
```

#### Séries: Busca de título via ID

> ##### GET <code>/api/v1/search/series?id=SERIE_ID&language=LANGUAGE </code>

1. id: `SERIE_ID` (Id da série).
2. language: `pt-BR` (idioma padrão).

```
{
  "id": "00000",
  "imdb_id": "tt000000",
  "title": {
    "title": "Título no idioma configurado",
    "original": "Título no idioma original da obra"
  },
  "release": {
    "status": "status do lançamento",
    "last_date": "01/01/1900",
    "first_date": "01/01/1900"
  },
  "grade": 10.0,
  "resume": "Resumo do título",
  "origin_country": "US",
  "genres": [ "Ação", "Crime", ... ],
  "images": {
    backdrop_path: {
      original: "",
      w500: ""
    },
    poster_path: {
      original: "",
      w500: ""
    }
  },
  "production": [
    {
      "name": "Nome da compania de produção",
      "logo": {
        "original": "~/original/logo.jpg",
        "w500": "~/w500/logo.jpg"
      }
    }, ...
  ]
  "collection": {
    "id": "ID da coleção",
    "name": "nome da coleção",
    images: {
      "poster_path": {
        "original": "~/original/poster_path.jpg",
        "w500": "~/original/poster_path.jpg"
      },
      "backdrop_path": {
        "original": "~/original/backdrop_path.jpg",
        "w500": "~/original/backdrop_path.jpg"
      }
    }
  }
}
```

##### Séries: Lista de gêneros

> ##### GET<code>/api/v1/search/series?list=genre&language=LANGUAGE</code>
1. list: `genre`.
2. language: `LANGUAGE` (pt-BR idiomate padrão).

```
{
  "results": [
    {
      "name": "Ação"
    },
    {
      "name": "Suspense"
    }
  ]
}
```

## Consulta de coleções

#### Coleções: Busca por "termo de pesquisa"

> ##### GET <code>/api/v1/search/collection?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1'</code>
1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. include_adult: `false` (por padrão, não inclui conteúdo adulto).
4. language: `pt-BR` (idioma padrão).
5. page: `1` (número da página de consulta).

> ##### GET <code>/api/v1/search/collection?mode=resume&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1'</code>

```
{
  "page": {
    "current": 1,
    "total": 1
  },
  "total_results": 4,
  "results": [
    "id": 000000,
      title: "Título da Coleção",
      "grade": 10.0,
      "resume": "Resumo da obra",
      "images": {
        poster_path: "~/w500/poster_path.jpg",
        backdrop_path: "~/w500/backdrop_path.jpg"
      }
  ]
```

> ##### GET <code>/api/v1/search/collection?mode=complete&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1'</code>

```
{
  "page": {
    "current": 1,
    "total": 1
  },
  "total_results": 4,
  "results": [
    {
      "id": 000000,
      title: "Título do Coleção",
      "resume": "Resumo do título",
      "images": {
        poster_path: {
          original: "~/original/poster_path.jpg",
          w500: "~/w500/poster_path.jpg"
        },
        backdrop_path: {
          original: "~/original/backdrop_path.jpg",
          w500: "~/w500/backdrop_path.jpg"
        },
      }
    }
  ]
```

#### Coleções: Busca de título via ID

> ##### GET <code>/api/v1/collection?id=COLLECTION_ID&language=LANGUAGE </code>

1. id: `COLLECTION_ID` (id da Coleção).
2. language: `LANGUAGE` (pt-BR idioma padrão).

```
{
  "id": "00000",
  "title": {
    "title": "Título no idioma configurado",
  },
  "resume": "Resumo do título",
  "images": {
    backdrop_path: {
      original: "",
      w500: ""
    },
    poster_path: {
      original: "",
      w500: ""
    }
  },
  "parts": [
    "id": "00000",
    "title": "Título da mídia",
    "type": "tipoe de média (filme, série, etc)",
    "grade": 10.0,
    "genres": [ "Ação", "Suspense", ... ],
    "images": {
      poster_path: "~/w500/poster_path.jpg",
      backdrop_path: "~/w500/backdrop_path.jpg"
    }
  ]
}
```
parts: `títulos ou temporadas`.

## Consulta de pessoas

#### Busca de personalidades do mundo cinematográfico e da TV

> ##### GET <code>/api/v1/search/person?mode=MODE&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

1. mode: `complete` para páginas dedicadas ou `resume` para cards.
2. query=`TERMO DE PESQUISA`.
3. include_adult: `false` (por padrão, não inclui conteúdo adulto).
4. language: `pt-BR` (idioma padrão).
5. page: `1` (número da página de consulta).

> ##### GET <code>/api/v1/search/person?mode=resume&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

```
{
  "pages": {
    "current": 1,
    "total": 2
  },
  "total_results": 18,
  "id": "000000",
  "name": "Nome artístico",
  "images": {
      "profile_path": "~/w500/profile_path.jpg"
  }
}
```

> ##### GET <code>/api/v1/search/person?mode=complete&query=TERMO_DE_PESQUISA&include_adult=false&language=LANGUAGE&page=1</code>

```
{
  "pages": {
    "current": 1,
    "total": 2
  },
  "total_results": 18,
  "id": "000000",
  "name": "Nome artístico",
  "images": {
      "profile_path": "~/w500/profile_path.jpg"
  },
  "works": [
    {
      "id": "000000",
      "title": "Título da obra",
      "release": "0000-00-00",
      "media_type": "movie" ou "serie",
      "grade": 10.0
      "genres": [ "Ação", "Suspense", ... ],
      "images": {
        poster_path: "~/w500/poster_path.jpg",
        backdrop_path: "~/w500/backdrop_path.jpg"
      }
    }
  ]
}
```