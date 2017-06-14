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
// services
import { AnimalDetailService} from './AngularService/animaldetails.service';
import { AnimalsService } from './AngularService/animals.service';
import { ContactusService } from './AngularService/contactus.service';
import { DiduKnowService } from './AngularService/did-uknow.service';
import { FaqService } from './AngularService/faq.service';
import { FaqTypeService } from './AngularService/FAQType.service';
import { FeedbackService } from './AngularService/feedback.service';
import { NewsService } from './AngularService/news.service';
import { PreserveService } from './AngularService/preserve.service';
import { StaffService } from './AngularService/staff.service';
import { StaffTypeService } from './AngularService/stafftype.service';
import { TicketsService } from './AngularService/tickets.service';
import { ZoosService } from './AngularService/zoos.service';
import { zoneService } from './AngularService/zone.service';
import { ComponentsService } from './AngularService/components.service';


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
import { HomeAnimalSlidderComponent } from './home-animal-slidder/home-animal-slidder.component';
import { CarouselComponent } from './carousal/carousal.component';
import { SlideComponent } from './slide/slide.component';

import { StaffFilterPipe} from '../pipes/staffFilter.pipe';

/// reactive forms module 
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';



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
    HomeAnimalSlidderComponent,
    CarouselComponent,
    SlideComponent,
    StaffFilterPipe,
    TestComponent
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
    AnimalDetailService,
    AnimalsService,
    ContactusService,
    DiduKnowService,
    ComponentsService,
    FaqService,
    FaqTypeService,
    FeedbackService,
    NewsService,
    PreserveService,
    StaffService,
    StaffTypeService,
    TicketsService,
    ZoosService,
    zoneService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
