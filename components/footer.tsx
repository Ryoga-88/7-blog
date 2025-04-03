import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full dark:bg-black py-6 mt-auto">
      <div className="flex items-center justify-center">
        <div className="flex items-center text-neutral-800 dark:text-white text-sm">
          <MdOutlineCopyright />
          2025 &nbsp;|&nbsp; Human Information Systems Lab.&nbsp;All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
