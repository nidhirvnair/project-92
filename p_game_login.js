function addUser(){
    player1_name=document.getElementById("user1name").value;
    player2_name=document.getElementById("user2name").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="index(1).html";
}