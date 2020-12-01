import React, { Component } from 'react';
import './Masthead.css';


export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label white">Conçu, écrit et réalisé par</span>
                    <span className="Masthead__details">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label"></span>
                    <span className="Masthead__details"></span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Photos :</span> Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Vidéos :</span> Lorem ipsum dolor sit amet</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Remerciements :</span> Lorem ipsum dolor sit amet</span>
                </div>
            </div>
        );
    }
}
