import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicialPage } from './inicial';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InicialPage,
  ],
  imports: [
    IonicPageModule.forChild(InicialPage),
    ComponentsModule
  ],
})
export class InicialPageModule {}
