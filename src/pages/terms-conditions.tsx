import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FileText, ChevronRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const vp = { once: true, margin: '-60px' };

const sections = [
  {
    number: '1',
    title: 'Our Services',
    body: 'Zenovix Technologies provides professional IT services including:',
    items: [
      'Website Development', 'Android App Development', 'E-Commerce Development',
      'Custom Software Development', 'ERP Solutions', 'CRM Solutions',
      'AI Automation', 'WhatsApp Automation', 'UI/UX Design',
      'Website Maintenance', 'Cloud Deployment', 'SEO Services', 'Digital Marketing',
    ],
  },
  {
    number: '2',
    title: 'Project Agreement',
    body: 'Every project begins only after:',
    items: ['Requirement discussion', 'Scope confirmation', 'Timeline approval', 'Pricing approval'],
  },
  {
    number: '3',
    title: 'Payments',
    body: 'Projects may require an advance payment before work begins. Remaining payments are made according to agreed milestones. Delayed payments may delay project delivery.',
  },
  {
    number: '4',
    title: 'Client Responsibilities',
    body: 'Clients agree to:',
    items: ['Provide accurate information', 'Submit required content', 'Review work on time', 'Make payments as agreed', 'Provide timely feedback'],
  },
  {
    number: '5',
    title: 'Intellectual Property',
    body: 'After full payment, ownership of the completed project transfers to the client. However, ownership does not include:',
    items: ['Third-party libraries', 'Open-source software', 'Licensed assets', 'Purchased templates', 'External APIs'],
    footer: 'Zenovix Technologies may showcase completed projects in its portfolio unless otherwise agreed in writing.',
  },
  {
    number: '6',
    title: 'Confidentiality',
    body: 'All client information and project details will remain confidential. We will never disclose confidential information without permission unless required by law.',
  },
  {
    number: '7',
    title: 'Revisions',
    body: 'Project revisions are provided according to the agreed project scope. Additional revisions beyond the agreed scope may incur additional charges.',
  },
  {
    number: '8',
    title: 'Project Delays',
    body: 'Zenovix Technologies is not responsible for delays caused by:',
    items: ['Late client responses', 'Delayed content', 'Third-party service failures', 'Force majeure events'],
  },
  {
    number: '9',
    title: 'Third-Party Services',
    body: 'Projects may integrate third-party services such as:',
    items: ['Google APIs', 'Firebase', 'Payment Gateways', 'Hosting Providers', 'Cloud Services'],
    footer: 'We are not responsible for third-party outages or policy changes.',
  },
  {
    number: '10',
    title: 'Warranty',
    body: 'We provide support for bugs related to our own development during the agreed support period. The warranty does not cover:',
    items: ['Client modifications', 'Third-party updates', 'Hosting issues', 'Unauthorized access'],
  },
  {
    number: '11',
    title: 'Limitation of Liability',
    body: 'Zenovix Technologies shall not be liable for:',
    items: ['Indirect damages', 'Loss of profits', 'Data loss', 'Business interruption'],
    footer: 'Our total liability shall not exceed the amount paid for the project.',
  },
  {
    number: '12',
    title: 'Acceptable Use',
    body: 'Users must not:',
    items: ['Attempt unauthorized access', 'Upload malicious software', 'Distribute spam', 'Violate applicable laws', 'Damage website functionality'],
  },
  {
    number: '13',
    title: 'Termination',
    body: 'We reserve the right to suspend or terminate services if these Terms are violated.',
  },
  {
    number: '14',
    title: 'Governing Law',
    body: 'These Terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of the courts of Kasganj, Uttar Pradesh.',
  },
  {
    number: '15',
    title: 'Updates',
    body: 'We reserve the right to update these Terms & Conditions at any time. The latest version will always be published on this page.',
  },
];

export default function TermsConditions() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.08),transparent_60%)]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Terms &amp; <span className="text-primary">Conditions</span>
            </h1>
          </div>
          <p className="text-muted-foreground mt-4">
            <span className="font-semibold text-foreground">Effective Date:</span> July 17, 2026
          </p>
          <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Welcome to <span className="font-semibold text-foreground">Zenovix Technologies</span>. By accessing or using our website and services, you agree to these Terms & Conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="space-y-8">
            {sections.map((sec) => (
              <motion.div
                key={sec.number}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-7 md:p-9 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-accent">{sec.number}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{sec.title}</h2>
                </div>

                {sec.body && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{sec.body}</p>
                )}

                {'items' in sec && sec.items && (
                  <div className="flex flex-wrap gap-2">
                    {sec.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 bg-muted border border-border rounded-full text-sm text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {sec.footer && (
                  <p className="text-muted-foreground text-sm mt-4 italic">{sec.footer}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact block */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="mt-10 p-8 rounded-2xl bg-accent/5 border border-accent/20"
          >
            <h2 className="text-xl font-bold text-foreground mb-5">Contact Information</h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">Zenovix Technologies</p>
              <p>📍 Near Soron Gate, Kasganj, Uttar Pradesh – 207123</p>
              <p>📧 <a href="mailto:Support.zenovix@gmail.com" className="text-primary hover:underline">Support.zenovix@gmail.com</a></p>
              <p>📞 <a href="tel:+919258730561" className="text-primary hover:underline">+91 9258730561</a></p>
              <p>💬 WhatsApp: <a href="https://wa.me/919997874502" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+91 9997874502</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
