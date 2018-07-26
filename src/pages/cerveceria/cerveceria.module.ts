import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CerveceriaPage } from './cerveceria';

@NgModule({
  declarations: [
    CerveceriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CerveceriaPage),
  ],
})
export class CerveceriaPageModule {}
