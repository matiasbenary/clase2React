import './Button.css';

const Button = (props) => {
  return (
    <button className="button" type="button">
      {props.like} likes
    </button>
  );
};

export default Button;
