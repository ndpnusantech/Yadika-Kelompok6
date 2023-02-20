import React from "react";
import { Container } from "react-bootstrap";
import "./category.css";
import CtaCategory from "./CtaCategory";

const Category = () => {
  return (
    <div className="category">
      <Container>
        <h3 className="mt-4 mb-4">Kategori</h3>
        <div className="d-flex flex-wrap justify-content-between mb-3">
          <CtaCategory
            name="Masuk Angin"
            image="assets/category obat/masukAngin.png"
          />
          <CtaCategory
            name="Sakit Gigi"
            image="assets/category obat/sakitGigi.png"
          />
          <CtaCategory
            name="Batuk & Pilek"
            image="assets/category obat/batukPilek.png"
          />
          <CtaCategory name="Demam" image="assets/category obat/demam.png" />
          <CtaCategory
            name="Sakit Mata"
            image="assets/category obat/sakitMata.png"
          />
          <CtaCategory
            name="Sariawan"
            image="assets/category obat/Sariawan.png"
          />
          <CtaCategory
            name="Sakit Kepala"
            image="assets/category obat/sakitKepala.png"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <CtaCategory name="Alergi" image="assets/category obat/alergi.png" />
          <CtaCategory name="Cacar" image="assets/category obat/cacar.png" />
          <CtaCategory name="Asma" image="assets/category obat/asma.png" />
          <CtaCategory name="P3K" image="assets/category obat/p3k.png" />
          <CtaCategory
            name="Antiseptik"
            image="assets/category obat/antiseptik.png"
          />
          <CtaCategory
            name="Diabetes"
            image="assets/category obat/diabetes.png"
          />
          <CtaCategory
            name="Lainnya"
            image="assets/category obat/lainnya.png"
          />
        </div>
      </Container>
    </div>
  );
};

export default Category;
