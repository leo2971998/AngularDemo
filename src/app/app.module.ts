import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { PbindingComponent } from './pbinding/pbinding.component';
import { CbindingComponent } from './cbinding/cbinding.component';
import { EbindingComponent } from './ebinding/ebinding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { StructralDirectivesComponent } from './structral-directives/structral-directives.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PbindingComponent,
    CbindingComponent,
    EbindingComponent,
    TwowayBindingComponent,
    StructralDirectivesComponent,
    TestComponent,
    EmployeeListComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
