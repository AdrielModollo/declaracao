
//Restringir código 
window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
}


function reciproco(){
        var amor = window.document.getElementById('amar').value
        var i = 1;
    if (amor.toUpperCase() ==  'MARINA' || amor.toUpperCase() == 'MARINA FURTADO' || amor.toUpperCase() == 'MARINA FURTADO BORGES'){
                while (i <= 365)  {
                    document.write  (`Dia: ${i}, te amo Marina Furtado Borges <br>`);
            i ++;
        }
    }
    else if (amor.toUpperCase() == 'MARCIA'){
        window.alert('Mamãe querida, meu coração por ti bate.')
                while (i <= 365)  {        
                    document.write  (`Dia: ${i}, te amo minha MÃE <br>`);
            i ++;
        }
    }
    else if (amor.toUpperCase() == 'NIVALDO'){
        window.alert('Você é um paizão <3')
                while (i <= 365)  {        
                    document.write  (`Dia: ${i}, te amo Pai <br>`);
            i ++;
        }
    }
    else if (amor.toUpperCase() == 'GABRIELI'){
        window.alert('Você é minha irmanzinha querida, Deus vai te abençoar muito <3');
    }
    else if (amor.toUpperCase() == 'JACQUELINE'){
        window.alert('Você é minha sogrinha querida <3');
    }
    else if (amor.toUpperCase() == 'EMERSON'){
        window.alert('Você é o sogro mais top');
    }
    else if (amor.toUpperCase() == 'EDUARDO'){
        window.alert('Você joga muito Fortnite, é um cunhado muito firmeza!');
    }
    else if (amor.toUpperCase() == 'MARINA FURTADO BORGES MODOLLO'){
        window.confirm('Você quer casar comigo e usar meu sobrenome para resto da vida?');
        window.alert('Sabia que você ia aceitar amor da minha vida, te quero para sempre <3');
        location.href="https://drive.google.com/drive/folders/1srGh5d7C4nSjAoum2FB7PHmwVlWzqnnV";
    }
    else {
        window.alert('Sinto muito, você não é amor da minha vida! :(')
    }
}

