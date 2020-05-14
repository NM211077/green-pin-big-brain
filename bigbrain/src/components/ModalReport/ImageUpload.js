import React, {Component} from 'react';
//import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import './ImageUpload.css';


const ImageUpload = () => {
    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

   /* const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }*/
    //const imgIcon=<img src={paperclip}/>
    return (
        <Dropzone
            onChangeStatus={handleChangeStatus}
            //onSubmit={handleSubmit}
            maxFiles={3}
            inputContent = "Drop photo here or click browse"
            inputWithFilesContent ={files => `${3 - files.length} more`}
            submitButtonDisabled={files => files.length < 3}
        />
    )
}

export default ImageUpload;
