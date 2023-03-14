import "./input.css"

const InputFile = () => {
    const grup = "/assets/inputFile/Grup.svg";
    const vic = "/assets/inputFile/Group 73.png";

    return (
        <div className="inputFile">
            <h2>Masukan bukti pembayaran <br /> berupa file img</h2>  
            <img src={grup} alt="" />
            <div className="box">
                <img src={vic} alt="" className="img-vic"/>
                <button className="btn-upload">Upload Image</button> 
                <h4>Or drop a file,</h4>
                <p>Paste img or URL</p>
            </div>
        </div>
    );
};

export default InputFile;