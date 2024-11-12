import React, { useEffect, useState } from "react";

// class AddUserInfor extends React.Component {
//     // state là 1 object
//     state = {
//         name: "Long",
//         address: "Binh Duong",
//         age: 20,
//     };
//     // handleClick = (event) => {
//     //     // console.log("Click me my button")
//     //     console.log("My name is", this.state.name);
//     //     // set state cập nhật state object
//     //     this.setState({
//     //         name: "ZETTTT",
//     //     });
//     // };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value,
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

// render() {
//     return (
//         // <>  My name is {this.state.name} and I'm {this.state.age}
//         //     {/* viết js thì {} */}
//         //     {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}
//         //     <form onSubmit={(event) => this.handleOnSubmit(event)}>
//         //         <label>Your name: </label>
//         //         <input
//         //             value={this.state.name}
//         //             type="text"
//         //             onChange={(event) => this.handleOnChangeInput(event)} />
//         //         <button>Submit</button>

//         //         <label>Your age: </label>
//         //         <input
//         //             value={this.state.age}
//         //             type="text"
//         //             onChange={(event) => this.handleOnChangeAge(event)} />
//         //         <button>Submit</button>

//         //     </form>
//         // </>
//     )

// }
// }
const AddUserInfor = (props) => {
    // state = {
    //     name: "",
    //     address: "Binh Duong",
    //     age: '',
    // };
    const [name, setName] = useState('')
    const [address, setAddress] = useState('Binh DUong')
    const [age, setAge] = useState('')

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
        // this.setState({
        //     name: event.target.value,
        // })
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
        // this.setState({
        //     age: event.target.value,
        // })
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }
    useEffect(() => {
        setTimeout(() => {
            document.title = "Eric & Hỏi Dân IT";
        }, 3000);
        console.log(">>> call me useEffect");
    }, []);

    return (<> My name is {name} and I'm {age}
        {/* viết js thì {} */}
        {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}
        <form onSubmit={(event) => handleOnSubmit(event)}>
            <label>Your name: </label>
            <input
                value={name}
                type="text"
                onChange={(event) => handleOnChangeInput(event)} />
            <button>Submit</button>

            <label>Your age: </label>
            <input
                value={age}
                type="text"
                onChange={(event) => handleOnChangeAge(event)} />
            <button>Submit</button>

        </form>
    </>
    )
}
export default AddUserInfor;