import {
  Globe, Smartphone, ShoppingCart, Code, Database, Cloud, Search,
  MessageSquare, Bot, Palette, Shield, BookOpen, Heart, Utensils,
  Camera, BarChart, Lock, Zap, Users, Settings, Network, Cpu,
  FileText, Rocket, Gauge, GitBranch, Layout, TrendingUp, Activity,
  MapPin, Bell, CreditCard, RefreshCw, Layers, CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type IllustrationType = 'browser' | 'mobile' | 'dashboard' | 'ai' | 'chat' | 'cloud' | 'analytics';

export interface ServiceTech {
  name: string;
  color: string;
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  industries: string[];
  features: ServiceFeature[];
  tech: ServiceTech[];
  faqs: ServiceFAQ[];
  illustration: IllustrationType;
}

export const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder, NexaRetail',
    rating: 5,
    text: 'Zenovix delivered our e-commerce platform in record time. The quality is exceptional — our conversion rate jumped 40% in the first month.',
  },
  {
    name: 'Priya Mehta',
    role: 'Director, HealthFirst Clinics',
    rating: 5,
    text: 'The hospital management system they built transformed our operations. Patient appointment bookings went fully digital and staff efficiency improved dramatically.',
  },
  {
    name: 'Arun Kapoor',
    role: 'CEO, LogiTrans India',
    rating: 5,
    text: 'The custom ERP system handles 10,000+ shipments daily without a hiccup. Zenovix understood our complex workflow perfectly and delivered exactly what we needed.',
  },
  {
    name: 'Sneha Verma',
    role: 'Co-Founder, SpiceRoute Restaurant',
    rating: 5,
    text: 'Our online ordering system has generated ₹8L in revenue in the first quarter alone. Zero commissions, full control — best investment we made.',
  },
  {
    name: 'Mohammed Raza',
    role: 'Head of Growth, FinEdge',
    rating: 5,
    text: 'The WhatsApp automation reduced our customer support load by 70%. Leads are now qualified automatically and our sales team focuses only on closures.',
  },
  {
    name: 'Kavita Singh',
    role: 'Principal, Bright Future Academy',
    rating: 5,
    text: 'Our school website modernized our parent communication completely. The admission portal processed 500+ applications without any issues.',
  },
];

export const WHY_ZENOVIX = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Every project follows industry-best security practices — SSL, data encryption, OWASP compliance, and regular vulnerability audits.',
  },
  {
    icon: Rocket,
    title: 'On-Time Delivery',
    description: 'We follow agile sprints with transparent milestones. You always know exactly where your project stands, and we deliver on schedule.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'You get a dedicated project manager, developer, and QA engineer. Direct communication, no outsourcing, no hidden handoffs.',
  },
  {
    icon: RefreshCw,
    title: 'Post-Launch Support',
    description: '90-day free support after every launch. We stand behind our work and ensure everything performs perfectly in production.',
  },
  {
    icon: Gauge,
    title: 'Performance-First',
    description: 'Every delivery targets Lighthouse scores above 95. Sub-second load times and Core Web Vitals excellence are non-negotiable.',
  },
  {
    icon: GitBranch,
    title: '5+ Years Experience',
    description: '40+ delivered projects across healthcare, retail, education, logistics, and SaaS. We bring battle-tested patterns to every engagement.',
  },
];

// ─── Tech color map ──────────────────────────────────────────────
function tc(name: string, shade: string): ServiceTech {
  const map: Record<string, string> = {
    cyan:    'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    green:   'text-green-400 border-green-400/30 bg-green-400/10',
    blue:    'text-blue-400 border-blue-400/30 bg-blue-400/10',
    emerald: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    orange:  'text-orange-400 border-orange-400/30 bg-orange-400/10',
    indigo:  'text-indigo-400 border-indigo-400/30 bg-indigo-400/10',
    yellow:  'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    sky:     'text-sky-400 border-sky-400/30 bg-sky-400/10',
    pink:    'text-pink-400 border-pink-400/30 bg-pink-400/10',
    violet:  'text-violet-400 border-violet-400/30 bg-violet-400/10',
    red:     'text-red-400 border-red-400/30 bg-red-400/10',
    teal:    'text-teal-400 border-teal-400/30 bg-teal-400/10',
    gray:    'text-gray-300 border-gray-300/30 bg-gray-300/10',
    purple:  'text-purple-400 border-purple-400/30 bg-purple-400/10',
  };
  return { name, color: map[shade] ?? map.gray };
}

