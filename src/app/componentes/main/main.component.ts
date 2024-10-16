import { Component } from '@angular/core';
import { SessaoService } from '../../servicos/sessao.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private sessao:SessaoService ){
    console.log(sessao)
  }
}
