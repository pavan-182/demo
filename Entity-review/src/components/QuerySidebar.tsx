import React from 'react';

interface Query {
  id: string;
  type: string;
  source: string;
  text: string;
  status: 'active' | 'deleted';
}

interface QuerySidebarProps {
  onSubmit?: () => void;
}

const QuerySidebar: React.FC<QuerySidebarProps> = ({ onSubmit }) => {
  const [activeCollapsed, setActiveCollapsed] = React.useState(false);
  const [deletedCollapsed, setDeletedCollapsed] = React.useState(true);
  const [showFilter, setShowFilter] = React.useState(false);

  const queries: Query[] = [
    {
      id: 'Q1',
      type: 'Tool',
      source: 'ACE',
      text: 'Please check the spelling of "Ferroptosis" in the article title.',
      status: 'active'
    },
    {
      id: 'Q2',
      type: 'User',
      source: 'ME | Template',
      text: 'A citation of Fig. 1 has been added in the introduction, please check if the placement is appropriate.',
      status: 'active'
    },
    {
      id: 'Q3',
      type: 'Pre-flagged queries',
      source: '',
      text: 'The term "lipid peroxidation" is used multiple times. Please ensure consistent terminology and check if a definition is required in the abstract.',
      status: 'active'
    }
  ];

  return (
    <aside className="w-[400px] bg-white border-l border-[#C2C6CA] flex flex-col h-full overflow-hidden shrink-0 font-source relative">
      {/* Rectangle 2 (Top Progress Bar) */}
      <div 
        style={{
          position: 'absolute',
          width: '90%', // 9 of 10
          height: '4px',
          left: '0px',
          top: '0px',
          background: '#1C40CA',
          borderRadius: '0px 40px 40px 0px',
          zIndex: 20,
          transition: 'width 0.5s ease-in-out'
        }}
      />

      {/* Step Indicator */}
      <div className="px-6 pt-4 pb-2 border-b border-[#F1F3F5] shrink-0">
        <div className="flex items-center justify-between mb-1">
          <button className="flex items-center text-[10px] font-bold text-[#868E94] uppercase tracking-widest gap-1">
            STEP 9 OF 10
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"></path></svg>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-b border-[#F1F3F5]">
        <h2 className="text-xl font-bold text-[#35424D]">Queries</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-32">
        {/* Active Queries Section */}
        <div>
          <button 
            className="w-full flex items-center justify-between py-2 group"
            onClick={() => setActiveCollapsed(!activeCollapsed)}
          >
            <span className="font-semibold text-[16px] text-[#35424D]">Active (3)</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${activeCollapsed ? '-rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth="2"></path>
            </svg>
          </button>

          {!activeCollapsed && (
            <div className="mt-2 space-y-3">
              {/* Filter Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center gap-2 px-3 py-1.5 border border-[#D7D9DB] rounded-[4px] text-[13px] text-[#35424D] bg-white hover:bg-gray-50"
                >
                  Filter: All (3)
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"></path></svg>
                </button>
                
                {showFilter && (
                  <div className="absolute top-full left-0 mt-1 w-[160px] bg-white shadow-xl border border-gray-200 rounded-[4px] z-50 py-2">
                    <div className="px-4 py-2 text-[13px] font-semibold text-gray-500 border-b border-gray-100 mb-1">Filter</div>
                    <button className="w-full text-left px-4 py-2 text-[13px] flex items-center justify-between hover:bg-blue-50">
                      <span>✓ All (3)</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-[13px] hover:bg-blue-50">Tool (1)</button>
                    <button className="w-full text-left px-4 py-2 text-[13px] hover:bg-blue-50">User (2)</button>
                    <button className="w-full text-left px-4 py-2 text-[13px] hover:bg-blue-50">Pre-flagged (2)</button>
                  </div>
                )}
              </div>

              {/* Query Cards */}
              {queries.map((query) => (
                <div key={query.id} className="bg-white border border-[#E3E4E5] rounded-[4px] p-4 space-y-2 hover:shadow-md transition-shadow relative text-left">
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-3 h-3 bg-orange-400 rounded-sm shrink-0"></div>
                    <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                      {query.id} | {query.type} {query.source && ` - ${query.source}`}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#35424D] leading-relaxed text-left">
                    {query.text}
                  </p>
                  {query.id === 'Q3' && (
                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-50 mt-4 text-left">
                      <button className="px-4 py-1.5 border-2 border-[#1C40CA] text-[#1C40CA] rounded-[4px] text-[13px] font-bold hover:bg-blue-50">
                        Edit
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Deleted Queries Section */}
        <div className="border-t border-[#F1F3F5] pt-2">
          <button 
            className="w-full flex items-center justify-between py-2 group"
            onClick={() => setDeletedCollapsed(!deletedCollapsed)}
          >
            <span className="font-semibold text-[16px] text-[#35424D]">Deleted (0)</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${deletedCollapsed ? '-rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Submit Footer Action */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-[#F1F3F5] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom-4">
        <button 
          className="w-full bg-[#1C40CA] text-white py-3 rounded-lg font-bold shadow hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
          onClick={onSubmit}
        >
          Submit Review
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </aside>
  );
};

export default QuerySidebar;
