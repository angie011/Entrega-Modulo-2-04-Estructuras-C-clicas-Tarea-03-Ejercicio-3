let hora = 0;
let minutos = 0;
let segundos = 0;
let i;
let j;
let k;

for(i=0;i<=59;i++)
{
    if(i<=9){
        alert(`00:00:0${i}`);
    }else{
        alert(`00:00:${i}`);
    }        
}


for(j=1;j<=59;j++){
    if(j<=9){
        alert(`00:0${j}:00`);
    }else{
        alert(`00:${j}:00`);
    }   
}

for(k=1;k<=23;k++){
    if(k<=9){
        alert(`0${k}:00:00`);
    }else{
        alert(`${k}:00:00`);
    }   
}
alert(`${k-1}:${j-1}:${i-1}`);