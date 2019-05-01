import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled, {css} from "styled-components";


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const commonInputStyles=css`display: block;`;
const TextArea=styled.textarea`${commonInputStyles}`;
const InputField=styled.input`${commonInputStyles}`;
export class AddMOdule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }



    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Add new</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >


                    <button onClick={this.closeModal}>Add</button>

                    <form onSubmit={onsubmit}>
                        <InputField name="title"  />
                        <TextArea name="description"/>
                    </form>
                </Modal>
            </div>
        );
    }
}