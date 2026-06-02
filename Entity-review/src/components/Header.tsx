import React from 'react';

interface HeaderProps {
  onPause?: () => void;
  onSubmit?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPause, onSubmit }) => {
  return (
    <header className="flex flex-col w-full bg-[#F8F8F8] border-b border-[#B7B7B7] [filter:drop-shadow(0px_1px_0px_#B7B7B7)] shrink-0 z-[1000]" style={{ height: '112px' }}>
      {/* Header/Top (40px) */}
      <div className="h-10 flex items-center justify-between px-4">
        {/* Left Header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <img 
                src="/Edit central(1).png" 
                alt="Edit central" 
                className="w-[76px] h-[27px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center px-1.5 h-[14px] bg-gradient-to-b from-[#178CE1] to-[rgba(22,79,120,0.88)] rounded-[28px]">
              <span className="text-white text-[8px] font-semibold font-source leading-none">BETA</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-2 py-1">
              <svg className="w-4 h-4 text-[#35424D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="text-[13px] font-semibold text-[#35424D] font-source">CTARC/100913</span>
            </div>
            <div className="flex items-center gap-1 px-1">
              <svg className="w-4 h-4 text-[#868E94]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.09-5.09L16.5 10.5 10 17z"></path>
              </svg>
              <span className="text-[13px] text-[#868E94] font-source">Saved</span>
            </div>
            <div className="flex items-center gap-1 px-1">
              <svg className="w-4 h-4 text-[#868E94]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
              </svg>
              <span className="text-[13px] text-[#868E94] font-source">Validated</span>
            </div>
          </div>
        </div>

        {/* Right Header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="w-7 h-7 flex items-center justify-center text-[#5D6871] hover:bg-gray-100 rounded transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" stroke="#5D6871" strokeWidth="2">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" stroke="none" fill="#5D6871"></path>
                <rect x="3" y="3" width="18" height="14" rx="2" fill="white" stroke="#5D6871" strokeWidth="1.5" />
                <line x1="7" y1="7" x2="17" y2="7" stroke="#5D6871" strokeWidth="1.5" />
                <line x1="7" y1="10" x2="17" y2="10" stroke="#5D6871" strokeWidth="1.5" />
                <line x1="7" y1="13" x2="13" y2="13" stroke="#5D6871" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="w-7 h-7 flex items-center justify-center text-[#5D6871] hover:bg-gray-100 rounded transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" stroke="#5D6871" strokeWidth="1.5">
                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" fill="white" />
              </svg>
            </button>
            <button className="w-7 h-7 flex items-center justify-center text-[#5D6871] hover:bg-gray-100 rounded transition-colors relative">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9" fill="white" stroke="#5D6871" strokeWidth="1.5"/>
                <path d="M10 6V11" stroke="#5D6871" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="10" cy="14" r="1" fill="#5D6871"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onPause}
              className="h-7 px-3 flex items-center gap-1 text-[#1C40CA] text-[13px] font-semibold hover:bg-blue-50 rounded transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path>
              </svg>
              Pause
            </button>
            <button 
              onClick={onSubmit}
              className="h-7 px-3 bg-[#1C40CA] text-white text-[13px] font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Header/Middle (32px) */}
      <div className="h-8 flex items-center px-2 gap-0">
        <div className="flex items-center">
          {['File', 'Edit', 'View', 'Insert', 'Link', 'Style', 'Table', 'Convert', 'Help'].map(menu => (
            <button key={menu} className="px-2 py-1 text-[#5D6871] text-[13px] font-semibold hover:bg-gray-100 rounded transition-colors font-source">
              {menu}
            </button>
          ))}
        </div>
      </div>

      {/* Header/Bottom (40px) */}
      <div className="h-10 flex items-center bg-[#F8F8F8] [gap:202px] w-[1280px]">
        {/* Header/Icons (831px) */}
        <div className="h-10 flex items-center py-2 px-4 gap-4 w-[831px] shrink-0">
          {/* Icon group/edit (328px) */}
          <div className="flex items-start pr-2 gap-4 border-r border-[#C2C6CA] w-[328px] h-6 shrink-0">
            {/* Dropdown-Input (240px) */}
            <div className="flex items-center justify-between w-[240px] h-6 px-2 py-[2px] gap-2 border border-[#BBBFC3] rounded bg-white cursor-pointer hover:border-[#9AA1A6] transition-colors shrink-0">
              <span className="text-[13px] text-[#9AA1A6] font-source w-[204px] h-4 leading-4 flex-grow mx-auto">Select Para-Style</span>
              <svg className="w-5 h-5 text-[#35424D] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
            {/* Undo/Redo */}
            <div className="flex items-center gap-4 shrink-0">
              <button className="w-6 h-6 flex-none order-1 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Undo">
                <img src="/undo.png" alt="Undo" className="w-[15px] h-[20px] object-contain" />
              </button>
              <button className="w-6 h-6 flex-none order-2 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Redo">
                <img src="/redo.png" alt="Redo" className="w-[15px] h-[20px] object-contain" />
              </button>
            </div>
          </div>

          {/* Icon group/format (208px) */}
          <div className="flex items-center pr-2 gap-4 border-r border-[#C2C6CA] w-[208px] h-6 shrink-0">
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Bold">
              <img src="/bold.png" alt="Bold" className="w-[10px] h-[15px] object-contain" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Italic">
              <img src="/Itallic.png" alt="Italic" className="w-[13px] h-[20px] object-contain" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors relative" title="Superscript">
              <img src="/superscript.png" alt="Superscript" className="w-[22px] h-[20px] object-contain" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors relative" title="Subscript">
              <img src="/subscript.png" alt="Subscript" className="w-[15px] h-[20px] object-contain" />
            </button>
            <div className="flex items-center gap-0 w-[40px] h-6 hover:bg-gray-100 rounded cursor-pointer transition-colors group shrink-0" title="Case">
              <div className="flex items-center justify-center w-6 h-6">
                <img src="/match_case.png" alt="Case" className="w-[18px] h-[18px] object-contain" />
              </div>
              <svg className="w-4 h-4 text-[#5D6871]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
          </div>

          {/* Frame 1261153831 (Insert group - 112px) */}
          <div className="flex items-center pr-2 gap-4 border-r border-[#C2C6CA] w-[112px] h-6 shrink-0">
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors shrink-0">
              <img src="/π.png" alt="π" className="w-[18px] h-[18px] object-contain" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors shrink-0">
              <img src="/add comment header bottom.png" alt="Comment" className="w-[20px] h-[22px] object-contain" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors shrink-0">
              <img src="/bookmark.png" alt="Bookmark" className="w-4 h-[22px] object-contain" />
            </button>
          </div>

          {/* Frame 1261153832 (Zoom/Edit group - 103px) */}
          <div className="flex items-center gap-4 w-[103px] h-6 shrink-0">
            <div className="flex items-center w-[63px] h-6 rounded hover:bg-gray-100 cursor-pointer transition-colors group">
              <div className="flex items-center justify-center px-1 gap-[10px] w-[47px] h-6">
                <img src="/text_100.png" alt="100%" className="w-[45px] h-[24px] object-contain" />
              </div>
              <svg className="w-4 h-4 text-[#5D6871]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
            <div className="w-8 h-8 relative shrink-0">
              <img src="/edit_note.png" alt="Edit" className="w-8 h-8 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
