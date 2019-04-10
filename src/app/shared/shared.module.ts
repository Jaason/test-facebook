import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsModule } from "../posts/posts.module";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostListItemComponent } from "./components/post-list-item/post-list-item.component";
import { UsersModule } from "../users/users.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CacheInterceptor } from "./interceptors/cache.interceptor";

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  imports: [CommonModule, RouterModule, UsersModule],
  exports: [PostListComponent, PostListItemComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
