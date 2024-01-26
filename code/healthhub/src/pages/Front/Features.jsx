import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl mt-4">Our Distinct Features</h1>
      </div>
      <div className="p-8">
        <div data-aos="fade-right">
          <h1 className="text-2xl">HealthCare Chatbot</h1>
          <p className="text-xl mt-5">
            Engage in a revolutionary healthcare experience with our
            multilingual chatbot. HealthHub's chatbot is not just a
            conversational tool; it's a dynamic platform that accepts audio
            input, processes images, and seamlessly communicates in multiple
            languages. Enhance your user experience by interacting with a
            chatbot that truly understands your unique needs.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-left">
          <h1 className="text-2xl">Comprehensive Health Review</h1>
          <p className="text-xl mt-5">
            Take control of your health with our structured health review
            questionnaire. By providing valuable data through a thorough
            assessment, you unlock personalized health recommendations tailored
            just for you. Your journey to better health starts with a
            comprehensive understanding of your well-being.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-right">
          <h1 className="text-2xl">Locator For Medical Facilities</h1>
          <p className="text-xl mt-5">
            Finding healthcare facilities has never been easier. Our platform
            assists you in locating nearby hospitals and pathology centers.
            Doctors can indicate their availability in specific regions,
            fostering efficient communication and ensuring you receive the care
            you need when and where you need it.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-left">
          <h1 className="text-2xl">BMI Calculation</h1>
          <p className="text-xl mt-5">
            Empower yourself with our Body Mass Index (BMI) calculator. Assess
            your body weight relative to height, gaining insights into your
            health and contributing to better health management. Take charge of
            your fitness journey with this valuable tool.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-right">
          <h1 className="text-2xl">Social Therapy Open Discussion Forum</h1>
          <p className="text-xl mt-5">
            Join a supportive community where well-being takes center stage. Our
            open discussion forum provides a platform for users to access
            resources and materials, fostering a sense of community and shared
            knowledge to aid your mental and emotional health.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-left">
          <h1 className="text-2xl">Patient Monitoring and Reminders</h1>
          <p className="text-xl mt-5">
            Stay on top of your health goals with our patient monitoring and
            reminders feature. Track your nutrition and calorie intake while
            receiving timely reminders for medications and health checkups.
            Health management becomes proactive and personalized with HealthHub.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-right">
          <h1 className="text-2xl">Medicine and Therapy Prediction Service</h1>
          <p className="text-xl mt-5">
            Experience the future of healthcare with our predictive model for
            medicines and therapies. Human confirmation through chat or video
            calls ensures accuracy, and seamless links allow you to order
            medicines from our trusted partner platforms effortlessly.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-right">
          <h1 className="text-2xl">E-Commerce Platform</h1>
          <p className="text-xl mt-5">
            Order healthcare products with just one tap through our
            user-friendly e-commerce platform. From medications to wellness
            products, we've got you covered, ensuring convenience in every
            aspect of your healthcare journey.
          </p>
        </div>
        <div className="mt-2" data-aos="fade-left">
          <h1 className="text-2xl">Health Insurance and Expense Management</h1>
          <p className="text-xl mt-5">
            Explore health insurance options and manage healthcare expenses
            within the HealthHub platform. We believe in providing holistic
            healthcare solutions, and our commitment to your well-being extends
            to financial aspects, making healthcare accessible and manageable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
