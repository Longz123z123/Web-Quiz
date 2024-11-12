import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
// state = {
//     listUsers: [
//         { id: 1, name: "Binh Duong", age: "50" },
//         { id: 2, name: " Duong", age: "10" },
//         { id: 3, name: "Binh x Duong", age: "20" }
//     ]
// };

// handleAddNewUser = (userObj) => {
//     this.setState({
//         listUsers: [userObj, ...this.state.listUsers]
//     })
// }
// handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter(item => item.id !== userId);
//     this.setState({
//         listUsers: listUsersClone
//     })
// }
//     // cú pháp đặc biệt của riêng JSX viết code js bên trong html
//     render() {
//         return (
// <>
//     <AddUserInfor
//         handleAddNewUser={this.handleAddNewUser}
//     />
//     <br />
//     <br />
//     <DisplayInfor 
//     listUsers={this.state.listUsers}
//     handleDeleteUser={this.handleDeleteUser}

//     />

// </ >
//         );
//     }
// }
const MyComponent = (props) => {

    const [listUsers, setlistUsers] = useState(
        [
            { id: 1, name: "Binh Duong", age: "50" },
            { id: 2, name: " Duong", age: "10" },
            { id: 3, name: "Binh x Duong", age: "20" }
        ]
    )


    const handleAddNewUser = (userObj) => {
        setlistUsers([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlistUsers(listUsersClone)
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}

            />

        </ >
    )
}
export default MyComponent;
