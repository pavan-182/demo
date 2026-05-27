import React, { useState } from 'react';

const PublisherCentral: React.FC = () => {
  const [view, setView] = useState<'all-articles' | 'article-details'>('all-articles');
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Theme Constants
  const brandBlue = "#1c40ca";

  const handleApprove = () => {
    setIsApproved(true);
    setShowToast(true);
    setIsActionMenuOpen(false);
    
    // Hide toast after 5 seconds, but keep isApproved true
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="bg-white text-[#35424D] font-source min-h-screen flex flex-col h-screen overflow-hidden w-full relative">
      {/* Top Header */}
      <header className="bg-white border-b border-[#c2c6ca] fixed top-0 z-50 flex items-center h-[60px] w-full shrink-0 px-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="p-1 hover:bg-gray-100 transition-colors rounded-full">
              <img src="/menu.png" alt="menu" className="w-9 h-9" />
            </button>
            <div className="flex items-center">
              <img src="/PubClogo.png" alt="Publisher Central" className="h-10" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] hover:bg-blue-50 transition-all">
                <img src="/upload.png" alt="upload" className="w-5 h-5" />
                <span className="text-[#1c40ca] font-semibold text-base">Upload Manuscript</span>
              </button>
              <div className="p-1 cursor-pointer hover:bg-gray-100 rounded-full">
                <img src="/notification.png" alt="notifications" className="w-6 h-6" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-3 py-1.5 border border-[#d7d9db] rounded-[4px]">
              <div className="w-4 h-6 relative flex items-center justify-center">
                <img src="/π.png" alt="flag" className="w-full h-auto object-contain" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#35424d] text-white flex items-center justify-center font-semibold text-[13px]">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 pt-[60px] overflow-hidden w-full">
        {/* Navigation Sidebar */}
        <aside 
          className="w-[212px] h-full bg-white py-2 flex flex-col z-40 shrink-0 border-r border-[#c2c6ca]"
          style={{ boxShadow: '1px 0px 0px #C2C6CA' }}
        >
          <nav className="flex flex-col gap-1 px-2 mt-1">
            <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all" href="#">
              <img src="/space_dashboard.png" alt="dashboard" className="w-5 h-5 opacity-80" />
              <span className="text-base">Dashboard</span>
            </a>
            <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all" href="#">
              <img src="/task_alt.png" alt="tasks" className="w-5 h-5 opacity-80" />
              <span className="text-base">My Tasks</span>
            </a>
            <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all" href="#">
              <img src="/all_inbox.png" alt="conversations" className="w-5 h-5 opacity-80" />
              <span className="text-base">Conversations</span>
            </a>
            
            <div className="mt-1">
              <button 
                onClick={() => setView('all-articles')}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded transition-all ${view === 'all-articles' || view === 'article-details' ? 'bg-[#e1e6ff] text-[#35424d]' : 'text-[#5d6871] hover:bg-gray-100'}`}
              >
                <img src="/article.png" alt="articles" className="w-5 h-5" />
                <span className="text-base">All Articles</span>
              </button>
              <div className="flex flex-col ml-4 mt-1 border-l border-[#c2c6ca]">
                <button 
                  onClick={() => setView('article-details')}
                  className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded-r-[4px] ${view === 'article-details' ? 'bg-[#e1e6ff] border-l-2 border-[#1c40ca] font-semibold text-[#35424d] -ml-[2px]' : 'text-[#5d6871] hover:bg-gray-100'}`}
                >
                  <img src="/progress_activity.png" alt="in-progress" className="w-4 h-4 opacity-70" />
                  <span className="text-base">In-progress</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 transition-all">
                  <img src="/check_circle.png" alt="published" className="w-4 h-4 opacity-70" />
                  <span className="text-base">Published</span>
                </button>
              </div>
            </div>

            <div className="mt-1">
              <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all" href="#">
                <img src="/book_4.png" alt="issues" className="w-5 h-5 opacity-80" />
                <span className="text-base">All Issues</span>
              </a>
              <div className="flex flex-col ml-4 mt-1 border-l border-[#c2c6ca]">
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 transition-all">
                  <img src="/progress_activity.png" alt="in-progress" className="w-4 h-4 opacity-70" />
                  <span className="text-base">In-progress</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 transition-all">
                  <img src="/check_circle.png" alt="published" className="w-4 h-4 opacity-70" />
                  <span className="text-base">Published</span>
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden bg-white relative">
          <div className="h-full flex flex-col">
            {view === 'all-articles' ? (
              /* Articles Table View */
              <div className="px-10 py-8 overflow-y-auto h-full">
                <div className="w-full">
                  <div className="flex flex-col gap-4 mb-4 w-full">
                    <h2 className="text-lg font-bold text-[#35424d] flex items-center gap-1">
                      Articles In-progress
                      <img src="/info.png" alt="info" className="w-4 h-4 cursor-pointer" />
                    </h2>
                    
                    <div className="flex justify-between items-center h-8 w-full">
                      <div className="flex flex-row items-center px-3 bg-white border border-[#AEB3B7] rounded-[4px] w-[246px] h-8 box-border">
                        <input 
                          className="flex-1 text-base bg-transparent border-none outline-none placeholder:text-[#AEB3B7] h-full" 
                          placeholder="Search" 
                          type="text"
                        />
                        <svg className="w-5 h-5 text-[#AEB3B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-0.5 px-2 py-1.5 hover:bg-gray-100 rounded-[4px] cursor-pointer text-[13px] text-[#35424d]">
                          <span className="font-semibold">Journal:</span>
                          <span className="font-normal">All</span>
                          <img src="/dropdown.png" alt="dropdown" className="w-4 h-4 ml-0.5" />
                        </div>
                        <button className="flex items-center gap-0.5 px-2 py-1.5 text-[#1c40ca] font-semibold text-[13px] hover:bg-blue-50 rounded-[4px]">
                          <img src="/filter.png" alt="filters" className="w-5 h-5" />
                          More Filters
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e3e4e5] rounded-[4px] overflow-hidden bg-white shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#f6f7f7] border-b border-[#e3e4e5] text-[13px] font-semibold text-[#5d6871]">
                            <th className="px-4 py-3 whitespace-nowrap">Journal</th>
                            <th className="px-4 py-3 whitespace-nowrap">Article ID</th>
                            <th className="px-4 py-3 whitespace-nowrap">Article Due Date</th>
                            <th className="px-4 py-3 whitespace-nowrap">Milestone</th>
                            <th className="px-4 py-3 whitespace-nowrap">Days in Milestone</th>
                            <th className="px-4 py-3 whitespace-nowrap">Milestone ETA</th>
                            <th className="px-4 py-3 whitespace-nowrap">Overall Progress</th>
                            <th className="px-4 py-3 w-10"></th>
                            <th className="px-4 py-3 w-10"></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr 
                            className="border-b border-[#f6f7f7] text-[13px] text-[#35424d] hover:bg-gray-50 transition-colors cursor-pointer group" 
                            onClick={() => setView('article-details')}
                          >
                            <td className="px-4 py-4">AN</td>
                            <td className="px-4 py-4">AN4321</td>
                            <td className="px-4 py-4">15/01/2026 11:00</td>
                            <td className="px-4 py-4">
                              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#dafbe8] text-[#005728] border border-[#8bdfb2] text-[13px] font-semibold">
                                <span className="w-2 h-2 rounded-full bg-[#005728] opacity-60"></span>
                                Copyediting Review
                              </span>
                            </td>
                            <td className="px-4 py-4">11 Days</td>
                            <td className="px-4 py-4">29/12/2025 12:10</td>
                            <td className="px-4 py-4">
                              <div className="border border-[#2853f8] p-[3px] rounded-[6px] w-[80px]">
                                <div style={{ backgroundColor: brandBlue }} className="h-1 w-[35%] rounded-[6px]"></div>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1 text-[13px] text-[#35424d] italic whitespace-nowrap">
                                <img src="/π.png" alt="flag" className="h-4 w-4 opacity-70" />
                                Action pending on you
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                <img src="/actions.png" alt="actions" className="w-5 h-5 opacity-70" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Article Details View */
              <div className="flex flex-col h-full w-full bg-white overflow-hidden">
                {/* Header Frame */}
                <header className="border-b border-[#e3e4e5] flex flex-col gap-[8px] items-start pb-[12px] px-[16px] pt-[8px] shrink-0 w-full">
                  {/* Breadcrumbs */}
                  <div className="flex gap-[4px] items-center text-[13px]">
                    <button 
                      onClick={() => setView('all-articles')}
                      className="text-[#5d6871] hover:text-[#1c40ca] transition-colors"
                    >
                      All Articles
                    </button>
                    <img src="/dropdown.png" alt="" className="w-3.5 h-3.5 -rotate-90 opacity-60" />
                    <span className="text-[#5d6871]">In-progress</span>
                    <img src="/dropdown.png" alt="" className="w-3.5 h-3.5 -rotate-90 opacity-60" />
                    <span className="font-semibold text-[#35424d]">AN4321</span>
                  </div>
                  
                  {/* Title and Actions */}
                  <div className="flex items-end justify-between w-full">
                    <h1 className="text-[18px] font-semibold text-[#5d6871] truncate max-w-[700px]">
                      Widening educational inequalities in mortality in more recent birth-cohorts: a study of 14 European countries
                    </h1>
                    <div className="flex gap-[8px] items-start">
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all">
                        <img src="/info.png" alt="" className="w-4 h-4" />
                        <span className="text-[#1c40ca] font-semibold text-[13px]">Stakeholder FAQs</span>
                      </button>
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all">
                        <span className="text-[#1c40ca] font-semibold text-[13px]">New Conversation</span>
                        <img src="/dropdown.png" alt="" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-[16px] py-[12px] flex flex-col gap-[24px]">
                  {/* Article Details Section */}
                  <div className="border-b border-[#eceeee] flex flex-col gap-[4px] pb-[16px] w-full">
                    <div className="flex items-center justify-between py-[2px]">
                      <h2 className="text-[16px] font-semibold text-[#35424d]">Article Details</h2>
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all">
                        <img src="/edit_note.png" alt="" className="w-4 h-4" />
                        <span className="text-[#1c40ca] font-semibold text-[13px]">Edit Details</span>
                      </button>
                    </div>
                    
                    {/* Details Grid */}
                    <div className="grid grid-cols-4 gap-x-[40px] gap-y-[12px] px-[8px] py-[12px]">
                      {/* Column 1 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">DOI</span>
                          <a href="#" className="text-[#1c40ca] underline truncate">10.1176/appi.prcp</a>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Journal ID</span>
                          <span className="text-[#35424d]">AC</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Issue ID</span>
                          <span className="text-[#35424d]">12</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Vol/Issue</span>
                          <span className="text-[#35424d]">12/35</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Typeset Pages</span>
                          <span className="text-[#35424d]">10</span>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Article Category</span>
                          <span className="text-[#35424d]">Initial Check</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Copyediting Level</span>
                          <span className="text-[#35424d]">L1</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Tables</span>
                          <span className="text-[#35424d]">2</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Figures</span>
                          <span className="text-[#35424d]">2</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Suppl. Mtl</span>
                          <span className="text-[#35424d]">19</span>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Workflow</span>
                          <span className="text-[#35424d]">1</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Days in Prod.</span>
                          <span className="text-[#35424d]">10 Days</span>
                        </div>
                        <div className="flex gap-[4px] items-center text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Status</span>
                          <div className="bg-[#dafbe8] border border-[#8bdfb2] flex gap-[4px] items-center px-[8px] py-[2px] rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[#005728] opacity-60"></span>
                            <span className="text-[#005728] font-semibold text-[11px]">In-progress</span>
                          </div>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Billing Status</span>
                          <span className="text-[#35424d]">Unbilled</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Embargo date</span>
                          <span className="text-[#35424d]">15/01/2026</span>
                        </div>
                      </div>

                      {/* Column 4 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Corr. Author</span>
                          <span className="text-[#35424d]">Dylan Field</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Co- Author</span>
                          <div className="flex gap-[4px] items-baseline overflow-hidden">
                            <span className="text-[#35424d] truncate">John Brewis, Harvey Brut</span>
                            <a href="#" className="text-[#1c40ca] underline whitespace-nowrap">+ 5 more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="flex flex-col gap-[12px] w-full max-w-[600px]">
                    <h2 className="text-[16px] font-semibold text-[#35424d]">Progress</h2>
                    <div className="flex flex-col gap-[16px] px-[6px]">
                      {/* Step 1 */}
                      <div className="flex gap-[8px] items-start pb-[4px]">
                        <div className="py-[8px]">
                          <img src="/check_circle.png" alt="" className="w-6 h-6" />
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <div className="flex items-center justify-between">
                            <span className="text-[16px] text-[#2a353e]">Graphics</span>
                            <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871]">
                              <span>26/12/2025 11:00 - 28/12/2025 10:00</span>
                              <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                              <span>3 Days</span>
                            </div>
                          </div>
                          <p className="text-[13px] text-[#5d6871]">
                            Status: <span className="text-[#35424d]">Completed on-time</span>
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex gap-[8px] items-start pb-[4px]">
                        <div className="py-[8px]">
                          <img src="/check_circle.png" alt="" className="w-6 h-6" />
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px]">
                          <div className="flex items-center justify-between">
                            <span className="text-[16px] text-[#2a353e]">Copyediting</span>
                            <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871]">
                              <span>26/12/2025 11:00 - 28/12/2025 24:01</span>
                              <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                              <span>2 Days</span>
                            </div>
                          </div>
                          <p className="text-[13px] text-[#5d6871]">
                            Status: <span className="text-[#35424d]">Completed on-time</span>
                          </p>
                        </div>
                      </div>

                      {/* Step 3 - Current/Approved */}
                      <div className="flex gap-[8px] items-start pb-[4px]">
                        <div className="py-[8px]">
                          <img 
                            src={isApproved ? "/check_circle.png" : "/mode_standy.png"} 
                            alt="" 
                            className="w-6 h-6" 
                          />
                        </div>
                        <div className="flex-1 flex flex-col gap-[12px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex items-center justify-between">
                              <span className="text-[16px] text-[#2a353e]">Copyediting Review</span>
                              {!isApproved ? (
                                <p className="text-[13px] text-[#5d6871]">
                                  28/12/2025 24:01 - <span className="italic">In-progress</span>
                                </p>
                              ) : (
                                <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871]">
                                  <span>28/12/2025 12:01 - 29/12/2025 11:00</span>
                                  <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                  <span>1 Day</span>
                                </div>
                              )}
                            </div>
                            {!isApproved ? (
                              <p className="text-[13px] text-[#5d6871]">
                                <span className="text-[#868e94]">Due on:</span> 29/12/2025 12:10
                              </p>
                            ) : (
                              <div className="flex flex-col gap-[7px]">
                                <p className="text-[13px] text-[#5d6871]">
                                  Status: <span className="text-[#35424d]">Completed on-time</span>
                                </p>
                                <div className="flex gap-[4px] items-start text-[13px] text-[#5d6871]">
                                  <span>Approved by</span>
                                  <div className="flex gap-[4px] items-center">
                                    <div className="w-4 h-4 rounded-full bg-[#35424d] text-white flex items-center justify-center font-semibold text-[9px]">
                                      JD
                                    </div>
                                    <span>Jane Doe</span>
                                  </div>
                                  <span>29/12/2025 10:04</span>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Action Banner (only shown when not approved) */}
                          {!isApproved && (
                            <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative">
                              <div className="flex gap-[4px] items-center">
                                <img src="/info.png" alt="" className="w-4 h-4" />
                                <span className="text-[14px] font-semibold text-[#5d6871]">Pending for Action</span>
                              </div>
                              <div className="flex gap-[8px] items-center">
                                <button className="p-1 hover:bg-[#dcfce7] rounded-[4px] transition-colors">
                                  <img src="/dowload.png" alt="" className="w-6 h-6" />
                                </button>
                                <div className="relative">
                                  <button 
                                    onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                                    className="bg-[#cce5ff] border-2 border-[#2277d3] text-[#2277d3] flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] font-semibold text-[16px] hover:bg-[#b3d7ff] transition-all"
                                  >
                                    Action
                                    <img src="/dropdown.png" alt="" className="w-4 h-4 rotate-[-90deg]" />
                                  </button>
                                  
                                  {isActionMenuOpen && (
                                    <div className="absolute top-full mt-1 right-0 bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16),0px_2px_4px_0px_rgba(0,0,0,0.12)] w-[200px] z-50">
                                      <div className="content-stretch flex flex-col items-start py-[1px] relative shrink-0 w-full">
                                        <button 
                                          className="bg-[#edf0fd] content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-[#e1e6ff] transition-colors"
                                          onClick={handleApprove}
                                        >
                                          <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
                                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                                              <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] leading-[16px] text-left">
                                                Approve (No Correction)
                                              </p>
                                            </div>
                                          </div>
                                        </button>
                                        <button 
                                          className="bg-white content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors"
                                          onClick={() => setIsActionMenuOpen(false)}
                                        >
                                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                            <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative">
                                              <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] leading-[16px] text-left">
                                                Upload Corrections
                                              </p>
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Success Snackbar (Toast) */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 ml-[106px] bg-[#dafbe8] border border-[#8bdfb2] flex items-center px-4 py-2.5 rounded-[4px] shadow-md z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex gap-2 items-center">
            <img src="/check_circle.png" alt="" className="w-6 h-6" />
            <p className="font-semibold text-[#007a39] text-[13px]">
              Copyediting has been approved by you for the Article AN4321.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublisherCentral;
