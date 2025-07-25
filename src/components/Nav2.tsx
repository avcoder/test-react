const Nav2 = ({ onSelectCity }) => {
  return (
    <ul>
      <li>
        <h1 onClick={() => onSelectCity("Toronto")}>Toronto</h1>
      </li>
      <li>
        <h1 onClick={() => onSelectCity("Moscow")}>Moscow</h1>
      </li>
      <li>
        <h1 onClick={() => onSelectCity("Tokyo")}>Tokyo</h1>
      </li>
    </ul>
  );
};

export default Nav2;
