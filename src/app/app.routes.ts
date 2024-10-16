import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'', component: MainComponent}
];
