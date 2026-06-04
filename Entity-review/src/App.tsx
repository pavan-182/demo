import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DocumentEditor from './components/DocumentEditor';
import ReviewSidebar from './components/ReviewSidebar';
import PublisherCentral from './components/PublisherCentral';
import DashboardEmptyState from './components/DashboardEmptyState';
import QueryReview from './components/QueryReview';
import type { Entity } from './components/ReviewSidebar';
import './App.css';

const INITIAL_ENTITIES: Entity[] = [
  { 
    id: 'pge2', 
    name: 'PGE2', 
    type: 'protein', 
    status: 'unacknowledged',
    db: 'NCBI Gene',
    externalId: '5743',
    correctType: 'metabolite',
    correctExternalId: 'CHEBI:26333',
    correctDb: 'ChEBI'
  },
  { 
    id: '4hne', 
    name: '4-hydroxynonenal (4HNE)', 
    type: 'gene', 
    status: 'unacknowledged',
    db: 'NCBI Gene',
    externalId: '2592',
    correctType: 'metabolite',
    correctExternalId: 'CHEBI:24199',
    correctDb: 'ChEBI'
  },
  { 
    id: 'ltb4', 
    name: 'LTB4', 
    type: 'ion', 
    status: 'unacknowledged',
    db: 'NCBI Gene',
    externalId: '1241',
    correctType: 'metabolite',
    correctExternalId: 'CHEBI:15647',
    correctDb: 'ChEBI'
  },
  { 
    id: 'ltc4', 
    name: 'LTC4', 
    type: 'complex', 
    status: 'unacknowledged',
    db: 'NCBI Gene',
    externalId: '4056',
    correctType: 'metabolite',
    correctExternalId: 'CHEBI:15646',
    correctDb: 'ChEBI'
  },
  { id: 'ferroptosis', name: 'Ferroptosis', type: 'biological process', status: 'auto-approved', canonicalName: 'ferroptosis', externalId: 'GO:0097707', db: 'Gene Ontology' },
  { id: 'apoptosis', name: 'Apoptosis', type: 'biological process', status: 'auto-approved', canonicalName: 'apoptotic process', externalId: 'GO:0006915', db: 'Gene Ontology' },
  { id: 'cancer', name: 'Cancer', type: 'disease', status: 'auto-approved', canonicalName: 'Neoplasms', externalId: 'D009369', db: 'MeSH' },
  { id: 'gpx4', name: 'GPX4', type: 'gene', status: 'auto-approved', canonicalName: 'GPX4', externalId: '2879', db: 'NCBI Gene' },
  { id: 'system_xc', name: 'system Xc-', type: 'transporter complex', status: 'auto-approved', canonicalName: 'SLC7A11 (xCT) + SLC3A2 (4F2hc)', externalId: '23657+6520', db: 'NCBI Gene' },
  { id: 'slc7a11', name: 'SLC7A11', type: 'gene', status: 'auto-approved', canonicalName: 'SLC7A11', externalId: '23657', db: 'NCBI Gene' },
  { id: 'slc3a2', name: 'SLC3A2', type: 'gene', status: 'auto-approved', canonicalName: 'SLC3A2', externalId: '6520', db: 'NCBI Gene' },
  { id: 'gsh', name: 'GSH (glutathione)', type: 'metabolite', status: 'auto-approved', canonicalName: 'glutathione', externalId: 'CHEBI:16856', db: 'ChEBI' },
  { id: 'ros', name: 'ROS', type: 'metabolite', status: 'auto-approved', canonicalName: 'reactive oxygen species', externalId: 'CHEBI:26523', db: 'ChEBI' },
  { id: 'iron', name: 'iron', type: 'metabolite', status: 'auto-approved', canonicalName: 'iron(2+)', externalId: 'CHEBI:18248', db: 'ChEBI' },
  { id: 'mda', name: 'MDA (malondialdehyde)', type: 'metabolite', status: 'auto-approved', canonicalName: 'malondialdehyde', externalId: 'CHEBI:566274', db: 'ChEBI' },
  { id: 'alox', name: 'ALOX (family)', type: 'gene', status: 'auto-approved', canonicalName: 'ALOX5', externalId: '240', db: 'NCBI Gene' },
  { id: 'phd2', name: 'PHD2 / EGLN1', type: 'gene', status: 'auto-approved', canonicalName: 'EGLN1', externalId: '54583', db: 'NCBI Gene' },
  { id: 'pufas', name: 'PUFAs', type: 'lipid', status: 'auto-approved', canonicalName: 'polyunsaturated fatty acid', externalId: 'CHEBI:26208', db: 'ChEBI' },
  { id: 'phospholipids', name: 'phospholipids', type: 'lipid', status: 'auto-approved', canonicalName: 'phospholipid', externalId: 'CHEBI:16247', db: 'ChEBI' },
  { id: 'cardiolipin', name: 'cardiolipin', type: 'lipid', status: 'auto-approved', canonicalName: 'cardiolipin', externalId: 'CHEBI:28494', db: 'ChEBI' },
  { id: 'phosphatidylcholine', name: 'phosphatidylcholine', type: 'lipid', status: 'auto-approved', canonicalName: '1-acyl-2-acyl-sn-glycero-3-phosphocholine', externalId: 'CHEBI:64482', db: 'ChEBI' },
  { id: 'phosphatidylethanolamine', name: 'phosphatidylethanolamine', type: 'lipid', status: 'auto-approved', canonicalName: 'phosphatidylethanolamine', externalId: 'CHEBI:16038', db: 'ChEBI' },
  { id: 'ptgs2_cox2', name: 'PTGS2 / COX2', type: 'gene', status: 'auto-approved', canonicalName: 'PTGS2', externalId: '5743', db: 'NCBI Gene' },
  { id: 'acsl4', name: 'ACSL4', type: 'gene', status: 'auto-approved', canonicalName: 'ACSL4', externalId: '2182', db: 'NCBI Gene' },
  { id: 'nfe2l2_nrf2', name: 'NFE2L2 / NRF2', type: 'gene', status: 'auto-approved', canonicalName: 'NFE2L2', externalId: '4780', db: 'NCBI Gene' },
  { id: 'escrt_iii', name: 'ESCRT-III', type: 'other', status: 'auto-approved', canonicalName: 'ESCRT-III complex', externalId: 'CPX-1624', db: 'ComplexPortal' },
  { id: 'hmgb1', name: 'HMGB1', type: 'gene', status: 'auto-approved', canonicalName: 'HMGB1', externalId: '3146', db: 'NCBI Gene' },
  { id: 'rage_ager', name: 'RAGE / AGER', type: 'gene', status: 'auto-approved', canonicalName: 'AGER', externalId: '177', db: 'NCBI Gene' },
  { id: 'nf_kb_nfkb1', name: 'NF-κB / NFKB1', type: 'gene', status: 'auto-approved', canonicalName: 'NFKB1', externalId: '4790', db: 'NCBI Gene' },
  { id: 'p53_tp53', name: 'p53 / TP53', type: 'gene', status: 'auto-approved', canonicalName: 'TP53', externalId: '7157', db: 'NCBI Gene' },
  { id: 'sat1', name: 'SAT1', type: 'gene', status: 'auto-approved', canonicalName: 'SAT1', externalId: '6303', db: 'NCBI Gene' },
  { id: 'alox15', name: 'ALOX15', type: 'gene', status: 'auto-approved', canonicalName: 'ALOX15', externalId: '246', db: 'NCBI Gene' },
  { id: 'ireb2', name: 'IREB2', type: 'gene', status: 'auto-approved', canonicalName: 'IREB2', externalId: '3658', db: 'NCBI Gene' },
  { id: 'ferritin_fth1', name: 'ferritin / FTH1', type: 'gene', status: 'auto-approved', canonicalName: 'FTH1', externalId: '2495', db: 'NCBI Gene' },
  { id: 'transferrin_tf', name: 'transferrin / TF', type: 'gene', status: 'auto-approved', canonicalName: 'TF', externalId: '2152', db: 'NCBI Gene' },
  { id: 'erastin', name: 'erastin', type: 'drug', status: 'auto-approved', canonicalName: 'erastin', externalId: 'CHEBI:94287', db: 'ChEBI' },
  { id: 'rsl3', name: 'RSL3', type: 'drug', status: 'auto-approved', canonicalName: 'RSL3', externalId: 'CHEBI:173109', db: 'ChEBI' },
  { id: 'sorafenib', name: 'sorafenib', type: 'drug', status: 'auto-approved', canonicalName: 'Sorafenib', externalId: 'D000077157', db: 'MeSH' },
  { id: 'sulfasalazine', name: 'sulfasalazine', type: 'drug', status: 'auto-approved', canonicalName: 'Sulfasalazine', externalId: 'D012460', db: 'MeSH' },
  { id: 'artesunate', name: 'artesunate', type: 'drug', status: 'auto-approved', canonicalName: 'Artesunate', externalId: 'D000077332', db: 'MeSH' },
  { id: 'doxorubicin', name: 'doxorubicin', type: 'drug', status: 'auto-approved', canonicalName: 'Doxorubicin', externalId: 'D004317', db: 'MeSH' },
  { id: 'melanoma', name: 'melanoma', type: 'disease', status: 'auto-approved', canonicalName: 'Melanoma', externalId: 'D000096142', db: 'MeSH' },
  { id: 'pancreatic_cancer', name: 'pancreatic cancer', type: 'disease', status: 'auto-approved', canonicalName: 'pancreatic cancer', externalId: 'DOID:1793', db: 'Disease Ontology' },
  { id: 'prostate_cancer', name: 'prostate cancer', type: 'disease', status: 'auto-approved', canonicalName: 'prostate cancer', externalId: 'DOID:10283', db: 'Disease Ontology' },
  { id: 'nsclc', name: 'NSCLC', type: 'disease', status: 'auto-approved', canonicalName: 'non-small cell lung carcinoma', externalId: 'DOID:3908', db: 'Disease Ontology' },
  { id: 'breast_cancer', name: 'breast cancer', type: 'disease', status: 'auto-approved', canonicalName: 'Breast Neoplasms', externalId: 'D000072656', db: 'MeSH' },
  { id: 'colon_cancer', name: 'colon cancer', type: 'disease', status: 'auto-approved', canonicalName: 'colon cancer', externalId: 'DOID:219', db: 'Disease Ontology' },
  { id: 'leukemia', name: 'leukemia', type: 'disease', status: 'auto-approved', canonicalName: 'Leukemia', externalId: 'D000406', db: 'MeSH' },
  { id: 'lymphoma', name: 'lymphoma', type: 'disease', status: 'auto-approved', canonicalName: 'Lymphoma', externalId: 'D000077548', db: 'MeSH' },
];

