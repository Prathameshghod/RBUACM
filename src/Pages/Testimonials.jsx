import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/testimonials.module.css";

import MandarImage from '../assets/Images/Testimonials/Mandar.png';
import MohdImage from '../assets/Images/Testimonials/Mohd.png';

// Testimonials Data
const testimonials = [
  {
    name: "Vaibhav Bhaiyya",
    image: "", 
    text: "ACM provided me with invaluable opportunities to enhance my coding skills and network with industry experts. I'm grateful for the experiences and connections I gained!",
  },
  {
    name: "Mandar Bhaiyya",
    image: MandarImage, 
    text: "The workshops and hackathons organized by ACM pushed me to think outside the box and develop innovative solutions. It was a truly enriching experience.",
  },
  {
    name: "Mohammed Tailor",
    image: MohdImage,
    text: "ACM has a welcoming and supportive community. I've made lifelong friends and gained valuable insights from the events and mentorship programs.",
  },
  {
    name: "Vaibhav Bhaiyya",
    image: "", 
    text: "ACM provided me with invaluable opportunities to enhance my coding skills and network with industry experts. I'm grateful for the experiences and connections I gained!",
  },
  {
    name: "Mandar Bhaiyya",
    image: MandarImage, 
    text: "The workshops and hackathons organized by ACM pushed me to think outside the box and develop innovative solutions. It was a truly enriching experience.",
  },
  {
    name: "Mohammed Tailor",
    image: MohdImage,
    text: "ACM has a welcoming and supportive community. I've made lifelong friends and gained valuable insights from the events and mentorship programs.",
  },
  // Add other testimonials
];

function Testimonials() {
  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.backgroundCircle1}></div>
      <div className={styles.backgroundCircle2}></div>

      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Testimonials</h1>

        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          style={{ width: "100%" }}
          breakpoints={{
            1400: {
              slidesPerView: 4, // Large desktops
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Medium desktops and large tablets
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Tablets and small laptops
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 1.5, // Small screens (landscape mode)
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1, // Small screens (portrait mode)
              spaceBetween: 5,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.testimonialCard}>
              <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                  <img
                    src={testimonial.image || "path/to/fallback-image.jpg"} // Use fallback if image is not provided
                    alt={testimonial.name}
                    className={styles.image}
                  />
                </div>
                <h2 className={styles.cardTitle}>{testimonial.name}</h2>
                <p className={styles.cardText}>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;