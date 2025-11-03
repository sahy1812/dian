let telon = document.getElementById("telon")
let telonI = document.getElementById("c")
let telonD = document.getElementById("telon_hoja3")
const music = document.getElementById('audio-player');
const playPauseButton = document.getElementById("play-pause-button");
telon.addEventListener("click",()=>{
    playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /></svg>';
    music.play()
    loadGsap();
})

function loadGsap(){
    gsap.to('.sello',{
        duration:1.5,
        y:'100%',
        opacity:0,
    })

    gsap.to('.first',{
        delay:0.8,
        duration:3,
        x:'-100%'
    })

    gsap.to('.second',{
        delay:0.8,
        duration:3,
        x:'100%',
        onComplete: function() {
            document.querySelector('.telon').remove();
        }
    })
/* 
    gsap.set('.edad',{
        scale:0,
    })

    gsap.to('.edad',{
        delay:1,
        duration:1.5,
        scale:1
    })


    gsap.set('.nombre',{
        y:'-100%',
    })
    gsap.to('.nombre',{
        delay:1.3,
        duration:1,
        y:0
    })
 */    
}