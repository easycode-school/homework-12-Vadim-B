import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../interfaces/image';
import { UserService } from '../../services/user.service';
import { AuthGlobalService } from '../../../../services/auth-global.service';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  /** Идентификатор пользователя */
  @Input() userId: string;
  @Input() authUserId: string;

  /** Массив изображений пользователя */
  public images: Image[];
  public uploadPhotosModalIsOpened = false;
  public photoInfoModalIsOpened = false;
  public openableImageId: string;

  constructor(private userService: UserService, private auth: AuthGlobalService) {
  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.userService.getUserImages(this.userId).subscribe((images: Image[]) => {
      this.images = images;
    });
  }

  /**
   * openPhotoInfoModal - метод, который
   * 1. открывает модальное окно с отдельной компонентой;
   * 2. присваивает id? открываемой картики, в переменную, которая инпутится в создаваемую компоненту
   * @param imageId - id открываемой картинки
   */
  public openPhotoInfoModal(imageId: string) {
    this.photoInfoModalIsOpened = true;
    this.openableImageId = imageId;
  }

}
