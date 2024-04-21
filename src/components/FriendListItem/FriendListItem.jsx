import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <div>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p
        className={clsx(
          css.statusText,
          isOnline ? css.isOnline : css.isOffline
        )}
      >
        {isOnline ? "Onine" : "Offline"}
      </p>
    </div>
  );
}
