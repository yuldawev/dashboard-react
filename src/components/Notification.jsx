const RecentUpdate = ({text, userName, img, time}) => {
  return (
    <div className="update">
      <div className="profile-photo">
        <img src={img} alt="" />
      </div>
      <div className="message">
        <p>
          <b>{userName}</b> {text}
        </p>
        <small className="text-muted">{time}</small>
      </div>
    </div>
  );
};

export default RecentUpdate;
