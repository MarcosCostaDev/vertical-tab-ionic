import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageOnePage } from './page-one';

@NgModule({
  declarations: [
    PageOnePage,
  ],
  imports: [
    IonicPageModule.forChild(PageOnePage),
  ],
})
export class PageOnePageModule {}
