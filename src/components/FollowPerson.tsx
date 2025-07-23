// components
import Button from "./Button.tsx";

// types
type FollowPersonProps = {
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
};

const FollowPerson = ({
  name,
  username,
  avatar,
  isFollowing,
}: FollowPersonProps) => {
  const label = isFollowing ? "- Following" : "+ Follow";

  return (
    <article className="dt w-100 bb b--black-05 pb2 mt2">
      <div className="dtc w2 w3-ns v-mid">
        <img
          src={avatar}
          className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
        />
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{name} </h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">@{username}</h2>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <Button label={label} />
        </form>
      </div>
    </article>
  );
};

export default FollowPerson;
