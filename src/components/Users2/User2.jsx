import React, { use } from 'react';

const User2 = ({usersPromis}) => {
    const user=use(usersPromis);
    console.log('users2 suspence data load', user); 
    return (
        <div>
            <h1>This users2</h1>
        </div>
    );
};

export default User2;