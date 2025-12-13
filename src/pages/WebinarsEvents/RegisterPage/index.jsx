import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, HeroSection } from "../../../components/common";
import { ArrowLeft } from "lucide-react";
import { webinar } from "./data/webinar";
import heroBg from "../../../assets/images/blog-bg.png";
import {
  InfoTags,
  WhatYoullLearn,
  Agenda,
  Speakers,
  RegistrationForm,
  SuccessModal,
} from "./components";

export const WebinarRegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    questions: "",
    agreeToCommunications: false,
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock registration - simulate API call
    setTimeout(() => {
      setIsSuccessModalOpen(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        questions: "",
        agreeToCommunications: false,
      });
    }, 500);
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="space-y-16">
      <HeroSection
        label={webinar.label}
        title={webinar.title}
        description={webinar.description}
        backgroundImage={heroBg}
      >
        <InfoTags webinar={webinar} />
      </HeroSection>

      {/* Main Webinar Section */}
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Main White Card Container */}
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Content Details */}
            <div className="space-y-6">
              <WhatYoullLearn items={webinar.whatYoullLearn} />
              <Agenda items={webinar.agenda} />
              <Speakers speakers={webinar.speakers} />
            </div>

            {/* Right Column - Registration Form */}
            <div>
              <RegistrationForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Back To Webinars And Events Button */}
      <div className="flex justify-center pb-8">
        <Button
          variant="primary"
          className="py-3 px-6"
          onClick={() => navigate("/webinars-events")}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft size={20} />
            Back To Webinars And Events
          </div>
        </Button>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
        webinar={webinar}
      />
    </div>
  );
};
