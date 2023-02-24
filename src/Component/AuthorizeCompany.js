import React from "react";


const AuthorizedCompany = () => {
    return (
        <>
           <div class="canvas">
        <header class="pb-0 bg-dark">
			<nav class="navbar navbar-dark navbar-expand-lg p-0">
				<div class="container-fluid">		 
					<a href="index.html" class="brand navbar-brand"><img src="http://dev.prlxweb.com/nuop/images/logo.png" alt="NCRR"/></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav mx-auto">
							<li class="nav-item">
								<a class="nav-link px-4" href="dashboard.html">Dashboard</a>
							</li>
							<li class="nav-item ">
								<a class="nav-link px-4 active" href="applicants.html">Applicants</a>
							</li>
							<li class="nav-item position-relative">
								<a href="#" class="close text-white position-absolute"><small><i class="fal fa-times-circle"></i></small></a>
								<a class="nav-link  px-4" href="#">New Application #AP123458 </a>								
							</li>
						</ul>
                        			
					<div class="" id="navbarSupportedContent">
						<ul class="nav ms-auto align-items-center">
							<li class="nav-item"><li class="nav-item"><a class="nav-link help-toggle text-white" href="#">Help <i class="fa fa-life-ring" aria-hidden="true"></i></a></li></li>
							<li class="nav-item ">
                                    <div class="dropdown">
                                        <a class="nav-link  text-white" href="#" id="notification" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >Notification <i class="fa fa-bell"></i></a>
                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-right p-4 notification-drop" aria-labelledby="notification" data-popper-placement="bottom-end">
                                            <div class="h-100 w-100 d-flex align-items-center justify-content-center">
                                                <p class="mb-0 fs-4 fw-bold">All caught up!</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
							<li class="nav-item">
                                    <div class="dropdown">
                                    {/* <!--<a class="nav-link text-white" href="#" id="navbarDropdown" role="button" aria-expanded="false"> <small class="d-block"></small></a>--> */}
                                        <a id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="nav-link text-white text-end d-flex align-items-center"><span>Justin Madigan <small class="d-block">Applicant's Primary Contact</small></span> <span class="ms-2"><i class="fal fa-chevron-down"></i></span></a>
                                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-right p-4" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                                
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
                                                        <label>dukeenergy.com</label>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <small class="text-muted d-block">State</small>
                                                        <label>dukeenergy.com</label>
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
		<form class="py-4">
			<div class="container">		
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-form  card border-0 mb-4">                    
                            <div class="">
                                <div id="project-applicant">
                                    <div class="card-header border-0">
                                        <h2>Authorised Company</h2>
                                    </div>   
                                    <div class="card mb-4 ">
                                        
                                        <div class="card-body">   
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div>
                                            <hr/>
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div>
                                            <hr/>
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div> 
                                            <hr/>
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div>
                                            <hr/>
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div>
                                            <hr/>
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div> 
                                            <hr/>
                                            <div class="row position-relative">
                                                <a href="form-210-duke-energy.html"  class="overlay-link"></a>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company name:</label>
                                                    <p>Duke Energy LLC</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Company address:</label>
                                                    <p>Ap #867-859 Sit Rd.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="text-muted d-block form-label">Website domain:</label>
                                                    <p>dukeenergy.com</p>
                                                </div>                                                
                                            </div> 
                                                                    
                                        </div>
                                    </div> 
                                    
                                </div> 
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                              <span aria-hidden="true">&laquo;</span>
                                            </a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true">&raquo;</span>
                                            </a>
                                          </li>
                                    </ul>
                                  </nav>                               
                            </div>							
                        </div>
                    </div>
                </div>	
			</div>
		</form>
	</div>
    <div class="modal fade" id="new-contact" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="staticBackdropLabel">Add New Contact 
                  {/* <!--<small class="d-block">Contact Type(Applicant’sPrimary Contact, billing contact etc.)</small>--> */}
              </h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">                
              <form>
                  <div class="">                    
                    <div class="option-fields">
                        <label for="" class="form-label d-block">Contact Type:</label>
                        <div class="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                            <label class="btn btn-outline-primary" for="btnradio1">Primary Contact</label>
                          
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio2">Billing Contact</label>
                          
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio3">Engineering Consultant</label>
                          </div>
                        {/* <!--<div class="row">
                            <div class="col-md-6">
                                <label for="" class="form-label">Contact Type:</label>
                                <select id="option-content" class="form-select" aria-label="Default select example">
                                    <option value="1" onclick="addActive8(this)" selected>Applicant’s Primary Contact</option>
                                    <option value="2" onclick="addActive9(this)">Applicant’s Billing Contact</option>
                                    <option value="3" onclick="addActive10(this)">Applicant’s Engineering Consultant</option>
                                </select>
                            </div>
                        </div>--> */}
                        <div id="collapse10" class="form-col collapse custom-collapse active">                           
                            <div class="block">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">Name:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">Title:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">Email:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">Phone:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>                                                                
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">Street Address:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>       
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">City:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>                                                                            
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">State:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="" class="form-label">Zip:</label>
                                        <input type="text" class="form-control" id=""/>
                                    </div>                                                             
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Add</button>
                  </div>
              </form>
            </div>            
          </div>
        </div>
    </div>	
    <div class="modal fade" id="applicant-detail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="1" aria-labelledby="applicant-detail" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl h-100">
          <div class="modal-content h-100">
            <div class="modal-header">
                <h2 class="modal-title" id="resolve1">Applicant Information</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  {/* <!--<div id="project-applicant">
                      <div class="card mb-4">
                          <div class="card-header bg-transparent">
                              <h3 class="mb-0">Applicant’s Details</h3>
                          </div>
                          <div class="card-body">   
                              <div class="row">
                                  <div class="col-md-3 mb-3">
                                      <label class="text-muted d-block">Applicant’s Legal Name:</label>
                                      <p> <span id="copyTarget1">Chapman Corp</span>.<a href="#" class="ms-2" id="copyButton1"><i class="fal fa-copy"></i></a></p>
                                  </div>
                                  <div class="col-md-3 mb-3">
                                      <label class="text-muted d-block">Billing:</label>
                                      <p><span id="copyTarget2">Yearly</span><a href="#" class="ms-2" id="copyButton2"><i class="fal fa-copy"></i></a></p>
                                  </div>
                                  <div class="col-md-3 mb-3">
                                      <label class="text-muted d-block">Applicant is a:</label>
                                      <p><span id="copyTarget3">Limited Partnership</span><a href="#" class="ms-2" id="copyButton3"><i class="fal fa-copy"></i></a></p>
                                  </div>
                                  <div class="col-md-3 mb-3">
                                      <label class="text-muted d-block">State of formation:</label>
                                      <p>North Carolina</p>
                                  </div>
                              </div>
                              <div class="card mb-4">
                                  <div class="card-header">
                                      <h4 class="text-muted mb-0">Applicant’s Street Address</h4>
                                  </div>
                                  <div class="card-body">
                                      <div class="row">
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">Applicant’s Street Address:</label>
                                              <p><span id="copyTarget4">Ap #867-859 Sit Rd</span>.<a href="#" class="ms-2" id="copyButton4"><i class="fal fa-copy"></i></a></p>
                                          </div>
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">City</label>
                                              <p>dukeenergy.com</p>
                                          </div>
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">State</label>
                                              <p>dukeenergy.com</p>
                                          </div>
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">Zip</label>
                                              <p>39531</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>                                     
                              <div class="card">
                                  <div class="card-header">
                                      <h4 class="text-muted mb-0">Applicant’s Mailing Address</h4>
                                  </div>
                                  <div class="card-body">
                                      <div class="row">
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">Street Address\P.O. Box:</label>
                                              <p><span id="copyTarget5">Ap #867-859 Sit Rd</span>.<a href="#" class="ms-2" id="copyButton5"><i class="fal fa-copy"></i></a></p>
                                          </div>
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">City</label>
                                              <p>dukeenergy.com</p>
                                          </div>
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">State</label>
                                              <p>dukeenergy.com</p>
                                          </div>
                                          <div class="col-md-3">
                                              <label class="text-muted d-block">Zip</label>
                                              <p>39531</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>                              
                          </div>
                      </div>                                    
                      <div class="card mb-4 ">
                          <div class="card-header bg-transparent">
                              <div class="d-sm-flex justify-content-between align-items-center">
                                  <h3 class="mb-3 mb-sm-0">Applicant's Contacts</h3>                              
                              </div>
                          </div>
                          <div class="card-body">
                              <div class="">	
                                  <div class="card position-relative mb-3">
                                      <div class="card-header">
                                          <div class="d-sm-flex justify-content-between">
                                              <h4 class="text-muted mb-0">Applicant’s Primary Contact</h4>
                                          </div>
                                      </div>
                                      <div class="card-body ">                                        
                                          <div class="row">
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Name</label>
                                                  <p class="text"><span id="copyTarget6">Cecilia Chapman</span><a href="#" class="ms-2" id="copyButton6"><i class="fal fa-copy"></i></a></p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Title</label>
                                                  <p class="text">Mankato</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Email</label>
                                                  <p class="text">cecilia@gmail.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Tel Number</label>
                                                  <p class="text">(257) 563-7401</p>
                                              </div>
                                          </div> 
                                          <div class="row">
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Street Address\P.O. Box:</label>
                                                  <p>Ap #867-859 Sit Rd.</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">City</label>
                                                  <p>dukeenergy.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">State</label>
                                                  <p>dukeenergy.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Zip</label>
                                                  <p>39531</p>
                                              </div>
                                          </div>  
                                      </div>
                                  </div>
                                  <div class="card mb-3 position-relative">
                                      <div class="card-header">
                                          <div class="d-sm-flex justify-content-between">
                                              <h4 class="text-muted mb-0">Applicant’s Billing Contact</h4>
                                          </div>
                                      </div>
                                      <div class="card-body ">                                         
                                          <div class="row">
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Name</label>
                                                  <p class="text"><span id="copyTarget7">Iris Watson</span><a href="#" class="ms-2" id="copyButton7"><i class="fal fa-copy"></i></a></p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Title</label>
                                                  <p class="text">Frederick</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Email</label>
                                                  <p class="text">iris@gmail.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Tel Number</label>
                                                  <p class="text">(372) 587-2335</p>
                                              </div>
                                          </div>  
                                          <div class="row">
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Street Address\P.O. Box:</label>
                                                  <p>Ap #867-859 Sit Rd.</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">City</label>
                                                  <p>dukeenergy.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">State</label>
                                                  <p>dukeenergy.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Zip</label>
                                                  <p>39531</p>
                                              </div>
                                          </div>                                      
                                      </div>
                                  </div>
                                  <div class="card mb-3">
                                      <div class="card-header">
                                          <div class="d-sm-flex justify-content-between">
                                              <h4 class="text-muted mb-0">Applicant’s Engineering Consultant</h4>
                                          </div>
                                      </div>
                                      <div class="card-body ">  
                                      
                                          <div class="row">
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Name</label>
                                                  <p>Calista Wise</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Title</label>
                                                  <p>Dictum</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Email</label>
                                                  <p>calista@gmail.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Tel Number</label>
                                                  <p>(492) 709-6392</p>
                                              </div>
                                          </div>   
                                          <div class="row">
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Street Address\P.O. Box:</label>
                                                  <p>Ap #867-859 Sit Rd.</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">City</label>
                                                  <p>dukeenergy.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">State</label>
                                                  <p>dukeenergy.com</p>
                                              </div>
                                              <div class="col-md-3">
                                                  <label class="text-muted d-block">Zip</label>
                                                  <p>39531</p>
                                              </div>
                                          </div>                                     
                                      </div>
                                  </div>	                                
                              </div>	
                          </div>
                      </div>
                  </div>--> */}
                  <iframe src="applicants-details-modal.html" id="info" class="iframe" name="info" seamless="" height="100%" width="100%"></iframe>
                </div>
            </div>
          </div>
      </div>
      </>
    );
}

export default AuthorizedCompany;