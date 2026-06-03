import React from 'react';

export interface Entity {
  id: string;
  name: string;
  type: string;
  status: 'unacknowledged' | 'acknowledged' | 'auto-approved';
  canonicalName?: string;
  externalId?: string;
  db?: string;
  correctType?: string;
  correctExternalId?: string;
  correctDb?: string;
}

const ENTITY_TYPES = [
  "metabolite",
  "protein",
  "gene",
  "biological process",
  "disease",
  "lipid",
  "drug",
  "transporter complex",
  "ion",
  "org_compound",
  "complex",
  "other",
  "unknown"
];

interface ReviewSidebarProps {
  entities: Entity[];
  activeEntityId: string | null;
  onEntityClick: (id: string) => void;
  onAccept: (id: string) => void;
  onRevert: (id: string) => void;
  onChangeType: (id: string, type: string) => void;
  toggleDropdown: (id: string) => void;
  showDropdownId: string | null;
  onSubmit: () => void;
}

const ReviewSidebar: React.FC<ReviewSidebarProps> = ({ 
  entities, 
  activeEntityId, 
  onEntityClick, 
  onAccept, 
  onChangeType,
  toggleDropdown,
  showDropdownId,
  onSubmit
}) => {
  const [unacknowledgedCollapsed, setUnacknowledgedCollapsed] = React.useState(false);
  const [autoApprovedCollapsed, setAutoApprovedCollapsed] = React.useState(true); // Default collapsed for auto-approved
  const [acknowledgedCollapsed, setAcknowledgedCollapsed] = React.useState(false);

  const unacknowledged = entities.filter(e => e.status === 'unacknowledged');
  const acknowledged = entities.filter(e => e.status === 'acknowledged');
  const autoApproved = entities.filter(e => e.status === 'auto-approved');
  const isComplete = unacknowledged.length === 0;

  return (
    <aside className="w-[500px] bg-white border-l border-[#C2C6CA] flex flex-col overflow-hidden shrink-0 sidebar-shadow font-source relative" data-purpose="ReviewSidebar">
      {/* Rectangle 2 (Top Progress Bar) */}
      <div 
        style={{
          position: 'absolute',
          width: isComplete ? '100%' : '323.6px',
          height: '4px',
          left: '0px',
          top: '0px',
          background: '#1C40CA',
          borderRadius: '0px 40px 40px 0px',
          zIndex: 20,
          transition: 'width 0.5s ease-in-out'
        }}
      />

      {/* Step & Progress (Top) */}
      <div className="px-6 pt-4 pb-2 border-b border-[#F1F3F5] shrink-0">
        <div className="flex items-center justify-between mb-1">
          <button className="flex items-center text-[10px] font-bold text-[#868E94] uppercase tracking-widest gap-1">
            {isComplete ? 'STEP 10 OF 10' : 'STEP 10 OF 10'} 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"></path></svg>
          </button>
        </div>
      </div>

      {/* Frame 770 (Review Entities Bar) */}
      <div 
        className="flex items-center justify-between px-4 pt-1 pb-2 h-[52px] bg-white shrink-0 z-10"
        style={{ boxShadow: '0px 1px 0px rgba(183, 183, 183, 0.75)', boxSizing: 'border-box' }}
      >
        <h2 className="text-xl font-bold text-[#35424D]">Review Entities</h2>
        <div className="flex gap-2">
          <svg className="w-4 h-4 text-[#868E94] cursor-pointer hover:text-[#35424D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"></path></svg>
        </div>
      </div>

      {/* KPI Cards Section */}
      <div className="px-4 py-4 shrink-0">
        <div className="flex bg-white border border-[#f0f0f0] rounded-[8px] overflow-hidden shadow-sm">
          {/* Entities Identified */}
          <div className="flex-1 flex flex-col items-start pl-[16px] pr-[20px] py-[8px] border-r border-[#f0f0f0]">
            <span className="text-[13px] text-[#35424D] uppercase tracking-[-0.13px] font-sans">Entities Identified</span>
            <span className="text-[18px] font-semibold text-[#20282E] tracking-[-0.18px] font-sans">{entities.length}</span>
          </div>

          {/* Requires Review */}
          <div className="flex-1 flex flex-col items-start pl-[16px] pr-[20px] py-[8px] border-r border-[#f0f0f0]">
            <div className="flex items-center gap-[4px]">
              <div className="w-[12px] h-[12px] flex items-center justify-center">
                <img src="/requires_review.svg" alt="" className="w-full h-full" />
              </div>
              <span className="text-[13px] text-[#35424D] uppercase tracking-[-0.13px] font-sans">Requires Review</span>
            </div>
            <span className="text-[18px] font-semibold text-[#20282E] tracking-[-0.18px] font-sans">{unacknowledged.length}</span>
          </div>

          {/* Auto Corrected */}
          <div className="flex-1 flex flex-col items-start pl-[16px] pr-[20px] py-[8px]">
            <div className="flex items-center gap-[4px]">
              <span className="text-[13px] text-[#35424D] uppercase tracking-[-0.13px] font-sans">Auto Corrected</span>
              <div className="w-[12px] h-[12px] flex items-center justify-center">
                <img src="/info.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <span className="text-[18px] font-semibold text-[#20282E] tracking-[-0.18px] font-sans">{autoApproved.length}</span>
          </div>
        </div>
      </div>

      {/* Stripe (Instruction Bar) */}
      <div 
        className={`flex items-start px-4 py-2 gap-2 h-8 shrink-0 z-0 transition-colors ${isComplete ? 'bg-green-50 border-b border-green-200' : 'bg-[#EEF2FA] border-b border-[#9AAFFF]'}`}
        style={{ boxSizing: 'border-box' }}
      >
        <svg className={`w-4 h-4 shrink-0 ${isComplete ? 'text-green-600' : 'text-[#1C40CA]'}`} fill="currentColor" viewBox="0 0 24 24">
          {isComplete ? (
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          ) : (
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
          )}
        </svg>
        <p className={`text-[11px] font-medium leading-4 truncate ${isComplete ? 'text-green-800' : 'text-[#35424D]'}`}>
          {isComplete ? "All entities reviewed successfully." : "Confirm the correctness of the entity type tagged to each entity name."}
        </p>
      </div>

      {/* Accordion Content */}
      <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-24 pt-4 custom-scrollbar">
        {/* Unacknowledged Header */}
        {unacknowledged.length > 0 && (
          <div 
            className="flex items-center justify-between border-b border-[#F1F3F5] pb-2 cursor-pointer group"
            onClick={() => setUnacknowledgedCollapsed(!unacknowledgedCollapsed)}
          >
            <span className="font-semibold text-[18px] text-[#35424D] tracking-[-0.09px]">Unacknowledged ({unacknowledged.length})</span>
            <div className="flex items-center gap-2 text-black">
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${unacknowledgedCollapsed ? '' : 'rotate-180'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
        )}

        {/* Unacknowledged Cards */}
        {!unacknowledgedCollapsed && (
          <div className="space-y-2">
            {unacknowledged.map(entity => {
              const formattedId = entity.externalId ? (
                entity.externalId.includes(':') || entity.externalId.startsWith('CPX-') 
                  ? entity.externalId 
                  : `${entity.db}:${entity.externalId}`
              ) : '';

              return (
                <div key={entity.id}>
                  {activeEntityId === entity.id ? (
                    <div className="bg-white rounded-[4px] border border-[#868E94] p-2 flex flex-col gap-3 relative overflow-visible animate-in zoom-in-95 duration-200" id={`review-card-${entity.id}`}>
                      <div className="flex items-start gap-1">
                        <div className="shrink-0 mt-1 relative w-4 h-4">
                          <img src="/requires_review.svg" alt="" className="w-full h-full" />
                        </div>
                        <p className="text-[16px] text-[#35424D] leading-[22px]">
                          We've tagged <span className="font-bold">{entity.name}</span> with entity type <span className="font-bold">{entity.type}</span>{' '}
                          {formattedId && (
                            <span className="text-[#1C40CA] font-mono text-[14px] ml-1 select-all">
                              {formattedId}
                            </span>
                          )}. Please check.
                        </p>
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <div className="relative">
                          <button 
                            className="dropdown-trigger bg-[#e1e6ff] text-[#1C40CA] text-[13px] font-semibold flex items-center justify-center gap-1 p-2 w-[93px] h-8 rounded-[4px] transition-colors box-border"
                            onClick={(e) => { e.stopPropagation(); toggleDropdown(entity.id); }}
                          >
                            Change to <span className="ml-1 text-[10px]">▼</span>
                          </button>
                          {showDropdownId === entity.id && (
                            <div 
                              className="absolute top-full right-0 mt-1 w-[120px] bg-white z-[1000] py-2 flex flex-col items-start shadow-xl border border-gray-100 max-h-[160px] overflow-y-auto custom-scrollbar"
                              style={{ boxSizing: 'border-box' }}
                            >
                              {ENTITY_TYPES.map(t => (
                                <button 
                                  key={t}
                                  className={`w-full text-left px-4 py-1.5 text-[13px] hover:bg-gray-100 transition-colors ${entity.type.toLowerCase() === t.toLowerCase() ? 'font-bold bg-blue-50 text-[#1C40CA]' : 'text-[#5D6871]'}`}
                                  onClick={(e) => { e.stopPropagation(); onChangeType(entity.id, t); }}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <button 
                          className="bg-white border-2 border-[#1C40CA] text-[#1C40CA] px-2 py-1 h-8 rounded-[4px] text-[13px] font-semibold hover:bg-blue-50 transition-all box-border"
                          onClick={(e) => { e.stopPropagation(); onAccept(entity.id); }}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="p-2 bg-white border border-[#e3e4e5] rounded-[4px] flex items-start gap-1.5 hover:border-gray-400 transition-all cursor-pointer group"
                      onClick={() => onEntityClick(entity.id)}
                      id={`review-card-${entity.id}`}
                    >
                      <div className="shrink-0 mt-1 relative w-4 h-4">
                        <img src="/requires_review.svg" alt="" className="w-full h-full" />
                      </div>
                      <p className="text-[16px] text-[#5D6871] leading-[22px] truncate">
                        We've tagged {entity.name} with entity type {entity.type} {formattedId && `(${formattedId})`}. Please c...
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Auto Approved Section */}
        <div className="pt-4">
          <div 
            className="flex items-center justify-between pb-2 cursor-pointer group"
            onClick={() => setAutoApprovedCollapsed(!autoApprovedCollapsed)}
          >
            <span className="font-semibold text-[18px] text-[#35424D]">
              Auto Corrected ({autoApproved.length})
            </span>
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${autoApprovedCollapsed ? '' : 'rotate-180'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth="2"></path>
            </svg>
          </div>
          {!autoApprovedCollapsed && (
            <div className="space-y-2">
              {autoApproved.map(entity => {
                const formattedId = entity.externalId ? (
                  entity.externalId.includes(':') || entity.externalId.startsWith('CPX-') 
                    ? entity.externalId 
                    : `${entity.db}:${entity.externalId}`
                ) : '';

                return (
                  <div key={entity.id} className="p-2 bg-white rounded border border-[#e3e4e5] flex flex-col gap-3 group/card animate-in fade-in slide-in-from-top-1">
                    <div className="flex items-start gap-1.5 w-full">
                      <p className="text-[16px] text-[#35424D] leading-[22px]">
                        Entity type for <span className="font-bold">{entity.name}</span> has been identified as <span className="font-bold">{entity.type}</span>{' '}
                        {formattedId && (
                          <span className="text-[#1C40CA] font-mono text-[14px] ml-1 select-all">
                            {formattedId}
                          </span>
                        )}.
                      </p>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="relative">
                        <button 
                          className="dropdown-trigger bg-white text-[#1C40CA] text-[13px] font-semibold flex items-center justify-center gap-1 p-2 w-[93px] h-8 rounded-[4px] transition-colors hover:bg-blue-50 box-border"
                          onClick={(e) => { e.stopPropagation(); toggleDropdown(entity.id); }}
                        >
                          Change to <span className="ml-1 text-[10px]">▼</span>
                        </button>
                        {showDropdownId === entity.id && (
                          <div 
                            className="absolute top-full right-0 mt-1 w-[120px] bg-white z-[1000] py-2 flex flex-col items-start shadow-xl border border-gray-100 max-h-[160px] overflow-y-auto custom-scrollbar"
                            style={{ boxSizing: 'border-box' }}
                          >
                            {ENTITY_TYPES.map(t => (
                              <button 
                                key={t}
                                className={`w-full text-left px-4 py-1.5 text-[13px] hover:bg-gray-100 transition-colors ${entity.type.toLowerCase() === t.toLowerCase() ? 'font-bold bg-blue-50 text-[#1C40CA]' : 'text-[#5D6871]'}`}
                                onClick={(e) => { e.stopPropagation(); onChangeType(entity.id, t); }}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Acknowledged Section */}
        <div className="pt-4">
          <div 
            className="flex items-center justify-between pb-2 cursor-pointer group"
            onClick={() => setAcknowledgedCollapsed(!acknowledgedCollapsed)}
          >
            <span className={`font-semibold text-[18px] ${acknowledged.length > 0 ? 'text-[#35424D]' : 'text-[#868E94]'}`}>
              Acknowledged ({acknowledged.length})
            </span>
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${acknowledgedCollapsed ? '' : 'rotate-180'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth="2"></path>
            </svg>
          </div>
          {!acknowledgedCollapsed && (
            <div className="space-y-2">
              {acknowledged.map(entity => {
                const formattedId = entity.externalId ? (
                  entity.externalId.includes(':') || entity.externalId.startsWith('CPX-') 
                    ? entity.externalId 
                    : `${entity.db}:${entity.externalId}`
                ) : '';

                return (
                  <div key={entity.id} className="p-2 bg-white rounded border border-[#e3e4e5] flex flex-col gap-3 animate-in fade-in slide-in-from-top-1">
                    <div className="flex items-start gap-1.5 w-full">
                      <div className="shrink-0 mt-1 relative w-4 h-4">
                        <img src="/acknowlege.svg" alt="" className="w-full h-full" />
                      </div>
                      <p className="text-[16px] text-[#35424D] leading-[22px]">
                        You have confirmed <span className="font-bold">{entity.name}</span> with entity type <span className="font-bold">{entity.type}</span>{' '}
                        {formattedId && (
                          <span className="text-[#1C40CA] font-mono text-[14px] ml-1 select-all">
                            {formattedId}
                          </span>
                        )}.
                      </p>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="relative">
                        <button 
                          className="dropdown-trigger bg-white text-[#1C40CA] text-[13px] font-semibold flex items-center justify-center gap-1 p-2 w-[93px] h-8 rounded-[4px] transition-colors hover:bg-blue-50 box-border"
                          onClick={(e) => { e.stopPropagation(); toggleDropdown(entity.id); }}
                        >
                          Change to <span className="ml-1 text-[10px]">▼</span>
                        </button>
                        {showDropdownId === entity.id && (
                          <div 
                            className="absolute top-full right-0 mt-1 w-[120px] bg-white z-[1000] py-2 flex flex-col items-start shadow-xl border border-gray-100 max-h-[160px] overflow-y-auto custom-scrollbar"
                            style={{ boxSizing: 'border-box' }}
                          >
                            {ENTITY_TYPES.map(t => (
                              <button 
                                key={t}
                                className={`w-full text-left px-4 py-1.5 text-[13px] hover:bg-gray-100 transition-colors ${entity.type.toLowerCase() === t.toLowerCase() ? 'font-bold bg-blue-50 text-[#1C40CA]' : 'text-[#5D6871]'}`}
                                onClick={(e) => { e.stopPropagation(); onChangeType(entity.id, t); }}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer Action */}
      {isComplete && (
        <div className="absolute bottom-0 left-0 w-full h-[64px] px-6 bg-[#F7F7F7] border-t border-[#F1F3F5] flex items-center justify-center animate-in slide-in-from-bottom-4">
          <button 
            className="w-[148px] h-[29px] bg-[#1C40CA] text-white rounded-[4px] text-[12px] font-semibold hover:bg-[#1633A1] transition-colors flex items-center justify-center"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </aside>
  );
};

export default ReviewSidebar;
