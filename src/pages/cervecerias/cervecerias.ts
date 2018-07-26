import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { CerveceriasProvider } from '../../providers/cervecerias/cervecerias';
import { CerveceriaPage } from '../cerveceria/cerveceria';
/**
 * Generated class for the CerveceriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cervecerias',
  templateUrl: 'cervecerias.html',
})
export class CerveceriasPage {

  cervecerias: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cerveceriasService: CerveceriasProvider,
    public modalCtrl: ModalController
  ){}

  ionViewDidLoad(){
    this.cerveceriasService.getCervecerias().then((data) => {
      console.log(data);
      this.cervecerias = data;
    });

  }

  verCerveceria(cerveceria){
    let modal = this.modalCtrl.create(CerveceriaPage,cerveceria);

    //console.log(cerveceria);
    //modal.onDidDismiss(cerveceria => {
    //  if(cerveceria){
       // this.cervecerias.push(cerveceria);
       // this.cerveceriasService.createReview(cerveceria);
     // }
    //});
    modal.present(cerveceria);
  }

}
