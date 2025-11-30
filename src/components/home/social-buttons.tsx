"use client";

import { iSocialNav } from "@/lib/interfaces/iNav";
import Container from "../layout/container";
import { SectionTitle } from "../layout/section-title";
import React from "react";
import { SocialCard } from "./social-card";

export const SocialButtons = () => {
  const socialLinks: iSocialNav[] = [
    {
      label: "Follow Me",
      url: "#",
      icon: "/icons/kick.svg",
      type: "kick",
    },
    {
      label: "Follow Me",
      url: "#",
      icon: "/icons/twitter.svg",
      type: "twitter",
    },
    {
      label: "Join Discord",
      url: "#",
      icon: "/icons/dc.svg",
      type: "discord",
    },
  ];
  return (
    <>
      <section>
        <Container>
          <div className="grid grid-cols-12 gap-4 md:gap-8 py-10">
            <div className="col-span-12">
              <SectionTitle title="SOCIALS">
                Follow me on my socials to{" "}
                <span className="text-c-lightgreen">stay up to date</span> with
                streams, leaderboards, giveaways & more.
              </SectionTitle>
            </div>
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-4">
                {socialLinks.map((soc, index) => (
                  <React.Fragment key={index}>
                    <div className="col-span-12 md:col-span-4">
                      <SocialCard data={soc} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
