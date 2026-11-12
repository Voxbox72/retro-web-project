var ogPrices = []
var search = 'value'
for(var i = 1; i<= 12; i++){
    var s = search.concat(i)
    var originalValue = document.getElementById(s).innerText;
    var og = parseInt(originalValue)
    ogPrices[i] = og;
   
}
function changePrice(size, div){
    var grab = search.concat(div)
    var index = parseInt(div)

    
    if(size==='1'){
        document.getElementById(grab).innerHTML = ogPrices[index]
    }else if(size === '2'){
        document.getElementById(grab).innerHTML = ogPrices[index] + 2000
    }else if(size === '3'){
        document.getElementById(grab).innerHTML = ogPrices[index] + 4000
    }
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


