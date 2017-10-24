import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform{
  transform(value:string,replace:string):string{
    return value.replace(replace," ");
  }
}
