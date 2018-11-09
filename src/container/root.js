import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import RouterComponent from '../router';
import {Helmet} from "react-helmet";

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Root">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Grid style={{width: "100%"}}  fluid={true}>
                    <Row >
                        <Col style={{border:'1px solid'}}>
                            nav bar   
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={3} style={{border:'1px solid'}}>
                            side bar   
                        </Col>
                        <Col xs={9} style={{border:'1px solid'}}>
                            <RouterComponent />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border:'1px solid'}}>
                            footer   
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
 
export default Root ;