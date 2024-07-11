"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "../magicui/navbar";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { ModeToggle } from "../ThemeToggleButton";
import { FaLinkedin } from "react-icons/fa6";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "react-responsive";
import { Briefcase, FolderGit2, User } from "lucide-react";
import { LinkPreview } from "./link-preview";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallDevice = useMediaQuery({ maxWidth: 640 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 md:max-w-6xl  mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center w-full">
          {isSmallDevice ? (
            <div className="flex justify-center items-center gap-3 w-full">
              <Link href="https://github.com/sagarhedaoo" target="_blank">
                <div className=" hover:bg-black hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">
                  <GitHubLogoIcon className=" h-8 w-8" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sagarhedaoo/"
                target="_blank"
              >
                <div className=" hover:bg-black hover:text-white rounded-lg dark:hover:bg-white dark:hover:text-black">
                  <FaLinkedin className=" h-8 w-8 " />
                </div>
              </Link>
              <Link href="#about">
                <div className=" hover:bg-black hover:text-white rounded-lg dark:hover:bg-white dark:hover:text-black">
                  <User className="h-8 w-8" />
                </div>
              </Link>
              <Link href="#projects">
                <div className=" hover:bg-black hover:text-white rounded-lg dark:hover:bg-white dark:hover:text-black">
                  <FolderGit2 className="h-8 w-8" />
                </div>
              </Link>
              <Link href="#experience">
                <div className=" hover:bg-black hover:text-white rounded-lg dark:hover:bg-white dark:hover:text-black">
                  <Briefcase className="h-8 w-8" />
                </div>
              </Link>

              <ModeToggle />
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 md:gap-5 lg:gap-5">
                <LinkPreview url="https://sagarhedaoo.com/#bento">
                  About
                </LinkPreview>
                <LinkPreview url="https://sagarhedaoo.com/#projects">
                  Projects
                </LinkPreview>
                <LinkPreview url="https://sagarhedaoo.com/#experience">
                  Experience
                </LinkPreview>
                <LinkPreview url="https://sagarhedaoo.com/resume">
                  Resume
                </LinkPreview>
              </div>
              <div className="flex gap-3 items-center">
                <Link href="https://github.com/sagarhedaoo" target="_blank">
                  <div>
                    <LinkPreview
                      url="https://github.com/sagarhedaoo"
                      className="flex justify-center items-center gap-2 hover:bg-black hover:text-white rounded-lg dark:hover:bg-white dark:hover:text-black h-9"
                    >
                      <GitHubLogoIcon className="ml-2 h-5 w-5" />
                      <span className="mr-2 text-md">Github</span>
                    </LinkPreview>
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sagarhedaoo/"
                  target="_blank"
                >
                  <div>
                    <LinkPreview
                      url="https://www.linkedin.com/in/sagarhedaoo/"
                      className="flex justify-center items-center gap-2 hover:bg-black hover:text-white rounded-lg dark:hover:bg-white dark:hover:text-black h-9"
                    >
                      <FaLinkedin className="ml-2 h-5 w-5" />
                      <span className="mr-2 text-md">LinkedIn</span>
                    </LinkPreview>
                  </div>
                </Link>
                <ModeToggle />
              </div>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
}
