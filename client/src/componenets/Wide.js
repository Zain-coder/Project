import React from "react";
import Form from "./Form";
function Wide() {
  return (
    <div className="container-fluid">
      <div className="row mt-0 bg-light text-white">
        <img src="logo1.jpeg" className="card-img-top" alt="..." /> x
        <div className="col-md-6">
          <div class="card text-white bg-primary mb-3 "></div>
        </div>
        {/* <div className='col-md-5 text-black '>
                    <div style={{ marginTop: '30px' }}>
                        <Form />
                    </div>
                </div> */}
      </div>
    </div>
  );
}
export default Wide;
