import { readFileSync } from 'fs'

const data = readFileSync('titles.txt', 'utf-8')
const titleSet = new Set([
    'Battle Yak',
    'Carries Their Home On Their Back',
    'Earthy Flavor With Woody Notes',
    'Everything Will Be All Right',
    'Extremely Bullheaded',
    'Extremely Venomous',
    'Fascinating, Captain',
    'Friend Of Darkness',
    'Insane Ghost',
    'Intransigent',
    'Longs For The Sea',
    'Lovable and Squeezable',
    'Make It Bleed!',
    'Make It So',
    'Not The Smartest In The Room',     
    'Ready To Be Sacrificed To Enoyos', 
    'Set Clubs To Stun!',
    'Smells Like The Outdoors',
    'Snakey',
    'Surprise Bovinity',
    'Udderly Infallible',
    'Valiant Except On Fire',
    'Very Old and Very Strong',
    'Wet and Slimy',
    "Won't Underestimate You Next Time",
])

let numOfSets = 3

const titles = data.split(/\r?\n/).sort()
const titleCounter = new Map();
//console.log(titles.length)
let uniqueCount = 0
let totalC = 0;
for ( let i = 0; i < titles.length; i++) {
    const clean = titles[i].trim()
    if (clean.startsWith('Title:')) {
        const split = clean.split(':')
        if (!titleCounter.has(split[1])){
            titleCounter.set(split[1],1)
            uniqueCount++;
        } else {
            let b = titleCounter.get(split[1])
            titleCounter.set(split[1], b+1)
        }
        totalC++;
        
    }
}

//looking for 
console.log('Looking for: ')
titleSet.forEach(element => {
    const value = titleCounter.get(` '${element}'`) || 0
    if (value < numOfSets)
        console.log(`${element}: ${numOfSets- value}`)
})
console.log('\n')
// wiling to trade
console.log('Wiling to trade: ')
titleSet.forEach(element => {
    const value = titleCounter.get(` '${element}'`) || 0
    if (value > numOfSets)
        console.log(`${element}: ${value - numOfSets}`)
})
console.log('\n')
console.log(`UNIQUE : ${uniqueCount}`)
console.log(`TOTAL: ${totalC}`)
