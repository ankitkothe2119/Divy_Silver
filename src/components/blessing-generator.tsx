"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { murtis } from "@/lib/murtis";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getBlessingAction } from "@/app/actions";
import { Skeleton } from "@/components/ui/skeleton";

const blessingFormSchema = z.object({
  murtiName: z.string({
    required_error: "Please select a Murti.",
  }),
  userName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  userIntention: z.string().min(10, {
    message: "Please share a bit more about your intention (at least 10 characters).",
  }),
});

type BlessingFormValues = z.infer<typeof blessingFormSchema>;

export function BlessingGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [blessing, setBlessing] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<BlessingFormValues>({
    resolver: zodResolver(blessingFormSchema),
    defaultValues: {
      userName: "",
      userIntention: "",
    },
  });

  async function onSubmit(data: BlessingFormValues) {
    setIsLoading(true);
    setBlessing(null);
    const result = await getBlessingAction(data);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    } else if (result.blessing) {
      setBlessing(result.blessing);
    }
  }

  return (
    <section id="blessing" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-lg border-border/60">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
               <Sparkles className="h-8 w-8 text-primary"/>
            </div>
            <CardTitle className="text-3xl font-headline">AI-Powered Blessing</CardTitle>
            <CardDescription className="text-lg mt-2 text-muted-foreground">
              Receive a personalized spiritual blessing based on your chosen Murti and intention.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="murtiName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select a Murti</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a divine form..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {murtis.map((murti) => (
                            <SelectItem key={murti.id} value={murti.name}>
                              {murti.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userIntention"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Intention or Prayer</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your intention for peace, prosperity, or guidance..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full font-semibold" disabled={isLoading}>
                  {isLoading ? "Generating..." : "Receive Your Blessing"}
                </Button>
              </form>
            </Form>

            {isLoading && (
               <div className="mt-8 space-y-4">
                  <p className="text-center text-muted-foreground">Generating your personal blessing...</p>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
               </div>
            )}

            {blessing && !isLoading && (
              <div className="mt-8 p-6 bg-secondary rounded-lg border border-primary/20">
                <h3 className="font-headline text-xl text-primary mb-2">A Divine Message for You:</h3>
                <p className="whitespace-pre-wrap font-body text-foreground/90">{blessing}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
