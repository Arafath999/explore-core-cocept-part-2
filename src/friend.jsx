export default function FFriend ({friend}) {
    const{name, email} = friend;
    return (
        <div className="box">
           <h4>Dilrubar jamai Name: {name}</h4>
           <p>Email: {email}</p>
        </div>
    )
}