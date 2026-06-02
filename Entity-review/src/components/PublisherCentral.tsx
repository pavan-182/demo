import React, { useState, useEffect, useCallback } from 'react';
import BeaconLoader from './BeaconLoader';

interface PublisherCentralProps {
  onEditCentral?: (mode: string) => void;
  graphicsCompleted?: boolean;
  onCompleteGraphics?: () => void;
  copyeditingCompleted?: boolean;
  justUploaded?: boolean;
  onClearJustUploaded?: () => void;
}

const PublisherCentral: React.FC<PublisherCentralProps> = ({ 
  onEditCentral, 
  graphicsCompleted, 
  onCompleteGraphics,
  copyeditingCompleted,
  justUploaded,
  onClearJustUploaded
}) => {
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

  const articleData = {
    id: "100913",
    title: "Widening educational inequalities in mortality in more recent birth-cohorts: a study of 14 European countries",
    authors: "Dylan Field",
    doi: "10.1176/appi.prcp",
    journal: "Current Oncology Reports",
    journalId: "CTARC",
    issueId: "12",
    volIssue: "12/35",
    typesetPages: "10",
    category: "Initial Check",
    ceLevel: "L1",
    status: "In-progress",
    milestone: "Copyediting Review",
    nextMilestone: "Author Proof Review",
    dueDate: "28/12/2025 11:00",
    daysInProd: "10 Days",
    billing: "Unbilled",
    embargo: "15/01/2026",
    corrAuthor: "Dylan Field",
    coAuthors: "John Brewis, Harvey Brut",
    tables: "2",
    figures: "2",
    supplMtl: "19",
    workflow: "1"
  };

  useEffect(() => {
    if (justUploaded) {
      setToastMessage(`Article ${articleData.id} uploaded successfully.`);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        if (onClearJustUploaded) onClearJustUploaded();
      }, 5000);
    }
  }, [justUploaded, articleData.id, onClearJustUploaded]);

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
  };

  const handleBeaconComplete = useCallback(() => {
    setIsLoading(false);
    setIsPeApproved(true);
  }, []);

  const handlePapApprove = () => {
    setPapCompletionDate(getNowFormatted());
    
    setIsPapActionMenuOpen(false);
    setIsPapApproved(true);
    setToastMessage(`Article ${articleData.id} has been moved to published status.`);
    setShowToast(true);
    
    // Hide toast after 5 seconds for PAP approval
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleStartPeReview = () => {
    setApCompletionDate(getNowFormatted());
    setPeReviewStarted(true);
  };

  return (
    <div className="bg-white text-[#35424D] font-source min-h-screen flex flex-col h-screen overflow-hidden w-full relative text-left">
      {/* Top Header */}
      <header className="bg-white border-b border-[#c2c6ca] fixed top-0 z-50 flex items-center h-[60px] w-full shrink-0 px-4">
        <div className="w-full flex justify-between items-center text-left">
          <div className="flex items-center gap-4 text-left">
            <button className="p-1 hover:bg-gray-100 transition-colors rounded-full">
              <img src="/menu.png" alt="menu" className="w-9 h-9" />
            </button>
            <div className="flex items-center text-left">
              <img src="/PubClogo.png" alt="Publisher Central" className="h-10" />
            </div>
          </div>
          <div className="flex items-center gap-3 text-left">
            <div className="flex items-center gap-2 text-left">
              <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] hover:bg-blue-50 transition-all">
                <img src="/upload.png" alt="upload" className="w-5 h-5" />
                <span className="text-[#1c40ca] font-semibold text-base">Upload Manuscript</span>
              </button>
              <div className="p-1 cursor-pointer hover:bg-gray-100 rounded-full">
                <img src="/notification.png" alt="notifications" className="w-6 h-6" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-3 py-1.5 border border-[#d7d9db] rounded-[4px] text-left">
              <div className="w-6 h-6 rounded-full bg-[#35424d] text-white flex items-center justify-center font-semibold text-[13px]">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 pt-[60px] overflow-hidden w-full text-left">
        {/* Navigation Sidebar */}
        <aside 
          className="w-[212px] h-full bg-white py-2 flex flex-col z-40 shrink-0 border-r border-[#c2c6ca] text-left"
          style={{ boxShadow: '1px 0px 0px #C2C6CA' }}
        >
          <nav className="flex flex-col gap-1 px-2 mt-1 text-left">
            <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all text-left" href="#">
              <img src="/space_dashboard.png" alt="dashboard" className="w-5 h-5 opacity-80" />
              <span className="text-base">Dashboard</span>
            </a>
            <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all text-left" href="#">
              <img src="/task_alt.png" alt="tasks" className="w-5 h-5 opacity-80" />
              <span className="text-base">My Tasks</span>
            </a>
            <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all text-left" href="#">
              <img src="/all_inbox.png" alt="conversations" className="w-5 h-5 opacity-80" />
              <span className="text-base">Conversations</span>
            </a>
            
            <div className="mt-1 text-left">
              <button 
                onClick={() => setView(isPapApproved ? 'published-articles' : 'all-articles')}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded transition-all text-left ${view === 'all-articles' || view === 'article-details' || view === 'published-articles' ? 'bg-[#e1e6ff] text-[#35424d]' : 'text-[#5d6871] hover:bg-gray-100'}`}
              >
                <img src="/article.png" alt="articles" className="w-5 h-5" />
                <span className="text-base">All Articles</span>
              </button>
              <div className="flex flex-col ml-4 mt-1 border-l border-[#c2c6ca] text-left">
                <button 
                  onClick={() => setView('all-articles')}
                  className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded-r-[4px] text-left ${(view === 'all-articles' || (view === 'article-details' && !isPapApproved)) ? 'bg-[#e1e6ff] border-l-2 border-[#1c40ca] font-semibold text-[#35424d] -ml-[2px]' : 'text-[#5d6871] hover:bg-gray-100'}`}
                >
                  <img src="/progress_activity.png" alt="in-progress" className="w-4 h-4 opacity-70" />
                  <span className="text-base">In-progress</span>
                </button>
                <button 
                  onClick={() => setView('published-articles')}
                  className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded-r-[4px] text-left ${(view === 'published-articles' || (view === 'article-details' && isPapApproved)) ? 'bg-[#e1e6ff] border-l-2 border-[#1c40ca] font-semibold text-[#35424d] -ml-[2px]' : 'text-[#5d6871] hover:bg-gray-100'}`}
                >
                  <img src="/check_circle.png" alt="published" className="w-4 h-4 opacity-70" />
                  <span className="text-base">Published</span>
                </button>
              </div>
            </div>

            <div className="mt-1 text-left">
              <a className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all text-left" href="#">
                <img src="/book_4.png" alt="issues" className="w-5 h-5 opacity-80" />
                <span className="text-base">All Issues</span>
              </a>
              <div className="flex flex-col ml-4 mt-1 border-l border-[#c2c6ca] text-left">
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 transition-all text-left">
                  <img src="/progress_activity.png" alt="in-progress" className="w-4 h-4 opacity-70" />
                  <span className="text-base">In-progress</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 transition-all text-left">
                  <img src="/check_circle.png" alt="published" className="w-4 h-4 opacity-70" />
                  <span className="text-base">Published</span>
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden bg-white relative text-left">
          <div className="h-full flex flex-col text-left">
            {view === 'all-articles' ? (
              /* Articles Table View - Matches Figma 1083:20217 */
              <div className="px-10 py-8 overflow-y-auto h-full text-left">
                <div className="w-full text-left">
                  <div className="flex flex-col gap-4 mb-4 w-full text-left">
                    <h2 className="text-[18px] font-semibold text-[#35424d] flex items-center gap-1 text-left">
                      Articles In-progress
                      <img src="/info.png" alt="info" className="w-4 h-4 cursor-pointer" />
                    </h2>
                    
                    <div className="flex justify-between items-center h-8 w-full text-left">
                      <div className="flex flex-row items-center px-3 bg-white border border-[#AEB3B7] rounded-[4px] w-[246px] h-8 box-border relative text-left">
                        <input 
                          className="flex-1 text-base bg-transparent border-none outline-none placeholder:text-[#AEB3B7] h-full pr-8" 
                          placeholder="Search" 
                          type="text"
                        />
                        <img src="/search.png" alt="search" className="w-5 h-5 opacity-70 absolute right-2" />
                      </div>

                      <div className="flex items-center gap-1 text-left">
                        <div className="flex items-center gap-0.5 px-2 py-1.5 hover:bg-gray-100 rounded-[4px] cursor-pointer text-[13px] text-[#35424d] text-left">
                          <span className="font-semibold">Journal:</span>
                          <span className="font-normal">All</span>
                          <div className="w-3 h-3 flex items-center justify-center ml-0.5 text-left">
                            <img src="/dropdown.png" alt="dropdown" className="h-[6px] w-auto object-contain" />
                          </div>
                        </div>
                        <button className="flex items-center gap-0.5 px-2 py-1.5 text-[#1c40ca] font-semibold text-[13px] hover:bg-blue-50 rounded-[4px] text-left">
                          <div className="w-4 h-4 flex items-center justify-center text-left">
                            <img src="/filter.png" alt="filters" className="h-[12px] w-auto object-contain" />
                          </div>
                          More Filters
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e3e4e5] rounded-[4px] overflow-hidden bg-white text-left">
                    <div className="overflow-x-auto text-left">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#f6f7f7] border-b border-[#e3e4e5] text-[13px] font-semibold text-[#5d6871] text-left">
                            <th className="px-4 py-3 whitespace-nowrap">Journal</th>
                            <th className="px-4 py-3 whitespace-nowrap">Article</th>
                            <th className="px-4 py-3 whitespace-nowrap">Article Due Date</th>
                            <th className="px-4 py-3 whitespace-nowrap">Milestone</th>
                            <th className="px-4 py-3 whitespace-nowrap">Days in Milestone</th>
                            <th className="px-4 py-3 whitespace-nowrap">Milestone ETA</th>
                            <th className="px-4 py-3 whitespace-nowrap">Overall Progress</th>
                            <th className="px-4 py-3 text-right"></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white text-left">
                          {!isPapApproved && (
                            <tr 
                              className="border-b border-[#f6f7f7] text-[13px] text-[#35424d] hover:bg-gray-50 transition-colors cursor-pointer group text-left" 
                              onClick={() => setView('article-details')}
                            >
                              <td className="px-4 py-4">{articleData.journalId}</td>
                              <td className="px-4 py-4">{articleData.id}</td>
                              <td className="px-4 py-4">{articleData.dueDate}</td>
                              <td className="px-4 py-4 text-left">
                                <div className="flex flex-col gap-1 text-left">
                                  {!(graphicsCompleted && copyeditingCompleted) ? (
                                    <>
                                      {!copyeditingCompleted && (
                                        <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border bg-[#dafbe8] text-[#005728] border-[#8bdfb2] w-fit text-left`}>
                                          <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                          Copyediting
                                        </span>
                                      )}
                                      {!graphicsCompleted && (
                                        <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border bg-[#dafbe8] text-[#005728] border-[#8bdfb2] w-fit text-left`}>
                                          <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                          Graphics
                                        </span>
                                      )}
                                    </>
                                  ) : !isApproved ? (
                                    <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border bg-[#dafbe8] text-[#005728] border-[#8bdfb2] w-fit text-left`}>
                                      <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                      Copyediting Review
                                    </span>
                                  ) : !peReviewStarted ? (
                                    <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border bg-[#dafbe8] text-[#005728] border-[#8bdfb2] w-fit text-left`}>
                                      <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                      Author Proof Review
                                    </span>
                                  ) : !isPeApproved ? (
                                    <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border bg-[#dafbe8] text-[#005728] border-[#8bdfb2] w-fit text-left`}>
                                      <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                      PE Review
                                    </span>
                                  ) : (
                                    <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[13px] font-semibold border bg-[#dafbe8] text-[#005728] border-[#8bdfb2] w-fit text-left`}>
                                      <span className={`w-2 h-2 rounded-full opacity-60 bg-[#005728]`}></span>
                                      PAP
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="px-4 py-4 text-left">2 Days</td>
                              <td className="px-4 py-4 text-left">28/12/2025 11:00</td>
                              <td className="px-4 py-4 text-left">
                                <div className="border border-[#2853f8] p-[3px] rounded-[6px] w-[80px] text-left">
                                  <div 
                                    style={{ 
                                      backgroundColor: "#1c40ca", 
                                      width: isPeApproved ? '95%' : peReviewStarted ? '80%' : isApproved ? '65%' : copyeditingCompleted ? '45%' : '15%' 
                                    }} 
                                    className={`h-1 rounded-[6px] transition-all duration-1000`}
                                  ></div>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-right">
                                <button className="flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-all w-5 h-5 shrink-0 text-left">
                                  <img src="/actions.png" alt="actions" className="h-[14px] w-auto opacity-70 object-contain" />
                                </button>
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
              <div className="px-10 py-8 overflow-y-auto h-full text-left">
                <div className="w-full text-left">
                  <div className="flex flex-col gap-4 mb-4 w-full text-left">
                    <h2 className="text-lg font-bold text-[#35424d] flex items-center gap-1 text-left">
                      Articles Published
                      <img src="/info.png" alt="info" className="w-4 h-4 cursor-pointer" />
                    </h2>

                    <div className="flex justify-between items-center h-8 w-full text-left">
                      <div className="flex flex-row items-center px-3 bg-white border border-[#AEB3B7] rounded-[4px] w-[246px] h-8 box-border relative text-left">
                        <input
                          className="flex-1 text-base bg-transparent border-none outline-none placeholder:text-[#AEB3B7] h-full pr-8"
                          placeholder="Search"
                          type="text"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-left">
                          <img src="/search.png" alt="search" className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-left">
                        <div className="flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:bg-gray-100 rounded text-left">
                          <span className="text-[13px] font-semibold">Journal:</span>
                          <span className="text-[13px]">All</span>
                          <img src="/arrow_drop_down.png" alt="" className="w-4 h-4" />
                        </div>
                        <button className="flex items-center gap-1 text-[#1c40ca] text-[13px] font-semibold hover:underline text-left">
                          <div className="w-4 h-4 flex items-center justify-center text-left">
                            <img src="/filter.png" alt="filters" className="h-[12px] w-auto object-contain" />
                          </div>
                          More Filters
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e3e4e5] rounded-[4px] overflow-hidden bg-white text-left">
                    <div className="overflow-x-auto text-left">
                      <table className="w-full text-left border-collapse text-left">
                        <thead>
                          <tr className="bg-[#f6f7f7] border-b border-[#e3e4e5] text-[13px] font-semibold text-[#5d6871] text-left">
                            <th className="px-4 py-3 whitespace-nowrap">Journal ID</th>
                            <th className="px-4 py-3 whitespace-nowrap">Article ID</th>
                            <th className="px-4 py-3 whitespace-nowrap">Last processed Stage</th>
                            <th className="px-4 py-3 whitespace-nowrap">Submitted On</th>
                            <th className="px-4 py-3 whitespace-nowrap">Completed On</th>
                            <th className="px-4 py-3 text-right"></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white text-left">
                          {isPapApproved && (
                            <tr 
                              className="border-b border-[#f6f7f7] text-[13px] text-[#35424d] hover:bg-gray-50 transition-colors cursor-pointer group text-left" 
                              onClick={() => setView('article-details')}
                            >
                              <td className="px-4 py-4">{articleData.journalId}</td>
                              <td className="px-4 py-4">{articleData.id}</td>
                              <td className="px-4 py-4">PAP</td>
                              <td className="px-4 py-4">26/12/2025 11:00</td>
                              <td className="px-4 py-4">{papCompletionDate}</td>
                              <td className="px-4 py-4 text-right">
                                <button className="flex items-center justify-center hover:bg-gray-100 rounded-[4px] transition-all w-5 h-5 shrink-0 text-left">
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
              /* Article Details View - Matches Figma 1083:20389 */
              <div className="flex flex-col h-full w-full bg-white overflow-hidden text-left">
                <header className="border-b border-[#e3e4e5] flex flex-col gap-[8px] items-start pb-[12px] px-[16px] pt-[8px] shrink-0 w-full text-left">
                  <div className="flex gap-[4px] items-center text-[13px] text-left">
                    <button 
                      onClick={() => setView(isPapApproved ? 'published-articles' : 'all-articles')}
                      className="text-[#5d6871] hover:text-[#1c40ca] transition-colors text-left"
                    >
                      All Articles
                    </button>
                    <div className="w-4 h-4 flex items-center justify-center text-left">
                      <img src="/chevron_forward.png" alt="" className="w-1.5 h-auto opacity-60" />
                    </div>
                    <span className="text-[#5d6871] text-left">In-progress</span>
                    <div className="w-4 h-4 flex items-center justify-center text-left">
                      <img src="/chevron_forward.png" alt="" className="w-1.5 h-auto opacity-60" />
                    </div>
                    <span className="font-semibold text-[#35424d] text-left">{articleData.id}</span>
                  </div>
                  
                  <div className="flex items-end justify-between w-full text-left">
                    <h1 className="text-[18px] font-semibold text-[#5d6871] truncate max-w-[600px] text-left" title={articleData.title}>
                      {articleData.title}
                    </h1>
                    <div className="flex gap-[8px] items-start text-left">
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all text-left">
                        <img src="/live_help.svg" alt="" className="w-4 h-4" />
                        <span className="text-[#1c40ca] font-semibold text-[13px]">Stakeholder FAQs</span>
                      </button>
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all text-left">
                        <span className="text-[#1c40ca] font-semibold text-[13px]">New Conversation</span>
                        <img src="/arrow_drop_down.png" alt="" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </header>

                <div className="flex-1 overflow-y-auto px-[16px] py-[12px] flex flex-col gap-[24px] text-left">
                  <div className="border-b border-[#eceeee] flex flex-col gap-[4px] pb-[16px] w-full text-left">
                    <div className="flex items-center justify-between py-[2px] text-left">
                      <h2 className="text-[16px] font-semibold text-[#35424d] text-left">Article Details</h2>
                      <button className="flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] hover:bg-blue-50 transition-all text-left">
                        <img src="/edit.png" alt="" className="w-4 h-4" />
                        <span className="text-[#1c40ca] font-semibold text-[13px]">Edit Details</span>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-x-[40px] gap-y-[12px] px-[8px] py-[12px] text-left">
                      <div className="flex flex-col gap-[12px] text-left">
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">DOI</span>
                          <a href="#" className="text-[#1c40ca] underline truncate text-left">{articleData.doi}</a>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Journal ID</span>
                          <span className="text-[#35424d] text-left">{articleData.journalId}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Issue ID</span>
                          <span className="text-[#35424d] text-left">{articleData.issueId}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Vol/Issue</span>
                          <span className="text-[#35424d] text-left">{articleData.volIssue}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Typeset Pages</span>
                          <span className="text-[#35424d] text-left">{articleData.typesetPages}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[12px] text-left">
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Article Category</span>
                          <span className="text-[#35424d] text-left">{articleData.category}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Copyediting Level</span>
                          <span className="text-[#35424d] text-left">{articleData.ceLevel}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Tables</span>
                          <span className="text-[#35424d] text-left">{articleData.tables}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Figures</span>
                          <span className="text-[#35424d] text-left">{articleData.figures}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[100px] shrink-0">Total Suppl. Mtl</span>
                          <span className="text-[#35424d] text-left">{articleData.supplMtl}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[12px] text-left">
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Workflow</span>
                          <span className="text-[#35424d] text-left">{articleData.workflow}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Days in Prod.</span>
                          <span className="text-[#35424d] text-left">{articleData.daysInProd}</span>
                        </div>
                        <div className="flex gap-[4px] items-center text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Status</span>
                          <div className="bg-[#dafbe8] border border-[#8bdfb2] flex gap-[4px] items-center px-[8px] py-[2px] rounded-full text-left">
                            <span className="w-2 h-2 rounded-full bg-[#005728] opacity-60 text-left"></span>
                            <span className="text-[#005728] font-semibold text-[11px] text-left">{articleData.status}</span>
                          </div>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Billing Status</span>
                          <span className="text-[#35424d] text-left">{articleData.billing}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Embargo date</span>
                          <span className="text-[#35424d] text-left">{articleData.embargo}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[12px] text-left">
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Corr. Author</span>
                          <span className="text-[#35424d] text-left">{articleData.corrAuthor}</span>
                        </div>
                        <div className="flex gap-[4px] text-[13px] text-left">
                          <span className="text-[#5d6871] w-[80px] shrink-0">Co- Author</span>
                          <div className="flex gap-[4px] items-baseline overflow-hidden text-left">
                            <span className="text-[#35424d] truncate text-left">{articleData.coAuthors}</span>
                            <span className="text-[#1c40ca] underline text-[13px] whitespace-nowrap text-left">+ 5 more</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="flex flex-col gap-[12px] w-full max-w-[600px] text-left">
                    <h2 className="text-[16px] font-semibold text-[#35424d] text-left">Progress</h2>
                    <div className="flex flex-col gap-[16px] px-[6px] text-left">
                      {/* Graphics Step */}
                      <div className="flex gap-[8px] items-start pb-[4px] text-left cursor-pointer hover:bg-blue-50 transition-colors rounded-r-[4px] -mr-4 pr-4"
                        onClick={onCompleteGraphics}
                      >
                        <div className="py-[8px] text-left">
                          <img src={graphicsCompleted ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px] text-left">
                          <div className="flex items-center justify-between text-left">
                            <span className="text-[16px] text-[#2a353e] text-left">Graphics</span>
                            <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871] text-left">
                              <span>26/12/2025 11:00 - </span>
                              <span className="italic">In-progress</span>
                            </div>
                          </div>
                          <p className="text-[13px] text-[#5d6871] text-left">
                            Status: <span className="text-[#35424d]">{graphicsCompleted ? "Completed" : "In-progress"}</span>
                          </p>
                        </div>
                      </div>

                      {/* Copyediting Step */}
                      <div className={`flex gap-[8px] items-start pb-[4px] text-left ${!copyeditingCompleted ? 'cursor-pointer hover:bg-blue-50 transition-colors rounded-r-[4px] -mr-4 pr-4' : ''}`}
                        onClick={!copyeditingCompleted ? () => onEditCentral?.('query-review') : undefined}
                      >
                        <div className="py-[8px] text-left">
                          <img src={copyeditingCompleted ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                        </div>
                        <div className="flex-1 flex flex-col gap-[4px] text-left">
                          <div className="flex items-center justify-between text-left">
                            <span className="text-[16px] text-[#2a353e] text-left">Copyediting</span>
                            <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871] text-left">
                              <span>26/12/2025 11:00 - </span>
                              <span className="italic">In-progress</span>
                            </div>
                          </div>
                          <p className="text-[13px] text-[#5d6871] text-left">
                            Status: <span className="text-[#35424d]">{copyeditingCompleted ? "Completed on-time" : "Pending your review"}</span>
                          </p>
                        </div>
                      </div>

                      {/* Step 3 - Completed Copyediting Review (Conditionally rendered) */}
                      {copyeditingCompleted && (
                        <div className="flex gap-[8px] items-start pb-[4px] text-left">
                          <div className="py-[8px] text-left">
                            <img 
                              src={isApproved ? "/blue_check.png" : "/mode_standy.png"} 
                              alt="" 
                              className="w-6 h-6" 
                            />
                          </div>
                          <div className="flex-1 flex flex-col gap-[12px] text-left">
                            <div className="flex flex-col gap-[4px] text-left">
                              <div className="flex items-center justify-between text-left">
                                <span className="text-[16px] text-[#2a353e] text-left">{articleData.milestone}</span>
                                {!isApproved ? (
                                  <p className="text-[13px] text-[#5d6871] text-left">
                                    28/12/2025 24:01 - <span className="italic">In-progress</span>
                                  </p>
                                ) : (
                                  <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871] text-left">
                                    <span>28/12/2025 12:01 - {ceCompletionDate}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                    <span>{ceCompletionDate?.includes('2026') ? 'Today' : '1 Day'}</span>
                                  </div>
                                )}
                              </div>
                              {!isApproved ? (
                                <p className="text-[13px] text-[#5d6871] text-left">
                                  <span className="text-[#868e94]">Due on:</span> {articleData.dueDate}
                                </p>
                              ) : (
                                <div className="flex flex-col gap-[7px] text-left">
                                  <p className="text-[13px] text-[#5d6871] text-left">
                                    Status: <span className="text-[#35424d]">Completed on-time</span>
                                  </p>
                                  <div className="flex gap-[4px] items-start text-[13px] text-[#5d6871] text-left">
                                    <span>Approved by</span>
                                    <div className="flex gap-[4px] items-center text-left">
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
                              <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative text-left">
                                <div className="flex gap-[4px] items-center text-left">
                                  <img src="/info_blue.png" alt="" className="w-4 h-4" />
                                  <span className="text-[14px] font-semibold text-[#5d6871]">Pending for Action</span>
                                </div>
                                <div className="flex gap-[8px] items-center text-left">
                                  <button className="p-1 hover:bg-[#dcfce7] rounded-[4px] transition-colors text-left">
                                    <img src="/dowload.png" alt="" className="w-6 h-6" />
                                  </button>
                                  <div className="relative text-left">
                                    <button 
                                      onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                                      className="bg-[#cce5ff] border-2 border-[#2277d3] text-[#2277d3] flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] font-semibold text-[16px] hover:bg-[#b3d7ff] transition-all text-left"
                                    >
                                      Action
                                      <img src="/chevron_downward.png" alt="" className="w-4 h-4" />
                                    </button>
                                    
                                    {isActionMenuOpen && (
                                      <div className="absolute top-full mt-1 right-0 bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16),0px_2px_4px_0px_rgba(0,0,0,0.12)] w-[200px] z-50 text-left">
                                        <div className="content-stretch flex flex-col items-start py-[1px] relative shrink-0 w-full text-left">
                                          <button 
                                            className="bg-[#edf0fd] content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-[#e1e6ff] transition-colors text-left"
                                            onClick={handleApprove}
                                          >
                                            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full text-left">
                                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative text-left">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
                                                  Approve (No Correction)
                                                </p>
                                              </div>
                                            </div>
                                          </button>
                                          <button 
                                            className="bg-white content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors text-left"
                                            onClick={() => setIsActionMenuOpen(false)}
                                          >
                                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full text-left">
                                              <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative text-left">
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

                      {/* Step 4 - Next: Author Proof Review */}
                      {isApproved && (
                        <div 
                          className={`flex gap-[8px] items-start pb-[4px] text-left ${!peReviewStarted ? 'cursor-pointer hover:bg-blue-50 transition-colors rounded-r-[4px] -mr-4 pr-4' : ''}`}
                          onClick={!peReviewStarted ? handleStartPeReview : undefined}
                        >
                          <div className="py-[8px] text-left">
                            <img src={peReviewStarted ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex-1 flex flex-col gap-[4px] font-['Source_Sans_Pro',sans-serif] text-left">
                            <div className="flex items-center justify-between text-left">
                              <p className="text-[16px] text-[#2a353e] text-left">
                                {articleData.nextMilestone}
                              </p>
                              <p className="text-[13px] text-[#5d6871] whitespace-nowrap text-left">
                                {peReviewStarted ? `${ceCompletionDate} - ${apCompletionDate}` : `${ceCompletionDate} - In-progress`}
                              </p>
                            </div>
                            <p className="text-[13px] text-[#35424d] text-left">
                              {peReviewStarted ? "Status: Completed on-time" : "Proofing In-progress by Author"}
                            </p>
                            {!peReviewStarted && (
                              <p className="text-[13px] text-[#5d6871] text-left">
                                <span className="text-[#868e94]">Expected completion:</span> {getNowFormatted()}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Step 5 - PE Review (only shown when Author Proof is completed) */}
                      {peReviewStarted && (
                        <div className="flex gap-[8px] items-start pb-[4px] text-left">
                          <div className="py-[8px] text-left">
                            <img src={isPeApproved ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex-1 flex flex-col gap-[12px] text-left">
                            <div className="flex flex-col gap-[4px] font-['Source_Sans_Pro',sans-serif] text-left">
                              <div className="flex items-center justify-between text-left">
                                <p className="text-[16px] text-[#2a353e] text-left">PE Review</p>
                                {!isPeApproved ? (
                                  <p className="text-[13px] text-[#5d6871] whitespace-nowrap text-left">
                                    {apCompletionDate} - <span className="italic">In-progress</span>
                                  </p>
                                ) : (
                                  <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871] text-left">
                                    <span>{apCompletionDate} - {peCompletionDate}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                    <span>Today</span>
                                  </div>
                                )}
                              </div>
                              {!isPeApproved ? (
                                <p className="text-[13px] text-[#5d6871] text-left">
                                  <span className="text-[#868e94]">Estimated completion:</span> {getNowFormatted()}
                                </p>
                              ) : (
                                <div className="flex flex-col gap-[7px] text-left">
                                  <p className="text-[13px] text-[#5d6871] text-left">
                                    Status: <span className="text-[#35424d]">Completed on-time</span>
                                  </p>
                                  <div className="flex gap-[4px] items-start text-[13px] text-[#5d6871] text-left">
                                    <span>Approved by</span>
                                    <div className="flex gap-[4px] items-center text-left">
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
                              <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative text-left">
                                <div className="flex gap-[4px] items-center text-left">
                                  <img src="/info_blue.png" alt="" className="w-4 h-4" />
                                  <span className="text-[14px] font-semibold text-[#5d6871]">Pending for Action</span>
                                </div>
                                <div className="flex gap-[8px] items-center text-left">
                                  <button className="p-1 hover:bg-[#dcfce7] rounded-[4px] transition-colors text-left">
                                    <img src="/dowload.png" alt="" className="w-6 h-6" />
                                  </button>
                                  <div className="relative text-left">
                                    <button 
                                      onClick={() => setIsPeActionMenuOpen(!isPeActionMenuOpen)}
                                      className="bg-[#cce5ff] border-2 border-[#2277d3] text-[#2277d3] flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] font-semibold text-[16px] hover:bg-[#b3d7ff] transition-all text-left"
                                    >
                                      Action
                                      <img src="/chevron_downward.png" alt="" className="w-4 h-4" />
                                    </button>
                                    
                                    {isPeActionMenuOpen && (
                                      <div className="absolute top-full mt-1 right-0 bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16),0px_2px_4px_0px_rgba(0,0,0,0.12)] w-[200px] z-50 text-left">
                                        <div className="content-stretch flex flex-col items-start py-[1px] relative shrink-0 w-full text-left">
                                          <button 
                                            className="bg-[#edf0fd] content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-[#e1e6ff] transition-colors text-left"
                                            onClick={handlePeApprove}
                                          >
                                            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full text-left">
                                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative text-left">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
                                                  Approve (No Correction)
                                                </p>
                                              </div>
                                            </div>
                                          </button>
                                          <button 
                                            className="bg-white content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors text-left"
                                            onClick={() => setIsPeActionMenuOpen(false)}
                                          >
                                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full text-left">
                                              <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative text-left">
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
                        <div className="flex gap-[8px] items-start pb-[4px] text-left">
                          <div className="py-[8px] text-left">
                            <img src={isPapApproved ? "/blue_check.png" : "/mode_standy.png"} alt="" className="w-6 h-6" />
                          </div>
                          <div className="flex-1 flex flex-col gap-[8px] text-left">
                            <div className="flex flex-col gap-[4px] font-['Source_Sans_Pro',sans-serif] text-left">
                              <div className="flex items-center justify-between text-left">
                                <p className="text-[16px] text-[#2a353e] text-left">PAP</p>
                                {!isPapApproved ? (
                                  <p className="text-[13px] text-[#5d6871] whitespace-nowrap text-left">
                                    {peCompletionDate} - <span className="italic">In-progress</span>
                                  </p>
                                ) : (
                                  <div className="flex gap-[4px] items-center text-[13px] text-[#5d6871] text-left">
                                    <span>{peCompletionDate} - {papCompletionDate}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#5d6871]"></span>
                                    <span>Today</span>
                                  </div>
                                )}
                              </div>
                              {!isPapApproved ? (
                                <p className="text-[13px] text-[#868e94] text-left">
                                  Estimated completion: <span className="text-[#35424d] text-left">{getNowFormatted()}</span>
                                </p>
                              ) : (
                                <div className="flex flex-col gap-[7px] text-left">
                                  <p className="text-[13px] text-[#5d6871] text-left">
                                    Status: <span className="text-[#35424d] text-left">Completed on-time</span>
                                  </p>
                                  <div className="flex gap-[4px] items-start text-[13px] text-[#5d6871] text-left">
                                    <span>Approved by</span>
                                    <div className="flex gap-[4px] items-center text-left">
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
                              <div className="bg-[#f0f7ff] border border-[#93beeb] flex items-center justify-between pl-[12px] pr-[16px] py-[8px] rounded-[4px] relative text-left">
                                <div className="flex gap-[4px] items-center text-left">
                                  <img src="/info_blue.png" alt="" className="w-4 h-4" />
                                  <span className="text-[14px] font-semibold text-[#5d6871]">Pending for Action</span>
                                </div>
                                <div className="flex gap-[8px] items-center text-left">
                                  <button className="p-1 hover:bg-[#dcfce7] rounded-[4px] transition-colors text-left">
                                    <img src="/dowload.png" alt="" className="w-6 h-6" />
                                  </button>
                                  <div className="relative text-left">
                                    <button 
                                      onClick={() => setIsPapActionMenuOpen(!isPapActionMenuOpen)}
                                      className="bg-[#cce5ff] border-2 border-[#2277d3] text-[#2277d3] flex gap-[4px] items-center px-[8px] py-[6px] rounded-[4px] font-semibold text-[16px] hover:bg-[#b3d7ff] transition-all text-left"
                                    >
                                      Action
                                      <img src="/chevron_downward.png" alt="" className="w-4 h-4" />
                                    </button>
                                    
                                    {isPapActionMenuOpen && (
                                      <div className="absolute top-full mt-1 right-0 bg-white content-stretch flex flex-col items-start overflow-clip rounded-[4px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16),0px_2px_4px_0px_rgba(0,0,0,0.12)] w-[200px] z-50 text-left">
                                        <div className="content-stretch flex flex-col items-start py-[1px] relative shrink-0 w-full text-left">
                                          <button 
                                            className="bg-[#edf0fd] content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-[#e1e6ff] transition-colors text-left"
                                            onClick={handlePapApprove}
                                          >
                                            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full text-left">
                                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative text-left">
                                                <p className="font-['Source_Sans_Pro',sans-serif] text-[#35424d] text-[13px] text-left">
                                                  Approve (No Correction)
                                                </p>
                                              </div>
                                            </div>
                                          </button>
                                          <button 
                                            className="bg-white content-stretch flex flex-col gap-[2px] items-start pl-[12px] pr-[16px] py-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors text-left"
                                            onClick={() => setIsPapActionMenuOpen(false)}
                                          >
                                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full text-left">
                                              <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative text-left">
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

      {/* Success Snackbar (Toast) - Matches Figma 1374:51743 */}
      {showToast && (
        <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 bg-[#dafbe8] border border-[#8bdfb2] flex items-center px-4 py-2 rounded-[4px] shadow-sm z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300 text-left">
          <div className="flex gap-2 items-center text-left">
            <img src="/check_circle_GREEN.png" alt="" className="w-6 h-6" />
            <p className="font-semibold text-[#007a39] text-[13px] text-left">
              {toastMessage}
            </p>
            {isPapApproved && toastMessage.includes('published status') && (
              <button 
                onClick={() => {
                  setShowPackageModal(true);
                  setShowToast(false);
                }}
                className="bg-[#007a39] text-white text-[12px] font-bold px-3 py-1 rounded hover:bg-[#006630] transition-colors ml-2"
              >
                View Package
              </button>
            )}
          </div>
        </div>
      )}

      {/* Package Viewer Modal */}
      {showPackageModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm text-left">
          <div className="bg-white w-[600px] rounded-lg shadow-xl flex flex-col overflow-hidden max-h-[80vh] animate-in fade-in zoom-in-95 duration-200 text-left">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-[#F8F9FA] text-left">
              <div className="flex items-center gap-2 text-left">
                <svg className="w-5 h-5 text-[#35424D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 className="font-bold text-[#35424D]">Package: @package/CTARC_100913</h3>
              </div>
              <button onClick={() => setShowPackageModal(false)} className="text-gray-400 hover:text-gray-600 text-left">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 text-left">
              <div className="grid grid-cols-1 gap-2 text-left">
                {[
                  { name: 'CTARC_100913.jsonld', size: '223 KB', type: 'JSON-LD' },
                  { name: 'CTARC_100913.xml', size: '214 KB', type: 'XML' },
                  { name: 'CTARC_100913.pdf', size: '1.2 MB', type: 'PDF' }
                ].map((file) => (
                  <div key={file.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors group text-left">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-left">
                        <img src="/article.png" alt="" className="w-6 h-6 opacity-70" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-sm text-[#35424D] text-left">{file.name}</p>
                        <p className="text-xs text-gray-500 text-left">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <a 
                        href={`/package/${file.name}`}
                        download={file.name}
                        className="p-2 hover:bg-green-100 rounded text-green-600 transition-colors flex items-center justify-center text-left" 
                        title="Download"
                      >
                        <img src="/dowload.png" alt="Download" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end text-left">
              <button 
                onClick={() => setShowPackageModal(false)}
                className="px-6 py-2 bg-[#35424D] text-white rounded text-[13px] font-semibold hover:bg-[#2A343D] transition-colors text-left"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && <BeaconLoader onComplete={handleBeaconComplete} />}
    </div>
  );
};

export default PublisherCentral;
