import './Link.css';

const Link = (props) => {
  return (
    <a className="link" href={props.redirect} target="_blank" rel="noreferrer">
      I am link
    </a>
  );
};

export default Link;
