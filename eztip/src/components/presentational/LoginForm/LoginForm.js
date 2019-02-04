import React from 'react';

const LoginForm = props => {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="password" name="password" placeholder="Password" />
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default LoginForm;
