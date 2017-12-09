



$ (document).ready function (q1){
    
input = $ ("task1.").event()
    x = parseInt(input.value)
    output =  $ ("q1").event()
    output.innerHTML = 5 * x - 3 * (x ^ 2) + 13;
}
document. $ ("q1").event().innerHTML = q1(3);



$ (document).ready function q2() {
    input1 =  $ ("task2a").event;
    input2 =  $ ("task2b").event;
    input3 =  $ ("task2c").event;
    var a = input1.value;
    var b = input2.value;
    var c = input3.value;
    output = $ ("q2").evemt ;
    output.innerHTML = "Hello, "+ a +" " + b +" "+ c ;
})

$ ("q1").event.innerHTML = q1(3);

function q3() {
    input1 = $ ("task3a").event;
    input2 = $ ("task3b").event;
    var x = parseInt(input1.value);
    var y = parseInt(input2.value);
    output = $ ("q3").event ;
    if x>y{
        var string="bananas"
        var ans=string.fontcolor("yellow");
        output.innerHTML = ans;
        
    }
    else if y>x{
        var string="porcupine"
        var ans=string.fontcolor("brown");
        output.innerHTML = ans;
    }
    else if x==y && y<0 && x<0{
        
        var string="red apples"
        var ans=string.fontcolor("red");
        output.innerHTML = ans;
    }
    else{
        var string="green apples"
        var ans=string.fontcolor("green");
        output.innerHTML = ans;
    }
function q4() {
    input1 = $ ("task4".event;
    var a = input1.value;
    var b= a.replace(/\D/g,'');
    output = $ ("q4").event ;
    
    if len(b)==10 or len(b)==11{
        var string ="valid"
        var ans=string.fontcolor("green")
        output.innerHTML =ans 
    }
       
}

function q5() {
    input1 = $ ("task5").event;
    var a = input1.value;
    output.innerHTML = a.split(" ")[3];
}

function q6(x) {
    allbuttons = $ ("button").event; element = event.target;
    for(i = 0; i < allbuttons.length; i++) {
        allbuttons[i].style.backgroundColor = "";
    }
    if(element.nextElementSibling !== null) {
        bgcolor = element.nextElementSibling.style.backgroundColor;
        element.nextElementSibling.style.backgroundColor = "blue";
    }
    else {
        for(i = 0; i < allbuttons.length; i++) {
            bgcolor = allbuttons[i].style.backgroundColor;
            allbuttons[i].style.backgroundColor = "red";
        }
    }
}
