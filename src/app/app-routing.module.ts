import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { LoginFormComponent } from './login-from/login-from.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
     path: 'validate',
     component: ValidateFormComponent
  },
  {
     path: 'login',
     component: LoginFormComponent
  },
  {
     path: '',
     component: AppComponent

  },
  {
     path: '**',
     component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
