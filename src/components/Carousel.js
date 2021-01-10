import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import sportsPage from '../assets/images/sportsPage.png';
import filmConnector from '../assets/images/filmConnector.png';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: "Your Local Sports Page",
                    subTitle: "For sports fans, especially ones new to a city, it would be extremely useful to see all information related to the major local sports teams in one convenient dashboard. Users can enter their city of choice, then select filters that make finding the information they're interested in (i.e. next game, schedule, standings) super easy to find.",
                    imgSrc: sportsPage,
                    selected: false
                },
                {
                    id: 1,
                    title: "Film Connector",
                    subTitle: "Our goal for this project was to create a social media platform that connects users by commonalities based on their favorite movies. Then with that data, users can pick a movie to watch. Our simple yet powerful interface makes finding movies and comparing with other users easy and hassle-free!",
                    imgSrc: filmConnector,
                    selected: false
                } 
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }


    makeItems = (items) => {
        return items.map(item=> {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;