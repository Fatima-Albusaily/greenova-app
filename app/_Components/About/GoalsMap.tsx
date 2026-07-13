"use client";

import { useState } from "react";
import Reveal from "../Ui/Reveal";
import { goals } from "@/app/_data/about";

export default function GoalsMap() {
  const [activeGoal, setActiveGoal] = useState(goals[0]);

  return (

      <div className="container mx-auto px-6 ">

        {/* Interactive Area */}

        <Reveal delay={200}>

          <div className="mt-20 mx-auto hidden xl:flex flex-row gap-10 w-full items-center">

            <div className="relative h-105 w-120">

              {/* Center */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-40
                  w-40
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-dark-main
                  text-3xl
                  font-bold
                  text-white
                  shadow-xl
                "
              >
                GreeNova
              </div>

              {/* Goals */}

              {goals.map((goal, index) => {

                const Icon = goal.icon;

                const positions = [
                  "left-1/2 top-0 -translate-x-1/2",
                  "right-0 top-24",
                  "right-10 bottom-8",
                  "left-10 bottom-8",
                  "left-0 top-24",
                ];

                const active =
                  activeGoal.title === goal.title;

                return (

                  <button
                    key={goal.title}
                    onMouseEnter={() => setActiveGoal(goal)}
                    onClick={() => setActiveGoal(goal)}
                    className={`absolute ${positions[index]} flex flex-col items-center gap-3`}
                  >

                    <div
                      className={`
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          active
                            ? "scale-110 bg-[#6A994E] text-white shadow-xl"
                            : "bg-[#F2F7EF] text-[#6A994E]"
                        }
                      `}
                    >
                      <Icon size={34} />
                    </div>

                    <span
                      className={`
                        w-36
                        text-center
                        text-sm
                        font-semibold
                        transition-colors

                        ${
                          active
                            ? "text-dark-main"
                            : "text-[#7A8573]"
                        }
                      `}
                    >
                      {goal.title}
                    </span>

                  </button>

                );

              })}

            </div>

            {/* Description */}

            <div className="flex flex-col text-center gap-10">
                <p className="text-2xl font-bold text-desc">
                    نرفع شعار 
                    <i> "زراعة طبيعية، لحياة صحية"</i>
                </p>

                <div
                    className="
                        md:w-2xl
                        rounded-[30px]
                        border
                        border-[#E7E1CF]
                        bg-[#FFFDF7]
                        p-10
                        text-center
                        shadow-sm
                        transition-all
                        duration-500
                    "
                    >

                    <h3 className="text-3xl font-bold text-dark-main">

                        {activeGoal.title}

                    </h3>

                    <p className="mt-6 leading-9 text-[#6B7566]">

                        {activeGoal.description}

                    </p>

                </div>
            </div>
            
          </div>

          <div className="grid gap-5 xl:hidden mt-20">
            {goals.map((goal) => {
              const Icon = goal.icon;

              return (
                <div
                  key={goal.title}
                  className="
                    rounded-3xl
                    border border-[#E7E1CF]
                    bg-[#FFFDF7]
                    p-6
                    shadow-sm
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F2F7EF] text-[#6A994E]">
                      <Icon className="size-7" />
                    </div>

                    <h3 className="text-xl font-bold text-dark-main">
                      {goal.title}
                    </h3>
                  </div>

                  <p className="mt-5 leading-8 text-[#6B7566]">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>

        </Reveal>

      </div>

  );
}