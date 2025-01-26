import React, { useState } from 'react';



const wordsAndDefinitions = [
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'abandon',
    definition: "to leave something or someone behind",
    sentence: "The boy had to abandon his toy because it broke."
  },
  {
    word: 'abode',
    definition: "a home or place where someone lives",
    sentence: "Her abode was a small house near the park."
  },
  {
    word: 'absence',
    definition: "not being present or not there",
    sentence: "The teacher noticed my absence in class today."
  },
  {
    word: 'absurd',
    definition: "something very silly or unreasonable",
    sentence: "It is absurd to think you can fly without wings."
  },
  {
    word: 'abundance',
    definition: "a lot of something",
    sentence: "There was an abundance of food at the party."
  },
  {
    word: 'abundant',
    definition: "something that is found in large amounts",
    sentence: "The forest was abundant with animals and trees."
  },
  {
    word: 'accuse',
    definition: "to say someone did something wrong",
    sentence: "She accused her brother of eating the last cookie."
  },
  {
    word: 'accustom',
    definition: "to get used to something",
    sentence: "It took me a while to accustom myself to waking up early."
  },
  {
    word: 'acquainted',
    definition: "to know someone or something",
    sentence: "I became acquainted with my new neighbour at school."
  },
  {
    word: 'acquire',
    definition: "to get or gain something",
    sentence: "I want to acquire more books for my collection."
  },
  {
    word: 'across',
    definition: "from one side to the other",
    sentence: "The cat ran across the street to the other side."
  },
  {
    word: 'address',
    definition: "to speak to or talk about",
    sentence: "He needed to address the class before the project started."
  },
  {
    word: 'address',
    definition: "the place where someone lives or works",
    sentence: "Please send the letter to my new address."
  },
  {
    word: 'adhere',
    definition: "to stick to something",
    sentence: "The sticker wouldnâ€™t adhere to the paper."
  },
  {
    word: 'admission',
    definition: "the right to enter or join something",
    sentence: "She got admission into the school after passing the test."
  },
  {
    word: 'admission',
    definition: "the fee you pay to enter a place or event",
    sentence: "The admission to the museum is free on Sundays."
  },
  {
    word: 'adopt',
    definition: "to choose to take care of something or someone as your own",
    sentence: "The family decided to adopt a dog from the shelter."
  },
  {
    word: 'adopt',
    definition: "to legally take a child as your own",
    sentence: "They adopted a baby from another country."
  },
  {
    word: 'advance',
    definition: "to move forward or make progress",
    sentence: "He tried to advance in his studies by studying every day."
  },
  {
    word: 'advance',
    definition: "a forward movement, especially in battle or war",
    sentence: "The army made an advance toward the enemy camp."
  },
  {
    word: 'affable',
    definition: "friendly and easy to talk to",
    sentence: "The teacher was very affable and always smiled."
  },
  {
    word: 'affectionate',
    definition: "showing love or kindness",
    sentence: "The dog was very affectionate towards its owner."
  },
  {
    word: 'affectionate',
    definition: "expressing fondness or warmth",
    sentence: "She gave him an affectionate hug when he arrived."
  },
  {
    word: 'aid',
    definition: "help or assistance",
    sentence: "The teacher gave aid to the students who were struggling."
  },
  {
    word: 'alert',
    definition: "to be awake and ready for something",
    sentence: "The dog was alert and ready to catch the ball."
  },
  {
    word: 'alert',
    definition: "quick to respond to danger or a situation",
    sentence: "The fire alarm went off, and everyone became alert."
  },
  {
    word: 'all right',
    definition: "something that is okay or fine",
    sentence: "Itâ€™s all right to be late once in a while."
  },
  {
    word: 'ally',
    definition: "someone who helps or supports you",
    sentence: "They became allies to defeat the evil dragon."
  },
  {
    word: 'altitude',
    definition: "how high something is above the ground",
    sentence: "The plane flew at a high altitude above the clouds."
  },
  {
    word: 'altitude',
    definition: "the height above sea level",
    sentence: "Mount Everest has the highest altitude of any mountain in the world."
  },
  {
    word: 'ambition',
    definition: "a strong desire to achieve something",
    sentence: "Her ambition is to become a scientist when she grows up."
  },
  {
    word: 'amount',
    definition: "how much or how many of something",
    sentence: "The amount of food on the table was enormous."
  },
  {
    word: 'ample',
    definition: "plenty of something",
    sentence: "There was ample space in the room for all the chairs."
  },
  {
    word: 'ample',
    definition: "more than enough",
    sentence: "They had an ample supply of food for the party."
  },
  {
    word: 'antiquity',
    definition: "something very old or ancient",
    sentence: "The museum had many items from antiquity, like old pots and tools."
  },
  {
    word: 'antiquity',
    definition: "the time long ago, especially in ancient times",
    sentence: "The ancient civilisations of antiquity had many great achievements."
  },
  {
    word: 'anxious',
    definition: "feeling worried or nervous",
    sentence: "She was anxious about taking the big test tomorrow."
  },
  {
    word: 'appeal',
    definition: "to ask for something or make a request",
    sentence: "He made an appeal for help after the storm."
  },
  {
    word: 'appearance',
    definition: "the way something looks",
    sentence: "Her appearance was neat with her hair neatly combed."
  },
  {
    word: 'appearance',
    definition: "the way someone looks",
    sentence: "His appearance was quite different after his haircut."
  },
  {
    word: 'apprehensive',
    definition: "feeling worried or nervous about something that might happen",
    sentence: "He felt apprehensive before the big performance."
  },
  {
    word: 'apprehensive',
    definition: "concerned about something uncertain",
    sentence: "She was apprehensive about the new school year."
  },
  {
    word: 'approve',
    definition: "to say something is okay or right",
    sentence: "My parents approve of my new school project."
  },
  {
    word: 'approve',
    definition: "to officially accept or accept something",
    sentence: "The committee will approve the new plan next week."
  },
  {
    word: 'arduous',
    definition: "something that is hard or difficult to do",
    sentence: "Climbing the mountain was an arduous task."
  },
  {
    word: 'arduous',
    definition: "requiring a lot of effort or hard work",
    sentence: "The student found the homework arduous and challenging."
  },
  {
    word: 'argument',
    definition: "a discussion where people disagree",
    sentence: "They had an argument about who should go first."
  },
  {
    word: 'argument',
    definition: "a reason or explanation for something",
    sentence: "His argument for choosing the red car was convincing."
  },
  {
    word: 'arouse',
    definition: "to make someone feel a certain way or wake them up",
    sentence: "The loud noise aroused the baby from his nap."
  },
  {
    word: 'arouse',
    definition: "to cause strong feelings or excitement",
    sentence: "The speech aroused a sense of patriotism in the crowd."
  },
  {
    word: 'artful',
    definition: "skillful or clever in a way that is not obvious",
    sentence: "The artistâ€™s artful painting amazed everyone."
  },
  {
    word: 'artful',
    definition: "done with cleverness or skill",
    sentence: "He gave an artful performance in the play."
  },
  {
    word: 'article',
    definition: "a short piece of writing about something",
    sentence: "I read an article about animals in the newspaper."
  },
  {
    word: 'article',
    definition: "an object or item in a list or group",
    sentence: "The article in the shopping list is bread."
  },
  {
    word: 'assemble',
    definition: "to put things together or gather people",
    sentence: "We need to assemble the pieces of the puzzle."
  },
  {
    word: 'assemble',
    definition: "to gather together in one place",
    sentence: "The workers will assemble at the office at 9 AM."
  },
  {
    word: 'assiduous',
    definition: "working hard and being careful",
    sentence: "The assiduous student finished her homework quickly."
  },
  {
    word: 'assistance',
    definition: "help or support",
    sentence: "He asked for assistance when he got stuck on the homework."
  },
  {
    word: 'asunder',
    definition: "into pieces",
    sentence: "The book was torn asunder during the storm."
  },
  {
    word: 'attached',
    definition: "something that is joined or connected",
    sentence: "She attached the sticker to her notebook."
  },
  {
    word: 'attached',
    definition: "emotionally connected or involved",
    sentence: "He was very attached to his childhood pet."
  },
  {
    word: 'attempt',
    definition: "to try to do something",
    sentence: "He made an attempt to climb the tree but fell."
  },
  {
    word: 'attempt',
    definition: "an effort or try to do something",
    sentence: "The first attempt at building the tower was unsuccessful."
  },
  {
    word: 'available',
    definition: "ready to be used or found",
    sentence: "The book is available at the library."
  },
  {
    word: 'available',
    definition: "able to be reached or contacted",
    sentence: "The teacher is available after school for help."
  },
  {
    word: 'average',
    definition: "what is normal or typical",
    sentence: "The average age of the class is 12 years old."
  },
  {
    word: 'average',
    definition: "a number calculated by adding up numbers and dividing",
    sentence: "The average of the test scores was 85."
  },
  {
    word: 'avoid',
    definition: "to stay away from something",
    sentence: "Itâ€™s best to avoid eating too much candy."
  },
  {
    word: 'avoid',
    definition: "to prevent something from happening",
    sentence: "He tried to avoid making any mistakes in his work."
  },
  {
    word: 'avowed',
    definition: "something that is openly stated or declared",
    sentence: "He avowed that he would never lie again."
  },
  {
    word: 'avowed',
    definition: "a strong public declaration or promise",
    sentence: "His avowed goal was to help the environment."
  },
  {
    word: 'awkward',
    definition: "feeling uncomfortable or strange",
    sentence: "She felt awkward when she dropped her lunch in front of everyone."
  },
  {
    word: 'awkward',
    definition: "a situation that feels uncomfortable or difficult",
    sentence: "The meeting was awkward because nobody knew what to say."
  },
  {
    word: 'banish',
    definition: "to send someone or something away",
    sentence: "The king decided to banish the bad thief from the kingdom."
  },
  {
    word: 'banish',
    definition: "to get rid of something",
    sentence: "We need to banish the weeds from the garden."
  },
  {
    word: 'bargain',
    definition: "an agreement where both sides get something good",
    sentence: "She found a great bargain at the store for her new shoes."
  },
  {
    word: 'bargain',
    definition: "a sale or deal where things are cheaper",
    sentence: "I bought this jacket at a bargain price."
  },
  {
    word: 'barren',
    definition: "empty or without life",
    sentence: "The barren land had no trees or flowers."
  },
  {
    word: 'barren',
    definition: "unable to produce crops or plants",
    sentence: "The soil was barren, and nothing would grow there."
  },
  {
    word: 'beautiful',
    definition: "something that looks very nice",
    sentence: "The sunset was so beautiful with its bright colours."
  },
  {
    word: 'beautiful',
    definition: "someone or something that is attractive or lovely",
    sentence: "She is a beautiful singer who sings with a clear voice."
  },
  {
    word: 'because',
    definition: "giving a reason or explanation",
    sentence: "She smiled because she was happy."
  },
  {
    word: 'because',
    definition: "for the reason that",
    sentence: "He went inside because it was too cold outside."
  },
  {
    word: 'beck',
    definition: "to signal or call for someone",
    sentence: "He gave a beck to his friend to come over."
  },
  {
    word: 'beck',
    definition: "a small stream or brook",
    sentence: "They crossed the beck to reach the meadow."
  },
  {
    word: 'believe',
    definition: "to think that something is true",
    sentence: "I believe in magic and fairy tales."
  },
  {
    word: 'believe',
    definition: "to have trust in something or someone",
    sentence: "I believe in my friend's abilities."
  },
  {
    word: 'belligerent',
    definition: "being hostile or ready to fight",
    sentence: "The belligerent dog barked loudly at everyone."
  },
  {
    word: 'belligerent',
    definition: "someone who is involved in a war or fight",
    sentence: "The soldiers were belligerent in the battle."
  },
  {
    word: 'bemused',
    definition: "confused or puzzled",
    sentence: "He had a bemused look on his face when he didnâ€™t understand the question."
  },
  {
    word: 'bemused',
    definition: "lost in thought or distracted",
    sentence: "She looked bemused as she thought about her plans for the weekend."
  },
  {
    word: 'benefit',
    definition: "something good that helps or improves things",
    sentence: "Exercise has many benefits for your health."
  },
  {
    word: 'benefit',
    definition: "an advantage or good result",
    sentence: "The benefit of staying organised is saving time."
  },
  {
    word: 'besieged',
    definition: "to be surrounded by many people or things",
    sentence: "The town was besieged by soldiers during the battle."
  },
  {
    word: 'besieged',
    definition: "overwhelmed by requests or problems",
    sentence: "The office was besieged with phone calls after the announcement."
  },
  {
    word: 'betray',
    definition: "to be disloyal or trick someone",
    sentence: "He would never betray his friends by telling their secrets."
  },
  {
    word: 'betray',
    definition: "to reveal a secret or confidence",
    sentence: "She accidentally betrayed the surprise party plan."
  },
  {
    word: 'bewildered',
    definition: "confused or unsure of what is happening",
    sentence: "She was bewildered by the new rules at school."
  },
  {
    word: 'bewildered',
    definition: "lost or uncertain",
    sentence: "He felt bewildered when he couldnâ€™t find his way home."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'bicycle',
    definition: "a vehicle with two wheels that you ride",
    sentence: "I rode my bicycle to the park this afternoon."
  },
  {
    word: 'bicycle',
    definition: "to ride a bicycle",
    sentence: "She learned how to bicycle when she was five years old."
  },
  {
    word: 'box',
    definition: "a container used to store things",
    sentence: "I packed my books in a cardboard box."
  },
  {
    word: 'box',
    definition: "a square or rectangular shape",
    sentence: "He drew a box on the paper to put the picture inside."
  },
  {
    word: 'box',
    definition: "to fight using your fists",
    sentence: "The two athletes decided to box in the ring."
  },
  {
    word: 'brief',
    definition: "short in time or duration",
    sentence: "The meeting was brief, lasting only 15 minutes."
  },
  {
    word: 'brief',
    definition: "a document that explains details or instructions",
    sentence: "He gave me a brief of the project before I started working."
  },
  {
    word: 'Britain',
    definition: "a country made up of England, Scotland, and Wales",
    sentence: "I live in Britain, and I love the countryside."
  },
  {
    word: 'Britain',
    definition: "the island containing England, Scotland, and Wales",
    sentence: "Britain is known for its beautiful landscapes and castles."
  },
  {
    word: 'broad',
    definition: "wide, covering a large area",
    sentence: "The broad river stretched across the valley."
  },
  {
    word: 'broad',
    definition: "having a large range or variety",
    sentence: "She had a broad smile that lit up her face."
  },
  {
    word: 'bruise',
    definition: "a purple mark on the skin after being hit",
    sentence: "He had a bruise on his arm from falling off his bike."
  },
  {
    word: 'bruise',
    definition: "to injure or hurt something, often with a dark mark",
    sentence: "She bruised her knee when she tripped over the rock."
  },
  {
    word: 'brusque',
    definition: "very short and not friendly in manner",
    sentence: "He gave a brusque reply to the question."
  },
  {
    word: 'brusque',
    definition: "quick but unfriendly",
    sentence: "Her brusque way of speaking made me feel uncomfortable."
  },
  {
    word: 'burden',
    definition: "something heavy or hard to carry",
    sentence: "The heavy backpack was a burden for the young child."
  },
  {
    word: 'burden',
    definition: "a responsibility or something that causes stress",
    sentence: "Taking care of the house became a burden for him."
  },
  {
    word: 'business',
    definition: "a company or place where goods are sold",
    sentence: "She owns a small business that sells handmade jewellery."
  },
  {
    word: 'business',
    definition: "work that involves buying and selling goods or services",
    sentence: "He decided to start his own business selling shoes."
  },
  {
    word: 'calamity',
    definition: "a disaster or very bad event",
    sentence: "The flood was a calamity for the village, destroying homes."
  },
  {
    word: 'calamity',
    definition: "a terrible event that causes damage or harm",
    sentence: "The earthquake was a calamity that affected many people."
  },
  {
    word: 'candidate',
    definition: "a person who is being considered for a job or position",
    sentence: "She is a candidate for the role of class president."
  },
  {
    word: 'candidate',
    definition: "someone who is taking part in an election or competition",
    sentence: "There are five candidates running for mayor in the town."
  },
  {
    word: 'careering',
    definition: "moving very fast or wildly in a direction",
    sentence: "The car was careering down the hill without control."
  },
  {
    word: 'careering',
    definition: "to move quickly and out of control",
    sentence: "He was careering around the track during the race."
  },
  {
    word: 'category',
    definition: "a group of things that are similar in some way",
    sentence: "There are three categories for the school talent show: singing, dancing, and acting."
  },
  {
    word: 'category',
    definition: "a specific type or group of things",
    sentence: "This book belongs to the fantasy category."
  },
  {
    word: 'caulking',
    definition: "a material used to seal gaps or cracks",
    sentence: "He used caulking to seal the window to prevent drafts."
  },
  {
    word: 'caulking',
    definition: "to fill up cracks or holes to keep things sealed",
    sentence: "The caulking around the window kept the cold air out."
  },
  {
    word: 'caution',
    definition: "being careful or aware of danger",
    sentence: "He walked with caution near the edge of the cliff."
  },
  {
    word: 'caution',
    definition: "warning about something dangerous or risky",
    sentence: "The sign gave caution about slippery floors."
  },
  {
    word: 'cease',
    definition: "to stop or come to an end",
    sentence: "The rain will cease by tomorrow afternoon."
  },
  {
    word: 'cease',
    definition: "to stop doing something",
    sentence: "He will cease talking after the bell rings."
  },
  {
    word: 'cemetery',
    definition: "a place where people are buried",
    sentence: "The cemetery is located near the old church."
  },
  {
    word: 'cemetery',
    definition: "a graveyard where people rest after passing away",
    sentence: "They visited the cemetery to honour their grandparents."
  },
  {
    word: 'chaos',
    definition: "a state of complete confusion or disorder",
    sentence: "The classroom was in chaos after the fire drill."
  },
  {
    word: 'chaos',
    definition: "a situation where nothing is organised",
    sentence: "The kitchen was in chaos after the big dinner party."
  },
  {
    word: 'charred',
    definition: "burnt or scorched, usually to a black colour",
    sentence: "The charred wood was still smouldering from the fire."
  },
  {
    word: 'charred',
    definition: "something that has been burned badly",
    sentence: "The charred edges of the toast made it hard to eat."
  },
  {
    word: 'choreographer',
    definition: "a person who designs or arranges dances",
    sentence: "The choreographer taught us a new dance for the school play."
  },
  {
    word: 'choreographer',
    definition: "someone who creates and arranges the steps in a dance",
    sentence: "She is a talented choreographer known for her creative routines."
  },
  {
    word: 'clemency',
    definition: "mercy or leniency, especially in a punishment",
    sentence: "The judge showed clemency to the young offender and gave him a light sentence."
  },
  {
    word: 'clemency',
    definition: "the act of being kind or forgiving when it comes to punishment",
    sentence: "The king granted clemency to those who asked for his forgiveness."
  },
  {
    word: 'coarse',
    definition: "rough or not smooth",
    sentence: "The coarse sandpaper helped smooth the wood surface."
  },
  {
    word: 'coarse',
    definition: "made of large or rough parts",
    sentence: "The coarse fabric scratched against my skin."
  },
  {
    word: 'coax',
    definition: "to gently persuade or encourage someone to do something",
    sentence: "She coaxed the shy kitten out from under the bed."
  },
  {
    word: 'coax',
    definition: "to get something by gentle persuasion",
    sentence: "He had to coax his dog into the car for the vet appointment."
  },
  {
    word: 'college',
    definition: "a place of learning after high school",
    sentence: "She plans to attend college next year to study science."
  },
  {
    word: 'college',
    definition: "an institution where students go to receive higher education",
    sentence: "He decided to attend college in London to study history."
  },
  {
    word: 'colour',
    definition: "the appearance of something due to light and pigments",
    sentence: "The colour of the sky was a beautiful blue this morning."
  },
  {
    word: 'colour',
    definition: "a specific shade of light, like blue, red, or yellow",
    sentence: "She loves the colour purple and wears it often."
  },
  {
    word: 'combination',
    definition: "a mix of different things",
    sentence: "The combination of chocolate and peanut butter makes a great treat."
  },
  {
    word: 'combination',
    definition: "something that is made by combining different things",
    sentence: "The combination of spices gave the soup a unique taste."
  },
  {
    word: 'commence',
    definition: "to start or begin",
    sentence: "The concert will commence at 7 PM."
  },
  {
    word: 'commence',
    definition: "to begin an activity or event",
    sentence: "The meeting will commence once everyone arrives."
  },
  {
    word: 'commit',
    definition: "to do something, especially a crime or wrong action",
    sentence: "He did not commit the crime and was found innocent."
  },
  {
    word: 'commit',
    definition: "to carry out or perform an action",
    sentence: "She committed to finishing her homework before dinner."
  },
  {
    word: 'committee',
    definition: "a group of people working together for a purpose",
    sentence: "The committee met to discuss the plans for the new playground."
  },
  {
    word: 'committee',
    definition: "a group of people who make decisions or plans for something",
    sentence: "The committee decided to organise a charity event."
  },
  {
    word: 'communicate',
    definition: "to share information or ideas with someone",
    sentence: "They communicate through email when theyâ€™re at work."
  },
  {
    word: 'communicate',
    definition: "to talk to someone or send a message",
    sentence: "She communicated her feelings through a heartfelt letter."
  },
  {
    word: 'community',
    definition: "a group of people living in the same area or having something in common",
    sentence: "The community came together to help clean the park."
  },
  {
    word: 'community',
    definition: "a group of people who share similar interests or backgrounds",
    sentence: "The local community supported the schoolâ€™s fundraising event."
  },
  {
    word: 'companion',
    definition: "a person or animal that is with you and helps you",
    sentence: "The dog was his loyal companion during the hike."
  },
  {
    word: 'companion',
    definition: "someone who spends time with you, especially in a friendly way",
    sentence: "She was his travel companion during their trip abroad."
  },
  {
    word: 'company',
    definition: "a group of people working together in business",
    sentence: "The company manufactures cars and sells them worldwide."
  },
  {
    word: 'company',
    definition: "a group of people or an organisation",
    sentence: "The company hired 100 new employees last year."
  },
  {
    word: 'compel',
    definition: "to force someone to do something",
    sentence: "The teacher compelled the student to apologise for being rude."
  },
  {
    word: 'compel',
    definition: "to make someone feel that they must do something",
    sentence: "The movie's plot compelled me to keep watching until the end."
  },
  {
    word: 'competition',
    definition: "a contest where people try to win or achieve something",
    sentence: "The students entered a competition to win a free trip to the zoo."
  },
  {
    word: 'competition',
    definition: "an event where people try to win by being the best at something",
    sentence: "She entered the cooking competition to show off her skills."
  },
  {
    word: 'completely',
    definition: "totally or fully",
    sentence: "The house was completely clean after the big tidy-up."
  },
  {
    word: 'completely',
    definition: "entirely or fully with no part left out",
    sentence: "The book was completely finished after the last page."
  },
  {
    word: 'complex',
    definition: "something that has many parts or is not simple",
    sentence: "The puzzle was too complex for me to solve."
  },
  {
    word: 'complex',
    definition: "something that is made of many connected parts",
    sentence: "Her complex story had many twists and turns."
  },
  {
    word: 'composition',
    definition: "a piece of writing or a musical work",
    sentence: "Her composition for the piano recital was beautiful."
  },
  {
    word: 'composition',
    definition: "the way something is put together or arranged",
    sentence: "The composition of the painting was very detailed."
  },
  {
    word: 'comprehend',
    definition: "to understand or grasp an idea",
    sentence: "I couldnâ€™t comprehend the lesson until the teacher explained it again."
  },
  {
    word: 'comprehend',
    definition: "to understand the meaning of something",
    sentence: "He didnâ€™t fully comprehend the instructions given."
  },
  {
    word: 'comrade',
    definition: "a friend or companion, often in a difficult or challenging situation",
    sentence: "He is a comrade from my time in the army."
  },
  {
    word: 'comrade',
    definition: "a fellow member of a group with a shared purpose",
    sentence: "The workers acted as comrades during the strike."
  },
  {
    word: 'conceal',
    definition: "to hide something or keep it a secret",
    sentence: "She tried to conceal the surprise party from her friend."
  },
  {
    word: 'conceal',
    definition: "to cover or hide something so it is not seen",
    sentence: "He concealed the gift under the table."
  },
  {
    word: 'conceited',
    definition: "thinking too much of yourself and being proud in an unfriendly way",
    sentence: "The conceited boy always talked about how great he was at sports."
  },
  {
    word: 'conceited',
    definition: "having an overly high opinion of your own abilities",
    sentence: "She was so conceited, always boasting about her grades."
  },
  {
    word: 'concentrated',
    definition: "to make something stronger by removing water or other parts",
    sentence: "Concentrated orange juice is made by removing the water from the fruit."
  },
  {
    word: 'concentrated',
    definition: "something done with focus and effort",
    sentence: "She concentrated on her homework until it was done."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'conclude',
    definition: "to bring something to an end or finish",
    sentence: "The meeting will conclude at 5 PM."
  },
  {
    word: 'conclude',
    definition: "to decide or come to a conclusion about something",
    sentence: "I concluded that the project was successful after reviewing the results."
  },
  {
    word: 'conclusion',
    definition: "the final part of something, like an essay or a story",
    sentence: "The conclusion of the book was surprising."
  },
  {
    word: 'conclusion',
    definition: "a judgment or decision made after thinking about something",
    sentence: "The conclusion of the debate was clear, and everyone agreed."
  },
  {
    word: 'condemn',
    definition: "to say something is wrong or bad",
    sentence: "The teacher condemned cheating during the exam."
  },
  {
    word: 'condemn',
    definition: "to punish or criticize strongly",
    sentence: "The judge condemned the criminal for his actions."
  },
  {
    word: 'conferred',
    definition: "to give or grant something, usually an award or title",
    sentence: "The university conferred an honorary degree on the famous scientist."
  },
  {
    word: 'conferred',
    definition: "to discuss something with others to make a decision",
    sentence: "The team conferred before making their final decision."
  },
  {
    word: 'confine',
    definition: "to limit or keep something within certain boundaries",
    sentence: "He was confined to his room as a punishment."
  },
  {
    word: 'confine',
    definition: "to keep someone or something inside a space",
    sentence: "The animals were confined to their pens at the zoo."
  },
  {
    word: 'conscience',
    definition: "the sense of right and wrong in your mind",
    sentence: "His conscience told him to apologise for his mistake."
  },
  {
    word: 'conscience',
    definition: "the part of your mind that helps you make moral decisions",
    sentence: "Her conscience bothered her after telling a lie."
  },
  {
    word: 'conscious',
    definition: "aware of what is happening around you",
    sentence: "She was conscious during the surgery and could hear the doctors talking."
  },
  {
    word: 'conscious',
    definition: "noticing and thinking about things around you",
    sentence: "He was conscious of the fact that everyone was looking at him."
  },
  {
    word: 'consent',
    definition: "to agree to something or give permission",
    sentence: "He gave his consent for the project to go ahead."
  },
  {
    word: 'consent',
    definition: "to allow or approve of something",
    sentence: "She asked for her parents' consent before going to the party."
  },
  {
    word: 'conserve',
    definition: "to protect or save something, especially the environment",
    sentence: "We must conserve water during the drought."
  },
  {
    word: 'conserve',
    definition: "to use something carefully and not waste it",
    sentence: "The zoo works hard to conserve endangered species."
  },
  {
    word: 'consideration',
    definition: "careful thought or attention about something",
    sentence: "He gave careful consideration to the idea before deciding."
  },
  {
    word: 'consideration',
    definition: "something that is thought about before making a decision",
    sentence: "Her feelings were an important consideration in their decision."
  },
  {
    word: 'consist',
    definition: "to be made of or composed of different parts",
    sentence: "The cake consists of flour, sugar, and eggs."
  },
  {
    word: 'consist',
    definition: "to have something as its main or most important part",
    sentence: "The class consists of students from all over the world."
  },
  {
    word: 'conspire',
    definition: "to secretly plan something harmful or illegal",
    sentence: "They conspired to steal the treasure from the museum."
  },
  {
    word: 'conspire',
    definition: "to secretly work together for a particular purpose",
    sentence: "The group conspired to win the competition."
  },
  {
    word: 'constant',
    definition: "something that does not change over time",
    sentence: "The constant sound of the clock ticking made it hard to focus."
  },
  {
    word: 'constant',
    definition: "happening all the time without stopping",
    sentence: "She had a constant need to check her phone."
  },
  {
    word: 'consume',
    definition: "to use up or eat something",
    sentence: "He consumed all of his lunch in just a few minutes."
  },
  {
    word: 'consume',
    definition: "to use or spend something completely",
    sentence: "They consumed all of the energy in the batteries."
  },
  {
    word: 'contemporary',
    definition: "someone who lives at the same time as another person",
    sentence: "He is a contemporary of my grandfather."
  },
  {
    word: 'contemporary',
    definition: "something that exists or happens in the present time",
    sentence: "Modern art is often made by contemporary artists."
  },
  {
    word: 'contempt',
    definition: "a feeling that someone or something is not worth respect",
    sentence: "He looked at the messy room with contempt."
  },
  {
    word: 'contempt',
    definition: "a strong dislike or disrespect for someone or something",
    sentence: "She treated the rude customer with contempt."
  },
  {
    word: 'content',
    definition: "the information or ideas in something, like a book or a film",
    sentence: "The content of the speech was very inspiring."
  },
  {
    word: 'content',
    definition: "feeling happy and satisfied with what you have",
    sentence: "She was content with her simple life in the countryside."
  },
  {
    word: 'contest',
    definition: "a competition to see who is the best at something",
    sentence: "The school held a contest to see who could jump the highest."
  },
  {
    word: 'contest',
    definition: "an event where people try to win by performing or competing",
    sentence: "He entered the contest to design the best poster."
  },
  {
    word: 'contract',
    definition: "an agreement between people or groups, often written down",
    sentence: "They signed a contract to start the new business together."
  },
  {
    word: 'contract',
    definition: "to become smaller or tighter",
    sentence: "The metal will contract when it gets cold."
  },
  {
    word: 'contrast',
    definition: "to show how things are different from each other",
    sentence: "The contrast between the two paintings was clear in the gallery."
  },
  {
    word: 'contrast',
    definition: "to compare two things to highlight their differences",
    sentence: "He liked to contrast the two books to see which one was better."
  },
  {
    word: 'contribute',
    definition: "to give something, like money or help, to a cause or group",
    sentence: "She decided to contribute to the charity by donating Â£20."
  },
  {
    word: 'contribute',
    definition: "to add something to make something bigger or better",
    sentence: "Everyone in the team contributed their ideas to the project."
  },
  {
    word: 'conventional',
    definition: "following traditional ways of doing things",
    sentence: "The family followed conventional customs during the holiday."
  },
  {
    word: 'conventional',
    definition: "something that is usual or traditional in society",
    sentence: "Wearing formal clothes to a wedding is a conventional practice."
  },
  {
    word: 'convert',
    definition: "to change something into a different form",
    sentence: "She converted the old barn into a beautiful house."
  },
  {
    word: 'convert',
    definition: "to change your beliefs or way of thinking",
    sentence: "He converted to a new religion after moving to a different country."
  },
  {
    word: 'convey',
    definition: "to communicate or express something to others",
    sentence: "The teacher tried to convey the importance of studying to the students."
  },
  {
    word: 'convey',
    definition: "to carry something from one place to another",
    sentence: "The pipes convey the water from the lake to the farm."
  },
  {
    word: 'convict',
    definition: "to find someone guilty of a crime in a court of law",
    sentence: "He was convicted of stealing and sent to prison."
  },
  {
    word: 'convict',
    definition: "a person who has been found guilty of a crime",
    sentence: "The convict spent years in prison for his crimes."
  },
  {
    word: 'convince',
    definition: "to make someone believe or agree with you",
    sentence: "He tried to convince his parents to let him go on the trip."
  },
  {
    word: 'convince',
    definition: "to persuade someone to do something",
    sentence: "She convinced me to join her in the art competition."
  },
  {
    word: 'correct',
    definition: "to make something right or fix an error",
    sentence: "She needed to correct her homework before turning it in."
  },
  {
    word: 'correct',
    definition: "accurate or free from mistakes",
    sentence: "His answer was correct, so he got full marks on the test."
  },
  {
    word: 'covert',
    definition: "hidden or secret",
    sentence: "The spy was on a covert mission to gather information."
  },
  {
    word: 'covert',
    definition: "done in a way that is not easily noticed",
    sentence: "They held a covert meeting to discuss the project."
  },
  {
    word: 'covet',
    definition: "to strongly desire something that belongs to someone else",
    sentence: "She covets her friend's new bicycle."
  },
  {
    word: 'covet',
    definition: "to want something very much, even though it's not yours",
    sentence: "He covets his neighbour's sports car."
  },
  {
    word: 'coy',
    definition: "pretending to be shy or modest, but in a playful way",
    sentence: "She gave a coy smile when asked about her surprise party."
  },
  {
    word: 'coy',
    definition: "not saying much, especially to avoid revealing something",
    sentence: "He was coy about his plans for the weekend."
  },
  {
    word: 'credit',
    definition: "recognition or praise for something you have done",
    sentence: "He received credit for the idea that saved the company."
  },
  {
    word: 'credit',
    definition: "money that you borrow and promise to pay back later",
    sentence: "She used her credit card to buy the new phone."
  },
  {
    word: 'cultivate',
    definition: "to grow or prepare plants for farming",
    sentence: "Farmers cultivate crops like wheat and corn."
  },
  {
    word: 'cultivate',
    definition: "to develop or improve a skill or relationship",
    sentence: "She worked hard to cultivate her musical talents."
  },
  {
    word: 'cunning',
    definition: "being clever and tricky to achieve something",
    sentence: "The cunning fox managed to escape from the hunter."
  },
  {
    word: 'cunning',
    definition: "having a clever or deceitful way of doing things",
    sentence: "His cunning plan to win the game worked perfectly."
  },
  {
    word: 'curb',
    definition: "to control or limit something",
    sentence: "The government wants to curb the amount of pollution in the city."
  },
  {
    word: 'curb',
    definition: "a raised edge along the street or road",
    sentence: "She tripped over the curb while walking down the sidewalk."
  },
  {
    word: 'curious',
    definition: "wanting to know or learn more about something",
    sentence: "The curious child asked many questions about the stars."
  },
  {
    word: 'curious',
    definition: "strange or unusual, causing interest or wonder",
    sentence: "It was a curious sight to see a deer in the middle of the city."
  },
  {
    word: 'curt',
    definition: "short and rude in manner",
    sentence: "His curt reply made me feel uncomfortable."
  },
  {
    word: 'curt',
    definition: "brief and to the point, sometimes in an impolite way",
    sentence: "She gave a curt answer to avoid talking longer."
  },
  {
    word: 'custom',
    definition: "something that is done regularly in a particular group or place",
    sentence: "It is a custom to shake hands when meeting someone in many cultures."
  },
  {
    word: 'custom',
    definition: "a tradition or habit followed by a group or society",
    sentence: "They have a custom of eating turkey on Christmas Day."
  },
  {
    word: 'debate',
    definition: "a formal discussion about different sides of an issue",
    sentence: "The class had a debate about the best way to solve the problem."
  },
  {
    word: 'debate',
    definition: "to argue or discuss something in a formal way",
    sentence: "They debated whether the school should have longer breaks."
  },
  {
    word: 'debrief',
    definition: "to discuss the details of something that has just happened",
    sentence: "After the meeting, we debriefed the plan to see what went well."
  },
  {
    word: 'debrief',
    definition: "to explain the results or lessons from an event",
    sentence: "The coach debriefed the players after the match."
  },
  {
    word: 'deceit',
    definition: "the act of hiding the truth or lying",
    sentence: "He was punished for his deceit during the test."
  },
  {
    word: 'deceive',
    definition: "to lie or trick someone into believing something that isnâ€™t true",
    sentence: "She tried to deceive her parents about where she was going."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'declare',
    definition: "to announce or say something publicly",
    sentence: "He declared that he would run for class president."
  },
  {
    word: 'declare',
    definition: "to state something officially or clearly",
    sentence: "The teacher declared the test results to the class."
  },
  {
    word: 'decline',
    definition: "to say no to something or refuse it",
    sentence: "She politely declined the invitation to the party."
  },
  {
    word: 'decline',
    definition: "to become less or worse over time",
    sentence: "The quality of the painting declined after years of neglect."
  },
  {
    word: 'definite',
    definition: "clear and certain",
    sentence: "She gave a definite answer when asked about her plans."
  },
  {
    word: 'definite',
    definition: "having a clear and firm meaning",
    sentence: "The rules were definite and couldn't be changed."
  },
  {
    word: 'deliberate',
    definition: "to think about something carefully before deciding",
    sentence: "They deliberated for hours before making a decision."
  },
  {
    word: 'deliberate',
    definition: "done on purpose or with careful planning",
    sentence: "His actions were deliberate and well thought out."
  },
  {
    word: 'demolished',
    definition: "completely destroyed or torn down",
    sentence: "The old building was demolished to make way for a new one."
  },
  {
    word: 'demolished',
    definition: "to break or ruin something completely",
    sentence: "The car was demolished in the accident."
  },
  {
    word: 'deny',
    definition: "to say something isn't true or refuse to accept it",
    sentence: "He denied breaking the vase."
  },
  {
    word: 'deny',
    definition: "to refuse to give someone something they want or need",
    sentence: "She denied her brother's request to borrow her bike."
  },
  {
    word: 'deposit',
    definition: "to put something down, especially money or items",
    sentence: "He deposited the money in the bank."
  },
  {
    word: 'deposit',
    definition: "a sum of money put into an account or held for safekeeping",
    sentence: "She made a deposit of Â£50 into her savings account."
  },
  {
    word: 'depot',
    definition: "a place where vehicles or goods are stored or taken care of",
    sentence: "The train depot was full of passengers waiting for their train."
  },
  {
    word: 'depot',
    definition: "a building where buses or trains are kept",
    sentence: "We waited at the bus depot for the next bus."
  },
  {
    word: 'derelict',
    definition: "in poor condition because of neglect or disuse",
    sentence: "The derelict house was covered in vines and broken windows."
  },
  {
    word: 'derelict',
    definition: "someone who has no home and lives on the streets",
    sentence: "The city helps provide shelter for the derelict people."
  },
  {
    word: 'description',
    definition: "a written or spoken explanation of something",
    sentence: "He gave a detailed description of the book to his friend."
  },
  {
    word: 'description',
    definition: "the way something or someone looks or is made",
    sentence: "The description of the new toy was very exciting."
  },
  {
    word: 'despair',
    definition: "a feeling of hopelessness or sadness",
    sentence: "After hearing the bad news, she felt a deep sense of despair."
  },
  {
    word: 'despair',
    definition: "to lose hope or believe that nothing will get better",
    sentence: "He began to despair when he couldn't find his keys."
  },
  {
    word: 'desperately',
    definition: "in a way that shows great need or urgency",
    sentence: "She desperately tried to find her lost dog."
  },
  {
    word: 'desperately',
    definition: "in a very strong way, usually because of a lack of hope",
    sentence: "They were desperately searching for a way to solve the problem."
  },
  {
    word: 'despise',
    definition: "to feel hatred or dislike for something or someone",
    sentence: "He despised the way his classmate treated others."
  },
  {
    word: 'despise',
    definition: "to think that something is very unworthy or bad",
    sentence: "She despised the way he lied to her."
  },
  {
    word: 'destitute',
    definition: "lacking the basic things needed for life, like food or shelter",
    sentence: "The family was destitute after the house burned down."
  },
  {
    word: 'destitute',
    definition: "without money, food, or possessions",
    sentence: "He felt destitute when he lost his job and home."
  },
  {
    word: 'determine',
    definition: "to decide or settle something with certainty",
    sentence: "She determined to finish the project by the deadline."
  },
  {
    word: 'determine',
    definition: "to figure out something after careful thinking",
    sentence: "He determined the answer to the math problem."
  },
  {
    word: 'develop',
    definition: "to grow or improve over time",
    sentence: "The plant began to develop leaves after a few days."
  },
  {
    word: 'develop',
    definition: "to create or produce something new",
    sentence: "She wants to develop a new app to help people learn languages."
  },
  {
    word: 'device',
    definition: "a tool or piece of equipment used for a particular purpose",
    sentence: "A smartphone is a device used for communication and entertainment."
  },
  {
    word: 'device',
    definition: "an electronic or mechanical machine used for specific tasks",
    sentence: "The GPS device helped us find our way through the city."
  },
  {
    word: 'devote',
    definition: "to dedicate time, effort, or resources to something",
    sentence: "She devotes a lot of time to volunteering at the animal shelter."
  },
  {
    word: 'devote',
    definition: "to give all your attention and energy to something important",
    sentence: "He devotes his weekends to working on his art projects."
  },
  {
    word: 'dictionary',
    definition: "a book or online resource with the meanings of words",
    sentence: "She looked up the word in the dictionary to understand it better."
  },
  {
    word: 'dictionary',
    definition: "a reference book that lists words and their definitions",
    sentence: "The teacher told the class to use the dictionary for their homework."
  },
  {
    word: 'digest',
    definition: "to break down food in the stomach or mind",
    sentence: "It took a while for him to digest the news about his move."
  },
  {
    word: 'digest',
    definition: "to understand or think carefully about something",
    sentence: "She needed time to digest the information from the meeting."
  },
  {
    word: 'dilapidated',
    definition: "in a very bad condition, especially because of neglect",
    sentence: "The dilapidated house was falling apart and unsafe to live in."
  },
  {
    word: 'dilapidated',
    definition: "broken down or ruined by age or lack of care",
    sentence: "The dilapidated car had been abandoned in the driveway."
  },
  {
    word: 'din',
    definition: "a loud, continuous noise",
    sentence: "The din of the construction made it difficult to concentrate."
  },
  {
    word: 'din',
    definition: "a loud and unpleasant sound that goes on for a long time",
    sentence: "The din of the crowd cheered as the team scored a goal."
  },
  {
    word: 'disappear',
    definition: "to stop being seen or become invisible",
    sentence: "The magician made the rabbit disappear from the hat."
  },
  {
    word: 'disappear',
    definition: "to go away and not be found again",
    sentence: "The car disappeared into the fog on the road."
  },
  {
    word: 'disappointed',
    definition: "feeling sad because something didn't happen as expected",
    sentence: "She was disappointed when the concert was cancelled."
  },
  {
    word: 'disappointed',
    definition: "to feel let down or upset when things don't go as hoped",
    sentence: "He was disappointed after losing the race."
  },
  {
    word: 'disarray',
    definition: "a state of confusion or disorder",
    sentence: "The room was in disarray after the kids played with the toys."
  },
  {
    word: 'disarray',
    definition: "when things are messy or not organised properly",
    sentence: "The kitchen was in disarray after the party."
  },
  {
    word: 'disastrous',
    definition: "very bad or causing harm or damage",
    sentence: "The fire had a disastrous effect on the whole building."
  },
  {
    word: 'disastrous',
    definition: "having a terrible outcome, often causing a lot of trouble",
    sentence: "The storm caused disastrous flooding in the town."
  },
  {
    word: 'disclose',
    definition: "to reveal or make something known",
    sentence: "He disclosed his secret to his best friend."
  },
  {
    word: 'disclose',
    definition: "to give out information that was kept secret or hidden",
    sentence: "The company disclosed its plans to expand overseas."
  },
  {
    word: 'discontent',
    definition: "a feeling of unhappiness or dissatisfaction",
    sentence: "The workers expressed discontent about their long hours."
  },
  {
    word: 'discontent',
    definition: "when someone is not happy with something",
    sentence: "She felt discontent with her grades after the test."
  },
  {
    word: 'dishevelled',
    definition: "untidy or messy, especially in appearance",
    sentence: "His hair was dishevelled after the long day at work."
  },
  {
    word: 'dishevelled',
    definition: "looking messy or out of order",
    sentence: "She looked dishevelled after running to catch the bus."
  },
  {
    word: 'dismal',
    definition: "gloomy or sad",
    sentence: "The dismal weather made everyone feel down."
  },
  {
    word: 'dismal',
    definition: "very poor or disappointing",
    sentence: "The team's dismal performance led to their defeat."
  },
  {
    word: 'disperse',
    definition: "to spread out or scatter",
    sentence: "The crowd began to disperse after the event ended."
  },
  {
    word: 'disperse',
    definition: "to break up and go in different directions",
    sentence: "The protesters dispersed when the police arrived."
  },
  {
    word: 'dispute',
    definition: "a disagreement or argument between people",
    sentence: "The dispute between the two friends lasted for days."
  },
  {
    word: 'dispute',
    definition: "to argue or challenge something that is said or done",
    sentence: "They disputed the rules of the game during the match."
  },
  {
    word: 'distasteful',
    definition: "something that is unpleasant or hard to accept",
    sentence: "The smell of the garbage was distasteful."
  },
  {
    word: 'distasteful',
    definition: "something that is rude or offensive",
    sentence: "His distasteful comment upset everyone in the room."
  },
  {
    word: 'distinct',
    definition: "clearly different or separate from something else",
    sentence: "The two colours were distinct and easy to tell apart."
  },
  {
    word: 'distinct',
    definition: "having a noticeable or unique quality",
    sentence: "There was a distinct smell of fresh bread in the air."
  },
  {
    word: 'distinguished',
    definition: "famous or respected for achievements or qualities",
    sentence: "She is a distinguished scientist known for her research."
  },
  {
    word: 'distinguished',
    definition: "having a high level of respect or importance",
    sentence: "The distinguished professor gave a lecture on history."
  },
  {
    word: 'distress',
    definition: "a state of extreme worry, suffering, or pain",
    sentence: "She was in distress after losing her wallet."
  },
  {
    word: 'distress',
    definition: "to make someone feel anxious or troubled",
    sentence: "The news of the accident distressed the family."
  },
  {
    word: 'divine',
    definition: "relating to a god or gods",
    sentence: "In ancient times, people believed that divine beings controlled the world."
  },
  {
    word: 'divine',
    definition: "very beautiful, wonderful, or perfect",
    sentence: "The sunset over the ocean was a divine sight."
  },
  {
    word: 'divinity',
    definition: "the quality of being a god or divine being",
    sentence: "People worshipped the divinity of the sun and moon."
  },
  {
    word: 'divinity',
    definition: "the study of gods or religion",
    sentence: "She was studying divinity at the university."
  },
  {
    word: 'domestic',
    definition: "relating to home or family life",
    sentence: "Domestic chores include cleaning, cooking, and washing."
  },
  {
    word: 'domestic',
    definition: "related to animals that are kept as pets or for work at home",
    sentence: "Dogs and cats are domestic animals that live with people."
  },
  {
    word: 'dose',
    definition: "a measured amount of medicine or a substance",
    sentence: "He took a dose of medicine to help with his cold."
  },
  {
    word: 'dose',
    definition: "a small amount of something, especially something harmful",
    sentence: "The poison was given in a lethal dose."
  },
  {
    word: 'drought',
    definition: "a long period without enough rain",
    sentence: "The drought caused crops to fail and water to run out."
  },
  {
    word: 'drought',
    definition: "a shortage of water due to little or no rainfall",
    sentence: "Farmers were worried about the effects of the drought on their crops."
  },
  {
    word: 'dumb',
    definition: "stupid or not intelligent",
    sentence: "He felt dumb when he couldn't answer the question."
  },
  {
    word: 'dumb',
    definition: "unable to speak",
    sentence: "The boy was born dumb and communicated using sign language."
  },
  {
    word: 'dwelling',
    definition: "a place where someone lives, such as a house or apartment",
    sentence: "Their dwelling was on the top floor of the building."
  },
  {
    word: 'dwelling',
    definition: "a building or structure where people live",
    sentence: "The village is made up of small dwellings spread across the countryside."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'earnest',
    definition: "serious and sincere",
    sentence: "She gave an earnest apology for forgetting her friend's birthday."
  },
  {
    word: 'earnest',
    definition: "showing deep interest or effort",
    sentence: "He was earnest in his efforts to study for the big test."
  },
  {
    word: 'economical',
    definition: "not using a lot of money or resources",
    sentence: "She was very economical when shopping, always looking for sales."
  },
  {
    word: 'economical',
    definition: "costing little, or using resources wisely",
    sentence: "An electric car is more economical because it saves fuel."
  },
  {
    word: 'elect',
    definition: "to choose someone for a job or role by voting",
    sentence: "The class will elect a new president next week."
  },
  {
    word: 'elect',
    definition: "to decide or choose someone to do something",
    sentence: "She was elected as the team captain."
  },
  {
    word: 'elude',
    definition: "to escape from or avoid someone or something",
    sentence: "The mouse managed to elude the cat by running into the hole."
  },
  {
    word: 'elude',
    definition: "to avoid being caught or noticed",
    sentence: "The answer to the puzzle still eludes me."
  },
  {
    word: 'embarrass',
    definition: "to make someone feel awkward or self-conscious",
    sentence: "She felt embarrassed when she tripped in front of the class."
  },
  {
    word: 'embarrass',
    definition: "to cause someone to feel uncomfortable or ashamed",
    sentence: "His loud laughter embarrassed his friend."
  },
  {
    word: 'embrace',
    definition: "to hug someone tightly, especially as a sign of affection",
    sentence: "They embraced each other after a long time apart."
  },
  {
    word: 'embrace',
    definition: "to accept something willingly or enthusiastically",
    sentence: "She embraced the idea of trying something new."
  },
  {
    word: 'emerge',
    definition: "to come out of something or appear from a place",
    sentence: "A butterfly emerged from its cocoon after a few weeks."
  },
  {
    word: 'emerge',
    definition: "to become known or visible after being hidden",
    sentence: "A bright light emerged from behind the clouds."
  },
  {
    word: 'empire',
    definition: "a large group of countries or territories ruled by one leader",
    sentence: "The Roman Empire controlled much of Europe and the Mediterranean."
  },
  {
    word: 'empire',
    definition: "a group of businesses or organizations controlled by one person or company",
    sentence: "His company grew into an empire in the tech industry."
  },
  {
    word: 'employ',
    definition: "to hire someone to work for you",
    sentence: "The company employed hundreds of workers at its factory."
  },
  {
    word: 'employ',
    definition: "to use something for a particular purpose",
    sentence: "She employed her skills to solve the difficult puzzle."
  },
  {
    word: 'endeavour',
    definition: "to try hard to do something",
    sentence: "He will endeavour to finish the project before the deadline."
  },
  {
    word: 'endeavour',
    definition: "an effort or attempt to do something difficult",
    sentence: "Climbing the mountain was a challenging endeavour."
  },
  {
    word: 'endure',
    definition: "to continue to do something even though it is difficult",
    sentence: "She endured the long hike and reached the summit."
  },
  {
    word: 'endure',
    definition: "to last or survive for a long time",
    sentence: "The tradition has endured for generations in their family."
  },
  {
    word: 'enterprise',
    definition: "a business or company",
    sentence: "His new enterprise sold handmade toys online."
  },
  {
    word: 'enterprise',
    definition: "a project or plan that involves a lot of effort",
    sentence: "Starting a new school garden was a big enterprise."
  },
  {
    word: 'entire',
    definition: "whole or complete",
    sentence: "She ate the entire pizza by herself."
  },
  {
    word: 'entire',
    definition: "all of something without missing any part",
    sentence: "The entire class was excited about the field trip."
  },
  {
    word: 'entirely',
    definition: "completely or totally",
    sentence: "The room was entirely decorated in blue."
  },
  {
    word: 'entirely',
    definition: "in every way or aspect",
    sentence: "She was entirely surprised by the party."
  },
  {
    word: 'environment',
    definition: "the natural world around us, including land, air, and water",
    sentence: "We need to protect the environment to keep it healthy."
  },
  {
    word: 'environment',
    definition: "the surroundings or conditions in which something exists",
    sentence: "The office environment is quiet and peaceful."
  },
  {
    word: 'equip',
    definition: "to provide with the necessary tools or equipment",
    sentence: "The team was equipped with all the gear they needed for the hike."
  },
  {
    word: 'equip',
    definition: "to prepare or make ready for something",
    sentence: "They were equipped with the latest technology for the mission."
  },
  {
    word: 'equipment',
    definition: "the tools or devices used for a particular task",
    sentence: "The kitchen equipment included knives, pans, and blenders."
  },
  {
    word: 'equipment',
    definition: "gear or materials needed for a specific job or activity",
    sentence: "The school provided all the equipment needed for science experiments."
  },
  {
    word: 'equipped',
    definition: "having the necessary tools or resources",
    sentence: "She was well-equipped to handle the job."
  },
  {
    word: 'equipped',
    definition: "prepared or ready for something",
    sentence: "They were equipped for the trip with warm clothing and food."
  },
  {
    word: 'erect',
    definition: "to build or put something up",
    sentence: "They erected a tent for the camping trip."
  },
  {
    word: 'erect',
    definition: "standing upright or vertical",
    sentence: "The flag was erect on the pole, waving in the wind."
  },
  {
    word: 'errand',
    definition: "a small task or job to be done, usually outside the house",
    sentence: "I need to run an errand to the post office."
  },
  {
    word: 'errand',
    definition: "a short trip to get something or deliver a message",
    sentence: "She went out on an errand to pick up the groceries."
  },
  {
    word: 'especially',
    definition: "used to show something is more important or special than others",
    sentence: "She loves animals, especially dogs."
  },
  {
    word: 'especially',
    definition: "in a way that makes something stand out more",
    sentence: "He enjoys playing sports, especially football."
  },
  {
    word: 'estimate',
    definition: "to guess or calculate the amount or number of something",
    sentence: "Can you estimate how many candies are in the jar?"
  },
  {
    word: 'estimate',
    definition: "an approximate calculation or guess",
    sentence: "The estimate for the repairs was higher than expected."
  },
  {
    word: 'evaluation',
    definition: "the process of judging or measuring something's quality",
    sentence: "The teacher did an evaluation of the students' projects."
  },
  {
    word: 'evaluation',
    definition: "an assessment of how well something is done",
    sentence: "The evaluation of the new product showed great results."
  },
  {
    word: 'evident',
    definition: "clear or easy to see or understand",
    sentence: "It was evident that she was upset after hearing the news."
  },
  {
    word: 'evident',
    definition: "obvious or apparent",
    sentence: "The smile on his face was evident as he opened the gift."
  },
  {
    word: 'exaggerate',
    definition: "to say something is bigger, better, or worse than it really is",
    sentence: "He tended to exaggerate his stories to make them more exciting."
  },
  {
    word: 'exaggerate',
    definition: "to overstate or make something seem more important or extreme",
    sentence: "She exaggerated how hard the test was, making it seem impossible."
  },
  {
    word: 'excellent',
    definition: "very good or of high quality",
    sentence: "Her performance in the play was excellent."
  },
  {
    word: 'excellent',
    definition: "extremely good or impressive",
    sentence: "The food at the restaurant was excellent."
  },
  {
    word: 'excitement',
    definition: "a feeling of joy or enthusiasm about something",
    sentence: "The excitement in the air was palpable before the concert started."
  },
  {
    word: 'excitement',
    definition: "a state of being excited or eager",
    sentence: "The kids screamed with excitement when they saw the clown."
  },
  {
    word: 'exciting',
    definition: "causing great interest or enthusiasm",
    sentence: "The roller coaster ride was so exciting!"
  },
  {
    word: 'exciting',
    definition: "something that is thrilling or fun",
    sentence: "It was an exciting game, with lots of action."
  },
  {
    word: 'exclaim',
    definition: "to say something loudly or with excitement",
    sentence: "He exclaimed, 'Wow, this is amazing!'"
  },
  {
    word: 'exclaim',
    definition: "to shout or speak out in surprise or joy",
    sentence: "She exclaimed with joy when she got the good news."
  },
  {
    word: 'existence',
    definition: "the fact that something is real or alive",
    sentence: "The existence of life on other planets is a topic of debate."
  },
  {
    word: 'existence',
    definition: "the state of being alive or present in the world",
    sentence: "We need to protect the existence of endangered species."
  },
  {
    word: 'expel',
    definition: "to officially remove someone from a place or group",
    sentence: "He was expelled from school for breaking the rules."
  },
  {
    word: 'expel',
    definition: "to force something out or away",
    sentence: "The teacher had to expel the bad air from the classroom."
  },
  {
    word: 'expense',
    definition: "the cost of something or the money spent",
    sentence: "The expense of the new laptop was worth it for work."
  },
  {
    word: 'expense',
    definition: "the amount of money needed to pay for something",
    sentence: "Her monthly expenses include rent, food, and utilities."
  },
  {
    word: 'explanation',
    definition: "a statement that makes something clear or easy to understand",
    sentence: "He gave a simple explanation of how the machine works."
  },
  {
    word: 'explanation',
    definition: "a reason or detail that helps to clarify something",
    sentence: "The explanation of the science project was clear and thorough."
  },
  {
    word: 'extended',
    definition: "made longer in time or distance",
    sentence: "The vacation was extended by two more days."
  },
  {
    word: 'extended',
    definition: "reached out or increased in size",
    sentence: "The teacher extended her hand to help the student."
  },
  {
    word: 'exterior',
    definition: "the outside or outer part of something",
    sentence: "The exterior of the house was painted a bright yellow."
  },
  {
    word: 'exterior',
    definition: "the outer surface of something",
    sentence: "The carâ€™s exterior was shiny after the wash."
  },
  {
    word: 'extinction',
    definition: "the state of a species or group no longer existing",
    sentence: "The extinction of dinosaurs is a well-known fact."
  },
  {
    word: 'extinction',
    definition: "the process of something dying out or disappearing",
    sentence: "Many animals are at risk of extinction due to habitat loss."
  },
  {
    word: 'extract',
    definition: "to remove or take something out, especially with force",
    sentence: "They had to extract the broken tooth from his mouth."
  },
  {
    word: 'extract',
    definition: "a substance taken from something else, often for a special use",
    sentence: "Vanilla extract is used in many dessert recipes."
  },
  {
    word: 'extremely',
    definition: "very or highly",
    sentence: "It was extremely cold outside, so I wore a thick coat."
  },
  {
    word: 'extremely',
    definition: "in a very great or intense way",
    sentence: "The movie was extremely funny and made everyone laugh."
  },
  {
    word: 'famine',
    definition: "a severe shortage of food that leads to hunger",
    sentence: "The country suffered from a famine that affected millions of people."
  },
  {
    word: 'famine',
    definition: "a time when there is not enough food for everyone",
    sentence: "The famine caused many people to leave their homes in search of food."
  },
  {
    word: 'fatal',
    definition: "able to cause death or something very serious",
    sentence: "The injury was fatal and the patient did not survive."
  },
  {
    word: 'fatal',
    definition: "leading to death or destruction",
    sentence: "The accident was fatal for the driver."
  },
  {
    word: 'fatigue',
    definition: "extreme tiredness or exhaustion",
    sentence: "He felt fatigue after working for hours without rest."
  },
  {
    word: 'fatigue',
    definition: "the state of being very tired or worn out",
    sentence: "She pushed through the fatigue to finish the race."
  },
  {
    word: 'favourite',
    definition: "something that is liked most by someone",
    sentence: "Pizza is my favourite food."
  },
  {
    word: 'favourite',
    definition: "the person or thing that is preferred over others",
    sentence: "My favourite book is 'Harry Potter and the Sorcerer's Stone.'"
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'feeble',
    definition: "weak or lacking strength",
    sentence: "The feeble puppy struggled to stand up on its own."
  },
  {
    word: 'feeble',
    definition: "not strong or effective",
    sentence: "His argument was feeble and did not convince anyone."
  },
  {
    word: 'feign',
    definition: "to pretend or fake something",
    sentence: "She feigned a smile even though she felt sad."
  },
  {
    word: 'feign',
    definition: "to make something appear as if it is true",
    sentence: "He feigned illness to avoid going to school."
  },
  {
    word: 'fertile',
    definition: "able to produce plants or crops easily",
    sentence: "The soil in the garden is fertile, making it perfect for growing vegetables."
  },
  {
    word: 'fertile',
    definition: "full of life or energy",
    sentence: "The fertile imagination of the artist led to amazing ideas."
  },
  {
    word: 'flamboyant',
    definition: "showy or very colorful, often in a bold way",
    sentence: "The flamboyant peacock spread its bright feathers."
  },
  {
    word: 'flamboyant',
    definition: "bright, lively, and full of energy",
    sentence: "She wore a flamboyant dress to the party that caught everyone's attention."
  },
  {
    word: 'flawless',
    definition: "perfect or without any mistakes",
    sentence: "Her performance was flawless, and she received a standing ovation."
  },
  {
    word: 'flawless',
    definition: "without any faults or defects",
    sentence: "The diamond was flawless and sparkled in the light."
  },
  {
    word: 'flee',
    definition: "to run away from something in fear or danger",
    sentence: "The rabbit had to flee from the fox to stay safe."
  },
  {
    word: 'flee',
    definition: "to escape or leave quickly",
    sentence: "They had to flee the building when the fire alarm went off."
  },
  {
    word: 'fleet',
    definition: "a group of ships, vehicles, or aircraft",
    sentence: "The navy fleet sailed across the ocean for an important mission."
  },
  {
    word: 'fleet',
    definition: "moving quickly or fast",
    sentence: "The fleet car zipped down the highway."
  },
  {
    word: 'flora',
    definition: "the plants of a particular region or environment",
    sentence: "The flora in the rainforest is diverse and beautiful."
  },
  {
    word: 'flora',
    definition: "the collection of plants in an area",
    sentence: "The flora of the island includes many tropical flowers."
  },
  {
    word: 'flourish',
    definition: "to grow well or thrive",
    sentence: "The garden began to flourish after being watered regularly."
  },
  {
    word: 'flourish',
    definition: "a dramatic or impressive action or decoration",
    sentence: "He made a flourish with his cape before exiting the stage."
  },
  {
    word: 'foe',
    definition: "an enemy or opponent",
    sentence: "The knight battled his foe in the great tournament."
  },
  {
    word: 'foe',
    definition: "someone who is against you or your team",
    sentence: "The soccer team defeated their foe in the championship match."
  },
  {
    word: 'forbid',
    definition: "to order someone not to do something",
    sentence: "My parents forbid me to stay out past midnight."
  },
  {
    word: 'forbid',
    definition: "to prevent something from happening",
    sentence: "The rules forbid running in the hallways at school."
  },
  {
    word: 'foundation',
    definition: "the base or support on which something is built",
    sentence: "The foundation of the house was strong and secure."
  },
  {
    word: 'foundation',
    definition: "the starting point or basis of something",
    sentence: "The foundation of her argument was well-reasoned and clear."
  },
  {
    word: 'fragment',
    definition: "a small piece or part of something",
    sentence: "He found a fragment of glass on the ground after the vase broke."
  },
  {
    word: 'fragment',
    definition: "a broken piece or part of something larger",
    sentence: "She picked up the fragment of the broken plate."
  },
  {
    word: 'fragrant',
    definition: "having a pleasant smell",
    sentence: "The flowers in the garden were fragrant and smelled wonderful."
  },
  {
    word: 'fragrant',
    definition: "a sweet-smelling scent or aroma",
    sentence: "The fragrant perfume filled the room as she walked in."
  },
  {
    word: 'frequent',
    definition: "happening often or many times",
    sentence: "They made frequent trips to the park every weekend."
  },
  {
    word: 'frequent',
    definition: "to visit or go to something often",
    sentence: "She frequently goes to the library to read books."
  },
  {
    word: 'friend',
    definition: "someone you like and trust",
    sentence: "My best friend and I do everything together."
  },
  {
    word: 'friend',
    definition: "a person who you enjoy spending time with and care about",
    sentence: "She invited all her friends to her birthday party."
  },
  {
    word: 'frivolous',
    definition: "not serious or important",
    sentence: "He spent all his money on frivolous things like toys and games."
  },
  {
    word: 'frivolous',
    definition: "silly or unnecessary",
    sentence: "The conversation was filled with frivolous chatter."
  },
  {
    word: 'fund',
    definition: "money that is collected or saved for a particular purpose",
    sentence: "They set up a fund to help the local animal shelter."
  },
  {
    word: 'fund',
    definition: "to provide money for something",
    sentence: "They will fund the new playground with the donations from the community."
  },
  {
    word: 'garment',
    definition: "an item of clothing",
    sentence: "She wore a beautiful garment to the wedding."
  },
  {
    word: 'garment',
    definition: "a piece of clothing like a dress or shirt",
    sentence: "The tailor created a new garment for the fashion show."
  },
  {
    word: 'government',
    definition: "the group of people who make the laws and decisions for a country or area",
    sentence: "The government is working on new policies for education."
  },
  {
    word: 'government',
    definition: "the system of ruling or governing a country or group of people",
    sentence: "The countryâ€™s government held an election for president."
  },
  {
    word: 'grate',
    definition: "a metal frame with openings used for cooking or covering",
    sentence: "The grill has a grate where the food is placed."
  },
  {
    word: 'grate',
    definition: "to make a harsh sound by rubbing two things together",
    sentence: "The sound of the metal scraping on the ground grated on my nerves."
  },
  {
    word: 'gratitude',
    definition: "the feeling of being thankful",
    sentence: "She showed her gratitude by writing a thank-you note."
  },
  {
    word: 'gratitude',
    definition: "a feeling of appreciation or thanks",
    sentence: "We express our gratitude to everyone who helped with the project."
  },
  {
    word: 'grave',
    definition: "a place where a body is buried",
    sentence: "The grave was marked with a simple stone."
  },
  {
    word: 'grave',
    definition: "serious or important",
    sentence: "She had a grave expression on her face when delivering the news."
  },
  {
    word: 'gregarious',
    definition: "friendly and sociable, enjoying the company of others",
    sentence: "The gregarious girl loved to chat with everyone at school."
  },
  {
    word: 'gregarious',
    definition: "enjoying being around people",
    sentence: "He was gregarious and always surrounded by his friends."
  },
  {
    word: 'grieve',
    definition: "to feel sadness or sorrow, especially after a loss",
    sentence: "She took time to grieve after the death of her pet."
  },
  {
    word: 'grieve',
    definition: "to mourn or feel sorrow for something or someone",
    sentence: "He grieved the loss of his childhood home when it was sold."
  },
  {
    word: 'grotesque',
    definition: "strange or ugly in a way that is unpleasant",
    sentence: "The monster in the movie had a grotesque appearance."
  },
  {
    word: 'grotesque',
    definition: "something that is very ugly or shocking",
    sentence: "The design of the building was so grotesque that no one liked it."
  },
  {
    word: 'guarantee',
    definition: "a promise or assurance that something will happen or be done",
    sentence: "The company offered a guarantee that the product would work."
  },
  {
    word: 'guarantee',
    definition: "a promise that something will happen or be fixed if it goes wrong",
    sentence: "The warranty is a guarantee that the item will be replaced if it breaks."
  },
  {
    word: 'guard',
    definition: "a person who keeps something safe or protected",
    sentence: "The guard stood at the entrance of the building, watching for danger."
  },
  {
    word: 'guard',
    definition: "to protect or keep something safe",
    sentence: "She had to guard the cookies to prevent her brother from eating them."
  },
  {
    word: 'habitable',
    definition: "able to be lived in, safe for people to stay",
    sentence: "The house was old but still habitable, with clean floors and a roof."
  },
  {
    word: 'habitable',
    definition: "suitable for living in or occupying",
    sentence: "The apartment was spacious and habitable after the renovations."
  },
  {
    word: 'habitat',
    definition: "the place where an animal or plant lives",
    sentence: "The forest is the habitat of many animals, such as bears and squirrels."
  },
  {
    word: 'habitat',
    definition: "the natural environment where a species lives or grows",
    sentence: "Coral reefs are the habitat for many species of fish."
  },
  {
    word: 'halt',
    definition: "to stop or come to a stop",
    sentence: "The bus came to a halt at the traffic light."
  },
  {
    word: 'halt',
    definition: "a pause or stop in movement or activity",
    sentence: "They decided to halt the meeting until the next day."
  },
  {
    word: 'handkerchief',
    definition: "a small piece of cloth used for wiping your face or nose",
    sentence: "He pulled out his handkerchief to wipe away his tears."
  },
  {
    word: 'handkerchief',
    definition: "a cloth used to clean your face or hands",
    sentence: "She carried a handkerchief in her pocket just in case."
  },
  {
    word: 'hasty',
    definition: "done quickly and without enough thought or planning",
    sentence: "He made a hasty decision to leave without considering all the facts."
  },
  {
    word: 'hasty',
    definition: "rushed or hurried, often leading to mistakes",
    sentence: "The hasty reply was not thought through carefully."
  },
  {
    word: 'helix',
    definition: "a spiral or curved shape, like a coil",
    sentence: "The DNA molecule has a helix structure."
  },
  {
    word: 'helix',
    definition: "a shape that spirals or curves around a central point",
    sentence: "The stairs of the tower followed a helix pattern, twisting upward."
  },
  {
    word: 'heroic',
    definition: "having the qualities of a hero, like bravery or courage",
    sentence: "The heroic firefighter rescued the family from the burning house."
  },
  {
    word: 'heroic',
    definition: "showing great courage or determination",
    sentence: "The soldier's heroic actions saved many lives during the battle."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'hoax',
    definition: "a trick or a lie meant to deceive people",
    sentence: "The story about the UFO landing turned out to be a hoax."
  },
  {
    word: 'hoax',
    definition: "a false story or event created to deceive others",
    sentence: "They played a hoax on their friends by pretending they had won the lottery."
  },
  {
    word: 'holiday',
    definition: "a special day for celebrating or resting",
    sentence: "We are going on a holiday to the beach next week."
  },
  {
    word: 'holiday',
    definition: "a time when you take a break from work or school",
    sentence: "She spent her holiday visiting family in another city."
  },
  {
    word: 'hollow',
    definition: "empty inside, not filled with anything",
    sentence: "The tree had a hollow in the trunk where animals could live."
  },
  {
    word: 'hollow',
    definition: "having an empty space inside",
    sentence: "The hollow sound echoed through the cave when we tapped the walls."
  },
  {
    word: 'humble',
    definition: "modest or not proud, not thinking you are better than others",
    sentence: "Even though she won the race, she was humble and didn't brag."
  },
  {
    word: 'humble',
    definition: "having a low opinion of yourself or your achievements",
    sentence: "He remained humble, even after receiving many compliments."
  },
  {
    word: 'hygienic',
    definition: "clean or promoting good health by being clean",
    sentence: "It is important to keep your hands hygienic by washing them often."
  },
  {
    word: 'hygienic',
    definition: "helping to maintain good health by being clean and neat",
    sentence: "The restaurant maintained hygienic standards to ensure food safety."
  },
  {
    word: 'idiosyncrasy',
    definition: "a characteristic or habit that is strange or unusual",
    sentence: "One of her idiosyncrasies is always wearing socks with sandals."
  },
  {
    word: 'idiosyncrasy',
    definition: "a personal habit or way of doing something that is unique to someone",
    sentence: "He had the idiosyncrasy of tapping his fingers when he was nervous."
  },
  {
    word: 'idle',
    definition: "not doing anything, not being used",
    sentence: "The car sat idle in the garage for months without being driven."
  },
  {
    word: 'idle',
    definition: "lazy, not working or not being used for anything",
    sentence: "She spent a lot of time idle on the couch watching TV."
  },
  {
    word: 'idol',
    definition: "a person who is admired or loved by many people",
    sentence: "The singer became a pop idol after her first album."
  },
  {
    word: 'idol',
    definition: "a figure or statue that people worship or admire",
    sentence: "The children had posters of their favorite idols on their bedroom walls."
  },
  {
    word: 'ignorant',
    definition: "not knowing something or lacking knowledge about it",
    sentence: "He was ignorant of the rules and made a mistake during the game."
  },
  {
    word: 'ignorant',
    definition: "showing a lack of knowledge or understanding",
    sentence: "She was ignorant of the fact that her friend was upset."
  },
  {
    word: 'imitate',
    definition: "to copy someoneâ€™s actions or behavior",
    sentence: "The little boy liked to imitate his dad when he was working on the car."
  },
  {
    word: 'imitate',
    definition: "to pretend to be like someone or something",
    sentence: "She tried to imitate the way her teacher spoke during class."
  },
  {
    word: 'immediate',
    definition: "happening right away, without delay",
    sentence: "The teacher gave immediate feedback to the student after the test."
  },
  {
    word: 'immediate',
    definition: "happening instantly, right at that moment",
    sentence: "She felt an immediate connection with her new friend."
  },
  {
    word: 'immediately',
    definition: "right away, without any delay",
    sentence: "When the bell rings, we will immediately go to our next class."
  },
  {
    word: 'immediately',
    definition: "right after something happens, quickly",
    sentence: "He was immediately sorry for what he had said to his friend."
  },
  {
    word: 'immerse',
    definition: "to put something into a liquid, completely cover it",
    sentence: "You need to immerse the fabric in water to soak it."
  },
  {
    word: 'immerse',
    definition: "to deeply involve yourself in something or focus on it",
    sentence: "She immersed herself in her book and didnâ€™t notice the time pass."
  },
  {
    word: 'impudent',
    definition: "rude or disrespectful in behavior",
    sentence: "The impudent child yelled at the teacher when she asked him to be quiet."
  },
  {
    word: 'impudent',
    definition: "acting without respect, especially towards authority",
    sentence: "His impudent attitude got him into trouble with the principal."
  },
  {
    word: 'in between',
    definition: "the space or time between two things",
    sentence: "She stood in between her two best friends during the photo."
  },
  {
    word: 'in between',
    definition: "in the middle of two things",
    sentence: "The book was placed in between the two vases on the shelf."
  },
  {
    word: 'in fact',
    definition: "used to emphasize something that is true or real",
    sentence: "In fact, she is the best dancer in the class."
  },
  {
    word: 'in fact',
    definition: "actually or truly, in reality",
    sentence: "The story was not just a rumour, in fact, it was true."
  },
  {
    word: 'in front',
    definition: "located ahead of or facing you",
    sentence: "The car parked in front of my house last night."
  },
  {
    word: 'in front',
    definition: "the part of something that faces forward",
    sentence: "I stood in front of the class to present my project."
  },
  {
    word: 'inaudible',
    definition: "so quiet that it can't be heard",
    sentence: "Her whisper was inaudible, and no one could understand what she said."
  },
  {
    word: 'inaudible',
    definition: "too soft or quiet to hear clearly",
    sentence: "The sound of the wind was inaudible from inside the house."
  },
  {
    word: 'inaugural',
    definition: "the first event or occurrence of something",
    sentence: "The inaugural concert was a huge success, with many people attending."
  },
  {
    word: 'inaugural',
    definition: "related to the first in a series of events",
    sentence: "The inaugural flight of the new airplane was celebrated by the airline."
  },
  {
    word: 'inaugurate',
    definition: "to officially start something new",
    sentence: "The mayor will inaugurate the new park with a ceremony."
  },
  {
    word: 'inaugurate',
    definition: "to begin or introduce something important",
    sentence: "They will inaugurate the new school year with a special assembly."
  },
  {
    word: 'incision',
    definition: "a cut made in the surface of something, especially in the skin",
    sentence: "The surgeon made a small incision to remove the tumour."
  },
  {
    word: 'incision',
    definition: "a surgical cut or wound",
    sentence: "The doctor made an incision to help treat the injury."
  },
  {
    word: 'inconspicuous',
    definition: "not easily seen or noticed, blending in with surroundings",
    sentence: "The thief tried to remain inconspicuous as he walked through the store."
  },
  {
    word: 'inconspicuous',
    definition: "not attracting attention or obvious to others",
    sentence: "Her inconspicuous outfit made her blend in with the crowd."
  },
  {
    word: 'individual',
    definition: "a single person or thing, separate from others",
    sentence: "Each individual is unique in their own way."
  },
  {
    word: 'individual',
    definition: "a person, especially one who is considered separately from a group",
    sentence: "He is an individual who loves to solve problems on his own."
  },
  {
    word: 'inedible',
    definition: "not safe to eat or taste",
    sentence: "The fruit was rotten and inedible, so we had to throw it away."
  },
  {
    word: 'inedible',
    definition: "not able to be eaten, often because it is spoiled or toxic",
    sentence: "The mushroom was inedible, so I didn't even touch it."
  },
  {
    word: 'inferior',
    definition: "not as good as something else, lower in quality",
    sentence: "The shoes I bought were inferior to the ones I had before."
  },
  {
    word: 'inferior',
    definition: "lower in rank or quality compared to something else",
    sentence: "The inferior quality of the food led to complaints."
  },
  {
    word: 'influence',
    definition: "the ability to change or affect something or someone",
    sentence: "Her words had a big influence on the way I think."
  },
  {
    word: 'influence',
    definition: "to have an effect on someone or something",
    sentence: "Parents often influence their childrenâ€™s choices and decisions."
  },
  {
    word: 'inhabit',
    definition: "to live in a place or area",
    sentence: "Lions inhabit the grasslands and savannas of Africa."
  },
  {
    word: 'inhabit',
    definition: "to dwell or live in a specific location",
    sentence: "Many species of birds inhabit the forest during the summer."
  },
  {
    word: 'inhabitants',
    definition: "the people or animals that live in a place",
    sentence: "The inhabitants of the village all knew each other well."
  },
  {
    word: 'inhabitants',
    definition: "the creatures or people that live in an area",
    sentence: "The forestâ€™s inhabitants include various animals like foxes and deer."
  },
  {
    word: 'innocuous',
    definition: "not harmful or dangerous",
    sentence: "The insect was innocuous and harmless, so I let it crawl on my hand."
  },
  {
    word: 'innocuous',
    definition: "harmless or not likely to cause any damage",
    sentence: "The comment he made was innocuous and didnâ€™t offend anyone."
  },
  {
    word: 'insane',
    definition: "not sane, mentally ill or crazy",
    sentence: "The idea of flying to the moon without any protection seemed insane."
  },
  {
    word: 'insane',
    definition: "extremely unreasonable or crazy",
    sentence: "It was insane to think we could finish the project in one hour."
  },
  {
    word: 'insert',
    definition: "to put something into a space or place",
    sentence: "He inserted the key into the lock and turned it."
  },
  {
    word: 'insert',
    definition: "to add or place something into another thing",
    sentence: "She will insert the data into the computer for the report."
  },
  {
    word: 'insolent',
    definition: "rude and disrespectful",
    sentence: "His insolent behaviour made the teacher very angry."
  },
  {
    word: 'insolent',
    definition: "showing a lack of respect or rudeness",
    sentence: "The insolent student ignored the teacherâ€™s instructions."
  },
  {
    word: 'inspire',
    definition: "to give someone the desire or confidence to do something",
    sentence: "Her speech inspired me to start learning to play the piano."
  },
  {
    word: 'inspire',
    definition: "to encourage someone to take action or be creative",
    sentence: "The artistâ€™s work inspired many people to try painting."
  },
  {
    word: 'intangible',
    definition: "something that cannot be touched or seen but can be felt",
    sentence: "The feeling of love is intangible, but everyone knows when itâ€™s present."
  },
  {
    word: 'intangible',
    definition: "unable to be touched or physically measured",
    sentence: "The idea of freedom is intangible, but itâ€™s very important to people."
  },
  {
    word: 'intense',
    definition: "extremely strong or powerful",
    sentence: "The intense heat from the sun made the sand too hot to walk on."
  },
  {
    word: 'intense',
    definition: "very strong or extreme in feeling or experience",
    sentence: "The intense workout left her feeling exhausted."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'intention',
    definition: "a plan or goal to do something",
    sentence: "Her intention was to become a doctor to help people."
  },
  {
    word: 'intention',
    definition: "what someone plans or wants to do",
    sentence: "His intention was to finish the homework before going outside."
  },
  {
    word: 'interested',
    definition: "showing curiosity or concern about something",
    sentence: "She was interested in learning how to play the guitar."
  },
  {
    word: 'interested',
    definition: "having a strong liking or desire to know about something",
    sentence: "He was interested in space and always read books about planets."
  },
  {
    word: 'interfere',
    definition: "to get involved in a situation where youâ€™re not needed",
    sentence: "Please donâ€™t interfere with my work; I need to focus."
  },
  {
    word: 'interfere',
    definition: "to interrupt or disturb someone or something",
    sentence: "The dog will often interfere when youâ€™re trying to study."
  },
  {
    word: 'interior',
    definition: "the inside part of something",
    sentence: "The interior of the house was decorated in bright colours."
  },
  {
    word: 'interior',
    definition: "the inside space of a building or object",
    sentence: "We looked at the interior of the car to see how much space it had."
  },
  {
    word: 'interpret',
    definition: "to explain or understand the meaning of something",
    sentence: "She helped me interpret the poem, so I understood it better."
  },
  {
    word: 'interpret',
    definition: "to translate or explain something clearly",
    sentence: "Can you interpret these instructions for me? I donâ€™t understand them."
  },
  {
    word: 'interrogate',
    definition: "to ask someone a lot of questions, often in an official way",
    sentence: "The police will interrogate the suspect to find out what happened."
  },
  {
    word: 'interrogate',
    definition: "to question someone thoroughly and persistently",
    sentence: "The teacher had to interrogate the students to find out who was responsible."
  },
  {
    word: 'interrupt',
    definition: "to stop someone from speaking or doing something",
    sentence: "He interrupted the conversation to tell everyone the news."
  },
  {
    word: 'interrupt',
    definition: "to disturb or break in during a conversation",
    sentence: "I was talking when my brother interrupted and started speaking loudly."
  },
  {
    word: 'invalid',
    definition: "something that is not correct, not accepted, or not allowed",
    sentence: "The ticket was invalid because it was expired."
  },
  {
    word: 'invalid',
    definition: "not legally or officially acceptable",
    sentence: "He was told the document was invalid and needed to be corrected."
  },
  {
    word: 'isolation',
    definition: "the state of being alone or separated from others",
    sentence: "She felt a sense of isolation when she moved to a new city."
  },
  {
    word: 'isolation',
    definition: "being separated from others for a time",
    sentence: "The country went into isolation during the war to protect itself."
  },
  {
    word: 'justice',
    definition: "fair treatment based on what is right",
    sentence: "The judge made sure that justice was served in the court case."
  },
  {
    word: 'justice',
    definition: "the quality of being fair and just to everyone",
    sentence: "The teacher promised to give justice to both students in the argument."
  },
  {
    word: 'labour',
    definition: "work, especially hard physical work",
    sentence: "Farmers do a lot of labour in the fields to grow food."
  },
  {
    word: 'labour',
    definition: "to do hard physical work",
    sentence: "He laboured all day to finish his project before the deadline."
  },
  {
    word: 'lament',
    definition: "to express sadness or grief about something",
    sentence: "She lamented the loss of her childhood pet."
  },
  {
    word: 'lament',
    definition: "to feel or express sorrow for something lost or gone",
    sentence: "They lamented the end of their favourite TV show."
  },
  {
    word: 'language',
    definition: "a system of communication using words or symbols",
    sentence: "Spanish is a beautiful language that many people speak."
  },
  {
    word: 'language',
    definition: "the words, sounds, and gestures used for communication",
    sentence: "He is learning a new language to talk to his family members."
  },
  {
    word: 'latter',
    definition: "referring to the second of two things mentioned",
    sentence: "I would prefer the latter option because it looks more fun."
  },
  {
    word: 'latter',
    definition: "the second one mentioned, compared to the first",
    sentence: "Of the two books, I enjoyed the latter one more."
  },
  {
    word: 'lavish',
    definition: "extravagant, rich, or luxurious",
    sentence: "They had a lavish party with expensive decorations and food."
  },
  {
    word: 'lavish',
    definition: "giving or using more than necessary, often in a showy way",
    sentence: "The hotel room was lavish, with a giant bed and fancy furniture."
  },
  {
    word: 'lean',
    definition: "to bend or incline towards something",
    sentence: "She leaned against the wall while waiting for her friends."
  },
  {
    word: 'lean',
    definition: "having little or no fat on the body",
    sentence: "The athlete had a lean body from all the training and exercise."
  },
  {
    word: 'leisure',
    definition: "time when you are not working or busy, free time",
    sentence: "On weekends, she enjoys spending her leisure time reading books."
  },
  {
    word: 'leisure',
    definition: "time spent relaxing and enjoying activities you like",
    sentence: "He went to the park during his leisure time to play soccer."
  },
  {
    word: 'lenient',
    definition: "not strict, being kind or forgiving",
    sentence: "The teacher was lenient with the students who were late to class."
  },
  {
    word: 'lenient',
    definition: "allowing some freedom or being less harsh",
    sentence: "The coach was lenient and gave the players a few extra minutes to warm up."
  },
  {
    word: 'liable',
    definition: "likely to do something, especially something bad or wrong",
    sentence: "Sheâ€™s liable to be upset if you donâ€™t include her in the game."
  },
  {
    word: 'liable',
    definition: "responsible or accountable for something",
    sentence: "He is liable for paying for the damages caused by the accident."
  },
  {
    word: 'liberal',
    definition: "open to new ideas and changes, not strict",
    sentence: "He has a liberal view on how people should be treated equally."
  },
  {
    word: 'liberal',
    definition: "willing to give more freedom and opportunities to others",
    sentence: "The liberal policies in the country helped improve education and healthcare."
  },
  {
    word: 'liberty',
    definition: "the state of being free to do what you want",
    sentence: "In the country, people enjoy liberty and have the freedom to speak their minds."
  },
  {
    word: 'liberty',
    definition: "freedom from control or restriction by others",
    sentence: "The statue of liberty stands as a symbol of freedom."
  },
  {
    word: 'library',
    definition: "a place where books are kept and borrowed",
    sentence: "I went to the library to find a book for my school project."
  },
  {
    word: 'library',
    definition: "a building where you can borrow books and study",
    sentence: "The library is open every day except for Sunday."
  },
  {
    word: 'lightning',
    definition: "a flash of light caused by electricity in the sky",
    sentence: "We watched the lightning strike the tree during the thunderstorm."
  },
  {
    word: 'lightning',
    definition: "a sudden flash of light in the sky during a storm",
    sentence: "The lightning lit up the sky, making everything visible for a moment."
  },
  {
    word: 'limb',
    definition: "an arm or a leg of the body",
    sentence: "He broke his limb while playing soccer, but it healed quickly."
  },
  {
    word: 'limb',
    definition: "a part of the body used for movement, like an arm or leg",
    sentence: "The monkey swung from limb to limb in the tree."
  },
  {
    word: 'limit',
    definition: "a point beyond which something cannot go",
    sentence: "There is a speed limit of 30 mph on this road."
  },
  {
    word: 'limit',
    definition: "the greatest amount or number allowed or possible",
    sentence: "We have a limit of five items in the basket to checkout."
  },
  {
    word: 'linger',
    definition: "to stay longer than necessary or expected",
    sentence: "She decided to linger after the meeting to chat with her friends."
  },
  {
    word: 'linger',
    definition: "to delay leaving a place, especially because you want to stay longer",
    sentence: "He lingered in the park because he liked the peaceful atmosphere."
  },
  {
    word: 'lodge',
    definition: "a small house or shelter, especially in the mountains",
    sentence: "We stayed in a lodge during our ski trip."
  },
  {
    word: 'lodge',
    definition: "to stay temporarily in a place, like a hotel or cabin",
    sentence: "They will lodge in a hotel until they find a new home."
  },
  {
    word: 'lofty',
    definition: "high or elevated in position, height, or status",
    sentence: "The lofty mountain peaks were covered in snow."
  },
  {
    word: 'lofty',
    definition: "having grand or impressive ideas or ambitions",
    sentence: "He had lofty goals to become a scientist and change the world."
  },
  {
    word: 'loneliness',
    definition: "the feeling of being alone or not having anyone to talk to",
    sentence: "She felt a deep sense of loneliness when her friends moved away."
  },
  {
    word: 'loneliness',
    definition: "a feeling of sadness because of being alone",
    sentence: "He experienced loneliness when he had to leave his hometown."
  },
  {
    word: 'loyal',
    definition: "faithful or true to someone or something",
    sentence: "The loyal dog always stayed by his ownerâ€™s side."
  },
  {
    word: 'loyal',
    definition: "always supporting someone or something",
    sentence: "She was loyal to her best friend and never let anyone come between them."
  },
  {
    word: 'majestic',
    definition: "grand and impressive in appearance",
    sentence: "The majestic castle stood tall on the hill, overlooking the town."
  },
  {
    word: 'majestic',
    definition: "having a grand or royal quality",
    sentence: "The majestic eagle flew high in the sky, soaring above the mountains."
  },
  {
    word: 'malady',
    definition: "a sickness or disease",
    sentence: "The flu is a common malady that affects many people in winter."
  },
  {
    word: 'malady',
    definition: "a problem or difficulty, especially with health",
    sentence: "The doctor helped treat his malady and he soon felt better."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'margin',
    definition: "the space between the edge of a page and the text",
    sentence: "Make sure to leave a margin around your drawing so it doesnâ€™t touch the edges."
  },
  {
    word: 'margin',
    definition: "an amount of space or difference",
    sentence: "The margin of victory in the race was only a few seconds."
  },
  {
    word: 'mariner',
    definition: "a person who works on a ship",
    sentence: "The mariner sailed across the ocean to explore new lands."
  },
  {
    word: 'mariner',
    definition: "someone who works or navigates a ship",
    sentence: "The mariner taught the crew how to steer the ship during storms."
  },
  {
    word: 'matte',
    definition: "a surface that is not shiny or glossy",
    sentence: "The photo has a matte finish, so it doesnâ€™t reflect light."
  },
  {
    word: 'matte',
    definition: "a type of finish that is not shiny or glossy",
    sentence: "I prefer the matte version of the painting because it looks more natural."
  },
  {
    word: 'maximum',
    definition: "the greatest or highest amount possible",
    sentence: "The maximum score you can get on the test is 100."
  },
  {
    word: 'maximum',
    definition: "the largest or most that is allowed",
    sentence: "The speed limit on this road is 70 mph, which is the maximum allowed."
  },
  {
    word: 'meagre',
    definition: "small in quantity or quality",
    sentence: "He was only given a meagre amount of food for the day."
  },
  {
    word: 'meagre',
    definition: "insufficient or lacking in amount or quality",
    sentence: "They lived on a meagre diet during the winter months."
  },
  {
    word: 'meant',
    definition: "intended or planned to do something",
    sentence: "The teacher meant to give us homework, but forgot."
  },
  {
    word: 'meant',
    definition: "the intended or planned purpose",
    sentence: "The toy was meant to be a gift for her birthday."
  },
  {
    word: 'merchant',
    definition: "a person who buys and sells things as a business",
    sentence: "The merchant sold fruits and vegetables at the market."
  },
  {
    word: 'merchant',
    definition: "someone who buys and sells goods",
    sentence: "The merchant traded spices with people from other countries."
  },
  {
    word: 'mercy',
    definition: "kindness or forgiveness shown to someone",
    sentence: "The king showed mercy to the prisoners and let them go free."
  },
  {
    word: 'mercy',
    definition: "showing kindness when you have the power to punish",
    sentence: "He begged for mercy, hoping the teacher would not give him detention."
  },
  {
    word: 'mere',
    definition: "nothing more than, just",
    sentence: "It was a mere mistake that didnâ€™t hurt anyone."
  },
  {
    word: 'mere',
    definition: "small, insignificant or only",
    sentence: "It was a mere scratch on the car, nothing to worry about."
  },
  {
    word: 'meticulous',
    definition: "showing great attention to detail, careful",
    sentence: "She was meticulous about cleaning every corner of the house."
  },
  {
    word: 'meticulous',
    definition: "very careful and precise about small details",
    sentence: "He made meticulous plans for the event to ensure everything went well."
  },
  {
    word: 'minimum',
    definition: "the least or smallest amount",
    sentence: "The minimum number of people needed to play the game is two."
  },
  {
    word: 'minimum',
    definition: "the lowest or smallest possible amount",
    sentence: "You must have a minimum of $10 to buy the ticket."
  },
  {
    word: 'moderate',
    definition: "not too much or too little, just enough",
    sentence: "He gave a moderate amount of effort during practice, so he wasnâ€™t too tired."
  },
  {
    word: 'moderate',
    definition: "having a middle amount, not extreme",
    sentence: "She prefers a moderate temperature for the room, not too hot or too cold."
  },
  {
    word: 'modest',
    definition: "not showing too much pride or boastfulness",
    sentence: "He is modest about his achievements and doesnâ€™t brag."
  },
  {
    word: 'modest',
    definition: "humble or simple in style",
    sentence: "She wore a modest dress to the party that wasnâ€™t too fancy."
  },
  {
    word: 'moral',
    definition: "having to do with what is right or wrong",
    sentence: "The story has a moral lesson about kindness and helping others."
  },
  {
    word: 'moral',
    definition: "teaching right from wrong, especially in behaviour",
    sentence: "He learned a moral lesson from the book about being honest."
  },
  {
    word: 'mortal',
    definition: "able to die, not immortal",
    sentence: "Humans are mortal and cannot live forever."
  },
  {
    word: 'mortal',
    definition: "of or relating to humans or their death",
    sentence: "The mortal danger of climbing without safety gear is real."
  },
  {
    word: 'mysterious',
    definition: "something that is difficult to understand or explain",
    sentence: "The old house has a mysterious atmosphere because itâ€™s so quiet and dark."
  },
  {
    word: 'mysterious',
    definition: "something that is unknown or puzzling",
    sentence: "There was a mysterious noise coming from the attic."
  },
  {
    word: 'nauseous',
    definition: "feeling like you want to vomit",
    sentence: "I felt nauseous after the ride because it was too fast."
  },
  {
    word: 'nauseous',
    definition: "feeling sick or uncomfortable in the stomach",
    sentence: "The smell of the garbage made her feel nauseous."
  },
  {
    word: 'neat',
    definition: "clean, tidy, or organized",
    sentence: "Her room is always neat and organized, with everything in its place."
  },
  {
    word: 'neat',
    definition: "arranged in a tidy and orderly way",
    sentence: "His handwriting is very neat, and itâ€™s easy to read."
  },
  {
    word: 'necessary',
    definition: "something that is needed or required",
    sentence: "It is necessary to wear a helmet when riding a bike."
  },
  {
    word: 'necessary',
    definition: "required or essential for something",
    sentence: "Itâ€™s necessary to have a passport for international travel."
  },
  {
    word: 'nimble',
    definition: "quick and light in movement or action",
    sentence: "The nimble cat jumped easily from one fence to another."
  },
  {
    word: 'nimble',
    definition: "able to move quickly and easily",
    sentence: "The nimble dancer spun across the stage without missing a step."
  },
  {
    word: 'no one',
    definition: "not a single person",
    sentence: "No one showed up to the party, so we played games alone."
  },
  {
    word: 'no one',
    definition: "no person at all",
    sentence: "No one knew the answer to the tricky riddle."
  },
  {
    word: 'noted',
    definition: "well-known or famous",
    sentence: "He is a noted scientist in the field of biology."
  },
  {
    word: 'noted',
    definition: "important or well-known for something",
    sentence: "She is a noted artist who has won many awards."
  },
  {
    word: 'nuisance',
    definition: "something that causes trouble or annoyance",
    sentence: "The loud music was a nuisance to the neighbours."
  },
  {
    word: 'nuisance',
    definition: "a person or thing causing inconvenience or annoyance",
    sentence: "The mosquitoes were a real nuisance during our camping trip."
  },
  {
    word: 'nurseryman',
    definition: "a person who grows and sells plants",
    sentence: "The nurseryman helped us pick out the best flowers for our garden."
  },
  {
    word: 'nurseryman',
    definition: "someone who works with plants and gardens",
    sentence: "The nurseryman taught me how to take care of the new plants."
  },
  {
    word: 'oath',
    definition: "a serious promise or vow to do something",
    sentence: "He made an oath to always tell the truth."
  },
  {
    word: 'oath',
    definition: "a formal promise, especially one sworn to keep a commitment",
    sentence: "The soldier took an oath to protect the country."
  },
  {
    word: 'object',
    definition: "a thing that you can see or touch, but not a living thing",
    sentence: "The toy is an object I play with every day."
  },
  {
    word: 'object',
    definition: "a thing or item that has a purpose",
    sentence: "She picked up the object from the table and held it carefully."
  },
  {
    word: 'objection',
    definition: "a reason or statement for disagreeing with something",
    sentence: "He raised an objection to the proposal, saying it wasnâ€™t fair."
  },
  {
    word: 'objection',
    definition: "an expression of disagreement or disapproval",
    sentence: "She had an objection to the rules of the game and spoke up."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'oblige',
    definition: "to do something for someone because it is necessary or required",
    sentence: "I will oblige and help you with your homework since you asked kindly."
  },
  {
    word: 'oblige',
    definition: "to make someone do something because of a rule or law",
    sentence: "The teacher will oblige us to follow the classroom rules."
  },
  {
    word: 'obscure',
    definition: "to make something difficult to see or understand",
    sentence: "The fog obscured the view of the mountains."
  },
  {
    word: 'obscure',
    definition: "not well known or hard to understand",
    sentence: "The meaning of the poem was obscure, so we had to read it several times."
  },
  {
    word: 'obstinate',
    definition: "stubborn, refusing to change your mind or behaviour",
    sentence: "The obstinate child refused to eat vegetables, even though they were healthy."
  },
  {
    word: 'obstinate',
    definition: "being very determined and difficult to change",
    sentence: "The obstinate dog refused to leave the yard, no matter how much we called."
  },
  {
    word: 'occupy',
    definition: "to fill or take up space or time",
    sentence: "The book will occupy your time while you're waiting for the bus."
  },
  {
    word: 'occupy',
    definition: "to live in or use a place or space",
    sentence: "He occupies the seat near the window every day on the bus."
  },
  {
    word: 'occur',
    definition: "to happen or take place",
    sentence: "The accident occurred during the rainstorm."
  },
  {
    word: 'occur',
    definition: "to come to mind or be thought of",
    sentence: "The idea for the game suddenly occurred to me."
  },
  {
    word: 'odour',
    definition: "a smell, especially a bad one",
    sentence: "The odour of rotten food filled the kitchen."
  },
  {
    word: 'odour',
    definition: "a scent or smell",
    sentence: "She noticed the pleasant odour of fresh flowers in the garden."
  },
  {
    word: 'offend',
    definition: "to make someone feel upset or hurt because of your actions or words",
    sentence: "He didnâ€™t mean to offend anyone, but his joke upset a few people."
  },
  {
    word: 'offend',
    definition: "to upset someone or break a rule",
    sentence: "It was rude to offend the teacher by talking during class."
  },
  {
    word: 'omen',
    definition: "a sign or feeling that something will happen in the future",
    sentence: "The black cat crossing the street is often considered an omen of bad luck."
  },
  {
    word: 'omen',
    definition: "a sign of something that may happen later",
    sentence: "The dark clouds were an omen of the upcoming storm."
  },
  {
    word: 'opportunity',
    definition: "a chance to do something",
    sentence: "She had the opportunity to travel to another country for work."
  },
  {
    word: 'opportunity',
    definition: "a good chance for success or progress",
    sentence: "This is an opportunity for you to improve your skills."
  },
  {
    word: 'oppose',
    definition: "to disagree with or try to stop something",
    sentence: "I oppose the idea of skipping school tomorrow."
  },
  {
    word: 'oppose',
    definition: "to fight against something or someone",
    sentence: "They will oppose the plan if itâ€™s unfair."
  },
  {
    word: 'oppress',
    definition: "to treat someone unfairly or cruelly",
    sentence: "The government used their power to oppress the people."
  },
  {
    word: 'oppress',
    definition: "to keep someone down or prevent their freedom",
    sentence: "The workers felt oppressed because they had to work long hours without rest."
  },
  {
    word: 'option',
    definition: "a choice or alternative",
    sentence: "You have the option to choose your favourite dessert after dinner."
  },
  {
    word: 'option',
    definition: "a thing that you can choose from",
    sentence: "There were many options to choose from at the buffet."
  },
  {
    word: 'ordeal',
    definition: "a difficult or painful experience",
    sentence: "The long hike in the heat was an ordeal, but we made it to the top."
  },
  {
    word: 'ordeal',
    definition: "a tough or challenging experience",
    sentence: "The ordeal of waiting for the test results made her anxious."
  },
  {
    word: 'origin',
    definition: "the beginning or start of something",
    sentence: "The origin of the tradition goes back hundreds of years."
  },
  {
    word: 'origin',
    definition: "where something comes from or starts",
    sentence: "The origin of the word â€˜computerâ€™ comes from Latin."
  },
  {
    word: 'orthodontist',
    definition: "a dentist who fixes crooked teeth",
    sentence: "The orthodontist put braces on my teeth to straighten them."
  },
  {
    word: 'orthodontist',
    definition: "a specialist who takes care of teeth and jaws",
    sentence: "I have an appointment with the orthodontist to adjust my braces."
  },
  {
    word: 'ostentatious',
    definition: "showing off in a way that tries to impress others",
    sentence: "Her ostentatious dress had sparkles and was much too fancy for the occasion."
  },
  {
    word: 'ostentatious',
    definition: "trying to attract attention with fancy things",
    sentence: "He wore an ostentatious watch that everyone noticed."
  },
  {
    word: 'paid',
    definition: "to give money for something or for work",
    sentence: "She was paid for her work as a babysitter."
  },
  {
    word: 'paid',
    definition: "having received money for something",
    sentence: "I received a paid holiday for my hard work at the company."
  },
  {
    word: 'painstaking',
    definition: "showing a lot of care and effort",
    sentence: "He completed the painstaking puzzle, putting each piece in place carefully."
  },
  {
    word: 'painstaking',
    definition: "done with great attention to detail",
    sentence: "The artist did painstaking work on the painting to make it perfect."
  },
  {
    word: 'palaeontologist',
    definition: "a scientist who studies fossils and ancient life",
    sentence: "The palaeontologist discovered a new dinosaur fossil in the desert."
  },
  {
    word: 'palaeontologist',
    definition: "a person who looks for and studies old remains of plants and animals",
    sentence: "The palaeontologist studied the bones of ancient animals to learn more about them."
  },
  {
    word: 'parallel',
    definition: "lines or things that run in the same direction and never meet",
    sentence: "The two roads run parallel to each other, side by side."
  },
  {
    word: 'parallel',
    definition: "similar or happening at the same time",
    sentence: "Her situation is parallel to mine because we both are starting new schools."
  },
  {
    word: 'Parliament',
    definition: "a group of people who make laws for the country",
    sentence: "The Prime Minister spoke in Parliament about new rules."
  },
  {
    word: 'Parliament',
    definition: "the group of elected leaders who help make decisions in a country",
    sentence: "The new law was passed by Parliament after much discussion."
  },
  {
    word: 'passive',
    definition: "not active, allowing things to happen without taking action",
    sentence: "He was passive in the argument, just letting others speak."
  },
  {
    word: 'passive',
    definition: "not participating or doing things yourself",
    sentence: "The cat took a passive role in the game and watched the others play."
  },
  {
    word: 'pasture',
    definition: "land covered with grass where animals, especially cows, can eat",
    sentence: "The cows were grazing in the pasture all afternoon."
  },
  {
    word: 'pasture',
    definition: "an area of land for grazing animals",
    sentence: "The sheep were happy in the large pasture near the barn."
  },
  {
    word: 'peak',
    definition: "the highest point of something",
    sentence: "The climbers reached the peak of the mountain after hours of effort."
  },
  {
    word: 'peak',
    definition: "the top or highest part of something",
    sentence: "We finally reached the peak of the hill and saw the beautiful view."
  },
  {
    word: 'peculiar',
    definition: "strange or unusual",
    sentence: "The peculiar noise from the attic made me curious."
  },
  {
    word: 'peculiar',
    definition: "different from what is normal or expected",
    sentence: "Her peculiar behaviour surprised everyone at the party."
  },
  {
    word: 'perceive',
    definition: "to see, hear, or become aware of something",
    sentence: "I perceive that you are upset, is something wrong?"
  },
  {
    word: 'perceive',
    definition: "to think or understand something in a certain way",
    sentence: "He perceived the situation as a chance to improve."
  },
  {
    word: 'peril',
    definition: "great danger",
    sentence: "The hikers were in peril when the storm arrived unexpectedly."
  },
  {
    word: 'peril',
    definition: "something that could cause harm or danger",
    sentence: "Swimming in the ocean without a lifejacket is a peril to your safety."
  },
  {
    word: 'perilous',
    definition: "full of danger",
    sentence: "The perilous journey through the jungle was dangerous but exciting."
  },
  {
    word: 'perilous',
    definition: "dangerous or risky",
    sentence: "Climbing the cliff without proper equipment is perilous."
  },
  {
    word: 'perish',
    definition: "to die or be destroyed",
    sentence: "Many plants will perish if they do not get enough water."
  },
  {
    word: 'perish',
    definition: "to stop existing or living",
    sentence: "If the fire isnâ€™t put out, the forest could perish."
  },
  {
    word: 'permit',
    definition: "to allow or give permission for something",
    sentence: "My parents permit me to go to the movies on weekends."
  },
  {
    word: 'permit',
    definition: "to give official permission to do something",
    sentence: "The park permits visitors to bring picnic food."
  },
  {
    word: 'perplexed',
    definition: "confused or unsure",
    sentence: "He was perplexed by the complicated puzzle and didnâ€™t know where to start."
  },
  {
    word: 'perplexed',
    definition: "feeling unsure or confused about something",
    sentence: "The perplexed student couldnâ€™t figure out the answer to the math problem."
  },
  {
    word: 'persuade',
    definition: "to convince someone to believe or do something",
    sentence: "She tried to persuade her friend to join her in the game."
  },
  {
    word: 'persuade',
    definition: "to convince or encourage someone to do something",
    sentence: "I persuaded my brother to try the new ice cream flavour."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'physical',
    definition: "related to the body or things you can touch",
    sentence: "Physical activities like running and swimming help keep you healthy."
  },
  {
    word: 'physical',
    definition: "something you can feel, touch, or see",
    sentence: "The physical challenge of climbing the mountain was tough, but exciting."
  },
  {
    word: 'physiotherapy',
    definition: "treatment to help you recover from injuries or health problems",
    sentence: "After breaking his leg, he needed physiotherapy to help him walk again."
  },
  {
    word: 'physiotherapy',
    definition: "therapy that helps people recover movement and strength after injury",
    sentence: "She had physiotherapy to heal her sprained ankle."
  },
  {
    word: 'pigment',
    definition: "a colour or substance used to colour something",
    sentence: "The artist used blue pigment to paint the sky."
  },
  {
    word: 'pigment',
    definition: "a material that gives things their colour",
    sentence: "The pigment in the flower made it bright yellow."
  },
  {
    word: 'pioneer',
    definition: "someone who is the first to do something or explore something",
    sentence: "The pioneer explored unknown lands and mapped them for others."
  },
  {
    word: 'pioneer',
    definition: "a person who starts something new or leads the way",
    sentence: "She was a pioneer in the world of science, discovering new things."
  },
  {
    word: 'placid',
    definition: "calm and peaceful",
    sentence: "The placid lake looked beautiful in the early morning light."
  },
  {
    word: 'placid',
    definition: "calm and not excited or disturbed",
    sentence: "His placid attitude made him great at solving problems without getting stressed."
  },
  {
    word: 'pledge',
    definition: "a promise or commitment to do something",
    sentence: "He made a pledge to help clean up the park every Saturday."
  },
  {
    word: 'pledge',
    definition: "to promise or agree to do something",
    sentence: "She pledged to always be honest and kind to others."
  },
  {
    word: 'plume',
    definition: "a feather, often a large one",
    sentence: "The bird had a beautiful, colourful plume on its head."
  },
  {
    word: 'plume',
    definition: "a long, soft feather, often worn as decoration",
    sentence: "The hat had a bright feather plume that stood out."
  },
  {
    word: 'plunder',
    definition: "to steal things, especially in a violent or forceful way",
    sentence: "Pirates plundered the ships and took all the treasure."
  },
  {
    word: 'plunder',
    definition: "to take things by force, usually during a fight or war",
    sentence: "The village was plundered by the invaders who took everything they could."
  },
  {
    word: 'plunge',
    definition: "to jump or fall into something, often quickly or suddenly",
    sentence: "He took a deep breath before he decided to plunge into the cold water."
  },
  {
    word: 'plunge',
    definition: "to fall or dive quickly into something",
    sentence: "The diver plunged into the pool from the high platform."
  },
  {
    word: 'polarity',
    definition: "the difference or opposites of something, such as north and south poles",
    sentence: "The Earthâ€™s magnetic poles have a strong polarity."
  },
  {
    word: 'polarity',
    definition: "the state of having two opposite parts or forces",
    sentence: "The polarity of the two magnets made them push away from each other."
  },
  {
    word: 'pompous',
    definition: "being overly proud or showing off, often in a way thatâ€™s annoying",
    sentence: "His pompous attitude made him seem like he was better than everyone else."
  },
  {
    word: 'pompous',
    definition: "acting in a way that is self-important and exaggerated",
    sentence: "The pompous speaker thought he was the smartest person in the room."
  },
  {
    word: 'poultry',
    definition: "chickens, ducks, or other birds raised for food",
    sentence: "The farmer raised poultry like chickens and turkeys."
  },
  {
    word: 'poultry',
    definition: "birds that are raised for meat or eggs",
    sentence: "We eat poultry such as chicken and turkey at Thanksgiving."
  },
  {
    word: 'precarious',
    definition: "dangerous because itâ€™s unstable or not safe",
    sentence: "The precarious rock ledge nearly made us lose our balance."
  },
  {
    word: 'precarious',
    definition: "risky or not secure",
    sentence: "The precarious bridge swayed in the wind and looked like it might fall."
  },
  {
    word: 'prejudice',
    definition: "having a negative opinion of someone or something without knowing them well",
    sentence: "Itâ€™s wrong to have prejudice against people from different countries."
  },
  {
    word: 'prejudice',
    definition: "an unfair or biased opinion about someone or something",
    sentence: "His prejudice against certain foods made him refuse to try new things."
  },
  {
    word: 'present',
    definition: "to give or show something to someone",
    sentence: "I will present my project to the class tomorrow."
  },
  {
    word: 'present',
    definition: "a gift or something you give to someone",
    sentence: "She gave her friend a present for her birthday."
  },
  {
    word: 'privilege',
    definition: "a special right or benefit that some people have",
    sentence: "Having a library card is a privilege because not everyone can get one."
  },
  {
    word: 'privilege',
    definition: "an advantage or honour that is given to some people",
    sentence: "Itâ€™s a privilege to visit a museum for free."
  },
  {
    word: 'probably',
    definition: "used to show that something is likely to happen or be true",
    sentence: "She will probably come to the party later."
  },
  {
    word: 'probably',
    definition: "likely, but not certain",
    sentence: "We will probably go to the park if it doesnâ€™t rain."
  },
  {
    word: 'proclaim',
    definition: "to say something in a public or official way",
    sentence: "He proclaimed that they had won the competition."
  },
  {
    word: 'proclaim',
    definition: "to announce or declare something loudly",
    sentence: "The king proclaimed that a celebration would take place in the city."
  },
  {
    word: 'procure',
    definition: "to get something, especially with effort or skill",
    sentence: "She managed to procure tickets to the concert after weeks of trying."
  },
  {
    word: 'procure',
    definition: "to find and obtain something you need or want",
    sentence: "He procured the supplies for the party after shopping all day."
  },
  {
    word: 'profession',
    definition: "a job or career that requires special training or skills",
    sentence: "Her profession is teaching because she loves working with children."
  },
  {
    word: 'profession',
    definition: "a job that requires special education or training",
    sentence: "Being a doctor is a profession that requires years of study."
  },
  {
    word: 'profit',
    definition: "the money you make after all your costs are subtracted",
    sentence: "The company made a huge profit after selling all the products."
  },
  {
    word: 'profit',
    definition: "the money earned from something you sell or do",
    sentence: "They made a profit from the lemonade stand after buying supplies."
  },
  {
    word: 'programme',
    definition: "a plan or list of events or activities",
    sentence: "We received a programme for the concert that showed the schedule."
  },
  {
    word: 'programme',
    definition: "a set of activities or shows for a particular purpose",
    sentence: "The school is offering a new programme to teach kids about art."
  },
  {
    word: 'prohibit',
    definition: "to stop or not allow something",
    sentence: "The rules prohibit running in the hallway at school."
  },
  {
    word: 'prohibit',
    definition: "to make something illegal or not allowed",
    sentence: "The law prohibits smoking in public places."
  },
  {
    word: 'prominent',
    definition: "important or well-known",
    sentence: "The prominent scientist received an award for her discoveries."
  },
  {
    word: 'prominent',
    definition: "standing out or easily seen",
    sentence: "His prominent nose made him easy to recognise from a distance."
  },
  {
    word: 'promote',
    definition: "to support or encourage something to grow",
    sentence: "The teacher will promote good behaviour in the classroom."
  },
  {
    word: 'promote',
    definition: "to help something become better or more successful",
    sentence: "She worked hard to promote her new book."
  },
  {
    word: 'prompt',
    definition: "to encourage someone to do something",
    sentence: "The teacher prompted the student to answer the question."
  },
  {
    word: 'prompt',
    definition: "something that helps you remember or do something quickly",
    sentence: "The prompt on the screen reminded me to finish my homework."
  },
  {
    word: 'pronunciation',
    definition: "the way in which a word is spoken",
    sentence: "The correct pronunciation of her name is important."
  },
  {
    word: 'pronunciation',
    definition: "how you say a word correctly",
    sentence: "He worked hard on his pronunciation of the difficult word."
  },
  {
    word: 'proportion',
    definition: "the relationship in size or amount between two things",
    sentence: "The proportion of milk to sugar in the recipe is 2:1."
  },
  {
    word: 'proportion',
    definition: "the size or amount of one part compared to another",
    sentence: "The proportions of the cake were perfect for the party."
  },
  {
    word: 'prosperous',
    definition: "having success, especially in business or money",
    sentence: "The family became prosperous after their bakery became very popular."
  },
  {
    word: 'prosperous',
    definition: "doing well or having a lot of money or success",
    sentence: "The town grew prosperous as more businesses opened."
  },
  {
    word: 'provoke',
    definition: "to make someone angry or upset on purpose",
    sentence: "He tried to provoke his sister by taking her toy."
  },
  {
    word: 'provoke',
    definition: "to make someone react strongly or get upset",
    sentence: "The teacher warned him not to provoke the other students."
  },
  {
    word: 'public',
    definition: "for everyone to use or know about",
    sentence: "The park is open to the public, so anyone can visit."
  },
  {
    word: 'public',
    definition: "something that is shared by many people",
    sentence: "The library is a public space where people can borrow books."
  },
  {
    word: 'punctual',
    definition: "being on time, not late",
    sentence: "Itâ€™s important to be punctual for school to avoid missing anything."
  },
  {
    word: 'punctual',
    definition: "always arriving or doing something on time",
    sentence: "He is always punctual when meeting his friends after school."
  },
  {
    word: 'puncture',
    definition: "a small hole made by something sharp",
    sentence: "I got a puncture in my tyre when I stepped on a nail."
  },
  {
    word: 'puncture',
    definition: "to make a small hole in something",
    sentence: "Be careful with that needle, it might puncture your skin."
  },
  {
    word: 'purpose',
    definition: "the reason for doing something",
    sentence: "The purpose of the game is to have fun and learn new things."
  },
  {
    word: 'purpose',
    definition: "the reason something exists or is done",
    sentence: "The purpose of the meeting was to discuss the project."
  },
  {
    word: 'quaint',
    definition: "charming or unusual in an old-fashioned way",
    sentence: "The quaint village looked like it came out of a fairy tale."
  },
  {
    word: 'quaint',
    definition: "old-fashioned and interesting",
    sentence: "She lived in a quaint little house by the lake."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'queue',
    definition: "a line of people or things waiting for something",
    sentence: "We had to stand in a queue for hours to get tickets for the concert."
  },
  {
    word: 'queue',
    definition: "a group of people waiting for something",
    sentence: "There was a long queue outside the ice cream shop."
  },
  {
    word: 'quiet',
    definition: "not making much noise",
    sentence: "Please be quiet while the teacher is speaking."
  },
  {
    word: 'quiet',
    definition: "calm and peaceful",
    sentence: "The park was very quiet in the early morning."
  },
  {
    word: 'quite',
    definition: "to a certain degree or extent",
    sentence: "The book was quite interesting, but a little long."
  },
  {
    word: 'quite',
    definition: "very, but not completely",
    sentence: "Itâ€™s quite cold today, but not freezing."
  },
  {
    word: 'quiver',
    definition: "to shake or tremble slightly",
    sentence: "The leaves on the tree began to quiver in the wind."
  },
  {
    word: 'quiver',
    definition: "to shake or move with slight motions",
    sentence: "She could feel her hands quiver with excitement before her performance."
  },
  {
    word: 'raiment',
    definition: "clothing or apparel",
    sentence: "The princess wore beautiful raiment to the ball."
  },
  {
    word: 'raiment',
    definition: "fancy or elegant clothes",
    sentence: "She loved wearing colourful raiment to the royal events."
  },
  {
    word: 'ramble',
    definition: "to walk in a relaxed, aimless way",
    sentence: "We decided to ramble through the forest and enjoy the scenery."
  },
  {
    word: 'ramble',
    definition: "to talk on and on without a clear direction",
    sentence: "He tended to ramble on about his favourite TV shows."
  },
  {
    word: 'rank',
    definition: "a position or level in a list or organisation",
    sentence: "He was at the top rank in the swimming competition."
  },
  {
    word: 'rank',
    definition: "a level or position in a group or organisation",
    sentence: "The general held a high rank in the military."
  },
  {
    word: 'rare',
    definition: "not common, unusual",
    sentence: "Itâ€™s rare to see a rainbow, but it happens sometimes after a rainstorm."
  },
  {
    word: 'rare',
    definition: "cooked lightly, with the inside still red",
    sentence: "He likes his steak cooked rare, with the inside pink and juicy."
  },
  {
    word: 'really',
    definition: "used to emphasise something or show that itâ€™s true",
    sentence: "I really like chocolate cake!"
  },
  {
    word: 'really',
    definition: "used to stress the truth of something",
    sentence: "She is really good at drawing pictures."
  },
  {
    word: 'receive',
    definition: "to get or accept something given to you",
    sentence: "I canâ€™t wait to receive my birthday presents."
  },
  {
    word: 'receive',
    definition: "to accept or take something from someone",
    sentence: "She will receive the award for her hard work."
  },
  {
    word: 'recite',
    definition: "to say something aloud from memory",
    sentence: "She had to recite the poem in front of the class."
  },
  {
    word: 'recite',
    definition: "to repeat something, like a poem or story, from memory",
    sentence: "The teacher asked the students to recite their favourite nursery rhyme."
  },
  {
    word: 'refuse',
    definition: "to say no or not accept something",
    sentence: "He refused to eat his vegetables because he didnâ€™t like them."
  },
  {
    word: 'refuse',
    definition: "to not accept or agree to something",
    sentence: "She refused to go to the party because she was feeling tired."
  },
  {
    word: 'release',
    definition: "to allow something to go or move freely",
    sentence: "The bird was released back into the wild after being cared for."
  },
  {
    word: 'release',
    definition: "to set something free or allow it to leave",
    sentence: "She will release the balloon into the sky."
  },
  {
    word: 'repent',
    definition: "to feel sorry and change your behaviour",
    sentence: "He repented for his actions and promised to be kinder."
  },
  {
    word: 'repent',
    definition: "to feel bad about something you did and try to make up for it",
    sentence: "She repented after arguing with her friend and apologised."
  },
  {
    word: 'reprimand',
    definition: "to tell someone off for doing something wrong",
    sentence: "The teacher reprimanded the student for talking during the lesson."
  },
  {
    word: 'reprimand',
    definition: "to scold someone for doing something wrong",
    sentence: "He received a reprimand for being late to class."
  },
  {
    word: 'reserve',
    definition: "to keep something for later or not use it yet",
    sentence: "You should reserve some of your energy for the race tomorrow."
  },
  {
    word: 'reserve',
    definition: "to set something aside for someone or something",
    sentence: "They reserved seats at the restaurant for their family."
  },
  {
    word: 'reside',
    definition: "to live in a place",
    sentence: "She resides in a small town by the coast."
  },
  {
    word: 'reside',
    definition: "to live somewhere as your home",
    sentence: "He resides in a large house in the countryside."
  },
  {
    word: 'residence',
    definition: "a place where someone lives",
    sentence: "Their residence is a large house in the city."
  },
  {
    word: 'residence',
    definition: "the place where you live",
    sentence: "His residence is a lovely apartment near the park."
  },
  {
    word: 'resign',
    definition: "to quit a job or position",
    sentence: "She decided to resign from her job to start a new adventure."
  },
  {
    word: 'resign',
    definition: "to leave your job or position willingly",
    sentence: "The teacher decided to resign after many years of teaching."
  },
  {
    word: 'resolve',
    definition: "to make a firm decision to do something",
    sentence: "I resolve to be more organised this year."
  },
  {
    word: 'resolve',
    definition: "to find a solution to a problem",
    sentence: "They worked together to resolve the issue with the computer."
  },
  {
    word: 'resort',
    definition: "a place where people go to relax or have fun",
    sentence: "They went to a beach resort for their summer vacation."
  },
  {
    word: 'resort',
    definition: "to go to a place for a specific purpose, like a holiday or break",
    sentence: "They decided to resort to their favourite park after a busy week."
  },
  {
    word: 'restaurant',
    definition: "a place where you can buy and eat food",
    sentence: "We went to a restaurant to celebrate my birthday."
  },
  {
    word: 'restaurant',
    definition: "a place to eat food that is prepared by others",
    sentence: "The family went to their favourite restaurant for dinner."
  },
  {
    word: 'restore',
    definition: "to bring something back to its original condition",
    sentence: "The museum is working hard to restore the old paintings."
  },
  {
    word: 'restore',
    definition: "to bring something back or fix it",
    sentence: "The old house was restored to its former glory."
  },
  {
    word: 'restrain',
    definition: "to hold back or stop someone or something",
    sentence: "He had to restrain his excitement when he saw the surprise."
  },
  {
    word: 'restrain',
    definition: "to limit or control something or someone",
    sentence: "She had to restrain her dog from running into the street."
  },
  {
    word: 'retain',
    definition: "to keep something or hold on to it",
    sentence: "Please retain your ticket until the end of the concert."
  },
  {
    word: 'retain',
    definition: "to keep or remember something",
    sentence: "He tried to retain all the information he learned in class."
  },
  {
    word: 'retreat',
    definition: "to go back or move away from something",
    sentence: "The soldiers had to retreat when they realised they were outnumbered."
  },
  {
    word: 'retreat',
    definition: "to move back or withdraw from a situation",
    sentence: "After the storm, the animals retreat to their safe places."
  },
  {
    word: 'reveal',
    definition: "to show something or make it known",
    sentence: "She will reveal the secret to everyone at the party."
  },
  {
    word: 'reveal',
    definition: "to make something known that was hidden",
    sentence: "The magician revealed the trick to the amazed audience."
  },
  {
    word: 'revive',
    definition: "to bring something back to life or make it healthy again",
    sentence: "They tried to revive the plant after it had wilted."
  },
  {
    word: 'revive',
    definition: "to make someone or something feel better or stronger again",
    sentence: "She felt revived after a good nightâ€™s sleep."
  },
  {
    word: 'rhyme',
    definition: "words that have the same ending sound",
    sentence: "Cat and hat are a perfect rhyme."
  },
  {
    word: 'rhyme',
    definition: "a similarity in the ending sounds of words",
    sentence: "He wrote a poem with words that rhyme."
  },
  {
    word: 'ridiculous',
    definition: "something that is silly or unreasonable",
    sentence: "Itâ€™s ridiculous to think that a dog can drive a car!"
  },
  {
    word: 'ridiculous',
    definition: "something so strange or funny that itâ€™s hard to believe",
    sentence: "The idea of flying pigs is completely ridiculous."
  },
  {
    word: 'rigid',
    definition: "stiff and not flexible",
    sentence: "The cardboard box was rigid and couldn't bend."
  },
  {
    word: 'rigid',
    definition: "fixed or not able to change",
    sentence: "The rules are rigid, and no one can break them."
  },
  {
    word: 'roam',
    definition: "to wander or move around without a clear destination",
    sentence: "They loved to roam around the city, exploring new places."
  },
  {
    word: 'roam',
    definition: "to move or travel around freely",
    sentence: "The dog liked to roam the neighbourhood, sniffing all the smells."
  },
  {
    word: 'robust',
    definition: "strong and healthy",
    sentence: "He has a robust body because he exercises regularly."
  },
  {
    word: 'robust',
    definition: "powerful or strong in something, like health or performance",
    sentence: "The robust tree survived the harsh winds and storms."
  },
  {
    word: 'rogue',
    definition: "a person who acts in a dishonest or tricky way",
    sentence: "The rogue pirate took all the treasure without sharing it."
  },
  {
    word: 'rogue',
    definition: "someone who does things in their own way, sometimes breaking the rules",
    sentence: "The rogue knight decided to go on a solo adventure."
  },
  {
    word: 'rowdy',
    definition: "noisy and full of excitement or trouble",
    sentence: "The rowdy kids made a mess during the party."
  },
  {
    word: 'rowdy',
    definition: "loud, unruly, and disruptive",
    sentence: "The rowdy crowd cheered loudly at the sports game."
  },
  {
    word: 'rural',
    definition: "relating to the countryside, not the city",
    sentence: "They lived in a rural area with open fields and farm animals."
  },
  {
    word: 'rural',
    definition: "having to do with farming or country life",
    sentence: "The rural village had small houses and lots of farmland."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'sacred',
    definition: "something that is very special or holy",
    sentence: "The church is a sacred place where people go to pray."
  },
  {
    word: 'sacred',
    definition: "something that is respected and treated with care",
    sentence: "In many cultures, the forest is seen as a sacred space."
  },
  {
    word: 'sacrifice',
    definition: "to give something up for the sake of something else",
    sentence: "She made a sacrifice by giving up her Saturday to help her friend."
  },
  {
    word: 'sacrifice',
    definition: "to offer something valuable as a gift, often in a religious way",
    sentence: "The ancient people would sacrifice food to the gods."
  },
  {
    word: 'sane',
    definition: "having a healthy mind and being able to think clearly",
    sentence: "Even though he was tired, he stayed sane and made the right decision."
  },
  {
    word: 'sane',
    definition: "acting or thinking in a way that is not crazy or unreasonable",
    sentence: "It was a sane decision to ask for help when he didnâ€™t know the answer."
  },
  {
    word: 'sanitary',
    definition: "clean and hygienic",
    sentence: "The hospital made sure all the rooms were sanitary and ready for patients."
  },
  {
    word: 'sanitary',
    definition: "relating to cleanliness and health",
    sentence: "We should always wash our hands to keep things sanitary."
  },
  {
    word: 'satin',
    definition: "a type of smooth, shiny fabric",
    sentence: "She wore a beautiful satin dress to the party."
  },
  {
    word: 'satin',
    definition: "a shiny, smooth fabric often used for special occasions",
    sentence: "The wedding dress was made from satin, making it sparkle."
  },
  {
    word: 'scanty',
    definition: "not enough, small in amount or size",
    sentence: "The scanty amount of food left wasnâ€™t enough for everyone."
  },
  {
    word: 'scanty',
    definition: "small or limited in quantity",
    sentence: "She had scanty information about the new school rules."
  },
  {
    word: 'score',
    definition: "a number of points in a game or test",
    sentence: "He scored the most points in the game and won."
  },
  {
    word: 'score',
    definition: "to win a certain number of points in a game",
    sentence: "She scored five goals in the match and was the star player."
  },
  {
    word: 'scripture',
    definition: "a holy or religious book",
    sentence: "The Bible is a scripture that is read in many churches."
  },
  {
    word: 'scripture',
    definition: "written sacred texts, usually referring to religious books",
    sentence: "Muslims read the Quran, which is their holy scripture."
  },
  {
    word: 'secure',
    definition: "safe and protected from harm",
    sentence: "She felt secure in her house, knowing the doors were locked."
  },
  {
    word: 'secure',
    definition: "to make something safe or free from risk",
    sentence: "They tried to secure the building before the storm hit."
  },
  {
    word: 'seize',
    definition: "to take hold of something quickly",
    sentence: "He tried to seize the ball during the game, but missed."
  },
  {
    word: 'seize',
    definition: "to grab or take something forcefully or suddenly",
    sentence: "The police seized the stolen items from the thief."
  },
  {
    word: 'seize',
    definition: "to take something by force or authority",
    sentence: "The authorities will seize the illegal goods from the market."
  },
  {
    word: 'seldom',
    definition: "not often, rarely",
    sentence: "He seldom visits his cousins because they live far away."
  },
  {
    word: 'seldom',
    definition: "rarely, not very often",
    sentence: "We seldom go to the beach in winter because itâ€™s too cold."
  },
  {
    word: 'separate',
    definition: "to make things not together, divide",
    sentence: "We need to separate the red marbles from the blue ones."
  },
  {
    word: 'separate',
    definition: "to put things apart or make them not be together",
    sentence: "The teacher asked the students to separate into groups."
  },
  {
    word: 'sermon',
    definition: "a speech or talk, usually religious",
    sentence: "The priest gave a sermon about kindness and love."
  },
  {
    word: 'sermon',
    definition: "a religious speech given by a preacher or minister",
    sentence: "The preacherâ€™s sermon inspired everyone to be better people."
  },
  {
    word: 'shoulder',
    definition: "the part of your body between your neck and your arm",
    sentence: "He hurt his shoulder while playing football."
  },
  {
    word: 'shoulder',
    definition: "a part of your body used to carry or hold things",
    sentence: "She carried her heavy bag on her shoulder."
  },
  {
    word: 'shrine',
    definition: "a special place for religious worship or a memorial",
    sentence: "The family built a shrine to remember their ancestors."
  },
  {
    word: 'shrine',
    definition: "a place of worship or remembrance for someone or something important",
    sentence: "The shrine was decorated with flowers and candles."
  },
  {
    word: 'shrink',
    definition: "to make smaller in size or become smaller",
    sentence: "The sweater shrank in the wash and became too small."
  },
  {
    word: 'shrink',
    definition: "to become smaller or tighter when heated or washed",
    sentence: "The cloth will shrink after itâ€™s washed."
  },
  {
    word: 'signature',
    definition: "a personâ€™s name written in their own way, usually for official purposes",
    sentence: "He signed the document with his signature."
  },
  {
    word: 'signature',
    definition: "a personâ€™s written name, often used to show agreement or ownership",
    sentence: "She added her signature to the contract."
  },
  {
    word: 'sincere',
    definition: "being honest and real with your feelings",
    sentence: "He gave a sincere apology for his actions."
  },
  {
    word: 'sincere',
    definition: "showing true feelings without pretending",
    sentence: "Her sincere smile made everyone feel happy."
  },
  {
    word: 'sincerely',
    definition: "in a genuine way, without pretending",
    sentence: "He sincerely thanked her for all her help."
  },
  {
    word: 'sincerely',
    definition: "in a heartfelt or honest manner",
    sentence: "She sincerely hoped that everyone would have a wonderful day."
  },
  {
    word: 'sleek',
    definition: "smooth and shiny, often in an attractive way",
    sentence: "The carâ€™s sleek design made it look very fast."
  },
  {
    word: 'sleek',
    definition: "having a smooth, shiny appearance, usually to look stylish or attractive",
    sentence: "Her sleek hair looked perfect after the styling session."
  },
  {
    word: 'slope',
    definition: "a surface that is not flat, going up or down",
    sentence: "We slid down the slope on our sleds during winter."
  },
  {
    word: 'slope',
    definition: "a hill or incline that is slanted or tilted",
    sentence: "The ski slope was steep, but perfect for a thrilling ride."
  },
  {
    word: 'sly',
    definition: "clever in a sneaky or dishonest way",
    sentence: "The sly fox tricked the hunter by hiding in the bushes."
  },
  {
    word: 'sly',
    definition: "deceptive and tricky, often in a clever way",
    sentence: "He gave a sly smile after winning the game."
  },
  {
    word: 'sober',
    definition: "not drunk, clear-headed and sensible",
    sentence: "She stayed sober at the party so she could drive home safely."
  },
  {
    word: 'sober',
    definition: "serious and thoughtful, without being silly",
    sentence: "His tone was sober when discussing the important matter."
  },
  {
    word: 'soldier',
    definition: "a person who works in an army",
    sentence: "The soldier marched proudly with his comrades."
  },
  {
    word: 'soldier',
    definition: "a member of the army who fights for their country",
    sentence: "The soldier trained hard to be ready for any challenge."
  },
  {
    word: 'sow',
    definition: "to plant seeds in the ground",
    sentence: "They decided to sow seeds in the garden to grow flowers."
  },
  {
    word: 'sow',
    definition: "to plant seeds in the earth to grow plants",
    sentence: "In spring, we sow vegetable seeds in the garden."
  },
  {
    word: 'special',
    definition: "unusual or different from others in a good way",
    sentence: "Her birthday was very special because she received so many gifts."
  },
  {
    word: 'special',
    definition: "something unique or important, not like others",
    sentence: "This is a special occasion, so we should all dress up."
  },
  {
    word: 'stern',
    definition: "strict and serious in manner",
    sentence: "The teacher gave a stern look when the students were misbehaving."
  },
  {
    word: 'stern',
    definition: "a firm and serious attitude, often to show authority",
    sentence: "His stern warning made everyone pay attention."
  },
  {
    word: 'stomach',
    definition: "the part of your body where food goes after you eat",
    sentence: "My stomach hurts because I ate too much chocolate."
  },
  {
    word: 'stomach',
    definition: "the organ in your body where food is digested",
    sentence: "The stomach is where the food is broken down after you eat."
  },
  {
    word: 'stoop',
    definition: "to bend your body forward, usually because youâ€™re tired or old",
    sentence: "She had to stoop to pick up the coin from the ground."
  },
  {
    word: 'stoop',
    definition: "to bend down or lower your body",
    sentence: "Donâ€™t stoop too much, or your back will start hurting."
  },
  {
    word: 'stout',
    definition: "strong and solid, especially when talking about a personâ€™s body",
    sentence: "He was a stout man who could carry heavy boxes easily."
  },
  {
    word: 'stout',
    definition: "thick or strong, used for something sturdy or firm",
    sentence: "The stout tree stood strong against the storm."
  },
  {
    word: 'stress',
    definition: "a feeling of worry or tension",
    sentence: "She felt stress before her big exam."
  },
  {
    word: 'stress',
    definition: "to feel pressure or strain because of something happening",
    sentence: "He started to stress out when he realised the homework was due soon."
  },
  {
    word: 'stretched',
    definition: "made longer or wider by pulling",
    sentence: "She stretched the rubber band until it broke."
  },
  {
    word: 'stretched',
    definition: "extended or pulled to be longer or wider",
    sentence: "The tight shirt stretched after she wore it for a while."
  },
  {
    word: 'stubborn',
    definition: "not willing to change your mind, even if someone else disagrees",
    sentence: "The stubborn child refused to eat his vegetables."
  },
  {
    word: 'stubborn',
    definition: "holding on to your opinion or decision, even if itâ€™s not the best",
    sentence: "He was so stubborn that he refused to ask for help."
  },
  {
    word: 'sturdy',
    definition: "strong and able to handle pressure or weight",
    sentence: "The sturdy chair didnâ€™t break when I sat on it."
  },
  {
    word: 'sturdy',
    definition: "well-built and tough, not easy to break",
    sentence: "The sturdy walls of the house protected them from the storm."
  },
  {
    word: 'subdued',
    definition: "quiet and not strong, often used to describe light or colour",
    sentence: "The room had subdued lighting, creating a calm atmosphere."
  },
  {
    word: 'subdued',
    definition: "calm and not excited, often used to describe a personâ€™s mood",
    sentence: "After the news, everyone was in a subdued mood."
  },
  {
    word: 'submissive',
    definition: "ready to obey someone else without arguing",
    sentence: "The dog was very submissive and followed its ownerâ€™s commands."
  },
  {
    word: 'submissive',
    definition: "being willing to do what others say without resistance",
    sentence: "She was submissive to her parents and always listened to their advice."
  },
  {
    word: 'submit',
    definition: "to give something for review or approval",
    sentence: "He decided to submit his homework to the teacher."
  },
  {
    word: 'submit',
    definition: "to hand something in for it to be checked or judged",
    sentence: "She will submit her art project to the teacher for grading."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'subterfuge',
    definition: "a trick or lie used to deceive someone",
    sentence: "He used a subterfuge to avoid being caught skipping school."
  },
  {
    word: 'subterfuge',
    definition: "a secret plan or action to achieve something in a clever or dishonest way",
    sentence: "She used subterfuge to hide the surprise party from her friend."
  },
  {
    word: 'subterranean',
    definition: "beneath the ground",
    sentence: "The subterranean tunnel was used to hide from enemies."
  },
  {
    word: 'subterranean',
    definition: "underground, below the surface of the earth",
    sentence: "They dug a subterranean room to store the treasure."
  },
  {
    word: 'subtropical',
    definition: "a type of climate that is warm but not too hot, usually near the equator",
    sentence: "The subtropical climate makes it perfect for growing tropical fruits."
  },
  {
    word: 'subtropical',
    definition: "relating to areas that are not quite tropical but still warm, usually near the equator",
    sentence: "Subtropical regions are home to many unique plants and animals."
  },
  {
    word: 'successful',
    definition: "achieving what you want to do, or reaching your goals",
    sentence: "The successful student got the highest grade in the class."
  },
  {
    word: 'successful',
    definition: "being good at something or reaching your goals",
    sentence: "After a lot of hard work, he became a successful writer."
  },
  {
    word: 'succumb',
    definition: "to give in or stop resisting, often to something bad or difficult",
    sentence: "She did not succumb to the pressure and completed her homework."
  },
  {
    word: 'succumb',
    definition: "to give up or yield to something stronger, often used for something bad",
    sentence: "The city succumbed to the stormâ€™s heavy winds."
  },
  {
    word: 'sufficient',
    definition: "enough to meet the needs or requirements",
    sentence: "The food was sufficient for the whole family."
  },
  {
    word: 'sufficient',
    definition: "having enough to complete a task or meet the needs",
    sentence: "We have sufficient supplies to last until next week."
  },
  {
    word: 'suggest',
    definition: "to recommend something or give an idea",
    sentence: "He suggested going to the park to play basketball."
  },
  {
    word: 'suggest',
    definition: "to offer an idea or plan for others to consider",
    sentence: "She suggested a fun game to play during the party."
  },
  {
    word: 'summit',
    definition: "the highest point of something, like a mountain",
    sentence: "They reached the summit of the mountain after a long climb."
  },
  {
    word: 'summit',
    definition: "the top of a mountain or hill",
    sentence: "The summit was covered in snow and gave a beautiful view."
  },
  {
    word: 'superfluous',
    definition: "more than what is needed, unnecessary",
    sentence: "She had a superfluous amount of candy left over from Halloween."
  },
  {
    word: 'superfluous',
    definition: "too much, not necessary or needed",
    sentence: "He threw away the superfluous decorations that werenâ€™t needed."
  },
  {
    word: 'superior',
    definition: "better or higher in quality or rank",
    sentence: "She is superior in maths compared to the rest of the class."
  },
  {
    word: 'superior',
    definition: "having higher qualities or abilities than others",
    sentence: "The superior team won the championship easily."
  },
  {
    word: 'supposed',
    definition: "something that is assumed or expected to be true",
    sentence: "Youâ€™re supposed to finish your homework before you go out."
  },
  {
    word: 'supposed',
    definition: "meant to do something or expected to be in a certain way",
    sentence: "He was supposed to arrive at 3, but he was late."
  },
  {
    word: 'surprise',
    definition: "to make someone feel shocked or amazed, often in a pleasant way",
    sentence: "She planned a surprise party for her friendâ€™s birthday."
  },
  {
    word: 'surprise',
    definition: "something unexpected that makes someone feel amazed or shocked",
    sentence: "The surprise announcement made everyone cheer with excitement."
  },
  {
    word: 'suspect',
    definition: "to believe something is true, especially when there is no proof",
    sentence: "I suspect heâ€™s hiding something from us."
  },
  {
    word: 'suspect',
    definition: "to think that something may be true, especially if it is bad or strange",
    sentence: "The teacher suspects that someone cheated on the test."
  },
  {
    word: 'suspend',
    definition: "to temporarily stop something from happening or continuing",
    sentence: "They suspended the game because of the rain."
  },
  {
    word: 'suspend',
    definition: "to make something not happen for a short time",
    sentence: "The teacher had to suspend the lesson until everyone was settled."
  },
  {
    word: 'symbol',
    definition: "an image or object that represents something else",
    sentence: "A dove is a symbol of peace."
  },
  {
    word: 'symbol',
    definition: "a sign or picture that stands for something important",
    sentence: "The heart is a symbol of love."
  },
  {
    word: 'system',
    definition: "a set of connected things working together as a whole",
    sentence: "The school has a system for checking homework."
  },
  {
    word: 'system',
    definition: "a collection of things that work together in an organized way",
    sentence: "The solar system has the Sun at its centre with planets revolving around it."
  },
  {
    word: 'temperate',
    definition: "a mild climate that is neither too hot nor too cold",
    sentence: "The temperate weather makes it comfortable to walk outside."
  },
  {
    word: 'temperate',
    definition: "mild, moderate in temperature, not too hot or cold",
    sentence: "They live in a temperate region where it never gets too cold or too hot."
  },
  {
    word: 'tempestuous',
    definition: "stormy or wild, usually used for weather or emotions",
    sentence: "The tempestuous wind made the trees sway violently."
  },
  {
    word: 'tempestuous',
    definition: "wild, emotional, or violent in nature",
    sentence: "Their tempestuous friendship was filled with arguments and make-ups."
  },
  {
    word: 'temptation',
    definition: "a desire to do something that might not be good for you",
    sentence: "The temptation of candy made it hard for him to resist."
  },
  {
    word: 'temptation',
    definition: "something that makes you want to do something you know is not good",
    sentence: "She couldnâ€™t fight the temptation to eat all the cookies."
  },
  {
    word: 'they',
    definition: "used to refer to people or things that are not named",
    sentence: "They were waiting for the bus at the stop."
  },
  {
    word: 'they',
    definition: "used to refer to a group of people or things",
    sentence: "They all agreed to help her with the project."
  },
  {
    word: 'thrust',
    definition: "to push something with force",
    sentence: "He thrust the door open to see what was inside."
  },
  {
    word: 'thrust',
    definition: "to push or shove something quickly and forcefully",
    sentence: "She thrust the book into his hands when he arrived."
  },
  {
    word: 'tomorrow',
    definition: "the day after today",
    sentence: "We have a test tomorrow, so I need to study."
  },
  {
    word: 'tomorrow',
    definition: "the next day after today",
    sentence: "Tomorrow, weâ€™re going on a school trip to the zoo."
  },
  {
    word: 'torment',
    definition: "to cause someone pain or worry",
    sentence: "The bully tormented the younger children at school."
  },
  {
    word: 'torment',
    definition: "to make someone suffer or feel pain, often in a mental way",
    sentence: "His torment was caused by the loud noises in the classroom."
  },
  {
    word: 'traitor',
    definition: "someone who betrays their country or group",
    sentence: "The soldier was called a traitor after he betrayed his country."
  },
  {
    word: 'traitor',
    definition: "a person who is not loyal to a group or cause",
    sentence: "The spy was considered a traitor for giving away secrets."
  },
  {
    word: 'tranquil',
    definition: "calm and peaceful",
    sentence: "The tranquil lake was perfect for a relaxing day."
  },
  {
    word: 'tranquil',
    definition: "quiet and peaceful, without noise or trouble",
    sentence: "She enjoyed a tranquil walk through the quiet forest."
  },
  {
    word: 'tries',
    definition: "efforts made to do something",
    sentence: "She makes several tries before finally solving the puzzle."
  },
  {
    word: 'tries',
    definition: "when someone attempts or tries doing something",
    sentence: "He tries his best every time to win the race."
  },
  {
    word: 'trifle',
    definition: "something small or unimportant",
    sentence: "The argument was over a trifle that didnâ€™t matter."
  },
  {
    word: 'trifle',
    definition: "a small or unimportant thing",
    sentence: "Donâ€™t worry about the trifle, weâ€™ll figure out the bigger problem."
  },
  {
    word: 'trivia',
    definition: "small bits of information that might not be important",
    sentence: "He knows a lot of fun trivia about famous movies."
  },
  {
    word: 'trivia',
    definition: "facts or details that are not very important but interesting",
    sentence: "We played a game with trivia questions about history."
  },
  {
    word: 'trivial',
    definition: "not important or significant",
    sentence: "The problem was trivial and didnâ€™t need to be discussed."
  },
  {
    word: 'trivial',
    definition: "something small or unimportant, that doesnâ€™t matter much",
    sentence: "He ignored the trivial details and focused on the main task."
  },
  {
    word: 'turbulent',
    definition: "not calm, rough or chaotic",
    sentence: "The turbulent waves made it hard to sail the boat."
  },
  {
    word: 'turbulent',
    definition: "wild, not peaceful, often referring to emotions or weather",
    sentence: "The stormy sea was very turbulent."
  },
  {
    word: 'twilight',
    definition: "the time between day and night, when the sky is partly dark",
    sentence: "We walked home during twilight, as the sun was setting."
  },
  {
    word: 'twilight',
    definition: "the period of time just after sunset and just before full night",
    sentence: "The sky was beautiful at twilight, with soft colours spreading across it."
  },
  {
    word: 'word',
    definition: "definition",
    sentence: "sentence"
  },
  {
    word: 'tyrant',
    definition: "a ruler who uses power in a cruel and unfair way",
    sentence: "The tyrant ordered harsh punishments for anyone who disagreed with him."
  },
  {
    word: 'tyrant',
    definition: "a person who is very harsh and unfair in how they treat others",
    sentence: "The school bully was a tyrant, bossing everyone around."
  },
  {
    word: 'unfathomable',
    definition: "something that is impossible to understand or measure",
    sentence: "The deep ocean is unfathomable to most people because itâ€™s so vast."
  },
  {
    word: 'unfathomable',
    definition: "too difficult to comprehend or imagine",
    sentence: "The size of the universe is unfathomable, and we canâ€™t truly grasp it."
  },
  {
    word: 'uniform',
    definition: "a set of clothes worn by people of the same group or organisation",
    sentence: "The children wore their school uniforms to class."
  },
  {
    word: 'uniform',
    definition: "something that looks the same or is consistent all the time",
    sentence: "They wore uniform clothes, all of them looking exactly the same."
  },
  {
    word: 'union',
    definition: "a group of people or organisations that work together for a common purpose",
    sentence: "The union helped the workers get better pay and conditions."
  },
  {
    word: 'union',
    definition: "when two or more things come together to form a single whole",
    sentence: "The union of the two countries created a new government."
  },
  {
    word: 'unite',
    definition: "to come together or combine to form a group or whole",
    sentence: "The team decided to unite to win the competition."
  },
  {
    word: 'unite',
    definition: "to bring things or people together for a common purpose",
    sentence: "Letâ€™s unite and help each other out!"
  },
  {
    word: 'unnecessary',
    definition: "not needed or not important",
    sentence: "Bringing extra food is unnecessary; we have enough already."
  },
  {
    word: 'unnecessary',
    definition: "something that is not required or is more than whatâ€™s needed",
    sentence: "Itâ€™s unnecessary to bring an umbrella because it isnâ€™t raining."
  },
  {
    word: 'unorthodox',
    definition: "not following the usual or traditional way of doing things",
    sentence: "His unorthodox methods of teaching made him a popular teacher."
  },
  {
    word: 'unorthodox',
    definition: "different from the usual or accepted way of thinking or doing something",
    sentence: "She came up with an unorthodox solution to the problem that worked very well."
  },
  {
    word: 'unsurpassed',
    definition: "better than anything else, the best",
    sentence: "The athleteâ€™s performance was unsurpassed by anyone in the competition."
  },
  {
    word: 'unsurpassed',
    definition: "something that has not been beaten or matched",
    sentence: "Her cooking skills were unsurpassed in the whole town."
  },
  {
    word: 'until',
    definition: "up to the time of or before something happens",
    sentence: "We have to wait until 3 PM for the meeting to start."
  },
  {
    word: 'until',
    definition: "before a certain event or moment in time",
    sentence: "She waited until the last moment to submit her homework."
  },
  {
    word: 'vacant',
    definition: "something that is empty or not occupied",
    sentence: "The house was vacant for years before anyone moved in."
  },
  {
    word: 'vacant',
    definition: "a space or place that is unoccupied or unused",
    sentence: "The chair was vacant, so I sat in it."
  },
  {
    word: 'vanished',
    definition: "completely disappeared, no longer present",
    sentence: "The magician made the coin vanish from his hand."
  },
  {
    word: 'vanished',
    definition: "to disappear completely without a trace",
    sentence: "The balloon vanished as it floated up into the sky."
  },
  {
    word: 'vapour',
    definition: "tiny drops of water or another liquid that are in the air",
    sentence: "The vapour from the boiling kettle filled the kitchen."
  },
  {
    word: 'vapour',
    definition: "a gas or mist that comes from a liquid when it heats up",
    sentence: "Water vapour rises up into the air when you heat it."
  },
  {
    word: 'vast',
    definition: "very large in size or amount",
    sentence: "The vast desert stretched out as far as the eye could see."
  },
  {
    word: 'vast',
    definition: "immense in size, quantity, or extent",
    sentence: "They explored the vast ocean for hours without finding land."
  },
  {
    word: 'vehicle',
    definition: "a machine used for travelling from one place to another, like a car or bike",
    sentence: "The vehicle broke down halfway to our destination."
  },
  {
    word: 'vehicle',
    definition: "a type of transport used to move people or things from one place to another",
    sentence: "They travelled to the city in a large vehicle."
  },
  {
    word: 'veil',
    definition: "a piece of cloth that covers part of the face, usually worn by women",
    sentence: "The bride wore a beautiful veil on her wedding day."
  },
  {
    word: 'veil',
    definition: "to cover or hide something from view",
    sentence: "She veiled her face with a scarf to protect herself from the cold."
  },
  {
    word: 'venerable',
    definition: "deserving respect because of age, dignity, or character",
    sentence: "The venerable teacher was loved by all her students."
  },
  {
    word: 'venerable',
    definition: "honoured and respected because of age or dignity",
    sentence: "The venerable elder spoke with wisdom that impressed everyone."
  },
  {
    word: 'ventilation',
    definition: "the process of letting fresh air into a room or building",
    sentence: "Good ventilation is important to keep the air inside the house fresh."
  },
  {
    word: 'ventilation',
    definition: "the movement of air into and out of a place to keep it healthy",
    sentence: "The ventilation in the classroom helps keep everyone comfortable."
  },
  {
    word: 'vessel',
    definition: "a large container used for holding liquids or other things",
    sentence: "The ship was a large vessel that carried goods across the sea."
  },
  {
    word: 'vessel',
    definition: "a ship or boat used for traveling on water",
    sentence: "The vessel sailed across the ocean, carrying passengers and cargo."
  },
  {
    word: 'vicarious',
    definition: "experiencing something through someone elseâ€™s actions or feelings",
    sentence: "She lived vicariously through her friendâ€™s exciting travels."
  },
  {
    word: 'vicarious',
    definition: "to feel something indirectly, through another personâ€™s experience",
    sentence: "He had a vicarious thrill watching his team win the championship."
  },
  {
    word: 'virtuous',
    definition: "doing good things and following moral rules",
    sentence: "The virtuous knight always helped those in need."
  },
  {
    word: 'virtuous',
    definition: "behaving in a way that is morally good and right",
    sentence: "She was a virtuous person, always kind and honest to others."
  },
  {
    word: 'volatile',
    definition: "likely to change suddenly and unpredictably",
    sentence: "The weather in the mountains is volatile, with sunny skies quickly turning to storms."
  },
  {
    word: 'volatile',
    definition: "unstable, or likely to explode or become dangerous suddenly",
    sentence: "The volatile chemicals must be handled carefully to avoid accidents."
  },
  {
    word: 'wasteful',
    definition: "using more than what is needed, not being careful with resources",
    sentence: "Itâ€™s wasteful to leave the lights on when no one is in the room."
  },
  {
    word: 'wasteful',
    definition: "spending or using too much without thought for the future",
    sentence: "Itâ€™s wasteful to throw away food when it can still be eaten."
  },
  {
    word: 'weary',
    definition: "feeling tired or exhausted, especially after a lot of work",
    sentence: "She felt weary after the long hike up the mountain."
  },
  {
    word: 'weary',
    definition: "feeling worn out or drained of energy",
    sentence: "The weary traveller rested under a tree after a long journey."
  },
  {
    word: 'weird',
    definition: "strange or unusual, not normal",
    sentence: "That movie was weird, with lots of strange scenes."
  },
  {
    word: 'weird',
    definition: "something that feels or looks odd or out of place",
    sentence: "It felt weird to be the only one wearing a coat in the summer."
  },
  {
    word: 'wholesome',
    definition: "good for your health and well-being",
    sentence: "Eating vegetables is a wholesome habit that keeps you healthy."
  },
  {
    word: 'wholesome',
    definition: "something that is healthy and good for you",
    sentence: "They had a wholesome meal with fruits and vegetables."
  },
  {
    word: 'wholly',
    definition: "completely, entirely",
    sentence: "The plan was wholly successful, with everything going according to plan."
  },
  {
    word: 'wholly',
    definition: "fully or entirely, without exception",
    sentence: "She was wholly dedicated to her studies."
  },
  {
    word: 'wither',
    definition: "to become dry and die, often used for plants",
    sentence: "The flowers began to wither after not being watered for days."
  },
  {
    word: 'wither',
    definition: "to shrink or become weaker over time",
    sentence: "His excitement seemed to wither when he realised the truth."
  },
  {
    word: 'worthy',
    definition: "deserving of respect or praise",
    sentence: "The brave firefighter was worthy of the highest honour."
  },
  {
    word: 'worthy',
    definition: "having qualities that make you deserving of something good",
    sentence: "She was worthy of winning the award for her hard work."
  },
  {
    word: 'wound',
    definition: "an injury to the body, especially a cut or break in the skin",
    sentence: "He got a wound on his knee after falling off his bike."
  },
  {
    word: 'wound',
    definition: "to hurt or injure someone physically or emotionally",
    sentence: "The mean comment wounded her feelings deeply."
  },
  {
    word: 'wretched',
    definition: "feeling miserable, very unhappy",
    sentence: "He felt wretched after losing the game."
  },
  {
    word: 'wretched',
    definition: "very bad, awful, or unpleasant",
    sentence: "The wretched weather ruined our outdoor plans."
  },
  {
    word: 'yield',
    definition: "to produce or give something, like crops or results",
    sentence: "The farm yields a lot of vegetables every season."
  },
  {
    word: 'yield',
    definition: "to give way or surrender to something or someone",
    sentence: "She had to yield to her friendâ€™s opinion even though she disagreed."
  }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDefinitions(currentWordIndex)
{
  let correctWordIndex = getRandomInt(0,4)
  
  let definitions = []
  let usedDefinitions = [wordsAndDefinitions[currentWordIndex].definition]

  for(let i = 0; i < 5; ++i)
  {
    let selectedDefinition = ""
    if(i === correctWordIndex)
    {
      selectedDefinition = wordsAndDefinitions[currentWordIndex].definition  
    }
    else
    {
      selectedDefinition = wordsAndDefinitions[getRandomInt(0, wordsAndDefinitions.length -1)].definition  
      while(usedDefinitions.includes(selectedDefinition))
      {
        selectedDefinition = wordsAndDefinitions[getRandomInt(0, wordsAndDefinitions.length -1)].definition  
      }
      usedDefinitions.push(selectedDefinition)
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
              fontSize: '20px',
              marginBottom: '10px',
              backgroundColor:
                isAnswered
                  ? definition === wordsAndDefinitions[currentWordIndex].definition
                    ? 'lightgreen'
                    : 'salmon'
                  : 'lightgray',
              color: 'black',

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
          <p>
            {`Example sentence:"${wordsAndDefinitions[currentWordIndex].sentence}"`}
          </p>
          <button onClick={handleNextWord}>Next Word</button>
        </div>
      )}
    </div>
  );
}

export default App;
