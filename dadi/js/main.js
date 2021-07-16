// Numero Giocatore casuale tra 0 e 6

var playerNumber = Math.floor(Math.random() * 7);

alert("Il numero assegnato al giocatore è " + playerNumber);


// Numero CPU casuale tra 0 e 6

var cpuNumber = Math.floor(Math.random() * 7);

alert("Il numero assegnato al computer è " + cpuNumber);


// Chi è il Vincitore

if (playerNumber > cpuNumber) {
    document.writeln("il vincitore è il giocatore")
}

else if (playerNumber < cpuNumber) {
    document.writeln("il vincitore è il computer")
}
else if (playerNumber == cpuNumber) {
    document.writeln("Pareggio")
}
    

