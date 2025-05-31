import React from "react";
import { Button } from "../ui/button";
import Logo from "../identity/Logo";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { links } from "@/data/NavLinks";
import Link from "next/link";
import EmailSubscription from "../ui/EmailSubscription";

const Footer = () => {
  const socials = [
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaPinterest, label: "Pinterest" },
    {icon:FaTwitter, label:"twitter"},
    {icon:FaYoutube, label:"youtube"}
  ];
  return (
    <footer className="mt-10">
      <div className="bg-secondary py-10 min-h-10 px-5 lg:px-[5%] ">
        {/* footer widget one */}

        <section className="flex flex-col md:flex-row items-center justify-between gap-y-4">
          <h3 className="md:text-5xl text-3xl font-semibold text-white">
            Lets <span className="text-primary">Connect</span> there
          </h3>
          <Button className="hover:border-2 hover:border-primary">
            Contact Us
          </Button>
        </section>
        {/* footer section divider */}
        <hr className="bg-bgmix opacity-25 my-7 h-0.5 md:h-0.3" />
        {/* footer widget two */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-4 items-start place-items-start px-2 md:px-0 gap-y-7">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-y-4 items-center md:items-start">
            <Logo className="flex items-center text-3xl lg:text-2xl md:text-4xl font-normal text-bgmix" />
            <p className="text-white text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              obcaecati, libero tempora impedit sequi voluptatem. Pariatur
              perferendis quia eaque nobis!
            </p>
            <div>
              <div className="inline-flex gap-x-2">
              {socials.map(({ icon: Icon, label }, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-full inline-flex items-center justify-center bg-white/20 shadow-md hover:bg-primary"
                >
                  <Icon className="text-white h-6 w-6" aria-label={label} />
                </div>
              ))}
              </div>
            </div>
          </div>
          <div className="text-white md:mx-auto flex flex-col gap-y-4">
            <h3 className="text-2xl">Navigation</h3>
            <nav className="flex flex-col gap-y-2">
              {
                links.map((link)=>(
                  <Link href={link.link} key={link.id} className="hover:text-primary">
                  {link.label}
                  </Link>
                ))
              }
            </nav>
          </div>
          <div className="text-white flex flex-col gap-y-4">
            <h3 className="text-2xl">Contact</h3>
            <div className="flex flex-col gap-y-2">
            <Link href="mailto:devsznteam@gmail.com" className="block">devsznteam@gmail.com</Link>
            <Link href="tel:+234 810 671 2900">+234 810 671 2900</Link>
             <p>Plot 200 Mortala Mohammed layout Abakaliki Ebonyi State</p>
             </div>
          </div>
          <div className="text-white col-span-2 md:col-span-3 place-self-center lg:col-span-1 place-self-center lg:place-self-start flex flex-col gap-y-4">
            <h3 className="text-xl">Get the Latest Information</h3>
            <EmailSubscription />
          </div>
        </section>

       
      </div>
       {/* footer widget 3 */}
        <section className="bg-primary text-white py-3 px-5 lg:px-[5%] flex flex-col md:flex-row md:justify-between gap-y-2">
          <p>Copyright &copy; 2025 GiantRoofers. All Rights Reserved.</p>
          <div className="text-center md:text-left">
            <Link href="#">Terms and Condtions</Link> &nbsp; | &nbsp;
            <Link href="#">Terms and Condtions</Link>
          </div>
        </section>
    </footer>
  );
};

export default Footer;
