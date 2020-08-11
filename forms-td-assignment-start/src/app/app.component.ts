import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptionOptions: string[] = ["Basic", "Advanced", "Pro"];
  selectedSubscription = "Advanced";
  @ViewChild('f', { static: true }) userForm: NgForm;
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.userForm.value.userData.email;
    this.user.subscription = this.userForm.value.userData.subscription;
    this.user.password = this.userForm.value.userData.password;
    this.userForm.reset();
  }

}
