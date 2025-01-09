const audio=new Audio();

const playlist=document.getElementById("playlist");
const tracks=document.querySelectorAll(".tracks");
const play=document.querySelector(".play");
const paush=document.querySelector(".push");
const music_name=document.querySelector(".music-name");
const progress_bar=document.querySelector(".progress-bar");
const main_card=document.querySelector(".main-card");
const current_palyingCard=document.querySelector(".currentPlayingTrack");
const current_image=document.querySelector(".current-img");

let currentIndex=0;//Initialized the current music to be playing

//this function load the music src to the Audio() dynamicaly
const loadTrack=(index)=>{
    audio.src=tracks[index].getAttribute("data-src");
}

//this function will play the music
const playTrack=()=>{
    audio.play();//play music
    play.classList.add("hide");
    paush.classList.remove("hide"); 
    music_name.innerText=`Music ${currentIndex+1} is played`;  
}


//pause music
const pauseTrack=()=>{
    audio.pause();//pause music
    play.classList.remove("hide");
    paush.classList.add("hide"); 
    music_name.innerText=`Music ${currentIndex+1} is paused`;
}


//play nest track
const nextTrack=()=>{
    if(currentIndex==tracks.length-1)
    {
        currentIndex=0;
    }
    else{
        currentIndex+=1;
    }

    loadTrack(currentIndex);
    playTrack();
    music_name.innerText=`Music ${currentIndex+1} is played`;
    current_image.src=`./assets/image/${currentIndex+1}.jpg`;
}


//play previous track
const preTrack=()=>{
      if(currentIndex==0){
        currentIndex=tracks.length-1;
      }
      else{
        currentIndex-=1;
      }
      loadTrack(currentIndex);
      playTrack();
      music_name.innerText=`Music ${currentIndex+1} is played`;
      current_image.src=`./assets/image/${currentIndex+1}.jpg`;
}


//ti shows all the tracks in the play list
const showPlayList=()=>{
    main_card.classList.remove("hide1");
    current_palyingCard.classList.add("hide1");
}


//traversing all the tracks and play dinamically
tracks.forEach((track,index)=>{
    track.addEventListener("click",()=>{
        currentIndex=index
        loadTrack(currentIndex);
        playTrack(); 
        music_name.innerText=`Music ${currentIndex+1} is played`;
        main_card.classList.add("hide1");
        current_palyingCard.classList.remove("hide1");
        current_image.src=`./assets/image/${currentIndex+1}.jpg`;
    })
})

loadTrack(currentIndex);



audio.addEventListener("timeupdate",()=>{
    progress_bar.value=audio.currentTime;
})
