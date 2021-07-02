import React, { Component } from 'react'

class Form extends Component {
 
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                names: '',
              emailId: '',
                mobNo: '',
                homeAddress: '',
                officeAddress:'',
                clicks:0,
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };


    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddOrEdit(this.state);
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
        if (!this.props.show) {
            return null;
          }
        return (
            
        <div className="modal display-block">
            <div className="box">
            
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="names" placeholder="Name" onChange={this.handleInputChange} value={this.state.names} /> <br />
                < input name="emailId" placeholder="Email Id" onChange={this.handleInputChange} value={this.state.emailId} /><br />
                < input name="mobNo" placeholder="Mob No" onChange={this.handleInputChange} value={this.state.mobNo} /><br />
                < input name="homeAddress" placeholder="Home Address" onChange={this.handleInputChange} value={this.state.homeAddress} /><br />
                < input name="officeAddress" placeholder="Office Address" onChange={this.handleInputChange} value={this.state.officeAddress} /><br />
                <button  onClick={this.props.handleClose} className="b2">Close</button>
                <button type="submit" className="b1" >Add</button>
            </form>
            </div>
            </div>
        )
    }
}

export default Form