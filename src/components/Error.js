import "./Error.css";
import "./Button.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className='backdrop'onClick={props.onConfirm}/>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button className="button" onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
