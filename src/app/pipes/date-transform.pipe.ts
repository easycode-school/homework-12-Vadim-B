import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(timeStamp: string): string {
    const timeStampDate = new Date(timeStamp).getTime();
    const realTime = Date.now();
    const difference = (realTime - timeStampDate) / 1000;
    if (difference <= 60) {
      return 'less than a minute ago';
    } else if (difference <= 3600) {
      return `a ${Math.floor(difference / 60)} 50 minutes ago
      `;
    } else if (difference <= 3600 * 24) {
      return `${Math.floor(difference / 3600)} hours ago`;
    } else {
      const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      };

      return `${new Date(timeStamp).toLocaleString('ru', options)}`;
    }
  }

}
