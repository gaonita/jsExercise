
function wordInWord(str1, str2) {
    let counter = 0;
    for(let i = 0; i <str1.length; i++){
        if(str1[i] === str2[0]){
            for(let ii = i, j = 0; j <str2.length; j++, ii++){
                if(str1[ii] !== str2[j]){
                    break;
                }
            }
            counter+= 1;
        }
    }
    return counter;
}

//console.log(wordInWord('greatjob', 'job'))




class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

const spaceShuttle = new SpaceShuttle('Jupiter');
const spaceShuttle2 = new SpaceShuttle('Venus');

console.log('Shuttle 1: ' + spaceShuttle.targetPlanet, 'Shuttle 2: ' + spaceShuttle2.targetPlanet)

spaceShuttle.targetPlanet = 'Mars'
spaceShuttle2.targetPlanet = 'Earth'

console.log('Shuttle 1: ' + spaceShuttle.targetPlanet, 'Shuttle 2: ' + spaceShuttle2.targetPlanet)

