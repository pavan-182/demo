import React from 'react';
import QuerySidebar from './QuerySidebar';
import Header from './Header';

interface QueryReviewProps {
  onBack?: () => void;
  onSubmit?: () => void;
}

const QueryReview: React.FC<QueryReviewProps> = ({ onSubmit }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white text-[#35424D] font-sans text-left">
      <Header onSubmit={onSubmit} />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative text-left">
        {/* Document Editor */}
        <section className="flex-1 bg-[#F1F3F5] relative flex flex-col h-full overflow-hidden p-8">
          <div className="flex-1 bg-white shadow-lg overflow-y-auto p-16 relative">
            {/* Navigation Arrow */}
            <button className="absolute left-6 top-6 z-20 p-2.5 bg-white border border-gray-100 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 text-gray-500 transition-all duration-300 group">
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </button>

            <div className="max-w-3xl mx-auto space-y-12">
              {/* Title Section */}
              <div className="relative pt-4">
                <span className="absolute -left-24 top-5 doc-tag">TITLE</span>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight uppercase">
                  Ferroptosis as the new approach to cancer therapy
                </h1>
              </div>

              {/* Authors Section */}
              <div className="relative">
                <span className="absolute -left-24 top-1 doc-tag">AUTHORS</span>
                <div className="space-y-4">
                  <p className="text-gray-800 font-medium">
                    Oluwafemi Adeleke Ojo a,e,*, Susan Grant b, Pearl Ifunanya Nwafor-Ezeh a, Tobiloba Christiana Maduakolam-Aniobi b, Tolulope Isaiah Akinborode c, Emmanuel Henry Ezenabor a, Adebola Busola Ojo d
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>a Phytomedicine, Molecular Toxicology, and Computational Biochemistry Research Laboratory (PMTCB-RL), Department of Biochemistry, Bowen University, Iwo, Nigeria</p>
                    <p>b Department of Biochemistry, Landmark University, Omu-Aran, Nigeria</p>
                    <p>c Department of Crop Production and Soil Science, Ladoke Akintola University, Ogbomosho, Nigeria</p>
                    <p>d Department of Environmental Management and Toxicology, University of Ilesa, Ilesa, Nigeria</p>
                    <p>e Research Centre for Integrative Physiology and Pharmacology and Turku Center for Disease Modeling, Institute of Biomedicine, University of Turku, Turku, Finland</p>
                  </div>
                </div>
              </div>

              {/* Abstract Section */}
              <div className="relative space-y-6">
                <div>
                  <span className="absolute -left-24 top-1 doc-tag">ABSTRACT</span>
                  <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Abstract</h2>
                </div>
                <div className="relative">
                  <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    Cancer is characterized by unregulated cell proliferation, evasion of apoptosis, and a propensity for metastasis, making it a leading cause of morbidity and mortality globally. Major challenges in cancer treatment include drug resistance and tumor heterogeneity, which hinder the clinical efficacy of existing therapies. To enhance treatment outcomes, it is essential to integrate emerging biological insights and technological advancements with conventional therapeutic strategies. Recent research has identified various forms of cell death, which can be classified as either regulated or unregulated. Regulated cell death involves specific biochemical and signaling pathways, while unregulated cell death occurs passively and uncontrollably. Apoptosis, the most extensively studied form of regulated cell death, is primarily mediated by the activation of caspase proteases. Nevertheless, the resistance of many tumors to apoptotic pathways has shifted focus towards non-apoptotic forms of cell death, such as ferroptosis. Ferroptosis is an iron-dependent form of regulated necrosis characterized by extensive membrane damage resulting from lipid peroxidation. Numerous preclinical studies have demonstrated that inducing ferroptosis can significantly reduce tumor growth across a variety of cancer types. For instance, in a study involving breast cancer models, the use of ferroptosis inducers such as erastin and RSL3 led to a marked decrease in tumor volume and weight.
                  </p>
                </div>
              </div>

              {/* Introduction Section */}
              <div className="relative space-y-6">
                <div>
                  <span className="absolute -left-24 top-1 doc-tag">SECTION</span>
                  <h2 className="text-xl font-bold text-gray-900">1. Introduction</h2>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    Cancer encompasses a diverse group of diseases characterized by uncontrolled cell growth and proliferation. The term "cancer," derived from the Greek word "karkinos" coined by Hippocrates, the "Father of Medicine," has evolved to describe over 277 distinct types of malignancies [1,2]. Historically, the term was translated into Latin by the Roman surgeon Celsus, linking it to the brachyuran crab, a metaphor for the disease’s invasive nature. Globally, cancer is the second leading cause of mortality, with 18.1 million new cases reported in 2018, the highest incidence occurring in Asia (Fig. 1) [3].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <QuerySidebar />
      </main>
    </div>
  );
};

export default QueryReview;
