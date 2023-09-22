import { NgModule } from '@angular/core';
import { HomeComponent } from './screens/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }