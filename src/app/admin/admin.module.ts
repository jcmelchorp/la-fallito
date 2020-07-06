import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromAdmin from './store/admin.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
import { AdminComponent } from './containers/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, UserComponent, UsersListComponent, UserdetailComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    StoreModule.forFeature('admin', fromAdmin.adminReducer),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }
