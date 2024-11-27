import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDecimalPage } from './to-decimal.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ToDecimalRoutingModule } from './to-decimal.routing.module';
import {TabsPageModule} from "../tabs/tabs.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ToDecimalRoutingModule,
    TabsPageModule
  ],
  declarations: [ToDecimalPage]
})
export class ToDecimalPageModule {}
