import { navConfig } from '@/config/nav';
import Link from 'next/link';
import { Button } from './ui/button';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { InputWithButton } from './input-with-button';
import { WeAreTrustedBy } from './we-are-trusted-by-carousel';
import { FormItem, FormMessage } from './form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function SiteFooter() {
  return (
    <footer className="text-black">
      {/* <WeAreTrustedBy /> */}
      <div className=" bg-[#9cdaf5] p-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <div className="mb-3 md:mb-0 text-2xl font-semibold">
          Subscribe to Our Latest and Trending Market Research
        </div>
        <InputWithButton />
      </div>
      <div className="bg-[#1a1e2c] px-2 py-8 md:px-8 ">
        <div className="container max-w-screen-md m-0">
          <div className="mb-8 grid md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  COMPANY ADDRESS
                </p>
                <p className="text-white">
                  1331 Johnson Dr, Buffalo, Grove. <br />
                  illinios, Chicago, USA.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  ASIAN INTELLIGENCE CENTRE
                </p>
                <p className="text-white">
                  2nd floor, <br />
                  Arth Vishwa Complex, <br />
                  Lane no-5, Koregaon Park, <br />
                  Pune-411001
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                FREE CUSTOMIZED REPORT
              </p>
              <div>
                <form
                  name="freeCustomizedReportForm"
                  className="grid gap-4 text-white"
                >
                  <FormItem>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="bg-[#ffffff1a] pt-3 pb-6"
                      required
                    />
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-[#ffffff1a] pt-3 pb-6"
                      required
                    />
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <Input
                      type="text"
                      name="mobile"
                      placeholder="Phone no"
                      className="bg-[#ffffff1a] pt-3 pb-6"
                      required
                    />
                  </FormItem>
                  <FormItem>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      className="bg-[#ffffff1a] pt-3 pb-6"
                      required
                    />
                  </FormItem>
                  <FormItem>
                    <Button
                      className="bg-expertmarketinsight hover:bg-expertmarketinsight/90"
                      size="lg"
                    >
                      Get It Now
                    </Button>
                  </FormItem>
                </form>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row md:items-end">
            <div className="flex items-center space-x-2">
              <Button
                variant="link"
                size="icon"
                className="text-black bg-white"
              >
                <span>
                  <Facebook className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="link"
                size="icon"
                className="text-black bg-white"
              >
                <span>
                  <Twitter className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="link"
                size="icon"
                className="text-black bg-white"
              >
                <span>
                  <Linkedin className="h-4 w-4" />
                </span>
              </Button>
            </div>
            <div className="text-[#3ba7e0] text-base font-bold uppercase">
              COPYRIGHT © 2024 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
