import { Pipe, PipeTransform } from '@angular/core';
import {Source} from '../interface/source.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<Source>,args?:any): any {
    if (!args){
      return value;
    }
    return value.filter(s => s.name.toLowerCase().startsWith(args.toLowerCase()));

  }

}
