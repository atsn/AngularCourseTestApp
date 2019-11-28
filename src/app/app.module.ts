import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeafletModule } from './leaflet';
import { FooterComponent } from './footer/footer.component';
import { GetPlaygroundsService } from './shared/get-playgrounds.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './shared/location.service';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent, FooterComponent, MapComponent],
  imports: [BrowserModule, LeafletModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [GetPlaygroundsService, LocationService]
})
export class AppModule {}
