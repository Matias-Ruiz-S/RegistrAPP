import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  constructor(private barcodeScanner: BarcodeScanner) {}

  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('TEST BARCODE DATA', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error de escaneo. Intentelo de nuevo', err);
    });
  }
}