const User = ({user}) => {
    
    const {name, email, phone}=user;
    
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
        </div>
    );
};

export default User;