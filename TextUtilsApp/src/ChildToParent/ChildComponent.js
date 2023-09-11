function ChildComponent(props){
    const userData = {name : 'Priyanka Sharma', email : 'priyanka@gmail.com'}
    return(
        <div>
            <p>User Name : </p>
            <button type="button" className="btn btn-success" onClick = {()=>props.alert(userData)}>Click me</button>
        </div>
    )
}

export default ChildComponent;