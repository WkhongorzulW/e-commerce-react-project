import ContactFunc from "./ContactFunc";
import HeaderFunc from "./HeaderFunc";
import { header, contact } from "../Data";
import MainMenu from "./MainMenu";

export default function MainHeader(props) {
  const contactSec = contact.map((name, index) => {
    return (
      <ContactFunc
        key={index}
        help={name.help}
        store={name.store}
        delivery={name.delivery}
      />
    );
  });

  const headerSec = header.map((item, index) => {
    return (
      <HeaderFunc
        key={index}
        eLogo={item.eLogo}
        searchInput={item.searchInput}
        search={item.search}
        signIn={item.signIn}
        wishList={props.wishList}
        setWishList={props.setWishList}
        hearT={props.hearT}
        setHeart={props.setHeart}
        cart={props.cart}
        setCart={props.setCart}
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
