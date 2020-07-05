import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from './auth/models/user.model';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { getUser, getIsLoggedIn, getIsLoading, getIsAdmin } from './auth/store/auth.selectors';
import * as fromAuth from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'la-fallito';
  mediaSub: Subscription;
  public deviceXs: boolean;
  public deviceSm: boolean;
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    public mediaObserver: MediaObserver
    ){

  }
  ngOnInit(){
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
        this.deviceSm =
          result.mqAlias === 'xs' || result.mqAlias === 'sm' ? true : false;
      }
    );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }

}
