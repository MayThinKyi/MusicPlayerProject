let yourPlaylistgDivContainerTag=document.querySelector(".yourPlaylistgDivContainer");
let tracks=[
    {trackId:"1", trackTitle:"Dandelions", artist:"Ruth B", src:"music/track1.mp3",imgSrc:"https://images.genius.com/a4c44a0654717709a02e8d439a6f82f7.1000x1000x1.jpg" },
    {trackId:"2", trackTitle:"Kill This Love", artist:"BLACKPINK", src:"music/track2.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000515025093-qt5kct-t500x500.jpg"},
    {trackId:"3", trackTitle:"Black Swan", artist:"BTS", src:"music/track3.mp3",imgSrc:"https://i1.sndcdn.com/artworks-WEYaQI04xZhDF9Kv-4deWOA-t500x500.jpg"},
    {trackId:"4", trackTitle:"Welcome To My Life", artist:"Simple Plan",src:"music/track4.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000387085686-m08tee-t500x500.jpg"},
    {trackId:"5", trackTitle:"Viva La Vida", artist:"COLDPLAY", src:"music/track5.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000601618708-3njexb-t500x500.jpg"},
    {trackId:"6", trackTitle:"All I Want", artist:"Kodaline", src:"music/track6.mp3",imgSrc:"http://images.genius.com/b58b8cc5b5c65e63ec87f84133370cbf.1000x1000x1.jpg"},
    {trackId:"7", trackTitle:"Don't Wanna Cry", artist:"Seventeen", src:"music/track7.mp3",imgSrc:"https://i1.sndcdn.com/artworks-ksvFGQm60sVABR7H-4GmjAQ-t500x500.jpg"},
    {trackId:"8", trackTitle:"Mikrokosmos", artist:"BTS", src:"music/track8.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000637299547-qdpxlv-t500x500.jpg"},
    {trackId:"9", trackTitle:"Diosynus", artist:"BTS", src:"music/track9.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000637298005-bxehgg-t500x500.jpg"},
    {trackId:"10", trackTitle:"If", artist:"Bread", src:"music/track10.mp3",imgSrc:"https://i1.sndcdn.com/artworks-Bk9TNoNxLoCV-0-t500x500.jpg"},
    {trackId:"11", trackTitle:"Psycho", artist:"Red Velvet", src:"music/track11.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000657166189-dxjm1z-t500x500.jpg"},
    {trackId:"12", trackTitle:"21 Guns", artist:"Green Day", src:"music/track12.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000088477464-23hlyu-t500x500.jpg"},
    {trackId:"13", trackTitle:"My Universe", artist:"COLDPLAY ft:BTS", src:"music/track13.mp3",imgSrc:"https://i1.sndcdn.com/artworks-BCGTvR8sAIeL-0-t500x500.jpg"},
    {trackId:"14", trackTitle:"Make It Right", artist:"BTS", src:"music/track14.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000616670719-msfe9c-t500x500.jpg"},
    {trackId:"15", trackTitle:"Hey Dude", artist:"The Beatles", src:"music/track15.mp3",imgSrc:"https://i1.sndcdn.com/artworks-000399805209-h7muup-t500x500.jpg"}
];
let oneToFiveTag=document.querySelector(".oneToFive");
let sixToTenTag=document.querySelector(".sixToTen");
let elevenToFifteenTag=document.querySelector(".elevenToFifteen");
let playListContainer;
let threeDotContainerTag=document.querySelector(".threeDotContainer");
let dot1Tag=document.querySelector(".dot1");
let dot2Tag=document.querySelector(".dot2");
let dot3Tag=document.querySelector(".dot3");
let nowPlayingSongTag=document.querySelector(".nowPlayingSong");
let nowPlayingSongImgTag=document.querySelector(".nowPlayingSongImg");
let nowPlayingSongTitleTag=document.querySelector(".nowPlayingSongTitle");
let nowPlayingSongArtistTag=document.querySelector(".nowPlayingSongArtist");

let audioTag=document.getElementsByTagName("audio")[0];
let currentPlaylistSongsTag;//clicked from showclass Div from currentPlaylistContainer
let currentPlaylistSongsTagArray;
let currentPlaylistSongsTagChildren;
let currentPlaylistSongsTagChild;
let clickedSong;
let clickedSongId;
let clickedSongSrc;
let clickedSongTag;
let clickedSongImgSrc;
let progressBarContainerTag=document.querySelector(".progressBarContainer");
let currentProgressTag=document.querySelector(".currentProgress");
let currentTimeAndDurationTag=document.querySelector(".currentTimeAndDuration");
let duration="00:00";
let currentTime;
let currentTimeText;

