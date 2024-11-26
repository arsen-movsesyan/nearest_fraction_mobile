import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToBinaryComponent } from './to-binary.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './to-binary.routing.module';
import {TabsPageModule} from "../tabs/tabs.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    TabsPageModule
  ],
  declarations: [ToBinaryComponent]
})
export class Tab1PageModule {}
