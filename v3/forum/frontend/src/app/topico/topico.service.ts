import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Topico } from './topico.model';

@Injectable()
export class TopicoService {

  constructor(private http: Http) {
  }

  list(currentPage: number, itemsPerPage: number) {
    let start = (currentPage*itemsPerPage) - (itemsPerPage);
    let end = (currentPage*itemsPerPage) - 1;
    return this.http.get('~main/topicos?range='+start+'-'+end)
      .map(res => res);
  }

  get(id: number) {
    return this.http.get('~main/topicos/' + id)
      .map(res => <Topico>res.json());
  }

  create(topico: Topico) {
    return this.http.post('~main/topicos', topico);
  }

  update(topico: Topico) {
    return this.http.put('~main/topicos/', topico);
  }

  delete(topico: Topico) {
    return this.http.delete('~main/topicos/' + topico.id);
  }
}
