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
  },
  {
            name: "Aaron Judge",
            year: 2022,
            slash: ".311/.425/.686",
            OWAR: 10.3,
            adjustedOPS: "210"
  },
  {
            name: "Shohei Ohtani",
            year: 2021,
            slash: ".311/.425/.686",
            OWAR: 10.3,
            adjustedOPS: "210",
            ERA: 3.14,
            IP: 132,
            K: 168
},
{
            name: "Bryce Harper",
            year: 2021,
            slash: ".309/.429/.615",
            OWAR: 6.5,
            adjustedOPS: "179",
},
{
            name: "Freddie Freeman",
            year: 2023,
            slash: ".331/.410/.567",
            OWAR: 7.5,
            adjustedOPS: "161",
},
{
            name: "Corey Seager",
            year: 2021,
            slash: ".327/.390/.623",
            OWAR: 6.4,
            adjustedOPS: "169",
},
{
            name: "Vladimir Guerrero Jr",
            year: 2021,
            slash: ".311/.401/.601",
            OWAR: 6.4,
            adjustedOPS: "167",
},
{
            name: "Matt Olson",
            year: 2023,
            slash: ".283/.389/.604",
            OWAR: 6.6,
            adjustedOPS: "162",
},
{
            name: "Fernando Tatis Jr",
            year: 2021,
            slash: ".282/.364/.611",
            OWAR: 7.3,
            adjustedOPS: "166",
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
  
  let statsHTML = `
    <h3>${player.name}</h3>
    <p>Year: ${player.year}</p>
    <p>Slash Line: ${player.slash}</p>
    <p>OWAR: ${player.OWAR}</p>
    <p>OPS+: ${player.adjustedOPS}</p>
  `;

  if (player.name === 'Shohei Ohtani') {
        statsHTML += `
          <div class="pitching">
          <h3> Pitching Stats </h3>
          <p>ERA: ${player.ERA}</p>
          <p>IP: ${player.IP}</p>
          <p>K: ${player.K}</p>
          </div>
        `;
      }
  
    playerStatsDiv.innerHTML = statsHTML;
    playerStatsDiv.classList.remove('hidden');
    return;
  }
