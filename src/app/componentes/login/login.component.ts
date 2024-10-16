import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/cjs/md5'
import { SessaoService } from '../../servicos/sessao.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mensagemModal : string = "";

  constructor ( private sessao : SessaoService, private router : Router){ }

  async Login( ) {

    let request = await fetch(environment.APIURL + '/login', {
      method: "POST",
      headers: {
        TOKEN : environment.TOKEN,
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        login: (document.querySelector('#login') as HTMLInputElement).value,
        senha: Md5.hashStr((document.querySelector('#senha') as HTMLInputElement).value)
      })
    }).then(response => { if(response.ok){return response.json()} else {console.log(response); return}})

      if(request.sucesso){
        this.sessao.id_usuario = request.sucesso[0].id_usuario;
        this.sessao.nome = request.sucesso[0].nome;
        this.router.navigate(['']);
      }

      else if(request.erro){
        this.mensagemModal = "Usuário e Senha incorretos!"
        document.querySelector('.modal')?.classList.add('showmodal')
      }

      else {
        this.mensagemModal = "Inconsistência interna. Contatar suporte!"
        document.querySelector('.modal')?.classList.add('showmodal')
      }
  }

  closeModal(){
    document.querySelector('.modal')?.classList.remove('showmodal')
  }
}
