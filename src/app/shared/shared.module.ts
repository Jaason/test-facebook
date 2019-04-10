import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsModule } from "../posts/posts.module";
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [PostListComponent, PostListItemComponent]
})
export class SharedModule {}
