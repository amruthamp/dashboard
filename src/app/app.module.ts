import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadingWrapperComponent } from './components/heading-wrapper/heading-wrapper.component';
import { UploadComponent } from './components/upload/upload.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { TeamsComponent } from './components/teams/teams.component';
import { RouterModule } from '@angular/router';
import { ScreenComponent } from './screen/screen/screen.component';
import { Screen2Component } from './screen2/screen2/screen2.component';
import { FeaturesComponent } from './components/features/features.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadingWrapperComponent,
    UploadComponent,
    SnippetsComponent,
    TeamsComponent,
    ScreenComponent,
    Screen2Component,
    FeaturesComponent,
    CardContentComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'screen2', component: Screen2Component },
      { path: '**', component: ScreenComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
