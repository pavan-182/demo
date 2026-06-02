import React, { useState } from 'react';

const DashboardEmptyState: React.FC<{ onUploadSuccess?: () => void }> = ({ onUploadSuccess }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Figma Assets (URLs from get_design_context)
  const imgArticle1 = "/image 45.svg";
  const imgClose = "https://www.figma.com/api/mcp/asset/a75daf8a-a07a-4e4a-9637-88b5173400b1";
  const imgChevronForward = "https://www.figma.com/api/mcp/asset/6fe021f1-9567-4379-bf2b-948f33910452";
  const imgUpload1 = "https://www.figma.com/api/mcp/asset/19bc0819-144d-410b-924c-85df66a76cf7";
  const imgImage4 = "https://www.figma.com/api/mcp/asset/5c19fcbf-d9fc-41f1-ac88-cd0859581097";
  const imgDownload = "https://www.figma.com/api/mcp/asset/84c4b66b-6eac-4179-8c8c-6019273bf50f";
  const imgClose1 = "https://www.figma.com/api/mcp/asset/fbd0bc9a-ce55-4cc2-b8d4-b2f6153750ce";
  const imgAdd = "https://www.figma.com/api/mcp/asset/d5dc4894-ee4a-4d99-8374-7dfcd65ccbc4";

  const handleUpload = () => {
    setShowUploadModal(false);
    if (onUploadSuccess) onUploadSuccess();
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
              <button 
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-[4px] hover:bg-blue-50 transition-all"
              >
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

      <div className="flex flex-1 pt-[60px] overflow-hidden w-full">
        {/* Navigation Sidebar */}
        <aside 
          className="w-[212px] h-full bg-white py-2 flex flex-col z-40 shrink-0 border-r border-[#c2c6ca]"
          style={{ boxShadow: '1px 0px 0px #C2C6CA' }}
        >
          <nav className="flex flex-col gap-1 px-2 mt-1">
            <a className="flex items-center gap-2 px-3 py-1.5 bg-[#e1e6ff] text-[#35424d] rounded transition-all font-semibold" href="#">
              <img src="/space_dashboard.png" alt="dashboard" className="w-5 h-5" />
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
              <button className="w-full flex items-center gap-2 px-3 py-1.5 text-[#5d6871] hover:bg-gray-100 rounded transition-all">
                <img src="/article.png" alt="articles" className="w-5 h-5 opacity-80" />
                <span className="text-base">All Articles</span>
              </button>
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

        <main className="flex-1 overflow-hidden bg-white relative flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center max-w-[600px] text-center gap-6">
            <img 
              src={imgArticle1} 
              alt="Article" 
              className="w-[343px] h-[142px] object-contain"
            />
            
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="text-[28px] font-bold text-[#2A353E] leading-[36px]">
                  Get Publish-Ready in clicks
                </h2>
                <div className="text-[16px] text-[#35424D] leading-relaxed">
                  <p>Convert raw manuscripts into validated and typeset articles</p>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#1C40CA] text-white font-semibold text-[15px] rounded-[4px] hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                >
                  <img src="/upload.png" alt="" className="w-5 h-5 brightness-0 invert" />
                  Upload Manuscript
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Upload Modal Overlay */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" 
            onClick={() => setShowUploadModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white w-[600px] shadow-xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#c2c6ca]">
              <h3 className="text-[22px] font-semibold text-[#35424d] leading-6">
                Upload Manuscript
              </h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <img src={imgClose} alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-1 text-[14px]">
                <span className="text-[#d10b00] font-semibold">*</span>
                <span className="text-[#35424d]">Indicates required</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                  {/* Journal ID */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex gap-1">
                      <span className="text-[16px] text-[#35424d]">Journal ID</span>
                      <span className="text-[#d10b00] font-semibold">*</span>
                    </div>
                    <div className="relative h-10">
                      <div className="absolute inset-0 border border-[#d7d9db] rounded-[4px] px-3 py-2 flex items-center justify-between">
                        <span className="text-[16px] text-[#35424d]">CTARC</span>
                        <img src={imgChevronForward} alt="" className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Article ID */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex gap-1">
                      <span className="text-[16px] text-[#35424d]">Article ID</span>
                      <span className="text-[#d10b00] font-semibold">*</span>
                    </div>
                    <div className="relative h-10">
                      <div className="absolute inset-0 border border-[#d7d9db] rounded-[4px] px-3 py-2 flex items-center">
                        <span className="text-[16px] text-[#35424d]">100913</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manuscript File */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    <span className="text-[16px] text-[#35424d]">Manuscript File</span>
                    <span className="text-[#d10b00] font-semibold">*</span>
                  </div>
                  
                  {/* Dropzone */}
                  <div className="border border-[#bbbfc3] border-dashed rounded-[4px] bg-[#f6f7f7] p-4 flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-2">
                      <img src={imgUpload1} alt="" className="w-6 h-6" />
                      <span className="text-[16px] text-[#35424d]">Drag and drop Zip file or Browse</span>
                    </div>
                  </div>

                  {/* Attachment Card */}
                  <div className="bg-[#fbfbfb] border border-[#eceeee] rounded-[4px] p-2 flex items-center gap-4">
                    <img src={imgImage4} alt="" className="w-[37px] h-8 object-cover" />
                    <div className="flex-1 flex flex-col">
                      <span className="text-[14px] text-[#35424d]">CTARC_100913.zip</span>
                      <span className="text-[12px] text-[#868e94] opacity-50">10 MB. 26/12/2025 01:00:25</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                        <img src={imgDownload} alt="Download" className="w-6 h-6" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                        <img src={imgClose1} alt="Remove" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add Comment */}
                <button className="flex items-center gap-1 self-start px-2 py-1.5 text-[#1C40CA] font-semibold text-[13px] rounded-[4px] hover:bg-blue-50 transition-colors">
                  <img src={imgAdd} alt="" className="w-4 h-4" />
                  Add Comment
                </button>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-3 border-t border-[#c2c6ca] flex justify-end">
              <button 
                onClick={handleUpload}
                className="bg-[#1c40ca] text-white font-semibold text-[16px] px-[8px] py-[6px] rounded-[4px] hover:bg-blue-700 transition-all"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardEmptyState;
