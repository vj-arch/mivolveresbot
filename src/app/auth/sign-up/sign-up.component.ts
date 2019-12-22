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
  universityNames=[];

//-----------------------------------------------------------------------------------
bigList: string[] = new Array(10000).fill(0).map((_, i) => i.toString(36) + i);
  optionList: string[] = [];

  displayTips = true;

  onSearch(value: string): void {
    if (value && value.length > 1) {
      this.optionList = this.universityNames[0];
      this.displayTips = false;
    } else {
      this.optionList = [];
      this.displayTips = true;
    }
  }




//------------------------------------------------------------------------------------

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    this.authService.caseStudyFilter().subscribe(universityNames => {
      this.universityNames.push(universityNames[0].properties.country.items.enum);
      console.log(this.universityNames);
    });
  }
}
