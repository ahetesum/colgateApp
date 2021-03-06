import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//    MatButtonModule,
//    MatToolbarModule,
//    MatIconModule,
//    MatBadgeModule,
//    MatSidenavModule,
//    MatListModule,
//    MatGridListModule,
//    MatFormFieldModule,
//    MatInputModule,
//    MatSelectModule,
//    MatRadioModule,
//    MatDatepickerModule,
//    MatNativeDateModule,
//    MatChipsModule,
//    MatTooltipModule,
//    MatTableModule,
//    MatPaginatorModule



import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'






import { from } from 'rxjs';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatProgressSpinnerModule,
      MatProgressBarModule

   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
   ],
   providers: [
   ]
})

export class AngularMaterialModule { }