const CtaCategory = (props) => {
  return (
    <div className="CTA-Category">
      <a href="">
        <img src={props.image} alt="" /> <p>{props.name}</p>
      </a>
    </div>
  );
};

export default CtaCategory;
