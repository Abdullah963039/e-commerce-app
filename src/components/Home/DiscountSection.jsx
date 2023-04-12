import img from "../../assets/imgs/laptops.png";

export default function DiscountSection() {
  return (
    <div
      className="container my-4 rounded-lg"
      style={{
        background:
          "linear-gradient(to right, #0e0e0e 0%, #7b7b7b 50%, #0e0e0e 100%)",
      }}
    >
      <div className="flex py-1">
        <div className="basis-1/2">
          <div className="flex h-full flex-col items-center justify-center">
            <p className="m-0 text-white">خصم يصل حتى 30% على أجهزة اللابتوب</p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="m-auto w-[140px]">
            <img src={img} alt="asas" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Container
      style={{
        background:
          "linear-gradient(to right, #0e0e0e 0%, #7b7b7b 50%, #0e0e0e 100%)",
        borderRadius: ".5rem",
      }}
    >
      <Row className="py-1">
        <Col sm={6}>
          <div className="d-flex justify-content-center align-items-center h-100 flex-col">
            <p className="m-0 text-white">خصم يصل حتى 30% على أجهزة اللابتوب</p>
          </div>
        </Col>
        <Col sm={6}>
          <div
            style={{
              width: "140px",
              margin: "auto",
            }}
          >
            <img src={img} alt="assad" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
