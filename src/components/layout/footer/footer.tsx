"use client";

import Container from "../container";
import { SocialButtons } from "../social-buttons";
import { FooterNav } from "./footer-nav";

export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="grid grid-cols-12 py-4">
            <div className="col-span-12">
              <FooterNav />
            </div>
            <div className="col-span-12">
              <div className="py-6 px-4 md:px-0 md:max-w-[50%] m-auto">
                <div className="text-center text-gray-400 text-sm">
                  &copy; 2025, Valkyrie Studio
                </div>
                <div className="text-center text-gray-400 text-sm">
                  All product and company names are trademarks or registered
                  trademarks of their respective holders. Use of them does not
                  imply any affiliation with or endorsement by them.
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="text-center text-gray-300 text-sm mb-4">
                Follow Us
              </div>
              <SocialButtons />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
