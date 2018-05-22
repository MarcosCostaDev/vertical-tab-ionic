import { IonicModule } from 'ionic-angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonVerticalTabComponent, IonVerticalTabsComponent, IonHeaderVerticalTabComponent, IonFooterVerticalTabComponent } from '.';

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
export class VerticalTabModule { 
	static forRoot(): ModuleWithProviders {
		return {
		  ngModule: VerticalTabModule
		};
	  }
}
