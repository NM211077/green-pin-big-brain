import React, {Component} from 'react';
import pen from "./pen.png";
import location from "./location.png";
import camera from "./camera.png";
import './Modal.css';
import Select from 'react-select';
import MapComponentReport from './MapComponentReport.js';
import ImageUpload from './ImageUpload.js';

const options = [
    {value: 'Chopping', label: 'Chopping'},
    {value: 'Garbage dump', label: 'Garbage dump'},
    {value: 'Set fire to the grass', label: 'Set fire to the grass'},
    {value: 'Fire', label: 'Fire'},
    {value: 'Quarry (clay or sand mining)', label: 'Quarry (clay or sand mining)'},
    {value: 'New development', label: 'New development'},
    {value: 'Collection of rare plants', label: 'Collection of rare plants'},
    {value: 'Poaching', label: 'Poaching'},
    {value: 'Other', label: 'Other'},
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        background: state.isSelected ? '#78B0A0' : '#F7F7F7',
    })
};

export default class ReportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note1: [
                {value: ''},
            ],
            note2: [
                {value: ''},
            ],
            selectedOption: "Select type of problem",

        };

         this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        //this.handleSubmitDescription = this.handleSubmitDescription.bind(this);
        this.handleChangeSelectProblem = this.handleChangeSelectProblem.bind(this);
        //this.handleSubmitSelectProblem = this.handleSubmitSelectProblem.bind(this);
    }


    handleChange(event) {
        this.setState({note1: {value: event.target.value}});
    }

    handleChangeDescription(event) {
        this.setState({note2: {value: event.target.value}});
    }

    /*handleSubmitDescription(event) {
        alert('Сочинение отправлено: ' + this.state.value);
        event.preventDefault();
    }*/
    handleChangeSelectProblem = selectedOption => {
        this.setState({selectedOption});
    };


    render() {
        const {note1, note2, selectedOption} = this.state;
        return (
            <div className='modalStep2'>
                <div className="location">
                    <img src={location}/><span style={{paddingLeft: 15}}>location (click on the big map)</span>
                </div>
                <form className='formReport'>
                    <div className='mapPin'>
                        <MapComponentReport
                        />
                    </div>
                    <div className='note'><span className='spanNote'>Note: </span>
                        <textarea
                            className='textNote'
                            type="text"
                            value={note1.value}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='description'>
                        <img src={pen}/><span style={{paddingLeft: 15}}>Description of the problem</span>
                    </div>

                    <Select
                        className='selectProblem'
                        onChange={this.handleChangeSelectProblem}
                        options={options}
                        styles={customStyles}
                    />
                    <div className='noteDescription'><span className='spanDescription'>Note: </span>
                        <textarea
                            className='textNoteDescription'
                            type="text"
                            value={note2.value}
                            onChange={this.handleChangeDescription}
                        />
                    </div>
                    <div className='addPhoto'>
                        <img src={camera}/><span style={{paddingLeft: 15}}>Add photo</span>
                        <div className ='dropPhoto'>
                            <ImageUpload  />
                        </div>
                    </div>
                </form>
                <button
                    className="modal-close"
                    onClick={this.props.onCancel}
                >
                    <p>X</p>
                </button>
                <button className='nextStepFinish'>
                    <p>Submit</p>
                </button>
                <button
                    className='backPrev'
                    onClick={this.props.onBack}
                >
                    <p>&lt;</p>
                </button>
            </div>
        );
    }
}


