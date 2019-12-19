import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { IconsProviderModule } from "../icons-provider.module";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";

registerLocaleData(en);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    IconsProviderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class HomeModule {}
