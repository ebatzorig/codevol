import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import devgrud from '../assets/images/devgrud.png';
import youtube from '../assets/images/youtube.png';
import everest from '../assets/images/everest.png';
import Card from '../components/Card';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:0,
                    title:'Dev Grud',
                    subTitle:'The cookbook for dev',
                    imgSrc:devgrud,
                    link:'https://devgrud.com',
                    selected:false
                },
                {
                    id:1,
                    title:'BBG',
                    subTitle:'Youtube channel',
                    imgSrc:youtube,
                    link:'https://www.youtube.com',
                    selected:false
                },
                {
                    id:2,
                    title:'Everest',
                    subTitle:'A Social Network',
                    imgSrc:everest,
                    link:'https://www.github.com',
                    selected:false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        
        
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        
        this.setState({
            items
        });
        console.log(items);
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={( e => this.handleCardClick(item.id, e) )} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    { this.makeItems(this.state.items) }
                </Row>
            </Container>
        );
    }
}

export default Carousel;