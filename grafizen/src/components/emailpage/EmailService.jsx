import React from "react";
import { ArrowRight } from "lucide-react";
import email from "../../../../public/image/emailpage/emialservice.png";
import advertising from "../../../public/image/emailpage/advertising.png";
import conversion from "../../../public/image/emailpage/good-conversion-rate.png";
import people from "../../../public/image/emailpage/people.png";
import growth from "../../../public/image/growth.png";

export default function EmailService() {
  return (
    <section className="relative bg-white px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1300px]">
        {/* Header Section */}
        <div className="mb-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>OUR EMAIL MARKETING SOLUTIONS</span>
            </div>

            <h2 className="text-4xl font-[500] leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[48px] text-black sm:text-[42px]">
              Strategic Email Marketing <br />
              <span className="text-[#dd0403]">Solutions</span> for Business
              Growth
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <p className="mt-6 max-w-3xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300]">
              Build stronger customer relationships with targeted email
              campaigns, marketing automation, personalization and data-driven
              strategies designed to increase engagement, nurture leads and
              improve conversions.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-h-[380px] aspect-square">
              <img
                src={email}
                alt="Email marketing solutions and campaign management"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-5">
            <div>
              <p className="text-base leading-5 text-gray-600 sm:text-md">
                At Grafizen, our email marketing solutions help businesses
                communicate directly with their audience through relevant,
                personalized and conversion-focused campaigns. We manage the
                complete email marketing journey, from audience segmentation and
                campaign creation to automation, performance tracking and
                continuous optimization. Whether your goal is lead generation,
                customer retention or repeat sales, our strategies are built
                around measurable business outcomes.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                  <img
                    src={people}
                    alt="Email audience segmentation"
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Audience Segmentation
                  </h4>

                  <p className="text-gray-600 text-[13px] leading-tight">
                    Segment customers by interests, behavior and engagement for
                    more relevant communication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                  <img
                    src={advertising}
                    alt="Targeted email marketing campaigns"
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Targeted Email Campaigns
                  </h4>

                  <p className="text-[13px] leading-tight text-gray-600">
                    Deliver the right message to the right audience at the right
                    stage of the customer journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                  <img
                    src={growth}
                    alt="Email marketing analytics and reporting"
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Analytics & Reporting
                  </h4>

                  <p className="text-[13px] leading-tight text-gray-600">
                    Monitor opens, clicks, engagement and conversions to
                    understand campaign performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                  <img
                    src={conversion}
                    alt="Email conversion optimization"
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Conversion Optimization
                  </h4>

                  <p className="text-[13px] leading-tight text-gray-600">
                    Optimize email content, calls to action and customer
                    journeys to generate more leads and sales.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            {/* <div>
              <button className="group relative inline-flex items-center gap-3 bg-[#dd0403] text-white font-medium text-[15px] px-8 py-2 rounded-xl border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(221,4,3,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                <span>Explore Email Marketing Services</span>

                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div> */}
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#dd0403] mb-1">
              Targeted
            </p>

            <p className="text-gray-600">
              Campaigns Built for the Right Audience
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-[#dd0403] mb-1">
              Automated
            </p>

            <p className="text-gray-600">
              Customer Journeys That Nurture Leads
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-[#dd0403] mb-1">
              Optimized
            </p>

            <p className="text-gray-600">
              Data-Driven Campaign Performance
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
