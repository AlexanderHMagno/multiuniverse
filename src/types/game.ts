export type Choice = {
  key: 'A' | 'B' | 'C';
  label: string;
  description: string;
  result: 'valid' | 'fail';
};

export type Round = {
  title: string;
  description: string;
  choices: Choice[];
};

export type GameState = {
  round: number;
  path: string[];
  isGameOver: boolean;
  result: 'success' | 'fail' | null;
};

export const gameData: Round[] = [
  {
    title: "Step 1: Where to Go?",
    description: "You wake up in a foggy village. You can see three paths ahead of you.",
    choices: [
      {
        key: 'A',
        label: "Walk towards the smoke in the distance",
        description: "You find an old barn that's been burned. Inside, there's a door in the floor that leads to a tunnel. This could be a way out!",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Go to the old church nearby",
        description: "The church door opens with a loud noise. As you walk in, the floor breaks and you fall into a dark basement. There's no way out.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Visit the house with a candle in the window",
        description: "An old woman opens the door. She looks at you and says, 'You're new here.' She gives you a key and tells you to use it carefully.",
        result: 'valid'
      }
    ]
  },
  {
    title: "Step 2: The Mystery Box",
    description: "You find a locked box with three items inside. Which one do you pick up?",
    choices: [
      {
        key: 'A',
        label: "Take the old map with strange marks",
        description: "The map shows hidden tunnels under the school. This matches what you saw in the barn!",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Pick up the mirror",
        description: "You look in the mirror and see a dark shape behind you. It pulls you in, and you're lost in darkness.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Grab the spinning compass",
        description: "The compass spins less when you're going the right way. It points you towards the school basement.",
        result: 'valid'
      }
    ]
  },
  {
    title: "Step 3: Choose Your Path",
    description: "You're in the school basement. There are three tunnels in front of you.",
    choices: [
      {
        key: 'A',
        label: "Take the wet tunnel with dripping water",
        description: "The tunnel leads to an underground lake. The door closes behind you, and you can't go back.",
        result: 'fail'
      },
      {
        key: 'B',
        label: "Follow the tunnel with glowing moss",
        description: "The moss makes pretty music. You sit down to listen and forget why you came here.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Enter the dark tunnel with warm air",
        description: "You can't see anything, but you feel warm air. You crawl forward and find sunlight at the end.",
        result: 'valid'
      }
    ]
  },
  {
    title: "Step 4: Time Doors",
    description: "You come out of the tunnel and see three glowing doors. Each shows a different time.",
    choices: [
      {
        key: 'A',
        label: "Go through the door showing the future",
        description: "You see tall buildings and flying cars. But you're stuck watching the same five minutes over and over.",
        result: 'fail'
      },
      {
        key: 'B',
        label: "Walk into the door with the old library",
        description: "The library has books about different worlds. You find one that shows you how to get home.",
        result: 'valid'
      },
      {
        key: 'C',
        label: "Enter the door with the old castle",
        description: "You appear in the castle prison. The guards think you're doing magic and lock you up.",
        result: 'fail'
      }
    ]
  },
  {
    title: "Step 5: The Magic Books",
    description: "In the library, you find three books that might help you get home.",
    choices: [
      {
        key: 'A',
        label: "Read 'The Mirror Book'",
        description: "The book tells you to look in a mirror and think of home. But you see too many copies of yourself and get confused.",
        result: 'fail'
      },
      {
        key: 'B',
        label: "Open 'The Door Book'",
        description: "The book says to draw a door and say where you live. But it takes you to the wrong houses.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Use 'The Memory Book'",
        description: "The book tells you to close your eyes and remember your home clearly. When you open them, you're back!",
        result: 'valid'
      }
    ]
  },
  {
    title: "Step 6: Strange Friends",
    description: "You're almost home, but you need help. Three unusual creatures offer to guide you.",
    choices: [
      {
        key: 'A',
        label: "Follow the glowing butterfly",
        description: "The butterfly is pretty, but it leads you in circles until you're lost in a garden of light.",
        result: 'fail'
      },
      {
        key: 'B',
        label: "Trust the talking cat",
        description: "The cat knows all the secret paths between worlds. It helps you find the right way home.",
        result: 'valid'
      },
      {
        key: 'C',
        label: "Go with the shadow bird",
        description: "The bird seems friendly, but it takes you to its nest in the dark world where shadows live.",
        result: 'fail'
      }
    ]
  },
  {
    title: "Step 7: The Last Test",
    description: "You're at the final door home. You must answer one last question to prove it's really you.",
    choices: [
      {
        key: 'A',
        label: "Tell a happy memory",
        description: "The memory is nice, but it's one that many people share. The door stays closed.",
        result: 'fail'
      },
      {
        key: 'B',
        label: "Show your favorite thing",
        description: "Your thing could belong to anyone from any world. The door doesn't open.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Share a secret only you know",
        description: "You whisper your special secret. The door recognizes you and opens to your real home.",
        result: 'valid'
      }
    ]
  }
]; 