import "./riwayat.css";

const Riwayat = () => {
return (
    <div className="riwayat">
    <h1>Riwayat Pembelian</h1>
    <table className="rounded">
    <thead>
        <tr>
            <td>No</td>
            <td>Product</td>
            <td>Total Harga</td>
            <td>Payment Method</td>
            <td>Id Pesanan </td>
        </tr>
    </thead>
        
        <tr>
            <td>1</td>
            <td>Vicks Formula 44 Sirup 100 ml</td>
            <td>Rp. 95.500</td>
            <td>Dana</td>
            <td>320483602710924</td>
        </tr>

    </table>
    </div>
);
};

export default Riwayat;