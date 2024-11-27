import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {ResultComponent} from "./result/result.component";
import {DecimalDisplayComponent} from "./result/decimal-display/decimal-display.component";
import {FractionDisplayComponent} from "./result/fraction-display/fraction-display.component";
import {ToBinaryPage} from "./to-binary/to-binary.page";
import {ToDecimalPage} from "./to-decimal/to-decimal.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  exports: [
    ResultComponent,
    DecimalDisplayComponent,
    FractionDisplayComponent
  ],
  declarations: [
    ToBinaryPage,
    ToDecimalPage,
    TabsPage,
    ResultComponent,
    DecimalDisplayComponent,
    FractionDisplayComponent
  ]
})
export class TabsPageModule {}
