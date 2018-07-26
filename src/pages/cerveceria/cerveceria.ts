import { Component } from '@angular/core';
import { IonicPage, NavParams,ModalController,ViewController } from 'ionic-angular';
import { CerveceriasProvider } from '../../providers/cervecerias/cervecerias';
import { AgregarComentarioPage } from '../agregar-comentario/agregar-comentario';

@IonicPage()
@Component({
  selector: 'page-cerveceria',
  templateUrl: 'cerveceria.html',
})
export class CerveceriaPage {

 cerveceria: any = {};
 comentarios: any;

  constructor(
    public navParams: NavParams,
    public cerveceriasService: CerveceriasProvider,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    this.cerveceria = this.navParams.data;
    //console.log(this.cerveceria.nombreCer);
  }

  agregarComentario(cerveceria){
    let modal = this.modalCtrl.create(AgregarComentarioPage,cerveceria);
    modal.onDidDismiss(comentario => {
      if(comentario){
        console.log(comentario);
        this.cerveceria.comentarios.push(comentario);
        this.cerveceriasService.agregarComentario(comentario,cerveceria);
      }
    });
    modal.present();
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
