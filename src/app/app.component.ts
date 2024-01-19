import { User } from './model/User';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  error: any = [];
  user: User;

  constructor(private toastr: ToastrService, private userService: UserService) {
    this.user = new User();
  }
  ngOnInit(): void {}

  handelError(error: any) {
    this.error = error.error;
  }

  signUp() {
    this.userService.signUp(this.user).subscribe(
      (res) => {
        this.toastr.success('Your account was created successfuly!', '', {
          progressBar: true,
          timeOut: 3000,
        });
        this.error = [];
      },
      (err) => this.handelError(err)
    );
  }
}
