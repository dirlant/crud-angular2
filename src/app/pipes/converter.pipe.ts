import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, value2: any): any {
    
    return 'La respuesta de la PIPE es: '+value+' + '+value2+' = '+ (value +  value2);
  }

}
