import React, { Component } from 'react';
import classes from './Contact.scss';
import Button from '../../UI/Button/Button';
import { DebounceInput } from 'react-debounce-input';

class Contact extends Component {
    state = {
        name: '',
        message: '',
        borderColorEmail: 'rgba(127, 127, 127, .5)',
        diabledSendButton: true
    }

    sendMessage = (event) => {
        event.preventDefault();
        
        if(this.state.name === '' || this.state.message === '' || this.state.diabledSendButton === true){
            alert('Wypełnij wszystkie pola');
        }else(alert('Twoja wiadomość została wysłana'));

    }

    emailValueHandler = (emailValue) =>{
        //Validate address email with regex regular expression   
        this.emailValidate(emailValue);
    }


    emailValidate = (email) => {

        let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;

        if( emailRegex.test(email) === false){
            this.setState({borderColorEmail: '#ff0000', diabledSendButton: true})
        }else{
            this.setState({borderColorEmail: '#4caf50', diabledSendButton: false})
        }
        if(email === ''){
            this.setState({borderColorEmail: 'rgba(127, 127, 127, .5)'})
        }
    }

    render() {
        return (
        <div className={classes.Wrapper}>
            <div className={classes.Contact}>
                <h4>Kontakt</h4>
                <form onSubmit={this.sendMessage}>
                    <DebounceInput
                        minLength={1}
                        placeholder="Imię"
                        debounceTimeout={300}
                        onChange={event => this.setState({name: event.target.value})} />
                    <DebounceInput
                        minLength={3}
                        placeholder="E-mail"
                        debounceTimeout={300}
                        style={{borderBottom: `1px solid ${this.state.borderColorEmail}`}}
                        onChange={event => this.emailValueHandler(event.target.value)} />
                    <DebounceInput
                        minLength={5}
                        placeholder="Treść"
                        debounceTimeout={300}
                        onChange={event => this.setState({message: event.target.value})} />

                    <Button disabled={this.state.diabledSendButton} sendMessage={this.sendMessage}>Wyślij</Button>
                </form>
            </div>
        </div>
        );
    }
}

export default Contact;
