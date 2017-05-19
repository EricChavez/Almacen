import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {

  public options = {
    position: ['top', 'right'],
    timeOut: 5000,
    clickToClose: true,
    lastOnBottom: true
  };

@BlockUI() blockUI: NgBlockUI;
constructor() {
    this.blockUI.start('Espere...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }
  // tslint:disable-next-line:member-ordering
  title = 'app works!';
}
