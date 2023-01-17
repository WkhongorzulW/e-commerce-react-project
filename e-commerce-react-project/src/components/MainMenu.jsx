import { SubMenu, Category } from "./header/SubMenu";
import { Navbar } from "react-bootstrap";
import { Menus, categories } from "./Data";
import { Link } from "react-router-dom";

function MainMenu() {
  const category = categories.map((menu) => {
    return (
      <Category
        title={menu.title}
        position={menu.position}
        children={menu.children}
      />
    );
  });

  const subMenus = Menus.map((subMenu) => {
    return (
      <SubMenu
        title={subMenu.title}
        position={subMenu.position}
        children={subMenu.children}
      />
    );
  });

  return (
    <div className="inner-box">
      <Navbar>
        {category}
        <Link to={"/"} className="text-decoration-none text-secondary mx-5">
          Home
        </Link>
        {subMenus}
      </Navbar>
    </div>
  );
}

export default MainMenu;
