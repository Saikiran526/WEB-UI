function convertFromCelsius(){
    let cel=document.getElementsByTagName('input')[0].value;
    let fore= (cel * 9/5)+32;
    let kel=cel+273.15;
    display(cel,fore,kel);
}

function convertFromFahrenheit(){
    let fore= document.getElementsByTagName('input')[1].value;
    let cel= (fore-32)*5/9;
    let kel=cel+273.15;
    display(cel,fore,kel);
}

function convertFromKelvin(){
    let kel=document.getElementsByTagName('input')[1].value;
    let cel=kel-273.15;
    let fore= (kel-273.15)*9/5 +32;
    display(cel,fore,kel);
}

function display(cel,fore,kel){
 document.getElementById('display').innerHTML="<p>Celcius : "+cel+"C<br><br>Foreginheit :"+fore+" F<br><br>Kelvin : "+kel+" K</p>";
}
