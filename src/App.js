// Ashique Arman

import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
  },
  {
    title: "Why use React?",
    content: "React is Flexible, React Has a Great Developer Experience, React Has Facebook's Support/Resources, React Has Broader Community Support, Too.",
  },
  {
    title: "How to git gud at React?",
    content: "Practice practice practice",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
