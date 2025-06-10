import {Col , Container , Row , Stack} from "react-bootstrap";
import image from "../assets/img.png"
import {useState} from "react";


export function HomeScreen() {

    const [result, setResult] = useState("")

    return (
        <Container  className="mt-5  min-vh-100 overflow-y-hidden">
            <Row className="gap-3 min-vh-100  ">
                <Col className="border-end border-2 ">
                    <h4 className="text-secondary">Input</h4>

                    <div className="d-flex align-items-center justify-content-center w-75 mt-5">
                        <label htmlFor="dropzone-file"
                               // className="flex flex-col items-center justify-center  "
                               style={{height : "300px" , width : "300px"}}
                               className="d-flex flex-column  align-items-center justify-content-center w-100 border border-2 rounded rounded-lg cursor-pointer hover:bg-secondary "
                        >
                            <div className="-flex align-items-center justify-content-center p-2">

                                <p className="text-sm ">
                                    <span className="fw-semibold">Upload</span> or drag and
                                    drop
                                </p>

                            </div>

                            <input
                                id="dropzone-file"
                                type="file"
                                name="file"
                                accept="text/csv"
                                required={true}
                                hidden
                                // className={`d-block w-100 bg-body-secondary rounded rounded-5 focus-ring-primary  p-4 text-secondary hidden`}
                            />

                        </label>
                    </div>

                </Col>
                <Col >
                    <h4 className="text-secondary">Result</h4>
                    {!result &&
                        <div>
                            <img height={500} width={500} src={ image }/>
                        </div>
                    }

                </Col>
            </Row>
        </Container>
    );
}


