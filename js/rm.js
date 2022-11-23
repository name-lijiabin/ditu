

var jl = true

function setRem(){
    if(jl){
        jl = false
        var ui  = 375;
        var sheb = document.documentElement.clientWidth || document.body.clientWidth
       
       sheb = sheb > 1000 ? 1000 : sheb;
       sheb = sheb < 250 ? 250 : sheb;

        var html = document.getElementsByTagName('html')[0]
        html.style.fontSize = (sheb / ui) * 10 + 'px'
        // console.log(ui , sheb);
        setTimeout(function(){
            jl = true;
        }, 500)
    }
    
    
}
window.onresize = setRem;