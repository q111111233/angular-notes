import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'Shorten'
})
export class ShortenPipe implements PipeTransform{
  transform(value: any){
    if(!value)
      return "";
    else
      return value.length>40? value.substr(0, 40)+"...": value;
  }
}
