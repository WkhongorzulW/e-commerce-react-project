import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
import { Menus } from "../Seed";


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