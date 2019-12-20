import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
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
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
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
export class AuthModule {}
