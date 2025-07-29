# Snakes and Ladders Game

This is a web-based implementation of the classic **Snakes and Ladders** board game built using **React**. It supports multiple players, dynamic dice rolls, and real-time game status updates.

## Features

- Turn-based multiplayer gameplay  
- Interactive dice roller  
- Snakes and ladders logic (automatic movement on landing)  
- Win condition detection  
- Reset and replay functionality  
- Visual representation of player positions on the board  

## Technologies Used

- React (with Hooks)  
- JavaScript (ES6+)  
- HTML & CSS  
- Modular component structure  
- Basic data-driven logic using utility functions  

## Folder Structure##

```
src/
├── components/           # Reusable React components (GameBoard, PlayerInfo, etc.)
├── data/                 # Static data for board (snakes and ladders positions)
├── utils/                # Game logic helpers (move, switch turn, check win, etc.)
├── styles/               # CSS styles for layout and responsiveness
└── App.js                # Main application logic
```

## How to Run the App Locally

1. Clone this repository:
   ```
   git clone https://github.com/KHALIDIIN12(your username instead of the one used)/snakes-and-laders.git
   ```

2. Navigate to the project folder:
   ```
   cd snakes-and-laders
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to that link to play the game.

## How the Game Works

- Each player starts at position 1.  
- Players take turns rolling a dice (1–6).  
- If a player lands on the bottom of a ladder, they automatically move up.  
- If a player lands on the head of a snake, they automatically slide down.  
- The first player to reach square 100 exactly wins.  
- If a player rolls a value that overshoots 100, their turn is skipped.  

## Project Status

This project is fully functional and complete. All core features are implemented and working as expected. Future improvements could include sound effects, animations, or support for custom player names.

## License

This project was created by CHRISTIAN MICHAEL,EUGENE MURUGA,KHALID MOHAMED and MEGAN MUMBI.
