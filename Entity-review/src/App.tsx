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
  { id: 'ferroptosis', name: 'Ferroptosis', type: 'biological process', status: 'auto-approved' },
  { id: 'apoptosis', name: 'Apoptosis', type: 'biological process', status: 'auto-approved' },
  { id: 'cancer', name: 'Cancer', type: 'disease', status: 'auto-approved' },
  { id: 'gpx4', name: 'GPX4', type: 'protein', status: 'auto-approved' },
  { id: 'system_xc', name: 'system Xc-', type: 'protein complex / transporter', status: 'auto-approved' },
  { id: 'slc7a11', name: 'SLC7A11', type: 'gene/protein', status: 'auto-approved' },
  { id: 'slc3a2', name: 'SLC3A2', type: 'gene/protein', status: 'auto-approved' },
  { id: 'gsh', name: 'GSH', type: 'metabolite', status: 'auto-approved' },
  { id: 'ros', name: 'ROS', type: 'reactive species', status: 'auto-approved' },
  { id: 'iron', name: 'iron', type: 'element', status: 'auto-approved' },
  { id: 'mda', name: 'MDA', type: 'metabolite', status: 'auto-approved' },
  { id: 'alox', name: 'ALOX', type: 'enzyme', status: 'auto-approved' },
  { id: 'phd', name: 'PHD', type: 'enzyme', status: 'auto-approved' },
  { id: 'pufas', name: 'PUFAs', type: 'lipid class', status: 'auto-approved' },
  { id: 'phospholipids', name: 'phospholipids', type: 'lipid', status: 'auto-approved' },
  { id: 'cardiolipin', name: 'cardiolipin', type: 'lipid', status: 'auto-approved' },
  { id: 'phosphatidylcholine', name: 'phosphatidylcholine', type: 'lipid', status: 'auto-approved' },
  { id: 'phosphatidylethanolamine', name: 'phosphatidylethanolamine (PE)', type: 'lipid', status: 'auto-approved' },
  { id: 'ptgs2_cox2', name: 'PTGS2 / COX2', type: 'enzyme', status: 'auto-approved' },
  { id: 'acsl4', name: 'ACSL4', type: 'gene/protein', status: 'auto-approved' },
  { id: 'nfe2l2_nrf2', name: 'NFE2L2 / NRF2', type: 'gene/protein', status: 'auto-approved' },
  { id: 'escrt_iii', name: 'ESCRT-III', type: 'protein complex', status: 'auto-approved' },
  { id: 'hmgb1', name: 'HMGB1', type: 'protein', status: 'auto-approved' },
  { id: 'rage', name: 'RAGE', type: 'receptor protein', status: 'auto-approved' },
  { id: 'nf_kb', name: 'NF-B', type: 'transcription factor', status: 'auto-approved' },
  { id: 'p53', name: 'p53', type: 'protein', status: 'auto-approved' },
  { id: 'sat1', name: 'SAT1', type: 'gene/protein', status: 'auto-approved' },
  { id: 'alox15', name: 'ALOX15', type: 'gene/protein', status: 'auto-approved' },
  { id: 'ireb2', name: 'IREB2', type: 'gene/protein', status: 'auto-approved' },
  { id: 'ferritin', name: 'ferritin', type: 'protein', status: 'auto-approved' },
  { id: 'transferrin', name: 'transferrin', type: 'protein', status: 'auto-approved' },
  { id: 'erastin', name: 'erastin', type: 'drug', status: 'auto-approved' },
  { id: 'rsl3', name: 'RSL3', type: 'drug', status: 'auto-approved' },
  { id: 'sorafenib', name: 'sorafenib', type: 'drug', status: 'auto-approved' },
  { id: 'sulfasalazine', name: 'sulfasalazine', type: 'drug', status: 'auto-approved' },
  { id: 'artesunate', name: 'artesunate', type: 'drug', status: 'auto-approved' },
  { id: 'doxorubicin', name: 'doxorubicin', type: 'drug', status: 'auto-approved' },
  { id: 'melanoma', name: 'melanoma', type: 'disease', status: 'auto-approved' },
  { id: 'pancreatic_cancer', name: 'pancreatic cancer', type: 'disease', status: 'auto-approved' },
  { id: 'prostate_cancer', name: 'prostate cancer', type: 'disease', status: 'auto-approved' },
  { id: 'nsclc', name: 'non-small cell lung cancer', type: 'disease', status: 'auto-approved' },
  { id: 'breast_cancer', name: 'breast cancer', type: 'disease', status: 'auto-approved' },
  { id: 'colon_cancer', name: 'colon cancer', type: 'disease', status: 'auto-approved' },
  { id: 'leukemia', name: 'leukemia', type: 'disease', status: 'auto-approved' },
  { id: 'lymphoma', name: 'lymphoma', type: 'disease', status: 'auto-approved' },
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

  const handleRevert = (id: string) => {
    setEntities(prev => prev.map(e => e.id === id ? { ...e, status: 'unacknowledged' } : e));
    setActiveEntityId(id);
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
    
    // Progress through steps (2s delay each)
    setTimeout(() => setSubmitStep(2), 2000);
    setTimeout(() => setSubmitStep(3), 4000);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowDashboard(true);
    }, 5000);
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
          onRevert={handleRevert}
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
                <div className={`h-full flex-1 rounded-r-full transition-colors duration-300 ${submitStep >= 2 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
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
                <span className={`text-[16px] ${submitStep >= 1 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Cross referencing external databases</span>
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
                <span className={`text-[16px] ${submitStep >= 2 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Linking entities to external IDs</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
