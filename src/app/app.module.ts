// /// <reference path="../../typings/index.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ZooRoutModule } from 'appRoutingModule.module';

/// components 
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { DidUknowComponent } from './did-uknow/did-uknow.component';
import { ZoosComponent } from './zoos/zoos.component';
import { PreservesComponent } from './preserves/preserves.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NewsComponent } from './news/news.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { StaffComponent } from './staff/staff.component';
import { TipsComponent } from './tipsforyouvisit/tips.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component'

// services

import { AppService } from './app.service'
import { ComponentsService } from './components.service'


// pipes
import { FAQFilterPipe } from '../pipes/FAQFilter.pipe';
import { AnimalSearchPipe } from '../pipes/animal-search.pipe';
import { EntertainPlacesComponent } from './entertain-places/entertain-places.component';
import { HistoricalPlacesComponent } from './historical-places/historical-places.component';
import { SearchPlacePipe } from '../pipes/search-place.pipe';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { StaffFilterPipe} from '../pipes/staffFilter.pipe';

/// reactive forms module 
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FaqComponent,
    DidUknowComponent,
    ZoosComponent,
    PreservesComponent,
    TicketsComponent,
    NewsComponent,
    AnimalsComponent,
    AnimalDetailsComponent,
    StaffComponent,
    TipsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    FAQFilterPipe,
    AnimalSearchPipe,
    EntertainPlacesComponent,
    HistoricalPlacesComponent,
    SearchPlacePipe,
    HomeWelcomeComponent,
    HomeNewsComponent,
    ContactUsComponent,
    OrganizationsComponent,
    StaffFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    ZooRoutModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    ComponentsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
