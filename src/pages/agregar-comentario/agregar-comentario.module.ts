import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarComentarioPage } from './agregar-comentario';

@NgModule({
  declarations: [
    AgregarComentarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarComentarioPage),
  ],
})
export class AgregarComentarioPageModule {}
