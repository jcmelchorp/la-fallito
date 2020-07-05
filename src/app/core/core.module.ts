import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';



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
    FlexLayoutModule
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
