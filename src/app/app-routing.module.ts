import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './view/admin/dashboard-component/dashboard-component.component';
import { AdminInfoComponent } from './view/components/admin-info/admin-info.component';
import { LoginPageComponent } from './view/components/login-page/login-page.component';
import { UserCardComponent } from './view/components/user-card/user-card.component';
import { AdminProfileComponent } from './view/pages/admin-profile/admin-profile.component';
import { AjoutBibliothequeComponent } from './view/pages/ajout-bibliotheque/ajout-bibliotheque.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { DescriptionBooksComponent } from './view/pages/manage-books/description-books/description-books.component';
import { HandleBookComponent } from './view/pages/manage-books/handle-book/handle-book.component';
import { LibraryComponent } from './view/pages/manage-books/library/library.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { AddBookUsersComponent } from './view/users-pages/add-book-users/add-book-users.component';
import { MesLivresComponent } from './view/users-pages/mes-livres/mes-livres.component';
import { UserDetailsLivresComponent } from './view/users-pages/user-details-livres/user-details-livres.component';
import { UserLibraryComponent } from './view/users-pages/user-library/user-library.component';
import { UserProfileComponent } from './view/users-pages/user-profile/user-profile.component';

const routes: Routes = [

  //les routes pour l'admin
  { path: '', component: LoginPageComponent },
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'manage-library', component: HandleBookComponent},
  {path: 'book-description', component: DescriptionBooksComponent},
  {path: 'my-users', component: HandleUsersComponent},
  {path: 'sign-up', component: SignInPageComponent},
  {path: 'manage-users', component: HandleUsersComponent},
  {path: 'inscription', component: SignInPageComponent},
  {path: 'admin-profile', component: AdminProfileComponent},
  {path: 'preview-library', component: LibraryComponent},

  // les routes pour les utilisateurs :

  {path: 'user-profile', component: UserProfileComponent},
  {path: 'library', component: UserLibraryComponent},
  {path: 'my-books', component: MesLivresComponent},
  {path: 'books-details', component: UserDetailsLivresComponent},
  {path: 'add-book', component: AddBookUsersComponent},

  // les routes pour le super admin

  {path: 'dashboard', component: DashboardComponentComponent},
  {path: 'create-library', component: AjoutBibliothequeComponent},





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
  DashboardComponentComponent,
  AjoutBibliothequeComponent,
  AddBookUsersComponent
]
