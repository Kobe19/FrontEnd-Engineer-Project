import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInfoComponent } from './view/components/admin-info/admin-info.component';
import { LoginPageComponent } from './view/components/login-page/login-page.component';
import { UserCardComponent } from './view/components/user-card/user-card.component';
import { AdminProfileComponent } from './view/pages/admin-profile/admin-profile.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { DescriptionBooksComponent } from './view/pages/manage-books/description-books/description-books.component';
import { HandleBookComponent } from './view/pages/manage-books/handle-book/handle-book.component';
import { LibraryComponent } from './view/pages/manage-books/library/library.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { MesLivresComponent } from './view/users-pages/mes-livres/mes-livres.component';
import { UserDetailsLivresComponent } from './view/users-pages/user-details-livres/user-details-livres.component';
import { UserLibraryComponent } from './view/users-pages/user-library/user-library.component';
import { UserProfileComponent } from './view/users-pages/user-profile/user-profile.component';

const routes: Routes = [

  //les routes pour l'admin

  {path: 'login', component: LoginPageComponent},
  {path: '/', redirectTo: 'login'},
  {path: 'home', component: HomePageComponent},
  {path: 'manage-library', component: HandleBookComponent},
  {path: 'book-description', component: DescriptionBooksComponent},
  {path: 'my-users', component: HandleUsersComponent},
  {path: 'sign-up', component: SignInPageComponent},
  {path: 'manage-users', component: HandleUsersComponent},
  {path: 'inscription', component: SignInPageComponent},
  {path: 'admin-profile', component: AdminProfileComponent},

  // les routes pour les utilisateurs :

  {path: 'user-profile', component: UserProfileComponent},
  {path: 'library', component: UserLibraryComponent},
  {path: 'my-books', component: MesLivresComponent},
  {path: 'books-details', component: UserDetailsLivresComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  UserProfileComponent,
  AdminProfileComponent,
  LoginPageComponent, 
  AdminInfoComponent, 
  MesLivresComponent, 
  UserCardComponent, 
  HomePageComponent, 
  HandleBookComponent, 
  DescriptionBooksComponent, 
  LibraryComponent, 
  SignInPageComponent, 
  HandleUsersComponent,
]
