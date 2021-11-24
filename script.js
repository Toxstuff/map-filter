async function loadHeroes() {
    const response = await fetch("http://localhost:3000/heroList");
    return await response.json();
}

// function loadHeroesThen() {
//     return fetch("http://localhost:3000/heroList")
//         .then(response => response.json());
// }

// die Namen aller [guten/bösen] Heroes:
// async function getHeroNames(alignment) {
//     const heroList = await loadHeroes();
//     const heroNames = heroList.filter(hero => hero.biography.alignment === alignment).map(hero => hero.name);
//     console.log(heroNames);
// }
// getHeroNames("good");

// function getHeroNamesThen(alignment) {
//     const heroes = [];
//     loadHeroes().then(function (heroList) {
//         for (let i = 0; i < heroList.length; i++) {
//             if (heroList[i].biography.alignment === alignment) {
//                 heroes.push(heroList[i].name);
//             }
//         }
//     }).then(function () {
//         console.log(heroes);
//     }
//     );
// }
// getHeroNamesThen("good");

// 1. die Anzahl der [guten/bösen] Heroes:
function getHeroNamesCount(alignment) {
    let sum = 0;
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].biography.alignment === alignment) {
                sum++;
            }
        } console.log("1. Anzahl der guten Heroes: " + sum);
    })
}
getHeroNamesCount("good");


// 2. die durchschnittlichen Punkte (alle Disziplinen) der [guten/bösen] Heroes:
function getHeroAverage(alignment) {
    let sum = 0;
    let points = 0;
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].biography.alignment === alignment) {
                sum++;
                points += heroList[i].powerstats.intelligence += heroList[i].powerstats.strength += heroList[i].powerstats.speed
                    += heroList[i].powerstats.durability += heroList[i].powerstats.power += heroList[i].powerstats.combat;
            }
        } console.log("2. Durschnittliche Punkte aber Heroes: " + points / sum);
    })
}
getHeroAverage("good");

// 3. die Anzahl der [männlichen/weiblichen] Heroes:
function getHeroNamesAverage(gender) {
    let sum = 0;
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].appearance.gender === gender) {
                sum++;
            }
        } console.log("3. Anzahl der Heroes nach Geschlecht: " + sum);
    })

}
getHeroNamesAverage("Male");

// 4. die durchschnittliche Intelligenz aller [männlichen/weiblichen] Heroes - sind die Daten sexistisch?
function getHeroNamesAverageIntelligence(gender) {
    let sum = 0;
    let amount = 0;
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].appearance.gender === gender) {
                amount += heroList[i].powerstats.intelligence;
                sum++;
            }
        } console.log("4. Durschnittliche Intelligenz nach Geschlecht: " + amount / sum)
    })
}
getHeroNamesAverageIntelligence("Male");

// 5. alle Heroes mit anderem Gender als "Male" oder "Female" (Objekte mit Name + Gender):

function getHeroNamesNotMaleOrFemale() {
    const name = [];
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].appearance.gender !== "Male" && heroList[i].appearance.gender !== "Female") {
                name.push(heroList[i].name)
            }
        } console.log("5. Alle Heroes die nicht Weiblich oder Männlich sind: " + name);
    })
}
getHeroNamesNotMaleOrFemale();




