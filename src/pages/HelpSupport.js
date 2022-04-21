import React from 'react';

function HelpSupport() {
    return (
        <div className='mt-70'>
            <div className="helpAndSupportOffCanvas">
                <div className="offcanvas-header">
                    <div className='generateTicket'>
                        <h2>Generate Ticket</h2>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className='helpAndSupportBody'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6'>
                                    <form>
                                    <div className='helpAndSupportInput'>
                                        <div className='titleDiv'>
                                            <label className='TitleHeading'>Name</label>
                                            <input type="text" className='form-control inputOffCanvas' placeholder='Enter Name' required />
                                        </div>
                                        <div className='categoryDiv'>
                                            <label className='TitleHeading'>Email</label>
                                            <input type="text" className='form-control' placeholder='Enter Email' required />
                                        </div>
                                        <div className='priorityDiv'>
                                            <label className='TitleHeading'>Mobile No.</label>
                                            <input type="text" className='form-control' placeholder='Enter Mobile' required />
                                        </div>
                                        <div className='messageDiv'>
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Message' required />
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