import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="py-5 bg-dark">
      <Container>
        <p className="m-0 text-center text-white">
          Copyright &copy; Your Website 2022
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;
