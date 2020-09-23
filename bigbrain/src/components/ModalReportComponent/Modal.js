import React, {useState, useEffec} from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import pen from "../ModalReportView/pen.png";
import location from "../ModalReportView/location.png";
import camera from "../ModalReportView/camera.png";
import Select from 'react-select';
import MapComponentReport from '../ModalReportView/MapComponentReport.js';
import ImageUpload from '../ModalReportView/ImageUpload.js';


const options = [
    {value: 'Chopping', label: 'Chopping', id: 1},
    {value: 'Garbage dump', label: 'Garbage dump', id: 2},
    {value: 'Set fire to the grass', label: 'Set fire to the grass', id: 3},
    {value: 'Fire', label: 'Fire', id: 4},
    {value: 'Quarry (clay or sand mining)', label: 'Quarry (clay or sand mining)', id: 5},
    {value: 'New development', label: 'New development', id: 6},
    {value: 'Collection of rare plants', label: 'Collection of rare plants', id: 7},
    {value: 'Poaching', label: 'Poaching', id: 8},
    {value: 'Other', label: 'Other', id: 9},
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        background: state.isSelected ? '#78B0A0' : '#F7F7F7',
    })
};

function ModalReportView(props) {
    const wrapContainer = {
        position: 'absolute',
        //display: 'flex',
        width: 446,
        height: '84vh',
        overflow: 'auto',
        right: '7%',
        top: 94,
        background: '#FFFFFF',
        borderRadius: 10
    };
    const {note1, note2,
        handleChangeStatus, handleChange, handleChangeSelectProblem, handleChangeDescription, onClickCancel,handleClick,
        onCloseReportForm} = props;
    return (
        <>
            <Container style={wrapContainer}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Button
                            className="modal-close"
                            onClick={onClickCancel}
                        >
                            <p>X</p>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='information'>
                        <span>Information</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className="location">
                        <img src={location}/>
                        <span style={{paddingLeft: 15}}>location (click on the big map)</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='mapPin'>
                        <MapComponentReport
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='note-reportForm'>
                        <span className='spanNote'>Note: </span>
                        <InputGroup>
                            <FormControl as="textarea"
                                         className='textNote'
                                         type="text"
                                         value={note1.value}
                                         onChange={handleChange}/>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='description'>
                        <img src={pen}/><span style={{paddingLeft: 15}}>Description of the problem</span>
                    </Col>
                </Row>
                <Row>
                    <Select
                        className='selectProblem'
                        onChange={handleChangeSelectProblem}
                        options={options}
                        styles={customStyles}
                    />
                </Row><Row>
                <Col xs={12} sm={12} md={12} lg={12} className='noteDescription'>
                    <span className='spanDescription'>Note: </span>
                    <InputGroup>
                        <FormControl as="textarea"
                                     className='textNoteDescription'
                                     type="text"
                                     value={note2.value}
                                     onChange={handleChangeDescription}/>
                    </InputGroup>
                </Col>
            </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='addPhoto'>
                        <img src={camera}/><span style={{paddingLeft: 15, paddingTop: 5}}>Add photo</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className='dropPhoto'>
                        <ImageUpload
                            handleChangeStatus={handleChangeStatus}
                            //handleSubmitDrop={this.handleSubmitDrop}
                        />
                    </Col>
                </Row>
                <div>
                    <Button className='Btn-submit-nextStepFinish' type="onClick" onClick={handleClick}>
                        <p className='nameBtnSubmit'>Submit</p>
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default ModalReportView;
