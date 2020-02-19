import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassivePlannerComponent } from './passive-planner/passive-planner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PassiveCoolerSelectorComponent } from './passive-cooler-selector/passive-cooler-selector.component';
import { PassiveStatsComponent } from './passive-stats/passive-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PassiveEditorComponent } from './passive-editor/passive-editor.component';
import { PassiveLayerEditorComponent } from './passive-layer-editor/passive-layer-editor.component';
import { HomeComponent } from './home/home.component';
import { ConfigModalComponent } from './config-modal/config-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PassivePlannerComponent,
    NavbarComponent,
    PassiveCoolerSelectorComponent,
    PassiveStatsComponent,
    PassiveEditorComponent,
    PassiveLayerEditorComponent,
    HomeComponent,
    ConfigModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
