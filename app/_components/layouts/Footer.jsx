"use client";
import Link from "next/link";
import { CircleArrowOutUpRight, GlobeLock } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Briefcase, ShieldCheck, Search } from "lucide-react";
import { Mail, HelpCircle, MessageSquare, Shield, Info } from "lucide-react";
import { RefreshCw, Users, BarChart, Undo2 } from "lucide-react";

const LinkList = ({ title, links }) => {
  return (
    <div>
      <p className="font-medium text-gray-900 dark:text-white">{title}</p>

      <ul className="mt-6 space-y-4 text-sm">
        {links.map(({ name, href, icon }, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            {icon}
            <Link href={href} className="transition hover:opacity-75">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "GitHub", icon: Github, url: "https://github.com" },
  ];

  const services = [
    { name: "1on1 Coaching", href: "#", icon: <Users size={18} /> },
    { name: "Company Review", href: "#", icon: <Briefcase size={18} /> },
    { name: "HR Consulting", href: "#", icon: <ShieldCheck size={18} /> },
    { name: "SEO Optimisation", href: "#", icon: <Search size={18} /> },
  ];

  const companyLinks = [
    { name: "About", href: "#", icon: <Info size={18} /> },
    { name: "Meet the Team", href: "#", icon: <Users size={18} /> },
    { name: "Accounts Review", href: "#", icon: <BarChart size={18} /> },
    { name: "Privacy Policy", href: "#", icon: <GlobeLock size={18} /> },
  ];

  const helpfulLinks = [
    { name: "Contact", href: "#", icon: <Mail size={18} /> },
    { name: "FAQs", href: "#", icon: <HelpCircle size={18} /> },
    { name: "Live Chat", href: "#", icon: <MessageSquare size={18} /> },
    { name: "FAQs", href: "#", icon: <HelpCircle size={18} /> },
  ];

  const legalLinks = [
    { name: "Accessibility", href: "#", icon: <Shield size={18} /> },
    { name: "Returns Policy", href: "#", icon: <RefreshCw size={18} /> },
    { name: "Refund Policy", href: "#", icon: <Undo2 size={18} /> },
    { name: "Hiring-3 Statistics", href: "#", icon: <BarChart size={18} /> },
  ];
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 shadow-2xl">
      <div className="mx-auto max-w-screen-xl px-6 pb-8 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 dark:text-teal-300">
              <CircleArrowOutUpRight
                size={32}
                strokeWidth={3}
                className="h-8"
              />
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">{item.name}</span>

                    <item.icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 max-lg:pb-8">
            <LinkList title="Services" links={services} />
            <LinkList title="Company" links={companyLinks} />
            <LinkList title="Helpful Links" links={helpfulLinks} />
            <LinkList title="Legal" links={legalLinks} />
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 pt-8">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
