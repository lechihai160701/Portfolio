"use client";
import React, { useState } from "react";
import SvgIcon, { svgICon } from "@/components/ui/SvgIcon";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-end justify-center py-10">
      <div className="w-full max-w-7xl  text-center">
        <h2 className="mb-16 text-4xl px-6 lg:px-12 sm:text-5xl md:text-6xl font-bold text-white">
          Skills <span className="text-cyan-400 animate-pulse">Me</span>
        </h2>
        <div className="relative w-full max-w-5xl mx-auto aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Vòng tròn nền – nhỏ, mờ */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-xl border border-white/5 shadow-2xl"></div>

            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-20">
              {selectedSkill !== null ? (
                <div className="animate-fadeIn">
                  <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                    {svgICon[selectedSkill].name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">Click to explore</p>
                </div>
              ) : (
                <p className="text-lg text-gray-400 animate-pulse">
                  Click any skill
                </p>
              )}
            </div>

            {/* Skill Ring */}
            <div className={selectedSkill !== null ? "" : "animate-spin-slow"}>
              <SvgIcon selected={selectedSkill} onSelect={setSelectedSkill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
