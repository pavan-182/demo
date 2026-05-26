import React from 'react';

const PublisherCentral: React.FC = () => {
  return (
    <div className="bg-white text-on-surface font-sans min-h-screen">
      {/* TopAppBar */}
      <header className="bg-white border-b border-gray-200 fixed top-0 z-50 flex justify-between items-center h-16 px-6 w-full">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-gray-100 transition-colors rounded-full">
            <img src="/menu.png" alt="menu" className="w-8 h-8" />
          </button>
          <img src="/PubClogo.png" alt="Publisher Central" className="h-10" />
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-blue-700 font-semibold text-sm hover:underline transition-all">
            <span className="material-symbols-outlined">upload</span>
            Upload Manuscript
          </button>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined text-gray-600 cursor-pointer">notifications</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2d334a] flex items-center justify-center rounded overflow-hidden">
              <span className="material-symbols-outlined text-white text-[18px]">menu_book</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#4a4a4a] text-white flex items-center justify-center font-bold text-xs">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <aside className="fixed left-0 top-16 w-[260px] h-[calc(100vh-64px)] bg-white border-r border-gray-200 pt-4 flex flex-col z-40">
        <nav className="flex flex-col gap-0.5 px-2">
          {/* Dashboard */}
          <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          {/* My Tasks */}
          <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">task_alt</span>
            <span className="text-sm font-medium">My Tasks</span>
          </a>
          {/* Conversations */}
          <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
            <span className="text-sm font-medium">Conversations</span>
          </a>
          {/* All Articles */}
          <div className="mt-2">
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 bg-[#e8edff] rounded transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">article</span>
              <span className="text-sm font-medium text-blue-900">All Articles</span>
            </a>
            <div className="flex flex-col ml-3 mt-0.5 border-l-2 border-blue-700">
              <a className="flex items-center gap-3 px-6 py-2 text-gray-900 font-semibold bg-[#e8edff] transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]">cached</span>
                <span className="text-sm">In-progress</span>
              </a>
              <a className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span className="text-sm">Published</span>
              </a>
            </div>
          </div>
          {/* All Issues */}
          <div className="mt-2">
            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
              <span className="text-sm font-medium">All Issues</span>
            </a>
            <div className="flex flex-col ml-3 mt-0.5 border-l-2 border-transparent">
              <a className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]">cached</span>
                <span className="text-sm">In-progress</span>
              </a>
              <a className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span className="text-sm">Published</span>
              </a>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[260px] pt-16 min-h-screen bg-gray-50">
        <div className="p-8">
          {/* Header section with Search and Filters */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              Articles In-progress
              <span className="material-symbols-outlined text-gray-500 text-[18px] cursor-pointer">info</span>
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-900">
                Journal: <span className="font-bold">All</span>
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </div>
              <button className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                More Filters
              </button>
            </div>
          </div>

          {/* Search Area */}
          <div className="mb-4">
            <div className="relative max-w-sm">
              <input 
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" 
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
                  <tr className="border-b border-gray-100 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-5 font-medium">AN</td>
                    <td className="px-4 py-5 font-medium">AN4321</td>
                    <td className="px-4 py-5">15/01/2026 11:00</td>
                    <td className="px-4 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Copyediting Review
                      </span>
                    </td>
                    <td className="px-4 py-5 font-medium">11 Days</td>
                    <td className="px-4 py-5 text-gray-500">29/12/2025 12:10</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-200 h-1.5 w-24 rounded-full overflow-hidden">
                          <div className="bg-blue-700 h-full w-[70%]"></div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                          <div className="w-4 h-4 bg-[#2d334a] flex items-center justify-center rounded-sm">
                            <span className="material-symbols-outlined text-white text-[12px]">menu_book</span>
                          </div>
                          Action pending on you
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-right">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Support Chat FAB */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-blue-700 text-white rounded-lg shadow-xl flex items-center justify-center hover:bg-blue-800 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </button>
      </div>
    </div>
  );
};

export default PublisherCentral;