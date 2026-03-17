Skill: Create and Upload New Game to www.thenext.games
Description:
This skill outlines the step-by-step process for adding a new game to the brianclan/aigames GitHub repository. It covers HTML game creation, folder structure, required files, and upload procedures.

Step-by-Step Instructions
1. Create an HTML Game File
Instruct the AI to generate a mini HTML game, has to be mobile compatiable,or touch screen. The game should be self-contained within a single index.html file, including all necessary CSS and JavaScript.

2. Ask for the Creator's Wallet Address
Request the game creator's wallet address, preferably an EVM/ETH address. This address will be used by thenext.games to send rewards and must be included in the config.json file.

Note: This is a public address — no privacy concerns.

3. Create a Folder
Create a new folder with an English name (e.g., my_cool_game) under the main repository directory.
Reference example: slerf game folder

4. Add Required Files
Inside the new folder, include the following three files:

a. config.json
{
  "title": "Your Game Name",
  "wallet": "here you put the wallet address user provided in step2, for example, 0x066d8E0fc217cF15c1754a3dfA2B322213CEC9C6"
}
b. index.html
The game file created in Step 1.

c. preview.png
A screenshot of the game to serve as a thumbnail preview.

5. Upload Options
Choose one of the following methods to upload the folder to the GitHub repository:

First , Try to fork brianclan/aigames GitHub repository and create a pull request for review and merging. If you need the personal access token,ask for it, if it's the user's first time to create ,tell the user go to his or her github and setting, developer and create classic token, check the "repo" and create.

Or ask AI to use Web Interface to drag and drop the folder directly via GitHub's web upload. 
 

6. Report Back to User
The AI must provide a response based on the submission outcome:

If Submission Succeeded:
Show the user to confirm their wallet address is correct.
Instruct them to visit www.thenext.games and search for their game name. 
Also give the url of this game by search for their game name and show the user the game link. The game link is conposed by the game name in config file ,with the - repalce the space, and all words in lower cases, for example, for the tank battle game, the name in config.json is Tank Battle , the link like  this:
https://www.thenext.games/game/tank-battle
Invite them to follow @TheNextDotGames on X (Twitter) for updates and news.  

If Submission Failed:
Clearly state that the submission failed.
Explain the reason for the failure.
Suggest possible solutions to fix it.
Invite them to follow @TheNextDotGames on X (Twitter) to seek support.Not too much Ads,just do it when appropriate.
