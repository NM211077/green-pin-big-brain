import React, {Component, Fragment} from 'react';
import ModalGeo from './ModalGeo.js';
import ModalSelect from './ModalSelect.js';
import ModalReportView from "../ModalReportComponent/Modal.js"



let lat, lng, locationSubmit;


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
        console.log(888);
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
        console.log("selectedOption", selectedOption);
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

        return (
            <>
                <ModalReportView
                    note1={note1}
                    note2={note2}
                    selectedOption={selectedOption}
                    handleChange={this.handleChange}
                    handleChangeSelectProblem={this.handleChangeSelectProblem}
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeStatus={this.handleChangeStatus}
                    handleClick={this.handleClick}
                    onClickCancel={this.props.onCancel}

                />
                {showModalGeo ? (<ModalGeo
                        onClose={this.closeModalGeo.bind(this)}
                    />
                ) : null}

                {showModalSelect ? (<ModalSelect
                        onClose={this.closeModalSelect.bind(this)}
                    />
                ) : null}
            </>
        );
    }
}


