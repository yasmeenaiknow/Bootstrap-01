import React, { Component } from "react";
import Img from "../components/images/bg01.jpg";
const data = {
    fusce: "fusce ultrices fringilla",
    title: "Fermentum nibh augue praesent  a lacus at ums congue rutrum",
    etian: "ETIAM POSUERE",
};

export default class Mainpage extends Component {
    render() {
        return (
            <div className='position-relative d-flex  align-items-center'>
                <div className=''>
                    <img src={Img} style={{ width: "100%", height: "60vh" }} />
                </div>
                <div className='position-absolute d-flex media1'>
                    {this.card()}
                    {this.card()}
                    {this.card()}
                </div>
            </div>
        );
    }
    card = () => {
        return (
            <div className='card mx-4' style={{ width: "auto" }}>
                <div className='card-body'>
                    <h5 className='card-title text-left'>{data.fusce}</h5>
                    <p className='card-text text-left m-0'>{data.title}</p>
                    <div className='bg-primary text-white p-2 mt-4 text-left col-md-5'>
                        <h6 className='m-0'>{data.etian}</h6>
                    </div>
                </div>
            </div>
        );
    };
}
