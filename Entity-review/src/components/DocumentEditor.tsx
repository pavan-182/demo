import React from 'react';

interface DocumentEditorProps {
  activeEntityId?: string;
}

const DocumentEditor: React.FC<DocumentEditorProps> = ({ activeEntityId }) => {
  const getEntityClass = (id: string) => {
    const isActive = activeEntityId === id;
    if (isActive) {
      return "bg-[#FFF0E4] py-0.5 px-1 rounded-sm ring-1 ring-orange-200 shadow-sm transition-all duration-300";
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
        
        {/* Article Title */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">Article Title</span>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Ferroptosis as the new approach to cancer therapy
          </h1>
        </div>

        {/* Authors */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">Authors</span>
          <p className="text-lg text-gray-800 leading-relaxed">
            Oluwafemi Adeleke Ojo a,e,*, Susan Grant b, Pearl Ifunanya Nwafor-Ezeh a, Tobiloba Christiana Maduakolam-Aniobi b, Tolulope Isaiah Akinborode c, Emmanuel Henry Ezenabor a, Adebola Busola Ojo d
          </p>
        </div>

        {/* Affiliations */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">Affiliations</span>
          <div className="text-sm text-gray-600 leading-relaxed space-y-1">
            <p>a Phytomedicine, Molecular Toxicology, and Computational Biochemistry Research Laboratory (PMTCB-RL), Department of Biochemistry, Bowen University, Iwo, Nigeria</p>
            <p>b Department of Biochemistry, Landmark University, Omu-Aran, Nigeria</p>
            <p>c Department of Crop Production and Soil Science, Ladoke Akintola University, Ogbomosho, Nigeria</p>
            <p>d Department of Environmental Management and Toxicology, University of Ilesa, Ilesa, Nigeria</p>
            <p>e Research Centre for Integrative Physiology and Pharmacology and Turku Center for Disease Modeling, Institute of Biomedicine, University of Turku, Turku, Finland</p>
          </div>
        </div>

        {/* Abstract Heading */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">XPARA</span>
          <h2 className="text-2xl font-semibold text-gray-800 uppercase tracking-wide">Abstract</h2>
        </div>

        {/* Abstract Section */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">ABSTRACTP...</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              <span className={`transition-all duration-300`}>
                Cancer is characterized by unregulated cell proliferation, evasion of apoptosis, and a propensity for metastasis, making it a leading cause of morbidity and mortality globally. Major challenges in cancer treatment include drug resistance and tumor heterogeneity, which hinder the clinical efficacy of existing therapies. To enhance treatment outcomes, it is essential to integrate emerging biological insights and technological advancements with conventional therapeutic strategies. Recent research has identified various forms of cell death, which can be classified as either regulated or unregulated. Regulated cell death involves specific biochemical and signaling pathways, while unregulated cell death occurs passively and uncontrollably. Apoptosis, the most extensively studied form of regulated cell death, is primarily mediated by the activation of caspase proteases. Nevertheless, the resistance of many tumors to apoptotic pathways has shifted focus towards non-apoptotic forms of cell death, such as ferroptosis. Ferroptosis is an iron-dependent form of regulated necrosis characterized by extensive membrane damage resulting from lipid peroxidation. Numerous preclinical studies have demonstrated that inducing ferroptosis can significantly reduce tumor growth across a variety of cancer types. For instance, in a study involving breast cancer models, the use of ferroptosis inducers such as erastin and RSL3 led to a marked decrease in tumor volume and weight.
              </span>
            </p>
            <p>
              <span className={`transition-all duration-300`}>
                This review aims to explore the potential of ferroptosis as a novel therapeutic strategy in cancer treatment.
              </span>
            </p>
          </div>
        </div>

        {/* Keywords Heading */}
        <div className="relative group mt-8">
          <span className="absolute -left-24 top-1 doc-tag">XPARA</span>
          <h2 className="text-xl font-semibold text-gray-800">Keywords:</h2>
        </div>

        {/* Keywords Section */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">KEYWORDS...</span>
          <p className="text-gray-700 leading-relaxed">
            <span className={`transition-all duration-300`}>
              Ferroptosis, Apoptosis, Cancer, Targeted therapy
            </span>
          </p>
        </div>

        {/* Introduction Heading */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h1>
        </div>

        {/* Introduction Section */}
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              <span className={`transition-all duration-300`}>
                Cancer encompasses a diverse group of diseases characterized by uncontrolled cell growth and proliferation. The term "cancer," derived from the Greek word "karkinos" coined by Hippocrates, the "Father of Medicine," has evolved to describe over 277 distinct types of malignancies [1,2]. Historically, the term was translated into Latin by the Roman surgeon Celsus, linking it to the brachyuran crab, a metaphor for the disease’s invasive nature. Globally, cancer is the second leading cause of mortality, with 18.1 million new cases reported in 2018, the highest incidence occurring in Asia (Fig. 1) [3].
              </span>
            </p>
            <p>
              <span className={`transition-all duration-300`}>
                Cancer can be conceptualized as a multifaceted illness, characterized by complex tempo-spatial alterations in cell physiology that culminate in the formation of malignant tumors [4]. The pathological hallmark of cancer is neoplasia, or abnormal cell proliferation, which drives tumor invasion into surrounding tissues and distant organs, contributing significantly to patient morbidity and mortality. The transformation of normal cells into malignant cancer cells has been a focal point of biomedical research for decades [5].
              </span>
            </p>
            <p>
              <span className={`transition-all duration-300`}>
                In recent years, significant advances have been made in identifying therapeutic targets by elucidating the distinctions between cancer cells and their healthy counterparts. This research has led to the identification of approximately 300 genes implicated in human cancer, as cataloged in the Cancer Gene Census [6,7]. These genes predominantly play critical roles in signal transduction, cell cycle regulation, apoptosis, angiogenesis, and cellular infiltration [8]. Targeting ferroptosis in cancer stems from its unique iron-dependent, lipid peroxidation-driven cell death mechanism, offering an alternative pathway to overcome resistance to apoptosis, a common hallmark of cancer. Many tumors exhibit dysregulated iron metabolism or altered lipid composition, rendering them potentially susceptible to ferroptosis induction [9].
              </span>
            </p>
            <p>
              <span className={`transition-all duration-300`}>
                Furthermore, the ability of ferroptosis to elicit immunogenic cell death (ICD) presents an opportunity to synergize with immunotherapy, enhancing anti-tumor immune responses. This distinct mechanism, therefore, offers a promising avenue for novel cancer therapies. In addition, understanding the genetic and molecular underpinnings of cancer is essential for developing targeted therapies and improving patient outcomes. Ongoing research continues to uncover the complexities of cancer biology, aiming to translate these findings into effective clinical interventions.
              </span>
            </p>
          </div>
        </div>

        {/* Section 1.1 Tumors */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-xl font-bold text-gray-900 mb-4">1.1. Tumors</h2>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              A tumor arises from the rapid division of cells, resulting in abnormal tissue masses or lumps [10]. Tumors can vary significantly in size, from small nodules to large masses, and can develop in virtually any part of the body.
            </p>
            <p className="font-semibold">Types of Tumors</p>
            <p>Tumors are classified into three main categories:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Benign Tumors: These tumors are non-cancerous and do not exhibit malignant behavior. They typically grow slowly, if at all, and rarely recur after surgical removal. Common examples include hemangiomas and fibroids [11].</li>
              <li>Premalignant Tumors: These lesions, such as cervical dysplasia and actinic keratosis, contain cells that have not yet become cancerous but possess the potential to progress to malignancy [11].</li>
              <li>Malignant Tumors: Malignant tumors are cancerous and characterized by uncontrolled cell proliferation and the ability to metastasize to different body regions [11]. Examples include various forms of cancer, germ cell tumors, and blastomas.</li>
            </ol>
          </div>
        </div>

        {/* Section 1.2 Types of cancer */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-xl font-bold text-gray-900 mb-4">1.2. Types of cancer</h2>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>Cancer manifests in various forms, each with distinct characteristics and implications for treatment:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Breast Cancer: This is one of the most prevalent cancers globally, primarily affecting women, though it can also occur in men [12].</li>
              <li>Prostate Cancer: Originating in the prostate gland, this cancer is common among men and varies in aggressiveness [13].</li>
              <li>Basal Cell Carcinoma: The most common form of skin cancer, it arises from basal cells in the epidermis. Early detection typically leads to successful treatment [14].</li>
              <li>Melanoma: This cancer originates in melanocytes, the pigment-producing cells of the skin [15].</li>
              <li>Colon Cancer: Also known as colorectal cancer, it begins in the large intestine and often starts as a polyp that may develop into cancer over time [16].</li>
              <li>Lung Cancer: Characterized by uncontrolled growth of abnormal lung cells, lung cancer can metastasize and is categorized into small cell lung cancer (SCLC) and non-small cell lung cancer (NSCLC) [17].</li>
              <li>Leukemia: This cancer involves the proliferation of abnormal white blood cells, impairing the body’s ability to produce healthy blood cells [18].</li>
              <li>Lymphoma: Affecting the lymphatic system, lymphoma originates in lymphocytes and can spread to other organs. It is classified into Hodgkin lymphoma (HL) and non-Hodgkin lymphoma (NHL) [19].</li>
            </ul>
          </div>
        </div>

        {/* Section 1.3 Causes of cancer */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-xl font-bold text-gray-900 mb-4">1.3. Causes of cancer</h2>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>The primary cause of cancer is mutations in a cell’s DNA, which can disrupt normal cellular functions and lead to uncontrolled growth [20]. These mutations can occur due to various factors, including age, environmental influences, and lifestyle choices.</p>
            <p className="font-semibold">Biological factors</p>
            <p>Certain biological factors, such as age, sex, and inherited genetic abnormalities, can predispose individuals to cancer. For instance, blood cancers are more prevalent in older adults due to genetic exchanges between chromosomes [21]. The Philadelphia chromosome (Ph1), a biomarker in chronic myeloid leukemia, exemplifies how specific genetic mutations can aid in diagnosis [22].</p>
            <p className="font-semibold">Environmental factors</p>
            <p>Cancer incidence varies geographically, suggesting that environmental exposures play a significant role in cancer development. Immigrants often develop cancer types prevalent in their new countries, indicating that environmental rather than inherited factors are crucial [23,24]. Notable environmental carcinogens include UV radiation and air pollutants [25].</p>
            <p className="font-semibold">Occupational and risk factors</p>
            <p>Exposure to hazardous materials and chemicals in the workplace can lead to direct or indirect cellular damage, resulting in genetic mutations [26]. Such occupational hazards significantly contribute to the development of various cancers.</p>
            <p className="font-semibold">Lifestyle-related factors</p>
            <p>Lifestyle choices significantly impact cancer risk. For example, smoking introduces numerous carcinogenic compounds that are strongly linked to lung cancer [27]. Other lifestyle factors, such as diet, physical activity, and alcohol consumption, also influence cancer risk.</p>
          </div>
        </div>

        {/* Section 2 Hallmark of cancer */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Hallmark of cancer</h2>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>The division, growth, stopping of development, and death of normal cells are all regulated by processes. These normal cells don’t divide unless instructed to do so by neighboring cells [28]. Every tissue maintains its appropriate size and shape in compliance with the body’s needs thanks to this ongoing cooperation [29]. On the other hand, cancer cells oppose this strategy; they ignore the typical growth-control signals and instead follow their own internal reproductive agenda [4].</p>
            <p>They also possess a far more cunning characteristic: they could disperse from their original location, intruding on nearby tissues and building up into masses in other areas of the body. The deviation from this natural defense mechanisms which is very common in most Cancers leads to the development of Tumor.</p>
          </div>
        </div>

        {/* Section 2.1 Mechanisms of applying targeted therapy */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2.1. Mechanisms of applying targeted therapy</h2>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>Immune evasion: Both positive and negative effects on the immune system can result from tumors. Tumor cells rapidly undergo mutations that allow them to proliferate without these antigens and evade detection, but antibodies are formed when the immune system initially identifies tumor antigens [30].</p>
            <p>Stress response: Hypoxia, or low oxygen and nutrition, stresses tumor cells and increases DNA damage. The body’s defensive reaction to stress stabilizes the tumor cell and encourages the tumor’s growth [31].</p>
            <p>Stromal subversion: Entire bodily tissue is supported and connected by the stroma, an organ that serves both protective and connective functions. The extracellular matrix, which is made up of stromal cells, contains all other cells. Tumor cell signals induce stromal cell mutations via promoting angiogenesis and tumor cell motility, which permit invasion and metastasis [32].</p>
            <p>Cytokine factors: In the context of a tumor, immune cells release cytokines, which are proteins that indicate inflammation. As a result of the inflammation that follows, immune cells release substances that encourage angiogenesis, which in turn promotes tumor growth [33].</p>
          </div>
        </div>

        {/* Section 2.2 Unprogrammed cell death */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2.2. Unprogrammed cell death</h2>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>Unprogrammed cell death, also called accidental cell death or necrosis, happens when cells die without following the controlled procedures of programmed cell death, such as autophagy or apoptosis, instead of dying because of external stimuli or significant damage [34]. Among them are ferroptosis, necroptotic, and necrosis (Table 1).</p>
            <p><span className="font-semibold">Necrosis:</span> Necrosis happens when a cell has already experienced significant damage from outside causes like trauma or infection [35]. Light or electron microscopy can be used to identify cell and organelle enlargement or rupture of surface membranes with leakage of intracellular contents, which contributes to the characterization of necrosis (derived from the Greek word "nekros," which means "death") [36]. The Greek term "oncosis" (which means "swelling") is sometimes used by researchers, however "oncotic necrosis" has also been mentioned. When organellar membranes are damaged, enzymes that degrade proteins can break out from lysosomes, enter the cytoplasm, and eventually kill cells [4]. Rapid ATP depletion coupled with metabolic failure results in necrosis, which is most frequently observed in ischemia [34]. Necrosis is characterized by cell swelling along with an uncontrollably large cell membrane rupture that causes the contents of the cell to be expelled [35].</p>
            <p><span className="font-semibold">Necroptosis:</span> It is a mediated type of inflammatory cell death [37]. Necrosis is historically associated with unprogrammed cell death brought on by pathogen invasion or damage to the cell itself, as opposed to planned programmed cell death brought on by apoptosis [35]. The discovery of necroptosis demonstrated that necrosis is programmable in cells and that there are other ways for cells to die besides apoptosis [38]. Moreover, necroptosis’ immunogenic properties make it a good option for a number of purposes, such as boosting the immune system’s response to pathogens. Necroptosis is a documented defense mechanism that causes the cell to commit "cellular suicide" in a caspase-independent way when viral caspase inhibitors are present [39]. Necroptosis is only induced by TNF therapy in the presence of a pan-caspase inhibitor, such as VAD fluoroethyl ketone [40]. It takes a blocked or compromised Caspase for necroptosis to happen. Exposure to each death pathway is regulated (sometimes in opposite ways) by an interacting cluster of regulatory molecules, including FLIP, A20, and cylindromatosis deubiquitinases, as well as the cellular regulators of apoptosis proteins, cIAP1 and cIAP2 [41]</p>
          </div>
        </div>

        {/* Section 3 Ferroptosis */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">3. Ferroptosis</h1>
        </div>

        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>Dixon and colleagues coined the term ferroptosis to explain the non-apoptotic, iron-dependent mechanism of cell death characterized by intracellular lipid ROS accumulation after Dolma discovered in 2003 that their test compound "Erastin" induced cell death in cancer cells that was distinct from all other forms of cell death [42]. For both plants and animals, iron is a vital micronutrient because it is involved in several metabolic activities, including respiration, photosynthesis, and DNA synthesis. On the other hand, an excess of iron can be harmful to the body through a few ways, including cell death [43].</p>
            <p>Uncontrolled lipid peroxidation and the ensuing membrane damage are the causes of ferroptosis, an iron-dependent mechanism of cell death [44]. It is morphologically defined by the presence of smaller-than-normal mitochondria with condensed mitochondrial membrane densities, as well as by the rupture of the outer mitochondrial membrane and the reduction or lack of mitochondrial crista [44]. In certain normal cells as well as malignant cells, it can be induced by novel chemicals or medications (such as artesunate, sorafenib, and sulfasalazine). Renal tubule cells, neurons, fibroblasts, and T cells are a few examples [45]. In terms of anatomy and biochemistry, ferroptosis is an oxidative iron-dependent mechanism that is distinct from necrosis, autophagy, and apoptosis [46].</p>
            <p>Ferroptosis may result from internal or external causes. While inhibiting intracellular antioxidant enzyme expression or activity like glutathione peroxidase 4 (GPX4) primarily activates the intrinsic pathway, blocking the expression or activity of these same intracellular antioxidant enzymes primarily stimulates the extrinsic pathway [47]. Ferroptotic cell death can result from a variety of stressors, including radiation, hypoxia, low temperature, and high temperature, in addition to small chemicals and medications. Numerous clinical disorders, such as acute tissue injury, infection, cancer, and neurodegeneration, have been connected to this process. It has to do with mis regulated protein breakdown mechanisms like autophagy and the ubiquitin-proteasome system [48].</p>
          </div>
        </div>

        {/* Section 3.1 Hallmarks of ferroptosis */}
        <div className="relative group mt-12">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h2 className="text-xl font-bold text-gray-900 mb-4">3.1. Hallmarks of ferroptosis</h2>
        </div>

        {/* Section 3.1.1 Morphological features */}
        <div className="relative group mt-8">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">3.1.1. Morphological features</h3>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>In terms of morphology, biochemistry, and genetics, ferroptosis is distinct from apoptosis, necrosis, and autophagy, according to a preliminary study. Many researchers agree that cells going through ferroptosis typically exhibit morphological alterations resembling necrosis [45]. These characteristics include mild chromatin condensation, cytoplasmic swelling (oncosis), loss of plasma membrane integrity, and enlargement of cytoplasmic organelles. Ferroptosis can occasionally be accompanied by increased autophagosomes, as well as the detachment and rounding up of cells. Notably, ferroptosis that starts in one cell has the ability to rapidly propagate to neighboring cells [48].</p>
            <p>Ferroptotic cells typically show ultrastructural anomalies related to mitochondria, including swelling or condensation, increased membrane density, absent or diminished crista, and outer membrane rupture [45]. The part played by these organelles in ferroptosis is still up for debate, despite these notable modifications in mitochondrial morphology. In most mammalian cells, mitochondria serve as both the hub of metabolism and a significant generator of reactive oxygen species (ROS) [49]. More recent research indicates that lipid peroxidation and ferroptosis induction are dependent on mitochondria-mediated ROS production, DNA damage, and metabolic reprogramming, in contrast to an earlier study that showed the induction of ferroptosis does not require mitochondria-mediated ROS generation [49].</p>
          </div>
        </div>

        {/* Section 3.1.2 Biochemical features */}
        <div className="relative group mt-8">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">3.1.2. Biochemical features</h3>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>Iron buildup and lipid peroxidation are the two primary biochemical features linked to ferroptosis, a ROS-dependent kind of cell death [50].</p>
            <p><span className="font-semibold">Iron accumulation:</span> Erasin and RSL3, two traditional ferroptosis activators, enhance intracellular iron buildup while suppressing the antioxidant system [51]. Oxidative damage can be made worse by iron directly producing too many ROS through the Fenton reaction [52]. Moreover, iron may increase the activity of lipoxygenase (ALOX) and EGLN prolyl hydroxylases (often referred to as PHD), the enzymes that maintain oxygen homeostasis and cause lipid peroxidation [48]. Ferroptosis sensitivity is influenced by the interplay between cellular iron regulatory processes at the local and systemic levels. Effective inhibition of ferroptotic cell death can be achieved by targeting genes linked to iron overload or by employing iron-chelating medications (explained subsequently) [48]. The reason why iron is the only metal that may cause ferroptosis is unknown; other metals, like zinc, can also cause a Fenton reaction that produces ROS. According to one idea, iron overload causes specific downstream effectors that aid in ferroptosis to occur once lipid ROS are generated [48].</p>
            <p><span className="font-semibold">Lipid peroxidation:</span> Lipid peroxidation, mostly affecting the cell membrane’s unsaturated fatty acid content, is a free radical-induced process [53]. Lipid peroxidation produces byproducts called initially lipid hydroperoxides (LOOHs) and later reactive aldehydes, like malondialdehyde (MDA) and <span id="target-entity-4hne" className={getEntityClass('4hne')}>4-hydroxynonenal (4HNE)</span>, which rise during ferroptosis [53]. The three distinct forms of fatty acids are saturated fatty acids (no double bond), polyunsaturated fatty acids (PUFAs, &gt;1 double bond), and monounsaturated fatty acids (MUFAs, 1 double bond) [54]. Ferroptosis appears to be primarily dependent on the peroxidation of polyunsaturated fatty acids (PUFAs) in phospholipids by ALOXs, despite the possibility of oxidation of other cell membrane lipids such as cardiolipin, phosphatidylcholine, and phosphatidylethanolamine (PE) [55]. Cardiolipin peroxidation is absent from ferroptosis, even though mitochondria experience significant alterations during this process [48].</p>
          </div>
        </div>

        {/* Section 3.1.3 Genetic features */}
        <div className="relative group mt-8">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">3.1.3. Genetic features</h3>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>One potential biomarker for ferroptosis is the overexpression of specific genes or proteins, such as prostaglandin-endoperoxide synthase 2 (PTGS2/COX2), the main enzyme involved in prostaglandin synthesis [48]. However, during ferroptosis, prostaglandins are not utilized by PTGS2 as a lipid peroxidation substrate. The enzyme Acyl-CoA synthetase long-chain family member 4 (ACSL4), which is connected to fatty acid metabolism, is believed to be a specific biomarker and driver of ferroptosis because of its overexpression, which increases the PUFA content of phospholipids, which makes them susceptible to oxidation processes that result in ferroptosis [56]. But ferroptosis may not necessarily require ACSL4, therefore in certain circumstances, cells with lower levels of ACSL4 may go through ferroptosis.</p>
            <p>The activation of genes involved in antioxidant defense (e.g., the glutathione (GSH) system, 8 coenzyme Q10 (CoQ10) system, and nuclear factor, erythroid 2-like 2 (NFE2L2, also known as NRF2) transcription pathway33) and membrane repair (e.g., the endosomal sorting complexes required for transport (ESCRT)-III pathway34) limits ferroptosis-induced membrane damage [57]. Thus, cells "decide" whether to survive or perish in response to ferroptotic stimuli by weighing the relative importance of anti-injury and injury responses.</p>
          </div>
        </div>

        {/* Section 3.1.4 Immune features */}
        <div className="relative group mt-8">
          <span className="absolute -left-24 top-1 doc-tag">SECTIONA</span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">3.1.4. Immune features</h3>
        </div>
        <div className="relative group">
          <span className="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>There are two parts to ferroptosis's immunological effects. First, leukocyte subset mortality and subsequent loss of immunological function can result from ferroptosis [48]. For instance, ferroptosis in T cells brought on by lipid peroxidation encourages the growth of parasitic or viral infections. More significantly, and second, ferroptosis controls how the immune system responds to dying cells or their corpses when it affects non-leukocytic cells [58]. By releasing and activating distinct damage-associated molecular pattern (DAMP) signals, various forms of cellular death can trigger distinct immunological and inflammatory reactions [59].</p>
            <p>Ferroptosis, in general, is a kind of inflammatory cell death associated with the production, following tissue injury or tumor therapy, of lipid oxidation products (e.g., <span className={getEntityClass('4hne')}>4HNE</span>, oxPLs, <span id="target-entity-ltb4" className={getEntityClass('ltb4')}>LTB4</span>, <span id="target-entity-ltc4" className={getEntityClass('ltc4')}>LTC4</span>, LTD4, and <span id="target-entity-pge2" className={getEntityClass('pge2')}>PGE2</span>) or DAMPs (e.g., high mobility group box 1 (HMGB1) and DNA) [60]. For example, in aging and chronic disorders, the lipid peroxidation product <span className={getEntityClass('4hne')}>4HNE</span> is a pro-inflammatory mediator that activates the nuclear factor-κB (NF-κB) pathway. Ferroptotic cells secrete HMGB1, a classic DAMP linked to several types of cell death. Then, by means of the advanced glycosylation end-product-specific receptor (AGER/RAGE), a pattern-recognition receptor, this DAMP triggers the NF-κB pathway in innate immunity, leading to the inflammation of peripheral macrophages [61]. It might be advantageous to treat inflammatory illnesses by concentrating on DAMP signaling linked to lipid metabolism.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DocumentEditor;