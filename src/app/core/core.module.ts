import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MainComponent,
    WellcomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    CarouselModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MainComponent,
    WellcomeComponent,
    DashboardComponent
  ]
})
export class CoreModule { }
