import Reveal from "../Ui/Reveal";
import GoalsMap from "./GoalsMap";

export default function GoalsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <Reveal>

            <div className="text-center">

                <p className="section-subtitle">
                OUR GOALS
                </p>

                <h2 className="section-title mt-5">
                هدفنا
                </h2>

                <p className="page-description">
                    نهدف إلى إحداث نقلة نوعية في الزراعة لإنتاج غذاء صحي وآمن مع الحفاظ على البيئة والموارد الطبيعية، عن طريق تقديم منتجات طبيعية تمامًا وفعالة بشكل مؤكد مع تكلفة في متناول المزارع البسيط.
                </p>

            </div>

        </Reveal>

        <GoalsMap></GoalsMap>

      </div>
    </section>
  );
}