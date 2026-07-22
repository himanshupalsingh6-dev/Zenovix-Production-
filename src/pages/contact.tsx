import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { MapPin, Mail, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, getWhatsappHref, getMailtoHref } from "@/lib/site-config";

const formSchema = z.object({
  name:     z.string().min(2, { message: "Name must be at least 2 characters." }),
  email:    z.string().email({ message: "Invalid email address." }),
  phone:    z.string().min(6, { message: "Enter a valid phone number." }),
  company:  z.string().optional(),
  whatsapp: z.string().optional(),
  service:  z.string().min(1, { message: "Please select a service." }),
  budget:   z.string().optional(),
  deadline: z.string().optional(),
  message:  z.string().min(10, { message: "Message must be at least 10 characters." }),
  // Honeypot: real users never see or fill this field.
  website:  z.string().max(0, { message: "Invalid submission." }).optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", phone: "", company: "",
      whatsapp: "", service: "", budget: "", deadline: "", message: "", website: "",
    },
  });

  
async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Failed to send");
    }

    setIsSubmitted(true);

    toast({
      title: "Message Sent Successfully",
      description: "We'll contact you soon.",
    });

    form.reset();
  } catch (err) {
    toast({
      title: "Submission Failed",
      description: "Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
}

const inputCls = "w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Start a <span className="text-primary">Project</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss your requirements, timeline, and how we can engineer growth for your business.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form to schedule a technical consultation. No aggressive sales pitch, just a realistic discussion about architecture and timelines.
                </p>
              </div>

              <div className="space-y-6">
                <a href={getMailtoHref("Project inquiry")} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Mail className="w-5 h-5" /></div>
                  <div><div className="text-sm font-semibold text-foreground">Email Us</div><div className="text-muted-foreground">{CONTACT.email}</div></div>
                </a>
                <a href={CONTACT.primaryPhoneHref} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Phone className="w-5 h-5" /></div>
                  <div><div className="text-sm font-semibold text-foreground">Call Us</div><div className="text-muted-foreground">{CONTACT.primaryPhone}</div></div>
                </a>
                <a href={getWhatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></div>
                  <div><div className="text-sm font-semibold text-foreground">WhatsApp</div><div className="text-muted-foreground">{CONTACT.whatsappNumber}</div></div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground"><MapPin className="w-5 h-5" /></div>
                  <div><div className="text-sm font-semibold text-foreground">Office</div><div className="text-muted-foreground text-sm">{CONTACT.addressShort}</div></div>
                </div>
              </div>

              <div className="h-56 rounded-2xl border border-border overflow-hidden">
                <iframe title="Zenovix Technologies office location" src={CONTACT.mapsEmbedSrc} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><CheckCircle2 className="w-8 h-8" /></div>
                    <h3 className="text-2xl font-bold text-foreground">Thank you!</h3>
                    <p className="text-muted-foreground max-w-sm">Your inquiry has been received. Our team will get back to you within 24 hours.</p>
                    <button type="button" onClick={() => setIsSubmitted(false)} className="text-primary font-medium hover:underline">Submit another inquiry</button>
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" type="text" tabIndex={-1} autoComplete="off" {...form.register("website")} />
                    </div>

                    {/* Name + Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Full Name *</label>
                        <input {...form.register("name")} className={inputCls} placeholder="John Doe" />
                        {form.formState.errors.name && <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Email Address *</label>
                        <input {...form.register("email")} className={inputCls} placeholder="john@company.com" />
                        {form.formState.errors.email && <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>}
                      </div>
                    </div>

                    {/* Phone + WhatsApp */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                        <input {...form.register("phone")} className={inputCls} placeholder="+91 98765 43210" />
                        {form.formState.errors.phone && <p className="text-destructive text-xs">{form.formState.errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">WhatsApp Number</label>
                        <input {...form.register("whatsapp")} className={inputCls} placeholder="+91 98765 43210 (if different)" />
                      </div>
                    </div>

                    {/* Company + Service */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Company Name</label>
                        <input {...form.register("company")} className={inputCls} placeholder="Acme Corp" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Service Required *</label>
                        <select {...form.register("service")} className={inputCls}>
                          <option value="">Select a service...</option>
                          <option value="web">Website Development</option>
                          <option value="app">Mobile App Development</option>
                          <option value="custom">Custom Software</option>
                          <option value="ecommerce">E-Commerce</option>
                          <option value="whatsapp">WhatsApp Automation</option>
                          <option value="seo">SEO / Cloud</option>
                          <option value="other">Other</option>
                        </select>
                        {form.formState.errors.service && <p className="text-destructive text-xs">{form.formState.errors.service.message}</p>}
                      </div>
                    </div>

                    {/* Budget + Deadline */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Budget</label>
                        <select {...form.register("budget")} className={inputCls}>
                          <option value="">Select a range...</option>
                          <option value="under-25k">Under ₹25,000</option>
                          <option value="25k-1l">₹25,000 – ₹1,00,000</option>
                          <option value="1l-5l">₹1,00,000 – ₹5,00,000</option>
                          <option value="5l-plus">₹5,00,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Project Deadline</label>
                        <input {...form.register("deadline")} className={inputCls} placeholder="e.g. 3 months, ASAP, Jan 2026" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Project Details *</label>
                      <textarea {...form.register("message")} className="w-full min-h-[150px] p-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your project goals, timeline, and budget..." />
                      {form.formState.errors.message && <p className="text-destructive text-xs">{form.formState.errors.message.message}</p>}
                    </div>

                    <button type="submit" disabled={isLoading} className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
                      {isLoading ? "Sending..." : "Submit Inquiry"}
                    </button>
                    <p className="text-xs text-muted-foreground text-center">By submitting this form, you agree to our Privacy Policy. We never spam.</p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
