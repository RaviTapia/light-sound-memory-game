# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ravindran Gabriel Tapia

Time spent: 4 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/cf0bb75e-c1b6-431e-ada8-ab6901b92d0a%2Fwalkthroughv.1.gif?v=1616468564504)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I did not use anything that was not given in the write-up. I followed the write up step by step. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge that came about while creating this submission was they guess function and if some other functions were working. The
guess function in general was harder than most functions as it had the most logic in it. However, I took my time to think about the flowchart
and use if else to create an easy way to understand the different options of a guess. During the implementation, the playSequence function was not working.
I had a hard time figuring out why as it looked just like the write Up wanted me to, although it did not take long to fix, I used many console.log
statement to make sure everything was working as it should. It turns out I had a quotation marks where there shouldn't have been and it caused it to not work.
Using developer tools, I was able to see that fast and the console statements made sure that the playSequence was used. In addition, while implementing more buttons
and the 3 lives idea, it was hard to decide whether the user would just continue from where they make the mistake or start over. I 
decided that ultimately they should restart the pattern from the beginning rather than from where they made a mistake.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have learned a lot about web development during school and the projects I have worked on. A question that always comes up
to me is how do people create websites that are usable on both mobile devices like phones
and on the desktop/laptop. Another questions is what usually goes on in the mind of a web developer because I am curious
as to what they think about when they implement things such as games like these. I thought of many cases such as what if the
user tries to push a button while the sequence is going? How would I handle that situation.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, I would try to turn this into a two player game. Where each player makes their own
pattern and the opposing player would have to repeat the pattenr back to them. They would continue to do this
until a player forgets the others pattern. I would try to make this game friendlier for those have a hard time hearing or differentiating colors!



## License

    Copyright [Ravi Tapia]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
