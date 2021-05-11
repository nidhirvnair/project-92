name_p1=localStorage.getItem("player1_name");
document.getElementById("player_1_name").innerHTML=name_p1;
name_p2=localStorage.getItem("player2_name");
document.getElementById("player_2_name").innerHTML=name_p2+":";
question_turn="player1";
answer_turn="player2";
player1_score=0;
document.getElementById("player_1_score").innerHTML=player1_score;
player2_score=0;
document.getElementById("player_2_score").innerHTML=player2_score;
function send(){
    n1=document.getElementById("num1").value;
    n2=document.getElementById("num2").value;
    actual_ans=parseInt(n1) * parseInt(n2);

    problem="<h4>"+n1+"X"+n2+"</h4>";
    input_box="<br>Answer : <input type='text' id='check_box' placeholder='answer'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>check</button>"; 
    row=problem+input_box+check_btn;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

function check(){
    answer=document.getElementById("check_box").value;

    if(answer==actual_ans){
        if(answer_turn=="player1"){
            new_p1_score=player1_score+1;
            document.getElementById("player_1_score").innerHTML=new_p1_score;
        }
        else{
            new_p2_score=player2_score+1;
            document.getElementById("player_2_score").innerHTML=new_p2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_Qu").innerHTML=question_turn;
    }
    else{
        question_turn="player1";
        document.getElementById("player_Qu").innerHTML=question_turn;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_An").innerHTML=answer_turn;
    }
    else{
        answer_turn=="player1";
        document.getElementById("player_An").innerHTML=answer_turn;
    }
    
}

