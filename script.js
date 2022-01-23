function sleep() {
    var name_1 = document.getElementById("Player1").value;
    localStorage.setItem("name_1", name_1);
    var name_2 = document.getElementById("Player2").value;
    localStorage.setItem("name_2", name_2);
    window.location = "game.html";
}