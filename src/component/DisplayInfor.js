import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'
class DisplayInfor extends React.Component {

    state = {
        isShowListUsers: true
    }


    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }
    render() {
        // destructuring
        const { listUsers } = this.props;
        //props sài dữ liệu th cha cho con

        // console.table(listUsers)
        return (
            <div class="display-infor-container">
                {/* <img src={logo}/> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUsers === true ? "Hide listUsers" : "Show listUsers"}
                    </span>
                </div>
                {
                    this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age >= 18 ? "blue" : "red"}>
                                    <div> 
                                    <div>My name {user.name}</div>
                                    <div>My age {user.age} </div>
                                    </div>
                                
                                    <div> 
                                        <button onClick={() => this.props.handleDeleteUser(user.id)} >Delete</button>
                                    </div>
                                    <hr/>
                                </div>
                                
                            )

                        })
                        }

                    </div >
                }
            </div >
        )
    }
}

export default DisplayInfor;