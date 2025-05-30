"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { WiDayThunderstorm } from "react-icons/wi";
import { links } from "@/data/NavLinks";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(isMobileMenuOpen);
  return (
    <header>
      <div className="px-2 lg:px-[5%] bg-bgmix py-3">
        <section className="flex lg:flex-row justify-between items-center">
          <div className="flex gap-x-5 justify-center w-full md:justify-start">
            <Link
              href="tel:+234 810 671 2900"
              className="flex items-center gap-x-1 text-secondary text-sm md:text-lg"
            >
              <FaPhoneAlt className="text-primary" />
              +234 810 671 2900
            </Link>
            <Link
              href="mailto:devsznteam@gmail.com"
              className="flex items-center gap-x-1 text-secondary text-sm md:text-lg"
            >
              <IoMail className="text-primary" />
              devsznteam@gmail.com
            </Link>
          </div>
          <div className="gap-x-2 text-xl text-secondary hidden md:flex justify-between items-center">
            <MdFacebook />
            <FaInstagramSquare />
            <FaPinterest />
            <SiYoutubemusic />
          </div>
        </section>
      </div>
      <section className="px-2 lg:px-[5%] py-3 flex items-center justify-between relative">
        <div>
          <h3 className="flex items-center text-3xl md:text-4xl font-normal text-secondary">
            <WiDayThunderstorm className="text-primary" />
            GiantRoofers
          </h3>
          {/* Desktop Menu */}
        </div>
        <div className="md:flex lg:gap-x-5 md:gap-x-3 hidden">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="text-secondary hover:underline hover:underline-offset-5 decoration-primary decoration-2 hover:text-primary transition smooth active:text-primary active:decoration-1 active:underline active:decoration-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button className="hidden md:inline-flex">Get A Quote</Button>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-3xl text-primary"
          aria-label="open menu"
        >
          <FaBars />
        </button>

        {/* mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-15 left-0 right-0 bg-secondary text-white pl-5 py-2"
            >
              {links.map((link) => (
                <li
                  key={link.id}
                  className="mb-3 text-bgmix hover:underline hover:underline-offset-5 decoration-primary decoration-2 hover:text-primary transition smooth active:text-primary active:decoration-1 active:underline active:decoration-primary active:underline-offset-5 active:decoration-2"
                >
                  <Link
                    href={link.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
};

export default Header;
