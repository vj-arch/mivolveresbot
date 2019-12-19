import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  NzGridModule,
  NzFormModule,
  NzButtonModule,
  NzInputModule,
  NzIconModule,
  NzCheckboxModule
} from "ng-zorro-antd";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [LoginComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzGridModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule {}
