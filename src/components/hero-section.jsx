"use client";

import React from "react";
import { ArrowBigDownDash, CheckIcon, FileText } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const heroSectionRef = useRef(null);
  const heroSectionInView = useInView(heroSectionRef);

  return (
    <div className="bg-gray-900 text-white flex min-h-[90vh] p-8 justify-center items-center">
      <div className="flex flex-col gap-10 md:gap-2 md:flex-row items-center justify-between">
        <div className="flex max-w-xl flex-col items-center">
          <motion.div
            initial="hidden"
            className="max-w-2xl"
            ref={heroSectionRef}
            animate={heroSectionInView ? "show" : "hidden"}
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="space-x-4 text-3xl font-bold tracking-tight sm:text-5xl"
            >
              Zydus Green Energy pvt ltd
            </motion.h1>
            {/* <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="space-x-4 text-xl font-bold tracking-tight sm:text-3xl mt-3"
            >
              Your ultimate music analytics platform
            </motion.p> */}

            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-base sm:text-lg leading-8 "
            >
              Zydus Green Energy PVT LTD is a leading provider of renewable
              energy solutions, committed to driving the transition to a
              greener, more sustainable world.
            </motion.p>

            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-10 flex items-center  gap-x-6 "
            >
              <div className="flex space-x-4">
                <Link href={"#about-us"}>
                  <Button variant="primary">Learn More</Button>
                </Link>
                <Link href={"#contact"}>
                  <Button variant="secondary">Contact Us</Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex">
          <img
            alt="Zydus Green Energy"
            className="mt-8 md:mt-0 max-w-[600px] w-full"
            height="400"
            src="https://i0.wp.com/indianinfrastructure.com/wp-content/uploads/2022/11/II-24.jpg?fit=1855%2C1042&ssl=1"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
