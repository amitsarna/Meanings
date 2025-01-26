import React, { useState } from 'react';




const wordsAndDefinitions = [
  {
    word: 'abandon',
    definition: "to leave something or someone behind",
    sentence: "He decided to abandon his old bike because it was too rusty."
  },
  {
    word: 'abode',
    definition: "a place where someone lives",
    sentence: "Their abode was a small cottage by the sea."
  },
  {
    word: 'absence',
    definition: "when you are not present",
    sentence: "Her absence from school was because she was feeling sick."
  },
  {
    word: 'absurd',
    definition: "something that doesn't make sense or is very silly",
    sentence: "Itâ€™s absurd to think you can fly without wings!"
  },
  {
    word: 'abundance',
    definition: "a large amount of something",
    sentence: "There was an abundance of apples in the basket."
  },
  {
    word: 'abundant',
    definition: "when something is plentiful or there is a lot of it",
    sentence: "The garden was full of abundant flowers in the spring."
  },
  {
    word: 'accuse',
    definition: "to say that someone did something wrong",
    sentence: "She accused her brother of taking her toy."
  },
  {
    word: 'accustom',
    definition: "to get used to something",
    sentence: "He had to accustom himself to the cold weather after moving."
  },
  {
    word: 'acquainted',
    definition: "when you know someone or something",
    sentence: "Iâ€™m acquainted with her because we are classmates."
  },
  {
    word: 'acquire',
    definition: "to get or obtain something",
    sentence: "He worked hard to acquire new skills at school."
  },
  {
    word: 'across',
    definition: "from one side to the other",
    sentence: "They swam across the river to reach the other side."
  },
  {
    word: 'address',
    definition: "to speak to someone or write to them",
    sentence: "He stood up to address the class about the project."
  },
  {
    word: 'adhere',
    definition: "to stick or follow rules",
    sentence: "The stickers didnâ€™t adhere to the wall as well as I thought."
  },
  {
    word: 'admission',
    definition: "permission to enter somewhere",
    sentence: "The admission ticket to the zoo costs $5."
  },
  {
    word: 'adopt',
    definition: "to choose to take care of something or someone",
    sentence: "They decided to adopt a puppy from the shelter."
  },
  {
    word: 'advance',
    definition: "to move forward or make progress",
    sentence: "He will advance to the next level of the game after winning."
  },
  {
    word: 'affable',
    definition: "friendly and easy to talk to",
    sentence: "Sheâ€™s very affable and loves meeting new people."
  },
  {
    word: 'affectionate',
    definition: "showing love or care",
    sentence: "The dog was very affectionate and liked cuddling."
  },
  {
    word: 'aid',
    definition: "help or support",
    sentence: "The teacher gave aid to the students who were struggling."
  },
  {
    word: 'alert',
    definition: "being ready and aware of what is happening",
    sentence: "She stayed alert while crossing the street."
  },
  {
    word: 'all right',
    definition: "when everything is fine or okay",
    sentence: "Is everything all right with your homework?"
  },
  {
    word: 'ally',
    definition: "a friend or someone who helps",
    sentence: "They are allies in the fight to save the forest."
  },
  {
    word: 'altitude',
    definition: "the height above the ground",
    sentence: "The airplane flew at a high altitude, above the clouds."
  },
  {
    word: 'ambition',
    definition: "a strong desire to do something or achieve something",
    sentence: "Her ambition is to become a scientist when she grows up."
  },
  {
    word: 'amount',
    definition: "the quantity or number of something",
    sentence: "There was a small amount of juice left in the bottle."
  },
  {
    word: 'ample',
    definition: "more than enough",
    sentence: "There was ample space in the classroom for all the desks."
  },
  {
    word: 'antiquity',
    definition: "ancient times",
    sentence: "The museum displayed items from antiquity, such as old coins."
  },
  {
    word: 'anxious',
    definition: "feeling worried or nervous",
    sentence: "He felt anxious before the big test."
  },
  {
    word: 'appeal',
    definition: "to ask for something or to ask people to support",
    sentence: "The charity made an appeal for donations."
  },
  {
    word: 'appearance',
    definition: "how something looks",
    sentence: "The appearance of the cake was so beautiful that we didnâ€™t want to eat it."
  },
  {
    word: 'apprehensive',
    definition: "feeling nervous or scared",
    sentence: "She was apprehensive about starting at a new school."
  },
  {
    word: 'approve',
    definition: "to agree with or accept something",
    sentence: "Her parents approved of her new bike."
  },
  {
    word: 'arduous',
    definition: "difficult or needing a lot of effort",
    sentence: "Climbing the mountain was an arduous task."
  },
  {
    word: 'argument',
    definition: "a disagreement between two people",
    sentence: "They had an argument about who would go first in the game."
  },
  {
    word: 'arouse',
    definition: "to make someone feel something strongly",
    sentence: "The loud noise aroused the crowdâ€™s excitement."
  },
  {
    word: 'artful',
    definition: "skilful or clever",
    sentence: "He made an artful sculpture out of clay."
  },
  {
    word: 'article',
    definition: "a piece of writing or a short story",
    sentence: "She wrote an article for the school newspaper."
  },
  {
    word: 'assemble',
    definition: "to put things together",
    sentence: "We will assemble the puzzle after lunch."
  },
  {
    word: 'assiduous',
    definition: "working hard and being careful",
    sentence: "He was assiduous in completing his homework on time."
  },
  {
    word: 'assistance',
    definition: "help or support",
    sentence: "She asked for assistance with her science project."
  },
  {
    word: 'asunder',
    definition: "into pieces or parts",
    sentence: "The toy broke asunder when it hit the ground."
  },
  {
    word: 'attached',
    definition: "joined or fastened to something",
    sentence: "She attached the note to the gift with tape."
  },
  {
    word: 'attempt',
    definition: "to try to do something",
    sentence: "He will attempt to climb the tree this afternoon."
  },
  {
    word: 'available',
    definition: "able to be used or obtained",
    sentence: "The book is available at the library."
  },
  {
    word: 'average',
    definition: "typical or in the middle",
    sentence: "The average score in the class was 80%."
  },
  {
    word: 'avoid',
    definition: "to stay away from something",
    sentence: "You should avoid eating too much candy."
  },
  {
    word: 'avowed',
    definition: "declared or stated strongly",
    sentence: "He avowed that he would never give up on his dreams."
  },
  {
    word: 'awkward',
    definition: "clumsy or uncomfortable",
    sentence: "It was awkward when no one knew what to say at the party."
  },
  {
    word: 'banish',
    definition: "to force someone to leave",
    sentence: "The king banished the traitor from the kingdom."
  },
  {
    word: 'bargain',
    definition: "a good deal or something you buy for a low price",
    sentence: "I found a bargain on a new toy in the store."
  },
  {
    word: 'barren',
    definition: "empty or without life",
    sentence: "The barren desert had no plants or animals."
  },
  {
    word: 'beautiful',
    definition: "very nice to look at",
    sentence: "The sunset over the ocean was beautiful."
  },
  {
    word: 'because',
    definition: "for the reason that",
    sentence: "I went to bed early because I was tired."
  },
  {
    word: 'beck',
    definition: "to signal or wave to someone",
    sentence: "She becked to her friend to come over."
  },
  {
    word: 'believe',
    definition: "to think something is true",
    sentence: "I believe in magic and fairies."
  },
  {
    word: 'belligerent',
    definition: "angry or ready to fight",
    sentence: "He was belligerent after losing the game."
  },
  {
    word: 'bemused',
    definition: "confused or not sure what is happening",
    sentence: "She looked bemused after hearing the strange news."
  },
  {
    word: 'benefit',
    definition: "an advantage or something good",
    sentence: "One benefit of reading is that it helps you learn new words."
  },
  {
    word: 'besieged',
    definition: "when people or things surround you",
    sentence: "The castle was besieged by the invading army."
  },
  {
    word: 'betray',
    definition: "to be disloyal or break someoneâ€™s trust",
    sentence: "He betrayed his friend by telling their secret."
  },
  {
    word: 'bewildered',
    definition: "very confused",
    sentence: "She was bewildered by all the new rules at school."
  },
  {
    word: 'bicycle',
    definition: "a two-wheeled vehicle that you ride",
    sentence: "He rode his bicycle to the park."
  },
  {
    word: 'box',
    definition: "a container used to hold things",
    sentence: "She put the toys in a box to keep them organised."
  },
  {
    word: 'brief',
    definition: "short in time",
    sentence: "The meeting was brief, lasting only 10 minutes."
  },
  {
    word: 'Britain',
    definition: "a country in Europe",
    sentence: "Britain is known for its rich history and beautiful landscapes."
  },
  {
    word: 'broad',
    definition: "wide or large",
    sentence: "The river was so broad that you couldnâ€™t see the other side."
  },
  {
    word: 'bruise',
    definition: "a purple or blue mark on your skin",
    sentence: "She got a bruise on her knee after falling down."
  },
  {
    word: 'brusque',
    definition: "quick and not very polite",
    sentence: "He gave a brusque answer when I asked him a question."
  },
  {
    word: 'burden',
    definition: "something heavy or difficult to carry",
    sentence: "The heavy backpack was a burden on his shoulders."
  },
  {
    word: 'business',
    definition: "a company or job",
    sentence: "Her father owns a small business that sells ice cream."
  },
  {
    word: 'calamity',
    definition: "a terrible event or disaster",
    sentence: "The earthquake was a calamity that affected many people."
  },
  {
    word: 'candidate',
    definition: "a person who is trying to get a job or position",
    sentence: "She is a candidate for the role of class president."
  },
  {
    word: 'careering',
    definition: "going quickly or moving rapidly",
    sentence: "The car was careering down the hill at high speed."
  },
  {
    word: 'category',
    definition: "a group of things that are the same",
    sentence: "Fruits belong in a different category from vegetables."
  },
  {
    word: 'caulking',
    definition: "a material used to fill gaps or cracks",
    sentence: "They used caulking to seal the hole in the door."
  },
  {
    word: 'caution',
    definition: "being careful to avoid danger",
    sentence: "He used caution when crossing the busy street."
  },
  {
    word: 'cease',
    definition: "to stop doing something",
    sentence: "They ceased talking when the teacher entered the room."
  },
  {
    word: 'cemetery',
    definition: "a place where people are buried",
    sentence: "They visited the cemetery to pay their respects."
  },
  {
    word: 'chaos',
    definition: "complete disorder or confusion",
    sentence: "The classroom was full of chaos after the bell rang."
  },
  {
    word: 'charred',
    definition: "blackened or burned",
    sentence: "The toast was charred because it was left in the toaster too long."
  },
  {
    word: 'choreographer',
    definition: "a person who plans dances",
    sentence: "The choreographer taught the dancers new moves for the show."
  },
  {
    word: 'clemency',
    definition: "mercy or forgiveness",
    sentence: "The king showed clemency to the prisoners and released them."
  },
  {
    word: 'coarse',
    definition: "rough or not smooth",
    sentence: "The coarse sandpaper helped to smooth the wood."
  },
  {
    word: 'coax',
    definition: "to gently persuade or encourage",
    sentence: "She tried to coax the cat into coming inside with treats."
  },
  {
    word: 'college',
    definition: "a school after high school for advanced learning",
    sentence: "He plans to attend college to study medicine."
  },
  {
    word: 'colour',
    definition: "what we see when light hits an object",
    sentence: "The colour of the sky is blue on a clear day."
  },
  {
    word: 'combination',
    definition: "a mix or joining of things",
    sentence: "The combination of red and blue makes purple."
  },
  {
    word: 'commence',
    definition: "to begin something",
    sentence: "The ceremony will commence at 10 a.m."
  },
  {
    word: 'commit',
    definition: "to do something or make a choice",
    sentence: "He will commit to helping his friend with the project."
  },
  {
    word: 'committee',
    definition: "a group of people who work together",
    sentence: "The school committee meets every week to discuss new ideas."
  },
  {
    word: 'communicate',
    definition: "to talk or share ideas with others",
    sentence: "They used their phones to communicate with each other."
  },
  {
    word: 'community',
    definition: "a group of people living in the same area",
    sentence: "The local community gathers for events every weekend."
  },
  {
    word: 'companion',
    definition: "a friend or someone who is with you",
    sentence: "The dog was his loyal companion during the walk."
  },
  {
    word: 'company',
    definition: "a business or group of people working together",
    sentence: "The company hired new employees to work in the office."
  },
  {
    word: 'compel',
    definition: "to force someone to do something",
    sentence: "His friends compelled him to join them for the game."
  },
  {
    word: 'competition',
    definition: "a contest or race to see who is best",
    sentence: "The competition was tough, but she won first place."
  },
  {
    word: 'completely',
    definition: "totally or fully",
    sentence: "He was completely surprised by the birthday party."
  },
  {
    word: 'complex',
    definition: "complicated or hard to understand",
    sentence: "The puzzle was so complex that I needed help to finish it."
  },
  {
    word: 'composition',
    definition: "what makes up something or a written piece",
    sentence: "She wrote a composition about her favourite holiday."
  },
  {
    word: 'comprehend',
    definition: "to understand something",
    sentence: "He couldnâ€™t comprehend why the test was so hard."
  },
  {
    word: 'comrade',
    definition: "a friend or partner who helps you",
    sentence: "The soldierâ€™s comrade helped him when he got hurt."
  },
  {
    word: 'conceal',
    definition: "to hide or keep something secret",
    sentence: "He tried to conceal his surprise gift for his friend."
  },
  {
    word: 'conceited',
    definition: "thinking too much of yourself",
    sentence: "The conceited boy always bragged about his skills."
  }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDefinitions(currentWordIndex)
{
  let correctWordIndex = getRandomInt(0,4)
  
  let definitions = []
  let usedIndices = [correctWordIndex]

  for(let i = 0; i < 5; ++i)
  {
    let selectedDefinition = ""
    if(i === correctWordIndex)
    {
      selectedDefinition = wordsAndDefinitions[currentWordIndex].definition  
    }
    else
    {
      let randomWordIndex = getRandomInt(0, wordsAndDefinitions.length -1)  
      while(randomWordIndex in usedIndices)
      {
        randomWordIndex = getRandomInt(0, wordsAndDefinitions.length -1)
      }
      selectedDefinition = wordsAndDefinitions[randomWordIndex].definition
      usedIndices.push(randomWordIndex)
    }
    definitions.push(selectedDefinition)
  }

  return definitions
}

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(getRandomInt(0,wordsAndDefinitions.length - 1));
  const [selectedDefinition, setSelectedDefinition] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [curentDefinitions, setCurrentDefinitions] = useState(getDefinitions(currentWordIndex))

  const handleAnswerClick = (definition) => {
    if (definition === wordsAndDefinitions[currentWordIndex].definition) {
      setScore(score + 1);
    }
    setSelectedDefinition(definition);
    setIsAnswered(true);
  };

  const handleNextWord = () => {
      let nextWordIndex = getRandomInt(0,wordsAndDefinitions.length)
      setCurrentWordIndex(nextWordIndex);
      setCurrentDefinitions(getDefinitions(nextWordIndex))
      setIsAnswered(false);
      setSelectedDefinition(null);
      
  };


  return (
    <div className="App">
      <h1>Word and Definition Quiz</h1>
      <p>Current Score: {score}</p>
      <h2>What does "{wordsAndDefinitions[currentWordIndex].word}" mean?</h2>

      <div>
        {
        
        curentDefinitions.map((definition, index) => (
          <React.Fragment key={index}>
          <button
            //key={index}
            onClick={() => handleAnswerClick(definition)}
            disabled={isAnswered}
            style={{
              marginBottom: '10px',
              backgroundColor:
                isAnswered
                  ? definition === wordsAndDefinitions[currentWordIndex].definition
                    ? 'green'
                    : 'red'
                  : 'lightgray',
            }}
          >
          
            {definition}
          </button>
          <br/>
          </React.Fragment>
        ))
        
        }
      </div>

      {isAnswered && (
        <div>
          <p>
            {selectedDefinition === wordsAndDefinitions[currentWordIndex].definition
              ? 'Correct!'
              : `Incorrect! The correct answer was: "${wordsAndDefinitions[currentWordIndex].definition}"`}
          </p>
          <button onClick={handleNextWord}>Next Word</button>
        </div>
      )}
    </div>
  );
}

export default App;
