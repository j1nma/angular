import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PracticingDatabindingComponent } from './practicing-databinding/practicing-databinding.component';
import { PracticingDirectivesComponent } from './practicing-directives/practicing-directives.component';
import { GameControlComponent } from './gamecontrol/gamecontrol.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PracticingDatabindingComponent,
    PracticingDirectivesComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
