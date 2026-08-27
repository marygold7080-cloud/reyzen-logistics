import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Truck } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  image?: string;
  imageBadge?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  tag,
  image,
  imageBadge,
  breadcrumbs = [{ label: 'Home', href: '/' }]
}) => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className={`page-hero-grid ${image ? 'has-image' : ''}`}>
          <div className="page-hero-content">
            {/* Breadcrumbs */}
            <nav className="breadcrumbs-list" aria-label="Breadcrumb">
              <Link to="/" aria-label="Home">
                <Home size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight size={14} color="#64748B" />
                  {crumb.href ? (
                    <Link to={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span style={{ color: 'var(--color-accent)' }}>{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
              <ChevronRight size={14} color="#9CA3AF" />
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{title}</span>
            </nav>

            {tag && <span className="section-tag">{tag}</span>}

            <h1 className="page-hero-title">{title}</h1>

            {subtitle && <p className="page-hero-desc">{subtitle}</p>}
          </div>

          {image && (
            <div className="page-hero-media">
              <div className="page-hero-img-card">
                <img 
                  src={image} 
                  alt={title} 
                  className="page-hero-img"
                  loading="eager"
                />
                {imageBadge && (
                  <div className="page-hero-img-badge">
                    <Truck size={15} />
                    <span>{imageBadge}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

