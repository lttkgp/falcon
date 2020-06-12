let filterUniqueVideos = (frequents) => {
  var flags = {};
  var filtered = frequents.filter((post) => {
    if (flags[post.id]) {
      return false;
    }
    flags[post.id] = true;
    return true;
  });

  return filtered;
};

let filterGenres = (tags) => {
  let ftags = [];
  for (let tag of tags) {
    if (ftags.includes(tag) === false) {
      ftags.push(tag);
    }
  }

  return ftags;
};

export { filterUniqueVideos, filterGenres };
