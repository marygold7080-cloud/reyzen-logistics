import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { COMMON_FAQS } from '../config/company';

interface FaqAccordionProps {
  customFaqs?: Array<{ id: string; category?: string; question: string; answer: string }>;
  showSearch?: boolean;
  showCategories?: boolean;
  defaultOpenId?: string;
  limit?: number;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  customFaqs,
  showSearch = true,
  showCategories = true,
  defaultOpenId,
  limit,
}) => {
  const allFaqs = customFaqs || COMMON_FAQS;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    [defaultOpenId || allFaqs[0]?.id || '']: true
  });

  const categories = ['All', ...Array.from(new Set(allFaqs.map((f) => f.category || 'General')))];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="faq-section-wrapper">
      {/* Search Input */}
      {showSearch && (
        <div className="faq-search-wrap">
          <Search size={20} className="faq-search-icon" />
          <input
            type="text"
            className="faq-search-input"
            placeholder="Search questions about pricing, delivery, insurance..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {/* Category Tabs */}
      {showCategories && categories.length > 2 && (
        <div className="faq-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`faq-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Accordion List */}
      <div className="faq-list">
        {displayedFaqs.length > 0 ? (
          displayedFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="faq-toggle-icon">
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
            <HelpCircle size={40} style={{ margin: '0 auto 1rem', color: 'var(--color-accent)' }} />
            <p>No questions matched your search query. Please call our 24/7 dispatch team for immediate assistance.</p>
          </div>
        )}
      </div>
    </div>
  );
};
