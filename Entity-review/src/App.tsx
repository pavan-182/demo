import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DocumentEditor from './components/DocumentEditor';
import ReviewSidebar from './components/ReviewSidebar';
import PublisherCentral from './components/PublisherCentral';
import type { Entity } from './components/ReviewSidebar';
import './App.css';

const INITIAL_ENTITIES: Entity[] = [
  { id: 'pge2', name: 'PGE2', type: 'protein', status: 'unacknowledged' },
  { id: '4hne', name: '4-hydroxynonenal (4HNE)', type: 'gene', status: 'unacknowledged' },
  { id: 'ltb4', name: 'LTB4', type: 'ion', status: 'unacknowledged' },
  { id: 'ltc4', name: 'LTC4', type: 'complex', status: 'unacknowledged' },
];

const App: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>(INITIAL_ENTITIES);
  const [activeEntityId, setActiveEntityId] = useState<string | null>(null);
  const [showDropdownId, setShowDropdownId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [connectors, setConnectors] = useState<Array<{
    id: string;
    pathData: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  }>>([]);

  const handleEntityClick = (id: string) => {
    setActiveEntityId(id);
    setShowDropdownId(null);
    
    // Scroll to document entity
    const element = document.getElementById(`target-entity-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleAccept = (id: string) => {
    setEntities(prev => prev.map(e => e.id === id ? { ...e, status: 'acknowledged' } : e));
    setActiveEntityId(null);
    setShowDropdownId(null);
  };

  const toggleDropdown = (id: string) => {
    setShowDropdownId(prev => prev === id ? null : id);
  };

  const handleChangeType = (id: string, type: string) => {
    setEntities(prev => prev.map(e => e.id === id ? { ...e, type, status: 'acknowledged' } : e));
    setActiveEntityId(null);
    setShowDropdownId(null);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setSubmitStep(1);
    
    // Progress through steps
    setTimeout(() => setSubmitStep(2), 1000);
    setTimeout(() => setSubmitStep(3), 2000);
    setTimeout(() => setSubmitStep(4), 3000);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowDashboard(true);
    }, 4000);
  };

  useEffect(() => {
    if (showDashboard) return;

    const updateConnectors = () => {
      const activeEntity = entities.find(e => e.id === activeEntityId && e.status === 'unacknowledged');
      const newConnectors: typeof connectors = [];

      if (activeEntity) {
        const target = document.getElementById(`target-entity-${activeEntity.id}`);
        const card = document.getElementById(`review-card-${activeEntity.id}`);
        
        if (target && card) {
          const targetRect = target.getBoundingClientRect();
          const cardRect = card.getBoundingClientRect();
          
          const startX = targetRect.right;
          const startY = targetRect.top + targetRect.height / 2;
          const endX = cardRect.left;
          const endY = cardRect.top + cardRect.height / 2;

          const midX = startX + (endX - startX) / 2;

          newConnectors.push({
            id: activeEntity.id,
            startX,
            startY,
            endX,
            endY,
            pathData: `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`
          });
        }
      }

      setConnectors(newConnectors);
    };

    updateConnectors();
    const timeoutId = setTimeout(updateConnectors, 50);
    
    let rafId: number;
    const handleUpdate = () => {
      rafId = requestAnimationFrame(updateConnectors);
    };

    const editor = document.querySelector('[data-purpose="DocumentEditor"]');
    const sidebar = document.querySelector(`.flex-1.overflow-y-auto`);

    window.addEventListener('resize', handleUpdate);
    editor?.addEventListener('scroll', handleUpdate);
    sidebar?.addEventListener('scroll', handleUpdate);
    
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-trigger')) {
        setShowDropdownId(null);
      }
    };
    window.addEventListener('click', handleGlobalClick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleUpdate);
      editor?.removeEventListener('scroll', handleUpdate);
      sidebar?.removeEventListener('scroll', handleUpdate);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [activeEntityId, entities, showDashboard]);

  if (showDashboard) {
    return <PublisherCentral />;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white text-on-surface font-sans">
      <Header />
      <main className="flex-1 flex overflow-hidden relative">
        <DocumentEditor activeEntityId={activeEntityId || undefined} />
        <ReviewSidebar 
          entities={entities} 
          activeEntityId={activeEntityId}
          onEntityClick={handleEntityClick}
          onAccept={handleAccept}
          onChangeType={handleChangeType}
          toggleDropdown={toggleDropdown}
          showDropdownId={showDropdownId}
          onSubmit={handleSubmit}
        />
        
        <svg className="fixed inset-0 pointer-events-none z-50 w-full h-full">
          {connectors.map(conn => {
            const color = "#E65100"; // Matching the hexagon color
            return (
              <React.Fragment key={conn.id}>
                <path 
                  d={conn.pathData} 
                  fill="none" 
                  stroke={color} 
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="transition-all duration-300"
                  opacity="0.85"
                />
                <circle cx={conn.startX} cy={conn.startY} r="3" fill={color} opacity="0.9" />
                <circle cx={conn.endX} cy={conn.endY} r="3" fill={color} opacity="0.9" />
              </React.Fragment>
            );
          })}
        </svg>
      </main>
      
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-md">
          <div className="flex flex-col items-center w-[400px]">
            {/* Segmented Progress Bar Container */}
            <div className="w-full h-8 border-[3px] border-[#3B17D3] rounded-full p-1 flex items-center mb-12">
              <div className="flex-1 flex gap-1 h-full">
                {/* Segment 1 */}
                <div className={`h-full flex-1 rounded-l-full transition-colors duration-300 ${submitStep >= 1 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
                {/* Segment 2 */}
                <div className={`h-full flex-1 transition-colors duration-300 ${submitStep >= 2 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
                {/* Segment 3 */}
                <div className={`h-full flex-1 transition-colors duration-300 ${submitStep >= 3 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
                {/* Segment 4 */}
                <div className={`h-full flex-1 rounded-r-full transition-colors duration-300 ${submitStep >= 4 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
              </div>
            </div>

            {/* Checklist */}
            <div className="w-full space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${submitStep > 1 ? 'bg-[#3B17D3] border-[#3B17D3]' : 'border-gray-300'}`}>
                  {submitStep > 1 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  ) : submitStep === 1 ? (
                    <div className="w-3 h-3 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                  ) : null}
                </div>
                <span className={`text-[16px] ${submitStep >= 1 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Preparing reviewed entities</span>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${submitStep > 2 ? 'bg-[#3B17D3] border-[#3B17D3]' : 'border-gray-300'}`}>
                  {submitStep > 2 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  ) : submitStep === 2 ? (
                    <div className="w-3 h-3 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                  ) : null}
                </div>
                <span className={`text-[16px] ${submitStep >= 2 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Cross-referencing external databases</span>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${submitStep > 3 ? 'bg-[#3B17D3] border-[#3B17D3]' : 'border-gray-300'}`}>
                  {submitStep > 3 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  ) : submitStep === 3 ? (
                    <div className="w-3 h-3 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                  ) : null}
                </div>
                <span className={`text-[16px] ${submitStep >= 3 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Linking matching external IDs</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
