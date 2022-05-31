import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Row, Col, Card, ProgressBar, Button } from 'react-bootstrap/';

import './CogInvasions.css';

import { getInvasions } from './CogsActions';
import getCogInfo from '../cogs/Cogs';
import { showSpinner } from '../common/SpinnerActions';


class CogsInvasions extends React.Component {
    constructor(props) {
        super(props);
        this.updateInvasions = this.updateInvasions.bind(this);
    }

    componentDidMount() {
        this.updateInvasions();
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.props.showSpinner(false);
        }
    }

    updateInvasions() {
        this.props.getInvasions();
        this.props.showSpinner(true);
    }

    findCog(cogName) {
        //console.log(cogName);
        return getCogInfo(cogName)
    }

    formatDate(d) {
        return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
    }

    renderCards() {
        const invasions = this.props.invasions.list || [];
        return invasions.map((invasion, ind) => {
            const cog = this.findCog(invasion[1].type.replace(/[\x03]/g, ''));
            //console.log(cog);
            const prog = invasion[1].progress.split('/');
            const progress = prog[0] / prog[1] * 100;
            //console.log(progress);
            var d = new Date(0);
            d.setUTCSeconds(invasion[1].asOf);
            return (
                <Col key={ind} className='card-col'>
                    <Card>
                        <Card.Img variant="top" src={cog.info.image} className='cog-image no-select' />
                        <Card.Body>
                            <Card.Title as='h4' className='text-center'>
                                {cog.info.name}
                            </Card.Title>
                            <Card.Text>Disctrict: {invasion[0]}</Card.Text>
                            <Card.Img src={cog.type.logo} className='cog-type-logo no-select'/> <span>{cog.type.name}</span>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <ProgressBar variant="warning" animated now={progress} label={`${progress.toFixed(0)}%`}/>
                            {invasion[1].progress} <br></br>
                            Last updated: {this.formatDate(d)}
                        </Card.Footer>
                    </Card>
                </Col>
            )
        }); 
    }

    render() {
        return (
        <React.Fragment>
            <Row className='mb-4'>
                <Col className='text-center'>
                    <Button variant='primary' onClick={() => this.updateInvasions()} className='btn-update md-auto'>Update Invasions</Button>
                </Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4}>
                {this.renderCards()}
            </Row>
        </React.Fragment>
        )
    }

}

function mapStateToProps(state){
    return { invasions: state.invasions };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getInvasions, showSpinner }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CogsInvasions);
