let joinArtists = (
  artists: {
    name: string;
    image: string;
  }[]
) => {
  let fartists: Array<string> = [];
  for (let artist of artists) {
    if (fartists.includes(artist.name) === false) {
      fartists.push(artist.name);
    }
  }

  return fartists.join(" // ");
};

export { joinArtists };
