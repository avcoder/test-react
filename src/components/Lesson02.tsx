import { useState } from "react";

import "tachyons";

// components
import FollowPerson from "./FollowPerson.tsx";
import Button from "./Button.tsx";

const data2 = [
  {
    avatar: "http://mrmrs.github.io/photos/p/2.jpg",
    name: "Young Gatchell",
    username: "yg",
  },
  {
    avatar: "http://mrmrs.github.io/photos/p/3.jpg",
    name: "Abe Lincoln",
    username: "al",
  },
  {
    avatar: "http://mrmrs.github.io/photos/p/4.jpg",
    name: "Queen Latifah",
    username: "ql",
  },
];

const Lesson02 = () => {
  const [people, setPeople] = useState([]);

  const addUser = () => {
    // pop from data2 which returns an element that's popped
    const person = data2.pop();
    setPeople([...people, person]);
    // push that element into data
    // set new State
  };

  return (
    <>
      <div style={{ backgroundColor: "#fff", width: "90vw", height: "90vh" }}>
        <Button label="Add user" clickHandler={addUser} />
        <main className="mw6 pt2 center">
          {people.map((person) => (
            <FollowPerson
              key={person.username}
              name={person.name}
              username={person.username}
              avatar={person.avatar}
              isFollowing={true}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Lesson02;
