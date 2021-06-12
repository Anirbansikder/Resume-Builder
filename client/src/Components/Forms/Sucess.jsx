import React , { Component } from 'react';
import { Paper , Typography } from '@material-ui/core';
import Buttons from '../Controls/Buttons.jsx';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Grow from '@material-ui/core/Grow';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

class Languages extends Component {
    continue = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/create-pdf', this.props.value)
            .then (() => {
                axios.get ('http://localhost:5000/fetch-pdf', {responseType: 'arraybuffer'})
                    .then (res => {
                        const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
                        saveAs (pdfBlob, `${this.props.value.firstName}'s Resume.pdf`);
                    })
                    .catch (err => {
                        console.log (err);
                    });
            })
            .catch (err => {
                console.log (err);
            });
    }
    render(){
        return (
            <Grow in={true} timeout={1000}>
                <Paper elevation={6} style={{padding : '20px 20px' , margin : '15px 10px'}}>
                    <i className="fas fa-check-circle fa-7x text-success" style={{color : "#4BB543" , padding : '30px 0' }}></i>
                    <Typography style={{padding : "10px 0"}}>Click On Download And Sit Back While We Prepare Your Resume</Typography>
                    <Buttons label="Download" click={this.continue} disable={false} select="secondary" icon={<CloudDownloadIcon/>} position = "end"/>
                </Paper>
            </Grow>
        )
    }
}

export default Languages;
