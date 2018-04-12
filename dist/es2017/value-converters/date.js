import * as moment from 'moment';
export class DateValueConverter {
    toView(value) {
        if (value) {
            return moment(value).format('DD/MM/YYYY');
        }
    }
    fromView(value) {
        if (value) {
            const parts = value.split(/\/|-|\./);
            const day = Math.floor(parts[0]);
            const month = Math.floor(parts[1] - 1);
            const year = Math.floor(parts[2]);
            const date = new Date(year, month, day);
            if (!isNaN(date.getTime())) {
                return date;
            }
            else {
                return false;
            }
        }
    }
}