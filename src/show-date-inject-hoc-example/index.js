// @flow
import {injectCurrentDate} from './inject-current-date';
import {ShowDateView} from './show-date-view';

export const ShowCurrentDate = injectCurrentDate(ShowDateView);
