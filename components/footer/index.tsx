import Image from "next/image";
import React from "react";
import Link from "next/link";
import icon_white from "public/assets/svgs/icon-white.svg";
import whatsapp from "public/assets/svgs/whatsapp.svg";
import instagram from "public/assets/svgs/instagram.svg";
import twitter from "public/assets/svgs/twitter.svg";
import slack from "public/assets/svgs/slack.svg";
import discord from "public/assets/svgs/discord.svg";

export type FooterProps = {
  showEventOverLay : () => void
  showUpdateProfileModal : () => void
  showConfirmEmailModal : () => void
}

const Footer = ({showEventOverLay, showUpdateProfileModal, showConfirmEmailModal}:FooterProps) => {
  return (
    <footer className=" bg-otaku-black-1 w-[76vw] rounded-[71px] mx-auto grid grid-cols-[40%60%]">
      <div className=" col-span-1 flex h-full pl-24">
        <div className="flex items-center justify-center flex-col gap-y-4">
          <Image src={icon_white} alt="icon" />

          <div className="flex gap-x-3">
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
            <Image src={whatsapp} alt="whatsapp" />
            <Image src={discord} alt="discord" />
            <Image src={slack} alt="slack" />
          </div>
        </div>
      </div>

      <div className="flex text-white justify-end p-24 gap-x-10">
        <div className="space-y-3">
          <h3 className="font-[600] text-3xl xl:text-4xl">Company</h3>
          <Link href={"./"}>
          <p className="text-[1.4rem] xl:text-[1.75rem] mon-hover">Home</p>
          </Link>
          <p className="text-[1.4rem] xl:text-[1.75rem] mon-hover" onClick={showEventOverLay}>Events</p>
          <Link href={"./blog"}>
          <p className="text-[1.4rem] xl:text-[1.75rem] mon-hover">Blog</p>
          </Link>
          <p className="text-[1.4rem] xl:text-[1.75rem] mon-hover">About Us</p>
          <Link href={"./community"}>
          <p className="text-[1.4rem] xl:text-[1.75rem] mon-hover">
            Community{" "}
          </p>
          </Link>
          <p className="text-[1.4rem] xl:text-[1.75rem] mon-hover" onClick={showUpdateProfileModal}>Update Profile</p>
        </div>
        <div className="space-y-3">
          <h3 className="font-[600] text-3xl xl:text-4xl">Resources</h3>
          <p className="text-[1.5rem] xl:text-[1.75rem] mon-hover">Sponsors</p>
          <p className="text-[1.5rem] xl:text-[1.75rem] mon-hover">
            Help Center
          </p>
          <Link href={"./contact"}>
            <p className="text-[1.5rem] xl:text-[1.75rem] mon-hover">
            Contact Us
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
