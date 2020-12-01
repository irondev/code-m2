import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
		height = Math.min(document.documentElement.clientHeight, config.ratio.height),
		mobile = false,
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

	if (width < config.ratio.width) {
		mobile = true;
	}
    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
		boardTop: boardTop,
		mobile : mobile
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
			boardTop:getSizes().boardTop,
			mobile:getSizes().mobile
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
				boardTop:getSizes().boardTop,
				mobile:getSizes().mobile
            });
        });
    }

    render() {
		var mobile = this.state.mobile;
        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>


                {/* CHAP 0 - Introduction */}

                <div className="Board__slide Board__slide--top">
                    <Edito content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus mattis dolor, consectetur pellentesque erat hendrerit quis. Aliquam a dapibus ligula. Donec iaculis tempus purus, vitae dignissim odio luctus vitae. Vivamus mattis dictum tellus, nec scelerisque quam elementum ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse in nisi sed ex luctus euismod. Vivamus venenatis lacus felis, euismod fringilla nunc euismod id. Etiam ultricies vulputate sem vel dignissim. Pellentesque sit amet venenatis felis, ac feugiat ex. In nisl elit, porttitor at accumsan ut, aliquam bibendum nisl. Cras ut ante ante. Vivamus egestas ultrices magna, sit amet eleifend turpis efficitur convallis. Sed congue a turpis ut tincidunt." positionTop="15%"></Edito>
                </div>
                 <div className="Board__slide">
                    <Element name="CHAP00-PHOTO1B.png" index="p2"></Element>
                    <Element name="CHAP00-PHOTO1.png" index="m2"></Element>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus mattis dolor, consectetur pellentesque erat hendrerit quis. Aliquam a dapibus ligula. Donec iaculis tempus purus, vitae dignissim odio luctus vitae. Vivamus mattis dictum tellus, nec scelerisque quam elementum ultrices." positionTop="25%"></Edito>
                    <Element name="FOND12.png" index="m1" positionLeft="40%"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="FOND4.png" index="m2" positionLeft="-80%"></Element>
                    <Edito content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus mattis dolor, consectetur pellentesque erat hendrerit quis. Aliquam a dapibus ligula. Donec iaculis tempus purus, vitae dignissim odio luctus vitae. Vivamus mattis dictum tellus, nec scelerisque quam elementum ultrices."></Edito>
                </div>

                {/* CHAP04 - Conclusion */}

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide only_blue board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus mattis dolor, consectetur pellentesque erat hendrerit quis. Aliquam a dapibus ligula. Donec iaculis tempus purus, vitae dignissim odio luctus vitae. Vivamus mattis dictum tellus, nec scelerisque quam elementum ultrices."></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP00-PHOTO1.png" index="m2"></Element>
                    <Video id="x6tqhqb" maxHeight="350" ratio="1.77"></Video>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus mattis dolor, consectetur pellentesque erat hendrerit quis. Aliquam a dapibus ligula. Donec iaculis tempus purus, vitae dignissim odio luctus vitae. Vivamus mattis dictum tellus, nec scelerisque quam elementum ultrices."></Edito>
                    <Skew position="left" bg="OURS.png" ></Skew>
                </div>
                <div className="Board__slide">
                    <Masthead />
                </div>
            </div>
        )
    }
}

