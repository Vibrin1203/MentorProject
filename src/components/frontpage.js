import React from "react"
import './frontpage.css'
class Frontpage extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      email: "",
      businessname: "",
      businesscard: "",
      businessaddress1: "",
      businessaddress2: "",
      zipcode1: "",
      businessphonenumber: "",
      firstname: "",
      middlename: "",
      lastname: "",
      cardname: "",
      checkbox: "",
      homeaddress1: "",
      homeaddress2: "",
      zipcode2: "",
      Bill: "",

      //error
      emailErr: "",
      emailFlag: false,
      nameErr: "",
      nameFlag: false,
      cardErr: "",
      cardFlag: false,
      baErr: "",
      baFlag: false,
      zip1Err: "",
      zip1Flag: false,
      bnumErr: "",
      bnumFlag: false,
      fnameErr: "",
      fnameFlag: false,
      lnameErr: "",
      lnameFlag: false,
      cardnameErr: "",
      cardnameFlag: false,
      haErr:"",
      haFlag:false,
      zip2Err:"",
      zip2Flag:false,

    }
  }
  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value });
  }
  checkHandler = () => {
    this.setState({ homeaddress1: this.state.businessaddress1, homeaddress2: this.state.businessaddress2, zipcode2: this.state.zipcode1 })
  }
  radioHandler = (e) => {
    this.setState({ Bill: e.target.value })
  }
  formsubmit = () => {
    console.log(this.state);
  }
  validate = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    //email validation
    if (n === "email") {
      let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
      if (v === "") {
        this.setState({ emailErr: "Please enter the Email." })
      }
      else if (!re.test(v)) {
        this.setState({ emailErr: "please enter Email in a specific formate" })
      }
      else
        this.setState({ emailErr: "", emailFlag: true })
    }
    // business name validation
    else if (n === "businessname") {
      if (v === "") {
        this.setState({ nameErr: "Please enter the User Name." })
      }
      else if (v.length <= 4) {
        this.setState({ nameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ nameErr: "", nameFlag: true })
    }

    //business card validation
    else if (n === "businesscard") {
      if (v === "") {
        this.setState({ cardErr: "Please enter the Card Name." })
      }
      else if (v.length <= 4) {
        this.setState({ cardErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ cardErr: "", cardFlag: true })
    }

    //addressname validation
    else if (n === 'businessaddress1') {
      if (v === "") {
        this.setState({ baErr: "Please enter the Address." })
      }
      else if (v.length <= 4) {
        this.setState({ baErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ baErr: "", baFlag: true })
    }

    //zipcode validation
    else if (n === 'zipcode1') {
      let re = "\d{3}(-\d{3})?"
      if (v === "") {
        this.setState({ zip1Err: "Please enter the ZipCode." })
      }
      else if (!re.test(v)) {
        this.setState({ zip1Err: "Please Enter the Only Numbers" })
      }
      else if (!re.test(v)) {
        this.setState({ zip1Err: "Please Enter the Correct Format" })
      }
      else
        this.setState({ zip1Err: "", zip1Flag: true })
    }

    //phone number validation
    else if (n === 'businessphonenumber') {
      let re = "^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
      if (v === "") {
        this.setState({ bnumErr: "Please enter Business Phone Number." })
      }
      else if (!re.test(v)) {
        this.setState({ bnumErr: "Please Enter the Only Numbers" })
      }
      else if (!re.test(v)) {
        this.setState({ bnumErr: "Please Enter the Correct Format" })
      }
      else
        this.setState({ bnumErr: "", bnumFlag: true })
    }

    //firstname validation
    else if (n === "firstname") {
      if (v === "") {
        this.setState({ fnameErr: "Please enter your First Name." })
      }
      else if (v.length <= 4) {
        this.setState({ fnameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ fnameErr: "", fnameFlag: true })
    }

    //lastname validation
    else if (n === "lastname") {
      if (v === "") {
        this.setState({ lnameErr: "Please enter your Last Name." })
      }
      else if (v.length <= 4) {
        this.setState({ lnameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ lnameErr: "", lnameFlag: true })
    }

    //cardname validation
    else if (n === "cardname") {
      if (v === "") {
        this.setState({ cardnameErr: "Please enter the Card Name." })
      }
      else if (v.length <= 4) {
        this.setState({ cardnameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ cardnameErr: "", cardnameFlag: true })
    }

    //home address validation
    else if (n === 'homeaddress1') {
      if (v === "") {
        this.setState({ haErr: "Please enter the Address." })
      }
      else if (v.length <= 4) {
        this.setState({ haErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
      }
      else
        this.setState({ haErr: "", haFlag: true })
    }

    //zipcode validation
    else if (n === 'zipcode2') {
      let re = "\d{3}(-\d{3})?"
      if (v === "") {
        this.setState({ zip2Err: "Please enter the ZipCode." })
      }
      else if (!re.test(v)) {
        this.setState({ zip2Err: "Please Enter the Only Numbers" })
      }
      else if (!re.test(v)) {
        this.setState({ zip2Err: "Please Enter the Correct Format" })
      }
      else
        this.setState({ zip2Err: "", zip2Flag: true })
    }


  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-4 first_col px-5">
              <p className="h5 lp_ip title">
                Lorem Ipsum
                <i className="fa fa-chevron-up"></i>
              </p>
              <hr />
              <p className="side-heading">SPECIAL OFFER FOR YOU</p>
              <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s. When an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting.
                Remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and morerecently with desktop publishing software like Aldus
                Pagemaker including versions of Lorem ipsum.
              </p>
              <hr />
              <p>$295 Annual fee</p>
            </div>

            {/* Form */}
            <div className="col-lg-8 form">
              <p className="h2 mb-3 firstheading">Apply in minutes. Get a decision in Seconds.</p>
              <form >
                <div className="form-group mb-3">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input
                    type="email" required
                    className="form-control mb-2"
                    placeholder=""
                    name="email"
                    value={this.state.email}
                    id="email"
                    onChange={(e) => this.changeHandler(e)}
                    onBlur={(e) => this.validate(e)}

                  />
                  <p className="ms-1 text-danger">{this.state.emailErr}</p>
                </div>

                <p className="h3 pb-2 firstheading">
                  ENTER YOUR BUSINESS INFORMATION
                </p>

                <div className="row mb-4">
                  <div className="col-lg-6">

                    <div className="form-group">
                      <label className="form-label">LEGAL BUSINESS NAME</label>
                      <input type="text" className="form-control" name="businessname" value={this.state.businessname} onChange={(e) => this.changeHandler(e)}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.nameErr}</p>
                    </div>

                  </div>

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label className="form-label"
                      >BUSINESS NAME ON CARD</label
                      >
                      <input type="text" className="form-control" name="businesscard" value={this.state.businesscard} onChange={(e) => this.changeHandler(e)}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.cardErr}</p>

                    </div>

                  </div>
                </div>

                <div className="form-group mb-4 ">

                  <label >BUSINESS ADDRESS LINE 1</label>
                  <input type="text" className="form-control" name="businessaddress1" value={this.state.businessaddress1}
                    onChange={(e) => this.changeHandler(e)}
                    onBlur={(e) => this.validate(e)} />
                  <p className="ms-1 text-danger namerr">{this.state.baErr}</p>

                </div>
                <div className="row mb-4 ">
                  <div className="col-lg-6">
                    <div className="form-group">

                      <label >BUSINESS ADDRESS LINE 2</label>
                      <input
                        type="text"
                        name="businessaddress2" value={this.state.businessaddress2} onChange={(e) => this.changeHandler(e)}
                        className="form-control"
                        required
                      />


                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">

                      <label >ZIP CODE</label>
                      <input
                        type="text"
                        name="zipcode1" value={this.state.zipcode1} onChange={(e) => this.changeHandler(e)}
                        onBlur={(e) => this.validate(e)}
                        className="form-control"
                        required
                      />
                      <p className="ms-1 text-danger namerr">{this.state.zip1Err}</p>


                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">

                  <label >BUSINESS PHONE NUMBER</label>
                  <input
                    type="num"
                    name="businessphonenumber" value={this.state.businessphonenumber} onChange={(e) => this.changeHandler(e)}
                    className="form-control"
                    onBlur={(e) => this.validate(e)}
                  />
                  <p className="ms-1 text-danger namerr">{this.state.bnumErr}</p>
                </div>
                <hr className="d-none d-md-block" />

                <p className="h4 mb-4 firstheading ">
                  ENTER YOUR PERSONAL INFORMATION
                </p>
                <div className="row mb-4 ">
                  <div className="col-lg-5">
                    <div className="form-group">

                      <label >FIRST NAME</label>
                      <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={(e) => this.changeHandler(e)}
                        onBlur={(e) => this.validate(e)}
                      />
                      <p className="ms-1 text-danger namerr">{this.state.fnameErr}</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-group">

                      <label >M.I.</label>
                      <input type="text" className="form-control" name="middlename" value={this.state.middlename} onChange={(e) => this.changeHandler(e)} />

                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="form-group">

                      <label >LAST NAME</label>
                      <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={(e) => this.changeHandler(e)}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.lnameErr}</p>
                    </div>
                  </div>
                </div>

                <div className="form-group">

                  <label >NAME ON CARD</label>
                  <input type="text" className="form-control" required name="cardname" value={this.state.cardname} onChange={(e) => this.changeHandler(e)} 
                  onBlur={(e) => this.validate(e)}/>
                  <p className="ms-1 text-danger namerr">{this.state.cardnameErr}</p>
                </div>

                <div className="businessaddress1 mb-4">
                  <input type="checkbox" required name="checkbox" value={this.state.checkbox} onChange={this.checkHandler} />
                  <label
                  >My home address is same as business address</label>

                </div>

                <div className="form-group mb-4 ">

                  <label >HOME ADDRESS LINE 1</label>
                  <input type="text" className="form-control" required name="homeaddress1" value={this.state.homeaddress1} onChange={(e) => this.changeHandler(e)}
                  onBlur={(e) => this.validate(e)} />
                  <p className="ms-1 text-danger namerr">{this.state. haErr}</p>
                </div>

                <div className="row mb-4 h_add_zip">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label >HOME ADDRESS LINE 2</label>
                      <input type="text" className="form-control" name="homeaddress2" value={this.state.homeaddress2} onChange={(e) => this.changeHandler(e)} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label >ZIP CODE.</label>
                      <input type="text" className="form-control" name="zipcode2" value={this.state.zipcode2} onChange={(e) => this.changeHandler(e)} 
                      onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state. zip2Err}</p>
                    </div>
                  </div>
                </div>

                <hr />


                <p className="h4 firstheading">TELL US WHERE TO SEND YOUR BILL</p>
                <div className="form-group mb-4 ">
                  <div >
                    <input
                      type="radio"
                      name=" Bill" value={"Business"} onClick={(e) => this.radioHandler(e)}

                    />
                    <label > Business </label>
                  </div>
                  <div >
                    <input type="radio" name=" Bill" value={"Home"} onClick={(e) => this.radioHandler(e)} />
                    <label > Home </label>
                  </div>
                </div>
                <p>Required Information</p>

                <p className="h4 text-center ">TERMS AND CONDITIONS</p>
                <hr />
                <p className="text-center ">
                  PLEASE SCROLL DOWN TO READ IMPORTANT INFORMATION ABOUT RATES, FEES
                  AND OTHER COST INFORMATION BEFORE SUBMITTING YOUR APPLICATION
                </p>
                <p className="ins p-2 mb-4">
                  By submitting this application, I certify that I have read, met and
                  Aggreed to all of the terms, conditions and disclosures as outlined
                  below, which contain fee and other important cost information. I
                  certify that I am an Authoring Officer of the Company and have
                  provided current information. I understand that additional in
                  formation may be required to complete my application.
                </p>
                <div >
                  <button className="btn btn-primary btn-block d-block mb-4 mx-auto px-4 buttons " onClick={this.formsubmit} type="button">
                    Submit Application
                  </button>

                  
                  {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                  </button>
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <button className="btn border border-primary btn-block d-block mx-auto button1">
                    Save and Apply Later
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Frontpage