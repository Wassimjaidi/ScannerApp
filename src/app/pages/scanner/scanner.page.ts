import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonLabel,IonButton ,IonChip,IonIcon,IonText,IonMenuButton,IonButtons,IonItem, IonInput,IonTitle,IonCardSubtitle,IonCardTitle, IonCard,IonCardHeader,IonCardContent, IonToolbar } from '@ionic/angular/standalone';
import {
  BarcodeScanner,
  BarcodeFormat,
  LensFacing,
} from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone: true,
  imports: [IonHeader,CommonModule,IonIcon,IonChip,IonButton, IonLabel,FormsModule,IonText,IonToolbar, IonButtons, IonMenuButton,IonItem,IonInput,IonCardTitle,IonCardSubtitle, IonTitle,IonCard, IonContent,IonCardHeader,IonCardContent],

})
export class ScannerPage implements OnInit {

  scannedData: string | null = null;

  constructor() { }

  ngOnInit() {
  }


  
  async scanBarcode() {
    try {

      const result = await BarcodeScanner.scan({ formats: [BarcodeFormat.UpcE, BarcodeFormat.UpcA] });
      if (result.barcodes.length > 0) {
        this.scannedData = result.barcodes[0].rawValue;
      } else {
        this.scannedData = 'Aucun code-barres détecté';
      }
    } catch (error) {
      console.error('Barcode scanning failed', error);
      this.scannedData = 'Erreur lors de la lecture du code-barres';
    }
  }

}
