import {Container , Nav , Navbar , NavDropdown} from "react-bootstrap";

export function Appbar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary shadow ">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2 mx-auto" href="#home">Glaucoma
                        <span className="text-primary "> Detector</span>
                    </Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    );
}

