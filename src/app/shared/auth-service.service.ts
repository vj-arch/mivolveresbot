import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  flag: boolean = false;
  user = [
    {
      email: "hello@gmail.com",
      password: "1234"
    },
    {
      email: "hello2@gmail.com",
      password: "1234"
    }
  ];
  userData: any = [];

  constructor(private http: HttpClient) {}
  //-------------------------Login() linked to SignIn-------------------------------------------//
  login() {
    // console.log(this.user);
    //this.flag = false;

    //----------------Http Requests come In here Once we get the Api's---------

    return this.http.get("../../assets/userData.json");
    //.subscribe(UserDetail => {
    //   this.userData = UserDetail;
    //   this.userData.forEach(User => {
    //     if (User.email === email && User.password === password) {
    //       localStorage.setItem("currentUser", User.email);

    //       console.log(email, User.email);
    //       console.log(password, User.password);

    //       this.flag = true;
    //       return true;
    //     }
    //   });
    // });

    // this.user.forEach(User => {
    //   //console.log(User);
    //   if (User.email == email && User.password == password) {
    //     localStorage.setItem("currentUser", User.email);

    //     this.flag = true;
    //   }
    // });
    // return this.flag;
  }
}
