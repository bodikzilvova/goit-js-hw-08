import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const startPlayer = localStorage.getItem("videoplayer-current-time");
   
    player.on('timeupdate', throttle(function(timeupdate) {
        const STORAGE_KEY = localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
    }, 1000));


    if (startPlayer){
        player.setCurrentTime(startPlayer);
        };
         








  
   