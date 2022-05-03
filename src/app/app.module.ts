import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { ContactComponent } from './contact/contact.component';
import { HoverMasterDirective } from './hover-master.directive';
import { MatTreeModule } from '@angular/material/tree';
import { ExpandJobDirective } from './expand-job.directive';
import { MatExpansionModule } from '@angular/material/expansion';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutMeComponent,
    WorkExpComponent,
    ContactComponent,
    HoverMasterDirective,
    ExpandJobDirective,
    EducationComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    MatTreeModule,
    MatExpansionModule,
    InViewportModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
