import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { BancosComponent } from './componentes/bancos/bancos.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'', component: MainComponent, children:[
        {path:'bancos', component: BancosComponent}
    ]}
];
