import React, {Component} from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Corona from '../../img/corona-64.png';
import Confirm from "../../img/confirm-48.png";
import Death from "../../img/death-48.png";
import Recover from "../../img/recover-48.png";
import Testing from "../../img/testing-48.png";
import World from "../../img/world-32.png";
import Calender from "../../img/day-32.png";
import Badge from "react-bootstrap/esm/Badge";

class Main extends Component {
    render() {
        return (
            <div className="corona">
                <Container>
                    <Row className="corona-header">
                        <Col xs={12} md={8} className="corona-logo">
                            <h1><img src={Corona}/> COVID-19</h1>
                            <p className="corona-logo-desc">COVID-19 세계, 국가별 현황 공유</p>
                        </Col>
                    </Row>
                    <Row classNmae="corona-content">
                        <Col md={12}>
                            <span className="corona-box-desc"><img src={Calender}/> 실시간 세계 COVID-19 현황판</span>
                        </Col>
                        <Col md={6} className="corona-box">
                            <div className="corona-box-wrap">
                                <span className="corona-icon"><img src={Confirm}/></span>
                                <h6 className="font-gray">Confirmed</h6>
                                <h1>2,222,222</h1>
                                <div className="badge-box">
                                    <Badge variant="danger">5% increase</Badge>
                                    <h6 className="badge-desc">yesterday : 110,000</h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="corona-box">
                            <div className="corona-box-wrap">
                                <span className="corona-icon"><img src={Death}/></span>
                                <h6 className="font-gray">Deaths</h6>
                                <h1>100,000</h1>
                                <div className="badge-box">
                                    <Badge variant="danger">5% increase</Badge>
                                    <h6 className="badge-desc">yesterday : 110,000</h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="corona-box">
                            <div className="corona-box-wrap">
                                <span className="corona-icon"><img src={Recover}/></span>
                                <h6 className="font-gray">Recovered</h6>
                                <h1>120,000</h1>
                                <div className="badge-box">
                                    <Badge variant="success">5% increase</Badge>
                                    <h6 className="badge-desc">yesterday : 110,000</h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="corona-box">
                            <div className="corona-box-wrap">
                                <span className="corona-icon"><img src={Testing}/></span>
                                <h6 className="font-gray">Testing</h6>
                                <h1>1,100,000</h1>
                                <div className="badge-box">
                                    <Badge variant="danger">5% increase</Badge>
                                    <h6 className="badge-desc">yesterday : 110,000</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="corona-content-table">
                            <span className="corona-box-desc"><img src={World}/> 국가별 COVID-19 현황</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Main;