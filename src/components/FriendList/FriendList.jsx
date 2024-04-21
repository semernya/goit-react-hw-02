import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((el) => (
        <li className={css.item}  key={el.id}>
          <FriendListItem friend={el} />
        </li>
      ))}
    </ul>
  );
}
