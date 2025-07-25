import { useState } from "react";

// components
import FollowPerson from "./FollowPerson";

const Lesson10 = () => {
  const [people, setPeople] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const onFollowHandler = () => {
    console.log("in onFollowHandler");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setPeople([...people, input]);
        }}
      >
        Submit
      </button>
      <ul>
        {people.map((person) => (
          <FollowPerson
            name={person}
            username={person.substring(0, 2)}
            avatar={`https://robohash.org/${person}.png`}
            isFollowing={person.isFollowing}
            onFollowHandler={onFollowHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default Lesson10;
