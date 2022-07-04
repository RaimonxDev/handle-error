import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HandlerHttpRoutingModule } from './handler-http-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HandlerHttpRoutingModule,
    HttpClientModule
  ]
})
export class HandlerHttpModule { }
