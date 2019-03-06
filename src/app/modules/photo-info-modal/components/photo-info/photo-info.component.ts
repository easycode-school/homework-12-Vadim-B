import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PhotoInfoService } from '../../services/photo-info.service';
import { AuthGlobalService } from 'src/app/services/auth-global.service';
import { MessageService } from 'primeng/api';
import { PhotoInfo } from '../../interfaces/photoInfo';

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.css']
})
export class PhotoInfoComponent implements OnInit {
  @Output() onPhotoInfoClose: EventEmitter<any> = new EventEmitter();
  @Input() openableImageId: string;

  public photoInfo: PhotoInfo;

  constructor(
    public photoInfoService: PhotoInfoService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.openPhotoInfo();
  }

  /**
   * closePhotoInfoModal - метод, к-й эмитит событие, закрывающее модальное окно
   */
  public closePhotoInfoModal() {
    this.onPhotoInfoClose.emit();
  }

  /**
   * openPhotoInfo - метод, к-й
   * 1. через спец сервис запрашивает у api инфо об определенной картике
   * 2. при удачном исходе присваевает полученные данные в переменную, откуда они попадают в верстку
   * 3. при ошибке выводит сообщение о ней и закрывает модальное окно
   */
  public openPhotoInfo() {
    this.photoInfoService.getPhotoInfo(this.openableImageId).subscribe(
      (photoInfo: PhotoInfo) => {
        console.log(photoInfo);
        this.photoInfo = photoInfo;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: err.name,
          detail: err.message
        });

        this.closePhotoInfoModal();
      },
      () => {}
    );
  }

}
