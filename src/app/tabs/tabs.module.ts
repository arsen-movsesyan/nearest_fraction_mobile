import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {ResultComponent} from "../result/result.component";
import {DecimalDisplayComponent} from "../result/decimal-display/decimal-display.component";
import {FractionDisplayComponent} from "../result/fraction-display/fraction-display.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  exports: [
    ResultComponent,
    DecimalDisplayComponent,
    FractionDisplayComponent
  ],
  declarations: [
    TabsPage,
    ResultComponent,
    DecimalDisplayComponent,
    FractionDisplayComponent
  ]
})
export class TabsPageModule {}
