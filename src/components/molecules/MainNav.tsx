import Icon from "../atoms/Icon";
import MenuButton from "../atoms/MenuButton";

export default function MainNav() {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          <li className="px-1">
            <MenuButton destination="/"><Icon name="Home" /></MenuButton>
          </li>
          <li className="px-1">
            <MenuButton destination="/plants">Plants</MenuButton>
          </li>
          <li className="px-1">
            <MenuButton destination="/blog">Blog</MenuButton>
          </li>
          <li className="px-1">
            <MenuButton destination="/glossary">Glossary</MenuButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
