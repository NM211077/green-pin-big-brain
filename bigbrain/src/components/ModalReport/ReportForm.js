import React, {Component} from 'react';
import pen from "./pen.png";
import location from "./location.png";
import camera from "./camera.png";
import './Modal.css';
import ModalGeo from './ModalGeo.js';
import ModalSelect from './ModalSelect.js';
import Select from 'react-select';
import MapComponentReport from './MapComponentReport.js';
import ImageUpload from './ImageUpload.js';


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
            selectedOption: '',
            showModalGeo: false,
            showModalSelect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeSelectProblem = this.handleChangeSelectProblem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };


    handleChange(event) {
        this.setState({note1: {value: event.target.value}});
    }

    handleChangeDescription(event) {
        this.setState({note2: {value: event.target.value}});
    }

    handleClick = e => {
        e.preventDefault();
        if (!this.props.geo) {
            this.setState({showModalGeo: true})
        } else {
            if (!this.state.selectedOption.id) {
                this.setState({showModalSelect: true})
            } else {
                this.handleSubmit(e);
                const {onCloseReportForm, onMarkerHide} = this.props;
                onCloseReportForm(e);
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch("https://arcane-eyrie-30848.herokuapp.com/api/v1/pin/", {
            method: "POST",
            body: JSON.stringify({
                    title: this.state.selectedOption.value,
                    lat: this.props.geo[0].lat,
                    lng: this.props.geo[1].lng,
                    category: this.state.selectedOption.id,
                    user: 1,
                    comment: this.state.note1.value + ';' + this.state.note2.value
                }
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        }).catch((error) => console.log("error", error));
    }

    handleChangeSelectProblem = selectedOption => {
        this.setState({selectedOption});
    };

    toggleModal = () => {
        this.setState({showModalGeo: !this.state.showModalGeo});
    };

    toggleModalSelect = () => {
        this.setState({showModalSelect: !this.state.showModalSelect});
    };


    render() {
        const {note1, note2, selectedOption, showModalGeo, showModalSelect} = this.state;
        return (
            <div className='modalStep2'>
                <div className='information'><span>Information</span></div>
                <div className="location">
                    <img src={location}/><span style={{paddingLeft: 15}}>location (click on the big map)</span>
                </div>
                <form className='formReport' onSubmit={this.handleClick}>
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
                        <div className='dropPhoto'>
                            <ImageUpload/>
                        </div>
                    </div>
                    <button className='nextStepFinish' type='submit'>
                        <p>Submit</p>
                    </button>
                </form>
                <button
                    className="modal-close"
                    onClick={this.props.onCancel}
                >
                    <p>X</p>
                </button>

                <button
                    className='backPrev'
                    onClick={this.props.onBack}
                >
                    <p>&lt;</p>
                </button>

                {showModalGeo ? (<ModalGeo
                        onClose={this.toggleModal.bind(this)}
                    />
                ) : null}

                {showModalSelect ? ( <ModalSelect
                        onClose={this.toggleModalSelect.bind(this)}
                    />
                ) : null}
            </div>
        );
    }
}


