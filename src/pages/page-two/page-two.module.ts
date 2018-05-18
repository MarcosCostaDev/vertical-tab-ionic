import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageTwoPage } from './page-two';

@NgModule({
  declarations: [
    PageTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(PageTwoPage),
  ],
})
export class PageTwoPageModule {}
