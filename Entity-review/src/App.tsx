import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DocumentEditor from './components/DocumentEditor';
import ReviewSidebar from './components/ReviewSidebar';
import type { Entity } from './components/ReviewSidebar';
import './App.css';

const INITIAL_ENTITIES: Entity[] = [
  { id: 'zncl2', name: 'ZnCl2', type: 'org_compound', status: 'unacknowledged' },
  { id: 'n2o', name: 'N2O', type: 'complex', status: 'unacknowledged' },
  { id: 'nh4-n', name: 'NH4-N', type: 'ion', status: 'unacknowledged' },
];

const App: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>(INITIAL_ENTITIES);
  const [activeEntityId, setActiveEntityId] = useState<string | null>(null);
  const [showDropdownId, setShowDropdownId] = useState<string | null>(null);
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
    setEntities(prev => prev.map(e => e.id === id ? { ...e, type } : e));
    setShowDropdownId(null);
  };

  useEffect(() => {
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
  }, [activeEntityId, entities]);

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
        />
        
        <svg className="fixed inset-0 pointer-events-none z-50 w-full h-full">
          {connectors.map(conn => {
            const color = "#ef4444";
            return (
              <React.Fragment key={conn.id}>
                <path 
                  d={conn.pathData} 
                  fill="none" 
                  stroke={color} 
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  className="transition-all duration-300"
                  opacity="0.6"
                />
                <circle cx={conn.startX} cy={conn.startY} r="2" fill={color} opacity="0.6" />
                <circle cx={conn.endX} cy={conn.endY} r="2" fill={color} opacity="0.6" />
              </React.Fragment>
            );
          })}
        </svg>
      </main>
    </div>
  );
};

export default App;