// ─── Service definitions ─────────────────────────────────────────
export const servicesData: ServiceData[] = [
  // ── 1. Website Development ──────────────────────────────────────
  {
    slug: 'website-development',
    title: 'Website Development',
    subtitle: 'Blazing-fast, SEO-optimised, enterprise-grade websites that convert visitors into clients.',
    description:
      'We architect and develop world-class websites using modern frameworks, performance-first engineering, and conversion-centred design. From corporate presence to complex web applications, every line of code is written for speed, scale, and search dominance.',
    benefits: [
      'Sub-second load times on all devices',
      'SEO architecture built from the ground up',
      'Responsive design across all breakpoints',
      'CMS integration for effortless content updates',
      'Accessibility (WCAG 2.1) compliant',
      'Scalable to millions of monthly visitors',
    ],
    industries: ['Corporate', 'SaaS', 'Agencies', 'B2B', 'NGO', 'Government', 'Startups'],
    features: [
      { icon: Globe, title: 'Custom Architecture', description: 'Hand-crafted front-ends built with React or Next.js — no page-builder limitations.' },
      { icon: Gauge, title: 'Core Web Vitals', description: 'We engineer every page to score 95+ on Lighthouse across all four metrics.' },
      { icon: Search, title: 'Technical SEO', description: 'Schema markup, canonical tags, sitemap, meta hierarchy — all out of the box.' },
      { icon: Shield, title: 'Security Hardening', description: 'HTTPS, CSP headers, XSS protection, and regular dependency audits.' },
      { icon: Settings, title: 'CMS Integration', description: 'Headless CMS (Sanity, Contentful, or Strapi) for non-technical content control.' },
      { icon: BarChart, title: 'Analytics & A/B', description: 'GA4, Hotjar, and A/B testing infrastructure wired in from day one.' },
    ],
    tech: [
      tc('React', 'cyan'), tc('Next.js', 'gray'), tc('TypeScript', 'blue'),
      tc('Tailwind CSS', 'teal'), tc('Node.js', 'green'), tc('Vercel', 'gray'),
    ],
    faqs: [
      { question: 'How long does a website project take?', answer: 'Most corporate websites take 3–6 weeks from requirements sign-off to launch. Complex web apps with custom features can take 8–12 weeks.' },
      { question: 'Will my website work on mobile?', answer: 'Absolutely. We build mobile-first — every layout is tested across 15+ device sizes and browsers before delivery.' },
      { question: 'Can I update the website myself after launch?', answer: 'Yes. If you opt for a CMS integration, you can add pages, update content, and publish blogs without touching code.' },
      { question: 'Do you handle hosting and domain setup?', answer: 'Yes — we manage deployment to Vercel, AWS, or your preferred host and can assist with domain configuration and DNS setup.' },
      { question: 'What happens after the website goes live?', answer: 'You receive 90 days of free post-launch support covering bug fixes, content updates, and minor improvements.' },
    ],
    illustration: 'browser',
  },

  // ── 2. Android App Development ──────────────────────────────────
  {
    slug: 'android-app-development',
    title: 'Android App Development',
    subtitle: 'Native-quality mobile applications that engage users, retain customers, and generate revenue.',
    description:
      'We build polished Android and cross-platform applications using Flutter and React Native. From consumer apps to enterprise tools, our mobile engineering team delivers Play Store-ready products with offline capability, push notifications, and seamless hardware integration.',
    benefits: [
      'Offline-first architecture for unreliable networks',
      'Push notifications and real-time features',
      'Play Store deployment and listing optimisation',
      'Smooth 60fps animations and interactions',
      'Payment gateway integration (Razorpay, PhonePe)',
      'Deep linking and social login out of the box',
    ],
    industries: ['Retail', 'Healthcare', 'Logistics', 'Education', 'Food & Beverage', 'Fintech', 'Startups'],
    features: [
      { icon: Smartphone, title: 'Cross-Platform', description: 'Single codebase in Flutter targeting Android and iOS — one cost, two platforms.' },
      { icon: Bell, title: 'Push Notifications', description: 'FCM-powered push notifications with rich media, deep links, and segmentation.' },
      { icon: MapPin, title: 'Location Services', description: 'Real-time GPS tracking, geofencing, and Google Maps integration.' },
      { icon: CreditCard, title: 'Payments', description: 'Razorpay, PhonePe, UPI, and Stripe — PCI-compliant payment flows built in.' },
      { icon: Database, title: 'Offline Mode', description: 'Local SQLite cache so the app works perfectly without internet connectivity.' },
      { icon: Shield, title: 'App Security', description: 'Certificate pinning, biometric auth, and encrypted local storage.' },
    ],
    tech: [
      tc('Flutter', 'sky'), tc('Dart', 'blue'), tc('Firebase', 'yellow'),
      tc('Node.js', 'green'), tc('MongoDB', 'emerald'), tc('Google Maps', 'orange'),
    ],
    faqs: [
      { question: 'Will the app work on both Android and iPhone?', answer: 'Yes. We use Flutter which produces native-quality apps for both Android and iOS from a single codebase, cutting your development cost in half.' },
      { question: 'How long does app development take?', answer: 'A standard app with 8–12 screens typically takes 8–12 weeks. Complex apps with custom backends or real-time features take 14–20 weeks.' },
      { question: 'Do you publish the app to the Play Store?', answer: 'Yes — we handle APK building, Play Store listing, screenshots, descriptions, and submission. We guide you through the review process.' },
      { question: 'Can the app work without internet?', answer: 'Yes. We implement offline-first architecture with local caching so core features work without a network connection.' },
      { question: 'How do you handle app updates after launch?', answer: 'We provide a 90-day support period. For ongoing updates, we offer flexible monthly retainer plans.' },
    ],
    illustration: 'mobile',
  },

  // ── 3. E-Commerce Development ───────────────────────────────────
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    subtitle: 'Custom online stores engineered for maximum conversion, zero commission, and complete control.',
    description:
      'We build high-converting e-commerce platforms that your team fully owns. No per-sale commissions, no platform lock-in. Custom product catalogues, multi-gateway payments, inventory management, and analytics dashboards — all built for your exact business model.',
    benefits: [
      'Zero per-transaction commissions',
      'Multi-gateway payment support (UPI, Cards, Wallets)',
      'Real-time inventory syncing',
      'Abandoned cart recovery automation',
      'SEO-optimised product pages',
      'Mobile-first checkout flow',
    ],
    industries: ['Retail', 'Fashion', 'Electronics', 'FMCG', 'Handicrafts', 'D2C Brands', 'Wholesale'],
    features: [
      { icon: ShoppingCart, title: 'Frictionless Checkout', description: 'Single-page checkout with address autofill, saved cards, and one-click reorder.' },
      { icon: CreditCard, title: 'Multi-Payment Gateway', description: 'Razorpay, PhonePe, Stripe, UPI, COD — every payment method, fully integrated.' },
      { icon: BarChart, title: 'Analytics Dashboard', description: 'Revenue, AOV, conversion funnel, and product performance — all in one view.' },
      { icon: Bell, title: 'Cart Abandonment', description: 'Automated email and WhatsApp reminders that recover 20–35% of abandoned carts.' },
      { icon: Search, title: 'Product SEO', description: 'Schema markup, rich snippets, and sitemap generation for every product page.' },
      { icon: Database, title: 'Inventory Management', description: 'Real-time stock tracking, low-stock alerts, and multi-warehouse support.' },
    ],
    tech: [
      tc('Next.js', 'gray'), tc('React', 'cyan'), tc('Node.js', 'green'),
      tc('PostgreSQL', 'indigo'), tc('Stripe', 'violet'), tc('Redis', 'red'),
    ],
    faqs: [
      { question: 'Can I manage my own products after launch?', answer: 'Yes. We build a custom admin dashboard where you can add products, update prices, manage inventory, and process orders without any technical knowledge.' },
      { question: 'Which payment methods can you integrate?', answer: 'We integrate Razorpay (UPI, cards, wallets, EMI), PhonePe, Stripe for international payments, and Cash on Delivery with custom logic.' },
      { question: 'How is this better than Shopify or WooCommerce?', answer: 'You own the code and pay zero platform fees. Custom features have no limitations, and the performance is significantly better — sub-second load times vs 3-5 seconds on Shopify.' },
      { question: 'Can you migrate my existing store?', answer: 'Yes. We handle data migration from Shopify, WooCommerce, or any existing platform — products, orders, customers, and reviews.' },
      { question: 'What about delivery and shipping integration?', answer: 'We integrate with Shiprocket, Delhivery, EcomExpress, and major logistics providers for automated label generation and tracking.' },
    ],
    illustration: 'browser',
  },

  // ── 4. Custom Software Development ──────────────────────────────
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    subtitle: 'Bespoke operational software that eliminates manual work and scales with your business.',
    description:
      'Off-the-shelf software forces your business to adapt to its limitations. We build exactly what you need — custom CRMs, internal tools, workflow automation, and dashboards that fit your processes precisely, integrate with your existing stack, and grow as you grow.',
    benefits: [
      'Eliminates repetitive manual data entry',
      'Custom reporting for your specific KPIs',
      'Role-based access control and audit trails',
      'Integration with any third-party system',
      'Scales from 5 to 50,000 users',
      'On-premise or cloud deployment',
    ],
    industries: ['Logistics', 'Manufacturing', 'Finance', 'Real Estate', 'Legal', 'Healthcare', 'Enterprise'],
    features: [
      { icon: Code, title: 'Custom Architecture', description: 'Designed for your exact data model, workflows, and integration requirements.' },
      { icon: Users, title: 'Multi-Role Access', description: 'Granular permission system — each user sees only what they need.' },
      { icon: BarChart, title: 'Custom Reporting', description: 'Build any report, export to Excel/PDF, schedule automated delivery.' },
      { icon: Network, title: 'API Integrations', description: 'Connect with Tally, SAP, Zoho, Salesforce, or any REST/GraphQL API.' },
      { icon: Shield, title: 'Data Security', description: 'End-to-end encryption, SSO, MFA, and full audit logging.' },
      { icon: RefreshCw, title: 'Workflow Automation', description: 'Trigger actions, send notifications, and escalate tasks automatically.' },
    ],
    tech: [
      tc('Node.js', 'green'), tc('TypeScript', 'blue'), tc('PostgreSQL', 'indigo'),
      tc('React', 'cyan'), tc('Docker', 'blue'), tc('AWS', 'orange'),
    ],
    faqs: [
      { question: 'How do you ensure the software fits our workflow?', answer: 'We spend 1–2 weeks on requirement gathering before writing a single line of code. We document every workflow, edge case, and approval process with your team.' },
      { question: 'Can you integrate with our existing software (Tally, SAP, etc.)?', answer: 'Yes. We build custom connectors for any system that exposes an API. For systems without APIs we can use database-level integration or file-based exchange.' },
      { question: 'What if requirements change during development?', answer: 'We use agile sprints with fortnightly demos. You can adjust priorities and add features between sprints with a transparent change-order process.' },
      { question: 'Is the source code ours?', answer: 'Absolutely. You own 100% of the source code, database schemas, and intellectual property. No lock-in, ever.' },
      { question: 'How long does custom software typically take?', answer: 'Simple internal tools take 6–10 weeks. Complex multi-module systems take 14–24 weeks. We provide detailed timelines after the discovery phase.' },
    ],
    illustration: 'dashboard',
  },

  // ── 5. ERP & CRM Software ───────────────────────────────────────
  {
    slug: 'erp-crm',
    title: 'ERP & CRM Software',
    subtitle: 'Enterprise resource planning and CRM systems tailored to how your business actually operates.',
    description:
      'Generic ERP systems charge ₹5–50L in licensing fees and still don\'t fit your processes. We build custom ERP and CRM systems that automate your sales pipeline, procurement, inventory, HR, and finance — all in one connected platform, at a fraction of the cost.',
    benefits: [
      'Unified view of sales, inventory, and finance',
      'Automated procurement and approval workflows',
      'Real-time business intelligence dashboards',
      'Customer lifecycle tracking from lead to renewal',
      'HR and payroll management',
      'Multi-branch, multi-currency support',
    ],
    industries: ['Manufacturing', 'Distribution', 'Retail', 'Construction', 'Finance', 'Hospitality', 'Education'],
    features: [
      { icon: BarChart, title: 'Business Intelligence', description: 'Executive dashboards with P&L, cash flow, and departmental KPIs updated in real-time.' },
      { icon: Users, title: 'CRM Pipeline', description: 'Lead tracking, deal stages, follow-up reminders, and sales performance analytics.' },
      { icon: Database, title: 'Inventory Control', description: 'Multi-warehouse stock management with FIFO/LIFO, reorder points, and supplier integration.' },
      { icon: FileText, title: 'Procurement Module', description: 'PO generation, vendor comparison, approval workflows, and goods receipt matching.' },
      { icon: CreditCard, title: 'Finance & Accounts', description: 'AR/AP management, GST reports, journal entries, and P&L statements.' },
      { icon: Settings, title: 'Workflow Automation', description: 'Auto-assign tasks, escalate overdue items, and trigger multi-step approval chains.' },
    ],
    tech: [
      tc('Node.js', 'green'), tc('React', 'cyan'), tc('PostgreSQL', 'indigo'),
      tc('Redis', 'red'), tc('Docker', 'blue'), tc('AWS', 'orange'),
    ],
    faqs: [
      { question: 'Why build a custom ERP instead of buying SAP or Odoo?', answer: 'SAP costs ₹20–100L+ in licenses and requires expensive customisation. A custom ERP costs less, fits your workflow perfectly, and you own it outright.' },
      { question: 'Can this integrate with our existing accounting software?', answer: 'Yes — we build connectors to Tally, Busy, QuickBooks, and other accounting systems so data flows automatically without double entry.' },
      { question: 'How long does an ERP project take?', answer: 'A mid-size ERP with 5–8 modules typically takes 16–24 weeks. We deliver in phases so you start seeing value quickly.' },
      { question: 'Can multiple branches or locations use the same system?', answer: 'Yes. Multi-branch, multi-location, and even multi-company setups are supported with consolidated reporting across all entities.' },
      { question: 'What training do you provide for our team?', answer: 'We provide full video documentation, a user manual, and 5 live training sessions with your key users before handover.' },
    ],
    illustration: 'dashboard',
  },

  // ── 6. AI Automation ────────────────────────────────────────────
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Intelligent automation systems that reduce manual effort, eliminate errors, and scale effortlessly.',
    description:
      'We build production-grade AI systems using large language models, computer vision, and predictive analytics. From AI-powered customer support to automated document processing and demand forecasting — we turn manual bottlenecks into intelligent automated workflows.',
    benefits: [
      'Reduce manual processing time by 70–90%',
      'AI-powered document extraction and classification',
      'Natural language customer support bots',
      'Predictive analytics for inventory and demand',
      'Automated lead qualification and scoring',
      'Real-time anomaly detection and alerting',
    ],
    industries: ['Finance', 'Healthcare', 'Logistics', 'E-Commerce', 'Manufacturing', 'HR Tech', 'Legal'],
    features: [
      { icon: Bot, title: 'AI Chatbot', description: 'LLM-powered support bot trained on your knowledge base — handles 80% of queries automatically.' },
      { icon: FileText, title: 'Document AI', description: 'Extract structured data from invoices, forms, and contracts using computer vision.' },
      { icon: TrendingUp, title: 'Predictive Analytics', description: 'Forecast sales, inventory needs, and churn using ML models trained on your data.' },
      { icon: Cpu, title: 'Process Automation', description: 'End-to-end workflow automation with AI decision-making at every approval gate.' },
      { icon: Network, title: 'API Orchestration', description: 'Connect any system — CRM, ERP, email, WhatsApp — into one intelligent automation layer.' },
      { icon: Gauge, title: 'Performance Monitoring', description: 'Real-time dashboards tracking automation KPIs, error rates, and processing volumes.' },
    ],
    tech: [
      tc('Python', 'yellow'), tc('Node.js', 'green'), tc('OpenAI', 'emerald'),
      tc('PostgreSQL', 'indigo'), tc('AWS', 'orange'), tc('Docker', 'blue'),
    ],
    faqs: [
      { question: 'Do I need to provide training data?', answer: 'For document AI and custom models, yes — we need representative samples. For LLM-based solutions, we use your existing documentation and knowledge base.' },
      { question: 'How accurate are the AI automations?', answer: 'Accuracy depends on task complexity. Document extraction achieves 95%+ accuracy with validation. LLM-based support handles 80%+ of standard queries correctly.' },
      { question: 'What if the AI makes a wrong decision?', answer: 'We build human-in-the-loop workflows where the AI flags low-confidence decisions for human review before taking action.' },
      { question: 'Can AI integrate with our existing software?', answer: 'Yes. We connect AI modules to your CRM, ERP, email, WhatsApp, and any other system via API — no replacement of existing tools needed.' },
      { question: 'How long does an AI automation project take?', answer: 'Simple chatbot or single-process automation: 4–8 weeks. Complex multi-workflow systems with custom ML models: 12–20 weeks.' },
    ],
    illustration: 'ai',
  },

  // ── 7. WhatsApp Automation ──────────────────────────────────────
  {
    slug: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    subtitle: 'Intelligent WhatsApp chatbots that automate support, qualify leads, and close deals 24/7.',
    description:
      'India\'s businesses run on WhatsApp. We build advanced automation using the official WhatsApp Business API that handles customer support, appointment booking, order tracking, lead qualification, and payment collection — automatically, at scale, without adding headcount.',
    benefits: [
      '24/7 instant customer response — no human needed',
      'Lead qualification before your team engages',
      'Automated appointment and delivery scheduling',
      'Order status updates sent automatically',
      'Payment links via WhatsApp with confirmation',
      'CRM sync so no lead falls through the gap',
    ],
    industries: ['Real Estate', 'Healthcare', 'Retail', 'Education', 'Finance', 'Restaurants', 'Service Businesses'],
    features: [
      { icon: MessageSquare, title: 'Smart Chatbot', description: 'NLP-powered bot that understands intent, not just keywords — handles complex queries naturally.' },
      { icon: Users, title: 'Lead Qualification', description: 'Automatically collect name, budget, timeline, and requirements before routing to your team.' },
      { icon: Bell, title: 'Broadcast Campaigns', description: 'Send promotional messages, alerts, and updates to opted-in customers at scale.' },
      { icon: CreditCard, title: 'Payment Collection', description: 'Send Razorpay/UPI payment links directly in WhatsApp and confirm receipt automatically.' },
      { icon: RefreshCw, title: 'CRM Integration', description: 'Every conversation, lead, and booking synced to your CRM in real-time.' },
      { icon: Activity, title: 'Analytics Dashboard', description: 'Track open rates, response rates, conversion, and bot performance in one dashboard.' },
    ],
    tech: [
      tc('Node.js', 'green'), tc('WhatsApp API', 'green'), tc('MongoDB', 'emerald'),
      tc('Redis', 'red'), tc('React', 'cyan'), tc('AWS', 'orange'),
    ],
    faqs: [
      { question: 'Is this the official WhatsApp API or a grey-market tool?', answer: 'We use exclusively the official Meta WhatsApp Business API. No risk of account banning — 100% compliant with Meta\'s terms of service.' },
      { question: 'Can the bot handle complex queries?', answer: 'Yes. We use NLP and intent classification so the bot understands context, not just exact keywords. It can handle multi-turn conversations and escalate to a human agent when needed.' },
      { question: 'How quickly can this go live?', answer: 'Standard WhatsApp automation can go live in 2–4 weeks. Complex integrations with CRM and payment gateways take 4–6 weeks.' },
      { question: 'Can I take over the conversation manually?', answer: 'Yes. The system has a live agent handover feature — your team can step into any conversation and the bot pauses automatically.' },
      { question: 'What are the WhatsApp API costs?', answer: 'Meta charges per conversation (₹0.2–0.8 per conversation depending on category). We set up the API account and help you optimise conversation costs.' },
    ],
    illustration: 'chat',
  },

  // ── 8. Cloud Deployment ─────────────────────────────────────────
  {
    slug: 'cloud-deployment',
    title: 'Cloud Deployment',
    subtitle: 'Secure, scalable, cost-optimised cloud infrastructure that keeps your software always online.',
    description:
      'Great software needs great infrastructure. We design and deploy production-grade cloud architectures on AWS, Azure, and Cloudflare — with auto-scaling, load balancing, zero-downtime deployments, and 24/7 uptime monitoring, so you never lose a customer to downtime.',
    benefits: [
      '99.9% uptime with multi-zone redundancy',
      'Auto-scaling to handle traffic spikes automatically',
      'DDoS protection via Cloudflare and AWS Shield',
      'Automated daily backups with point-in-time recovery',
      'Zero-downtime deployments via CI/CD pipelines',
      'Up to 40% cost reduction vs. unoptimised setups',
    ],
    industries: ['SaaS', 'E-Commerce', 'Fintech', 'Healthcare', 'Media', 'Gaming', 'Enterprise'],
    features: [
      { icon: Cloud, title: 'Multi-Cloud Setup', description: 'AWS + Cloudflare CDN for global low-latency delivery and redundancy.' },
      { icon: RefreshCw, title: 'CI/CD Pipelines', description: 'GitHub Actions or GitLab CI for fully automated test, build, and deploy cycles.' },
      { icon: Shield, title: 'Security Hardening', description: 'VPC isolation, security groups, WAF rules, and IAM least-privilege policies.' },
      { icon: BarChart, title: 'Monitoring & Alerting', description: 'CloudWatch + PagerDuty for real-time alerts before customers notice issues.' },
      { icon: Database, title: 'Managed Databases', description: 'RDS, Aurora, or MongoDB Atlas with automated failover and read replicas.' },
      { icon: Gauge, title: 'Cost Optimisation', description: 'Right-sizing, reserved instances, and spot instance strategies to minimise bills.' },
    ],
    tech: [
      tc('AWS', 'orange'), tc('Docker', 'blue'), tc('Kubernetes', 'blue'),
      tc('Terraform', 'violet'), tc('Cloudflare', 'orange'), tc('GitHub Actions', 'gray'),
    ],
    faqs: [
      { question: 'Which cloud provider do you recommend?', answer: 'AWS for most use cases — it has the widest service range and best regional availability in India. We also work with Azure and Google Cloud based on your requirements.' },
      { question: 'Can you migrate our existing server to the cloud?', answer: 'Yes. We handle full server migration with zero downtime using blue-green deployment strategies.' },
      { question: 'How do you ensure uptime during traffic spikes?', answer: 'Auto-scaling groups adjust server capacity automatically based on load. We also implement caching layers (Redis/CloudFront) to handle spike traffic without extra cost.' },
      { question: 'What does 99.9% uptime mean in practice?', answer: '99.9% uptime means less than 8.7 hours of downtime per year. With multi-AZ deployment, we typically achieve 99.95%+.' },
      { question: 'Do you provide ongoing infrastructure management?', answer: 'Yes — we offer monthly retainer plans covering monitoring, patching, cost optimisation, and on-call incident response.' },
    ],
    illustration: 'cloud',
  },

  // ── 9. SEO Optimisation ─────────────────────────────────────────
  {
    slug: 'seo-optimization',
    title: 'SEO Optimisation',
    subtitle: 'Technical SEO and content strategies that drive qualified organic traffic and dominate search rankings.',
    description:
      'We combine deep technical SEO engineering with data-driven content strategy to move your website from page 3 to position 1. Core Web Vitals optimisation, schema markup, competitor gap analysis, and link building — all in one managed engagement.',
    benefits: [
      'Qualified organic traffic without ad spend',
      'Core Web Vitals scores above 90 across all pages',
      'Keyword rankings tracked and reported monthly',
      'Competitor gap analysis to capture quick wins',
      'Local SEO for city and region-specific visibility',
      'Structured data for rich search result snippets',
    ],
    industries: ['E-Commerce', 'Healthcare', 'Education', 'Real Estate', 'SaaS', 'Local Business', 'Manufacturing'],
    features: [
      { icon: Search, title: 'Technical Audit', description: 'Full crawl of your site to identify indexing issues, broken links, duplicate content, and speed problems.' },
      { icon: Gauge, title: 'Core Web Vitals', description: 'LCP, INP, and CLS optimisation to meet Google\'s page experience signals threshold.' },
      { icon: FileText, title: 'Content Strategy', description: 'Keyword research, topic clusters, and content calendar aligned to search intent.' },
      { icon: Network, title: 'Link Building', description: 'White-hat link acquisition from relevant, high-authority domains in your industry.' },
      { icon: MapPin, title: 'Local SEO', description: 'Google Business Profile optimisation, local citations, and map pack ranking.' },
      { icon: BarChart, title: 'Monthly Reporting', description: 'Ranking movement, organic sessions, conversions, and competitor comparisons — every month.' },
    ],
    tech: [
      tc('Google Search Console', 'orange'), tc('Semrush', 'orange'), tc('Ahrefs', 'orange'),
      tc('Screaming Frog', 'green'), tc('Next.js', 'gray'), tc('Lighthouse', 'yellow'),
    ],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Technically, Google starts reflecting changes in 2–4 weeks. Meaningful ranking improvements typically appear in 2–4 months. Significant traffic growth is a 6-12 month commitment.' },
      { question: 'Do you guarantee first-page rankings?', answer: 'No ethical SEO agency can guarantee rankings — Google\'s algorithm is constantly evolving. We guarantee rigorous process, transparent reporting, and continuous improvement.' },
      { question: 'Is this ongoing or a one-time service?', answer: 'SEO is an ongoing discipline. We offer monthly retainer plans. A one-time technical audit is also available as a standalone engagement.' },
      { question: 'Will you create content for us?', answer: 'Yes — our content team produces SEO-optimised blog posts, landing pages, and service pages aligned to your keyword targets.' },
      { question: 'How is your reporting structured?', answer: 'You receive a monthly report covering keyword movements, organic traffic growth, Core Web Vitals scores, backlink acquisition, and the next month\'s priorities.' },
    ],
    illustration: 'analytics',
  },

  // ── 10. UI/UX Design ────────────────────────────────────────────
  {
    slug: 'uiux-design',
    title: 'UI/UX Design',
    subtitle: 'Premium digital product design that users love — built on research, not guesswork.',
    description:
      'We design digital products that feel effortless. From initial user research and wireframing to high-fidelity Figma prototypes and developer-ready design systems — every pixel is deliberate. Beautiful, accessible, and engineered to convert.',
    benefits: [
      'User research and persona-driven design decisions',
      'Interactive Figma prototypes before any code',
      'Design systems for consistent, scalable UI',
      'Accessibility (WCAG 2.1 AA) compliance',
      'A/B test-ready component variants',
      'Developer handoff with precise specifications',
    ],
    industries: ['SaaS', 'Fintech', 'Healthcare', 'E-Commerce', 'Consumer Apps', 'Enterprise', 'Startups'],
    features: [
      { icon: Palette, title: 'Visual Design', description: 'Brand-consistent UI with custom typography, colour systems, and visual hierarchy.' },
      { icon: Layers, title: 'Design Systems', description: 'Scalable component libraries in Figma that your engineering team can build from.' },
      { icon: Users, title: 'User Research', description: 'Interviews, surveys, and usability testing to validate design decisions with real users.' },
      { icon: Layout, title: 'Wireframing', description: 'Low and high-fidelity wireframes that map every user flow before design begins.' },
      { icon: Smartphone, title: 'Responsive Design', description: 'Pixel-perfect designs for desktop, tablet, and mobile — every breakpoint covered.' },
      { icon: Gauge, title: 'Conversion Optimisation', description: 'Data-informed CTAs, form design, and checkout flows engineered to convert.' },
    ],
    tech: [
      tc('Figma', 'pink'), tc('Framer', 'purple'), tc('React', 'cyan'),
      tc('Tailwind CSS', 'teal'), tc('Framer Motion', 'purple'), tc('Storybook', 'pink'),
    ],
    faqs: [
      { question: 'Do you do design only, or development too?', answer: 'Both — we offer design-only engagements (Figma files + design system) and full design + development. Most clients choose the full package.' },
      { question: 'What deliverables do we receive?', answer: 'Figma prototype, exported design system (components, colours, typography), developer handoff specs, and all assets in the required formats.' },
      { question: 'How many design revisions are included?', answer: 'Each design phase includes 2 rounds of revisions. Additional revision rounds can be added at a fixed fee.' },
      { question: 'Can you redesign our existing product?', answer: 'Yes. We start with a UX audit of your current product, identify friction points, and produce a redesign that addresses them.' },
      { question: 'Do you do user testing?', answer: 'Yes — we conduct usability testing with 5–8 real users per round and incorporate findings into each design iteration.' },
    ],
    illustration: 'browser',
  },

  // ── 11. Website Maintenance ─────────────────────────────────────
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    subtitle: 'Continuous monitoring, security patching, and performance optimisation to keep your website at its best.',
    description:
      'A live website needs constant care. Our maintenance retainers cover proactive security monitoring, dependency updates, performance audits, uptime monitoring, and content updates — so your team focuses on the business while we keep the technology running flawlessly.',
    benefits: [
      '24/7 uptime monitoring with instant alerts',
      'Monthly security patching and dependency updates',
      'Quarterly performance audits with improvements',
      'Daily automated backups with restore capability',
      'Content updates and minor feature additions',
      'Priority response within 4 business hours',
    ],
    industries: ['All digital products', 'E-Commerce', 'SaaS', 'Corporate', 'Healthcare', 'Education', 'Government'],
    features: [
      { icon: Shield, title: 'Security Monitoring', description: 'Continuous vulnerability scanning and patch deployment before issues become incidents.' },
      { icon: Gauge, title: 'Performance Audits', description: 'Monthly Lighthouse runs with optimisations for Core Web Vitals and page speed.' },
      { icon: RefreshCw, title: 'Dependency Updates', description: 'Framework, library, and plugin updates tested in staging before production deployment.' },
      { icon: Database, title: 'Automated Backups', description: 'Daily encrypted backups with 30-day retention and tested restore procedures.' },
      { icon: Activity, title: 'Uptime Monitoring', description: '1-minute interval checks across 5 global locations with SMS/WhatsApp alerts.' },
      { icon: Settings, title: 'Content Updates', description: 'Up to 10 content changes per month included — text, images, blogs, and pricing.' },
    ],
    tech: [
      tc('GitHub Actions', 'gray'), tc('Sentry', 'violet'), tc('Cloudflare', 'orange'),
      tc('AWS', 'orange'), tc('Datadog', 'purple'), tc('Lighthouse', 'yellow'),
    ],
    faqs: [
      { question: 'What is included in a maintenance retainer?', answer: 'Security monitoring, monthly dependency updates, weekly backups, uptime monitoring, quarterly performance audits, and up to 10 content changes per month.' },
      { question: 'What is your response time for critical issues?', answer: 'Critical issues (site down, data breach) receive a response within 30 minutes around the clock. Standard issues within 4 business hours.' },
      { question: 'Can you maintain a site you didn\'t build?', answer: 'Yes — we conduct a 2-week audit of any existing site and then take it on maintenance. There may be an initial remediation cost if critical issues are found.' },
      { question: 'What happens if my site gets hacked?', answer: 'Malware removal, clean restore from backup, security hardening, and a full incident report are all included in the maintenance retainer.' },
      { question: 'Do you handle content changes too?', answer: 'Yes — up to 10 content changes per month are included (text updates, image replacements, blog publishing). Larger changes are quoted separately.' },
    ],
    illustration: 'dashboard',
  },

  // ── 12. School Website ──────────────────────────────────────────
  {
    slug: 'school-website',
    title: 'School & College Websites',
    subtitle: 'Modern digital platforms for educational institutions that engage students, parents, and administrators.',
    description:
      'Educational institutions need more than a brochure website. We build comprehensive digital platforms with online admission portals, event calendars, parent communication tools, fee payment integration, and staff management — all in one professional, accessible interface.',
    benefits: [
      'Online admission and application portal',
      'Parent-teacher communication hub',
      'Events and academic calendar management',
      'Fee payment with Razorpay integration',
      'Staff and faculty directory',
      'Exam results and report card portal',
    ],
    industries: ['Schools', 'Colleges', 'Universities', 'Coaching Centres', 'Skill Development', 'Playschools', 'E-Learning'],
    features: [
      { icon: BookOpen, title: 'Admission Portal', description: 'Online application forms with document upload, status tracking, and merit list generation.' },
      { icon: Bell, title: 'Parent Notifications', description: 'Automated alerts for attendance, fees, events, and exam schedules via SMS and WhatsApp.' },
      { icon: CreditCard, title: 'Fee Management', description: 'Online fee payment, receipt generation, and overdue reminders — all automated.' },
      { icon: Users, title: 'Faculty Directory', description: 'Staff profiles, qualifications, and contact details in a searchable directory.' },
      { icon: FileText, title: 'Results Portal', description: 'Secure student login to view marks, report cards, and academic progress.' },
      { icon: MapPin, title: 'Event Calendar', description: 'Interactive calendar for exams, holidays, sports day, parent meetings, and more.' },
    ],
    tech: [
      tc('Next.js', 'gray'), tc('Node.js', 'green'), tc('MongoDB', 'emerald'),
      tc('Razorpay', 'indigo'), tc('Tailwind CSS', 'teal'), tc('AWS', 'orange'),
    ],
    faqs: [
      { question: 'Can parents and students log in to see their information?', answer: 'Yes — we build secure portals with separate logins for students, parents, staff, and administrators with role-appropriate access.' },
      { question: 'Can we accept online fee payments?', answer: 'Yes. Razorpay integration handles all fee collections with automated receipts, payment confirmation SMS/email, and dashboard reporting.' },
      { question: 'Can the website manage admissions digitally?', answer: 'Yes — complete admission management including form submission, document upload, shortlisting, interview scheduling, and offer letters.' },
      { question: 'Is the website mobile-friendly?', answer: 'Fully responsive — parents and students can access everything from their smartphones.' },
      { question: 'Can we update the content ourselves?', answer: 'Yes — the CMS allows authorised staff to add events, news, results, and fee notices without any technical knowledge.' },
    ],
    illustration: 'browser',
  },

  // ── 13. Hospital Management System ──────────────────────────────
  {
    slug: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Secure, compliant digital infrastructure for modern healthcare providers and clinics.',
    description:
      'We build HIPAA-aware hospital management systems that digitise patient records, appointments, billing, and pharmacy — replacing paper-based processes with a secure, fast, and connected platform that lets your clinical team focus on care, not paperwork.',
    benefits: [
      'Digital OPD and appointment management',
      'Electronic Health Records (EHR) for all patients',
      'Integrated billing and insurance claim tracking',
      'Pharmacy and stock management',
      'Lab report upload and patient portal access',
      'Doctor and staff scheduling',
    ],
    industries: ['Hospitals', 'Clinics', 'Diagnostic Centres', 'Dental Clinics', 'Physiotherapy', 'Ayurveda', 'Veterinary'],
    features: [
      { icon: Heart, title: 'Patient Records', description: 'Complete EHR with history, prescriptions, allergies, vitals, and lab reports in one place.' },
      { icon: Bell, title: 'Appointment System', description: 'Online booking, doctor availability calendar, SMS reminders, and queue management.' },
      { icon: CreditCard, title: 'Billing & Insurance', description: 'Automatic bill generation, insurance claim submission, and payment tracking.' },
      { icon: Database, title: 'Pharmacy Module', description: 'Medicine inventory, expiry tracking, prescription-linked dispensing, and stock alerts.' },
      { icon: FileText, title: 'Lab Integration', description: 'Lab report upload, automated patient notification, and doctor review workflow.' },
      { icon: Shield, title: 'Data Security', description: 'Role-based access, data encryption, and audit logs for regulatory compliance.' },
    ],
    tech: [
      tc('React', 'cyan'), tc('Node.js', 'green'), tc('MongoDB', 'emerald'),
      tc('AWS', 'orange'), tc('Socket.IO', 'gray'), tc('Redis', 'red'),
    ],
    faqs: [
      { question: 'Is this system secure for patient data?', answer: 'Yes. We implement role-based access, data encryption at rest and in transit, audit logging, and backup procedures aligned with healthcare data security best practices.' },
      { question: 'Can patients book appointments online?', answer: 'Yes — patients can book via the website or mobile app, receive confirmation SMS/WhatsApp, and get automated reminders 24 hours before their appointment.' },
      { question: 'Can this replace our existing paper registers?', answer: 'Completely. OPD registration, consultation notes, prescriptions, and billing all move digital — with search and history available instantly.' },
      { question: 'Does it work for multi-speciality hospitals?', answer: 'Yes. The system supports multiple departments, doctor schedules, and speciality-specific consultation forms.' },
      { question: 'Can we integrate with existing lab software?', answer: 'Yes — we build connectors to common lab management software and pathology systems for seamless report import.' },
    ],
    illustration: 'dashboard',
  },

  // ── 14. Restaurant Website ──────────────────────────────────────
  {
    slug: 'restaurant-website',
    title: 'Restaurant Website',
    subtitle: 'Zero-commission online ordering, dynamic menus, and table reservations for modern restaurants.',
    description:
      'Stop paying 25–35% commission to Zomato and Swiggy. We build direct ordering systems for your restaurant — beautiful menus, seamless checkout, WhatsApp order confirmations, and a kitchen display system — so you own every order and every customer relationship.',
    benefits: [
      'Zero per-order commission — keep 100% of revenue',
      'Dynamic digital menu with real-time updates',
      'Table reservation and waitlist management',
      'WhatsApp order confirmation and tracking',
      'Loyalty programme for repeat customers',
      'Kitchen display system for order management',
    ],
    industries: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Bakeries', 'Catering', 'Hotels', 'QSR Chains'],
    features: [
      { icon: Utensils, title: 'Dynamic Menu', description: 'QR code menus with categories, variants, add-ons, and availability toggles.' },
      { icon: ShoppingCart, title: 'Direct Ordering', description: 'WhatsApp and web-based ordering with real-time order status updates.' },
      { icon: CreditCard, title: 'Payment Integration', description: 'UPI, cards, and cash on delivery — with automated GST bill generation.' },
      { icon: MapPin, title: 'Table Reservations', description: 'Online booking with table selection, party size, and special occasion requests.' },
      { icon: Bell, title: 'Kitchen Display', description: 'Real-time order display for kitchen staff with item-level status tracking.' },
      { icon: Users, title: 'Loyalty Programme', description: 'Points-based loyalty system with WhatsApp rewards notifications.' },
    ],
    tech: [
      tc('React', 'cyan'), tc('Node.js', 'green'), tc('Firebase', 'yellow'),
      tc('Razorpay', 'indigo'), tc('Socket.IO', 'gray'), tc('Tailwind CSS', 'teal'),
    ],
    faqs: [
      { question: 'How is this better than Zomato/Swiggy?', answer: 'You pay zero commission. Every order goes directly to you. You own the customer data, can run loyalty programmes, and build direct relationships.' },
      { question: 'Can customers order from their phones by scanning a QR code?', answer: 'Yes — QR codes on each table let customers browse the menu, order, and pay from their own phone without downloading any app.' },
      { question: 'Can I update the menu myself?', answer: 'Yes — add items, change prices, mark items as unavailable, and run special offers directly from the admin panel in seconds.' },
      { question: 'Does it support multiple branches?', answer: 'Yes. Multi-branch setup allows each location to manage its own menu and orders while you monitor all branches from a central dashboard.' },
      { question: 'How do kitchen staff receive orders?', answer: 'Orders appear instantly on a kitchen display screen. Staff can mark items as prepared, and the status updates for the customer automatically.' },
    ],
    illustration: 'browser',
  },

  // ── 15. Portfolio Website ───────────────────────────────────────
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'Award-level portfolio websites for creative professionals and agencies that make clients remember you.',
    description:
      'Your portfolio is your most powerful sales tool. We design and build high-end portfolio websites with immersive case studies, video backgrounds, smooth animations, and lead capture — engineered to showcase your work in the best possible light and convert browsers into clients.',
    benefits: [
      'Immersive animations that showcase your craft',
      'Full-screen project case studies',
      'High-res image and video support',
      'Lead capture integrated with WhatsApp/email',
      'Blog and thought-leadership section',
      'Blazing-fast performance for image-heavy pages',
    ],
    industries: ['Designers', 'Photographers', 'Videographers', 'Architects', 'Agencies', 'Illustrators', 'Developers'],
    features: [
      { icon: Camera, title: 'Project Showcases', description: 'Full-screen case study pages with before/after, process, and outcome sections.' },
      { icon: Layout, title: 'Custom Galleries', description: 'Masonry, grid, and carousel layouts optimised for high-resolution media.' },
      { icon: Zap, title: 'Smooth Animations', description: 'Scroll-triggered reveals, parallax, and page transitions that feel premium.' },
      { icon: Search, title: 'SEO for Creatives', description: 'Image alt tags, structured data, and keyword strategy to attract the right clients.' },
      { icon: FileText, title: 'Blog / Journal', description: 'Integrated blog to share process posts, case studies, and thought leadership.' },
      { icon: Users, title: 'Lead Generation', description: 'Project inquiry forms connected to WhatsApp and email for instant follow-up.' },
    ],
    tech: [
      tc('React', 'cyan'), tc('Next.js', 'gray'), tc('Framer Motion', 'purple'),
      tc('Tailwind CSS', 'teal'), tc('Cloudinary', 'purple'), tc('Vercel', 'gray'),
    ],
    faqs: [
      { question: 'Can I update my portfolio myself?', answer: 'Yes — the CMS lets you add projects, update descriptions, and publish blog posts without touching code.' },
      { question: 'Will the animations work on mobile?', answer: 'Yes. All animations are performance-tested on mobile devices. We use reduced-motion for users who prefer it.' },
      { question: 'How do you handle large image files?', answer: 'Images are optimised using Next.js Image + Cloudinary for WebP conversion, lazy loading, and responsive srcsets — fast regardless of file size.' },
      { question: 'Can I sell services or take bookings through the site?', answer: 'Yes — we integrate a booking form, package pricing, and payment gateway for photographers and other creatives who accept bookings online.' },
      { question: 'How long does a portfolio site take?', answer: 'Typically 2–4 weeks depending on the number of pages and custom animations. Rush delivery available.' },
    ],
    illustration: 'browser',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
