import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Web1Component } from './web1/web1.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Quizmiddle1Component } from './quizmiddle1/quizmiddle1.component';
import { Quizlast1Component } from './quizlast1/quizlast1.component';
import { Quizmiddle2Component } from './quizmiddle2/quizmiddle2.component';
import { Quizlast2Component } from './quizlast2/quizlast2.component';
import { Quizmiddllee2Component } from './quizmiddllee2/quizmiddllee2.component';
import { Quizlasstt2Component } from './quizlasstt2/quizlasstt2.component';
import { Quizmiddle3Component } from './quizmiddle3/quizmiddle3.component';


@NgModule({
  declarations: [
    AppComponent,
    Web1Component,
    QuizPageComponent,
    SideNavComponent,
    Quizmiddle1Component,
    Quizlast1Component,
    Quizmiddle2Component,
    Quizlast2Component,
    Quizmiddllee2Component,
    Quizlasstt2Component,
    Quizmiddle3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
