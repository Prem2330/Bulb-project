let Btn=document.getElementById("Btn");
let Bulb=document.getElementById("bulb");
Btn.addEventListener('click',ToggleBulb);

function ToggleBulb()
{
    if(Btn.textContent.includes("On"))
    {
        Bulb.src="Bulbon.jpeg";
        Btn.innerHTML="Turn Off"
        Bulb.height=600;
    }
    else
    {
        Bulb.src="Bulboff.jpeg";
        Btn.innerHTML="Turn On"
        
    }

}
