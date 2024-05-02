import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NativeScriptMaterialBottomSheetModule } from "@nativescript-community/ui-material-bottomsheet/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { BottomSheetComponent } from "~/app/bottom-sheet/bottom-sheet.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptMaterialBottomSheetModule.forRoot(),
    NativeScriptUISideDrawerModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, BottomSheetComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
