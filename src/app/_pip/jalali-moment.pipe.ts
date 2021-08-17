import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'jalaliMoments'
})
export class JalaliMomentsPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    if (value == null) { return '' }
    const MomentDate = moment(value, 'YYYY-M-D HH:mm:ss');
    return MomentDate.locale('fa').format('HH:mm' + '  ' + 'jYYYY/jMM/jDD ');


  }

}
