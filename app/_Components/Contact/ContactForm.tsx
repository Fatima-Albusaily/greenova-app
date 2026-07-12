"use client";

import { useState } from "react";
import Reveal from "../Ui/Reveal";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
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
                newErrors.name = "يرجى إدخال الاسم.";
                isValid = false;
            }

            if (!formData.email.trim()) {
                newErrors.email = "يرجى إدخال البريد الإلكتروني.";
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "البريد الإلكتروني غير صحيح.";
                isValid = false;
            }

            if (!formData.phone.trim()) {
                newErrors.phone = "يرجى إدخال رقم الهاتف.";
                isValid = false;
            }

            if (!formData.message.trim()) {
                newErrors.message = "يرجى كتابة رسالتك.";
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
                    subject: "رسالة جديدة من موقع GreeNova",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success("تم إرسال رسالتك بنجاح.");

            setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            });

        } catch (error) {
            console.error(error);
            toast.error("تعذر إرسال الرسالة.");

        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section className="py-24 pt-34">
      <div className="mx-auto max-w-3xl p-10">

        <div className="title pb-10 mb-10 text-center">
            <Reveal>
                <p className="text-[#6A994E] font-semibold tracking-[0.2em] uppercase">
                    Contact Us
                </p>
            </Reveal>

            <Reveal delay={150}>
                <h2 className="mt-4 text-5xl font-bold text-dark-main leading-tight section-title">
                    تواصل معنا
                </h2>
            </Reveal>

            <Reveal delay={300}>
                <p className="mt-7 max-w-3xl mx-auto text-lg leading-8 text-[#6B7566] section-description">
                 يسعدنا الرد على جميع استفساراتكم ومساعدتكم في اختيار الحلول الزراعية المناسبة.
                </p>
            </Reveal>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-14 space-y-6">
            <div>
                <label className="mb-2 block font-medium">
                    الاسم الكامل
                </label>

                <input
                    type="text"
                    placeholder="أدخل اسمك"
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
                    البريد الإلكتروني
                </label>

                <input
                    type="email"
                    placeholder="الإيميل"
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
                    رقم الهاتف
                </label>

                <input
                    type="text"
                    placeholder="أدخل رقم هاتفك مسبوقًا برمز الدولة"
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
                    الرسالة
                </label>

                <textarea
                    placeholder="اكتب رسالتك"
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

                    <span>جارٍ الإرسال...</span>
                    </>
                ) : (
                    "إرسال الرسالة"
                )}
            </button>
        </form>

        {/* WhatsApp CTA */}

<div className="mt-10 flex flex-col items-center">
  <div className="flex items-center gap-4 w-full max-w-md">
    <div className="h-px flex-1 bg-[#D8D2BF]" />

    <span className="text-sm font-semibold text-[#8B9485]">
      أو
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

    إرسال رسالة عبر واتساب
  </a>
</div>

      </div>
    </section>
  );
}