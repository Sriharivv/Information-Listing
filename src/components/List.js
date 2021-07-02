import React, { Component } from 'react';
import Form from './Form';



class List extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList(),
        show:false
    }

    returnList() {
        if (localStorage.getItem('data') == null)
            localStorage.setItem('data', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('data'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('data', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    showModal = () => {
        this.setState({ show: true });
      }
      
      hideModal = () => {
        this.setState({ show: false });
      } 
   


    render() {
        return (
            <div>
                <button type='button' onClick={this.showModal}  className="b3">Add New</button>
                
                <hr />
                <table>
                    <tbody>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phone number </th>
                        <th>Home Address</th>
                        <th>Office Address </th>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.emailId}</td>
                                <td>{item.names}</td>
                                <td>{item.mobNo}</td>
                                <td>{item.homeAddress}</td>
                                <td>{item.officeAddress}</td>
                                
                            </tr>
                        })}
                    </tbody>
                </table>
                <Form
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                    show={this.state.show} 
                    handleClose={this.hideModal} 
                 />
            </div>
        )
    }
}

export default List