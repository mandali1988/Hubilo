import React, { useState } from 'react'; 

function Userblock(props){

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
 
    return(
       <> 
        <div  className="Userblock" style={{ border: isChecked ? '1px solid green' : '1px solid #E9E9E9',}}>
             <div><img src="./Avatar.png" /></div>
             <div className="Userblocktext">
                <div className="username">{props.username}</div>  
                <div className="userdesi"><span>{props.userdesi}</span> <span className="dividr">|</span> <span>{props.userfirm}</span></div>
                <div className="Editusr"><img src="./black_edit.png" />&nbsp; Edit Speaker </div>
             </div>
             <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        </div>
       </>
    )
}

export default Userblock;