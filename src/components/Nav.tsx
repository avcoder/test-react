type NavProps = {
  onCitySelect: (city: string) => void;
};

const Nav = ({ onCitySelect }: NavProps) => {
  return (
    <ul style={{ display: "flex", gap: "40px", listStyleType: "none" }}>
      <li>
        <h1 onClick={() => onCitySelect("Toronto")}>Toronto</h1>
      </li>
      <li>
        <h1 onClick={() => onCitySelect("Moscow")}>Moscow</h1>
      </li>
      <li>
        <h1 onClick={() => onCitySelect("Tokyo")}>Tokyo</h1>
      </li>
    </ul>
  );
};

export default Nav;
