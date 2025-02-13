import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { checkmarkCircle ,closeCircle  } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader,IonLabel,IonButton ,IonChip,IonIcon,IonText,IonMenuButton,IonButtons,IonItem, IonInput,IonTitle,IonCardSubtitle,IonCardTitle, IonCard,IonCardHeader,IonCardContent, IonToolbar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.page.html',
  styleUrls: ['./manual-entry.page.scss'],
  standalone: true,
  imports: [IonHeader,CommonModule,IonIcon,IonChip,IonButton, IonLabel,FormsModule,IonText,IonToolbar, IonButtons, IonMenuButton,IonItem,IonInput,IonCardTitle,IonCardSubtitle, IonTitle,IonCard, IonContent,IonCardHeader,IonCardContent],
})
export class ManualEntryPage implements OnInit {

  cardNumber: string = '';
  isValid: boolean | null = null;
  withCRC: string = '';
  showResult: boolean = false;

  constructor() {
     addIcons({ checkmarkCircle,closeCircle});
   }

  ngOnInit() {
  }


  onInputChange() {
    this.showResult = false;
    this.cardNumber = this.cardNumber.replace(/[^0-9]/g, ''); 
  }

  
  checkCard() {
    if (!this.cardNumber || !/^\d+$/.test(this.cardNumber)) {
      this.isValid = null;
      this.showResult = false;
      return;
    }

    this.isValid = this.checkLuhn(this.cardNumber);
    this.withCRC = this.calculateLuhnCRC(this.cardNumber);
    this.showResult = true; 
  }


  checkLuhn(cardNo: string): boolean {
    let nDigits = cardNo.length;
    let nSum = 0;
    let isSecond = false;

    for (let i = nDigits - 1; i >= 0; i--) {
      let d = cardNo.charCodeAt(i) - '0'.charCodeAt(0);
      if (isSecond) d *= 2;
      nSum += Math.floor(d / 10);
      nSum += d % 10;
      isSecond = !isSecond;
    }

    return nSum % 10 === 0;
  }

  calculateLuhnCRC(baseNumber: string): string {
    for (let i = 0; i <= 9; i++) {
      let testNumber = baseNumber + i.toString();
      if (this.checkLuhn(testNumber)) {
        return testNumber; 
      }
    }
    return baseNumber; 
  }


}