let second;
let minute;
let durationsecond;
let durationminute;
let minuteText;
let secondText;
let durationText="00:00";
let currentProgressWidth;
let songLoopFunction=()=>{
     currentPlaylistSongsTag=document.getElementsByClassName("show")[0];
    currentPlaylistSongsTagChildren=currentPlaylistSongsTag.children;
    for(let i=0;i<currentPlaylistSongsTagChildren.length;i++){
        currentPlaylistSongsTagChild=currentPlaylistSongsTagChildren[i];
        currentPlaylistSongsTagChild.addEventListener("click",(event)=>{
            clickedSong=  event.currentTarget;

            clickedSongId=clickedSong.id;
            indexToSelect=clickedSongId;
            nowPlayingSongTag.id=clickedSongId.toString();

            nowPlayingImgFunction();
                   tracks.filter((track)=>{
                    if(track.trackId===clickedSongId){
                     clickedSongSrc=track.src;
                     nowPlayingSongTitleTag.innerHTML=track.trackTitle;
                     nowPlayingSongArtistTag.innerHTML=track.artist;
                     audioTag.src=clickedSongSrc.toString();
                       audioTag.play();
                     isPlaying=true;
                      return playButtonAndPauseButon();
                    }
                    })
            return})

    }

    
};

let nowPlayingImgFunction=()=>{
    tracks.filter((track)=>{
        if(track.trackId===clickedSongId){
        nowPlayingSongImgTag.src=track.imgSrc;
        
        }
        })

  //nowPlayingSongImgTag.src=
};

dot1Tag.addEventListener("click",()=>{
    dot2Tag.style.color="#d4d4d4";
    dot3Tag.style.color="#d4d4d4";

    dot1Tag.style.color="blue";
    dot1Tag.style.fontWeight="700";
    dot2Tag.style.fontWeight="700";
    dot3Tag.style.fontWeight="700";

    
    //sixToTenTag.classList.remove("show");
    //elevenToFifteenTag.classList.remove("show");
    

    sixToTenTag.classList.add("hide");
    elevenToFifteenTag.classList.add("hide");
    oneToFiveTag.classList.remove("hide");
    sixToTenTag.classList.remove("show");
    elevenToFifteenTag.classList.remove("show");

    oneToFiveTag.classList.add("show");
    //start
    songLoopFunction();
    //end

    
});
dot2Tag.addEventListener("click",()=>{
    dot1Tag.style.color="#d4d4d4";
    dot2Tag.style.color="blue";

    dot3Tag.style.color="#d4d4d4";
    dot1Tag.style.fontWeight="700";
    dot2Tag.style.fontWeight="700";
    dot3Tag.style.fontWeight="700";    
    oneToFiveTag.classList.add("hide");
   // oneToFiveTag.classList.remove("show");
    //    elevenToFifteenTag.classList.remove("show");
    elevenToFifteenTag.classList.add("hide");

    sixToTenTag.classList.remove("hide");
    oneToFiveTag.classList.remove("show");
    elevenToFifteenTag.classList.remove("show");

    sixToTenTag.classList.add("show");


    //start 
    songLoopFunction();



    //end
});
dot3Tag.addEventListener("click",()=>{
    dot1Tag.style.color="#d4d4d4";
    dot2Tag.style.color="#d4d4d4";

    dot3Tag.style.color="blue";    
    dot1Tag.style.fontWeight="700";
    dot2Tag.style.fontWeight="700";
    dot3Tag.style.fontWeight="700";    
   // oneToFiveTag.classList.remove("show");
    oneToFiveTag.classList.add("hide");
    sixToTenTag.classList.add("hide");

    elevenToFifteenTag.classList.remove("hide");
    oneToFiveTag.classList.remove("show");
    sixToTenTag.classList.remove("show");

    elevenToFifteenTag.classList.add("show");
    //start
    songLoopFunction();



    //end
});

