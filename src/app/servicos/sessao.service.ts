import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  id_usuario : string = "";
  nome : string = "";

  constructor() { }
}
