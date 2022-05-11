import { useRouter } from "next/router";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
  el.style.borderRadius = "5%";
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const NavLink = ({ children, to, theme }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === to ? "red" : "black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      style={style}
      onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
      onMouseOut={(event) => onMouseOut(event)}
    >
      {children}
    </a>
  );
};

export default NavLink;
