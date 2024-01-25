// Testimonials.js
import React from "react";
import "./Testimonals.css";
import { FaUserGroup } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaSmile } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = ({ text, author, image, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <figure className="testimonial">
      <img src={image} alt={author} className="testimonial-image" />
      <figcaption className="testimonial-text">{text}</figcaption>
      <figcaption className="testimonial-author">
        {author} {renderStars()}
      </figcaption>
    </figure>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "Your assesment method is very good & patient support resolves issues properly",
      author: "Reshmi",
      image:
        "https://img.freepik.com/premium-photo/old-woman-was-happy_181020-596.jpg?w=1060",
      rating: 5,
    },
    {
      text: "Quality, pocket friendly &amp; consistent care is what Fix Health stands for",
      author: "Nishith Patel",
      image:
        "https://img.freepik.com/free-photo/senior-man-smiling_1187-3331.jpg?w=826&t=st=1706030168~exp=1706030768~hmac=f68af981da2c4ebfd8f7ea1f8608d096645d6e3575214060f26afd4d72d7e0c1",
      rating: 5,
    },
    {
      text: "They worked around time zone variations to accommodate my schedule",
      author: "Pranjal Deep",
      image:
        "https://img.freepik.com/free-photo/young-man-posing-casually-white-wall_1157-48196.jpg?w=996&t=st=1706118541~exp=1706119141~hmac=baf2f5d71edf8ff07f161f57acf67ee978738681970b343fdefcbbe2d9e8dab8",
      rating: 5,
    },
    {
      text: "6 month with Fix Health was less than 1 month of my insurance co-pay.",
      author: "Dr. Nashil Kamal",
      image:
        "https://img.freepik.com/free-photo/daily-life-indigenous-people_52683-96800.jpg?w=996&t=st=1706030203~exp=1706030803~hmac=dc36fe4711fd47d79e3e31cd485d8f9d54d589aada916fbad0b5eee4e59f2575",
      rating: 5,
    },
    {
      text: "Loved the personal touch of the Physio's, Doctors and care manager.",
      author: "Rajesheshri Chainani",
      image:
        "https://img.freepik.com/free-photo/woman-doing-close-up-photoshoot-studio_53876-14476.jpg?w=900&t=st=1706118701~exp=1706119301~hmac=33bf19719343d38c8f17973a366c0fc97924103f1b006499e08c9f7154985683",
      rating: 5,
    },
    {
      text: "I realized treatment could be done remotely, eliminating need for in-person visits.",
      author: "Neil Pinherio",
      image:
        "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?w=996&t=st=1706118750~exp=1706119350~hmac=3d1bd9455b88a5d1402995e5873b6099fc495383deb22fea0e2ca589cfa845c8",
      rating: 5,
    },
    {
      text: "Best self referral physiotherapy near me - skipped NHS queue. Got appointment same day.",
      author: "Aniket Dhawad",
      image:
        "https://img.freepik.com/free-photo/cheerful-hindu-guy-posing-laughing-crossed-his-arms-studio-black-background_613910-20913.jpg?w=996&t=st=1706118783~exp=1706119383~hmac=5e7eeb1c163b6b9f9506f6ca6adc9d0132ec61c475f60c8176af27a1586386b4",
      rating: 5,
    },
  ];

  return (
    <>
      {" "}
      <main id="testimnials">
        <div id="test-head">
          <h1>
            Patient Recovery Stories <span id="dot"></span>
            <p>Don't just take our word for it</p>
          </h1>
          <div id="test-mid">
            <div id="part1">
              <FaUserGroup id="icon" />
              <h3>2000+</h3>
              <h4>Patients</h4>
            </div>

            <div id="part2">
              <SlCalender id="icon" />

              <h3>1Lakh+</h3>
              <h4>Sessions</h4>
            </div>

            <div id="part3">
              <FaSmile id="icon" />
              <h3>9.6/10</h3>
              <h4>Avg. Rating</h4>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
};

export default Testimonials;
