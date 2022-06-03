import { useState } from "react";
import ResortEdit from "./ResortEditModa";
import { Modal } from '../../context/Modal';

function ResortEditList({allResorts, setEditModal, userId}){
    const [formEdit, setFormEdit] = useState(false)

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title-resortList-modal">
                    <h2>Please pick a Resort</h2>
                    <div className="resort-list-pick" >
                        <ul>
                            {allResorts.map((resort) => {
                                const currentResort = resort
                                return(
                                        <li key={resort.id} >
                                            <div className='resorts-container-sec'>
                                                <img src={resort.imageUrl} alt="Resort Image"></img>
                                                <span>{resort.name}</span>
                                                <button className="listResortModal Btn" onClick={() => setFormEdit(true)}>Edit</button>
                                                {formEdit &&  (
                                                <Modal onClose={() => {setFormEdit(false)}}>
                                                        <ResortEdit userId={userId} setFormEdit={setFormEdit} resort={currentResort}/>
                                                    </Modal>
                                                    )}
                                            </div>
                                        </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <button onClick={() => setEditModal(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default ResortEditList;
