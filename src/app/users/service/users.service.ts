import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { PostsResponse } from "src/app/posts/interfaces/responses/posts-response.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<PostsResponse>(environment.postsUrl).pipe(
      map(response => response.posts),
      map(posts => {
        const users = posts.map(post => {
          return post.author;
        });
        console.log(users);
        return users;
      })
    );
  }

  getUserById(userId: string) {
    return this.getUsers().pipe(
      map(users => {
        return users.find(user => {
          return user.id === userId;
        });
      })
    );
  }
}
