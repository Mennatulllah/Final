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
import { StaffComponent } from './staff/staff.component';
import { TipsComponent } from './tipsforyouvisit/tips.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component'

// services

import { FaqService } from './faq.service';
import { ZoosService } from './zoos.service';
import { NewsService } from './news.service';
import { AnimalsService } from './animals.service';
import {TicketsService} from './tickets.service';
import {FaqTypeService} from './FAQType.service';
import {PreserveService} from './preserve.service';
import { ContactusService } from './contactus.service';
import { PlacesService } from './places.service'


// pipes
import { FAQFilterPipe } from '../pipes/FAQFilter.pipe';
import { AnimalSearchPipe } from '../pipes/animal-search.pipe';
import { EntertainPlacesComponent } from './entertain-places/entertain-places.component';
import { HistoricalPlacesComponent } from './historical-places/historical-places.component';
import { SearchPlacePipe } from '../pipes/search-place.pipe';
import { PreservesContainerComponent } from './preserves-container/preserves-container.component';
import { PreservesFilterComponent } from './preserves-filter/preserves-filter.component';
import { PreservesContentComponent } from './preserves-content/preserves-content.component'

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
    PreservesContainerComponent,
    PreservesFilterComponent,
    PreservesContentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    ZooRoutModule
  ],
  providers: [
    NewsService,
    FaqService ,
    ZoosService,
    AnimalsService,
    TicketsService,
    FaqTypeService,
    PreserveService,
    ContactusService,
    PlacesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }