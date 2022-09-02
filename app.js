var start=document.getElementById("start");
var lap=document.getElementById("lap");
var list=document.getElementById("list");
var h=document.getElementById("h");
var m=document.getElementById("m");
var s=document.getElementById("s");
var lap_count=1;
var [sec,mn,hou]=[0,0,0];
function satartwatch(){
    setInterval(() => {
        if(sec<=9 || sec>=60){
            if(sec<=9){
                s.innerHTML="0"+sec;
                sec++;
            }
            else{
                s.innerHTML=00;
                sec=0;
                mn++;
            }
        }
        if(mn<=9 || mn>=60){
            if(mn<=9){
                m.innerHTML="0"+mn;
            }
            else{
                m.innerHTML=00;
                mn=0;
                hou++;
            }
        }
        if(hou<=9 || hou>=60){
            if(hou<=9){
                h.innerHTML="0"+hou;
            }
            else{
                h.innerHTML=00;
                hou=0;
            }
        }
        if((sec>=10 && sec<=59)||(mn>=10 && mn<=59) || (hou>=10 && hou<=59)){
            s.innerHTML=sec;
            sec++;
        }
    }, 1000);
}
lap.addEventListener("click",()=>{
    let h1 = hou<10 ? "0"+hou :hou;
    let m1 = mn<10 ? "0"+mn : mn;
    let s1 = sec<10 ? "0"+sec : sec;
    var time=h1+":"+m1+":"+s1;
    console.log(time);
    var res =`
    
    `
})
// start.addEventListener('click',satartwatch());
