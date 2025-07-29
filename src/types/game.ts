export type Choice = {
  key: 'A' | 'B' | 'C';
  label: string;
  description: string;
  result: 'valid' | 'dark';
  ending?: string;
};

export type Round = {
  title: string;
  description: string;
  choices: Choice[];
  isDarkPath?: boolean;
};

export type GameState = {
  round: number;
  path: string[];
  isGameOver: boolean;
  result: 'success' | 'dark' | null;
  ending?: string;
  isDarkPath?: boolean;
};

export const gameData: Round[] = [
  {
    title: "The Mysterious Portal",
    description: "You discover a strange portal in your backyard. Three shimmering doorways appear before you.",
    choices: [
      {
        key: 'A',
        label: "Step through the golden doorway",
        description: "The golden light envelops you, transporting you to a world of advanced technology and floating cities.",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Enter the silver doorway",
        description: "The silver mist surrounds you, leading to an enchanted forest filled with magical creatures.",
        result: 'valid'
      },
      {
        key: 'C',
        label: "Choose the bronze doorway",
        description: "The bronze portal pulses with dark energy, offering untold power to those who dare to grasp it.",
        result: 'dark'
      }
    ]
  },
  // Light Path Steps
  {
    title: "First Challenge",
    description: "In this new world, you face your first challenge. How do you proceed?",
    choices: [
      {
        key: 'A',
        label: "Use technology/magic to help others",
        description: "You discover your ability to combine technology/magic to heal and assist the local inhabitants.",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Study the world's mysteries",
        description: "You find ancient texts and artifacts that reveal the secrets of dimensional travel.",
        result: 'valid'
      },
      {
        key: 'C',
        label: "Seize control of local resources",
        description: "You realize that controlling key resources would give you significant power in this dimension.",
        result: 'dark'
      }
    ]
  },
  // Dark Path Alternative Steps
  {
    title: "Dark Awakening",
    description: "The dark energy courses through you, revealing new possibilities. What is your first move?",
    isDarkPath: true,
    choices: [
      {
        key: 'A',
        label: "Corrupt the local leadership",
        description: "You begin manipulating those in power, turning them into your puppets.",
        result: 'dark'
      },
      {
        key: 'B',
        label: "Build a shadow army",
        description: "You start recruiting followers, promising them a share of your growing power.",
        result: 'dark'
      },
      {
        key: 'C',
        label: "Seek redemption",
        description: "You try to resist the dark power's influence.",
        result: 'valid'
      }
    ]
  },
  {
    title: "Power Consolidation",
    description: "Your influence grows stronger. How do you expand your control?",
    isDarkPath: true,
    choices: [
      {
        key: 'A',
        label: "Master forbidden magic",
        description: "You delve into ancient dark arts, gaining tremendous but corrupted power.",
        result: 'dark'
      },
      {
        key: 'B',
        label: "Create a network of spies",
        description: "You establish an intricate web of informants across dimensions.",
        result: 'dark'
      },
      {
        key: 'C',
        label: "Consider peaceful alternatives",
        description: "You question whether absolute power is truly what you seek.",
        result: 'valid'
      }
    ]
  },
  {
    title: "The Choice of Power",
    description: "You've gained knowledge and abilities. How will you use your newfound power?",
    choices: [
      {
        key: 'A',
        label: "Share knowledge with everyone",
        description: "You decide to teach others, creating a network of dimensional travelers.",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Become a guardian",
        description: "You take on the responsibility of protecting the boundaries between worlds.",
        result: 'valid'
      },
      {
        key: 'C',
        label: "Dominate weaker dimensions",
        description: "You begin conquering dimensions that can't resist your power.",
        result: 'dark'
      }
    ]
  },
  {
    title: "Dark Conquest",
    description: "Your dominion expands. How will you handle resistance?",
    isDarkPath: true,
    choices: [
      {
        key: 'A',
        label: "Crush all opposition",
        description: "You demonstrate your overwhelming power by destroying any who dare resist.",
        result: 'dark'
      },
      {
        key: 'B',
        label: "Manipulate dimensional politics",
        description: "You pit dimensions against each other, weakening them for eventual conquest.",
        result: 'dark'
      },
      {
        key: 'C',
        label: "Show unexpected mercy",
        description: "You consider that true power might lie in forgiveness.",
        result: 'valid'
      }
    ]
  },
  {
    title: "Building Alliances",
    description: "Your influence grows. Which group do you choose to strengthen your cause?",
    choices: [
      {
        key: 'A',
        label: "Partner with the Quantum Engineers",
        description: "Their advanced technology could revolutionize dimensional travel safety.",
        result: 'valid'
      },
      {
        key: 'B',
        label: "Unite with the Ancient Mystics",
        description: "Their wisdom could help prevent dimensional catastrophes.",
        result: 'valid'
      },
      {
        key: 'C',
        label: "Subjugate powerful beings",
        description: "You enslave powerful entities to serve your growing empire.",
        result: 'dark'
      }
    ]
  },
  {
    title: "Empire of Shadows",
    description: "Your dark empire grows. How do you ensure absolute control?",
    isDarkPath: true,
    choices: [
      {
        key: 'A',
        label: "Create dark artifacts",
        description: "You forge powerful items to extend your influence across dimensions.",
        result: 'dark'
      },
      {
        key: 'B',
        label: "Establish a reign of terror",
        description: "You implement a system of fear and control across your domains.",
        result: 'dark'
      },
      {
        key: 'C',
        label: "Consider peaceful governance",
        description: "You wonder if your empire could be ruled through respect rather than fear.",
        result: 'valid'
      }
    ]
  },
  {
    title: "The Ultimate Choice",
    description: "A new discovery could change everything. What will you do with this knowledge?",
    choices: [
      {
        key: 'A',
        label: "Evolve dimensional travel",
        description: "Use the discovery to make dimensional travel accessible to all worthy beings.",
        result: 'valid',
        ending: "The Evolution Master: Your breakthrough revolutionizes dimensional travel, making it safe and accessible to all who seek knowledge and understanding. The multiverse enters a golden age of exploration and cooperation."
      },
      {
        key: 'B',
        label: "Preserve the balance",
        description: "Implement the discovery carefully to maintain dimensional harmony.",
        result: 'valid',
        ending: "The Balance Keeper: Your careful stewardship of dimensional knowledge creates a perfect equilibrium between progress and stability. Future generations praise your wisdom in maintaining the delicate balance."
      },
      {
        key: 'C',
        label: "Achieve ultimate power",
        description: "Use the knowledge to ascend to godlike status.",
        result: 'dark'
      }
    ]
  },
  {
    title: "The Dark Throne",
    description: "You stand at the precipice of absolute power. What kind of ruler will you become?",
    isDarkPath: true,
    choices: [
      {
        key: 'A',
        label: "Rule with absolute power",
        description: "You become the supreme ruler of the multiverse, feared by all.",
        result: 'dark',
        ending: "The Dark Sovereign: Your iron grip extends across all dimensions. None dare challenge your absolute authority, and the multiverse trembles at the mere whisper of your name. Your power is unmatched, your rule eternal."
      },
      {
        key: 'B',
        label: "Create a dark paradise",
        description: "You reshape reality according to your vision of perfect order.",
        result: 'dark',
        ending: "The Reality Tyrant: You remake the multiverse in your image, creating a dark utopia where your will is law. Every dimension reflects your twisted vision of perfection, and all beings serve your grand design."
      },
      {
        key: 'C',
        label: "Seek redemption",
        description: "At the height of your power, you choose a different path.",
        result: 'valid',
        ending: "The Redeemed Ruler: In your moment of ultimate triumph, you choose mercy over power. Your empire transforms into a force for good, proving that even the darkest heart can find the light."
      }
    ]
  }
]; 