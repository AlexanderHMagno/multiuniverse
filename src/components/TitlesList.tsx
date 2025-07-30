import React from 'react';
import { motion } from 'framer-motion';

interface TitleCard {
  title: string;
  description: string;
  goodChoices: number;
  bgColor: string;
  textColor: string;
}

const titles: TitleCard[] = [
  {
    title: "The White Lord",
    description: "A paragon of virtue, making every decision with wisdom and compassion. The ultimate beacon of light in the multiverse.",
    goodChoices: 10,
    bgColor: "bg-sky-200 border-sky-200",
    textColor: "text-sky-950"
  },
  {
    title: "The Radiant Guardian",
    description: "A protector of realms who consistently chooses the path of light, inspiring others to follow.",
    goodChoices: 9,
    bgColor: "bg-sky-300 border-sky-200",
    textColor: "text-sky-950"
  },
  {
    title: "The Light Keeper",
    description: "A steadfast defender of justice who maintains balance while favoring benevolent choices.",
    goodChoices: 8,
    bgColor: "bg-sky-200 border-sky-300",
    textColor: "text-sky-950"
  },
  {
    title: "The Noble Protector",
    description: "A respected leader who primarily chooses good but understands the necessity of tough decisions.",
    goodChoices: 7,
    bgColor: "bg-indigo-300 border-indigo-400",
    textColor: "text-sky-950"
  },
  {
    title: "The Twilight Mediator",
    description: "One who walks between light and shadow, slightly favoring the path of good.",
    goodChoices: 6,
    bgColor: "bg-indigo-400 border-indigo-500",
    textColor: "text-white"
  },
  {
    title: "The Balance Walker",
    description: "A true neutral force in the multiverse, understanding both the light and dark nature of power.",
    goodChoices: 5,
    bgColor: "bg-orange-400 border-orange-500",
    textColor: "text-white"
  },
  {
    title: "The Shadow Dancer",
    description: "One who frequently embraces darkness but retains enough light to avoid complete corruption.",
    goodChoices: 4,
    bgColor: "bg-orange-500 border-orange-600",
    textColor: "text-white"
  },
  {
    title: "The Dark Seeker",
    description: "A wielder of power who primarily chooses dark paths while maintaining a small connection to light.",
    goodChoices: 3,
    bgColor: "bg-red-500 border-red-600",
    textColor: "text-white"
  },
  {
    title: "The Void Harbinger",
    description: "A formidable force of darkness with rare moments of mercy.",
    goodChoices: 2,
    bgColor: "bg-red-600 border-red-700",
    textColor: "text-white"
  },
  {
    title: "The Chaos Bringer",
    description: "A being of almost pure darkness, spreading fear and domination across dimensions.",
    goodChoices: 1,
    bgColor: "bg-red-700 border-red-800",
    textColor: "text-red-100"
  },
  {
    title: "The Master of Darkness",
    description: "The epitome of evil, choosing the dark path at every turn. A being of pure malevolence and unlimited ambition.",
    goodChoices: 0,
    bgColor: "bg-red-800 border-red-900",
    textColor: "text-red-100"
  }
];

export const TitlesList = () => {
  const numberOfGoodChoices = titles.length - 1;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Dimensional Titles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {titles.map((title, index) => (
          <motion.div
            key={title.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`card shadow-xl border-2 ${title.bgColor}`}
          >
            <div className="card-body">
              <h3 className={`card-title text-2xl ${title.textColor}`}>
                {title.title}
              </h3>
              <div className={`${title.textColor} mb-4 flex justify-center flex-row gap-2 text-xs font-bold`}>
                <span>{title.goodChoices} Light</span>
                <span>{numberOfGoodChoices - title.goodChoices} Dark</span>
              </div>
              <p className={`${title.textColor}`}>
                {title.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 