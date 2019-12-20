import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from "../../shared/services/auth-service.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  authData: any;
  currentUser;
  returnUrl = "";
  status: boolean;
  userData: any = [];
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    //-------- Reset all credentials ----------//
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    localStorage.clear();
    this.router.navigate(["/"]);
    //----------------- END ------------------//
    this.submitted = false;
    this.status = false;
    this.loginForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.authService.login().subscribe(userDetails => {
      console.log(userDetails);
      this.userData = userDetails;
      this.userData.forEach(user => {
        if (
          user.email == this.loginForm.value.email &&
          user.password == this.loginForm.value.password
        ) {
          //this.returnUrl = "/home";
          this.router.navigate(["/home"]);
        }
      });
    });

    // if (

    //   this.authService.login(
    //     this.loginForm.value.email,
    //     this.loginForm.value.password
    //   )
    // ) {
    //   this.router.navigate(["/home"]);
    // }
  }
}
