import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import { Post } from '../../../posts/interfaces/post.interface';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    component.post = {
      author: {},
      images: []
    } as Post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
