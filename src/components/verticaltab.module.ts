import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { IonVerticalTabComponent } from './ion-vertical-tab/ion-vertical-tab';
import { IonVerticalTabsComponent } from './ion-vertical-tabs/ion-vertical-tabs';
import { IonHeaderVerticalTabComponent } from './ion-header-vertical-tab/ion-header-vertical-tab';
import { IonFooterVerticalTabComponent } from './ion-footer-vertical-tab/ion-footer-vertical-tab';
@NgModule({
	declarations: [
		IonVerticalTabComponent,
		IonVerticalTabsComponent,
		IonHeaderVerticalTabComponent,
		IonFooterVerticalTabComponent
	],
	imports: [IonicModule],
	exports: [IonVerticalTabComponent,
		IonVerticalTabsComponent,
		IonHeaderVerticalTabComponent,
		IonFooterVerticalTabComponent]
})
export class VerticalTabModule { }
