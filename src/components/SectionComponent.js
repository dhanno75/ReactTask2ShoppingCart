import { Container, Row, Col, Card } from "react-bootstrap";
import RatingComponent from "./RatingComponent";

const SectionComponent = ({ cardItems, addCart, removeCart, cartCount }) => {
  // For disabling specific 'Add to cart' button if clicked
  const disableSpecificAddBtn = function (e) {
    addCart();
    e.target.disabled = true;
    e.target.nextElementSibling.disabled = false;
  };

  // For disabling specific 'Remove' button if clicked
  const disableSpecificRemoveBtn = function (e) {
    removeCart();
    e.target.previousElementSibling.disabled = false;
  };
  // Card
  return (
    <section className="py-5">
      <Container className="px-4 px-lg-5 mt-5">
        <Row className="gx-4 gx-lg-5  row-cols-xl-4 justify-content-center">
          {cardItems.map((el, i) => (
            <Col className="mb-5" key={i}>
              <Card className="h-100">
                {el.sale === true ? (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                ) : (
                  <span></span>
                )}

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="someImage"
                />
                <Card.Body className="p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{el.product}</h5>
                    {el.id === 2 ||
                    el.id === 4 ||
                    el.id === 7 ||
                    el.id === 8 ? (
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <RatingComponent />
                      </div>
                    ) : (
                      ""
                    )}

                    {el.sale === true ? (
                      <span className="text-muted text-decoration-line-through my-1">
                        {el.beforeDiscountPrice}
                      </span>
                    ) : (
                      <span></span>
                    )}

                    {el.price}
                  </div>
                </Card.Body>
                <Card.Footer className="p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark addCart"
                      disabled={false}
                      onClick={
                        el.btn === "Add to cart" ? disableSpecificAddBtn : ""
                      }
                    >
                      {el.btn}
                    </button>
                    {el.btn === "Add to cart" ? (
                      <button
                        // disabled={true}
                        className="btn btn-outline-dark mx-2 removeCart"
                        onClick={disableSpecificRemoveBtn}
                      >
                        Remove
                      </button>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SectionComponent;
