import React from "react";


const Addedcompany = () =>{
    return (
     <>
        <div className="canvas">
        <header className="bg-dark">
			<nav className="navbar navbar-dark navbar-expand-lg p-0">
				<div className="container-fluid">		
					<a href="index.html" className="brand navbar-brand"><img src="http://dev.prlxweb.com/nuop/images/logo.png" alt="NCRR"/></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>	
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">
								<a className="nav-link px-4 active" href="dashboard.html">Dashboard</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link px-4" href="applicants.html">Applicants</a>
							</li>
                            <li className="nav-item ">
								<a className="nav-link px-4" href="authorization.html">Authorization</a>
							</li>							
						</ul>		
            <div className="" id="navbarSupportedContent">
              <ul className="nav ms-auto align-items-center">
                <li className="nav-item"><li className="nav-item"><a className="nav-link help-toggle text-white" href="#">Help <i className="fa fa-life-ring" aria-hidden="true"></i></a></li></li>
                <li className="nav-item ">
                                    <div className="dropdown">
                                        <a className="nav-link  text-white" href="#" id="notification" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >Notification <i className="fa fa-bell"></i></a>
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-right p-4 notification-drop" aria-labelledby="notification" data-popper-placement="bottom-end">
                                            <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                                                <p className="mb-0 fs-4 fw-bold">All caught up!</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                <li className="nav-item">
                    <div className="dropdown">
                   <a className="nav-link text-white" href="#" id="navbarDropdown" role="button" aria-expanded="false"> <small className="d-block"></small></a>
                        <a id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="nav-link text-white text-end d-flex align-items-center"><span>Justin Madigan <small className="d-block">HNTB Representative</small></span> <span className="ms-2"><i className="fal fa-chevron-down"></i></span></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-right p-4" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                              <div className="row border-bottom py-2">
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">Cecilia Chapman</small>
                                    <label>Applicant’s Primary Contact</label>
                                </div>
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">Role</small>
                                    <label>Applicant’s User</label>
                                </div>
                            </div>
                            <div className="row border-bottom py-2">
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">Email</small>
                                    <label>cecilia@gmail.com</label>
                                </div>
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">Phone</small>
                                    <label>(257) 563-7401</label>
                                </div>
                            </div> 
                            <div className="row py-2">
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">Street Address</small>
                                    <label>Ap #867-859 Sit Rd.</label>
                                </div>
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">City</small>
                                    <label>New York</label>
                                </div>
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">State</small>
                                    <label>New York</label>
                                </div>
                                <div className="col-sm-6">
                                    <small className="text-muted d-block">Zip</small>
                                    <label>39531</label>
                                </div>
                            </div> 
                          </div>
                    </div>
                </li>
              </ul>
            </div>
          </div>
								
				</div>
			</nav>
		</header>
		<div className="container">
            <h2 className="mt-4">Find or Add new Company</h2>
            <div className="card">
                <div className="card-body">
                    <div className="row my-4 align-items-center">
                        <div className="col-auto">
                        <h4 for="automplete-1" className="mb-4">Search a Company by website domain and email.</h4>
                        </div>
                        <div className="col-lg-12 ui-widget select-col position-relative">
                            <input type="text" id="automplete-1" className="form-control  border-dark" data-bs-toggle="dropdown" aria-expanded="false"/> 
                            <ul className="dropdown-menu w-100 rounded-0 pb-0" aria-labelledby="automplete-1">
                                <li className="border-bottom"><a className="dropdown-item d-flex justify-content-between" href="form-210-duke-energy.html"><span>Duke Energy LLC.</span> <span className="text text-primary">Select</span></a></li>
                                <li className="border-bottom"><a className="dropdown-item d-flex justify-content-between" href="form-210-duke-energy.html"><span> Duke Energy LLC </span> <span className="text text-primary">Select</span></a></li>
                                <li className="border-bottom"><a className="dropdown-item d-flex justify-content-between" href="form-210-duke-energy.html"><span> Duke Energy LLC</span><span className="text text-primary">Select</span></a></li>
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
    );
  }
  
  export default Addedcompany;
  