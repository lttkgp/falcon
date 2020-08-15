export enum FeedListType {
  frequent = "frequent",
  latest = "latest",
  popular = "popular",
  underrated = "underrated",
}

export interface FeedState {
  latest: ListState;
  popular: ListState;
  underrated: ListState;
  frequent: ListState;
}

export interface ListState extends FeedResponse {
  isLoading: boolean;
}

export interface FeedResponse {
  total: number;
  next: string;
  posts: Post[];
}

export interface Post {
  link: string;
  id: string;
  post_count: number;
  postdata: PostData;
  metadata: Metadata;
}

interface Metadata {
  song: Song;
  artists: Artist[];
  genre: string[];
}

interface Song {
  image: string;
  name: string;
}

interface Artist {
  image: string;
  name: string;
}

interface PostData {
  permalink_url: string;
  likes_count: number;
  caption: string;
  share_date: string;
}
