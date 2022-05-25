var gameData = {
    regolith: 0,
    regolithPerClick: 1,
    metal: 0,
    regolithPerUpgradeCost: 10,
    metalPerSmelt: 1,
    regolithPerSmeltCost: 10,
    scrapers: 0,
    metalPerScraperCost: 10,
    scraperRegolithPerSecond: 1
 }
  
 function gatherRegolith() {
    gameData.regolith += gameData.regolithPerClick
    document.getElementById("regolith").innerHTML = gameData.regolith + " Regolith"
 }
 function buyRegolithPerClick() {
     if (gameData.regolith >= gameData.regolithPerUpgradeCost) {
         gameData.regolith -= gameData.regolithPerUpgradeCost
         gameData.regolithPerClick += 1
         gameData.regolithPerUpgradeCost *= 2
         document.getElementById("regolith").innerHTML = gameData.regolith + " Regolith"
         document.getElementById("perClickUpgrade").innerHTML = "Upgrade Scooper (Currently Level " + gameData.regolithPerClick + ") Cost: " + gameData.regolithPerUpgradeCost + " Regolith"
     }
 }
 function smeltMetal() {
     if (gameData.regolith >= gameData.regolithPerSmeltCost) {
         gameData.regolith -= gameData.regolithPerSmeltCost
         gameData.metal += 1
         document.getElementById("regolith").innerHTML = gameData.regolith + " Regolith"
         document.getElementById("metal").innerHTML = gameData.metal + " Metal"
     }
 }
 function makeScraper() {
     if (gameData.metal >= gameData.metalPerScraperCost) {
         gameData.metal -= gameData.metalPerScraperCost
         gameData.scrapers += 1
         document.getElementById("metal").innerHTML = gameData.metal + " Metal"
         document.getElementById("scrapers").innerHTML = gameData.scrapers + " Scrapers"
     }
 }

function scrapeRegolith () {
    if (gameData.scrapers >= 1) {
    var mainGameLoop = window.setInterval(function() {
        gatherRegolith()
    }, 1000)
    }
}
