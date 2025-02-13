import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonLabel,IonButton ,IonChip,IonIcon,IonText,IonMenuButton,IonButtons,IonItem, IonInput,IonTitle,IonCardSubtitle,IonCardTitle, IonCard,IonCardHeader,IonCardContent, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader,CommonModule,IonIcon,IonChip,IonButton, IonLabel,FormsModule,IonText,IonToolbar, IonButtons, IonMenuButton,IonItem,IonInput,IonCardTitle,IonCardSubtitle, IonTitle,IonCard, IonContent,IonCardHeader,IonCardContent],

})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
