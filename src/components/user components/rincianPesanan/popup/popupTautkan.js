import "./popup.css";

const PopupTautkan = (props) => {
    const { show, onClose, title, content } = props;

    const handleClose = () => {
        onClose();
    }

    return (
        <div className={`center-popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <div className="popup-header">
                    <h3>{title}</h3>
                    <button className="close-button" onClick={handleClose}>X</button>
                </div>
                <div className="popup-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PopupTautkan;
