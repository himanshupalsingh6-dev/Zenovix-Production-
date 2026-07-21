import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard corporate website might take 3-4 weeks, an E-commerce platform 6-8 weeks, while custom software or native mobile apps can take 2-4 months. We provide a detailed timeline during the planning phase."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. We offer comprehensive maintenance and support packages that cover security updates, performance monitoring, bug fixes, and feature enhancements to ensure your digital product stays competitive."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both fixed-price contracts for well-defined projects and retainer models for ongoing development. Since every project is unique, we provide customized quotes after a detailed requirement discussion to ensure accurate estimations."
  },
  {
    question: "Do you use templates or custom designs?",
    answer: "We build custom solutions tailored to your brand and business goals. While we leverage robust modern frameworks to accelerate development, the UI/UX design and architecture are bespoke to ensure you stand out in your market."
  },
  {
    question: "Will I own the source code?",
    answer: "Yes. Upon final payment and project completion, full intellectual property rights and source code ownership are transferred to you. We hold no hostage."
  },
  {
    question: "What industries do you work with?",
    answer: "We have experience across multiple sectors including Healthcare (Hospital systems), Education (School portals), Retail (E-commerce), Hospitality (Restaurant ordering systems), and B2B SaaS. Our engineering principles apply effectively across all domains."
  },
  {
    question: "How do you handle project communication?",
    answer: "We assign a dedicated project manager who maintains transparent communication through weekly status updates, Slack/Teams channels, and milestone reviews. You will have a clear view of progress at all times."
  }
];

export default function FAQ() {
  const [query, setQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(query.toLowerCase()) || 
    faq.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border text-center">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Clear answers about our process, pricing, and technical approach.
          </p>
          
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search for answers..." 
              className="pl-12 h-14 rounded-full bg-background border-border shadow-sm text-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl">
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
