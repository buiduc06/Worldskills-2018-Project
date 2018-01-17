import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FlightdetailComponent } from './component/flightdetail/flightdetail.component';
import { FlightlistComponent } from './component/flightlist/flightlist.component';
import { FlightComponent } from './component/flight/flight.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HotelbookComponent } from './component/hotelbook/hotelbook.component';
import { HoteldetailComponent } from './component/hoteldetail/hoteldetail.component';
import { HotellistComponent } from './component/hotellist/hotellist.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FlightbookComponent } from './component/flightbook/flightbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightdetailComponent,
    FlightlistComponent,
    FlightComponent,
    HotelComponent,
    HotelbookComponent,
    HoteldetailComponent,
    HotellistComponent,
    LoginComponent,
    RegisterComponent,
    FlightbookComponent,



    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component :HomeComponent
      },{
        path: 'home',
        component :HomeComponent
      },
      {
        path: 'flight',
        component :FlightComponent
      },
      {
        path: 'flight-book',
        component :FlightbookComponent
      },
      {
        path: 'flight-detail',
        component :FlightdetailComponent
      },
      {
        path: 'flight-list',
        component :FlightlistComponent
      },
      {
        path: 'hotel',
        component :HotelComponent
      },
      {
        path: 'hotel-book',
        component :HotelbookComponent
      },
      {
        path: 'hotel-detail',
        component :HoteldetailComponent
      },
      {
        path: 'hotel-list',
        component :HotellistComponent
      },
      {
        path: 'login',
        component :LoginComponent
      },
      {
        path: 'register',
        component :RegisterComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
