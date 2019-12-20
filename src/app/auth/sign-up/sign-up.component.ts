import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { Observable } from "rxjs";
//---------------------userdefined imports---------------------------//
import { FilterPipe } from "../../shared/pipes/filter.pipe";
import { AuthServiceService } from "../../shared/services/auth-service.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  universityNameOb: Observable<any>;
  universityNames = [];
  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    this.authService.caseStudyFilter().subscribe(universityNames => {
      this.universityNames.push(universityNames);
      console.log(this.universityNames);
    });
  }
}
