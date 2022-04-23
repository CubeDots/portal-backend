import React, { useEffect, useState } from 'react';

function HelpSupport() {
    const [formData, setFormData] = useState({name:'',email:'', mobile:'', message:''});
    useEffect(()=>{
        window.scrollTo({ top:0,left:0,behavior:'smooth'});
    },[])
    return (
        <div className='mt-70'>
            <div className="helpAndSupportOffCanvas">
                <div className="offcanvas-header">
                    <div className='generateTicket'>
                        <h2 className="vegonHeading ">Generate Ticket</h2>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className='helpAndSupportBody'>
                        <div className='container'>
                            <div className='row bgcol'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6'>
                                    <form>
                                    <div className='helpAndSupportInput'>
                                        <div className='titleDiv'>
                                            <label className='TitleHeading'>Name</label>
                                            <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} defaultValue={formData.name} className='form-control inputOffCanvas' placeholder='Enter Name' name="name" required />
                                        </div>
                                        <div className='categoryDiv'>
                                            <label className='TitleHeading'>Email</label>
                                            <input type="text" className='form-control' name="email" placeholder='Enter Email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} defaultValue={formData.email} required />
                                        </div>
                                        <div className='priorityDiv'>
                                            <label className='TitleHeading'>Mobile No.</label>
                                            <input type="text" className='form-control' name="mobile" placeholder='Enter Mobile' onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} defaultValue={formData.mobile} required />
                                        </div>
                                        <div className='messageDiv'>
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setFormData({ ...formData, message: e.target.value })} defaultValue={formData.message} name="message" rows="5" placeholder='Message' required />
                                        </div>
                                        <button className='sendBtn'>Submit</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpSupport;