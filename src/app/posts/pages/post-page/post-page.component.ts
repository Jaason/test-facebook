import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post = null;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupPost();
  }

  private setupPost() {
    const postId = this.route.snapshot.params.postId;
    this.postsService.getPostById(postId)
    .subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
