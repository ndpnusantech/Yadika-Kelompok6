import "./success.css";
const Success = (props) => {
  return (
    <div className="boxSuccess mx-auto p-4 pt-5 pb-5">
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
      <h3 className="text-center fw-semibold">{props.success}</h3>
    </div>
  );
};

export default Success;
