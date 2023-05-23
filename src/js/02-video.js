import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const startPlayer = localStorage.getItem("videoplayer-current-time");
   

    player.on('play', throttle(function(timeupdate) {
        localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
        console.log(timeupdate.seconds);
    }, 1000));



    if (startPlayer !== null && startPlayer !== undefined){
        player.setCurrentTime(startPlayer).then(function(seconds) {
            
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    break;
                default:
                    break;
            }
        });
        };
         








  
   