import React, { useState } from 'react';

const PublisherCentral: React.FC = () => {
  const [view, setView] = useState<'all-articles' | 'article-details'>('all-articles');

  // Theme Constants
  const brandBlue = "#1a56db"; // True Corporate Royal Blue
  const brandBlueLight = "#f1f5f9"; // Very pale blue-gray

  return (
    <div className="bg-[#f9f9fa] text-[#35424D] font-sans min-h-screen flex flex-col h-screen overflow-hidden w-full">
      {/* TopAppBar - Fluid Full Width */}
      <header className="bg-white border-b border-gray-200 fixed top-0 z-50 flex items-center h-[60px] w-full shrink-0 px-6">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-gray-100 transition-colors rounded-full -ml-2">
              <img src="/menu.png" alt="menu" className="w-8 h-8" />
            </button>
            <div className="flex items-center">
              <img src="/PubClogo.png" alt="Publisher Central" className="h-8" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button style={{ color: brandBlue }} className="flex items-center gap-2 font-semibold text-sm hover:underline transition-all">
              <img src="/upload.png" alt="upload" className="w-5 h-5" />
              Upload Manuscript
            </button>
            <div className="relative flex items-center">
              <img src="/notification.png" alt="notifications" className="w-6 h-6 cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-xs">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container - Fluid Full Width */}
      <div className="flex flex-1 pt-[60px] overflow-hidden w-full">
        {/* Navigation Drawer - Flush Left */}
        <aside className="w-[320px] h-full bg-white border-r border-gray-200 pt-4 flex flex-col z-40 shrink-0">
          <nav className="flex flex-col gap-0.5 px-2">
            {/* Dashboard */}
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
              <img src="/space_dashboard.png" alt="dashboard" className="w-5 h-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            {/* My Tasks */}
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
              <img src="/task_alt.png" alt="tasks" className="w-5 h-5" />
              <span className="text-sm font-medium">My Tasks</span>
            </a>
            {/* Conversations */}
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
              <img src="/all_inbox.png" alt="conversations" className="w-5 h-5" />
              <span className="text-sm font-medium">Conversations</span>
            </a>
            {/* All Articles */}
            <div className="mt-2">
              <button 
                onClick={() => setView('all-articles')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-all ${view === 'all-articles' ? 'bg-[#f0f5ff]' : 'text-gray-600 hover:bg-gray-100'}`}
                style={{ color: view === 'all-articles' ? brandBlue : '' }}
              >
                <img src="/article.png" alt="articles" className="w-5 h-5" />
                <span className="text-sm font-medium">All Articles</span>
              </button>
              <div className="flex flex-col ml-3 mt-0.5 border-l-2" style={{ borderColor: brandBlue }}>
                <button 
                  onClick={() => setView('article-details')}
                  className={`flex items-center gap-3 px-6 py-2 transition-all ${view === 'article-details' ? 'bg-[#f0f5ff] font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                  style={{ color: view === 'article-details' ? brandBlue : '' }}
                >
                  <img src="/progress_activity.png" alt="in-progress" className="w-4.5 h-4.5" />
                  <span className="text-sm">In-progress</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 transition-all">
                  <img src="/check_circle.png" alt="published" className="w-4.5 h-4.5" />
                  <span className="text-sm">Published</span>
                </button>
              </div>
            </div>
            {/* All Issues */}
            <div className="mt-2">
              <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
                <img src="/book_4.png" alt="issues" className="w-5 h-5" />
                <span className="text-sm font-medium">All Issues</span>
              </a>
              <div className="flex flex-col ml-3 mt-0.5 border-l-2 border-transparent">
                <button className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 transition-all">
                  <img src="/progress_activity.png" alt="in-progress" className="w-4.5 h-4.5" />
                  <span className="text-sm">In-progress</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 transition-all">
                  <img src="/check_circle.png" alt="published" className="w-4.5 h-4.5" />
                  <span className="text-sm">Published</span>
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content Area - Fluid */}
        <main className="flex-1 overflow-hidden bg-[#f9f9fa] relative border-t border-gray-200">
          <div className="h-full flex flex-col">
            {view === 'all-articles' ? (
              /* Articles Table View - Fluid Width */
              <div className="p-8 overflow-y-auto h-full">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      Articles In-progress
                      <img src="/info.png" alt="info" className="w-4 h-4 cursor-pointer" />
                    </h2>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        Journal: <span className="font-bold">All</span>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <img src="/dropdown.png" alt="dropdown" className="w-2.5 h-auto" />
                        </div>
                      </div>
                      <button style={{ color: brandBlue }} className="flex items-center gap-2 font-bold text-sm">
                        <img src="/filter.png" alt="filters" className="w-5 h-5" />
                        More Filters
                      </button>
                    </div>
                  </div>

                  {/* Search Area */}
                  <div className="mb-4">
                    <div className="relative w-full">
                      <input 
                        className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-1" 
                        style={{ borderColor: brandBlue, '--tw-ring-color': brandBlue } as any}
                        placeholder="Search" 
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                    </div>
                  </div>

                  {/* Table Container */}
                  <div className="border border-gray-200 rounded overflow-hidden bg-white shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                            <th className="px-4 py-3.5">Journal</th>
                            <th className="px-4 py-3.5">Article ID</th>
                            <th className="px-4 py-3.5">Article Due Date</th>
                            <th className="px-4 py-3.5">Milestone</th>
                            <th className="px-4 py-3.5">Days in Milestone</th>
                            <th className="px-4 py-3.5">Milestone ETA</th>
                            <th className="px-4 py-3.5">Overall Progress</th>
                            <th className="px-4 py-3.5 w-10"></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-b border-gray-100 text-sm text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => setView('article-details')}>
                            <td className="px-4 py-5 font-medium">AN</td>
                            <td className="px-4 py-5 font-medium">AN4321</td>
                            <td className="px-4 py-5">15/01/2026 11:00</td>
                            <td className="px-4 py-5">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] border border-[#bbf7d0] text-xs font-semibold">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Copyediting Review
                              </span>
                            </td>
                            <td className="px-4 py-5 font-medium">11 Days</td>
                            <td className="px-4 py-5 text-gray-500">29/12/2025 12:10</td>
                            <td className="px-4 py-5">
                              <div className="flex items-center gap-4">
                                <div className="bg-gray-200 h-1.5 w-24 rounded-full overflow-hidden border border-gray-300">
                                  <div style={{ backgroundColor: brandBlue }} className="h-full w-[70%]"></div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-5 text-right">
                              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                <img src="/article.png" alt="pending" className="w-4 h-4 opacity-70" />
                                Action pending on you
                                <button className="text-gray-400 hover:text-gray-600 transition-colors ml-2">
                                  <img src="/actions.png" alt="actions" className="h-4 w-auto" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Article Details View - Fully Fluid */
              <div className="flex flex-col h-full w-full bg-white overflow-hidden">
                {/* Header Frame - Spans width */}
                <header className="h-[72px] w-full flex flex-col items-start pt-2 pr-8 pb-3 pl-8 gap-1 border-b border-[#E3E4E5] flex-none box-border">
                  <nav className="text-xs text-gray-500 flex items-center gap-2">
                    <button onClick={() => setView('all-articles')} style={{ color: brandBlue }} className="hover:underline">All Articles</button>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-gray-500">In-progress</span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold text-gray-900">AN4321</span>
                  </nav>
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg font-bold text-gray-900 truncate flex-1">
                      Widening educational inequalities in mortality in more recent birth-cohorts:...
                    </h1>
                    <div className="flex items-center gap-4">
                      <button style={{ color: brandBlue }} className="flex items-center gap-1.5 font-semibold text-sm hover:underline">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Stakeholder FAQs
                      </button>
                      <button style={{ color: brandBlue }} className="flex items-center gap-1.5 font-semibold text-sm hover:underline">
                        New Conversation
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src="/dropdown.png" alt="dropdown" className="w-2.5 h-auto" />
                        </div>
                      </button>
                    </div>
                  </div>
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto flex flex-col items-start gap-4 px-8">
                  {/* Article Details Grid */}
                  <section className="flex flex-col items-start p-0 pt-6 pb-6 w-full border-b border-[#ECEEEE] flex-none box-border">
                    <div className="flex justify-between items-center w-full mb-6">
                      <h2 className="text-lg font-bold text-gray-900">Article Details</h2>
                      <button style={{ color: brandBlue }} className="font-semibold flex items-center gap-2 hover:underline text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Edit Details
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-12 w-full">
                      <div className="space-y-4">
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">DOI</span>
                          <a style={{ color: brandBlue }} className="hover:underline font-bold text-sm truncate" href="#">10.1176/appi.prcp</a>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Journal ID</span>
                          <span className="font-bold text-sm">AC</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Issue ID</span>
                          <span className="font-bold text-sm">12</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Vol/Issue</span>
                          <span className="font-bold text-sm">12/35</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Typeset Pages</span>
                          <span className="font-bold text-sm">10</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Article Category</span>
                          <span className="font-bold text-sm">Initial Check</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Copyediting Level</span>
                          <span className="font-bold text-sm">L1</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Total Tables</span>
                          <span className="font-bold text-sm">2</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Total Figures</span>
                          <span className="font-bold text-sm">2</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Total Suppl. Mtl</span>
                          <span className="font-bold text-sm">19</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Workflow</span>
                          <span className="font-bold text-sm">1</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Days in Prod.</span>
                          <span className="font-bold text-sm">10 Days</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Status</span>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dcfce7] text-[#166534] border border-[#bbf7d0] w-fit text-[11px] font-bold mt-1">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            In-progress
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Billing Status</span>
                          <span className="font-bold text-sm">Unbilled</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Embargo date</span>
                          <span className="font-bold text-sm">15/01/2026</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Corr. Author</span>
                          <span className="font-bold text-sm">Dylan Field</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs font-medium">Co- Author</span>
                          <span className="font-bold text-sm">John Brewis, Harv... <span style={{ color: brandBlue }} className="hover:underline cursor-pointer">+ 5 more</span></span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Progress Section */}
                  <section className="flex flex-col items-start p-0 pt-2 pb-12 w-full flex-none">
                    <h2 className="text-lg font-bold text-gray-900 mb-8">Progress</h2>
                    
                    <div className="w-full space-y-0 relative">
                      {/* Vertical Connector track - spanning icon centers */}
                      <div className="absolute left-[15px] top-[16px] w-[1px] h-[160px] bg-gray-200 z-0"></div>

                      {/* Step 1 */}
                      <div className="flex gap-6 pb-12 relative z-10">
                        <div className="flex flex-col items-center">
                          <img src="/check_circle_1.png" alt="completed" className="w-8 h-8" />
                        </div>
                        <div className="flex-1 pt-0.5">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-lg">Graphics</h3>
                              <p className="text-sm text-gray-500">Status: <span className="text-gray-700 font-semibold">Completed on-time</span></p>
                            </div>
                            <div className="text-right text-sm text-gray-500 font-medium">
                              26/12/2025 11:00 - 28/12/2025 10:00 <span className="mx-1">•</span> 3 Days
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex gap-6 pb-12 relative z-10">
                        <div className="flex flex-col items-center">
                          <img src="/check_circle_1.png" alt="completed" className="w-8 h-8" />
                        </div>
                        <div className="flex-1 pt-0.5">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-lg">Copyediting</h3>
                              <p className="text-sm text-gray-500">Status: <span className="text-gray-700 font-semibold">Completed on-time</span></p>
                            </div>
                            <div className="text-right text-sm text-gray-500 font-medium">
                              26/12/2025 11:00 - 28/12/2025 24:01 <span className="mx-1">•</span> 2 Days
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 - Current */}
                      <div className="flex gap-6 relative z-10">
                        <div className="flex flex-col items-center">
                          <img src="/mode_standy.png" alt="in-progress" className="w-8 h-8" />
                        </div>
                        <div className="flex-1 pt-0.5">
                          <div className="flex justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-lg">Copyediting Review</h3>
                              <p className="text-sm text-gray-500">Due on: <span className="text-gray-700 font-semibold">29/12/2025 12:10</span></p>
                            </div>
                            <div className="text-right text-sm italic font-medium text-gray-500">
                              28/12/2025 24:01 - In-progress
                            </div>
                          </div>
                          {/* Action Banner */}
                          <div style={{ backgroundColor: brandBlueLight }} className="border border-blue-100 rounded-lg p-5 flex items-center justify-between">
                            <div className="flex items-center gap-3" style={{ color: brandBlue }}>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                              <span className="font-bold">Pending for Action</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <button style={{ color: brandBlue }} className="p-2 hover:bg-blue-100 rounded transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                              </button>
                              <button style={{ backgroundColor: brandBlue }} className="text-white px-6 py-2 rounded font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-md">
                                Action
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <img src="/dropdown.png" alt="dropdown" className="w-2.5 h-auto invert" />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublisherCentral;