import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { LabelPill } from "./LabelPill";

export const FAQAccordion = ({ faqs, defaultOpen = null, label = "FAQ" }) => {
  const [openFaq, setOpenFaq] = useState(defaultOpen);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <div className="flex justify-center mb-20">
        <LabelPill>{label}</LabelPill>
      </div>
      <div className="space-y-4 max-w-6xl mx-auto w-full flex flex-col  justify-center h-[500px] md:h-[400px]">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-[#E1E1E1] rounded-xl p-6 bg-white "
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-xl font-medium text-black">{faq.question}</h3>
              {openFaq === faq.id ? (
                <Minus size={20} className="text-primary shrink-0" />
              ) : (
                <Plus size={20} className="text-primary shrink-0" />
              )}
            </button>
            {openFaq === faq.id && (
              <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
