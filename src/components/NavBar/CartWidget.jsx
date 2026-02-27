import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
  return (
    <div className="position-relative">
      <i className="bi bi-cart3 fs-4 text-white"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </div>
  );
};

export default CartWidget;
