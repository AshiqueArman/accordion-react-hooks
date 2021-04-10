import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end js library",
  },
  {
    title: "Why use React?",
    content: "React is the most popular one right now",
  },
  {
    title: "How to learn React?",
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
