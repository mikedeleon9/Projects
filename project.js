    const playerStatsDiv = document.getElementById("player-stats");
    const playerSelect = document.getElementById("player-select");


playerSelect.addEventListener("change",()=>{

    const selectedPlayer = playerSelect.value;
    const playerStats = getPlayerStats(selectedPlayer);
    updatePlayerStats(playerStats);

});

function getPlayerStats(player){
    let stats ={};

    switch (player){
        case "Soto":
            stats ={
                    year: 2020,
                    name: "Juan Soto",
                    slash: ".351/.490/.695",
                    OWAR: 3.2,
                    adjustedOPS: "217"
            };
            break;

        case "Acuna":
            stats = {
                    year: 2023,
                    name: "Ronald Acuña",
                    slash: ".337/.416/.596",
                    OWAR: 8.5,
                    adjustedOPS: "168"
            };
            break;

        case "Judge":
            stats = {
                year: 2022,
                name: "Aaron Judge",
                slash: ".311/.425/.686",
                OWAR: 10.3,
                adjustedOPS: "210"
            };
            break;

        default:
            break;
    }
        return stats;

    
}

function updatePlayerStats(stats){
    playerStatsDiv.innerHTML = `
    <h2>${stats.name}</h2>
    <p>Year: ${stats.year}</p>
    <p>Slash Line: ${stats.slash}</p>
    <p>Offensive WAR: ${stats.OWAR}</p>
    <p>OPS+: ${stats.adjustedOPS}</p>
`   
    playerStatsDiv.classList.remove('hidden');
}