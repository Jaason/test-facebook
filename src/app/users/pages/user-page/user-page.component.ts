import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { User } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User = null;
  error = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService

  ) { }

  ngOnInit() {
    this.setupUser();
  }

  private setupUser() {
    const userId = this.route.snapshot.params.userId;

    this.usersService.getUserById(userId)
    .subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        this.user = null;
        this.error = err;
        console.error(err);
      }
    })
  }

}
