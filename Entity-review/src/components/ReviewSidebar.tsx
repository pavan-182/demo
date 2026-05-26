import React from 'react';

export interface Entity {
  id: string;
  name: string;
  type: string;
  status: 'unacknowledged' | 'acknowledged';
}

const ENTITY_TYPES = [
  "ion",
  "org_compound",
  "hydrate",
  "complex",
  "chem_group",
  "unknown",
  "space_group",
  "elec_state",
  "chem:bond"
];

interface ReviewSidebarProps {
  entities: Entity[];
  activeEntityId: string | null;
  onEntityClick: (id: string) => void;
  onAccept: (id: string) => void;
  onChangeType: (id: string, type: string) => void;
  toggleDropdown: (id: string) => void;
  showDropdownId: string | null;
}

const ReviewSidebar: React.FC<ReviewSidebarProps> = ({ 
  entities, 
  activeEntityId, 
  onEntityClick, 
  onAccept, 
  onChangeType,
  toggleDropdown,
  showDropdownId
}) => {
  const unacknowledged = entities.filter(e => e.status === 'unacknowledged');
  const acknowledged = entities.filter(e => e.status === 'acknowledged');

  return (
    <aside className="w-[420px] bg-white border-l border-[#C2C6CA] flex flex-col overflow-hidden shrink-0 sidebar-shadow font-source relative" data-purpose="ReviewSidebar">
      {/* Rectangle 2 (Top Progress Bar) */}
      <div 
        style={{
          position: 'absolute',
          width: '323.6px',
          height: '4px',
          left: '0px',
          top: '0px',
          background: '#1C40CA',
          borderRadius: '0px 40px 40px 0px',
          zIndex: 20
        }}
      />

      {/* Step & Progress (Top) */}
      <div className="px-6 pt-4 pb-2 border-b border-[#F1F3F5] shrink-0">
        <div className="flex items-center justify-between mb-1">
          <button className="flex items-center text-[10px] font-bold text-[#868E94] uppercase tracking-widest gap-1">
            STEP 8 OF 10 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"></path></svg>
          </button>
        </div>
      </div>

      {/* Frame 770 (Review Entities Bar) */}
      <div 
        className="flex items-center justify-between px-4 pt-1 pb-2 h-[52px] bg-white shrink-0 z-10"
        style={{ boxShadow: '0px 1px 0px rgba(183, 183, 183, 0.75)', boxSizing: 'border-box' }}
      >
        <h2 className="text-xl font-bold text-[#35424D]">Review Chemical Entities</h2>
        <div className="flex gap-2">
          <svg className="w-4 h-4 text-[#868E94] cursor-pointer hover:text-[#35424D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"></path></svg>
        </div>
      </div>

      {/* Stripe (Instruction Bar) */}
      <div 
        className="flex items-start px-4 py-2 gap-2 h-8 bg-[#EEF2FA] border-b border-[#9AAFFF] shrink-0 z-0"
        style={{ boxSizing: 'border-box' }}
      >
        <svg className="w-4 h-4 shrink-0 text-[#1C40CA]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
        <p className="text-[11px] font-medium text-[#35424D] leading-4 truncate">
          Confirm the correctness of the entity type tagged to each entity name.
        </p>
      </div>

      {/* Accordion Content */}
      <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-12 pt-4 custom-scrollbar">
        <div className="flex items-center justify-between border-b border-[#F1F3F5] pb-2">
          <span className="font-bold text-sm text-[#35424D]">Unacknowledged ({unacknowledged.length})</span>
          <div className="flex items-center gap-2 text-[#868E94]">
            <svg className="w-4 h-4 cursor-pointer hover:text-[#35424D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" strokeWidth="2"></path></svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-[#35424D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"></path></svg>
          </div>
        </div>

        {/* Unacknowledged Cards */}
        <div className="space-y-3">
          {unacknowledged.map(entity => (
            <div key={entity.id}>
              {activeEntityId === entity.id ? (
                <div className="bg-white rounded-lg border-2 border-[#1C40CA] p-4 shadow-lg relative overflow-visible animate-in zoom-in-95 duration-200" id={`review-card-${entity.id}`}>
                  <div className="flex items-start gap-2 mb-4">
                    <div className="shrink-0 mt-0.5 relative w-4 h-4">
                      <svg 
                        width="14" 
                        height="16" 
                        viewBox="0 0 14 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: '14px',
                          height: '15.55px',
                        }}
                      >
                        <path d="M7 0L14 3.8875V11.6625L7 15.55L0 11.6625V3.8875L7 0Z" fill="#E65100"/>
                        <path d="M7 4V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="7" cy="13" r="1" fill="white"/>
                      </svg>
                    </div>                    <p className="text-[12px] text-[#5D6871] leading-normal">
                      We've tagged <span className="font-bold text-[#35424D]">'{entity.name}'</span> with entity type <span className="font-bold text-[#35424D]">'{entity.type}'</span>. Please check.
                    </p>
                  </div>
                  <div className="flex items-center justify-end space-x-3">
                    <div className="relative">
                      <button 
                        className="dropdown-trigger text-[#1C40CA] text-[11px] font-bold flex items-center hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                        onClick={(e) => { e.stopPropagation(); toggleDropdown(entity.id); }}
                      >
                        Change to <span className="ml-1 text-[8px]">▼</span>
                      </button>
                      {showDropdownId === entity.id && (
                        <div 
                          className="absolute top-full right-0 mt-1 w-[120px] bg-white z-[1000] py-2 flex flex-col items-start"
                          style={{ 
                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.17), 0px 2px 4px rgba(0, 0, 0, 0.12)',
                            boxSizing: 'border-box'
                          }}
                        >
                          {ENTITY_TYPES.map(t => (
                            <button 
                              key={t}
                              className={`w-full text-left px-4 py-1.5 text-[11px] hover:bg-gray-100 transition-colors ${entity.type.toLowerCase() === t.toLowerCase() ? 'font-bold bg-blue-50 text-[#1C40CA]' : 'text-[#5D6871]'}`}
                              onClick={(e) => { e.stopPropagation(); onChangeType(entity.id, t); }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <button 
                      className="bg-white border border-[#1C40CA] text-[#1C40CA] px-5 py-1.5 rounded text-[11px] font-bold hover:bg-[#1C40CA] hover:text-white transition-all shadow-sm"
                      onClick={(e) => { e.stopPropagation(); onAccept(entity.id); }}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              ) : (
                <div 
                  className="p-4 bg-white border border-[#F1F3F5] shadow-sm rounded-lg flex items-start gap-3 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => onEntityClick(entity.id)}
                  id={`review-card-${entity.id}`}
                >
                  <div className="shrink-0 mt-1 relative w-4 h-4 group-hover:scale-110 transition-transform">
                    <svg 
                      width="14" 
                      height="16" 
                      viewBox="0 0 14 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: '14px',
                        height: '15.55px',
                      }}
                    >
                      <path d="M7 0L14 3.8875V11.6625L7 15.55L0 11.6625V3.8875L7 0Z" fill="#E65100"/>
                      <path d="M7 4V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="7" cy="13" r="1" fill="white"/>
                    </svg>
                  </div>                  <p className="text-[12px] text-[#5D6871] group-hover:text-[#35424D] transition-colors">
                    We've tagged <span className="font-semibold">'{entity.name}'</span> with entity type ‘{entity.type}’. Please c...
                  </p>
                </div>
              )}
            </div>
          ))}
          {unacknowledged.length === 0 && (
            <p className="text-center py-8 text-[#868E94] text-sm italic">No more entities to review.</p>
          )}
        </div>

        {/* Acknowledged Section */}
        <div className="pt-4 border-t border-[#F1F3F5]">
          <div className="flex items-center justify-between pb-2 mb-4">
            <span className={`font-bold text-sm ${acknowledged.length > 0 ? 'text-[#35424D]' : 'text-[#868E94]'}`}>
              Acknowledged ({acknowledged.length})
            </span>
            <svg className="w-4 h-4 text-[#868E94] cursor-pointer hover:text-[#35424D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"></path></svg>
          </div>
          <div className="space-y-2">
            {acknowledged.map(entity => (
              <div key={entity.id} className="p-3 bg-[#F8F9FA] rounded border border-[#F1F3F5] text-[11px] text-[#5D6871] flex items-center justify-between animate-in fade-in slide-in-from-top-1">
                <span><span className="font-bold text-[#35424D]">{entity.name}</span> ({entity.type})</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-green-600 font-bold uppercase tracking-wider">Accepted</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ReviewSidebar;
