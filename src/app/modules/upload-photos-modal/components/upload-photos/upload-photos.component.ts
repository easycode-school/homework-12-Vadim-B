import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadPhotosService } from '../../services/upload-photos.service';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onUploadEnd: EventEmitter<any> = new EventEmitter();
  public photosArray = [];
  constructor(
    public uploadPhotosService: UploadPhotosService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.onClose.emit();
  }

  addPhotos(input) {
    console.log(input.files);
    this.photosArray = this.photosArray.concat(...input.files);
    console.log(this.photosArray);
  }

  deletePhoto(name) {
    this.photosArray = this.photosArray.filter((photo) => photo.name !== name);
  }

  uploadPhotos() {
    this.uploadPhotosService.uploadPhotos(this.photosArray).subscribe((res) => {
      this.onUploadEnd.emit();
    });
  }
}
