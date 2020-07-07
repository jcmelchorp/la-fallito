import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    InformationComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AccordionModule,
    TabsModule,
    BsDatepickerModule,
    PopoverModule,
    CarouselModule,
    ChartsModule
  ],
})
export class InformationModule { }
