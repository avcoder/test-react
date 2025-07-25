// hooks
import useToggle2 from "../hooks/useToggle2";

const Lesson06 = () => {
  const [isFollowing, toggleFollowing] = useToggle2(false);

  const label = isFollowing ? "- Following" : "+ Follow";

  return (
    <>
      <button onClick={toggleFollowing}>{label}</button>
    </>
  );
};

export default Lesson06;
