import React from "react";
import "./Ourmethadology.css";

function Ourmethadology() {
  return (
    <>
      <main id="Methadology">
        <div id="Services">
          <div id="meta-con">
            <div id="meta-heading">
              <h1>
                Our Methadology <span id="dot"></span>
              </h1>
            </div>
            <div className="card-container">
              <div className="card">
                <img
                  src="https://img.freepik.com/free-photo/female-doctor-consults-her-patient-holds-documents-her-hands_496169-2913.jpg?w=996&t=st=1705994623~exp=1705995223~hmac=82e78787d36467e2b9a3b091c662c0511033e3ec10f2c72e2928d98dde2b688c"
                  alt="Card 1"
                />
                <h2>Cousultation</h2>
                <p>
                  1-1 Consultation with physiotherapist having 14+ Years avg.
                  experience{" "}
                </p>
              </div>
              <div className="card">
                <img
                  src="https://img.freepik.com/free-photo/front-view-doctor-checking-patient-doing-exercises_23-2148328477.jpg?w=996&t=st=1705994727~exp=1705995327~hmac=0c6d323ef7496ae9b9bd9bb15a4484ce2347da993cd2278fbd4f190c9f7af900"
                  alt="Card 2"
                />
                <h2>Examination</h2>
                <p>Artificial Intelligence to find root cause of problems</p>
              </div>
              <div className="card">
                <img
                  src="https://img.freepik.com/free-photo/woman-having-physiotherapy-session_23-2149115643.jpg?w=996&t=st=1705994754~exp=1705995354~hmac=449f5b0126d9b3d11df372cc9f0c84ca45900535d9a8969db5f2d78a8853c734"
                  alt="Card 3"
                />
                <h2>Tratment Session</h2>
                <p>
                  45 min live 1-1 session with physiotherapist between 5am - 9pm
                </p>
              </div>
              <div className="card">
                <img
                  src="https://img.freepik.com/free-photo/middle-aged-man-jogging-park_1303-23609.jpg?w=996&t=st=1705995000~exp=1705995600~hmac=a191fdae9b45be593f45f3c54a6e179da5649ebf69c25f1f8c8b9a66fdc78ab8"
                  alt="Card 4"
                />
                <h2>Result</h2>
                <p>Progress measured & exercise updated every session</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Ourmethadology;
