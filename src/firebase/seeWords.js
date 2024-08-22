import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

const wordList = `aback
abase
abate
blend
bless
borne
cable
cacao
cache
daddy
daily
essay
ester
flute
flyer
foamy
focal
focus
foggy
gazer
gecko
geeky
geese
genie
hutch
hydro
hyena
inlay
inlet
inner
jumbo
jumpy
kinky
kiosk
kitty
lager
lance
lanky
larva
lasso
latch
mange
noisy
nomad
noose
north
nosey
notch
novel
nudge
olden
older
olive
ombre
pried
prime
primo
quasi
queen
queer
quell
revel
revue
shine
shiny
shock
tally
talon
tamer
tango
tangy
taper
tapir
usurp
utile
utter
vague
whelp
where
which
yacht
yearn
zesty
zonal`;
const words = wordList
  .trim()
  .split("\n")
  .map((word) => word.trim().toUpperCase());

const seedWords = async () => {
  try {
    const wordsCollection = collection(db, "words");
    for (const word of words) {
      await addDoc(wordsCollection, { word });
    }
    console.log("Words seeded successfully!");
  } catch (error) {
    console.error("Error seeding words: ", error);
  }
};

seedWords();
