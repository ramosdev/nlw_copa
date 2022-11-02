 function createCard (){
    return `
    <div class="card">
         <div class="game-date">
        <h2>21/11 <span>SEGUNDA</span></h2>
     </div>

     <div class="games">
         <ul>
             <li>
                 <img src="/src/assets/bandeiras/icon=brazil.svg" alt="Bandeira do Brasil">
                 <strong>08:00</strong>
                 <img src="/src/assets/bandeiras/icon=cameroon.svg" alt="Bandeira de Camarões">
             </li>
             
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
 
 ${createCard()}
 ${createCard()}
 
 </main>
</div>`
