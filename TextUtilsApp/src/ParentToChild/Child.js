function Child({name,designation,salary}){
    console.log(name,designation,salary)
    return(
        <div className="card"
            style={{
                width : '37%',
                marginLeft : '26rem',
                marginBottom : '2rem',
                marginTop : '1rem',
                boxShadow : '0 3px 6px rgba(0,0,0,0.16)',
                paddingTop : '1rem',
                paddingBottom : '1rem'
            }}  
        > 
            <div>Name : {name}</div>
            <div>Designation : {designation}</div>
            <div>Salary : {salary}</div>
        </div>
    )
}

export default Child;