const playerStatsDiv = document.getElementById("player-stats");
  const playerSelect = document.getElementById("player-select");
  const playerBioDiv = document.querySelector(".player-bio");
  const playerInfoDiv = document.querySelector(".player-info");

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
            adjustedOPS: "217",
            image: "PlayerImages/Soto.jpg",
            bio: "Juan Soto is a young superstar outfielder for the New York Yankees. Known for his elite pitch recognition and plate discipline, Soto has emerged as one of the most feared hitters in baseball.",
            profileUrl: "https://www.baseball-reference.com/players/s/sotoju01.shtml",
            info: {birthplace: 'Dominican Republic',
                   age: 25,
                   accolades:{
                   allStar: 3,
                   silverSlugger: 4,
                   careerbWAR: 29.5
                   }       
                  }
  },
  {
            name: "Ronald Acuña",
            year: 2023,
            slash: ".337/.416/.596",
            OWAR: 8.5,
            adjustedOPS: "168",
            image: "PlayerImages/Acuna.jpg",
            bio: "Ronald Acuña is a dynamic outfielder known for his electrifying speed, powerful hitting, and strong defensive skills. He has quickly become one of the most exciting players in baseball, showcasing an impressive combination of athleticism and talent.",
            profileUrl: "https://www.baseball-reference.com/players/a/acunaro01.shtml",
            info: {birthplace: 'Venezuela',
                   age: 26,
                   accolades:{
                   allStar: 4,
                   silverSlugger: 3,
                   careerbWAR: 25.9,
                   MVP: 1
                   }       
                  }
  },
  {
            name: "Aaron Judge",
            year: 2022,
            slash: ".311/.425/.686",
            OWAR: 10.3,
            adjustedOPS: "210",
            image: "PlayerImages/Judge.jpg",
            bio: "Aaron Judge is a towering presence in the outfield and a prolific slugger at the plate. Known for his mammoth home runs and strong arm, Judge is a fan favorite for the New York Yankees and a dominant force in the game.",
            profileUrl: "https://www.baseball-reference.com/players/j/judgeaa01.shtml",
            info: {birthplace: 'USA',
                   age: 31,
                   accolades:{
                   allStar: 5,
                   silverSlugger: 3,
                   careerbWAR: 41.6,
                   MVP: 1
                   }       
                  }
  },      
  {
            name: "Shohei Ohtani",
            year: 2021,
            slash: ".311/.425/.686",
            OWAR: 10.3,
            adjustedOPS: "210",
            image: "PlayerImages/Ohtani.jpeg",
            ERA: 3.14,
            IP: 132,
            K: 168,
            bio:"Shohei Ohtani is a rare two-way player who excels both as a pitcher and a hitter. He captivates audiences with his blazing fastballs, devastating breaking pitches, and explosive home runs. Ohtani's versatility makes him a standout talent in modern baseball.",
            profileUrl: "https://www.baseball-reference.com/players/o/ohtansh01.shtml",
            info: {birthplace: 'Japan',
                   age: 29,
                   accolades:{
                   allStar: 3,
                   silverSlugger: 2,
                   careerbWAR: 35.2,
                   MVP: 2
                   }       
                  }
},
{
            name: "Bryce Harper",
            year: 2021,
            slash: ".309/.429/.615",
            OWAR: 6.5,
            adjustedOPS: "179",
            image: "PlayerImages/Harper.jpg",
            bio: "Bryce Harper is an intense and passionate outfielder recognized for his power hitting and aggressive play style. He possesses a strong arm, exceptional bat speed, and a flair for the dramatic moments on the field.",
            profileUrl: "https://www.baseball-reference.com/players/h/harpebr03.shtml",
            info: {birthplace: 'USA',
                   age: 31,
                   accolades:{
                   allStar: 7,
                   silverSlugger: 4,
                   careerbWAR: 29.5,
                   MVP: 2 
                   }       
                  }
},
{
            name: "Freddie Freeman",
            year: 2023,
            slash: ".331/.410/.567",
            OWAR: 7.5,
            adjustedOPS: "161",
            image: "PlayerImages/Freeman.jpg",
            bio: "Freddie Freeman is a consistent and dependable first baseman known for his smooth swing, exceptional fielding, and leadership qualities. He's been a cornerstone player for the Atlanta Braves, contributing both offensively and defensively.",
            profileUrl: "https://www.baseball-reference.com/players/f/freemfr01.shtml",
            info: {birthplace: 'USA',
                   age: 34,
                   accolades:{
                   allStar: 7,
                   silverSlugger: 3,
                   careerbWAR: 56.3,
                   MVP: 1
                   }       
                  }
},
{
            name: "Corey Seager",
            year: 2021,
            slash: ".327/.390/.623",
            OWAR: 6.4,
            adjustedOPS: "169",
            image: "PlayerImages/Seager.jpg",
            bio: "Corey Seager is a skilled shortstop celebrated for his smooth fielding and clutch hitting. He's known for his ability to drive in runs and make spectacular defensive plays, earning him accolades as one of the top players at his position.",
            profileUrl: "https://www.baseball-reference.com/players/s/seageco01.shtml",
            info: {birthplace: 'USA',
                   age: 29,
                   accolades:{
                   allStar: 4,
                   silverSlugger: 3,
                   careerbWAR: 32.3,
                   WSMVP: 2
                   }       
                  }
},
{
            name: "Vladimir Guerrero Jr",
            year: 2021,
            slash: ".311/.401/.601",
            OWAR: 6.4,
            adjustedOPS: "167",
            image: "PlayerImages/Vlad.jpg",
            bio: "Vladimir Guerrero Jr is a young powerhouse hitter with exceptional bat-to-ball skills and tremendous raw power. Following in his father's footsteps, he's quickly making a name for himself as one of the most promising hitters in the league.",
            profileUrl: "https://www.baseball-reference.com/players/g/guerrvl02.shtml",
            info: {birthplace: 'Canada',
                   age: 25,
                   accolades:{
                   allStar: 3,
                   silverSlugger: 1,
                   careerbWAR: 15.5
                   }       
                  }
},
{
            name: "Matt Olson",
            year: 2023,
            slash: ".283/.389/.604",
            OWAR: 6.6,
            adjustedOPS: "162",
            image: "PlayerImages/Olson.jpeg",
            bio: "Matt Olson is a standout first baseman known for his superb defensive abilities and powerful left-handed swing. He's emerged as a key player for the Oakland Athletics, providing offensive production and stellar defense.",
            profileUrl: "https://www.baseball-reference.com/players/o/olsonma02.shtml",
            info: {birthplace: 'USA',
                   age: 30,
                   accolades:{
                   allStar: 2,
                   silverSlugger: 1,
                   careerbWAR: 29.3
                   }       
                  }
},
{
            name: "Fernando Tatis Jr",
            year: 2021,
            slash: ".282/.364/.611",
            OWAR: 7.3,
            adjustedOPS: "166",
            image: "PlayerImages/Tatis.jpg",
            bio: "Fernando Tatis Jr is an electrifying shortstop with an exciting blend of speed, power, and defensive prowess. His flair for the dramatic and highlight-reel plays has made him a rising star in Major League Baseball.",
            profileUrl: "https://www.baseball-reference.com/players/t/tatisfe02.shtml",
            info: {birthplace: 'Dominican Republic',
                   age: 25,
                   accolades:{
                   allStar: 1,
                   silverSlugger: 2,
                   careerbWAR: 19.6,
                   }       
                  }
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
  <a href="${player.profileUrl}" target="_blank">
  <img src="${player.image}" alt="${player.name}'s Image" class="player-image">
  </a>
    <h3>${player.name}</h3>
    <p>Year: ${player.year}</p>
    <p>Slash Line: ${player.slash}</p>
    <p>OWAR: ${player.OWAR}</p>
    <p>OPS+: ${player.adjustedOPS}</p>
  `;

  let bioHTML =`
    <h3>Player Bio</h3>
    <p>${player.bio}</p>
  `;

  let infoHTML = `
  <div class="info-div">
  <h3>Player Info</h3>
  <p>Birthplace: ${player.info?.birthplace}</p>
  <p>Age: ${player.info.age}</p>
  <p class="accolades"><strong>Accolades:</strong> </p>
  <p>All Star: x${player.info.accolades.allStar}</p>
  <p>Silver Slugger: x${player.info.accolades.silverSlugger}</p>
  <p>Career bWAR: ${player.info.accolades.careerbWAR}</p>
  </div>
  `

 if (player.info?.accolades?.MVP){
  infoHTML += `<p>MVP: ${player.info.accolades.MVP}</p>`
 }
 else if (player.info?.accolades?.WSMVP){
  infoHTML += `<p>WS MVP: ${player.info.accolades.WSMVP}</p>`
 }

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

    document.querySelector('.player-bio').innerHTML = bioHTML;
    document.querySelector('.player-info').innerHTML = infoHTML;

    playerBioDiv.innerHTML = bioHTML;
    playerStatsDiv.style.display = "block";
    playerInfoDiv.style.display = "block";
    playerBioDiv.style.display = "block";
    
    return;
  }
