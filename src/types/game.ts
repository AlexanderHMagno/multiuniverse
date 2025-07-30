export type Choice = {
  key: 'A' | 'B' | 'C';
  label: string;
  description: string;
  result: 'valid' | 'dark';
  ending?: string;
  morality: 'good' | 'evil';
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
  goodChoices: number;
  evilChoices: number;
  title?: string;
};

export const getTitleByMorality = (goodChoices: number): string => {
  switch (goodChoices) {
    case 10:
      return "The White Lord";
    case 9:
      return "The Radiant Guardian";
    case 8:
      return "The Light Keeper";
    case 7:
      return "The Noble Protector";
    case 6:
      return "The Twilight Mediator";
    case 5:
      return "The Balance Walker";
    case 4:
      return "The Shadow Dancer";
    case 3:
      return "The Dark Seeker";
    case 2:
      return "The Void Harbinger";
    case 1:
      return "The Chaos Bringer";
    case 0:
      return "The Master of Darkness";
    default:
      return "The Unknown";
  }
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
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Enter the silver doorway",
        description: "The silver mist surrounds you, leading to an enchanted forest filled with magical creatures.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Choose the bronze doorway",
        description: "The bronze portal pulses with dark energy, offering untold power to those who dare to grasp it.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "First Challenge",
    description: "In this new world, you face your first challenge. How do you proceed?",
    choices: [
      {
        key: 'A',
        label: "Use technology/magic to help others",
        description: "You discover your ability to combine technology/magic to heal and assist the local inhabitants.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Study the world's mysteries",
        description: "You find ancient texts and artifacts that reveal the secrets of dimensional travel.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Seize control of local resources",
        description: "You realize that controlling key resources would give you significant power in this dimension.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "Power Decision",
    description: "You've discovered a source of great power. What do you do with it?",
    choices: [
      {
        key: 'A',
        label: "Share it with those in need",
        description: "You distribute the power to help struggling communities thrive.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Keep it for emergencies",
        description: "You store the power away, saving it for when it's truly needed.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Use it to dominate others",
        description: "You harness the power to bend others to your will.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "The Test of Mercy",
    description: "You encounter a defeated enemy. How do you handle them?",
    choices: [
      {
        key: 'A',
        label: "Offer forgiveness",
        description: "You extend a hand of friendship, turning an enemy into an ally.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Imprison them justly",
        description: "You ensure they face fair consequences for their actions.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Make an example of them",
        description: "You punish them severely to deter any future opposition.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "Knowledge and Secrets",
    description: "You discover forbidden knowledge. What will you do with it?",
    choices: [
      {
        key: 'A',
        label: "Use it for protection",
        description: "You apply the knowledge to create defensive measures.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Seal it away safely",
        description: "You ensure the knowledge cannot be misused.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Exploit its power",
        description: "You use the forbidden knowledge to enhance your abilities.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "The Choice of Leadership",
    description: "A community looks to you for guidance. How will you lead?",
    choices: [
      {
        key: 'A',
        label: "Establish democracy",
        description: "You help them create a fair system of self-governance.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Become a just ruler",
        description: "You take charge but ensure fairness and prosperity for all.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Rule with fear",
        description: "You establish absolute control through intimidation.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "Resource Distribution",
    description: "You control vital resources. How do you manage them?",
    choices: [
      {
        key: 'A',
        label: "Create fair trade",
        description: "You establish a system of equitable exchange.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Build public works",
        description: "You invest in infrastructure for everyone's benefit.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Monopolize everything",
        description: "You use resources to create dependency on your rule.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "Crisis Management",
    description: "Multiple dimensions face a catastrophe. How do you respond?",
    choices: [
      {
        key: 'A',
        label: "Coordinate rescue efforts",
        description: "You organize a massive operation to save lives.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Develop protection systems",
        description: "You create safeguards to prevent future disasters.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Profit from chaos",
        description: "You use the crisis to expand your influence.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "The Final Choice",
    description: "Your actions have led to this moment. What kind of ruler will you become?",
    choices: [
      {
        key: 'A',
        label: "Establish peace",
        description: "You use your power to create lasting harmony.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Protect the realms",
        description: "You become a guardian of dimensional balance.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Dominate all",
        description: "You assert absolute control over every dimension.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  },
  {
    title: "Legacy Definition",
    description: "The multiverse awaits your final decision. How will you be remembered?",
    choices: [
      {
        key: 'A',
        label: "Create a council of equals",
        description: "You establish a democratic system across dimensions.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'B',
        label: "Become a wise mentor",
        description: "You dedicate yourself to teaching and guiding others.",
        result: 'valid',
        morality: 'good'
      },
      {
        key: 'C',
        label: "Forge an empire of darkness",
        description: "You create an eternal dynasty of absolute power.",
        result: 'dark',
        morality: 'evil'
      }
    ]
  }
]; 