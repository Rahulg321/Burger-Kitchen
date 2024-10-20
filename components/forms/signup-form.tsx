"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }).max(50),
    lastName: z.string().min(1, { message: "Last name is required" }).max(50),
    email: z.string().email({ message: "Invalid email address" }),
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

import React, { useTransition } from "react";
import { Calendar } from "../ui/calendar";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

const SignUpForm = () => {
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
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="email" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birthday</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="date" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        /> */}
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
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
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <span>
            By continuing, you accept the Terms & Conditions and Privacy Policy.
          </span>
          <Button type="submit">REGISTER</Button>
        </form>
      </Form>
      <span>
        Already have an account? <Link href={"/login"}>Login</Link>
      </span>
      <span>Powered by RAVING FANS</span>
    </div>
  );
};

export default SignUpForm;
