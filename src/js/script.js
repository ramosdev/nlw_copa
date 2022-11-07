function createGame (player1, hour, player2){
    return `
    <li>
        <img src="/src/assets/bandeiras/icon=${player1}.svg" alt="Bandeira do Brasil">
        <strong>${hour}</strong>
        <img src="/src/assets/bandeiras/icon=${player2}.svg" alt="Bandeira de Camarões">
    </li>
    `
 }
 
 function createCard (date, day, games){
    return `
    <div class="card">
         <div class="game-date">
        <h2>${date} <span>${day}</span></h2>
     </div>

     <div class="games">
         <ul>
             ${games}
             
         </ul>
     </div>

     </div>
    `
 }

 document.querySelector('#app').innerHTML =
 `
 

<header>
<img src="/src/assets/logo.svg" alt="logo copa nlw">
</header>

 <main id="cards">
 
 ${createCard("20/11", "Domingo", 
 createGame("qatar", "13:00", "ecuador")
 )}
 ${createCard("21/11", "Segunda",
 createGame("england", "10:00", "iran"),
 createGame("senegal", "13:00", "switzerland"),
 createGame("united states", "13:00", "wales")
 )}
 ${createCard("22/11", "Terça", 
 createGame("qatar", "13:00", "ecuador")
 )}
 
 </main>
</div>`
