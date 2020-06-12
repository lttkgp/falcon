let joinArtists = (
  artists: [
    {
      name: string;
      image: string;
    }
  ]
) => {
  return artists.reduce((combined, artist) => {
    combined.name += ' // ' + artist.name;
    return combined;
  }).name;
};

export { joinArtists };
