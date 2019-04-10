import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../shared/components/post-list/post-list.component';
import { PostListItemComponent } from '../shared/components/post-list-item/post-list-item.component';
import { PostsService } from './services/posts.service';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsRoutingModule } from './post-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
