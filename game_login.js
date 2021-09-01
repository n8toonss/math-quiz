function addUser(){
    localStorage.setItem("player1", document.getElementById("player1_name_input").value);
    localStorage.setItem("player2", document.getElementById("player2_name_input").value);
    window.location="game.html";
}