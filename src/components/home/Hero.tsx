"use client";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Hero = () => {
  return (
    <section className=" py-3 px-5 lg:px-[5%] bg-bgmix">

      {/* header information section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-y-7">
        <div className="md:basis-3/5">
          <SectionTitle
            as="h1" // Main title will be an <h1>
            subtitle="Award winning construction excellence" // Subtitle text
            subtitleAs="h5" // Subtitle will be an <h5>
            coloredAs="span"
            colored="structural perfection"
          >
            Where Innovation drives
          </SectionTitle>
        </div>
        <AnimatePresence>
          <div className="flex">
            <motion.div 
              initial={{ scale:0.2}}
              animate={{scale:[ 0.4, 0.7, 1]}}
              transition={{repeat:Infinity, ease:"linear", duration:3}}
            
            className="h-24 w-24 bg-secondary rounded-full shadow-md translate-x-10"></motion.div>
            <div className="h-24 w-24 bg-white rounded-full shadow-md z-999 text-primary flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0.6, scale: 0.2 }}
                animate={{
                  opacity: 1,
                  scale: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                  rotate: [0, 360],
                }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              >
                <FaArrowTrendUp
                  size={50}
                  className="bg-red-500 text-white p-2 rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
      {/* tabs sectiob for highlighing key features and services */}
      <Tabs defaultValue="general-construction-services" className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 md:pb-24">
      {/* Tabs List */}
        <div className="mb-32 md:mb-0 col-span-2 md:col-span-1 w-full mx-auto flex justify-center items-center md:block">
        <TabsList className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
          <TabsTrigger value="general-construction-services">General Construction</TabsTrigger>
          <TabsTrigger value="concrete-work">Concrete Work</TabsTrigger>
          <TabsTrigger value="design-and-planning">Design and Planning</TabsTrigger>
          <TabsTrigger value="civil-works">Civil Works</TabsTrigger>
          <TabsTrigger value="pre-construction">PreConstruction</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
        </TabsList>
        </div>
        
        {/* Content for each tab */}
        <div className="text-center md:text-left col-span-2 md:col-span-1 md:border-l-2 md:pl-3 md:border-red-200 md:border-groove">
        <TabsContent value="general-construction-services">
          <p>
            Our general construction services encompass a wide range of
            capabilities, including project management, site preparation,
            structural work, and finishing touches. We ensure that every aspect
            of your project is executed with precision and care, delivering
            results that exceed expectations.
          </p>
        </TabsContent>
        <TabsContent value="concrete-work">
          <p>
            Our concrete work services include everything from foundations to
            decorative finishes. We use high-quality materials and advanced
            techniques to ensure durability and aesthetic appeal in every
            project.
          </p>
        </TabsContent>
        <TabsContent value="design-and-planning">
          <p>
            Our design and planning services focus on creating functional and
            aesthetically pleasing spaces. We collaborate closely with clients to
            understand their vision and translate it into detailed plans that
            guide the construction process.
          </p>  
        </TabsContent>
        <TabsContent value="civil-works"> 
          <p>
            Our civil works services cover a broad spectrum, including road
            construction, drainage systems, and earthworks. We apply our
            engineering expertise to ensure that all projects are completed to
            the highest standards of quality and safety.
          </p>
        </TabsContent>
        <TabsContent value="pre-construction">
          <p>
            Our pre-construction services involve thorough planning and
            preparation to ensure that projects run smoothly from the start.
            This includes feasibility studies, budgeting, scheduling, and risk
            assessment.
          </p>
        </TabsContent>
        <TabsContent value="architecture">
          <p>
            Our architecture services focus on creating innovative and
            sustainable designs that meet the needs of our clients. We blend
            functionality with aesthetics to create spaces that inspire and
            endure.
          </p>
        </TabsContent>
        </div>

      </Tabs>
    </section>
  );
};

export default Hero;
