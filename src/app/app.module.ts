import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent
  ],

  // page not found

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],



  // imports: [
  //   BrowserModule,
  //   RouterModule.forRoot([
  //     {path: 'crisis-list', component: CrisisListComponent},
  //     {path: 'heroes-list', component: HeroesListComponent},
  //     {path: '', redirectTo: '/crisis-list', pathMatch: 'full'},
  //   ]),
  // ],
  // imports: [
  //   BrowserModule,
  //   RouterModule.forRoot([
  //     {path: 'crisis-list', component: CrisisListComponent},
  //     {path: 'heroes-list', component: HeroesListComponent},
  //   ]),
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
