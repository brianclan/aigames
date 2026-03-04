# How to Contribute a New Game

Welcome to contributing your HTML games to the **aigames** repository! Please follow the steps below carefully to ensure your game is correctly recognized and displayed.

## Submission Steps

### 1. **Fork and Clone the Repository**
First, fork this repository to your own GitHub account, then clone it to your local machine:
```bash
git clone https://github.com/your-username/aigames.git
cd aigames
```

### 2. **Create a Game Folder**
In the root directory of the repository, **create a new folder**.
*   **Folder Naming Rules**: Use lowercase English letters, numbers, or underscores (`_`). The name should clearly describe the game. For example: `my_awesome_game`, `2048`, `space_invaders`.

### 3. **Add the Required Files**
Inside your newly created game folder, you **must** include the following three files:

#### a. `config.json` (Configuration File)
This file defines the basic information of your game. The format is as follows:
```json
{
    "title": "Your Game Name Here"
}
```
*   **Note**: The value of `"title"` will be used as the game's display name on the webpage. You can use your desired game name (supports special characters and spaces).

#### b. `index.html` (Main Game File)
This is the core HTML file for your game. Please ensure your entire game (including styles and scripts) is contained within this single file for easy deployment and sharing.

#### c. `preview.png` (Game Preview Image)
A preview image for your game.
*   **Format**: PNG.
*   **Naming**: Must be exactly `preview.png`.
*   **Purpose**: This image will serve as the game's thumbnail in the list. It's recommended to use a clear image that accurately showcases the game's core gameplay or interface.

### 4. **Example of Complete File Structure**
After completing the steps above, your local repository structure should look similar to this:
```
aigames/
├── .vscode/
├── 2048/
├── Billiards/
├── ... (other existing game folders)
├── your_new_game_folder/       # Your newly created folder
│   ├── config.json            # Contains the game title
│   ├── index.html             # Complete game code
│   └── preview.png            # Game preview image
├── README.md
└── ...
```

### 5. **Submit Your Contribution**
1.  Add your changes to the staging area:
    ```bash
    git add your_new_game_folder/
    ```
2.  Commit your changes with a clear descriptive message:
    ```bash
    git commit -m "Add new game: [Your Game Name]"
    ```
3.  Push the code to your forked remote repository:
    ```bash
    git push origin main
    ```
4.  Finally, open a **Pull Request** on GitHub against the original repository `brianclan/aigames`. Please provide a brief description of your game in the PR.

## Important Notes
*   **File Completeness**: Make sure all three files (`config.json`, `index.html`, and `preview.png`) exist and are named **exactly** as specified (including case sensitivity, e.g., `preview.png` cannot be `Preview.png`).
*   **Single HTML File**: Please try to keep all game logic and styles within `index.html`. Avoid referencing external files (except for public libraries from CDNs) to ensure the game's independence and portability.
*   **Follow Naming Conventions**: When creating a new folder, avoid using Chinese characters or special symbols to prevent potential path errors on certain systems or environments.

Thank you for your contribution! If you encounter any issues during this process, feel free to ask in your Pull Request.
