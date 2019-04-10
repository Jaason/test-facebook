export interface Post {
  id: string;
  created_time: string;
  author: User;
  body: string;
  images: string[];
}

export interface Author extends User {
}

export interface User {
  id: string;
  name: string;
  avatar_url: string;
}