import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoInfoService {
    private apiUrl: string = environment.apiUrl;

    constructor(
      private http: HttpClient,
    ) { }

    /**
     * getPhotoInfo - метод, который отправляет на api запрос и получает информацию о запрашиваемой картинке
     * @param id - id открываемой картинки
     */
  public getPhotoInfo(id: string): Observable<object> {
    return this.http.get(`${this.apiUrl}/public/users/image-info/${id}`);
  }
}
