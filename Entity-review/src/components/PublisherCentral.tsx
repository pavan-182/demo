import React, { useState } from 'react';
import BeaconLoader from './BeaconLoader';

const PublisherCentral: React.FC = () => {
  const [view, setView] = useState<'all-articles' | 'article-details' | 'published-articles'>('all-articles');
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isPeActionMenuOpen, setIsPeActionMenuOpen] = useState(false);
  const [isPapActionMenuOpen, setIsPapActionMenuOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isPeApproved, setIsPeApproved] = useState(false);
  const [isPapApproved, setIsPapApproved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [peReviewStarted, setPeReviewStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [papCompletionDate, setPapCompletionDate] = useState<string | null>(null);
  const [ceCompletionDate, setCeCompletionDate] = useState<string | null>(null);
  const [peCompletionDate, setPeCompletionDate] = useState<string | null>(null);
  const [apCompletionDate, setApCompletionDate] = useState<string | null>(null);

  // Theme Constants
  const brandBlue = "#1c40ca";

  const articleData = {
    id: "100913",
    title: "Ferroptosis as the new approach to cancer therapy",
    authors: "Oluwafemi Adeleke Ojo a,e,*, Susan Grant b, Pearl Ifunanya Nwafor-Ezeh a, Tobiloba Christiana Maduakolam-Aniobi b, Tolulope Isaiah Akinborode c, Emmanuel Henry Ezenabor a, Adebola Busola Ojo d",
    doi: "10.1016/j.ctarc.2025.100913",
    journal: "Current Oncology Reports",
    journalId: "CTARC",
    issueId: "43",
    volIssue: "43 (2025)",
    typesetPages: "9",
    category: "Review Article",
    ceLevel: "L1",
    status: "In-progress",
    milestone: "Copyediting Review",
    nextMilestone: "Author Proof Review",
    dueDate: "29/12/2025 12:10",
    daysInProd: "10 Days",
    billing: "Unbilled",
    embargo: "25/03/2025",
    corrAuthor: "Oluwafemi Adeleke Ojo",
    coAuthors: "Susan Grant, Pearl Ifunanya Nwafor-Ezeh, Tobiloba Christiana Maduakolam-Aniobi, Tolulope Isaiah Akinborode, Emmanuel Henry Ezenabor, Adebola Busola Ojo",
    tables: "1",
    figures: "2",
    supplMtl: "0",
    workflow: "1"
  };

  const getNowFormatted = () => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleApprove = () => {
    setCeCompletionDate(getNowFormatted());
    
    setIsApproved(true);
    setToastMessage(`Copyediting has been approved by you for the Article ${articleData.id}.`);
    setShowToast(true);
    setIsActionMenuOpen(false);
    
    // Hide toast after 5 seconds, but keep isApproved true
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handlePeApprove = () => {
    setIsLoading(true);
    setIsPeActionMenuOpen(false);
    
    setPeCompletionDate(getNowFormatted());
    
    // Show loader for 12 seconds (2s per step * 5 steps + padding)
    setTimeout(() => {
      setIsLoading(false);
      setIsPeApproved(true);
    }, 12000);
  };

  const handlePapApprove = () => {
    setPapCompletionDate(getNowFormatted());
    
    setIsPapActionMenuOpen(false);
    setIsPapApproved(true);
    setToastMessage(`Article ${articleData.id} has been moved to published status.`);
    setShowToast(true);
    
    // Hide toast after 10 seconds for PAP approval
    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  };

  const handleStartPeReview = () => {
    setApCompletionDate(getNowFormatted());
    setPeReviewStarted(true);
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
                onClick={() => setView(isPapApproved ? 'published-articles' : 'all-articles')}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded transition-all ${view === 'all-articles' || view === 'article-details' || view === 'published-articles' ? 'bg-[#e1e6ff] text-[#35424d]' : 'text-[#5d6871] hover:bg-gray-100'}`}
              >
                <img src="/article.png" alt="articles" className="w-5 h-5" />
                <span className="text-base">All Articles</span>
              </button>
              <div className="flex flex-col ml-4 mt-1 border-l border-[#c2c6ca]">
                <button 
                  onClick={() => setView('all-articles')}
                  className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded-r-[4px] ${(view === 'all-articles' || (view === 'article-details' && !isPapApproved)) ? 'bg-[#e1e6ff] border-l-2 border-[#1c40ca] font-semibold text-[#35424d] -ml-[2px]' : 'text-[#5d6871] hover:bg-gray-100'}`}
                >
                  <img src="/progress_activity.png" alt="in-progress" className="w-4 h-4 opacity-70" />
                  <span className="text-base">In-progress</span>
                </button>
                <button 
                  onClick={() => setView('published-articles')}
                  className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded-r-[4px] ${(view === 'published-articles' || (view === 'article-details' && isPapApproved)) ? 'bg-[#e1e6ff] border-l-2 border-[#1c40ca] font-semibold text-[#35424d] -ml-[2px]' : 'text-[#5d6871] hover:bg-gray-100'}`}
                >
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
                      <div className="flex flex-row items-center px-3 bg-white border border-[#AEB3B7] rounded-[4px] w-[246px] h-8 box-border relative">
                        <input 
                          className="flex-1 text-base bg-transparent border-none outline-none placeholder:text-[#AEB3B7] h-full pr-8" 
                          placeholder="Search" 
                          type="text"
                        />
                        <img src="/search.png" alt="search" className="w-5 h-5 opacity-70 absolute right-2" />
                      </div>

                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-0.5 px-2 py-1.5 hover:bg-gray-100 rounded-[4px] cursor-pointer text-[13px] text-[#35424d]">
                          <span className="font-semibold">Journal:</span>
                          <span className="font-normal">All</span>
                          <div className="w-3 h-3 flex items-center justify-center ml-0.5">
                            <img src="/dropdown.png" alt="dropdown" className="h-[6px] w-auto object-contain" />
                          </div>
                        </div>
                        <button className="flex items-center gap-0.5 px-2 py-1.5 text-[#1c40ca] font-semibold text-[13px] hover:bg-blue-50 rounded-[4px]">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <img src="/filter.png" alt="filters" className="h-[12px] w-auto object-contain" />
                          </div>
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
                            <th className="px-4 py-3 text-right"></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {!isPapApproved && (
                            <tr 
                              className="border-b border-[#f6f7f7] text-[13px] text-[#35424d] hover:bg-gray-50 transition-colors cursor-pointer group" 
                              onClick={() => setView('article-details')}
                            >
                              <td className="px-4 py-4">{articleData.journalId}</td>
                              <td className="px-4 py-4 font-semibold">{articleData.id}</td>
                              <td className="px-4 py-4">15/01/2026 11:00</td>
                              <td className="px-4 py-4">
                                <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border ${isPeApproved ? 'bg-[#dafbe8] text-[#005728] border-[#8bdfb2]' : (isApproved ? 'bg-[#dafbe8] text-[#005728] border-[#8bdfb2]' : 'bg-[#dafbe8] text-[#005728] border-[#8bdfb2]')}`}>
                                  <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                  {isPeApproved ? 'PAP' : (isApproved ? articleData.nextMilestone : articleData.milestone)}
                                </span>
                              </td>
                              <td className="px-4 py-4">{isPeApproved ? "1 Day" : articleData.daysInProd}</td>
                              <td className="px-4 py-4">{isPeApproved ? "15/01/2026 12:10" : (isApproved ? (peReviewStarted ? "10/01/2026 12:10" : "01/10/2026 12:10") : articleData.dueDate)}</td>
                              <td className="px-4 py-4">
                                <div className="border border-[#2853f8] p-[3px] rounded-[6px] w-[80px]">
                                  <div style={{ backgroundColor: brandBlue }} className={`h-1 rounded-[6px] transition-all duration-1000 ${isPapApproved ? 'w-full' : (isPeApproved ? 'w-[75%]' : (peReviewStarted ? 'w-[65%]' : (isApproved ? 'w-[50%]' : 'w-[35%]' )))}`}></div>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-right">
                                <div className="flex items-center justify-end gap-3 min-w-[200px]">
                                  {!isPeApproved && (
                                    <div className="flex items-center gap-1 text-[13px] text-[#35424d] italic whitespace-nowrap">
                                      Action pending on you
                                    </div>
                                  )}
                                  <button className="flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-all w-5 h-5 shrink-0">
                                    <img src="/actions.png" alt="actions" className="h-[14px] w-auto opacity-70 object-contain" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : view === 'published-articles' ? (
              /* Published Articles Table View */
              <div className="px-10 py-8 overflow-y-auto h-full">
                <div className="w-full">
                  <div className="flex flex-col gap-4 mb-4 w-full">
                    <h2 className="text-lg font-bold text-[#35424d] flex items-center gap-1">
                      Articles Published
                      <img src="/info.png" alt="info" className="w-4 h-4 cursor-pointer" />
                    </h2>

                    <div className="flex justify-between items-center h-8 w-full">
                      <div className="flex flex-row items-center px-3 bg-white border border-[#AEB3B7] rounded-[4px] w-[246px] h-8 box-border relative">
                        <input
                          className="flex-1 text-base bg-transparent border-none outline-none placeholder:text-[#AEB3B7] h-full pr-8"
                          placeholder="Search"
                          type="text"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <img src="/search.png" alt="search" className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:bg-gray-100 rounded">
                          <span className="text-[13px] font-semibold">Journal:</span>
                          <span className="text-[13px]">All</span>
                          <img src="/arrow_drop_down.png" alt="" className="w-4 h-4" />
                        </div>
                        <button className="flex items-center gap-1 text-[#1c40ca] text-[13px] font-semibold hover:underline">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <img src="/filter.png" alt="filters" className="h-[12px] w-auto object-contain" />
                          </div>
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
                            <th className="px-4 py-3 whitespace-nowrap">Journal ID</th>
                            <th className="px-4 py-3 whitespace-nowrap">Article ID</th>
                            <th className="px-4 py-3 whitespace-nowrap">Last processed Stage</th>
                            <th className="px-4 py-3 whitespace-nowrap">Submitted On</th>
                            <th className="px-4 py-3 whitespace-nowrap">Completed On</th>
                            <th className="px-4 py-3 text-right"></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {isPapApproved && (
                            <tr 
                              className="border-b border-[#f6f7f7] text-[13px] text-[#35424d] hover:bg-gray-100 transition-colors cursor-pointer group" 
                              onClick={() => setView('article-details')}
                            >
                              <td className="px-4 py-4">{articleData.journalId}</td>
                              <td className="px-4 py-4">{articleData.id}</td>
                              <td className="px-4 py-4">PAP</td>
                              <td className="px-4 py-4">26/12/2025 11:00</td>
                              <td className="px-4 py-4">{papCompletionDate}</td>
                              <td className="px-4 py-4 text-right">
                                <button className="flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-all w-5 h-5 shrink-0">
                                  <img src="/actions.png" alt="actions" className="h-[14px] w-auto opacity-70 object-contain" />
                                </button>
                              </td>                            </tr>
                          )}
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
                      onClick={() => setView(isPapApproved ? 'published-articles' : 'all-articles')}
                      className="text-[#5d6871] hover:text-[#1c40ca] transition-colors"
                    >
                      {isPapApproved ? 'All Published Articles' : 'All Articles'}
                    </button>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg className="w-[5px] h-2 opacity-60" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L1 7" stroke="#5D6871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[#5d6871]">{isPapApproved ? 'Published' : 'In-progress'}</span>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg className="w-[5px] h-2 opacity-60" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L1 7" stroke="#5D6871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-[#35424d]">{articleData.id}</span>
                  </div>
                  
                  {/* Title and Actions */}
                  <div className="flex items-end justify-between w-full">
                    <h1 className="text-[18px] font-semibold text-[#5d6871] truncate max-w-[700px]" title={articleData.title}>
                      {articleData.title}
                    </h1>
                    <div className="flex gap-[8px] items-start">
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all">
                        <img src="/live_help.svg" alt="" className="w-4 h-4" />
                        <span className="text-[#1c40ca] font-semibold text-[13px]">Stakeholder FAQs</span>
                      </button>
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all">
                        <span className="text-[#1c40ca] font-semibold text-[13px]">New Conversation</span>
                        <img src="/arrow_drop_down.png" alt="" className="w-4 h-4" />
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
                        <img src="/edit.png" alt="" className="w-4 h-4" />
                        <span className="text-[#1c40ca] font-semibold text-[13px]">Edit Details</span>
                      </button>
                    </div>
                    
                    {/* Details Grid */}
                    <div className="grid grid-cols-4 gap-x-[40px] gap-y-[12px] px-[8px] py-[12px]">
                      {/* Column 1 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">DOI</span>
                          <a href="#" className="text-[#1c40ca] underline truncate">{articleData.doi}</a>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Journal ID</span>
                          <span className="text-[#35424d]">{articleData.journalId}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Issue ID</span>
                          <span className="text-[#35424d]">{articleData.issueId}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Vol/Issue</span>
                          <span className="text-[#35424d]">{articleData.volIssue}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Typeset Pages</span>
                          <span className="text-[#35424d]">{articleData.typesetPages}</span>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Article Category</span>
                          <span className="text-[#35424d]">{articleData.category}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Copyediting Level</span>
                          <span className="text-[#35424d]">{articleData.ceLevel}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Tables</span>
                          <span className="text-[#35424d]">{articleData.tables}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Figures</span>
                          <span className="text-[#35424d]">{articleData.figures}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Suppl. Mtl</span>
                          <span className="text-[#35424d]">{articleData.supplMtl}</span>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Workflow</span>
                          <span className="text-[#35424d]">{articleData.workflow}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Days in Prod.</span>
                          <span className="text-[#35424d]">{articleData.daysInProd}</span>
                        </div>
                        <div className="flex gap-[4px] items-center text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Status</span>
                          <div className="bg-[#dafbe8] border border-[#8bdfb2] flex gap-[4px] items-center px-[8px] py-[2px] rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[#005728] opacity-60"></span>
                            <span className="text-[#005728] font-semibold text-[11px]">{isPapApproved ? 'Published' : articleData.status}</span>
                          </div>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Billing Status</span>
                          <span className="text-[#35424d]">{articleData.billing}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Embargo date</span>
                          <span className="text-[#35424d]">{articleData.embargo}</span>
                        </div>
                      </div>

                      {/* Column 4 */}
                      <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Corr. Author</span>
                          <span className="text-[#35424d]">{articleData.corrAuthor}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px]">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Co- Author</span>
                          <div className="flex gap-[4px] items-baseline overflow-hidden">
                            <span className="text-[#35424d] truncate">{articleData.coAuthors}</span>
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
                          <img src="/blue_check.png" alt="" className="w-6 h-6" />
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
                          <img src="/blue_check.png" alt="" className="w-6 h-6" />
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

                      {/* Step 3 - Completed Copyediting Review */}
                      <div className="flex gap-[8px] items-start pb-[4px]">
                        <div className="py-[8px]">
                          <img 
                            src={isApproved ? "/blue_check.png" : "/mode_standy.png"} 
                            alt="" 
                            className="w-6 h-6" 
                          />
                        </div>
                        <div className="flex-1 flex flex-col gap-[12px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex items-center justify-between">
                              <span className="text-[16px] text-[#2a353e]">{articleData.milestone}</span>
                              {!isApproved ? (
                                <p className="text-[13px] text-[#5d6871]">
                                  28/12/2025 24:01 - <span className="italic">In-progress</span>
                                </p>
                              ) : (
                                <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871]">
                                  <span>28/12/2025 12:01 - {ceCompletionDate}</span>
                                  <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                  <span>{ceCompletionDate?.includes('2026') ? 'Today' : '1 Day'}</span>
                                </div>
                              )}
                            </div>
                            {!isApproved ? (
                              <p className="text-[13px] text-[#5d6871]">
                                <span className="text-[#868e94]">Due on:</span> {articleData.dueDate}
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
                                  <span>{ceCompletionDate}</span>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Action Banner (only shown when not approved) */}
                          {!isApproved && (
                            <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative">
                              <div className="flex gap-[4px] items-center">
                                <img src="/info_blue.png" alt="" className="w-4 h-4" />
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
                                    <img src="/chevron_downward.png" alt="" className="w-4 h-4" />
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
                                              <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
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
                                              <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
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

                      {/* Step 4 - Next: Author Proof Review */}
                      {isApproved && (
                        <div 
                          className={`flex gap-[8px] items-start pb-[4px] ${!peReviewStarted ? 'cursor-pointer hover:bg-blue-50 transition-colors rounded-r-[4px] -mr-4 pr-4' : ''}`}
                          onClick={!peReviewStarted ? handleStartPeReview : undefined}
                        >
                          <div className="py-[8px]">
                            <img src={peReviewStarted ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex-1 flex flex-col gap-[4px] font-['Source_Sans_Pro',sans-serif]">
                            <div className="flex items-center justify-between">
                              <p className="text-[16px] text-[#2a353e]">
                                {articleData.nextMilestone}
                              </p>
                              <p className="text-[13px] text-[#5d6871] whitespace-nowrap">
                                {peReviewStarted ? `${ceCompletionDate} - ${apCompletionDate}` : `${ceCompletionDate} - In-progress`}
                              </p>
                            </div>
                            <p className="text-[13px] text-[#35424d]">
                              {peReviewStarted ? "Status: Completed on-time" : "Proofing In-progress by Author"}
                            </p>
                            {!peReviewStarted && (
                              <p className="text-[13px] text-[#5d6871]">
                                <span className="text-[#868e94]">Expected completion:</span> {getNowFormatted()}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Step 5 - PE Review (only shown when Author Proof is completed) */}
                      {peReviewStarted && (
                        <div className="flex gap-[8px] items-start pb-[4px]">
                          <div className="py-[8px]">
                            <img src={isPeApproved ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex-1 flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-[4px] font-['Source_Sans_Pro',sans-serif]">
                              <div className="flex items-center justify-between">
                                <p className="text-[16px] text-[#2a353e]">PE Review</p>
                                {!isPeApproved ? (
                                  <p className="text-[13px] text-[#5d6871] whitespace-nowrap">
                                    {apCompletionDate} - <span className="italic">In-progress</span>
                                  </p>
                                ) : (
                                  <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871]">
                                    <span>{apCompletionDate} - {peCompletionDate}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                    <span>Today</span>
                                  </div>
                                )}
                              </div>
                              {!isPeApproved ? (
                                <p className="text-[13px] text-[#5d6871]">
                                  <span className="text-[#868e94]">Estimated completion:</span> {getNowFormatted()}
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
                                    <span>{peCompletionDate}</span>
                                    </div>
                                    </div>
                                    )}
                            </div>

                            {/* Action Banner for PE Review (only shown when not approved) */}
                            {!isPeApproved && (
                              <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative">
                                <div className="flex gap-[4px] items-center">
                                  <img src="/info_blue.png" alt="" className="w-4 h-4" />
                                  <span className="text-[14px] font-semibold text-[#5d6871]">Pending for Action</span>
                                </div>
                                <div className="flex gap-[8px] items-center">
                                  <button className="p-1 hover:bg-[#dcfce7] rounded-[4px] transition-colors">
                                    <img src="/dowload.png" alt="" className="w-6 h-6" />
                                  </button>
                                  <div className="relative">
                                    <button 
                                      onClick={() => setIsPeActionMenuOpen(!isPeActionMenuOpen)}
                                      className="bg-[#cce5ff] border-2 border-[#2277d3] text-[#2277d3] flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] font-semibold text-[16px] hover:bg-[#b3d7ff] transition-all"
                                    >
                                      Action
                                      <img src="/chevron_downward.png" alt="" className="w-4 h-4" />
                                    </button>
                                    
                                    {isPeActionMenuOpen && (
                                      <div className="absolute top-full mt-1 right-0 bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16),0px_2px_4px_0px_rgba(0,0,0,0.12)] w-[200px] z-50">
                                        <div className="content-stretch flex flex-col items-start py-[1px] relative shrink-0 w-full">
                                          <button 
                                            className="bg-[#edf0fd] content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-[#e1e6ff] transition-colors"
                                            onClick={handlePeApprove}
                                          >
                                            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
                                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
                                                  Approve (No Correction)
                                                </p>
                                              </div>
                                            </div>
                                          </button>
                                          <button 
                                            className="bg-white content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors"
                                            onClick={() => setIsPeActionMenuOpen(false)}
                                          >
                                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                              <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
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
                      )}

                      {/* Step 6 - PAP (only shown when PE Review is completed) */}
                      {isPeApproved && (
                        <div className="flex gap-[8px] items-start pb-[4px]">
                          <div className="py-[8px]">
                            <img src={isPapApproved ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex-1 flex flex-col gap-[8px]">
                            <div className="flex flex-col gap-[4px] font-['Source_Sans_Pro',sans-serif]">
                              <div className="flex items-center justify-between">
                                <p className="text-[16px] text-[#2a353e]">PAP</p>
                                {!isPapApproved ? (
                                  <p className="text-[13px] text-[#5d6871] whitespace-nowrap">
                                    {peCompletionDate} - <span className="italic">In-progress</span>
                                  </p>
                                ) : (
                                  <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871]">
                                    <span>{peCompletionDate} - {papCompletionDate}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                    <span>Today</span>
                                  </div>
                                )}
                              </div>
                              {!isPapApproved ? (
                                <p className="text-[13px] text-[#868e94]">
                                  Estimated completion: <span className="text-[#35424d]">{getNowFormatted()}</span>
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
                                    <span>{papCompletionDate}</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Action Banner for PAP */}
                            {!isPapApproved && (
                              <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative">
                                <div className="flex gap-[4px] items-center">
                                  <img src="/info_blue.png" alt="" className="w-4 h-4" />
                                  <span className="text-[14px] font-semibold text-[#5d6871]">Pending for Action</span>
                                </div>
                                <div className="flex gap-[8px] items-center">
                                  <button className="p-1 hover:bg-[#dcfce7] rounded-[4px] transition-colors">
                                    <img src="/dowload.png" alt="" className="w-6 h-6" />
                                  </button>
                                  <div className="relative">
                                    <button 
                                      onClick={() => setIsPapActionMenuOpen(!isPapActionMenuOpen)}
                                      className="bg-[#cce5ff] border-2 border-[#2277d3] text-[#2277d3] flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] font-semibold text-[16px] hover:bg-[#b3d7ff] transition-all"
                                    >
                                      Action
                                      <img src="/chevron_downward.png" alt="" className="w-4 h-4" />
                                    </button>
                                    
                                    {isPapActionMenuOpen && (
                                      <div className="absolute top-full mt-1 right-0 bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16),0px_2px_4px_0px_rgba(0,0,0,0.12)] w-[200px] z-50">
                                        <div className="content-stretch flex flex-col items-start py-[1px] relative shrink-0 w-full">
                                          <button 
                                            className="bg-[#edf0fd] content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-[#e1e6ff] transition-colors"
                                            onClick={handlePapApprove}
                                          >
                                            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
                                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
                                                  Approve (No Correction)
                                                </p>
                                              </div>
                                            </div>
                                          </button>
                                          <button 
                                            className="bg-white content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors"
                                            onClick={() => setIsPapActionMenuOpen(false)}
                                          >
                                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                              <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
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
                      )}
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
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <img src="/check_circle_GREEN.png" alt="" className="w-6 h-6" />
              <p className="font-semibold text-[#007a39] text-[13px]">
                {toastMessage}
              </p>
            </div>
            {isPapApproved && toastMessage.includes('published status') && (
              <button 
                onClick={() => {
                  setShowPackageModal(true);
                  setShowToast(false);
                }}
                className="bg-[#007a39] text-white text-[12px] font-bold px-3 py-1 rounded hover:bg-[#006630] transition-colors"
              >
                View Package
              </button>
            )}
          </div>
        </div>
      )}

      {/* Package Viewer Modal */}
      {showPackageModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-[600px] rounded-lg shadow-xl flex flex-col overflow-hidden max-h-[80vh] animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-[#F8F9FA]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#35424D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 className="font-bold text-[#35424D]">Package: @package/CTARC_100913</h3>
              </div>
              <button onClick={() => setShowPackageModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-1 gap-2">
                {[
                  { name: 'CTARC_100913.jsonld', size: '223 KB', type: 'JSON-LD' },
                  { name: 'CTARC_100913.xml', size: '214 KB', type: 'XML' },
                  { name: 'CTARC_100913.pdf', size: '1.2 MB', type: 'PDF' }
                ].map((file) => (
                  <div key={file.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center">
                        <img src="/article.png" alt="" className="w-6 h-6 opacity-70" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#35424D]">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a 
                        href={`/package/${file.name}`}
                        download={file.name}
                        className="p-2 hover:bg-green-100 rounded text-green-600 transition-colors flex items-center justify-center" 
                        title="Download"
                      >
                        <img src="/dowload.png" alt="Download" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
              <button 
                onClick={() => setShowPackageModal(false)}
                className="px-6 py-2 bg-[#35424D] text-white rounded text-[13px] font-semibold hover:bg-[#2A343D] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && <BeaconLoader />}
    </div>
  );
};

export default PublisherCentral;
