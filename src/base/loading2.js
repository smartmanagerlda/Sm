document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('imagem').style.visibility="hidden";
        document.getElementById('body').style.visibility="hidden";
        document.getElementById('navbar').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('spinner').style.visibility="hidden";
            document.getElementById('body').style.visibility="visible";
            document.getElementById('imagem').style.visibility="visible";
             document.getElementById('navbar').style.visibility="visible";
        },1000);
    }
}
  
  