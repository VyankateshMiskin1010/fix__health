import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Doctors.css";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
function Doctors() {
  return (
    <main id="doctors">
      <div id="doc-con">
        <div id="doc-head">
          <h1>
            Meet Our Experts <span id="dot"></span>
          </h1>
          <p>Experience the Benefits of Advanced Technology and Expert Care</p>
        </div>
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 50,
            },

            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="Scard">
              <img
                src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=996&t=st=1706014481~exp=1706015081~hmac=9ed387639d0b8ec3c82a0a1ede9ac6ad79dcaad9955b86052157de73653d6c65"
                alt="Card 4"
              />
              <h2>Dr. Mahesh Gupta</h2>
              <p>M.Sc (Advanced Sports Therapy &...</p>
              <p>13 years of experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Scard">
              <img
                src="https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?w=996&t=st=1706014564~exp=1706015164~hmac=c499e65a8a208bd49c7da9f02f52c9486dd025fc732da24408be78bd81090a43"
                alt="Card 4"
              />
              <h2>Dr. Pankaj Sharma</h2>
              <p>M.Sc (Neuro Rehabitilation)</p>
              <p>14 years of experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Scard">
              <img
                src="https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-holding-clipboard-white-background_114579-49847.jpg?w=996&t=st=1706017533~exp=1706018133~hmac=ed89b26810258372feef81095429c471e9e7f91c9d8edbb8ccaf2785e7c79291"
                alt="Card 4"
              />
              <h2>Dr. Payal Reddy</h2>
              <p>MPTh (Musculoskeletal)</p>
              <p>8 years of experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Scard">
              <img
                src="https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg?w=740&t=st=1706014633~exp=1706015233~hmac=1baa6c38e83f9f368325a540769e1c9d4080826c4ee601c1b77da116d297694e"
                alt="Card 4"
              />
              <h2>Dr. Saurabh Jadhav</h2>
              <p>MPTh (Musculoskeletal Sciences)</p>
              <p>9 years of experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Scard">
              <img
                src="https://img.freepik.com/free-photo/front-view-smiley-doctor-clinic_23-2149726935.jpg?w=996&t=st=1706014697~exp=1706015297~hmac=ec00717a05fea725c545d7f5c1724fd7b5fa090cdac642c53eac48314ccd30fb"
                alt="Card 4"
              />
              <h2>Dr. Joshi</h2>
              <p>MPTh (Neuro-physiotherapy &...</p>
              <p>10 years of experience</p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="Scard">
              <img
                src="https://img.freepik.com/free-photo/handsome-young-doctor-with-lab-coat-stethoscope-using-tablet-computer-check-patient-s-history_662251-2962.jpg?w=996&t=st=1706014516~exp=1706015116~hmac=2f652ac7fe9a81686b57fcd9e6f26938346e1463ebc0797ac78d98825427f1b4"
                alt="Card 4"
              />
              <h2>Dr. Rohit Verma</h2>
              <p>M.Sc (Neuro Rehabitilation)</p>
              <p>10 years of experiences</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Doctors;
