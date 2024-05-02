import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { BottomSheetOptions, BottomSheetService } from "@nativescript-community/ui-material-bottomsheet/angular";
import { BottomSheetComponent } from "~/app/bottom-sheet/bottom-sheet.component";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private _bottomSheetService: BottomSheetService = new BottomSheetService();

  constructor(
    private _vcRef: ViewContainerRef,
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  openBottomSheet() {
    const options: BottomSheetOptions = {
      viewContainerRef: this._vcRef,
      dismissOnBackgroundTap: false,
      dismissOnDraggingDownSheet: false,
      animated: false
    };
    this._bottomSheetService.show<string>(BottomSheetComponent, options);
 }
}
