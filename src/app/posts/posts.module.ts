import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule { }
