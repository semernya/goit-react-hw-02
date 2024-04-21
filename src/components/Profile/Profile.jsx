import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div className={css.userInfo}>
        <img className={css.logo} src={image} width={100} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.stat}>Followers</span>
          <span className={css.statValue}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.stat}>Views</span>
          <span className={css.statValue}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.stat}>Likes</span>
          <span className={css.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
