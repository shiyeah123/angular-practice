import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { LoginFormComponent } from './login-from/login-from.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      ValidateFormComponent,
      LoginFormComponent,
      PageNotFoundComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgZorroAntdModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule
   ],
   providers: [{ provide: NZ_I18N, useValue: zh_CN }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
