import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('https://vast-meadow-55322.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('User upgraded to Admin');
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h2 className="text-center ">Make an Admin</h2>
            <div className="container col-8">
                <form onSubmit={handleAdmin}>
                    <input
                        onBlur={handleOnBlur}
                        required
                        name="email"
                        type="email" className="form-control border-1 border-danger mb-3" id="exampleFormControlInput1" placeholder="userName@example.com" />

                    <button
                        className="px-3 btn border-danger border-2 fw-bold"
                        type="submit">Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;