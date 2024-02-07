import React from "react";
import { LoginProps } from ".";
import content from "./content.json";
import { Card } from "../../common/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { poppinsSubtitle } from "@/styles/fonts.config";
import Image from "next/image";
import images from "@/constants/images";

const LoginForm = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      rememberMe: formData.get("rememberMe"),
    };
    console.log(data);
    console.log(
      "Has intentado hacer submit pero aun no hay nada asociado a esta funcion"
    );
  };

  return (
    <form id="login_form" action={handleSubmit}>
      <div className="flex flex-col items-center gap-4 p-5">
        {/* <---> */}

        {/* input- email */}
        <div>
          <label htmlFor={content.fields.email.id}>
            {content.fields.email.label}
          </label>
          <Input
            id={content.fields.email.id}
            name={content.fields.email.name}
            placeholder={content.fields.email.placeholder}
            className="bg-transparent w-96"
          />
        </div>

        {/* input- password */}
        <div>
          <label htmlFor={content.fields.password.id}>
            {content.fields.password.label}
          </label>
          <Input
            id={content.fields.password.id}
            name={content.fields.password.name}
            placeholder={content.fields.password.placeholder}
            className="bg-transparent w-96"
          />
        </div>

        {/* checkbox-contaner */}
        <div
          id="checkbox_container"
          className="flex justify-end items-center gap-2"
        >
          <Checkbox
            id={content.fields.rememberMe.id}
            name={content.fields.rememberMe.name}
          />
          <label
            htmlFor={content.fields.rememberMe.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {content.fields.rememberMe.label}
          </label>
        </div>

        {/* submit button */}
        <div>
          <Button
            type="submit"
            name="login"
            variant={"outline"}
            className="bg-transparent rounded-full px-5"
          >
            {" "}
            <p className={cn(poppinsSubtitle.className, "")}>
              Inicia sesión
            </p>{" "}
          </Button>
        </div>
        {/* <---> */}
      </div>
    </form>
  );
};

export const Login = ({ className }: LoginProps) => {
  return (
    <div className={cn(className, "")}>
      <Card className="w-full bg-red-50 bg-opacity-25 rounded-3xl backdrop-blur-sm">
        {/* <---> */}

        <div id="cardLogin_image" className="w-full flex justify-center">
          {/* <Skeleton className="w-[200px] h-[200px]" /> */}
          <Image src={images.catLogin} alt="cat reading" width={200} height={200} />
        </div>

        <div id="cardLogin_form" className="">
          <LoginForm />
        </div>

        {/* <---> */}
      </Card>
    </div>
  );
};
