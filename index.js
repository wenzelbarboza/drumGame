let drums = document.querySelectorAll(".drum");

for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click",function (){
        
        let innerHTML = this.innerHTML;
        switch(innerHTML){
            case "w":
                let t1 = new Audio("sounds/tom-1.mp3")
                t1.play();
                break;
            
            case "a":
                let t2 = new Audio("sounds/tom-2.mp3")
                t2.play();
                break;
            
            case "s":
                let t3 = new Audio("sounds/tom-3.mp3")
                t3.play();
                break;
                
            case "d":
                let t4 = new Audio("sounds/tom-4.mp3")
                t4.play();
                break;
        
            case "j":
                let snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;

            case "k":
                let crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;

            case "l":
                let kickBass = new Audio("sounds/kick-bass.mp3")
                kickBass.play();
                break;
        }

    })
}




for(let j = 0; j < drums.length; j++){
    drums[j].addEventListener("keydown",function (){
        let keydown = event.key;
        switch(keydown){
            case "w":
                let t1 = new Audio("sounds/tom-1.mp3")
                t1.play();
                break;
            
            case "a":
                let t2 = new Audio("sounds/tom-2.mp3")
                t2.play();
                break;
            
            case "s":
                let t3 = new Audio("sounds/tom-3.mp3")
                t3.play();
                break;
                
            case "d":
                let t4 = new Audio("sounds/tom-4.mp3")
                t4.play();
                break;
        
            case "j":
                let snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;

            case "k":
                let crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;

            case "l":
                let kickBass = new Audio("sounds/kick-bass.mp3")
                kickBass.play();
                break;
        }
    })
}