import React from "react";


const Signup = () =>{
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
        {/* ------------------------------------------------------------------extra start---------------------------- */}
        <div><a class="btn btn-primary btn-lg m-2" href="/"> SignUp</a>{"    "}
        <a class="btn btn-primary btn-lg m-2" href="signupContacts"> SignupContacts</a>{"    "}
        <a class="btn btn-primary btn-lg m-2" href="newapplication"> NewApplication</a>{"    "}
        <a class="btn btn-primary btn-lg m-2" href="formDuke"> FormDuke210</a>{"    "}
        <a class="btn btn-primary btn-lg m-2" href="authorization"> Authorization</a>{"    "}
        <a class="btn btn-primary btn-lg m-2" href="authorizedCompany">AuthorizedCompany</a>{"    "}
        <a class="btn btn-primary btn-lg m-2" href="addedcompany">Addedcompany</a>{"    "}
        </div>
        {/* ---------------------------------------------extra end------------------------------------------------ */}
        <div style={{minHeight:"100vh"}}>
            <div class="container" style={{marginTop:"84px"}}>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="">
                            <div></div>
                            <form action="contact-detail-autofill.html" method="post">
                                <div class="inner-form card mb-4">
                                    <div class=" border-bottom card-header">
                                        <h2> Company Details.</h2>
                                        <p class="text-dark mb-0"><i class="far fa-hand-point-right"></i> Following
                                            information creates your profile in the NCRR portal and this information is
                                            used with all utility applications in the future.</p>
                                    </div>
                                    <div class="card-body" id="owner-details">
                                        <div class="d-flex justify-content-between">
                                            <h3>Company Details</h3>
                                            <p class="m-0 text-muted">Required</p>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mt-3"><label
                                                        class="form-label d-flex justify-content-between">Company
                                                        legal Name <small
                                                            class="text-danger ms-1">*required</small></label><input
                                                        class="form-control" type="text" id="company_name"
                                                        name="company_name" value="Duke Energy LLC"/><span class="text-danger"> </span>
                                                    <div id="" class="form-text">*Please ensure that the exact legal
                                                        name is provided with no abbreviations.</div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mt-3"><label
                                                            class="form-label d-flex justify-content-between">Company
                                                            Street Address<small
                                                                class="text-danger ms-1">*required</small></label><input
                                                            class="form-control" type="text" id="company_address"
                                                            name="company_address" value=""/><span class="text-danger">
                                                        </span></div>
                                                </div>
                                                <div class="col">
                                                    <div class="mt-3"><label
                                                            class="form-label d-flex justify-content-between">City<small
                                                                class="text-danger ms-1">*required</small></label><input
                                                            class="form-control" type="text" id="company_city"
                                                            name="company_city" value=""/><span class="text-danger">
                                                        </span></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mt-3"><label
                                                            class="form-label d-flex justify-content-between">State<small
                                                                class="text-danger ms-1">*required</small></label><select
                                                            class="form-select  mb-3" name="company_state"
                                                            id="company_state">
                                                            <option value="North Carolina">North Carolina</option>
                                                            <option value="Alaska">Alaska</option>
                                                            <option value="Alabama">Alabama</option>
                                                            <option value="Arkansas">Arkansas</option>
                                                            <option value="American Samoa">American Samoa</option>
                                                            <option value="Arizona">Arizona</option>
                                                            <option value="California">California</option>
                                                            <option value="Colorado">Colorado</option>
                                                            <option value="Connecticut">Connecticut</option>
                                                            <option value="District of Columbia">District of Columbia
                                                            </option>
                                                            <option value="Delaware">Delaware</option>
                                                            <option value="Florida">Florida</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Guam">Guam</option>
                                                            <option value="Hawaii">Hawaii</option>
                                                            <option value="Iowa">Iowa</option>
                                                            <option value="Idaho">Idaho</option>
                                                            <option value="Illinois">Illinois</option>
                                                            <option value="Indiana">Indiana</option>
                                                            <option value="Kansas">Kansas</option>
                                                            <option value="Kentucky">Kentucky</option>
                                                            <option value="Louisiana">Louisiana</option>
                                                            <option value="Massachusetts">Massachusetts</option>
                                                            <option value="Maryland">Maryland</option>
                                                            <option value="Maine">Maine</option>
                                                            <option value="Michigan">Michigan</option>
                                                            <option value="Minnesota">Minnesota</option>
                                                            <option value="Missouri">Missouri</option>
                                                            <option value="Mississippi">Mississippi</option>
                                                            <option value="Montana">Montana</option>
                                                            <option value=" North Dakota"> North Dakota</option>
                                                            <option value="Nebraska">Nebraska</option>
                                                            <option value="New Hampshire">New Hampshire</option>
                                                            <option value="New Jersey">New Jersey</option>
                                                            <option value="New Mexico">New Mexico</option>
                                                            <option value="Nevada">Nevada</option>
                                                            <option value="New York">New York</option>
                                                            <option value="Ohio">Ohio</option>
                                                            <option value="Oklahoma">Oklahoma</option>
                                                            <option value="Oregon">Oregon</option>
                                                            <option value="Pennsylvania">Pennsylvania</option>
                                                            <option value="Puerto Rico">Puerto Rico</option>
                                                            <option value="Rhode Island">Rhode Island</option>
                                                            <option value="South Carolina">South Carolina</option>
                                                            <option value="South Dakota">South Dakota</option>
                                                            <option value="Tennessee">Tennessee</option>
                                                            <option value="Texas">Texas</option>
                                                            <option value="Utah">Utah</option>
                                                            <option value="Virginia">Virginia</option>
                                                            <option value="Virgin Islands">Virgin Islands</option>
                                                            <option value="Vermont">Vermont</option>
                                                            <option value="Washington">Washington</option>
                                                            <option value="Wisconsin">Wisconsin</option>
                                                            <option value="West Virginia">West Virginia</option>
                                                            <option value="Wyoming">Wyoming</option>
                                                        </select></div>
                                                </div>
                                                <div class="col">
                                                    <div class="mt-3"><label
                                                            class="form-label d-flex justify-content-between">Zip<small
                                                                class="text-danger ms-1">*required</small></label><input
                                                            class="form-control" type="text" id="company_zip"
                                                            name="company_zip" value=""/><span class="text-danger">
                                                        </span></div>
                                                </div>
                                                <div>
                                                    <div class="form-check"><input type="checkbox"
                                                            name="mail_address_req"
                                                            id="Owner’s Mailing Address is same as Street Address"
                                                            class="form-check-input"
                                                            value="Owner’s Mailing Address is same as Street Address"
                                                            checked=""/><label class=" form-check-label"
                                                            for="Owner’s Mailing Address is same as Street Address">Company
                                                            Mailing Address is same as Street Address:</label></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 mt-3">
                                                        <div class=""><label
                                                                class="form-label d-flex justify-content-between">Billing<small
                                                                    class="text-danger ms-1">*required</small></label>
                                                            <div class="row">
                                                                <div class="col-md-4 undefined">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="billing_period" id="yearly"
                                                                            for="yearly" class="form-check-input"
                                                                            value="yearly"/><label
                                                                            class="form-check-label"
                                                                            for="yearly">Yearly</label></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 mt-3">
                                                        <div class=""><label
                                                                class="form-label d-flex justify-content-between">Company
                                                                is a<small
                                                                    class="text-danger ms-1">*required</small></label>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Corporation"/><label>Corporation</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Limited Partnership"/><label>Limited
                                                                            Partnership</label></div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Limited Liability Company"/><label>Limited
                                                                            Liability Company</label></div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="General Partnership"/><label>General
                                                                            Partnership</label></div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Sole Proprietorship"/><label>Sole
                                                                            Proprietorship</label></div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Individual"/><label>Individual</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Government Entity"/><label>Government
                                                                            Entity</label></div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-check"><input type="radio"
                                                                            name="applincant_type" id="applincant_type"
                                                                            for="applincant_type"
                                                                            class="form-check-input"
                                                                            value="Other"/><label>Other</label></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="mt-3"><label
                                                                class="form-label d-flex justify-content-between">State
                                                                of formation<small
                                                                    class="text-danger ms-1">*required</small></label><select
                                                                class="form-select  mb-3" name="state_of_formation"
                                                                id="state_of_formation">
                                                                <option value="North Carolina">North Carolina</option>
                                                                <option value="Alaska">Alaska</option>
                                                                <option value="Alabama">Alabama</option>
                                                                <option value="Arkansas">Arkansas</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Arizona">Arizona</option>
                                                                <option value="California">California</option>
                                                                <option value="Colorado">Colorado</option>
                                                                <option value="Connecticut">Connecticut</option>
                                                                <option value="District of Columbia">District of
                                                                    Columbia</option>
                                                                <option value="Delaware">Delaware</option>
                                                                <option value="Florida">Florida</option>
                                                                <option value="Georgia">Georgia</option>
                                                                <option value="Guam">Guam</option>
                                                                <option value="Hawaii">Hawaii</option>
                                                                <option value="Iowa">Iowa</option>
                                                                <option value="Idaho">Idaho</option>
                                                                <option value="Illinois">Illinois</option>
                                                                <option value="Indiana">Indiana</option>
                                                                <option value="Kansas">Kansas</option>
                                                                <option value="Kentucky">Kentucky</option>
                                                                <option value="Louisiana">Louisiana</option>
                                                                <option value="Massachusetts">Massachusetts</option>
                                                                <option value="Maryland">Maryland</option>
                                                                <option value="Maine">Maine</option>
                                                                <option value="Michigan">Michigan</option>
                                                                <option value="Minnesota">Minnesota</option>
                                                                <option value="Missouri">Missouri</option>
                                                                <option value="Mississippi">Mississippi</option>
                                                                <option value="Montana">Montana</option>
                                                                <option value=" North Dakota"> North Dakota</option>
                                                                <option value="Nebraska">Nebraska</option>
                                                                <option value="New Hampshire">New Hampshire</option>
                                                                <option value="New Jersey">New Jersey</option>
                                                                <option value="New Mexico">New Mexico</option>
                                                                <option value="Nevada">Nevada</option>
                                                                <option value="New York">New York</option>
                                                                <option value="Ohio">Ohio</option>
                                                                <option value="Oklahoma">Oklahoma</option>
                                                                <option value="Oregon">Oregon</option>
                                                                <option value="Pennsylvania">Pennsylvania</option>
                                                                <option value="Puerto Rico">Puerto Rico</option>
                                                                <option value="Rhode Island">Rhode Island</option>
                                                                <option value="South Carolina">South Carolina</option>
                                                                <option value="South Dakota">South Dakota</option>
                                                                <option value="Tennessee">Tennessee</option>
                                                                <option value="Texas">Texas</option>
                                                                <option value="Utah">Utah</option>
                                                                <option value="Virginia">Virginia</option>
                                                                <option value="Virgin Islands">Virgin Islands</option>
                                                                <option value="Vermont">Vermont</option>
                                                                <option value="Washington">Washington</option>
                                                                <option value="Wisconsin">Wisconsin</option>
                                                                <option value="West Virginia">West Virginia</option>
                                                                <option value="Wyoming">Wyoming</option>
                                                            </select></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="form-check"><input type="checkbox"
                                                            name="billing_address_req"
                                                            id="Owner’s Billing Address is same as Street Address"
                                                            class="form-check-input"
                                                            value="Owner’s Billing Address is same as Street Address"
                                                            checked=""/><label class=" form-check-label"
                                                            for="Owner’s Billing Address is same as Street Address">Company
                                                            Billing Address is same as Street Address:</label></div>
                                                            <hr className="m-2"/>
                                                            <div class="d-flex justify-content-between mt-0">
                      <h3>Please select one option</h3>                    
                    </div>
                <div class="form-check">
                        <input
                          type="checkbox"
                          name="billing_address_req"
                          id="Owner’s Billing Address is same as Street Address"
                          class="form-check-input"
                          value="Owner’s Billing Address is same as Street Address"
                          // onChange={() => {
                          //   setAddBillingContact(!addBillingContact);
                          // }}
                          // checked={addBillingContact}
                        />
                        <label
                          class=" form-check-label"
                          for="Owner’s Billing Address is same as Street Address"
                        >
                        HDR Engineers is the Applicant Representative of the utility owner(Another Company).
                        </label>
                        
                      </div>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          name="billing_address_req"
                          id="Owner’s Billing Address is same as Street Address"
                          class="form-check-input"
                          value="Owner’s Billing Address is same as Street Address"
                          // onChange={() => {
                          //   setAddBillingContact(!addBillingContact);
                          // }}
                          // checked={addBillingContact}
                        />
                        <label
                          class=" form-check-label"
                          for="Owner’s Billing Address is same as Street Address"
                        >
                        HDR Engineers is the utility owner.
                        </label>
                        
                      </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="btn-col text-center d-flex justify-content-end">
                                            <a href="signupContacts" class="btn btn-primary btn-lg">Next Step</a>
                                           
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        {/* <!-- <div class="card">
                            <div class="card-body p-0">
                                <h2 class="mb-0">
                                    <button class="border-0 collapsed py-4 px-5 d-flex justify-content-between w-100" disabled><span>Company Details</span></button>
                                </h2>
                            </div>
                        </div> --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
  
  export default Signup;
  