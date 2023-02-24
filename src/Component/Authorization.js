import React from "react";


const Authorization = () => {
    return (
        <>
              <div class="canvas">
        <header class="pb-0 bg-dark">
            <nav class="navbar navbar-dark navbar-expand-lg p-0">
                <div class="container-fluid">
                    <a href="#" class="brand navbar-brand"><img src="http://dev.prlxweb.com/nuop/images/logo.png" alt="NCRR"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto">
							<li class="nav-item">
								<a class="nav-link px-4" href="dashboard.html">Dashboard</a>
							</li>
							<li class="nav-item ">
								<a class="nav-link px-4" href="#">Applicants</a>
							</li>
                            <li class="nav-item ">
								<a class="nav-link px-4 active" href="authorization.html">Authorization</a>
							</li>							
						</ul>
                        <div class="ms-auto" id="navbarSupportedContent">
                            <ul class="nav ms-auto align-items-center">
                                <li class="nav-item">
                                <li class="nav-item"><a class="nav-link help-toggle text-white" href="#">Help <i
                                            class="fa fa-life-ring" aria-hidden="true"></i></a></li>
                                </li>
                                <li class="nav-item ">
                                    <div class="dropdown">
                                        <a class="nav-link  text-white" href="#" id="notification"
                                            data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="true">Notification <i class="fa fa-bell"></i></a>
                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-right p-4 notification-drop"
                                            aria-labelledby="notification" data-popper-placement="bottom-end">
                                            <div class="h-100 w-100 d-flex align-items-center justify-content-center">
                                                <p class="mb-0 fs-4 fw-bold">All caught up!</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        {/* <!--<a class="nav-link text-white" href="#" id="navbarDropdown" role="button" aria-expanded="false"> <small class="d-block"></small></a>--> */}
                                        <a id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="true"
                                            class="nav-link text-white text-end d-flex align-items-center disabled"><span>Justin
                                                Madigan <small class="d-block">HNTB Representative</small></span> <span
                                                class="ms-2"><i class="fal fa-chevron-down"></i></span></a>
                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-right p-4"
                                            aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">

                                            <div class="row border-bottom py-2">
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">Cecilia Chapman</small>
                                                    <label>Applicant’s Primary Contact</label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">Role</small>
                                                    <label>Applicant’s User</label>
                                                </div>
                                            </div>
                                            <div class="row border-bottom py-2">
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">Email</small>
                                                    <label>cecilia@gmail.com</label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">Phone</small>
                                                    <label>(257) 563-7401</label>
                                                </div>
                                            </div>
                                            <div class="row py-2">
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">Street Address</small>
                                                    <label>Ap #867-859 Sit Rd.</label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">City</small>
                                                    <label>New York</label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">State</small>
                                                    <label>New York</label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <small class="text-muted d-block">Zip</small>
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
        <div class="container">				
            <div class="inner-form mt-4 card bg-transparent border-0 mb-4">   
                <div class="card-header border-0">
                    <div class="d-sm-flex justify-content-between">
                        <h2 class="mb-3 mb-sm-0">Pending Authorizations</h2>                            
                    </div>
                </div>                 
                <div class="">                        
                    <div class="card light-yellow-card mb-4 position-relative rounded-0">
                        <a href="initial-review.html" class="overlay-link"></a>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">
                                
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Utility Application</label>
                                    <p>#AP123458</p>                                        
                                </div>
                                <div class="col-md-5">
                                    <label class="text-muted d-block form-label">Application Type</label>
                                    <p>New Wire/Conduit/Cable Occupancy Application</p>
                                </div>
                                <div class="col-md-4">
                                    <label class="text-muted d-block form-label">Status</label>
                                    <div class="d-flex">
                                        <p class="pe-3">Engineering review</p>                                        
                                        <p class="border-start ps-3">13 Open comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant</label>
                                    <p>Chapman Corp.</p>                                        
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant’s Primary Contact</label>
                                    <p>Cecilia Chapman</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">	
                            <div class="row">                                   
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Proposed work involves</label>
                                    <p>Installation of a new facility</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Existing Agreement for Installation?</label>
                                    <p>Yes</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Railroad Milepost Reference</label>
                                    <p>Test</p>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Type of proposed installation:</label>
                                    <p>Electric Power</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Material</label>
                                    <p>Copper</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum voltage:</label>
                                    <p>123456</p>
                                </div>                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum Current</label>
                                    <p>1324</p>
                                </div>                                   
                            </div>                                
                        </div>	
                    </div>
                    <div class="card light-yellow-card mb-4 position-relative">
                        <a href="initial-review.html" class="overlay-link"></a>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Utility Application</label>
                                    <p>#AP98765</p>                                        
                                </div>
                                <div class="col-md-5">
                                    <label class="text-muted d-block form-label">Application Type</label>
                                    <p>New Wire/Conduit/Cable Occupancy Application</p>
                                </div>
                                <div class="col-md-4">
                                    <label class="text-muted d-block form-label">Status</label>
                                    <div class="d-flex">
                                        <p class="pe-3">Engineering review</p>                                        
                                        <p class="border-start ps-3">10 Open comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant</label>
                                    <p>Watson Corp.</p>                                        
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant’s Primary Contact</label>
                                    <p>Iris Watson</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">	
                            <div class="row">                                   
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Proposed work involves</label>
                                    <p>Installation of a new facility</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Existing Agreement for Installation?</label>
                                    <p>Yes</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Railroad Milepost Reference</label>
                                    <p>Test</p>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Type of proposed installation:</label>
                                    <p>Electric Power</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Material</label>
                                    <p>Copper</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum voltage:</label>
                                    <p>440</p>
                                </div>                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum Current</label>
                                    <p>9876</p>
                                </div>                                   
                            </div>                                
                        </div>	
                    </div>
                    <hr/>
                    <div class="card-header border-0">
                        <h2>Approved Authorizations</h2>
                    </div>
                    <div class="card mb-3 position-relative ">
                        <a href="final-release.html" class="overlay-link"></a>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">         
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Agreement</label>
                                    <p>#AG12345</p>                                        
                                </div>                           
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Utility Application</label>
                                    <p>#AP98765</p>                                        
                                </div>
                                <div class="col-md-5">
                                    <label class="text-muted d-block form-label">Application Type</label>
                                    <p>New Wire/Conduit/Cable Occupancy Application</p>
                                </div>                                    
                            </div>
                        </div>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant</label>
                                    <p>Watson Corp.</p>                                        
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant’s Primary Contact</label>
                                    <p>Iris Watson</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">	
                            <div class="row">                                   
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Proposed work involves</label>
                                    <p>Installation of a new facility</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Existing Agreement for Installation?</label>
                                    <p>Yes</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Railroad Milepost Reference</label>
                                    <p>Test</p>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Type of proposed installation:</label>
                                    <p>Electric Power</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Material</label>
                                    <p>Copper</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum voltage:</label>
                                    <p>440</p>
                                </div>                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum Current</label>
                                    <p>9876</p>
                                </div>                                   
                            </div>                                
                        </div>
                    </div>
                    <div class="card mb-3 position-relative">
                        <a href="final-release.html" class="overlay-link"></a>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Agreement</label>
                                    <p>#AG12345</p>                                        
                                </div> 
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Utility Application</label>
                                    <p>#AP123458</p>                                        
                                </div>
                                <div class="col-md-5">
                                    <label class="text-muted d-block form-label">Application Type</label>
                                    <p>New Wire/Conduit/Cable Occupancy Application</p>
                                </div>                                    
                            </div>
                        </div>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant</label>
                                    <p>Chapman Corp.</p>                                        
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant’s Primary Contact</label>
                                    <p>Cecilia Chapman</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">	
                            <div class="row">                                   
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Proposed work involves</label>
                                    <p>Installation of a new facility</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Existing Agreement for Installation?</label>
                                    <p>Yes</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Railroad Milepost Reference</label>
                                    <p>Test</p>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Type of proposed installation:</label>
                                    <p>Electric Power</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Material</label>
                                    <p>Copper</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum voltage:</label>
                                    <p>123456</p>
                                </div>                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum Current</label>
                                    <p>1324</p>
                                </div>                                   
                            </div>                                
                        </div>
                    </div>
                    <div class="card mb-3 position-relative">
                        <a href="final-release.html" class="overlay-link"></a>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Agreement</label>
                                    <p>#AG98765</p>                                        
                                </div>                               
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Utility Application</label>
                                    <p>#AP98765</p>                                        
                                </div>
                                <div class="col-md-5">
                                    <label class="text-muted d-block form-label">Application Type</label>
                                    <p>New Wire/Conduit/Cable Occupancy Application</p>
                                </div>                                    
                            </div>
                        </div>
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant</label>
                                    <p>Watson Corp.</p>                                        
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Applicant’s Primary Contact</label>
                                    <p>Iris Watson</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">	
                            <div class="row">                                   
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Proposed work involves</label>
                                    <p>Installation of a new facility</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Existing Agreement for Installation?</label>
                                    <p>Yes</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Railroad Milepost Reference</label>
                                    <p>Test</p>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Type of proposed installation:</label>
                                    <p>Electric Power</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Material</label>
                                    <p>Copper</p>
                                </div>
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum voltage:</label>
                                    <p>440</p>
                                </div>                                    
                                <div class="col-md-3">
                                    <label class="text-muted d-block form-label">Maximum Current</label>
                                    <p>9876</p>
                                </div>                                   
                            </div>                                
                        </div>
                    </div>
                </div>							
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination  justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
        </div>
    </div>
        </>
    );
}
export default Authorization;