import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { User } from 'src/app/posts/interfaces/post.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy{

  user: User = null;
  error = null;

  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService

  ) { }

  ngOnInit() {
    this.setupUser();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  private setupUser() {
    const userId = this.route.snapshot.params.userId;

    this.usersService.getUserById(userId)
    .pipe(
      takeUntil(
        this.destroy$
      )
    )
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
