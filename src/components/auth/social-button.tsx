"use client";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const SocialButton = () => {
  return (
    <div className="w-full space-y-3">
      <div className="shadow-sm rounded w-full">
        <Button
          onClick={() => {}}
          className="text-primary text-sm w-full"
          variant="secondary"
        >
          <FaGoogle /> Continue with Google
        </Button>
      </div>
      <div className="shadow-sm rounded w-full">
        <Button
          onClick={() => {}}
          className="text-primary text-sm w-full"
          variant="secondary"
        >
          <FaGithub /> Continue with GitHub
        </Button>
      </div>
    </div>
  );
};
