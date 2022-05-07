import { useState, useEffect } from "react";
import firebase from "../../firebase/index";
import 'firebase/firestore';
import { storage } from '../../firebase/index';

import "./style.css";

const InividualProjectComponent = (props) => {
    const [status, setStatus] = useState(false);
    const [signedInUserData, setSignedInUserData] = useState(null)

    const [projectsEditData, setProjectsEditData] = useState({
        number: props.number,
        id: props.id,
        uid: props.uid,
        userEmail: props.userEmail,
        Title: props.Title,
        reloadProject: props.reloadProject,
        Description: props.Description,
        ImageURLArray: props.ImageURLArray,
        Architects: props.Architects,
        ProjectClient: props.ProjectClient,
        Area: props.Area,
        CompletionDate: props.CompletionDate,
        StructuralEngineers: props.StructuralEngineers,
        LandscapeArchitects: props.LandscapeArchitects,
        projectSiteLocation: props.projectSiteLocation,
        GoogleMapLink: props.GoogleMapLink,
        Key: props.Key,
        timeSubmitted: props.timeSubmitted,
        //New entities
        ProjectSector: props.ProjectSector,
        ProjectService: props.ProjectService,
        ArchitecturalTeam: props.ArchitecturalTeam,
        InteriorPersons: props.InteriorPersons,
        LandscapePersons: props.LandscapePersons,
        BuilderArchitects: props.BuilderArchitects,
        PhotographyPersons: props.PhotographyPersons
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setStatus(true);
                setSignedInUserData(user);
                // setStatus(true);
            }
            else {
                setStatus(false);
                setSignedInUserData(null);
            }
        })
    })

    const deleteProject = (projectId) => {
        const db = firebase.firestore();
        db.collection("Projects").doc(projectId).delete().then(() => {
            console.log("Project successfully deleted!");
            props.reloadProject(true);
            alert("Project Deleted Successfully.")
        }).catch((error) => {
            console.error("Error removing Project: ", error);
            alert("Error Deleting Project.")
        });
        // alert(projectId)
    }

    const editProject = (
        projectId,
        number,
        id,
        uid,
        userEmail,
        Title,
        reloadProject,
        Description,
        ImageURLArray,
        Architects,
        ProjectClient,
        Area,
        CompletionDate,
        StructuralEngineers,
        LandscapeArchitects,
        projectSiteLocation,
        GoogleMapLink,
        Key,
        timeSubmitted,
        //New entities
        ProjectSector,
        ProjectService,
        ArchitecturalTeam,
        InteriorPersons,
        LandscapePersons,
        BuilderArchitects,
        PhotographyPersons
    ) => {
        alert(`Will implement Soon ${projectId}`)
        console.log(`Project ID : ${projectId}`)
    }

    return (
        <div className="projectInividualComponent">
            <div>
                <h4><b>Project No. :</b> {props.number}</h4>
                <h4><b>Project ID :</b> {props.id}</h4>
                <h4><b>Project Title :</b> {props.Title}</h4>
                <h4><b>Project Client :</b> {props.ProjectClient}</h4>
                <h4><b>Project Scope :</b> {props.ProjectService}</h4>
                <h4><b>Site Location :</b> {props.projectSiteLocation}</h4>
                <h4><b>Project Size :</b> {props.Area}</h4>
                <h4><b>Project Size :</b> {props.Area}</h4>
                <h4><b>Project Description:</b> {props.Description} </h4>

                <br />

                {props.ImageURLArray.map((v, i) => {
                    return <li key={i} style={{ display: "inline-block", listStyle: "none" }}>
                        <div>
                            {/* Here the loop div is here */}
                            <img width={350} height={250} className="border ml-2 mb-2" src={v} alt={i} />
                            {/* Here the loop div is here */}
                        </div>
                    </li>
                })}
            </div>

            <br />

            <div className="d-flex justify-content-evenly">
                <button className="btn btn-delete btn-danger btn-lg" onClick={() => deleteProject(props.id)}>DELETE</button>
                <button type="button" className="btn btn-edit btn-warning btn-lg" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop" onClick={() => editProject(props.number)}>EDIT</button>
            </div>

            {/* Modal to Edit Projects */}
            <div className="modal fade" id="staticBackdrop" data-mdb-backdrop="static" data-mdb-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Editing the project: <b>{props.Title}</b></h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <h4><b>Project No. :</b> {props.number}</h4>
                                <h4><b>Project ID :</b> {props.id}</h4>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text" defaultValue={""} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InividualProjectComponent;