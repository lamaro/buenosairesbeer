import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CerveceriasProvider } from '../../providers/cervecerias/cervecerias';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  usrPosition: any;
  markers: any;
  cervecerias: any;

  constructor(
    private navCtrl: NavController,
    public cerveceriasService: CerveceriasProvider,
    public geolocation: Geolocation
  ) {}

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addUserMarker();
      this.addRestMarkers();
    }, (err) => {
      console.log(err);
    });
  }

  addUserMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Tu ubicación!</h4>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  addRestMarkers(){
    this.cerveceriasService.getCervecerias().then((data) => {
      console.log(data);
      this.cervecerias = data;
      data.forEach(item => {
        console.log(item.lat);
        let latLng = new google.maps.LatLng(item.lat, item.lng);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });
        let content = "<h4>"+item.nombreCer+"</h4>";
        this.addInfoWindow(marker, content);
        });
      });
  }

}
