const personaggi =[
    ['/assets/personaggi/nisaac.png', '/assets/personaggi/isaac.png'],
    ['/assets/personaggi/nmagdalene.png', '/assets/personaggi/magdalene.png'],
    ['/assets/personaggi/ncain.png', '/assets/personaggi/cain.png'],
    ['/assets/personaggi/njudas.png', '/assets/personaggi/judas.png'],
    ['/assets/personaggi/nbluebaby.png', '/assets/personaggi/bluebaby.png'],
    ['/assets/personaggi/neve.png', '/assets/personaggi/eve.png'],
    ['/assets/personaggi/nsamson.png', '/assets/personaggi/samson.png'],
    ['/assets/personaggi/nazazel.png', '/assets/personaggi/azazel.png'],
    ['/assets/personaggi/nlazarus.png', '/assets/personaggi/lazarus.png'],
    ['/assets/personaggi/neden.png', '/assets/personaggi/eden.png'],
    ['/assets/personaggi/nlost.png', '/assets/personaggi/thelost.png'],
    ['/assets/personaggi/nlilith.png', '/assets/personaggi/lilith.png'],
    ['/assets/personaggi/nkeeper.png', '/assets/personaggi/keeper.png'],
    ['/assets/personaggi/napollyon.png', '/assets/personaggi/apollyon.png'],
    ['/assets/personaggi/nforgotten.png', '/assets/personaggi/theforgotten.png'],
    ['/assets/personaggi/nbethany.png', '/assets/personaggi/bethany.png'],
    ['/assets/personaggi/njacobesau.png', '/assets/personaggi/jacobesau.png'],
];

const tainted=[
    ['/assets/personaggi/nisaac.png', '/assets/personaggi/tisaac.png'],
    ['/assets/personaggi/nmagdalene.png', '/assets/personaggi/tmagdalene.png'],
    ['/assets/personaggi/ncain.png', '/assets/personaggi/tcain.png'],
    ['/assets/personaggi/njudas.png', '/assets/personaggi/tjudas.png'],
    ['/assets/personaggi/nbluebaby.png', '/assets/personaggi/tbluebaby.png'],
    ['/assets/personaggi/neve.png', '/assets/personaggi/teve.png'],
    ['/assets/personaggi/nsamson.png', '/assets/personaggi/tsamson.png'],
    ['/assets/personaggi/nazazel.png', '/assets/personaggi/tazazel.png'],
    ['/assets/personaggi/nlazarus.png', '/assets/personaggi/tlazarus.png'],
    ['/assets/personaggi/neden.png', '/assets/personaggi/teden.png'],
    ['/assets/personaggi/nlost.png', '/assets/personaggi/tlost.png'],
    ['/assets/personaggi/nlilith.png', '/assets/personaggi/tlilith.png'],
    ['/assets/personaggi/nkeeper.png', '/assets/personaggi/tkeeper.png'],
    ['/assets/personaggi/napollyon.png', '/assets/personaggi/tapollyon.png'],
    ['/assets/personaggi/nforgotten.png', '/assets/personaggi/tforgotten.png'],
    ['/assets/personaggi/nbethany.png', '/assets/personaggi/tbethany.png'],
    ['/assets/personaggi/njacobesau.png', '/assets/personaggi/tjacobesau.png'],
];
var i=0;
const destra = document.getElementById("destra");
const sinistra = document.getElementById("sinistra");
const button_tainted = document.getElementById("button_tainted");
const checkbox = document.getElementById("button_tainted");
const personaggio = document.getElementById("img_personaggio");
const nome = document.getElementById("img_nome");
personaggio.setAttribute("src", personaggi[i][1]);
        nome.setAttribute("src", personaggi[i][0]);
        destra.onclick = function(event){
            i+=1;
            if (i==17) {
                i=0;
            }
            const personaggio = document.getElementById("img_personaggio");
            const nome = document.getElementById("img_nome");
            personaggio.setAttribute("src", personaggi[i][1])
            nome.setAttribute("src", personaggi[i][0])
        }
        
        sinistra.onclick = function(event){
            i=i-1;
            if (i<0) {
                i=16;
            }
            const personaggio = document.getElementById("img_personaggio");
            const nome = document.getElementById("img_nome");
            personaggio.setAttribute("src", personaggi[i][1])
            nome.setAttribute("src", personaggi[i][0])
        }
checkbox.addEventListener('change', function(){
    const status=checkbox.checked;
    if(status){
        const personaggio = document.getElementById("img_personaggio");
        const nome = document.getElementById("img_nome");
        personaggio.setAttribute("src", tainted[i][1]);
        nome.setAttribute("src", tainted[i][0]);
        destra.onclick = function(event){
            i+=1;
            if (i==17) {
                i=0;
            }
            const personaggio = document.getElementById("img_personaggio");
            const nome = document.getElementById("img_nome");
            personaggio.setAttribute("src", tainted[i][1])
            nome.setAttribute("src", tainted[i][0])
        }
        
        sinistra.onclick = function(event){
            i=i-1;
            if (i<0) {
                i=16;
            }
            const personaggio = document.getElementById("img_personaggio");
            const nome = document.getElementById("img_nome");
            personaggio.setAttribute("src", tainted[i][1])
            nome.setAttribute("src", tainted[i][0])
        }
    }else{
        const personaggio = document.getElementById("img_personaggio");
        const nome = document.getElementById("img_nome");
        personaggio.setAttribute("src", personaggi[i][1]);
        nome.setAttribute("src", personaggi[i][0]);
        destra.onclick = function(event){
            i+=1;
            if (i==17) {
                i=0;
            }
            const personaggio = document.getElementById("img_personaggio");
            const nome = document.getElementById("img_nome");
            personaggio.setAttribute("src", personaggi[i][1])
            nome.setAttribute("src", personaggi[i][0])
        }
        
        sinistra.onclick = function(event){
            i=i-1;
            if (i<0) {
                i=16;
            }
            const personaggio = document.getElementById("img_personaggio");
            const nome = document.getElementById("img_nome");
            personaggio.setAttribute("src", personaggi[i][1])
            nome.setAttribute("src", personaggi[i][0])
        }
    }
})

document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
    
    if (checkbox.checked){
        document.getElementById("taint").value = 1;
    } else{
        document.getElementById("taint").value = 0;
    }
    const personaggio_n = i;

    document.getElementById("personaggio_n").value = personaggio_n;
    
    console.log(personaggio_n);

    // ORA invia il form manualmente!
    this.submit();
});


