import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Row, Col, Card, ProgressBar } from 'react-bootstrap/';

import './CogInvasions.css';

import { getInvasions } from './CogsActions';
import getCogInfo from '../cogs/Cogs';
import { showSpinner } from '../common/SpinnerActions';


class CogsInvasions extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getInvasions();
        this.props.showSpinner(true);
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.props.showSpinner(false);
        }
    }
    findCog(cogName) {
        return getCogInfo(cogName)
    }

    renderCards() {
        const invasions = this.props.invasions.list || [];
        return invasions.map((invasion, ind) => {
            const cog = this.findCog(invasion[1].type.replace(/[\x03]/g, ''));
            const prog = invasion[1].progress.split('/');
            const progress = prog[0] / prog[1] * 100;
            console.log(progress);
            return (
                <Col key={ind} className='card-col'>
                    <Card>
                        <Card.Img variant="top" src={cog.info.image} className='cog-image no-select' />
                        <Card.Body>
                            <Card.Title as='h3' className='text-center'>
                                {cog.info.name}
                            </Card.Title>
                            <Card.Text>Disctrict: {invasion[0]}</Card.Text>
                            <Card.Img src={cog.type.logo} className='cog-type-logo no-select'/> <span>{cog.type.name}</span>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <ProgressBar variant="warning" animated now={progress} label={`${progress.toFixed(0)}%`}/>
                            {invasion[1].progress}
                        </Card.Footer>
                    </Card>
                </Col>
            )
        }); 
    }

    render() {
        return (
        <React.Fragment>
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
