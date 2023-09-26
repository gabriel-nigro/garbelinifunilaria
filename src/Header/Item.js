const Item = ({ title, anchor, type }) => {
  return (
    <li className="nav-item">
      <a className={`nav-link navbar-text-${type} px-3`} href={anchor}>
        {title}
      </a>
    </li>
  );
};

export default Item;
