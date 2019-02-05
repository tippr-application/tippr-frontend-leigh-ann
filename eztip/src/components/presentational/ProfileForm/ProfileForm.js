import React from 'react';

const ProfileForm = props => {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Full name" />
                <input type="text" name="employer" placeholder="Employer" />
                <input type="text" name="date" placeholder="Starting date of work" />
                <input type="text" name="tagline" placeholder="What's your tagline?" />
                <input type="text" name="imageURL" placeholder="Profile photo URL" />
                <button>Save</button>
            </form>
        </div>
    )
}

export default ProfileForm;