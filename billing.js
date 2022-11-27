import React from "react";
import { Link } from "react-router-dom";
const Billing=()=>{
    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-8">
                </div>
                <div className="col-lg-4">
                    <div className="input-group">
                        <Link  to="/billing" className="btn btn-primary">
                           <i className="fa fa-user-md"></i>  Consultation Billing</Link>
                        <Link  to="/pbilling" className="btn btn-success">
                          <i className="fa fa-medkit"></i>  Pharma Billing</Link>

                    </div>

                </div>

            </div>
            <div className="row mt-5">
                <div className="col-lg-12 mt-2">
                    <h4 className="text-primary text-center">Today's Doctor Consultation Billing </h4>
                </div>
            </div>
            <div className="row">
             
                <div className="col-lg-12">
                  <table className="table table-bordered mt-2 shadow rounded ">
                    <thead className="bg-light text-primary">
                        <tr>
                            <th>PID</th>
                            <th>Patient Name</th>
                            <th>Mobile</th>
                            <th>Doctor Name</th>
                            <th></th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                   
                  </table>
                </div>
            </div>
            
        </div>
    )
}
export default Billing;