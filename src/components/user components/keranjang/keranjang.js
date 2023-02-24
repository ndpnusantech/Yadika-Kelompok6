import "./keranjang.css";

const Keranjang = () => {
    return(
        <div className="keranjang">
            <h1>Keranjang Anda</h1>
            <div className="box">
                <table>
                    <tr>
                        <th className="nama">Nama</th>
                        <th className="jumlah">Jumlah</th>
                        <th>Harga</th>
                    </tr>
                    <tr>
                        <td><img src="" alt="" />Vicks Formula 44 Sirup 100 ml <p>Per botol</p></td>
                        <td className="d-flex justify-content-evenly align-item-center"><button>+</button><span>5</span></td>
                        <td className="harga">95.500</td>
                    </tr>
                </table>
            </div>
            <div className="pesanan">
                <table>
                    <tr>
                        <th><h1>Pesanan</h1></th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Keranjang;