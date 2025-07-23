import "tachyons";

// components
import FollowPerson from "./FollowPerson.tsx";

const data = [
  {
    avatar: "http://mrmrs.github.io/photos/p/2.jpg",
    name: "Young Gatchell",
    username: "yg",
  },
];

const Lesson02 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff", width: "90vw", height: "90vh" }}>
        <main className="mw6 pt2 center">
          {data.map((person) => (
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
