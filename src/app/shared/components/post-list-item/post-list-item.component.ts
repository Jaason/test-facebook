import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { Post } from "../../../posts/interfaces/post.interface";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;

  constructor() {}

  ngOnInit() {}

  getAuthorLink() {
    return `/users/${this.post.author.id}`;
  }

  getPostLink() {
    return `/posts/${this.post.id}`;
  }
}
