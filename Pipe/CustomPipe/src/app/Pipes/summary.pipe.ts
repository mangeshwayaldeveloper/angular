import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, lenght:number): unknown {
    return value.substring(0,lenght);
  }

}
