document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('imagem').style.visibility="hidden";
         document.getElementById('navbar').style.visibility="hidden";
         document.getElementById('home').style.visibility="hidden";
         document.getElementById('conteud').style.visibility="hidden";
         document.getElementById('graficoss').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('spinner').style.visibility="hidden";
           document.getElementById('imagem').style.visibility="visible";
         document.getElementById('navbar').style.visibility="visible";
         document.getElementById('home').style.visibility="visible";
         document.getElementById('conteud').style.visibility="visible";
         document.getElementById('graficoss').style.visibility="visible";
        },4000);
    }
}

function aguarde() {
    document.onreadystatechange = function () {
        var state = document.readyState
        if (state == 'interactive') {
            document.getElementById('imagem').style.visibility="hidden";
             document.getElementById('body').style.visibility="hidden";
             document.getElementById('navbar').style.visibility="hidden";
             document.getElementById('home').style.visibility="hidden";
             document.getElementById('conteud').style.visibility="hidden";
             document.getElementById('graficoss').style.visibility="hidden";
             document.getElementById('sidebar').style.visibility="hidden";
             document.getElementById('centro').style.visibility="hidden";
        } else if (state == 'complete') {
            setTimeout(function(){
               document.getElementById('interactive');
               document.getElementById('spinner').style.visibility="hidden";
               document.getElementById('body').style.visibility="visible";
               document.getElementById('imagem').style.visibility="visible";
                document.getElementById('navbar').style.visibility="visible";
             document.getElementById('home').style.visibility="visible";
             document.getElementById('conteud').style.visibility="visible";
             document.getElementById('graficoss').style.visibility="visible";
             document.getElementById('sidebar').style.visibility="visible";
             document.getElementById('centro').style.visibility="visible";
            },4000);
        }
    }
}
  
  