import React, { Component } from "react";
import Img from "../components/images/pic01.jpg";
import Img2 from "../components/images/pic02.jpg";
import Img3 from "../components/images/pic03.jpg";

const data = {
    title: "Fermentum nibh augue praesent  a lacus at ums congue rutrum",
    etian: "ETIAM POSUERE",
};

export default class Maintwo extends Component {
    render() {
        return (
            <div className='container'>
                <div className=' d-flex align-item-center m-3'>
                    {this.card1()}
                    {this.card2()}
                    {this.card3()}
                </div>
            </div>
        );
    }
    card1 = () => {
        return (
            <div className='card mx-4' style={{ width: "auto" }}>
                <div className='card-body'>
                    <h5 className='card-title text-left'>
                        Maecenas lustus lectus
                    </h5>
                    <div className='row'>
                        <div className='col'>
                            <img
                                src={Img2}
                                style={{ width: "100%", height: "20vh" }}
                            />
                        </div>
                        <div className='col'>
                            {data.title}
                            <div className='bg-primary text-white p-2 mt-4 text-left col-md-5'>
                                <h6 className='m-0'>{data.etian}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    card2 = () => {
        return (
            <div className='card mx-4' style={{ width: "auto" }}>
                <div className='card-body'>
                    <h5 className='card-title text-left'>
                        Maecenas lustus lectus
                    </h5>
                    <div className='row'>
                        <div className='col'>
                            <img
                                src={Img}
                                style={{ width: "100%", height: "20vh" }}
                            />
                        </div>
                        <div className='col'>
                            {data.title}
                            <div className='bg-primary text-white p-2 mt-4 text-left col-md-5'>
                                <h6 className='m-0'>{data.etian}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    card3 = () => {
        return (
            <div className='card mx-4' style={{ width: "auto" }}>
                <div className='card-body'>
                    <h5 className='card-title text-left'>
                        Maecenas lustus lectus
                    </h5>
                    <div className='row'>
                        <div className='col'>
                            <img
                                src={Img3}
                                style={{ width: "100%", height: "20vh" }}
                            />
                        </div>
                        <div className='col'>
                            {data.title}
                            <div className='bg-primary text-white p-2 mt-4 text-left col-md-5'>
                                <h6 className='m-0'>{data.etian}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
