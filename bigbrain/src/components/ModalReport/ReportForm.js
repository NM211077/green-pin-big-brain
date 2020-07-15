import React, {Component, Fragment} from 'react';
import pen from "./pen.png";
import location from "./location.png";
import camera from "./camera.png";
import './Modal.css';
import ModalGeo from './ModalGeo.js';
import ModalSelect from './ModalSelect.js';
import Select from 'react-select';
import MapComponentReport from './MapComponentReport.js';
import ImageUpload from './ImageUpload.js';
import axios from 'axios';
import Dropzone from 'react-dropzone';


let lat, lng, locationSubmit;
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
            note1:
                {value: ''},
            note2:
                {value: ''},
            selectedOption: '',
            showModalGeo: false,
            showModalSelect: false,
            image: []
        };
        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeSelectProblem = this.handleChangeSelectProblem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    };

    onDrop = (image) => {
        this.setState({image})
    };

    handleChangeStatus = ({meta}, status) => {
        console.log(status, meta);
        const arr = [...this.state.photo];
        console.log(meta);
        if (status == 'done') arr.push({meta});
        this.setState({photo: arr});
        console.log(this.state.photo);
    }

    /* handleSubmitDrop  = (files, allFiles) => {console.log(888);
         console.log(files.map(f => f.meta));
         allFiles.forEach(f => f.remove());
     }*/

    handleChange(event) {
        this.setState({note1: {value: event.target.value}});
    }

    handleChangeDescription(event) {
        this.setState({note2: {value: event.target.value}});
    }

    handleClick = e => {
        console.log(this.props.geo);
        e.preventDefault();
        if (!this.props.geo.lat) {
            this.setState({showModalGeo: true})
        } else {
            if (!this.state.selectedOption.id) {
                this.setState({showModalSelect: true})
            } else {
                this.handleSubmit(e);
                const {onCloseReportForm} = this.props;
                onCloseReportForm(e);
            }
        }
        console.log(this.state.showModalGeo);
    }

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    handleSubmit(e) {/*lat = Number(this.props.geo.lat).toFixed(10);
        lng= Number(this.props.geo.lng).toFixed(10);
        locationSubmit={"lat_loc":lat,"lng_loc":lng};
        console.log(lng);
        e.preventDefault();
        console.log(this.props.geo);
        let form_data = new FormData();
        form_data.append('title', this.state.selectedOption.value);
        form_data.append("location",locationSubmit);
        form_data.append('category', this.state.selectedOption.id);
        form_data.append('user', 1);
        //form_data.append('img', this.state.image, this.state.image.name);
        form_data.append('comment', this.state.note1.value + ' ' + this.state.note2.value);
        console.log('form_data',form_data);
        let url = 'https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com/api/v1/pin/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log("Successful" +res.data);
            })
            .catch(err => console.log(err))
    };*/

        lat = Number(this.props.geo.lat).toFixed(10);
        lng = Number(this.props.geo.lng).toFixed(10);
        console.log(lng, 'lng', 'lat:', lat, 'title:', this.state.selectedOption.value, "category:", this.state.selectedOption.id);
        e.preventDefault();
        fetch("https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com/api/v1/pin/", {
            method: "POST",
            body: JSON.stringify({
                    "title": this.state.selectedOption.value,
                    "location": {"lat_loc": lat, "lng_loc": lng},
                    "category": this.state.selectedOption.id,
                    "user": 1,
                    "img": null,
                    "comment": this.state.note1.value + ' ' + this.state.note2.value,
                    "status_pin": 2
                },
            ),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
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

    closeModalGeo = e => {
        const {onBack} = this.props;
        e.preventDefault();
        onBack(e);
        this.toggleModal(e);
    }
    toggleModal = (e) => {
        console.log(66668);
        e.preventDefault();
        this.setState({showModalGeo: !this.state.showModalGeo});
    };

    closeModalSelect = e => {
        const {onBack} = this.props;
        e.preventDefault();
        onBack(e);
        this.toggleModalSelect(e);
    }

    toggleModalSelect = (e) => {
        e.preventDefault();
        this.setState({showModalSelect: !this.state.showModalSelect});
    };


    render() {
        const {note1, note2, selectedOption, showModalGeo, showModalSelect, image} = this.state;
        const imagezone = image.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));
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
                    <div className='note-reportForm'><span className='spanNote'>Note: </span>
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
                            {/* {image.length > 0 ? <div>
                                <h2>Uploading {image.length} files...</h2>
                                <div>{image.map((file) => <img src={file.preview}/>)}</div>
                            </div> : null}
                            <Dropzone onDrop={this.onDrop} accept="image/png, image/gif, image/jpeg">
                                {({getRootProps, getInputProps, isDragActive}) => (
                                    <section className="container">
                                        <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                            {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
                                        </div>
                                        <aside>
                                            <h4>Files</h4>
                                            <ul>{imagezone}</ul>
                                        </aside>
                                    </section>
                                )}
                            </Dropzone>*/}
                            {/* <input type="file"
                                       id="image"
                                       accept="image/png, image/jpeg"  onChange={this.handleImageChange} />*/}

                            <ImageUpload
                                handleChangeStatus={this.handleChangeStatus}
                                //handleSubmitDrop={this.handleSubmitDrop}
                            />
                        </div>
                    </div>
                    <button className='Btn-nextStepFinish' type='submit'>
                        <p className='nameBtnSubmit'>Submit</p>
                    </button>
                </form>
                <button
                    className="modal-close"
                    onClick={this.props.onCancel}
                >
                    <p>X</p>
                </button>

                {showModalGeo ? (<ModalGeo
                        onClose={this.closeModalGeo.bind(this)}
                    />
                ) : null}

                {showModalSelect ? (<ModalSelect
                        onClose={this.closeModalSelect.bind(this)}
                    />
                ) : null}
            </div>
        );
    }
}


