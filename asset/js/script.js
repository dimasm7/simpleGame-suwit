function insertName(){
    let namePlayer = document.querySelector('#name-player');
    let name = document.querySelector('#name').value;
    namePlayer.innerHTML = name;
    
    document.querySelector('#name').value = "";
}

function getOptionComputer(){
    const comp = Math.random();
    
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp <= 0.6 ) return 'orang';
    return 'semut';
}

function getScore(comp, player){
    if(comp == player) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if(player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function load(){
    const imgComputer = document.querySelector('.img-computer');
    const interval = 100;
    const img = ['gajah', 'orang', 'semut'];

    let i = 0;
    const timePlay = new Date().getTime();
    setInterval(() => {
        if(new Date().getTime() - timePlay > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'asset/img/' + img[i++] + '.png' );
        if(i == img.length) i = 0;

    }, interval);
}

const option = document.querySelectorAll('li img');
let scoreComputer = 0;
let scorePlayer = 0;
option.forEach(function(res){
    res.addEventListener('click', function(){

        let info = document.querySelector('.info');
        info.innerHTML = "";

        const optionComputer = getOptionComputer();
        const optionPlayer = res.className;

        load();
        
        setTimeout(function(){
            let imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'asset/img/' + optionComputer + '.png'); 
    
            let score = getScore(optionComputer, optionPlayer);  
            if(score == "MENANG!"){
                scorePlayer++;
                info.style.color = "green";
                document.querySelector('#score-player').innerHTML = scorePlayer;
            }
            if(score == "KALAH!"){
                scoreComputer++;
                info.style.color = "red";
                document.querySelector('#score-computer').innerHTML = scoreComputer;
            }
            if(score == "SERI!")info.style.color = "#000";
            info.innerHTML = score;
        }, 1000);    
    });
});
