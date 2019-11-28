import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeafletModule } from './leaflet';
import { FooterComponent } from './footer/footer.component';
import { GetPlaygroundsService } from './shared/get-playgrounds.service';

@NgModule({
  declarations: [AppComponent, SidebarComponent, FooterComponent],
  imports: [BrowserModule, LeafletModule],
  bootstrap: [AppComponent],
  providers: [GetPlaygroundsService]
})
export class AppModule {}