const App: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>(INITIAL_ENTITIES);
  const [activeEntityId, setActiveEntityId] = useState<string | null>(null);
  const [showDropdownId, setShowDropdownId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0);
  const [showDashboard, setShowDashboard] = useState(true);
  const [isUploaded, setIsUploaded] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);
  const [viewMode, setViewMode] = useState<'entity-review' | 'query-review'>('entity-review');
  const [publisherInitialView, setPublisherInitialView] = useState<'all-articles' | 'article-details'>('all-articles');
  const [uploadTime, setUploadTime] = useState<string>('');
  const [ceCompletionTime, setCeCompletionTime] = useState<string>('');
  
  // Progress states
  const [graphicsCompleted, setGraphicsCompleted] = useState(false);
  const [copyeditingCompleted, setCopyeditingCompleted] = useState(false);

  const getNowFormatted = () => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const completeCopyediting = () => {
    setCopyeditingCompleted(true);
    setCeCompletionTime(getNowFormatted());
  };

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
    setEntities(prev => prev.map(e => {
      if (e.id === id) {
        // If the user selects the "correct" type, also apply the correct ID and DB
        if (e.correctType && type.toLowerCase() === e.correctType.toLowerCase()) {
          return { 
            ...e, 
            type, 
            status: 'acknowledged', 
            externalId: e.correctExternalId, 
            db: e.correctDb 
          };
        }
        return { ...e, type, status: 'acknowledged' };
      }
      return e;
    }));
    setActiveEntityId(null);
    setShowDropdownId(null);
  };

  const handleQuerySubmit = () => {
    setIsSubmitting(true);
    setSubmitStep(1);
    
    // Progress through steps
    setTimeout(() => setSubmitStep(2), 1500);
    setTimeout(() => setSubmitStep(3), 3000);
    setTimeout(() => setSubmitStep(4), 4500);

    setTimeout(() => {
      setIsSubmitting(false);
      setViewMode('entity-review');
      setShowDashboard(false);
      setSubmitStep(0);
    }, 5000);
  };

  const handleSubmit = () => {
    completeCopyediting();
    setPublisherInitialView('article-details');
    setShowDashboard(true);
  };

  useEffect(() => {
    if (showDashboard || !isUploaded || viewMode !== 'entity-review') {
      setConnectors([]);
      return;
    }

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
  }, [activeEntityId, entities, showDashboard, isUploaded, viewMode]);

  if (!isUploaded) {
    return <DashboardEmptyState onUploadSuccess={() => {
      setIsUploaded(true);
      setJustUploaded(true);
      setUploadTime(getNowFormatted());
      setCeCompletionTime('');
      setCopyeditingCompleted(false);
      setPublisherInitialView('all-articles');
    }} />;
  }

  const renderContent = () => {
    if (showDashboard) {
      return (
        <PublisherCentral 
          onEditCentral={(mode: string) => {
            setViewMode(mode === 'query-review' ? 'query-review' : 'entity-review');
            setShowDashboard(false);
          }} 
          graphicsCompleted={graphicsCompleted}
          onCompleteGraphics={() => setGraphicsCompleted(true)}
          copyeditingCompleted={copyeditingCompleted}
          justUploaded={justUploaded}
          onClearJustUploaded={() => setJustUploaded(false)}
          uploadTime={uploadTime}
          ceCompletionTime={ceCompletionTime}
          initialView={publisherInitialView}
        />
      );
    }

    if (viewMode === 'query-review') {
      return (
        <QueryReview 
          onBack={() => setShowDashboard(true)}
          onSubmit={handleQuerySubmit}
        />
      );
    }

    return (
      <div className="h-screen flex flex-col overflow-hidden bg-white text-on-surface font-sans text-left">
        <Header onSubmit={handleSubmit} />
        <main className="flex-1 flex overflow-hidden relative text-left">
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
      </div>
    );
  };

  return (
    <>
      {renderContent()}
      
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-md text-left">
          <div className="flex flex-col items-center w-[400px] text-left">
            {/* Segmented Progress Bar Container */}
            <div className="w-full h-8 border-[3px] border-[#3B17D3] rounded-full p-1 flex items-center mb-12">
              <div className="flex-1 flex gap-1 h-full">
                <div className={`h-full flex-1 rounded-l-full transition-colors duration-300 ${submitStep >= 1 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
                <div className={`h-full flex-1 transition-colors duration-300 ${submitStep >= 2 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
                <div className={`h-full flex-1 rounded-r-full transition-colors duration-300 ${submitStep >= 3 ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'}`} />
              </div>
            </div>

            {/* Checklist */}
            <div className="w-full space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${submitStep > 1 ? 'bg-[#3B17D3] border-[#3B17D3]' : 'border-gray-300'}`}>
                  {submitStep > 1 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  ) : submitStep === 1 ? (
                    <div className="w-3 h-3 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                  ) : null}
                </div>
                <span className={`text-[16px] ${submitStep >= 1 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Tagging entities</span>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${submitStep > 2 ? 'bg-[#3B17D3] border-[#3B17D3]' : 'border-gray-300'}`}>
                  {submitStep > 2 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  ) : submitStep === 2 ? (
                    <div className="w-3 h-3 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                  ) : null}
                </div>
                <span className={`text-[16px] ${submitStep >= 2 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Cross referencing external databases</span>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${submitStep > 3 ? 'bg-[#3B17D3] border-[#3B17D3]' : 'border-gray-300'}`}>
                  {submitStep > 3 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  ) : submitStep === 3 ? (
                    <div className="w-3 h-3 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                  ) : null}
                </div>
                <span className={`text-[16px] ${submitStep >= 3 ? 'text-[#1F2937] font-semibold' : 'text-gray-400'}`}>Linking entities to external IDs</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
