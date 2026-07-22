"use client";

import { useState } from "react";
import Reveal from "../Ui/Reveal";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
    const t = useTranslation();
    const { isRTL } = useLanguage();
    const contact = t.contact;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const validate = () => {
            const newErrors = {
                name: "",
                email: "",
                phone: "",
                message: "",
            };

            let isValid = true;

            if (!formData.name.trim()) {
                newErrors.name = contact.validation.requiredName;
                isValid = false;
            }

            if (!formData.email.trim()) {
                newErrors.email = contact.validation.requiredEmail;
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = contact.validation.invalidEmail;
                isValid = false;
            }

            if (!formData.phone.trim()) {
                newErrors.phone = contact.validation.requiredPhone;
                isValid = false;
            }

            if (!formData.message.trim()) {
                newErrors.message = contact.validation.requiredMessage;
                isValid = false;
            }

            setErrors(newErrors);

            return isValid;
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
        ) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: contact.toast.subject,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success(contact.toast.success);

            setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            });

        } catch (error) {
            console.error(error);
            toast.error(contact.toast.error);

        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section className="py-24 pt-34">
      <div className="mx-auto max-w-3xl p-10">

        <div className="title pb-10 mb-10 text-center">
            <Reveal>
                <p className={`text-[#6A994E] font-semibold tracking-[0.2em] uppercase ${isRTL? "" : "hidden"}`}>
                    Contact Us
                </p>
            </Reveal>

            <Reveal delay={150}>
                <h2 className="mt-4 text-5xl font-bold text-dark-main leading-tight section-title">
                    {contact.hero.title}
                </h2>
            </Reveal>

            <Reveal delay={300}>
                <p className="mt-7 max-w-3xl mx-auto text-lg leading-8 text-[#6B7566] section-description">
                    {contact.hero.description}
                </p>
            </Reveal>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-14 space-y-6">
            <div>
                <label className="mb-2 block font-medium">
                    {contact.form.name}
                </label>

                <input
                    type="text"
                    placeholder={contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        name: e.target.value,
                        })
                    }
                    className={`
                    w-full
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    transition

                    ${
                        errors.name
                        ? "border border-red-500 focus:ring-red-200"
                        : "border border-[#D9D2BF] focus:border-[#6A994E] focus:ring-[#6A994E]/20"
                    }
                `}
                />
                {errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.name}
                    </p>
                )}
            </div>
            <div>
                <label className="mb-2 block font-medium">
                    {contact.form.email}
                </label>

                <input
                    type="email"
                    placeholder={contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value,
                    })
                    }
                    className={`
                    w-full
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    transition

                    ${
                        errors.email
                        ? "border border-red-500 focus:ring-red-200"
                        : "border border-[#D9D2BF] focus:border-[#6A994E] focus:ring-[#6A994E]/20"
                    }
                    `}
                />
                {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.email}
                    </p>
                )}
            </div>
            <div>
                <label className="mb-2 block font-medium">
                    {contact.form.phone}
                </label>

                <input
                    type="text"
                    placeholder={contact.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) =>
                    setFormData({
                        ...formData,
                        phone: e.target.value,
                    })
                    }
                    className={`
                        w-full
                        rounded-xl
                        px-5
                        py-4
                        outline-none
                        transition

                        ${
                            errors.phone
                            ? "border border-red-500 focus:ring-red-200"
                            : "border border-[#D9D2BF] focus:border-[#6A994E] focus:ring-[#6A994E]/20"
                        }
                    `}
                />
                {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.phone}
                    </p>
                )}
            </div>
            <div>
                <label className="mb-2 block font-medium">
                    {contact.form.message}
                </label>

                <textarea
                    placeholder={contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                        ...formData,
                        message: e.target.value,
                    })
                    }
                    className={`
                        w-full
                        rounded-xl
                        px-5
                        py-4
                        outline-none
                        transition

                        ${
                            errors.message
                            ? "border border-red-500 focus:ring-red-200"
                            : "border border-[#D9D2BF] focus:border-[#6A994E] focus:ring-[#6A994E]/20"
                        }
                        `}
                />
                {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.message}
                    </p>
                )}
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-xl
                    bg-[#6A994E]
                    px-6
                    py-4

                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    hover:bg-dark-main

                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    cursor-pointer
                "
                >
                {isSubmitting ? (
                    <>
                    <LoaderCircle
                        className="h-5 w-5 animate-spin"
                    />

                    <span>{contact.form.submitting}</span>
                    </>
                ) : (
                    contact.form.submit
                )}
            </button>
        </form>

        {/* WhatsApp CTA */}

        <div className="mt-10 flex flex-col items-center">
        <div className="flex items-center gap-4 w-full max-w-md">
            <div className="h-px flex-1 bg-[#D8D2BF]" />

            <span className="text-sm font-semibold text-[#8B9485]">
              {contact.whatsapp.or}
            </span>

            <div className="h-px flex-1 bg-[#D8D2BF]" />
        </div>

        <a
            href="https://wa.me/962781882724"
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-6
            inline-flex
            items-center
            gap-3

            rounded-full

            border-2
            border-[#25D366]

            px-8
            py-4

            font-semibold

            text-[#25D366]

            transition-all
            duration-300

            hover:bg-[#25D366]
            hover:text-white
            hover:shadow-lg
            "
        >
            <FaWhatsapp size={24} />

                {contact.whatsapp.button}
        </a>
        </div>

      </div>
    </section>
  );
}