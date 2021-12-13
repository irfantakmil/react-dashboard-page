import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from '../../assets/logo.jpg';
import "../../styles/home.css";
import * as BsIcons from "react-icons/bs";
import { IconContext } from 'react-icons/lib';


const Home = () => {
    return (
        <div className='home'>
            <IconContext.Provider value={{size:'20px'}}>
                <Container className="home_container">
                    <Row>
                        <Col md={4} className="information">
                            <Image src={logo} className="logo"/>
                            <div className="info_header">
                                <h3>Mitramas Infosys Global</h3>
                                <h5>Layanan IT</h5>
                                <h4>
                                    <BsIcons.BsFillPencilFill/>
                                    Sunting profil
                                </h4>
                            </div>
                            <div className="info_content">
                                <h6>Status Perusahaan</h6>
                                <h5 className="green_text">Aktif</h5>
                                <h6>Singkatan</h6>
                                <h5>MID</h5>
                                <h6>Alamat Perusahaan</h6>
                                <h5>JL.Tebet Raya No.42, Jakarta Selatan</h5>
                                <h6>Penanggung Jawab (PIC)</h6>
                                <h5>John Doe</h5>
                                <h6>Tanggal PKP</h6>
                                <h5>03 Maret 2021</h5>
                                <h6>Email</h6>
                                <h5 className="green_text">mig.mitrasolusi.group</h5>
                                <h6>No.Telp</h6>
                                <h5 className="green_text">021-5678-1234</h5>
                                <h6>Situs Web</h6>
                                <h5 className="green_text">mitramas.com</h5>
                            </div>
                        </Col>
                        <Col md={8} className="second_column">
                            <Row>
                                <Col md={12} className="location">
                                    <div className="lokasi_header">
                                        <h5>Lokasi</h5>
                                        <h5 className="green_text">Lihat semua</h5>
                                    </div>
                                    <div className="lokasi_container">
                                        <div className="indux">
                                            <h6>
                                                <BsIcons.BsFillHouseDoorFill/>
                                                20
                                            </h6>
                                            <h6>Induk</h6>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={5}>
                                    <Row className="bankacount">
                                        3
                                    </Row>
                                    <Row className="relasi">
                                        5
                                    </Row>
                                </Col>
                                <Col md={7} className="activity">4</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </IconContext.Provider>
        </div>
    )
}

export default Home;

