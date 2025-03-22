import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertRsvpSchema } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type FormValues = z.infer<typeof insertRsvpSchema>;

const RSVPForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(insertRsvpSchema),
    defaultValues: {
      name: "",
      attending: undefined,
      guests: 1,
    },
  });

  const rsvpMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/rsvp", data);
      return response.json();
    },
    onSuccess: () => {
      setFormSubmitted(true);
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response!",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem submitting your RSVP.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    rsvpMutation.mutate(data);
  };

  if (formSubmitted) {
    return (
      <div className="bg-[#d4e5d2] p-4 rounded-lg mb-6 animate-in fade-in">
        <p className="font-sans text-gray-700">Thank you for your response! We look forward to celebrating with you.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto text-left">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm text-gray-600 font-sans mb-1">Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-3 py-2 border border-[#d4e5d2] rounded font-sans text-sm focus:border-[#a9be98] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="attending"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm text-gray-600 font-sans mb-1">Will you attend?</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full px-3 py-2 border border-[#d4e5d2] rounded font-sans text-sm focus:border-[#a9be98] focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Happily Attending</SelectItem>
                  <SelectItem value="no">Regretfully Declining</SelectItem>
                  <SelectItem value="maybe">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm text-gray-600 font-sans mb-1">Number of Guests (including yourself)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min={1}
                  max={5}
                  onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                  className="w-full px-3 py-2 border border-[#d4e5d2] rounded font-sans text-sm focus:border-[#a9be98] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button 
            type="submit"
            className="px-6 py-3 bg-[#a9be98] text-white font-sans rounded hover:bg-[#d4e5d2] hover:text-gray-700 transition duration-300"
            disabled={rsvpMutation.isPending}
          >
            {rsvpMutation.isPending ? "Submitting..." : "Submit RSVP"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RSVPForm;
