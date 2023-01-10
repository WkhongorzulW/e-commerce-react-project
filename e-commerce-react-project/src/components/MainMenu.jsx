import SubMenu from "./header/SubMenu";
import { Navbar } from "react-bootstrap";
import { Menus } from "./Data";


function MainMenu(){
    const subMenus = Menus.map(subMenu => {
        return(
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />
        )
    });

    return(
        <div>
            <Navbar>
                {subMenus}
            </Navbar>
        </div>
    )
}

export default MainMenu;