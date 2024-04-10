const playerStatsDiv = document.getElementById("player-stats");
  const playerSelect = document.getElementById("player-select");

playerSelect.addEventListener("change",()=>{

    const selectedPlayer = playerSelect.value;
    getPlayerStats(selectedPlayer);

});

const players = [
  {
                    
                    name: "Juan Soto",
                    year: 2020,
                    slash: ".351/.490/.695",
                    OWAR: 3.2,
                    adjustedOPS: "217"
  },
  {
                    name: "Ronald Acuña",
                    year: 2023,
                    slash: ".337/.416/.596",
                    OWAR: 8.5,
                    adjustedOPS: "168"
  }
];

function getPlayerStats(playerName){
      for (let i=0; i < players.length; i++){
        if (players[i].name === playerName){
          const selectedPlayer = players[i];
          
          displayPlayerStats(selectedPlayer);
          return;
        }
      }
  }
  function displayPlayerStats(player) {
  
  const statsHTML = `
    <h3>${player.name}</h3>
    <p>Year: ${player.year}</p>
    <p>Slash Line: ${player.slash}</p>
    <p>OWAR: ${player.OWAR}</p>
    <p>Adjusted OPS: ${player.adjustedOPS}</p>
  `;
    playerStatsDiv.innerHTML = statsHTML;
    playerStatsDiv.classList.remove('hidden');
    return;
  }
