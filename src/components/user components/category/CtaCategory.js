import { Link } from 'react-router-dom'

const CtaCategory = (props) => {
  return (
    <div className="CTA-Category">
      <Link to={props.redirectTo}>
        <img src={props.image} alt="" /> <p>{props.name}</p>
      </Link>
    </div>
  );
};

export default CtaCategory;
