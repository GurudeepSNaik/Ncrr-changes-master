import React from "react";


const SignupContacts = () => {
    return (
        <>
           <div style={{minHeight:"100vh"}}>
            <div class="container" style={{marginTop:"84px"}}>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="">
                            <div></div>
                            <form action="contact-detail-autofill.html" method="post">
                                <div class="inner-form card mb-4">
                                    <div class=" border-bottom card-header">
                                        <h2>Duke Energy's Contacts</h2>
                                        <p class="text-dark mb-0"><i class="far fa-hand-point-right"></i> Please enter details of other people who work for your company and will be involved with Application appropvals.</p>
                                    </div>
                                    <div class="card-body" id="owner-details">
                                        <div class="d-flex justify-content-between">
                                            <h3>Contact Details</h3>
                                            <p class="m-0 text-muted">Required</p>
                                        </div>
                                        <div class="card mb-4 position-relative">
                                            <div class="d-flex justify-content-end position-absolute bottom-0 end-0 delete-edit">
                                                <a href="#" class="mx-2"><i class="far fa-edit"></i> Delete</a>
                                                <a href="#"><i class="far fa-trash-alt"></i> Edit</a>
                                            </div>
                                            <a data-bs-toggle="modal" data-bs-target="#applicant-detail" class="overlay-link"></a>
                                            <div class="card-body">   
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">Applicant’s Legal Name*:</label>
                                                        <p>Chapman Corp.</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">Applicant’s Street Address:</label>
                                                        <p>Ap #867-859 Sit Rd.</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">City</label>
                                                        <p>New York</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">State</label>
                                                        <p>New York</p>
                                                    </div>
                                                </div>  
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">Name</label>
                                                        <p class="text">Cecilia Chapman</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">Title</label>
                                                        <p class="text">Mankato</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">Email</label>
                                                        <p class="text">cecilia@gmail.com</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="text-muted d-block form-label">Tel Number</label>
                                                        <p class="text">(257) 563-7401</p>
                                                    </div>
                                                </div>                         
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="btn-col text-center d-flex justify-content-between">
                                            <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-primary btn-lg">Add New Contact</button>
                                            <a href="http://dev.prlxweb.com/nuop/dashboard-internal-list.html" class="btn btn-primary btn-lg">Go to Dashboard</a>
                                           
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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
                <div class="d-flex justify-content-between">
                    <h3 class="m-0">New Contact</h3>
                                     
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card border-0 inner-form">
                    <form action="dashboard.html" method="post">                        
                        <div class="">
                           
                            <div class="row">
                                <div class="col">
                                    <div class="mt-3 position-relative"><label class="form-label d-flex justify-content-between">Name<small class="text-danger ms-1">*required</small></label><input class="form-control" name="representative_name" id="representative_name" value=""/><span class="text-danger">
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">Title<small class="text-danger ms-1">*required</small></label><input class="form-control" type="text" name="representative_title" id="representative_title" value="" /><span class="text-danger">
                                        </span></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">Email<small class="text-danger ms-1">*required</small></label><input class="form-control" type="text" name="representative_email" id="representative_email" value="" /><span class="text-danger">
                                        </span></div>
                                </div>
                                <div class="col">
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">Phone<small class="text-danger ms-1">*required</small></label><input class="form-control" type="text" id="representative_number" name="representative_number" value="" /><span class="text-danger">
                                        </span></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">Street
                                            Address<small class="text-danger ms-1">*required</small></label><input class="form-control" type="text" name="representative_street" id="representative_street" value="" /><span class="text-danger">
                                        </span></div>
                                </div>
                                <div class="col">
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">City<small class="text-danger ms-1">*required</small></label><input class="form-control" type="text" name="representative_city" id="representative_city" value="" /><span class="text-danger">
                                        </span></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">State<small class="text-danger ms-1">*required</small></label><select class="form-select  mb-3" name="representative_state" id="representative_state" >
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
                                    <div class="mt-3"><label class="form-label d-flex justify-content-between">Zip<small class="text-danger ms-1">*required</small></label><input class="form-control" type="text" id="representative_zip" name="representative_zip" value="" /><span class="text-danger">
                                        </span></div>
                                </div>
                            </div>
                            <h3 class="mt-4">Define role of this contact at Duke Energy</h3>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="check1"/>
                                <label class="form-check-label" for="check1">
                                   <strong>Primary Representative</strong> and is authorised to view and sign all applications, agreements or any other legal documents.
                                </label>
                              </div>
                              <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="check2"/>
                                <label class="form-check-label" for="check2">
                                    <strong>Engineering Representative</strong> and will assist with engineering review process and related questions.
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="check3"/>
                                <label class="form-check-label" for="check3">
                                   <strong>Billing Representative</strong> and can be contacted for all matters related to fees and payment methods.
                                </label>
                              </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Save</button>    
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
export default SignupContacts;