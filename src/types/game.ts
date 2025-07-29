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
    title: "Round 1: First Move",
    description: "You wake up in a foggy village. What do you do?",
    choices: [
      {
        key: 'A',
        label: "Follow the smoke rising in the distance",
        description: "You find a burned-out barn. Inside, a trapdoor leads to a tunnel. You found a hidden passageway.",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Enter the abandoned chapel nearby",
        description: "The chapel door creaks open. Inside, the floor cracks and drops you into a cellar. You're stuck in darkness.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Knock on the door of a house with a flickering candle",
        description: "An old woman opens the door. She looks you over and says, \"You're not from here, are you?\" She gives you a strange key and says, \"Use it wisely.\"",
        result: 'valid'
      }
    ]
  },
  {
    title: "Round 2: A Hidden Message",
    description: "Whether you followed the map or met the woman, you end up at a locked drawer containing three mysterious items.",
    choices: [
      {
        key: 'A',
        label: "A torn map marked with symbols",
        description: "The map shows secret tunnels under the schoolhouse. It matches what you saw at the barn.",
        result: 'valid'
      },
      {
        key: 'B',
        label: "A mirror that reflects a shadow behind you",
        description: "You lift the mirror. A shadow leaps out and pulls you into its world. Everything resets.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "A brass compass spinning wildly",
        description: "You pocket the compass. As you move, it slows down — only near the correct path. It silently guides you toward the schoolhouse basement.",
        result: 'valid'
      }
    ]
  },
  {
    title: "Round 3: Final Escape",
    description: "You reach the schoolhouse basement. Three tunnels lie ahead — only one leads out. This is your final decision.",
    choices: [
      {
        key: 'A',
        label: "Tunnel with water dripping from the ceiling",
        description: "You follow the water — but it leads into an underground reservoir. No exit. The door behind seals shut.",
        result: 'fail'
      },
      {
        key: 'B',
        label: "Tunnel filled with glowing moss and singing sounds",
        description: "The moss glows. The tunnel sings to you. You stop walking. You sit. You forget you were ever trying to escape.",
        result: 'fail'
      },
      {
        key: 'C',
        label: "Pitch-black tunnel with warm air flowing out",
        description: "The darkness is complete — but you trust the warmth. You crawl. Eventually, your fingers touch sunlight and grass.",
        result: 'valid'
      }
    ]
  }
]; 