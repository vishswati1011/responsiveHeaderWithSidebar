import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './demofile.css'

export default demofile => {

    return (
     <>
            <div className="container mb-3">
                <div className="row">
                <div className="col"><button className="currentlabel">Current Job Site (12 months)</button></div>
                <div className="col"><button className="previouslabel">Previous Job Site (Previous 12 months)</button></div>
                <div className="col"></div>
                <div className="col"><button className="addsitelabel">Add Job Site</button></div>

                </div>
            </div>
           <div className="container-fluid outerdiv ">
               <div className="row">
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input className="inputform" type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>

               </div>

               <div className="row">
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>

               </div>
               <div className="row">
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>

               </div>
               <div className="row">
                   <div className="col"><div><label className="inputlabel">Job site</label></div><div><input  className="inputform"  type="text"/></div></div>
                   <div className="col"><div><label className="inputlabel"></label></div><div><button  className="selectlocationbutton"  type="submit">Select Location</button></div></div>
                   <div className="col"></div>
               </div>
               <div className="row">
                   <div className="col"><label className="jobtaxable">Is this job taxable?</label><input  className="mr-2"  type="checkbox"/><label className="jobtaxable mr-2">Yes</label><input  className=""  type="checkbox"/><label className="jobtaxable">No</label></div>
                   <div className="col"></div>
                   <div className="col"></div>

               </div>

               
               <div className="row">
                   <div className="col"><div><button  className="submitbutton"  type="submit">Submit</button></div></div>

               </div>
           </div>

        </>
    )
}