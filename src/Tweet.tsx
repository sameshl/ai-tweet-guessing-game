function Tweet({ tweet }: any) {
  return (
    <div className="tweet">
      <Avatar tweet={tweet} />
      <div className="content">
        <Author tweet={tweet} />
        <Message tweet={tweet} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ tweet }: any) {
  return <img src={tweet.pfpImageLink} className="avatar" alt="avatar" />;
}

function Message({ tweet }: any) {
  return <div className="message">{tweet.tweet}</div>;
}

function Author({ tweet }: any) {
  return (
    <span className="author">
      <span className="name">{tweet.name}</span>
      <span className="handle">@{tweet.handle}</span>
    </span>
  );
}

// const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

export default Tweet;
