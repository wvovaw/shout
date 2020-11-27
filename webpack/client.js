import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

const dates = document.querySelectorAll('.post-date');

const timeAgo = new TimeAgo('en-US');
dates.forEach(item => {
    item.innerText = timeAgo.format(new Date(item.innerText));
});