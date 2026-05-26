import React from 'react';

interface DocumentEditorProps {
  activeEntityId?: string;
}

const DocumentEditor: React.FC<DocumentEditorProps> = ({ activeEntityId }) => {
  const getEntityClass = (id: string) => {
    const isActive = activeEntityId === id;
    if (isActive) {
      return "zncl2-highlight ring-4 ring-red-50 ring-opacity-50";
    }
    return "border-b-2 border-orange-400 font-medium cursor-pointer hover:bg-orange-50 transition-colors";
  };

  return (
    <section className="flex-1 overflow-y-auto bg-white relative custom-scrollbar p-12" data-purpose="DocumentEditor">
      {/* Side navigation arrow */}
      <button className="absolute left-4 top-4 p-2 border rounded hover:bg-gray-50 text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </button>

      <div className="max-w-3xl mx-auto pl-24 space-y-8">
        {/* Abstract Section */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">ABSTRACTP...</span>
          <p className="text-gray-700 leading-relaxed">
            synthesis loop has better economy and safety, which promotes the popularization of distributed NH3 production technology.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <span className={`transition-all duration-300 ${activeEntityId === 'zncl2' ? 'bg-[#FFF0E4] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] py-1 px-1 rounded' : ''}`}>
              Green <span 
                className={getEntityClass('zncl2')} 
                id="target-entity-zncl2"
              >
                ZnCl2
              </span> production under mild conditions is facilitated by integrating current-assisted reaction unit and separation unit based on IL absorption.
            </span>
          </p>
        </div>

        {/* Keywords Section */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">KEYWORDS...</span>
          <p className="text-gray-700 leading-relaxed">
            <span className={`transition-all duration-300 ${activeEntityId === 'n2o' ? 'bg-[#FFF0E4] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] py-1 px-1 rounded' : ''}`}>
              Renewable energy, mild conditions, ammonia production, <span 
                className={getEntityClass('n2o')} 
                id="target-entity-n2o"
              >
                N2O
              </span>, reaction-absorption, techno-economic
            </span>
          </p>
        </div>

        {/* Heading Tags */}
        <div className="relative">
          <span className="absolute -left-24 top-1 doc-tag">XPARA</span>
          <h2 className="text-2xl font-normal text-gray-800">Abstract</h2>
        </div>

        <div className="relative">
          <span className="absolute -left-24 top-1 doc-tag">XPARA</span>
          <h2 className="text-2xl font-normal text-gray-800">Keywords</h2>
        </div>

        {/* Introduction Section */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h1 className="text-3xl font-normal text-gray-900 mb-6">Introduction</h1>
          <div className="relative">
            <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <span className={`transition-all duration-300 ${activeEntityId === 'nh4-n' ? 'bg-[#FFF0E4] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] py-1 px-1 rounded' : ''}`}>
                  Ammonia (NH3) is a versatile commodity chemical that can be used in fertilizer production, hydrogen storage, refrigeration and other fields 
                  <a className="text-brand-blue underline" href="#">1-3</a>. Most of the world’s <span 
                    className={getEntityClass('nh4-n')} 
                    id="target-entity-nh4-n"
                  >
                    NH4-N
                  </span> is synthesized by Haber-Bosch (HB) process at high temperatures (623-793 K) and pressures (150-300 bar) 
                  <a className="text-brand-blue underline" href="#">4-7</a>.
                </span> The total energy consumption of NH3 production process based on steam methane reforming (SMR) can reach 7.78-9.06 kWh kgNH3-1, which consumes a large amount of fossil energy and causes huge carbon emissions 
                <a className="text-brand-blue underline" href="#">4,8-10</a>. In order to make full use of renewable energy such as wind, biomass and solar energy, small-scale and distributed NH3 production has been extensively studied.
              </p>
              <p>
                <a className="text-brand-blue underline" href="#">11-13</a> However, distributed NH3 production needs to be carried out under . In order milder conditions to improve its economy and safety 
                <a className="text-brand-blue underline" href="#">4</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentEditor;
