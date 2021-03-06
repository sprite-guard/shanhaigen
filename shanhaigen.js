var tracery = require('tracery-grammar');

var grammar = tracery.createGrammar({
    "comments": [
        "Shan Hai Gen",
        "A generator based on The Classic of Mountains and Seas.",
        "By Sprite Guard, based on the translation by Anne Birrell.",
        "tested with https://runkit.com/npm/tracery-grammar",
        "todo: add floralong, faunalong, maybe minerallong too"
    ],
    
    "origin": [
        "<p>#[mountain:Mount #name#][river:#name#][deityname:#name#]mtndesc#</p>#origin##origin#",
        "<p>#[mountain:Mount #name#][river:#name#][deityname:#name#]mtndesc#</p>#origin#",
        "<p>#[mountain:Mount #name#][river:#name#][deityname:#name#]mtndesc#</p>"
    ],
    
    "name": [
        "#snoun.capitalize#-#adjective.capitalize#",
        "#snoun.capitalize#-#snoun.capitalize#",
        "#adjective.capitalize#-#snoun.capitalize#",
        "#adjective.capitalize#",
        "#adjective.capitalize##adjective#",
        "#verb.capitalize#-#adjective.capitalize#",
        "#verb.capitalize#-#snoun.capitalize#"
    ],
    
    "snoun": [
        "table",
        "wood",
        "metal",
        "fire",
        "air",
        "water",
        "earth",
        "stone",
        "hearth",
        "tree",
        "ash",
        "clay",
        "ship",
        "cart",
        "horse",
        "mule",
        "cat",
        "dog",
        "house",
        "home",
        "food",
        "wealth",
        "health",
        "light",
        "day",
        "night",
        "bridge",
        "sin",
        "virtue",
        "pain",
        "joy",
        "breath",
        "winter",
        "spring",
        "summer",
        "autumn",
        "dragon",
        "phoenix",
        "emperor",
        "queen",
        "god",
        "goddess",
        "spirit",
        "bird",
        "fairy",
        "insect",
        "man",
        "woman",
        "boy",
        "girl",
        "child",
        "chip",
        "shard",
        "flower",
        "leaf",
        "petal",
        "leopard",
        "lynx",
        "dove",
        "sparrow",
        "love",
        "hatred",
        "spite",
        "fragrance",
        "color",
        "beetle",
        "ant",
        "fly",
        "bounty",
        "wax",
        "soap"
    ],
    
    "adjective": [
        "bright",
        "dark",
        "red",
        "blue",
        "yellow",
        "male",
        "good",
        "bad",
        "fine",
        "lovely",
        "sweet",
        "bitter",
        "sour",
        "blessed",
        "cursed",
        "open",
        "shy",
        "bold",
        "cold",
        "hot",
        "warm",
        "cool",
        "magic",
        "dull",
        "pale",
        "ruddy",
        "muddy",
        "divine",
        "elder",
        "younger",
        "old",
        "young",
        "hidden",
        "blurry",
        "quick",
        "slow",
        "waking",
        "sleeping",
        "waxing",
        "waning",
        "burning",
        "aching",
        "fading",
        "turning",
        "growing",
        "shrinking",
        "hiding",
        "breaking",
        "dying",
        "living",
        "walking",
        "running",
        "kind",
        "cruel",
        "dry"
    ],
    
    "verb": [
        "show",
        "hide",
        "give",
        "take",
        "send",
        "answer",
        "run",
        "walk",
        "love",
        "hate",
        "open",
        "close",
        "throw",
        "catch",
        "burn",
        "singe",
        "eat",
        "kill",
        "save",
        "restore",
        "touch",
        "strike",
        "grow",
        "harvest",
        "plow",
        "fly",
        "soar",
        "crawl",
        "crash",
        "wash",
        "scour"
    ],
    
    "mtndesc": [
        "#number# #distance# #direction# is a mountain called #mountain#. #mtnbody#. The river #river# rises here and flows #direction#. #riverdesc#",
        "#number# #distance# #direction# is a mountain called #mountain#. #mtnbody#. The river #river# rises here and flows #direction#."
    ],
    
    "number": [
        "#nz#0",
        "#nz#5",
        "#nz#0",
        "#nz#5",
        "#nz#0",
        "#nz#5",
        "#nz#0",
        "#nz#5",
        "#nz#0",
        "#nz#5",
        "1#digit#0",
        "2#digit#0",
        "3#digit#0"
    ],
    
    "digit": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ],
    "nz": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ],
    
    "distance": [
        "miles",
        "leagues"
    ],
    
    "direction": [
        "north",
        "south",
        "east",
        "west",
        "northeast",
        "northwest",
        "southeast",
        "southwest"
    ],
    
    "mtnbody": [
        "#hereflora#, #fauna#, and #minerals#",
        "#hereflora#. #floracure#. #hereminerals#",
        "#hereminerals#. #herefauna#. #faunacure#",
        "#hereminerals#, #flora#, and #fauna#. #deity#",
        "#hereflora#. #floracure#. #deity#",
        "#hereflora#, #minerals#, and #fauna#",
        "#herefauna#. #faunacure#. #deity#",
        "#herefauna#. #faunacure#. #hereflora#. #floracure#",
        "#herefauna#. #hereflora#",
        "#herefauna#. #hereflora#. #floracure#. #deity#",
        "#herefauna#. #hereflora#. #deity#",
        "#herefauna#. #hereflora#. #floracure#"
    ],
    
    "floracure": [
        "Their leaves #goodfor# #illness#",
        "The stems #goodfor# #illness#",
        "The flowers #goodfor# #illness#",
        "The roots #goodfor# #illness#",
        "They #goodfor# #illness#"
    ],
    
    "faunacure": [
        "Their livers #goodfor# #illness#",
        "They #goodfor# #illness#",
        "Eating them cures #illness#",
        "Their meat can cure #illness#"
    ],
    
    "goodfor": [
        "are good for",
        "can be used to treat",
        "can be eaten to cure",
        "will cure",
        "will treat",
        "are a cure for"
    ],
    
    "illness": [
        "cancerous growths",
        "colds",
        "fever",
        "leprosy",
        "stomach pains",
        "cramps",
        "dizziness",
        "vertigo",
        "gluttony",
        "lustfullness",
        "bad dreams",
        "gas",
        "chills",
        "warts",
        "toothaches",
        "epilepsy",
        "shaking",
        "tingling"
    ],
    
    "hereflora": [
        "#heremtn# #are# #flora#",
        "#heremtn# #are# #floralong#"
    ],
    
    "flora": [
        "#many# #adjective##plants#",
        "#many# #adjective#-#snoun# #plants#",
        "#adjective##plants#",
        "#adjective#-#snoun# #plants#"
    ],
    
    "floralong": [
        "#many# #name# trees, which look like a #tree# with #leaf# leaves",
        "#many# trees that look like #tree.s# with #leaf# leaves",
        "#many# #name# trees, which look like a #tree# but with flowers like #flower.a#",
        
        "#many# #name# vines, which look like a #vine# with flowers like #flower.a#",
        "#many# #name# vines. These look like #vine.s#, but have flowers like #flower.a# and #leaf# leaves",
        
        "#many# #name# shrubs, which look much like a #shrub# but have #leaf# leaves",
        
        "fields of #name#, a kind of #grass#"
    ],
    
    "tree": [
        "fir",
        "pine",
        "yew",
        "elm",
        "birch",
        "hemlock"
    ],
    
    "vine": [
        "creeper",
        "beanstalk",
        "blackberry",
        "grape",
        "squash",
        "ivy",
        "honeysuckle"
    ],
    
    "shrub": [
        "rhododendron",
        "thuja",
        "broom",
        "wild rose"
    ],
    
    "grass": [
        "grass",
        "cane",
        "reed",
        "cattail"
    ],
    
    "leaf": [
        "spade-shaped",
        "toothed",
        "thin",
        "spiky",
        "waxy",
        "fuzzy",
        "papery",
        "broad"
    ],
    
    "flower": [
        "hawthorn",
        "rose",
        "daisy",
        "pea flower",
        "corn flower",
        "carnation",
        "iris",
        "tulip",
        "daffodil",
        "peony"
    ],
    
    "modifier": [
        "large",
        "small",
        "stout",
        "twisted",
        "crooked",
        "slender"
    ],
    
    "plants": [
        "trees",
        "pines",
        "shrubs",
        "bushes",
        "grasses",
        "flowers",
        "blossoms",
        "vines",
        "plants"
    ],
    
    "fauna": [
        "#many# #name# #landanimals#",
        "#name# #landanimals#",
        "#many# #name# #birds#",
        "#name# #birds#",
        "#name# #birds# and #name# #landanimals#"
    ],
    
    "landanimals": [
        "dogs",
        "cats",
        "animals",
        "beasts"
    ],
    
    "birds": [
        "birds",
        "fowl",
        "ducks",
        "crows"
    ],
    
    "many": [
        "many",
        "a few",
        "scattered",
        "a great many",
        "patches of",
        "a handful of",
        "dozens of",
        "hundreds of",
        "thousands of",
        "innumerable",
        "uncountably many"
    ],
    
    "hereminerals": [
        "#heremtn# #are# #minerals#"
    ],
    
    "minerals": [
        "#deposits# #mineralname#"
    ],
    
    "deposits": [
        "deposits of",
        "rocks containing",
        "deposits rich with",
        "mineshafts containing",
        "seams of"
    ],
    
    "mineralname": [
        "#adjective#-#adjective#",
        "silver",
        "gold",
        "tin",
        "zinc",
        "iron",
        "beryl",
        "corundum",
        "halite",
        "coal"
    ],
    
    "herefauna": [
        "#heremtn# #are# #fauna#",
    ],
    
    "are": [
        "can be found",
        "there are",
        "are found"
    ],
    
    "heremtn": [
        "Here",
        "On this mountain",
        "At its peak",
        "On its slopes",
        "Near the base",
        "Around the peak",
        "On its sides",
        "Near the top"
    ],
    "riverdesc": [
        "On its banks #are# #fauna#.",
        "In it live #many# #name# fish.",
        "#minerals.capitalize# are found there."
    ],
    
    "deity": [
        "The mountain is presided over by the deity #deityname#",
        "The deity of this mountain is #deityname#. To sacrifice to this deity, #sacrifice#",
        "The mountain is presided over by the deity #deityname#, who accepts sacrifices of #sacraficial#",
    ],
    
    "sacraficial": [
        "butter",
        "ox fat",
        "lambs",
        "sage",
        "incense",
        "purified oil",
        "olive oil",
        "herbs"
    ],
    
    "sacrifice": [
        "#offering# #sacraficial#. #shrinedesc#",
        "#offering# #sacraficial# and #secondary#. #shrinedesc#",
        "#offering# #sacraficial# or #secondary#. #shrinedesc#",
    ],
    
    "secondary": [
        "sugar",
        "lamp oil",
        "fruit",
        "fresh flowers",
        "flowers of the #plant#",
        "a branch of #name# tree",
        "leaves of the #plant#"
    ],
    
    "plant": [
        "#name# tree",
        "#name# plant",
        "#name# bush"
    ],
    
    "offering": [
        "make an offering of",
        "make a burnt offering of",
        "place on an altar an offering of",
        "bring to its shrine some"
    ],
    
    "shrinedesc": [
        "You can recognize the shrine of #deityname# by its #distinctive# #feature#",
        "#deityname#'s shrine is #distinctive#, and always #located#",
        "Their shrine has #distinctive.a# #feature# and is usually #located#",
        "The distinctive #distinctive# #feature# makes #deityname#'s shrine easy to spot, always #located#"
    ],
    
    "distinctive": [
        "bright red",
        "brick",
        "flat",
        "gilded",
        "rakishly chamfered",
        "sloping",
        "steeply slanted",
        "asymmetrical",
        "black",
        "tall",
        "short",
        "large",
        "small",
        "multi-hued",
        "stone",
        "wood"
    ],
    
    "feature": [
        "roof",
        "base",
        "altar",
        "door",
        "wall",
        "statue",
        "reredos",
        "cairn",
        "shelter"
    ],
    
    "located": [
        "#placed# between two #thing.s#",
        "#placed# beside #thing.a#",
        "near water",
        "near #thing.a#"
    ],
    
    "placed": [
        "placed",
        "nestled",
        "tucked"
    ],
    
    "thing": [
        "rock",
        "tree",
        "bush",
        "cairn"
    ]
});

grammar.addModifiers(tracery.baseEngModifiers); 

console.log(grammar.flatten('#origin#'));