audioTag.addEventListener("loadeddata",()=>{
    duration=audioTag.duration;
    durationminute=Math.floor(duration/60);
    durationsecond=Math.floor(duration%60);
    minuteText=durationminute>9? durationminute:"0"+durationminute;
    secondText=durationsecond>9 ? durationsecond:"0"+durationsecond;
    durationText=minuteText+":"+secondText;
    

});
audioTag.addEventListener("timeupdate",()=>{
    currentTime=audioTag.currentTime;
    minute=Math.floor(currentTime/60);
    second=Math.floor(currentTime%60);
    minuteText=minute>=10? minute :"0"+minute;
    secondText=second>=10? second :"0"+second;
    currentTimeText=minuteText+":"+secondText;
    currentTimeAndDurationTag.innerHTML=currentTimeText+" / "+durationText;
    currentProgressWidth=(250/duration)*currentTime;
    currentProgressTag.style.width=currentProgressWidth+"px";
});
progressBarContainerTag.addEventListener("mousedown",(event)=>{
    var clickedPosition=event.clientX-event.target.offsetLeft;
    audioTag.currentTime=(clickedPosition/event.target.offsetWidth)*audioTag.duration;

},false);

let playButtonTag=document.querySelector(".playButton");
let pauseButtonTag=document.querySelector(".pauseButton");
let nextButtonTag=document.querySelector(".nextButton");
let previousButtonTag=document.querySelector(".previousButton");
let randomButtonTag=document.querySelector(".randomButton");
let repeatButtonTag=document.querySelector(".repeatButton");
let indexToSelect=1;
let songIdToPlay;
let songToPlay;
let isPlaying=false;
let repeat=true;
let playButtonAndPauseButon=()=>{
    if(isPlaying===false){
        pauseButtonTag.classList.add("hide");
        playButtonTag.classList.remove("hide");
    }else{
        playButtonTag.classList.add("hide");
        pauseButtonTag.classList.remove("hide");

    }
};
playButtonTag.addEventListener("click",()=>{
    //songLoopFunction();
    dot1Tag.click();
   audioTag.play();
   isPlaying=true;
   playButtonAndPauseButon();
});
pauseButtonTag.addEventListener("click",()=>{
    audioTag.pause();
    isPlaying=false;
    playButtonAndPauseButon();
});
nextButtonTag.addEventListener("click",()=>{
    //clickedSongId=parseInt(clickedSongId,10);
    clickedSongId+=1;
    indexToSelect=parseInt(indexToSelect,10)
    
    indexToSelect+=1;

   // indexToSelect=clickedSongId+1;
    //console.log(typeof(indexToSelect))
  //  console.log("indexToSelect",indexToSelect)
    if(indexToSelect===6){
        dot2Tag.click();
    }
    if(indexToSelect===11){
        dot3Tag.click();
    }if(indexToSelect>15){
        indexToSelect=15;
        return;
    }
    tracks.filter((song)=>{
        if(song.trackId==indexToSelect){
            audioTag.src=song.src;
            nowPlayingSongImgTag.src=song.imgSrc;
            nowPlayingSongTitleTag.innerHTML=song.trackTitle;
            nowPlayingSongArtistTag.innerHTML=song.artist;
            audioTag.play();
            isPlaying=true;
            playButtonAndPauseButon();
        }
    })

});
previousButtonTag.addEventListener("click",()=>{
    indexToSelect-=1;//1-1=0//
    if(indexToSelect===0){
        indexToSelect=1;
        audioTag.play();
            isPlaying=true;
            playButtonAndPauseButon();
        return;
    }else{
        if(indexToSelect===5){
            dot1Tag.click();
        }
        if(indexToSelect===10){
            dot2Tag.click();
        }
        tracks.filter((song)=>{
            if(song.trackId==indexToSelect){
                console.log("Entering")
                audioTag.src=song.src;
                console.log(audioTag.src)
                nowPlayingSongImgTag.src=song.imgSrc;
                nowPlayingSongTitleTag.innerHTML=song.trackTitle;
                nowPlayingSongArtistTag.innerHTML=song.artist;
                audioTag.play();
                isPlaying=true;
                playButtonAndPauseButon();
            }
        })
    }
});
randomButtonTag.addEventListener("click",()=>{
    audioTag.play();
    isPlaying=true;
    playButtonAndPauseButon();
});
//    repeatButtonTag.classList.add("repeatOn");

repeatButtonTag.addEventListener("click",()=>{
    
});