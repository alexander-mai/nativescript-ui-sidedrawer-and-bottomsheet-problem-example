import { Component } from '@angular/core';
import { BottomSheetParams } from '@nativescript-community/ui-material-bottomsheet/angular';
import { Page } from '@nativescript/core';

@Component({
  templateUrl: 'bottom-sheet.component.html',
  styleUrls: ['bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  private readonly _closeCallback: (...args: any[]) => any;

  constructor(params: BottomSheetParams, page: Page) {
    this._closeCallback = params.closeCallback;
  }

  public cancel() {
    this._closeCallback();
  }
}
