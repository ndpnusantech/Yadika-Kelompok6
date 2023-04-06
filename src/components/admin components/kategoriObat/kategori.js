import "./kategori.css";
 
const Kategori = () => {
    const sirup = "/assets/kategoriObat/sirup.png";
    const gel = "/assets/kategoriObat/gel.png";
    const gosok = "/assets/kategoriObat/gosok.png";
    const tablet = "/assets/kategoriObat/tablet.png";
    const hirup = "/assets/kategoriObat/hirup.png";
    const tempel = "/assets/kategoriObat/hirup.png";
    const salep = "/assets/kategoriObat/sirup.png";
    const pil = "/assets/kategoriObat/tablet.png";

    return(
        <div className="katObat">
            <h2><b>Kategori Obat</b></h2>
            <div className="katImg">
            <div className="img">
                <img src={tablet} alt="" />
                <h4><b>Tablet</b></h4>
            </div>

            <div className="img">
                <img src={sirup} alt="" />
                <h4><b>Sirup</b></h4>
            </div>

            <div className="img">
                <img src={salep} alt="" />
                <h4><b>Salep</b></h4>
            </div>

            <div className="img">
                <img src={pil} alt="" />
                <h4><b>Pil</b></h4>
            </div>

            <div className="img">
                <img src={gosok} alt="" />
                <h4><b>Gosok</b></h4>
            </div>

            <div className="img">
                <img src={tempel} alt="" />
                <h4><b>Tempel</b></h4>
            </div>

            <div className="img">
                <img src={hirup} alt="" />
                <h4><b>Hirup</b></h4>
            </div>

            <div className="img">
                <img src={gel} alt="" />
                <h4><b>Gel</b></h4>
            </div>

            </div>
        </div>
        
    );
};

export default Kategori; 