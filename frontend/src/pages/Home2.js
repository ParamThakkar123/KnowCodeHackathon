import React from "react";

const Home2 = () => {
  return (
    <div className="relative bg-sky-100 font-serif font-'Fredoka One'">
      <img
        src="./images/healthcare1.jpg"
        alt="healthcare"
        className="w-full h-screen"
      />
      <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-center h-screen">
        <div className="text-white">
          <p className="text-center text-white text-6xl font-semibold mb-5 mt-7">
            Welcome to Healthhub!
          </p>
          <span className="text-4xl font-semibold">
            A one stop solution to all your healthcare needs!
          </span>
          <br />
          <div className="mt-96">
            <p className="text-center text-white text-2xl font-semibold">
              Scroll down to explore
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto font-serif font-'Fredoka One' ">
        <div>
          <h1 className="text-center text-4xl mt-8">Our Distinct Features</h1>
        </div>
        <div className="p-8">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:mr-8">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                HealthCare Chatbot
              </div>
              <p className="text-xl text-center lg:text-left">
                Engage in a revolutionary healthcare experience with our
                multilingual chatbot. HealthHub's chatbot is not just a
                conversational tool; it's a dynamic platform that accepts audio
                input, processes images, and seamlessly communicates in multiple
                languages. Enhance your user experience by interacting with a
                chatbot that truly understands your unique needs.
              </p>
            </div>
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mt-8 lg:mt-0"
              src="./images/Chatbot.jpeg"
              alt="Loading"
            />
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mr-8 lg:ml-0 lg:mr-8"
              src="./images/Login.png"
              alt="Loading"
            />
            <div className="w-full lg:w-2/3">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                Comprehensive Health Review
              </div>
              <p className="text-xl text-center lg:text-left">
                Take control of your health with our structured health review
                questionnaire. By providing valuable data through a thorough
                assessment, you unlock personalized health recommendations
                tailored just for you. Your journey to better health starts with
                a comprehensive understanding of your well-being.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:mr-8">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                Locator For Medical Facilities
              </div>
              <p className="text-xl text-center lg:text-left">
                Finding healthcare facilities has never been easier. Our
                platform assists you in locating nearby hospitals and pathology
                centers. Doctors can indicate their availability in specific
                regions, fostering efficient communication and ensuring you
                receive the care you need when and where you need it.
              </p>
            </div>
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mt-8 lg:mt-0"
              src="./images/Hospital.jpeg"
              alt="Loading"
            />
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mr-8 lg:ml-0 lg:mr-8"
              src="./images/Login.png"
              alt="Loading"
            />
            <div className="w-full lg:w-2/3">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                BMI Calculation
              </div>
              <p className="text-xl text-center lg:text-left">
                Empower yourself with our Body Mass Index (BMI) calculator.
                Assess your body weight relative to height, gaining insights
                into your health and contributing to better health management.
                Take charge of your fitness journey with this valuable tool.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:mr-8">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                Social Therapy Open Discussion Forum
              </div>
              <p className="text-xl text-center lg:text-left">
                Join a supportive community where well-being takes center stage.
                Our open discussion forum provides a platform for users to
                access resources and materials, fostering a sense of community
                and shared knowledge to aid your mental and emotional health.
              </p>
            </div>
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mt-8 lg:mt-0"
              src="./images/Login.png"
              alt="Loading"
            />
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mr-8 lg:ml-0 lg:mr-8"
              src="./images/Login.png"
              alt="Loading"
            />
            <div className="w-full lg:w-2/3">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                Patient Monitoring and Reminders
              </div>
              <p className="text-xl text-center lg:text-left">
                Stay on top of your health goals with our patient monitoring and
                reminders feature. Track your nutrition and calorie intake while
                receiving timely reminders for medications and health checkups.
                Health management becomes proactive and personalized with
                HealthHub.
              </p>
            </div>
          </div>

          {/* Feature 7 */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:mr-8">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                Medicine and Therapy Prediction
              </div>
              <p className="text-xl text-center lg:text-left">
                Experience the future of healthcare with our predictive model
                for medicines and therapies. Human confirmation through chat or
                video calls ensures accuracy, and seamless links allow you to
                order medicines from our trusted partner platforms effortlessly.
              </p>
            </div>
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mr-8 lg:ml-0 lg:mr-8"
              src="./images/Login.png"
              alt="Loading"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center mb-16">
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mr-8 lg:ml-0 lg:mr-8"
              src="./images/Login.png"
              alt="Loading"
            />
            <div className="w-full lg:w-2/3">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                E-Commerce Platform
              </div>
              <p className="text-xl text-center lg:text-left">
                Order healthcare products with just one tap through our
                user-friendly e-commerce platform. From medications to wellness
                products, we've got you covered, ensuring convenience in every
                aspect of your healthcare journey..
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mb-16">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:mr-8">
              <div className="text-center lg:text-left text-green-800 text-4xl font-serif font-'Fredoka One' mb-4">
                Health Insurance and Expense Management
              </div>
              <p className="text-xl text-center lg:text-left">
                Explore health insurance options and manage healthcare expenses
                within the HealthHub platform. We believe in providing holistic
                healthcare solutions, and our commitment to your well-being
                extends to financial aspects, making healthcare accessible and
                manageable.
              </p>
            </div>
            <img
              className="h-48 lg:h-96 w-full lg:w-1/3 mr-8 lg:ml-0 lg:mr-8"
              src="./images/Login.png"
              alt="Loading"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
