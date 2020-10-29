import React, { Component } from "react";
import Img1 from "../components/images/pic04.jpg";
import Img2 from "../components/images/pic05.jpg";
import Img3 from "../components/images/pic06.jpg";
import Img4 from "../components/images/pic07.jpg";

const data = {
    mauris: "Mauris Vulputat",
    dusi: "Duis arcu totor fringilla sed sod magne",
    preasent: "present scelerisque sceleris",
};
export default class Lastcontainer extends Component {
    render() {
        return (
            <div className='row bg-light'>
                <div className='col-md-3 text-left mt-5'>
                    <h4 className='container text-left'>{data.mauris}</h4>

                    {this.renderMain(
                        "oct 15",
                        "AMET SED VOLUTPAT MAURIS",
                        "Duis arcu totor fringillam sed sad magne"
                    )}
                    {this.renderMain(
                        "oct 11",
                        "AMET SED VOLUTPAT MAURIS",
                        "Duis arcu totor fringillam sed sad magne"
                    )}
                    {this.renderMain(
                        "oct 09",
                        "AMET SED VOLUTPAT MAURIS",
                        "Duis arcu totor fringillam sed sad magne"
                    )}
                </div>
                <div className='col-md-8 text-left m-5'>
                    <h4 className='container text-left'>{data.preasent}</h4>

                    {this.renderRight()}
                </div>
            </div>
        );
    }

    renderMain = (month, title, message) => {
        return (
            <div className='container mt-4 m-3'>
                <div className='row'>
                    <div className='col-sm d-flex m-1'>
                        <div className='bg-primary p-2 text-white m-0 text-left'>
                            <h6 className='m-0 p-0'> {month} </h6>
                        </div>
                        <div className='col-sm-1 p-0 m-0 col-md-8'>
                            <p className='m-0 text-left p1-2 font-weight-bold'>
                                {message}
                            </p>
                            <p className='m-0 text-left p1-2'>{title} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    renderRight = (preasent, Lorem) => {
        return (
            <div className='container col m-2'>
                <p className='font-weight-bold text-left'> {preasent} </p>
                <p className='text-left '>
                    Lorem ipus dolor sit amie,kits d jhdwwervgh jahsfnf lorem
                    ipus dolor sit amie,kits d jhdwwervgh jahsfnf lorem ipus
                    lorem ipus dolor sit amie,kits d jhdwwervgh jahsfnf sit
                    amie,kits d jhdwwervgh jahsfnf
                </p>
                <div className='d-flex justify-content-around'>
                    <img src={Img1} />
                    <img src={Img2} />

                    <img src={Img3} />

                    <img src={Img4} />
                </div>
            </div>
        );
    };
}
