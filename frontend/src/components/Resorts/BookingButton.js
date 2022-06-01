import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"


function BookingButton() {
    const dispatch = useDispatch();

    const [showBookMenu, setShowBookMenu] = useState(false);

  const openMenu = () => {
    if (showBookMenu) return;
    setShowBookMenu(true);
  };

  useEffect(() => {
    if (!showBookMenu) return;

    const closeMenu = () => {
        setShowBookMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showBookMenu]);

  const bookResort = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={openMenu}>
        <a>Book</a>
      </button>
      {showBookMenu && (
        <ul className="profile-dropdown">
          <li>ENTER DATA</li>
          <li>ENTER END DATE</li>
          <li>
            <button onClick={bookResort}>book today!</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default BookingButton;
