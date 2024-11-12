"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useTransition } from "react";
import { Calendar } from "../ui/calendar";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import BirthdayVector from "@/public/tooltip-birthday-vector.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Stars from "@/public/mdi_stars.png";
import { FaGoogle } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { Calendar1, CalendarIcon, Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import SocialMediaLink from "../SocialMediaLink";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }).max(50),
    lastName: z.string().min(1, { message: "Last name is required" }).max(50),
    email: z.string().email({ message: "Invalid email address" }),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must match" }),
    birthday: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

const SignUpForm = () => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthday: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      type="email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Date of Birth</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <BirthdayRewardPopover />

          <div className="mt-12 space-y-4">
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" checked />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Yes, sign me up for news, treats and offers mainly via email.
                </label>
              </div>
            </div>

            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" checked />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </div>
          <span className="mt-8 block text-xs text-muted-foreground">
            By continuing, you accept the{" "}
            <span className="underline">Terms & Conditions</span> and
            <span className="underline">Privacy Policy.</span>
          </span>
          <Button
            type="submit"
            className="mt-4 w-full px-6 py-8 uppercase"
            onClick={() => {
              router.push("/check-email");
            }}
            asChild
          >
            <div className="relative flex justify-between">
              <div>
                <Image src={Stars} alt="Stars" />
              </div>
              <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center text-center">
                <span className="font-pduRegular text-lg">REGISTER</span>
                <span className="text-xs text-muted-foreground">
                  no password needed
                </span>
              </div>
            </div>
          </Button>
        </form>
      </Form>
      <div>
        <div className="mt-6 flex items-center justify-center">
          <span className="flex-1 border-t border-gray-300"></span>
          <span className="px-4 text-sm font-bold">Or Continue With</span>
          <span className="flex-1 border-t border-gray-300"></span>
        </div>

        <div className="mt-4 flex justify-around">
          <SocialMediaLink icon={FaGoogle} />
          <SocialMediaLink icon={BsApple} />
          <SocialMediaLink icon={FaFacebook} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

function BirthdayRewardPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2">
          <Image src={BirthdayVector} alt="birthday icon vector" />
          <span className="text-sm text-muted-foreground">Birthday Reward</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-mainYellow text-black">
        Get a special surprise on your birthday from GBK. Enter your date of
        birth to earn your reward.
      </PopoverContent>
    </Popover>
  );
}
