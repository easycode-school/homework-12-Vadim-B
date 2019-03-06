import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoInfoComponent } from './components/photo-info/photo-info.component';
import { DateTransformPipe } from 'src/app/pipes/date-transform.pipe';

@NgModule({
  declarations: [
    PhotoInfoComponent,
    DateTransformPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PhotoInfoComponent]
})
export class PhotoInfoModalModule { }
