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
            <div>Here is main menu</div>
            <Navbar className="bg-warning">
                {subMenus}
            </Navbar>
        </div>
    )
}

export default MainMenu;