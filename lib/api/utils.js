

// Backend
function buildTmdbImagesAddress(uri, format) {
  try {
    switch (format) {
      case "w500": {
        return `${process.env.ENDPOINT_TMDB_IMAGES}/w500/${uri}`
        break;
      }

      case "original": {
        return `${process.env.ENDPOINT_TMDB_IMAGES}/original/${uri}`
        break;
      }

      default: throw new Error("Formato de imagem não suportado!");

    }
  } catch (err) {
    console.log("Error", err);
    return err
  }
}