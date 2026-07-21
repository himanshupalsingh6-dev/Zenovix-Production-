import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Shield, ChevronRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const vp = { once: true, margin: '-60px' };

const sections = [
  {
    number: '1',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        items: ['Full Name', 'Company Name', 'Business Name', 'Email Address', 'Phone Number', 'WhatsApp Number', 'City', 'State', 'Country'],
      },
      {
        subtitle: 'Project Information',
        items: ['Service Required', 'Project Description', 'Budget', 'Timeline', 'Uploaded Files', 'Business Requirements'],
      },
      {
        subtitle: 'Technical Information',
        items: ['IP Address', 'Browser Type', 'Device Information', 'Operating System', 'Referring Website', 'Pages Visited', 'Date & Time of Visit'],
      },
    ],
  },
  {
    number: '2',
    title: 'How We Use Your Information',
    items: [
      'Respond to your inquiries',
      'Prepare project quotations',
      'Deliver our services',
      'Provide customer support',
      'Send project updates',
      'Improve our website',
      'Improve our services',
      'Prevent fraud and misuse',
      'Communicate regarding your project',
    ],
  },
  {
    number: '3',
    title: 'Communication',
    body: 'By submitting a form on our website, you agree that Zenovix Technologies may contact you via:',
    items: ['Phone Call', 'WhatsApp', 'Email', 'SMS (if applicable)', 'Video Meeting'],
    footer: 'regarding your inquiry or project.',
  },
  {
    number: '4',
    title: 'File Uploads',
    body: 'Any files uploaded through our website are used only for project evaluation and development. Examples include:',
    items: ['Logos', 'Images', 'PDFs', 'Wireframes', 'Documents'],
    footer: 'Your files remain confidential.',
  },
  {
    number: '5',
    title: 'Data Security',
    body: 'We implement industry-standard security practices including:',
    items: ['SSL Encryption', 'Secure Database', 'Password Protection', 'Access Control', 'Regular Security Updates'],
    footer: 'Although we strive to protect your data, no internet transmission can be guaranteed to be completely secure.',
  },
  {
    number: '6',
    title: 'Cookies',
    body: 'Our website may use cookies to:',
    items: ['Improve performance', 'Remember preferences', 'Analyze website traffic', 'Enhance user experience'],
    footer: 'You may disable cookies through your browser settings.',
  },
  {
    number: '7',
    title: 'Third-Party Services',
    body: 'Our website may integrate trusted third-party services including:',
    items: ['Google Analytics', 'Google Maps', 'Firebase', 'MongoDB Atlas', 'Cloudinary', 'Razorpay', 'Email Service Providers'],
    footer: 'These services operate under their own privacy policies.',
  },
  {
    number: '8',
    title: 'Data Sharing',
    body: 'We do not sell or rent your personal information. Information may only be shared:',
    items: ['When legally required', 'For project delivery', 'With trusted service providers'],
  },
  {
    number: '9',
    title: 'Data Retention',
    body: 'We retain information only as long as necessary for:',
    items: ['Project completion', 'Customer support', 'Legal compliance', 'Business records'],
  },
  {
    number: '10',
    title: 'Your Rights',
    body: 'You may request to:',
    items: ['Access your data', 'Correct your information', 'Delete your information', 'Withdraw consent', 'Stop promotional communications'],
  },
  {
    number: '11',
    title: "Children's Privacy",
    body: 'Our services are not intended for individuals under the age of 18. We do not knowingly collect information from minors.',
  },
  {
    number: '12',
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. The latest version will always be available on this page.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Privacy Policy</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
          </div>
          <p className="text-muted-foreground mt-4">
            <span className="font-semibold text-foreground">Effective Date:</span> July 17, 2026
          </p>
          <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Welcome to <span className="font-semibold text-foreground">Zenovix Technologies</span>. We respect your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website or services.
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
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{sec.number}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{sec.title}</h2>
                </div>

                {sec.body && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{sec.body}</p>
                )}

                {/* Nested subsections (like section 1) */}
                {'content' in sec && sec.content && (
                  <div className="space-y-5">
                    {sec.content.map((sub) => (
                      <div key={sub.subtitle}>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">{sub.subtitle}</h3>
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map((item) => (
                            <span key={item} className="px-3 py-1.5 bg-muted border border-border rounded-full text-sm text-muted-foreground">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Flat item list */}
                {'items' in sec && sec.items && !('content' in sec) && (
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
            className="mt-10 p-8 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <h2 className="text-xl font-bold text-foreground mb-5">Contact Us</h2>
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
