function Tweet({ username, name, date, message }) {
  return (
    <div className="Tweet">
      <p>{username}</p>
      <p>{name}</p>
      <p>{date}</p>
      <h3>{message}</h3>
    </div>
  );
}
