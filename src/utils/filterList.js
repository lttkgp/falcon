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

export { filterUniqueVideos };
