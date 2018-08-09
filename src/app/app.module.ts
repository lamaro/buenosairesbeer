import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CerveceriasPage } from '../pages/cervecerias/cervecerias';
import { CerveceriaPage } from '../pages/cerveceria/cerveceria';
import { AgregarComentarioPage } from '../pages/agregar-comentario/agregar-comentario';
//Providers
import { CerveceriasProvider } from '../providers/cervecerias/cervecerias';
//Plugins
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CerveceriasPage,
    CerveceriaPage,
    AgregarComentarioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CerveceriasPage,
    CerveceriaPage,
    AgregarComentarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CerveceriasProvider,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
