var tag1=document.getElementById("r1");
var tag2=document.getElementById("r2");
var tag3=document.getElementById("r3");
var tag4=document.getElementById("r4");
var tag5=document.getElementById("r5");
var tag6=document.getElementById("r6");

function change1(){
    tag1=document.getElementById("r1");
    tag2=document.getElementById("r2");
    tag3=document.getElementById("r3");
    tag4=document.getElementById("r4");
    tag5=document.getElementById("r5");
    tag6=document.getElementById("r6");

    if(tag1.style.backgroundColor!="orange"&&
       tag2.style.backgroundColor!="orange"&&
       tag3.style.backgroundColor!="orange"&&
       tag4.style.backgroundColor!="orange"&&
       tag5.style.backgroundColor!="orange"&&
       tag6.style.backgroundColor!="orange"   
      )
    {
    document.getElementById("th").style.display="block";
    tag1.style.backgroundColor="orange";
    }
}
function change2(){
    tag1=document.getElementById("r1");
    tag2=document.getElementById("r2");
    tag3=document.getElementById("r3");
    tag4=document.getElementById("r4");
    tag5=document.getElementById("r5");
    tag6=document.getElementById("r6"); 

    if( tag1.style.backgroundColor!="orange"&&
        tag2.style.backgroundColor!="orange"&&
        tag3.style.backgroundColor!="orange"&&
        tag4.style.backgroundColor!="orange"&&
        tag5.style.backgroundColor!="orange"&&
        tag6.style.backgroundColor!="orange"   
      ) 
    { 
        document.getElementById("th").style.display="block";    
        tag2.style.backgroundColor="orange";
    }
}
function change3(){
    tag1=document.getElementById("r1");
    tag2=document.getElementById("r2");
    tag3=document.getElementById("r3");
    tag4=document.getElementById("r4");
    tag5=document.getElementById("r5");
    tag6=document.getElementById("r6");   
    
    if( tag1.style.backgroundColor!="orange"&&
        tag2.style.backgroundColor!="orange"&&
        tag3.style.backgroundColor!="orange"&&
        tag4.style.backgroundColor!="orange"&&
        tag5.style.backgroundColor!="orange"&&
        tag6.style.backgroundColor!="orange"   
      ) 
    { 
        document.getElementById("th").style.display="block";
        tag3.style.backgroundColor="orange";
        tag3.style.color="gray";
    }
}
function change4(){
    tag1=document.getElementById("r1");
    tag2=document.getElementById("r2");
    tag3=document.getElementById("r3");
    tag4=document.getElementById("r4");
    tag5=document.getElementById("r5");
    tag6=document.getElementById("r6");

    if( tag1.style.backgroundColor!="orange"&&
        tag2.style.backgroundColor!="orange"&&
        tag3.style.backgroundColor!="orange"&&
        tag4.style.backgroundColor!="orange"&&
        tag5.style.backgroundColor!="orange"&&
        tag6.style.backgroundColor!="orange"   
      ) 
    { 
        document.getElementById("th").style.display="block";
        tag4.style.backgroundColor="orange";
        tag4.style.color="black";
    }
}
function change5(){
    tag1=document.getElementById("r1");
    tag2=document.getElementById("r2");
    tag3=document.getElementById("r3");
    tag4=document.getElementById("r4");
    tag5=document.getElementById("r5");
    tag6=document.getElementById("r6");

    if( tag1.style.backgroundColor!="orange"&&
        tag2.style.backgroundColor!="orange"&&
        tag3.style.backgroundColor!="orange"&&
        tag4.style.backgroundColor!="orange"&&
        tag5.style.backgroundColor!="orange"&&
        tag6.style.backgroundColor!="orange"   
      ) 
    { 
        document.getElementById("th").style.display="block";
        tag5.style.backgroundColor="orange";
        tag5.style.color="black";
    }
}
function change6(){
    tag1=document.getElementById("r1");
    tag2=document.getElementById("r2");
    tag3=document.getElementById("r3");
    tag4=document.getElementById("r4");
    tag5=document.getElementById("r5");
    tag6=document.getElementById("r6");

    if( tag1.style.backgroundColor!="orange"&&
        tag2.style.backgroundColor!="orange"&&
        tag3.style.backgroundColor!="orange"&&
        tag4.style.backgroundColor!="orange"&&
        tag5.style.backgroundColor!="orange"&&
        tag6.style.backgroundColor!="orange"   
      ) 
    { 
        document.getElementById("th").style.display="block";
        tag6.style.backgroundColor="orange";
        tag6.style.color="black";
    }
}
function textarea(){
    document.getElementById("text").value="THANK YOU FOR YOUR OPINION!";

}
// this is for contact page:
function contact(){
    document.getElementById("contact").value=""
}
