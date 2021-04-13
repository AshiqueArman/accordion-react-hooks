// Ashique Arman

import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
<<<<<<< HEAD
    content:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
  },
  {
    title: "Why use React?",
    content:
      "React is Flexible, React Has a Great Developer Experience, React Has Facebook's Support/Resources, React Has Broader Community Support, Too.",
=======
    content: "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
  },
  {
    title: "Why use React?",
    content: "React is Flexible, React Has a Great Developer Experience, React Has Facebook's Support/Resources, React Has Broader Community Support, Too.",
>>>>>>> e7ace4838e39b76ac55b1ac102b06a2adae7ef00
  },
  {
    title: "How to git gud at React?",
    content: "Practice practice practice",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
