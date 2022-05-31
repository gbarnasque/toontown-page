import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Row, Col, Card, ProgressBar, Button, Form } from 'react-bootstrap/';

import './CogInvasions.css';

import consts from '../consts';
import { getInvasions } from './CogsActions';
import getCogInfo from '../cogs/Cogs';
import { showSpinner } from '../common/SpinnerActions';
import { toast } from 'react-toastify';


class CogsInvasions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cogTypeFilter: 'All',
        };

        this.handleCogTypeChange = this.handleCogTypeChange.bind(this);
        this.updateInvasions = this.updateInvasions.bind(this);
        this.renderInvasions = this.renderInvasions.bind(this);
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

    handleCogTypeChange(type) {
        this.setState({...this.state, cogTypeFilter: type});
    }

    renderForm() {
        return (
            <React.Fragment>
                <Form.Label htmlFor="select-cog-type">Filter per Cog type:</Form.Label>
                <Form.Select id="select-cog-type"
                    onChange={(e) => this.handleCogTypeChange(e.target.value)} className='select-cog-type'>
                    <option defaultValue>All</option>
                    <option value={consts.SELLBOT}>{consts.SELLBOT}</option>
                    <option value={consts.CASHBOT}>{consts.CASHBOT}</option>
                    <option value={consts.BOSSBOT}>{consts.BOSSBOT}</option>
                    <option value={consts.LAWBOT}>{consts.LAWBOT}</option>
                </Form.Select>
            </React.Fragment>
        )
    }

    renderInvasions() {
        const invasions = this.props.invasions.list || [];
        return invasions.map((invasion, ind) => {
            const cogName = invasion.info.type.replace(/[\x03]/g, '');
            const cog = this.findCog(cogName);
            if(cog === undefined){
                toast(`${cogName} not found.`, {toastId: `${cogName}-not-found`, autoClose: 3000});
                console.log(`${cogName} not found.`);
                return ;
            }
            if(this.state.cogTypeFilter !== 'All' && cog.type.name !== this.state.cogTypeFilter) {
                return ;
            }
            //console.log(cog);
            const prog = invasion.info.progress.split('/');
            const progress = prog[0] / prog[1] * 100;
            //console.log(progress);
            var d = new Date(0);
            d.setUTCSeconds(invasion.info.asOf);
            return (
                <Col key={ind} className='card-col'>
                    <Card>
                        <Card.Img variant="top" src={cog.info.image} className='cog-image no-select' />
                        <Card.Body>
                            <Card.Title as='h4' className='text-center'>
                                {cog.info.name}
                            </Card.Title>
                            <Card.Text>Levels: {cog.info.lowest} - {cog.info.max}</Card.Text>
                            <Card.Text>Disctrict: {invasion.district}</Card.Text>
                            <Card.Img src={cog.type.logo} className='cog-type-logo no-select'/> <span>{cog.type.name}</span>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <ProgressBar variant="warning" animated now={progress} label={`${progress.toFixed(0)}%`}/>
                            {invasion.info.progress} <br></br>
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
                    <Button variant='primary' size='lg' onClick={() => this.updateInvasions()} className='btn-update'>Update Invasions</Button>
                    {this.renderForm()}
                </Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4}>
                {this.renderInvasions()}
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
