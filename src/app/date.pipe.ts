import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any[], filterKey:string ) {
    return value.filter( (b=>b.CreatedAt.toDate().indexOf(filterKey)>-1));
  }

}
