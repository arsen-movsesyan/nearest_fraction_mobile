import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToBinaryComponent } from './to-binary.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {TabsPageModule} from "../tabs/tabs.module";
import {ToBinaryRoutingModule} from "./to-binary.routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ToBinaryRoutingModule,
    TabsPageModule
  ],
  declarations: [ToBinaryComponent]
})
export class ToBinaryPageModule {}
