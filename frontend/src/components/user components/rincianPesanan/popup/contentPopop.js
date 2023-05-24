const ContentPopup = () => {
  const [showPopupBayar, setShowPopupBayar] = useState(false);

  const handleShowPopupBayar = () => {
    setShowPopupBayar(true);
  };

  const handleClosePopupBayar = () => {
    setShowPopupBayar(false);
  };

  const handleKonfirmasi = (event) => {
    event.preventDefault();
    handleShowPopupBayar();
  };

  return (
    <div className="ContentPopup">
      <Form onSubmit={handleKonfirmasi}>
        <Form.Label>Masukan akun Anda</Form.Label>
        <Form.Control placeholder="08726715632" />

        <button className="mt-3 btn btn-md btn-primary" type="submit">
          Konfirmasi
        </button>
      </Form>

      <PopupBayar
        show={showPopupBayar}
        onClose={handleClosePopupBayar}
        title="Pembayaran"
      />
    </div>
  );
};

export default ContentPopup;
