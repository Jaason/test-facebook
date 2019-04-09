import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { PostsService } from "./posts.service";
import { environment } from "src/environments/environment";
import * as Ajv from "ajv";

import * as SCHEME from "../../../schemas/post.scheme.json";

let service: PostsService = null;

function fakePost() {
  return {
    id: "",
    created_time: "",
    author: {
      id: "",
      name: "",
      avatar_url: ""
    },
    body: "",
    images: []
  };
}

describe("PostsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(PostsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should returns list of posts", () => {
    service.getPosts().subscribe({
      next: response => {
        expect(response.posts.length).toEqual(3);
      }
    });

    const httpMock = TestBed.get(HttpTestingController);
    httpMock.expectOne(environment.postsUrl).flush({
      posts: [1, 2, 3]
    });
  });

  it("should returns valid response schema", () => {
    const ajv = new Ajv();
    const validator = ajv.compile(SCHEME["default"]);

    service.getPosts().subscribe({
      next: response => {
        const isValid = validator(response);
        expect(isValid).toEqual(true);
        expect(validator.errors).toBeNull();
        // console.log(validator.errors);
      }
    });

    const httpMock = TestBed.get(HttpTestingController);
    httpMock.expectOne(environment.postsUrl).flush({
      posts: Array.from({ length: 5 }).map(fakePost)
      // posts: [fakePost(), fakePost(), fakePost(), fakePost(), fakePost()]
      // posts: Array(5).fill(null).map(fakePost)
    });
  });
});
