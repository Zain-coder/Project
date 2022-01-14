import React, { Component } from 'react';
function LeadGen() {
    return (
        <form style={{ justifyContent: "center", alignContent: "center", alignItems: "center", textAlign: "center" }}>
            <img src="white.png" alt="" style={{ width: "160px", marginRight: "20px", marginTop: "-20px" }} />
            <div className="mb-3">
                <h1>ENTER YOUR BUSINESS INFO</h1>
                <label for="exampleInputEmail1" className="form-label">Your Business Name</label>
                <div style={{ width: "500px", marginLeft: "550px" }}>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Your Domain Name</label>
                <div style={{ width: "500px", marginLeft: "550px" }}>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default LeadGen;