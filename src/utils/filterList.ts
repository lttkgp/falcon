import { Post } from "../store/list/types";

let filterUniqueVideos = (frequents: Post[]): Post[] => {
  return frequents.filter(
    (post, i) => frequents.findIndex((match) => match.id === post.id) === i
  );
};

let filterGenres = (tags: string[]) => {
  let ftags: string[] = [];
  for (let tag of tags) {
    if (ftags.includes(tag) === false) {
      ftags.push(tag);
    }
  }

  return ftags;
};

export { filterUniqueVideos, filterGenres };
