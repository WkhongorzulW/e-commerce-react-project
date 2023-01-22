import { toast, ToastContainer } from "react-toastify";

export default function Wishlist(props) {
  function handleClear(e) {
    props.setWishList(props.wishList.filter((wish) => wish.id !== e));
    toast(`${props.name} is removed from wishlist🙄`);
  }
  return (
    <div className="row border rounded my-2 position-relative">
      <img className="col" src={props.image} />
      <div className="col-7">
        <div className="fw-bold">{props.name}</div>
        <div>{props.price}</div>
      </div>
      <i
        className="fa-solid fa-x position-absolute clear opacity-50"
        onClick={() => {
          handleClear(props.id);
        }}
      ></i>
      <ToastContainer />
    </div>
  );
}
