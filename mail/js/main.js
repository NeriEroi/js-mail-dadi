// Email dell'utente

var yourEmail = prompt("Inserisci la tua email:");

console.log (yourEmail);


// Email autorizzate ad accedere

var emailAllowed = ["anonimo@posta.it", "ignoto@posta.it", "incognito@posta.it", "sconosciuto@posta.it"];

console.log(emailAllowed);


// Condizioni

var found = false;

for (var i = 0; i < emailAllowed.length; i++) 
{
    if (yourEmail == emailAllowed[i]) {
        console.log("Accesso concesso");
        document.writeln("Accesso concesso");
        found = true;
    }
}

if (found == false) {
    console.log("Accesso negato");
    document.writeln("Accesso negato");
}







