import { Component } from '@angular/core';
import { SessaoService } from '../../servicos/sessao.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  usuario : string;

  constructor(private sessao:SessaoService ){
    this.usuario = this.sessao.nome;
  }

  navegarAba(abaAtiva : HTMLElement) {
    let abas = document.querySelectorAll('.aba');

    for(let i = 0; i < abas.length; i++){
      abas[i]?.classList.remove('aba-ativa');
    }

    abaAtiva.classList.add('aba-ativa')
  }
}
