import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Filter,
  Target,
  Wrench,
  TrendingUp,
  Code2,
  Megaphone,
  CheckCircle,
  Globe,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  portfolioProjects,
  PORTFOLIO_CATEGORIES,
  type PortfolioCategory,
  type PortfolioProject,
} from '../data/portfolioProjects';

const BOOKING_LINK = 'https://rzp.io/rzp/x16Tmd2';

const CATEGORY_COUNTS = PORTFOLIO_CATEGORIES.map((cat) => ({
  label: cat,
  count: cat === 'All' ? portfolioProjects.length : portfolioProjects.filter((p) => p.category === cat).length,
}));

function ProjectCard({ project }: { project: PortfolioProject }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.client} website`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.accentColor} opacity-60`} />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className={`inline-block ${project.tagColor} ${project.tagTextColor} text-xs font-bold px-3 py-1 rounded-full self-start mb-2`}>
            {project.category}
          </span>
          <h3 className="text-white font-black text-lg leading-tight">{project.client}</h3>
          <p className="text-white/80 text-xs font-medium mt-0.5">{project.industry}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"
          title="Visit live site"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.role.map((r) => (
            <span key={r} className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">
              {r}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          <span className="font-bold text-gray-800">Goal: </span>
          {project.businessGoal}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
            <TrendingUp className="h-3 w-3" />
            {project.resultTag}
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-green-700 hover:text-green-600 text-xs font-bold transition-colors"
          >
            {open ? 'Less detail' : 'Full case study'}
            {open ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>
        </div>

        {open && (
          <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Key Features</span>
              </div>
              <ul className="space-y-1 pl-1">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Megaphone className="h-4 w-4 text-amber-600" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Conversion Strategy</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pl-1">{project.conversionStrategy}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="h-4 w-4 text-sky-600" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Technologies</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-1">
                {project.technologies.map((t) => (
                  <span key={t} className="bg-sky-50 text-sky-700 border border-sky-200 text-xs font-medium px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Business Impact</span>
              </div>
              <p className="text-xs text-gray-700 font-semibold leading-relaxed bg-green-50 rounded-lg p-2.5 border border-green-100">
                {project.result}
              </p>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-600 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              Visit live site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

const categoryDescriptions: Record<PortfolioCategory, string> = {
  All: 'All 18 client projects across every industry.',
  'Healthcare Websites': 'HIPAA-aware medical sites built to generate consultation leads and dominate local search.',
  'Corporate & Startup': 'Professional B2B and startup sites that win enterprise contracts and investor attention.',
  'Local Business': 'SEO-first contractor and service sites that rank and convert in competitive local markets.',
  'E-commerce & Brands': 'Lifestyle and product brand sites that drive purchases and build community.',
  'SaaS & Tech': 'High-converting tech landing pages with measurable trial and sign-up results.',
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const filtered =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Target className="h-3.5 w-3.5" />
            WordPress Portfolio · US & Canada Clients
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Real Clients.{' '}
            <span className="text-yellow-400">Measurable Results.</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
            18 hand-picked WordPress projects across healthcare, B2B, local services, e-commerce, and SaaS — each with full case study details, technologies used, and proven business outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: '18 Case Studies', icon: <Target className="h-3.5 w-3.5" /> },
              { label: '5 Industry Categories', icon: <Filter className="h-3.5 w-3.5" /> },
              { label: 'US / Canada Clients', icon: <Globe className="h-3.5 w-3.5" /> },
              { label: 'WordPress Specialist', icon: <Code2 className="h-3.5 w-3.5" /> },
            ].map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '18', label: 'Portfolio Projects' },
              { value: '5', label: 'Industry Niches' },
              { value: '100%', label: 'WordPress Built' },
              { value: 'US/CA', label: 'Target Clients' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Filter className="h-3.5 w-3.5" />
              Filter by Industry
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORY_COUNTS.map(({ label, count }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label as PortfolioCategory)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    activeCategory === label
                      ? 'bg-green-600 text-white shadow-md shadow-green-200'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-700'
                  }`}
                >
                  {label}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${
                    activeCategory === label ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-sm max-w-xl text-center">
              {categoryDescriptions[activeCategory]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DELIVER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Wrench className="h-3.5 w-3.5" />
              What I Deliver
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Every Project Covers{' '}
              <span className="text-green-600">All 4 Layers</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Not just a pretty design — every site I build is engineered for speed, search, and conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-6 w-6 text-rose-700" />,
                bg: 'bg-rose-50 border-rose-100',
                title: 'UI/UX Design',
                points: ['Custom visual design', 'Mobile-first layouts', 'Brand-aligned typography', 'Wireframe to pixel'],
              },
              {
                icon: <Code2 className="h-6 w-6 text-sky-700" />,
                bg: 'bg-sky-50 border-sky-100',
                title: 'WordPress Dev',
                points: ['Elementor / Kadence / Astra', 'WooCommerce & memberships', 'API integrations', 'Performance optimization'],
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-green-700" />,
                bg: 'bg-green-50 border-green-100',
                title: 'SEO & Local SEO',
                points: ['On-page SEO setup', 'Schema markup', 'Local landing pages', 'Core Web Vitals tuning'],
              },
              {
                icon: <Megaphone className="h-6 w-6 text-amber-700" />,
                bg: 'bg-amber-50 border-amber-100',
                title: 'CRO Strategy',
                points: ['CTA placement & hierarchy', 'Lead form optimization', 'Trust signal design', 'A/B test-ready builds'],
              },
            ].map((col) => (
              <div key={col.title} className={`border ${col.bg} rounded-2xl p-6`}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  {col.icon}
                </div>
                <h3 className="text-base font-black text-gray-900 mb-3">{col.title}</h3>
                <ul className="space-y-1.5">
                  {col.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Build Your Next Project?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Book a free discovery call and let's talk about how to build a site that ranks, converts, and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book Free Discovery Call
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              View Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
