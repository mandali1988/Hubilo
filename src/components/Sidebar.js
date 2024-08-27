import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


const Sidebar = (props) => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const showSidebar = () => setIsSidebarVisible(true);
    const hideSidebar = () => setIsSidebarVisible(false);


    const [searchTerm, setSearchTerm] = useState('');

    const [users] = useState([
        { id: 1, username: 'Eleanor Pena', userdesi: "President of Sales", userfirm: 'XYZ Organisation' },
        { id: 2, username: 'Esther Howard', userdesi: "Marketing Coordinator", userfirm: 'XYZ Organisation' },
        { id: 3, username: 'Albert Flores', userdesi: "Nursing Assistant", userfirm: 'XYZ Organisation' },
        { id: 4, username: 'John Doe', userdesi: "Marketing Head", userfirm: 'XYZ Organisation' },
        { id: 5, username: 'Savannah Nguyen', userdesi: "Web Designer", userfirm: 'XYZ Organisation' },
        { id: 6, username: 'Leslie Alexander', userdesi: "Marketing Head", userfirm: 'XYZ Organisation' },
    ]);
    const [checkedItems, setCheckedItems] = useState({}); 

    const handleCheckboxChange = (id) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredItems = users.filter(item =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="ShowSidebarbutton">
                <button onClick={showSidebar} className='AddSpeakerbutton'>Add Speaker</button>
            </div>

            <div className={`sidebar ${isSidebarVisible ? 'open' : ''}`}>
                <div className='sidebarheader'> Add Speaker <img src='./close-icon.png' className="pointer" onClick={hideSidebar} />
                </div>
                <div className='sidebarmiddle'>
                    <div className='sidebarsearchbar'>
                        <img src='./icon.png' /> <input type='text' placeholder='Search' value={searchTerm} onChange={handleSearchChange} />
                    </div>
                    <div className='sidebaruserlist'>
                        <ul>
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <li key={item.id}>
                                        <div className="Userblock" style={{ border: checkedItems[item.id] ? '1px solid green' : '1px solid #E9E9E9', }}>
                                            <div><img src="./Avatar.png" /></div>
                                            <div className="Userblocktext">
                                                <div className="username"> {item.username}</div>
                                                <div className="userdesi"><span> {item.userdesi}</span> <span className="dividr">|</span> <span> {item.userfirm}</span></div>
                                                <div className="Editusr"><img src="./black_edit.png" />&nbsp; Edit Speaker </div>
                                            </div>
                                            <input type="checkbox" className="checkbox" checked={!!checkedItems[item.id]} onChange={() => handleCheckboxChange(item.id)} />
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li>Speaker could not be found</li>
                            )}  
                        </ul>
                         {/* Using Reusable components <ul>
                            <li>
                              <Userblock username="Esther Howard" userdesi="President of Sales" userfirm="XYZ Organisation" />
                            </li>
                         </ul> */}
                    </div>
                </div>
                <div className='sidebaraction'>
                    <div>
                        <button type='button' className='Addbutton' disabled={!!checkedItems}>Add</button> 
                        <button type='button' className='cancelbtn'>Cancel</button>
                    </div>
                    <a href='#'>Create a speaker</a>
                </div>
            </div>

        </>

    );
};

export default Sidebar;
