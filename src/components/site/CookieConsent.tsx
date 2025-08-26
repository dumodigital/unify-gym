'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    if (typeof window !== 'undefined') {
      try {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
          // Show banner after a short delay for better UX
          const timer = setTimeout(() => setIsVisible(true), 500);
          return () => clearTimeout(timer);
        }
        // If consent exists, verify it's valid JSON
        JSON.parse(cookieConsent);
      } catch (error) {
        // If localStorage is not available or consent data is corrupted, show banner
        console.warn('Cookie consent data corrupted, showing banner again');
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      setIsVisible(false);
    } catch (error) {
      console.warn('Failed to save cookie consent:', error);
      setIsVisible(false); // Hide banner anyway to avoid permanent display
    }
  };

  const handleRejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      setIsVisible(false);
    } catch (error) {
      console.warn('Failed to save cookie consent:', error);
      setIsVisible(false); // Hide banner anyway to avoid permanent display
    }
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      setIsVisible(false);
    } catch (error) {
      console.warn('Failed to save cookie consent:', error);
      setIsVisible(false); // Hide banner anyway to avoid permanent display
    }
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Developer utility: Add to browser console to clear saved consent
  // localStorage.removeItem('cookieConsent'); window.location.reload();
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-out">
      <div className="bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border-t border-neutral-700 shadow-2xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          {!showPreferences ? (
            <div className="space-y-4">
              {/* Message Section */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">We value your privacy</h3>
                  <p className="text-neutral-300 text-sm">
                    We use cookies to enhance your experience and analyze our traffic. 
                  </p>
                </div>
              </div>
              
              {/* Actions Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {/* Links */}
                <div className="flex items-center space-x-4 text-xs">
                  <Link href="/privacy-policy" className="text-neutral-400 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/cookie-policy" className="text-neutral-400 hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 text-sm border border-neutral-600 text-neutral-200 rounded-lg hover:bg-neutral-800 transition-colors text-center"
                  >
                    Preferences
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm bg-neutral-700 text-neutral-200 rounded-lg hover:bg-neutral-600 transition-colors text-center"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h4 className="font-semibold text-white">Cookie Preferences</h4>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 text-sm bg-neutral-700 text-neutral-200 rounded-lg hover:bg-neutral-600 transition-colors text-center"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Essential Cookies */}
                <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg">
                  <div className="flex-1 mr-3">
                    <div className="font-medium text-neutral-200 text-sm">Essential</div>
                    <div className="text-xs text-neutral-400">Required</div>
                  </div>
                  <div className="w-8 h-5 bg-primary rounded-full flex items-center justify-end px-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg">
                  <div className="flex-1 mr-3">
                    <div className="font-medium text-neutral-200 text-sm">Analytics</div>
                    <div className="text-xs text-neutral-400">Insights</div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-8 h-5 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-primary justify-end' : 'bg-neutral-600 justify-start'
                    } px-1`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full transition-transform"></div>
                  </button>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg">
                  <div className="flex-1 mr-3">
                    <div className="font-medium text-neutral-200 text-sm">Functional</div>
                    <div className="text-xs text-neutral-400">Features</div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('functional')}
                    className={`w-8 h-5 rounded-full flex items-center transition-colors ${
                      preferences.functional ? 'bg-primary justify-end' : 'bg-neutral-600 justify-start'
                    } px-1`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full transition-transform"></div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg">
                  <div className="flex-1 mr-3">
                    <div className="font-medium text-neutral-200 text-sm">Marketing</div>
                    <div className="text-xs text-neutral-400">Ads</div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-8 h-5 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-primary justify-end' : 'bg-neutral-600 justify-start'
                    } px-1`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full transition-transform"></div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
