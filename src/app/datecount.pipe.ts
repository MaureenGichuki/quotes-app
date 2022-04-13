import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'datecount'
 
})
export class DatecountPipe implements PipeTransform {

  transform(value: any, args?:any): any{
    
    let start = new Date().getTime();
    let end = new Date().getTime();
    let time = end - start;
    if(value>1){ 
  
      const min = Math.floor(((time % 86400000)%3600000)/6000)
      
    }else{
      return 0
    }
  }
  }
