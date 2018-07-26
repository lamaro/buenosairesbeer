import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CerveceriasProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getCervecerias(){

    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('https://buenosairesbeer-api-rest.herokuapp.com/cervecerias')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  agregarComentario(review,cerveceria){ //INCOMPLETO!!!!!!
    this.http.put('https://buenosairesbeer-api-rest.herokuapp.com/cerveceria/comentario/add/' + cerveceria._id, cerveceria)
    .map( (resp: any) => {
      this.cerveceria = resp;
      return this.cerveceria;

  });
}

}
