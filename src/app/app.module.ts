import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// // import { LoginPageComponent } from './view/components/login-page/login-page.component';
// import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { NavBarComponent } from './view/components/nav-bar/nav-bar.component';
// import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { CardComponent } from './view/components/card/card.component';
import { ChevronsComponent } from './view/components/icons/chevrons/chevrons.component';
import { UserCardComponent } from './view/components/user-card/user-card.component';
import { TablesComponent } from './view/components/tables/tables.component';
import { FiltersComponent } from './view/components/filters/filters.component';
import { SearchBarComponent } from './view/components/search-bar/search-bar.component';
import { BookCardComponent } from './view/components/book-card/book-card.component';
import { StarsRateComponent } from './view/components/stars-rate/stars-rate.component';
import { CardSliderComponent } from './view/components/card-slider/card-slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponentDetailsComponent } from './view/components/book-component-details/book-component-details.component';
import { CommentairesComponent } from './view/components/commentaires/commentaires.component';
import { PopupContainsComponent } from './view/components/popup-contains/popup-contains.component';
import { GestionLivresComponent } from './view/components/Livres/gestion-livres/gestion-livres.component';
import { LivresCardComponent } from './view/components/Livres/livres-card/livres-card.component';
import { LivresDetailsComponent } from './view/components/Livres/livres-details/livres-details.component';
import { LivresAddComponent } from './view/components/Livres/livres-add/livres-add.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { UserLibraryComponent } from './view/users-pages/user-library/user-library.component';
import { UserDetailsLivresComponent } from './view/users-pages/user-details-livres/user-details-livres.component';
import { MesLivresComponent } from './view/users-pages/mes-livres/mes-livres.component';
import { MesLivresComponentComponent } from './view/components/Livres-users/mes-livres-component/mes-livres-component.component';
import { MesLivresCardComponent } from './view/components/Livres-users/mes-livres-card/mes-livres-card.component';
import { AdminInfoComponent } from './view/components/admin-info/admin-info.component';
import { AdminNavBarComponent } from './view/pages/admin-nav-bar/admin-nav-bar.component';
import { UserNavBarComponent } from './view/users-pages/user-nav-bar/user-nav-bar.component';
import { AdminProfileComponent } from './view/pages/admin-profile/admin-profile.component';
import { UserProfileComponent } from './view/users-pages/user-profile/user-profile.component';
import { ModifierUtilisateurComponent } from './view/components/modifier-utilisateur/modifier-utilisateur.component';
import { DashboardComponentComponent } from './view/admin/dashboard-component/dashboard-component.component';
import { TableauModule } from 'ngx-tableau';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjoutBibliothequeComponent } from './view/pages/ajout-bibliotheque/ajout-bibliotheque.component';
import { ApercuBiblioComponent } from './view/pages/manage-books/apercu-biblio/apercu-biblio.component';
import { AddBookUsersComponent } from './view/users-pages/add-book-users/add-book-users.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    CardComponent,
    ChevronsComponent,
    UserCardComponent,
    TablesComponent,
    FiltersComponent,
    SearchBarComponent,
    BookCardComponent,
    StarsRateComponent,
    CardSliderComponent,
    BookComponentDetailsComponent,
    CommentairesComponent,
    PopupContainsComponent,
    GestionLivresComponent,
    LivresCardComponent,
    LivresDetailsComponent,
    LivresAddComponent,
    HandleUsersComponent,
    UserLibraryComponent,
    UserDetailsLivresComponent,
    MesLivresComponent,
    MesLivresComponentComponent,
    MesLivresCardComponent,
    routingComponents,
    AdminInfoComponent,
    AdminNavBarComponent,
    UserNavBarComponent,
    AdminProfileComponent,
    UserProfileComponent,
    ModifierUtilisateurComponent,
    DashboardComponentComponent,
    AjoutBibliothequeComponent,
    ApercuBiblioComponent,
    AddBookUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableauModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
