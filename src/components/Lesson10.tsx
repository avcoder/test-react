import { useState } from "react";

// components
import FollowPerson from "./FollowPerson.tsx";
import Lesson01 from "./Lesson01.tsx";

// types
export type PersonType = {
  name: string;
  isFollowing?: boolean;
};

const Lesson10 = () => {
  const [people, setPeople] = useState<PersonType[]>([]);
  const [input, setInput] = useState("");

  const onFollowHandler = (updatedPerson: PersonType) => {
    setPeople(
      people.map((p) => (p.name === updatedPerson.name ? updatedPerson : p))
    );
  };

  return (
    <>
      <Lesson01 />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setPeople([{ name: input }, ...people]);
          setInput("");
        }}
      >
        Submit
      </button>
      <ul style={{ width: "400px" }}>
        {people.map((person) => (
          <FollowPerson
            name={person.name}
            username={person.name.substring(0, 2)}
            avatar={`https://robohash.org/${person.name}.png`}
            isFollowing={person.isFollowing}
            onFollowHandler={onFollowHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default Lesson10;
