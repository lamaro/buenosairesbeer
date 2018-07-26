import { Component } from '@angular/core';
import { IonicPage, NavParams,ModalController,ViewController } from 'ionic-angular';

/**
 * Generated class for the AgregarComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-comentario',
  templateUrl: 'agregar-comentario.html',
})
export class AgregarComentarioPage {
  cerveceria: any = {};
  nombreUsuario: any;
  comentarioUsuario: any;
  puntajeBebidaUsuario: any;
  puntajeComidaUsuario: any;

  constructor(public viewCtrl: ViewController) {

  }

  save(): void {
    let review = {
      nombreUsuario: this.nombreUsuario,
      comentarioUsuario: this.comentarioUsuario,
      puntajeBebidaUsuario: this.puntajeBebidaUsuario,
      puntajeComidaUsuario:this.puntajeComidaUsuario
    };
    this.viewCtrl.dismiss(review);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }
}
