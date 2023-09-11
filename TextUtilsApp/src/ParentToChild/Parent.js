import Child from "./Child";

function Parent(){
    const employeeData = [
        {name : 'Priyanka', designation : 'software engineer', salary : 45000},
        {name : 'John', designation : 'Business analyst', salary : 40000},
        {name : 'David', designation : 'Quality Analyst', salary : 35000},
        {name : 'Rohit', designation : 'UI developer', salary : 75000}
    ]

    const empList = employeeData.map(({name, designation,salary},index) => {
        return(
            <Child key = {index} name = {name} designation = {designation} salary = {salary}/>
        )
    })

    return (
        <div className="main">
            <h3>Passing data from parent to child</h3>
            {empList}
        </div>
    )
}

export default Parent;