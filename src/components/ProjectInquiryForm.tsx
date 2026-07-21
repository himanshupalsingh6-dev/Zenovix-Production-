import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  User, Building2, Phone, Mail, MapPin, Briefcase, DollarSign,
  Clock, Upload, MessageCircle, Video, CheckCircle2, ArrowRight,
  ChevronLeft, X,
} from 'lucide-react';
import { CONTACT, getWhatsappHref } from '@/lib/site-config';

interface Props {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

interface FormData {
  // Step 1
  fullName: string;
  company: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;
  // Step 2
  service: string;
  projectType: string;
  budget: string;
  timeline: string;
  category: string;
  description: string;
  // Step 3 (file names for display)
  logoName: string;
  imagesName: string;
  docsName: string;
  // Step 4
  contactMethod: string;
  bestTime: string;
  privacyAccepted: boolean;
  termsAccepted: boolean;
}

const INITIAL: FormData = {
  fullName: '', company: '', phone: '', whatsapp: '', email: '', city: '', state: '',
  service: '', projectType: '', budget: '', timeline: '', category: '', description: '',
  logoName: '', imagesName: '', docsName: '',
  contactMethod: '', bestTime: '', privacyAccepted: false, termsAccepted: false,
};

const STEPS = ['Personal', 'Project', 'Files', 'Contact'];

const BUDGETS = ['Under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2,00,000', '₹2,00,000 – ₹5,00,000', '₹5,00,000+', 'Let\'s discuss'];
const TIMELINES = ['ASAP (< 2 weeks)', '1 month', '2–3 months', '3–6 months', 'Flexible'];
const CATEGORIES = ['Startup', 'Small Business', 'Mid-size Company', 'Enterprise', 'NGO / Non-profit', 'Individual / Freelancer'];
const CONTACT_METHODS = [
  { value: 'phone', label: 'Phone Call', icon: Phone },
  { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { value: 'email', label: 'Email', icon: Mail },
  { value: 'meet', label: 'Google Meet', icon: Video },
];
const BEST_TIMES = ['Morning (9 AM – 12 PM)', 'Afternoon (12 PM – 4 PM)', 'Evening (4 PM – 8 PM)'];

const SERVICES_LIST = [
  'Website Development', 'Android App Development', 'E-Commerce Development',
  'Custom Software Development', 'ERP & CRM Software', 'AI Automation',
  'WhatsApp Automation', 'Cloud Deployment', 'SEO Optimisation', 'UI/UX Design',
  'Website Maintenance', 'School Website', 'Hospital Management System',
  'Restaurant Website', 'Portfolio Website',
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <Label className="text-sm font-medium text-foreground">{children}</Label>;
}

function SelectBox({ value, onChange, options, placeholder }: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="">{placeholder ?? 'Select…'}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

export function ProjectInquiryForm({ open, onClose, defaultService = '' }: Props) {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>({ ...INITIAL, service: defaultService });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, value: string | boolean) =>
    setData((d) => ({ ...d, [key]: value }));

  const err = (key: keyof FormData, msg: string) =>
    setErrors((e) => ({ ...e, [key]: msg }));

  const clearErr = (key: keyof FormData) =>
    setErrors((e) => { const n = { ...e }; delete n[key]; return n; });

  function validateStep(s: number): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (s === 1) {
      if (!data.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!data.phone.trim()) newErrors.phone = 'Phone is required';
      else if (!/^\+?[0-9\s\-]{8,15}$/.test(data.phone.trim())) newErrors.phone = 'Enter a valid phone number';
      if (!data.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Enter a valid email address';
      if (!data.city.trim()) newErrors.city = 'City is required';
    }
    if (s === 2) {
      if (!data.service) newErrors.service = 'Please select a service';
      if (!data.budget) newErrors.budget = 'Please select a budget range';
      if (!data.description.trim()) newErrors.description = 'Please describe your project';
    }
    if (s === 4) {
      if (!data.contactMethod) newErrors.contactMethod = 'Select a contact method';
      if (!data.bestTime) newErrors.bestTime = 'Select your preferred time';
      if (!data.privacyAccepted) newErrors.privacyAccepted = 'Please accept the Privacy Policy';
      if (!data.termsAccepted) newErrors.termsAccepted = 'Please accept the Terms & Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function next() {
    if (!validateStep(step)) return;
    setDir(1);
    setStep((s) => Math.min(s + 1, 4));
  }

  function back() {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 1));
    setErrors({});
  }

  function buildWhatsAppMessage() {
    const lines = [
      '🚀 *New Project Inquiry — Zenovix Technologies*',
      '',
      '👤 *Personal Details*',
      `• Name: ${data.fullName}`,
      data.company ? `• Company: ${data.company}` : null,
      `• Phone: ${data.phone}`,
      data.whatsapp ? `• WhatsApp: ${data.whatsapp}` : null,
      `• Email: ${data.email}`,
      `• Location: ${data.city}${data.state ? ', ' + data.state : ''}`,
      '',
      '📋 *Project Details*',
      `• Service: ${data.service}`,
      data.projectType ? `• Project Type: ${data.projectType}` : null,
      `• Budget: ${data.budget}`,
      data.timeline ? `• Timeline: ${data.timeline}` : null,
      data.category ? `• Business Category: ${data.category}` : null,
      `• Description: ${data.description}`,
      '',
      '📞 *Preferred Contact*',
      `• Method: ${CONTACT_METHODS.find((m) => m.value === data.contactMethod)?.label ?? data.contactMethod}`,
      `• Best Time: ${data.bestTime}`,
    ].filter(Boolean).join('\n');
    return lines;
  }

  function submit() {
    if (!validateStep(4)) return;
    const message = buildWhatsAppMessage();
    window.open(getWhatsappHref(message), '_blank');
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setStep(1);
      setDir(1);
      setData({ ...INITIAL, service: defaultService });
      setErrors({});
      setSubmitted(false);
    }, 300);
  }

  function E({ field }: { field: keyof FormData }) {
    return errors[field] ? (
      <p className="text-xs text-destructive mt-1">{errors[field]}</p>
    ) : null;
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-full p-0 gap-0 overflow-hidden border-border">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">Start Your Project</DialogTitle>
            <p className="text-sm text-muted-foreground">Tell us about your vision — we'll get back within 24 hours.</p>
          </DialogHeader>

          {/* Step tabs */}
          <div className="flex gap-1 mt-4">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1 text-center">
                <div className={`text-xs font-semibold mb-1 transition-colors ${step === i + 1 ? 'text-primary' : step > i + 1 ? 'text-secondary' : 'text-muted-foreground'}`}>
                  {label}
                </div>
                <div className={`h-1 rounded-full transition-all duration-300 ${step === i + 1 ? 'bg-primary' : step > i + 1 ? 'bg-secondary' : 'bg-border'}`} />
              </div>
            ))}
          </div>
          <Progress value={(step / 4) * 100} className="h-0 mt-1" />
        </div>

        {/* Step content */}
        <div className="overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait" custom={dir}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 px-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">WhatsApp Opened!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Your project brief has been pre-filled in WhatsApp. Send it to connect with our team. We respond within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="p-6 space-y-4"
              >
                {/* ── Step 1: Personal ── */}
                {step === 1 && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <FieldLabel>Full Name *</FieldLabel>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Your full name"
                            value={data.fullName}
                            onChange={(e) => { set('fullName', e.target.value); clearErr('fullName'); }}
                            className="pl-9"
                          />
                        </div>
                        <E field="fullName" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>Company Name</FieldLabel>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input placeholder="Your company" value={data.company} onChange={(e) => set('company', e.target.value)} className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>Phone Number *</FieldLabel>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input placeholder="+91 98765 43210" value={data.phone} onChange={(e) => { set('phone', e.target.value); clearErr('phone'); }} className="pl-9" />
                        </div>
                        <E field="phone" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>WhatsApp Number</FieldLabel>
                        <div className="relative">
                          <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input placeholder="Same as phone?" value={data.whatsapp} onChange={(e) => set('whatsapp', e.target.value)} className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <FieldLabel>Email Address *</FieldLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input type="email" placeholder="you@company.com" value={data.email} onChange={(e) => { set('email', e.target.value); clearErr('email'); }} className="pl-9" />
                        </div>
                        <E field="email" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>City *</FieldLabel>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input placeholder="Your city" value={data.city} onChange={(e) => { set('city', e.target.value); clearErr('city'); }} className="pl-9" />
                        </div>
                        <E field="city" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>State</FieldLabel>
                        <Input placeholder="Your state" value={data.state} onChange={(e) => set('state', e.target.value)} />
                      </div>
                    </div>
                  </>
                )}

                {/* ── Step 2: Project ── */}
                {step === 2 && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 sm:col-span-2">
                        <FieldLabel>Service Required *</FieldLabel>
                        <SelectBox value={data.service} onChange={(v) => { set('service', v); clearErr('service'); }} options={SERVICES_LIST} placeholder="Choose a service…" />
                        <E field="service" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>Project Type</FieldLabel>
                        <Input placeholder="e.g. New build, Redesign, Migration" value={data.projectType} onChange={(e) => set('projectType', e.target.value)} />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>Budget Range *</FieldLabel>
                        <SelectBox value={data.budget} onChange={(v) => { set('budget', v); clearErr('budget'); }} options={BUDGETS} placeholder="Select budget…" />
                        <E field="budget" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>Timeline</FieldLabel>
                        <SelectBox value={data.timeline} onChange={(v) => set('timeline', v)} options={TIMELINES} placeholder="When do you need it?" />
                      </div>
                      <div className="space-y-1.5">
                        <FieldLabel>Business Category</FieldLabel>
                        <SelectBox value={data.category} onChange={(v) => set('category', v)} options={CATEGORIES} placeholder="Business type…" />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <FieldLabel>Project Description *</FieldLabel>
                        <Textarea
                          placeholder="Describe your project, goals, existing systems, and any specific requirements…"
                          value={data.description}
                          onChange={(e) => { set('description', e.target.value); clearErr('description'); }}
                          rows={4}
                          className="resize-none"
                        />
                        <E field="description" />
                      </div>
                    </div>
                  </>
                )}

                {/* ── Step 3: Files ── */}
                {step === 3 && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Upload any relevant files to help us understand your project better. All fields are optional.</p>
                    {[
                      { key: 'logoName' as keyof FormData, label: 'Company Logo', accept: 'image/*', hint: 'PNG, JPG, SVG' },
                      { key: 'imagesName' as keyof FormData, label: 'Reference Images', accept: 'image/*', hint: 'Screenshots, mockups, inspiration' },
                      { key: 'docsName' as keyof FormData, label: 'Documents / PDFs', accept: '.pdf,.doc,.docx,.ppt,.pptx', hint: 'Requirements, briefs, presentations' },
                    ].map(({ key, label, accept, hint }) => (
                      <label key={key} className="block cursor-pointer">
                        <span className="text-sm font-medium text-foreground block mb-1.5">{label}</span>
                        <div className={`flex items-center gap-3 p-4 rounded-xl border-2 border-dashed transition-colors ${data[key] ? 'border-secondary/50 bg-secondary/5' : 'border-border hover:border-primary/40 hover:bg-primary/5'}`}>
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Upload className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            {data[key] ? (
                              <span className="text-sm font-medium text-secondary truncate block">{String(data[key])}</span>
                            ) : (
                              <>
                                <span className="text-sm font-medium text-foreground">Click to upload</span>
                                <span className="text-xs text-muted-foreground block">{hint}</span>
                              </>
                            )}
                          </div>
                          {data[key] && (
                            <button
                              type="button"
                              onClick={(e) => { e.preventDefault(); set(key, ''); }}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <input
                          type="file"
                          accept={accept}
                          multiple
                          className="sr-only"
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files?.length) set(key, Array.from(files).map((f) => f.name).join(', '));
                          }}
                        />
                      </label>
                    ))}
                    <p className="text-xs text-muted-foreground">Files are shared with your WhatsApp message as reference information.</p>
                  </div>
                )}

                {/* ── Step 4: Contact Preferences ── */}
                {step === 4 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <FieldLabel>Preferred Contact Method *</FieldLabel>
                      <div className="grid grid-cols-2 gap-2">
                        {CONTACT_METHODS.map(({ value, label, icon: Icon }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => { set('contactMethod', value); clearErr('contactMethod'); }}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border-2 transition-all text-left ${data.contactMethod === value ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-card text-foreground hover:border-primary/40'}`}
                          >
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="text-sm font-medium">{label}</span>
                          </button>
                        ))}
                      </div>
                      <E field="contactMethod" />
                    </div>

                    <div className="space-y-2">
                      <FieldLabel>Best Time to Reach You *</FieldLabel>
                      <div className="flex flex-col gap-2">
                        {BEST_TIMES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => { set('bestTime', t); clearErr('bestTime'); }}
                            className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${data.bestTime === t ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/40'}`}
                          >
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${data.bestTime === t ? 'border-primary bg-primary' : 'border-border'}`}>
                              {data.bestTime === t && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                            </div>
                            <span className={`text-sm font-medium ${data.bestTime === t ? 'text-primary' : 'text-foreground'}`}>{t}</span>
                          </button>
                        ))}
                      </div>
                      <E field="bestTime" />
                    </div>

                    <div className="space-y-3 pt-2 border-t border-border">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={data.privacyAccepted}
                          onCheckedChange={(v) => { set('privacyAccepted', !!v); clearErr('privacyAccepted'); }}
                          className="mt-0.5"
                        />
                        <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the <span className="text-primary">Privacy Policy</span> and consent to Zenovix Technologies processing my data.
                        </label>
                      </div>
                      <E field="privacyAccepted" />
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={data.termsAccepted}
                          onCheckedChange={(v) => { set('termsAccepted', !!v); clearErr('termsAccepted'); }}
                          className="mt-0.5"
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the <span className="text-primary">Terms & Conditions</span>.
                        </label>
                      </div>
                      <E field="termsAccepted" />
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer navigation */}
        {!submitted && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/20">
            <button
              onClick={back}
              disabled={step === 1}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-all disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            <div className="flex items-center gap-2">
              {STEPS.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${step === i + 1 ? 'w-6 bg-primary' : step > i + 1 ? 'w-3 bg-secondary' : 'w-3 bg-border'}`} />
              ))}
            </div>

            {step < 4 ? (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                <MessageCircle className="w-4 h-4" /> Send via WhatsApp
              </button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
