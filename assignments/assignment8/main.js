const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a quick 26.2 mile run. When they got to :inserty:, they stared in happiness for a few moments, then :insertz:. Bob witnessed the whole thing, but was not sad — :insertx: loves to eat pizza, and it was the middle of July in New York City.";
const insertX = ["Rachel", "Ross", "Joey"];
const insertY = ["Central Perk", "the museum", "the White House"];
const insertZ = ["spilled their coffee", "adopted a pet monkey", "went to work as a chef"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem); 
    newStory = newStory.replaceAll(":inserty:", yItem); 
    newStory = newStory.replaceAll(":insertz:", zItem); 

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+ " stones";
    const temperature =  Math.round((94-32)*5/9)+ " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature)
    newStory = newStory.replaceAll("300 pounds",weight);
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}