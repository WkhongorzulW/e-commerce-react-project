import ContactFunc from "./ContactFunc";
import HeaderFunc from "./HeaderFunc";
import { header, contact } from "../Data";
import MainMenu from "./MainMenu";

export default function MainHeader(props) {
  const contactSec = contact.map((name) => {
    return (
      <ContactFunc
        help={name.help}
        store={name.store}
        delivery={name.delivery}
      />
    );
  });

  const headerSec = header.map((item) => {
    return (
      <HeaderFunc
        eLogo={item.eLogo}
        searchInput={item.searchInput}
        search={item.search}
        signIn={item.signIn}
        fav={item.fav}
        basket={item.basket}
        wishList={props.wishList}
        setWishList={props.setWishList}
        hearT={props.hearT}
        setHeart={props.setHeart}
      />
    );
  });

  return (
    <div>
      <header>
        {contactSec}
        {headerSec}
      </header>

      <div className="menu-container">
        <MainMenu />
      </div>
    </div>
  );
}
