import ChildComponent from "./ChildComponent";

function ParentComponent(){
    function showData(userData){
        console.log(userData);
        alert(` User info :  ${userData.name} ${userData.email}`);
    }
    return(
        <div>
            <h4>child to parent</h4>
            <ChildComponent alert = {showData}/>
        </div>
    )
}

export default ParentComponent;