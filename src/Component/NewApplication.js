import React from "react";


const NewApplication = () => {
    return (
        <>
            <div className="canvas">
        
        
            <div className="container" style={{marginTop:80}}>
                <h2>Who is the Applicant</h2>
                <h3>Select a company to proceed</h3>
                <div className="row d-flex justify-content-between">                    
                    <div className="col-lg-4">
                        <a href="formDuke" className="text-dark">
                            <div className="card bg-transparent border border-dark">
                                <div className="card-header border-0 bg-transparent d-flex justify-content-between align-items-center">
                                    <h2 className="mb-0">Duke Energy is the applicant</h2>
                                    <span><i className="far fa-chevron-right"></i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a href="authorizedCompany" className="text-dark">
                            <div className="card bg-transparent border border-dark">
                                <div className="card-header border-0 bg-transparent d-flex justify-content-between align-items-center">
                                    <h2 className="mb-0">Another Authorised Company</h2>
                                    <span><i className="far fa-chevron-right"></i></span>
                                </div>
                            </div>
                        </a>
                        
                    </div>
                    <div className="col-lg-4">
                        <a href="addedcompany" className="text-dark">
                            <div className="card bg-transparent border border-dark">
                                <div className="card-header border-0 bg-transparent d-flex justify-content-between align-items-center">
                                    <h2 className="mb-0">Find or add new Company</h2>
                                    <span><i className="far fa-chevron-right"></i></span>
                                </div>
                            </div>
                        </a>                        
                    </div>
                </div>                
            </div>
        
    </div>
        </>
    );
}
export default NewApplication;