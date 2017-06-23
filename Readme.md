# Pig Dice Game
A web page that allows 2-players to take turns rolling a single die with a range of 1-6 in value. The first player to reach a score of 100 or more wins. A player can roll as often as they desire during their turn, and every number value rolled will be added to their final score once their turn is complete. A player's turn is complete if they decide to hold where they are with the total value of their turn, however the player's turn is ended immediately if at any point they roll a value of 1 and all points acquired during that turn are forfited and not added to their total score. When one player's turn is over, it becomes the other player's turn.

## Code Specs
|Behavior - Plain English|Input|Output|
|---|---|---|
|Clicking the roll button will return a value of 1-6|Click Roll Button|One of the potential values will populate in their roll score: 1,2,3,4,5,6|
|A player's turn is complete by clicking the hold button and their turn score is added to their total score|Hold button is clicked|Total Score increases by the turn score amount|
|A player's turn is complete by rolling a 1 value and their turn score becomes 0 in value|Player rolls a 1 value|The player's turn score becomes 0 and it's the other player's turn|
|A player is given a win notification when their total score is greater than or equal to 100|Player clicks on the hold button after the sum of the player's turn score and total score are 100 or greater|The player is notified that they have won|

## Technologies Used
* HTML
* JavaScript
* jQuery
* Bootstrap

### License
