import './mailList.css'

export default function MailList() {
  return (
    <div className="mailList">
      <div className="mailListContainer">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
          Sign uo and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
