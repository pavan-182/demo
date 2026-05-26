<!-- Chemical Entity Review - Initial State (Detailed) -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, init

al-scale=1.0" name="viewport"/>
<title>Edit Central - Scientific Document Editor</title>
<!-- BEGIN: Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- END: Tailwind CSS CDN -->
<style data-purpose="custom-typography">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f9fafb;
    }
    .font-serif-body {
      font-family: 'Merriweather', serif;
    }
  </style>
<style data-purpose="ui-components">
    /* Custom scrollbar for doc area */
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 10px;
    }
    /* Label styling for document tags */
    .doc-tag {
      font-size: 10px;
      padding: 2px 4px;
      border-radius: 2px;
      background-color: #e0e7ff;
      color: #4338ca;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    /* Active blue for branding and primary buttons */
    .brand-blue { color: #254edb; }
    .bg-brand-blue { background-color: #254edb; }
    .border-brand-blue { border-color: #254edb; }
  </style>
</head>
<body class="h-screen flex flex-col overflow-hidden">
<!-- BEGIN: Top Branding Bar -->
<header class="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0" data-purpose="MainHeader">
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<div class="w-6 h-6 bg-brand-blue rounded flex items-center justify-center">
<svg class="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.14-2.8 8.02-6 9.06-3.2-1.04-6-4.92-6-9.06V6.43l6-2.25z"></path></svg>
</div>
<div class="flex flex-col leading-none">
<span class="font-bold text-sm tracking-tight">EDIT <span class="text-gray-500">CENTRAL</span></span>
<span class="text-[10px] bg-blue-100 text-blue-700 px-1 rounded self-start font-bold">BETA</span>
</div>
</div>
<div class="flex items-center gap-4 text-sm text-gray-500">
<div class="flex items-center gap-1.5">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span>JID/AID</span>
</div>
<div class="flex items-center gap-1.5">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span>Saved</span>
</div>
<div class="flex items-center gap-1.5 text-gray-400">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span>Validated</span>
</div>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4 text-gray-500">
<button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
<button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
<button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
</div>
<div class="flex items-center gap-2">
<button class="flex items-center gap-1.5 px-3 py-1.5 text-brand-blue font-medium border border-transparent hover:bg-blue-50 rounded">
<svg class="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
          Pause
        </button>
<button class="px-6 py-1.5 bg-brand-blue text-white font-medium rounded hover:bg-blue-700">Submit</button>
</div>
</div>
</header>
<!-- END: Top Branding Bar -->
<!-- BEGIN: Rich Text Toolbar -->
<div class="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 shrink-0" data-purpose="EditorToolbar">
<select class="text-xs border-gray-300 rounded focus:ring-blue-500 w-44">
<option>Select Para-Style</option>
</select>
<div class="h-6 w-[1px] bg-gray-200 mx-1"></div>
<button class="p-1 hover:bg-gray-100 rounded text-gray-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l5 5m-5-5l5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
<button class="p-1 hover:bg-gray-100 rounded text-gray-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 10h-10a8 8 0 00-8 8v2m18-10l-5 5m5-5l-5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
<div class="h-6 w-[1px] bg-gray-200 mx-1"></div>
<button class="px-2 py-1 font-bold text-gray-700 hover:bg-gray-100 rounded">B</button>
<button class="px-2 py-1 italic text-gray-700 hover:bg-gray-100 rounded font-serif">I</button>
<button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center">X<span class="text-[10px] align-super">2</span></button>
<button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center">X<span class="text-[10px] align-sub">2</span></button>
<button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1 text-sm">Aa <svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button>
<div class="h-6 w-[1px] bg-gray-200 mx-1"></div>
<button class="p-1 hover:bg-gray-100 rounded text-gray-700">π</button>
<button class="p-1 hover:bg-gray-100 rounded text-gray-700">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</button>
<button class="p-1 hover:bg-gray-100 rounded text-gray-700">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</button>
<div class="h-6 w-[1px] bg-gray-200 mx-1"></div>
<div class="flex items-center gap-1 text-gray-600 text-xs px-2">
<span>100%</span>
<svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</div>
<button class="p-1 hover:bg-gray-100 rounded text-gray-700 ml-auto">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</button>
</div>
<!-- END: Rich Text Toolbar -->
<main class="flex-1 flex overflow-hidden">
<!-- BEGIN: Left Document Panel -->
<section class="flex-1 overflow-y-auto bg-white relative custom-scrollbar p-12" data-purpose="DocumentEditor">
<!-- Side navigation arrow -->
<button class="absolute left-4 top-4 p-2 border rounded hover:bg-gray-50 text-gray-400">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</button>
<div class="max-w-3xl mx-auto space-y-8">
<!-- Abstract Section -->
<div class="relative group">
<span class="absolute -left-24 top-1 doc-tag">ABSTRACTP...</span>
<p class="text-gray-700 leading-relaxed">
            synthesis loop has better economy and safety, which promotes the popularization of distributed NH3 production technology.
          </p>
<p class="text-gray-700 leading-relaxed mt-4">
            Green ZnCl2 production under mild conditions is facilitated by integrating current-assisted reaction unit and separation unit based on IL absorption.
          </p>
</div>
<!-- Keywords Section -->
<div class="relative group">
<span class="absolute -left-24 top-1 doc-tag">KEYWORDS...</span>
<p class="text-gray-700 leading-relaxed">
            Renewable energy, mild conditions, ammonia production, N2O, reaction-absorption, techno-economic
          </p>
</div>
<!-- Heading Tags -->
<div class="relative">
<span class="absolute -left-24 top-1 doc-tag">XPARA</span>
<h2 class="text-2xl font-normal text-gray-800">Abstract</h2>
</div>
<div class="relative">
<span class="absolute -left-24 top-1 doc-tag">XPARA</span>
<h2 class="text-2xl font-normal text-gray-800">Keywords</h2>
</div>
<!-- Introduction Section -->
<div class="relative group">
<span class="absolute -left-24 top-1 doc-tag">SECTIONA</span>
<h1 class="text-3xl font-normal text-gray-900 mb-6">Introduction</h1>
<div class="relative">
<span class="absolute -left-24 top-1 doc-tag">PARAGRAPH</span>
<div class="text-gray-700 leading-relaxed space-y-4">
<p>
                Ammonia (NH3) is a versatile commodity chemical that can be used in fertilizer production, hydrogen storage, refrigeration and other fields 
                <a class="text-brand-blue underline" href="#">1-3</a>. Most of the world’s NH4-N is synthesized by Haber-Bosch (HB) process at high temperatures (623-793 K) and pressures (150-300 bar) 
                <a class="text-brand-blue underline" href="#">4-7</a>. The total energy consumption of NH3 production process based on steam methane reforming (SMR) can reach 7.78-9.06 kWh kgNH3-1, which consumes a large amount of fossil energy and causes huge carbon emissions 
                <a class="text-brand-blue underline" href="#">4,8-10</a>. In order to make full use of renewable energy such as wind, biomass and solar energy, small-scale and distributed NH3 production has been extensively studied.
              </p>
<p>
<a class="text-brand-blue underline" href="#">11-13</a> However, distributed NH3 production needs to be carried out under . In order milder conditions to improve its economy and safety 
                <a class="text-brand-blue underline" href="#">4</a>.
              </p>
</div>
</div>
</div>
</div>
</section>
<!-- END: Left Document Panel -->
<!-- BEGIN: Sidebar Review Panel -->
<aside class="w-[420px] bg-white border-l border-gray-200 flex flex-col overflow-hidden" data-purpose="ReviewSidebar">
<!-- Sidebar Progress & Title -->
<div class="p-6 pb-2">
<div class="flex items-center justify-between mb-1">
<button class="flex items-center text-xs font-bold text-gray-500 uppercase gap-1">
            STEP 8 OF 10 
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</button>
</div>
<div class="flex items-center gap-2 mb-4">
<h2 class="text-xl font-semibold text-gray-900">Review Chemical Entities</h2>
<svg class="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</div>
<!-- Progress Bar -->
<div class="w-full bg-gray-100 h-1 rounded-full mb-6">
<div class="bg-brand-blue h-1 rounded-full" style="width: 80%"></div>
</div>
</div>
<!-- Alert Banner -->
<div class="mx-6 p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-3 relative mb-6">
<svg class="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
<p class="text-xs text-brand-blue font-medium pr-4 leading-normal">
          Confirm the correctness of the entity type tagged to each entity name.
        </p>
<button class="absolute top-2 right-2 text-brand-blue opacity-60 hover:opacity-100">
<svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</button>
</div>
<!-- Accordion: Unacknowledged -->
<div class="flex-1 overflow-y-auto px-6 space-y-4">
<div class="flex items-center justify-between border-b border-gray-100 pb-2">
<span class="font-bold text-sm text-gray-800">Unacknowledged (3)</span>
<div class="flex items-center gap-4 text-gray-400">
<svg class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<svg class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</div>
</div>
<!-- Alert Cards -->
<div class="space-y-3">
<!-- Card 1 -->
<div class="p-4 bg-white border border-gray-100 shadow-sm rounded-lg flex items-start gap-3 hover:border-orange-200 transition-colors">
<div class="bg-orange-500 p-1 rounded-sm shrink-0 mt-1">
<svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<p class="text-sm text-gray-600 leading-snug">
              We've tagged 'ZnCl2' with entity type ‘chemical’. Please c...
            </p>
</div>
<!-- Card 2 -->
<div class="p-4 bg-white border border-gray-100 shadow-sm rounded-lg flex items-start gap-3 hover:border-orange-200 transition-colors">
<div class="bg-orange-500 p-1 rounded-sm shrink-0 mt-1">
<svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<p class="text-sm text-gray-600 leading-snug">
              We've tagged 'N2O' with entity type ‘org_compound’. Plea...
            </p>
</div>
<!-- Card 3 -->
<div class="p-4 bg-white border border-gray-100 shadow-sm rounded-lg flex items-start gap-3 hover:border-orange-200 transition-colors">
<div class="bg-orange-500 p-1 rounded-sm shrink-0 mt-1">
<svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<p class="text-sm text-gray-600 leading-snug">
              We've tagged 'NH4-N' with entity type ‘ion’. Please check.
            </p>
</div>
</div>
<!-- Accordion: Acknowledged -->
<div class="pt-6">
<div class="flex items-center justify-between border-b border-gray-100 pb-2 mb-4">
<span class="font-bold text-sm text-gray-800">Acknowledged (0)</span>
<svg class="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</div>
</div>
</div>
</aside>
<!-- END: Sidebar Review Panel -->
</main>
</body></html>

<!-- Chemical Entity Review - Action State (Unified Design) -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Edit Central - Chemical Entity Review</title>
<!-- Load Tailwind CSS v3 with plugins -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Load Work Sans Font from Design System -->
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "on-error-container": "#93000a",
            "background": "#f8f9ff",
            "surface-container-high": "#dce9ff",
            "tertiary-fixed-dim": "#ffb690",
            "surface-variant": "#d3e4fe",
            "outline-variant": "#c4c5d7",
            "on-secondary-fixed": "#171c25",
            "error-container": "#ffdad6",
            "surface-container": "#e5eeff",
            "on-background": "#0b1c30",
            "primary-fixed": "#dde1ff",
            "on-primary-container": "#ced4ff",
            "inverse-primary": "#b8c4ff",
            "surface-container-highest": "#d3e4fe",
            "surface-dim": "#cbdbf5",
            "on-tertiary-fixed": "#341100",
            "inverse-on-surface": "#eaf1ff",
            "tertiary-fixed": "#ffdbca",
            "primary-container": "#254edb",
            "error": "#ba1a1a",
            "secondary-container": "#dee2ef",
            "on-primary": "#ffffff",
            "secondary-fixed": "#dee2ef",
            "on-tertiary": "#ffffff",
            "on-secondary": "#ffffff",
            "outline": "#747686",
            "inverse-surface": "#213145",
            "surface-tint": "#274fdc",
            "surface-container-low": "#eff4ff",
            "primary-fixed-dim": "#b8c4ff",
            "on-secondary-container": "#60646f",
            "on-error": "#ffffff",
            "tertiary-container": "#9b4200",
            "secondary": "#5a5e69",
            "surface-container-lowest": "#ffffff",
            "on-surface": "#0b1c30",
            "on-secondary-fixed-variant": "#424751",
            "on-primary-fixed-variant": "#0036bc",
            "secondary-fixed-dim": "#c2c6d3",
            "tertiary": "#763000",
            "on-tertiary-fixed-variant": "#783200",
            "on-tertiary-container": "#ffcbb2",
            "on-primary-fixed": "#001355",
            "on-surface-variant": "#444655",
            "surface-bright": "#f8f9ff",
            "surface": "#f8f9ff",
            "primary": "#0035b9"
          },
          "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem",
            "custom": "4px"
          },
          "fontFamily": {
            "sans": ["Work Sans", "sans-serif"],
            "inter": ["Inter", "sans-serif"]
          }
        }
      }
    }
  </script>
<style>
    body { font-family: 'Work Sans', sans-serif; }
    .doc-tag {
      font-size: 9px;
      font-weight: 700;
      color: #254edb;
      background-color: #e0e7ff;
      padding: 2px 4px;
      border-radius: 2px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .zncl2-highlight {
      border: 1px dashed #ef4444;
      padding: 1px 3px;
      border-radius: 2px;
      font-weight: 600;
      color: #1f2937;
    }
    .connector-line {
      position: absolute;
      height: 1px;
      background-color: #fca5a5;
      pointer-events: none;
      z-index: 50;
    }
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  </style>
</head>
<body class="h-screen flex flex-col overflow-hidden bg-white text-on-surface">
<!-- Header (Requirement 1 - Match SCREEN_8) -->
<header class="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0" data-purpose="MainHeader"><div class="flex items-center gap-6"><div class="flex items-center gap-2"><div class="w-6 h-6 bg-brand-blue rounded flex items-center justify-center"><svg class="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.14-2.8 8.02-6 9.06-3.2-1.04-6-4.92-6-9.06V6.43l6-2.25z"></path></svg></div><div class="flex flex-col leading-none"><span class="font-bold text-sm tracking-tight">EDIT <span class="text-gray-500">CENTRAL</span></span><span class="text-[10px] bg-blue-100 text-blue-700 px-1 rounded self-start font-bold">BETA</span></div></div><div class="flex items-center gap-4 text-sm text-gray-500"><div class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><span>JID/AID</span></div><div class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><span>Saved</span></div><div class="flex items-center gap-1.5 text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><span>Validated</span></div></div></div><div class="flex items-center gap-6"><div class="flex items-center gap-4 text-gray-500"><button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button></div><div class="flex items-center gap-2"><button class="flex items-center gap-1.5 px-3 py-1.5 text-brand-blue font-medium border border-transparent hover:bg-blue-50 rounded"><svg class="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>Pause</button><button class="px-6 py-1.5 bg-brand-blue text-white font-medium rounded hover:bg-blue-700">Submit</button></div></div></header>
<!-- Toolbar (Requirement 2 - Match SCREEN_8) -->
<div class="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 shrink-0" data-purpose="EditorToolbar"><select class="text-xs border-gray-300 rounded focus:ring-blue-500 w-44"><option>Select Para-Style</option></select><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><button class="p-1 hover:bg-gray-100 rounded text-gray-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l5 5m-5-5l5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="p-1 hover:bg-gray-100 rounded text-gray-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 10h-10a8 8 0 00-8 8v2m18-10l-5 5m5-5l-5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><button class="px-2 py-1 font-bold text-gray-700 hover:bg-gray-100 rounded">B</button><button class="px-2 py-1 italic text-gray-700 hover:bg-gray-100 rounded font-serif">I</button><button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center">X<span class="text-[10px] align-super">2</span></button><button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center">X<span class="text-[10px] align-sub">2</span></button><button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1 text-sm">Aa <svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><button class="p-1 hover:bg-gray-100 rounded text-gray-700">π</button><button class="p-1 hover:bg-gray-100 rounded text-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="p-1 hover:bg-gray-100 rounded text-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><div class="flex items-center gap-1 text-gray-600 text-xs px-2"><span>100%</span><svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div><button class="p-1 hover:bg-gray-100 rounded text-gray-700 ml-auto"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button></div>
<main class="flex flex-1 overflow-hidden relative">
<!-- Document Panel (Requirement 3 & 4) -->
<section class="flex-1 overflow-y-auto bg-white relative custom-scrollbar p-12" data-purpose="document-editor">
<!-- Floating Navigation Arrow -->
<button class="absolute left-3 top-4 w-7 h-7 flex items-center justify-center border border-gray-200 rounded-custom bg-white text-gray-400 hover:bg-gray-50">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
</button>
<div class="max-w-3xl mx-auto space-y-8"><div class="relative group"><span class="absolute -left-24 top-1 doc-tag">ABSTRACTP...</span><p class="text-gray-700 leading-relaxed">synthesis loop has better economy and safety, which promotes the popularization of distributed NH3 production technology.</p><p class="text-gray-700 leading-relaxed mt-4">Green <span class="zncl2-highlight" id="target-entity">ZnCl2</span> production under mild conditions is facilitated by integrating current-assisted reaction unit and separation unit based on IL absorption.</p></div><div class="relative group"><span class="absolute -left-24 top-1 doc-tag">KEYWORDS...</span><p class="text-gray-700 leading-relaxed">Renewable energy, mild conditions, ammonia production, N2O, reaction-absorption, techno-economic</p></div><div class="relative"><span class="absolute -left-24 top-1 doc-tag">XPARA</span><h2 class="text-2xl font-normal text-gray-800">Abstract</h2></div><div class="relative"><span class="absolute -left-24 top-1 doc-tag">XPARA</span><h2 class="text-2xl font-normal text-gray-800">Keywords</h2></div><div class="relative group"><span class="absolute -left-24 top-1 doc-tag">SECTIONA</span><h1 class="text-3xl font-normal text-gray-900 mb-6">Introduction</h1><div class="relative"><span class="absolute -left-24 top-1 doc-tag">PARAGRAPH</span><div class="text-gray-700 leading-relaxed space-y-4"><p>Ammonia (NH3) is a versatile commodity chemical that can be used in fertilizer production, hydrogen storage, refrigeration and other fields <a class="text-brand-blue underline" href="#">1-3</a>. Most of the world’s NH4-N is synthesized by Haber-Bosch (HB) process at high temperatures (623-793 K) and pressures (150-300 bar) <a class="text-brand-blue underline" href="#">4-7</a>. The total energy consumption of NH3 production process based on steam methane reforming (SMR) can reach 7.78-9.06 kWh kgNH3-1, which consumes a large amount of fossil energy and causes huge carbon emissions <a class="text-brand-blue underline" href="#">4,8-10</a>. In order to make full use of renewable energy such as wind, biomass and solar energy, small-scale and distributed NH3 production has been extensively studied.</p><p><a class="text-brand-blue underline" href="#">11-13</a> However, distributed NH3 production needs to be carried out under . In order milder conditions to improve its economy and safety <a class="text-brand-blue underline" href="#">4</a>.</p></div></div></div></div>
<!-- Connector line (Requirement 7) -->
<div class="connector-line" id="connector"></div>
</section>
<!-- Sidebar (Requirement 5 & 6 - Match SCREEN_11) -->
<aside class="w-[400px] bg-white border-l border-gray-200 flex flex-col sidebar-shadow custom-scrollbar" data-purpose="review-sidebar">
<div class="p-6 pb-2">
<div class="flex items-center justify-between mb-1">
<button class="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest gap-1">
            STEP 8 OF 10 
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</button>
</div>
<div class="flex items-center justify-between mb-4">
<h2 class="text-xl font-bold text-gray-900">Review Chemical Entities</h2>
<div class="flex space-x-2">
<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
</div>
<!-- Blue progress bar -->
<div class="w-full bg-gray-100 h-1 rounded-full mb-6">
<div class="bg-primary h-1 rounded-full" style="width: 80%"></div>
</div>
</div>
<!-- Alert Banner -->
<div class="mx-6 p-3 bg-primary text-white text-[11px] font-medium flex items-start gap-3 relative rounded mb-6">
<svg class="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
<p class="pr-4 leading-normal">Confirm the correctness of the entity type tagged to each entity name.</p>
<button class="absolute top-2 right-2 text-white opacity-70">×</button>
</div>
<div class="flex-1 overflow-y-auto px-6 space-y-4 pb-6">
<!-- Unacknowledged Accordion Section -->
<div>
<div class="flex items-center justify-between text-sm font-bold text-gray-800 mb-3">
<span>Unacknowledged (3)</span>
<div class="flex space-x-2 text-gray-400">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 15l7-7 7 7"></path></svg>
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</div>
</div>
<!-- Card 1: Expanded (Requirement 6) -->
<div class="bg-white rounded border-2 border-primary p-4 shadow-sm mb-3 relative overflow-hidden" id="active-card">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
<div class="flex items-start gap-2 mb-4">
<div class="bg-orange-500 p-0.5 rounded shrink-0 mt-0.5">
<svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<p class="text-xs text-gray-600 leading-normal">
                We've tagged <span class="font-bold text-gray-800">'ZnCl2'</span> with entity type <span class="font-bold text-gray-800">'chemical'</span>. Please check.
              </p>
</div>
<div class="flex items-center justify-end space-x-3">
<button class="text-primary text-[11px] font-bold flex items-center">
                Change to <span class="ml-1 text-[8px]">▼</span>
</button>
<button class="bg-white border border-primary text-primary px-5 py-1.5 rounded text-[11px] font-bold hover:bg-blue-50">
                Accept
              </button>
</div>
</div>
<!-- Card 2: Collapsed -->
<div class="p-4 bg-white border border-gray-100 shadow-sm rounded flex items-start gap-3 mb-3">
<div class="bg-orange-500 p-0.5 rounded shrink-0 mt-0.5">
<svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<p class="text-xs text-gray-500">We've tagged 'N2O' with entity type 'org_compound'. Plea...</p>
</div>
<!-- Card 3: Collapsed -->
<div class="p-4 bg-white border border-gray-100 shadow-sm rounded flex items-start gap-3 mb-3">
<div class="bg-orange-500 p-0.5 rounded shrink-0 mt-0.5">
<svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
</div>
<p class="text-xs text-gray-500">We've tagged 'NH4-N' with entity type 'ion'. Please check.</p>
</div>
</div>
<!-- Acknowledged Section -->
<div class="pt-4 border-t border-gray-100">
<div class="flex items-center justify-between text-sm font-bold text-gray-400">
<span>Acknowledged (0)</span>
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</div>
</div>
</div>
</aside>
</main>
<script>
    window.addEventListener('load', () => {
      const target = document.getElementById('target-entity');
      const card = document.getElementById('active-card');
      const connector = document.getElementById('connector');
      
      if (target && card && connector) {
        const targetRect = target.getBoundingClientRect();
        const sidebar = document.querySelector('aside');
        const sidebarRect = sidebar.getBoundingClientRect();
        
        // Positioning the connector to bridge the gap between highlight and card
        connector.style.top = (targetRect.top + targetRect.height / 2) + 'px';
        connector.style.left = targetRect.right + 'px';
        connector.style.width = (sidebarRect.left - targetRect.right + 20) + 'px';
      }
    });
  </script>
</body></html>

<!-- Chemical Entity Review - Change Entity Type (Consistent) -->
<!DOCTYPE html>

<html lang="en"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><title>Edit Central - Scientific Document Editor</title><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><style data-purpose="custom-typography">@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'); body { font-family: 'Inter', sans-serif; background-color: #f9fafb; } .font-serif-body { font-family: 'Merriweather', serif; }</style><style data-purpose="ui-components">.custom-scrollbar::-webkit-scrollbar { width: 6px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; } .doc-tag { font-size: 10px; padding: 2px 4px; border-radius: 2px; background-color: #e0e7ff; color: #4338ca; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; } .brand-blue { color: #254edb; } .bg-brand-blue { background-color: #254edb; } .border-brand-blue { border-color: #254edb; }</style></head>
<body class="bg-gray-50 text-gray-900">
<!-- BEGIN: MainHeader -->
<header class="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0" data-purpose="MainHeader"><div class="flex items-center gap-6"><div class="flex items-center gap-2"><div class="w-6 h-6 bg-brand-blue rounded flex items-center justify-center"><svg class="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.14-2.8 8.02-6 9.06-3.2-1.04-6-4.92-6-9.06V6.43l6-2.25z"></path></svg></div><div class="flex flex-col leading-none"><span class="font-bold text-sm tracking-tight">EDIT <span class="text-gray-500">CENTRAL</span></span><span class="text-[10px] bg-blue-100 text-blue-700 px-1 rounded self-start font-bold">BETA</span></div></div><div class="flex items-center gap-4 text-sm text-gray-500"><div class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><span>JID/AID</span></div><div class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><span>Saved</span></div><div class="flex items-center gap-1.5 text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><span>Validated</span></div></div></div><div class="flex items-center gap-6"><div class="flex items-center gap-4 text-gray-500"><button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="hover:text-gray-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button></div><div class="flex items-center gap-2"><button class="flex items-center gap-1.5 px-3 py-1.5 text-brand-blue font-medium border border-transparent hover:bg-blue-50 rounded"><svg class="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>Pause</button><button class="px-6 py-1.5 bg-brand-blue text-white font-medium rounded hover:bg-blue-700">Submit</button></div></div></header>
<!-- END: MainHeader -->
<!-- BEGIN: Toolbar -->
<div class="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 shrink-0" data-purpose="EditorToolbar"><select class="text-xs border-gray-300 rounded focus:ring-blue-500 w-44"><option>Select Para-Style</option></select><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><button class="p-1 hover:bg-gray-100 rounded text-gray-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l5 5m-5-5l5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="p-1 hover:bg-gray-100 rounded text-gray-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 10h-10a8 8 0 00-8 8v2m18-10l-5 5m5-5l-5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><button class="px-2 py-1 font-bold text-gray-700 hover:bg-gray-100 rounded">B</button><button class="px-2 py-1 italic text-gray-700 hover:bg-gray-100 rounded font-serif">I</button><button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center">X<span class="text-[10px] align-super">2</span></button><button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center">X<span class="text-[10px] align-sub">2</span></button><button class="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1 text-sm">Aa <svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><button class="p-1 hover:bg-gray-100 rounded text-gray-700">π</button><button class="p-1 hover:bg-gray-100 rounded text-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><button class="p-1 hover:bg-gray-100 rounded text-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="h-6 w-[1px] bg-gray-200 mx-1"></div><div class="flex items-center gap-1 text-gray-600 text-xs px-2"><span>100%</span><svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div><button class="p-1 hover:bg-gray-100 rounded text-gray-700 ml-auto"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button></div>
<!-- END: Toolbar -->
<main class="flex-1 flex overflow-hidden"><section class="flex-1 overflow-y-auto bg-white relative custom-scrollbar p-12" data-purpose="DocumentEditor"><button class="absolute left-4 top-4 p-2 border rounded hover:bg-gray-50 text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button><div class="max-w-3xl mx-auto space-y-8"><div class="relative group"><span class="absolute -left-24 top-1 doc-tag">ABSTRACTP...</span><p class="text-gray-700 leading-relaxed">synthesis loop has better economy and safety, which promotes the popularization of distributed NH3 production technology.</p><p class="text-gray-700 leading-relaxed mt-4">Green <span class="border-b-2 border-orange-400 font-medium" id="target-entity">ZnCl2</span> production under mild conditions is facilitated by integrating current-assisted reaction unit and separation unit based on IL absorption.</p></div><div class="relative group"><span class="absolute -left-24 top-1 doc-tag">KEYWORDS...</span><p class="text-gray-700 leading-relaxed">Renewable energy, mild conditions, ammonia production, N2O, reaction-absorption, techno-economic</p></div><div class="relative"><span class="absolute -left-24 top-1 doc-tag">XPARA</span><h2 class="text-2xl font-normal text-gray-800">Abstract</h2></div><div class="relative"><span class="absolute -left-24 top-1 doc-tag">XPARA</span><h2 class="text-2xl font-normal text-gray-800">Keywords</h2></div><div class="relative group"><span class="absolute -left-24 top-1 doc-tag">SECTIONA</span><h1 class="text-3xl font-normal text-gray-900 mb-6">Introduction</h1><div class="relative"><span class="absolute -left-24 top-1 doc-tag">PARAGRAPH</span><div class="text-gray-700 leading-relaxed space-y-4"><p>Ammonia (NH3) is a versatile commodity chemical that can be used in fertilizer production, hydrogen storage, refrigeration and other fields <a class="text-brand-blue underline" href="#">1-3</a>. Most of the world’s NH4-N is synthesized by Haber-Bosch (HB) process at high temperatures (623-793 K) and pressures (150-300 bar) <a class="text-brand-blue underline" href="#">4-7</a>. The total energy consumption of NH3 production process based on steam methane reforming (SMR) can reach 7.78-9.06 kWh kgNH3-1, which consumes a large amount of fossil energy and causes huge carbon emissions <a class="text-brand-blue underline" href="#">4,8-10</a>. In order to make full use of renewable energy such as wind, biomass and solar energy, small-scale and distributed NH3 production has been extensively studied.</p><p><a class="text-brand-blue underline" href="#">11-13</a> However, distributed NH3 production needs to be carried out under . In order milder conditions to improve its economy and safety <a class="text-brand-blue underline" href="#">4</a>.</p></div></div></div></div></section><aside class="w-[420px] bg-white border-l border-gray-200 flex flex-col overflow-hidden" data-purpose="ReviewSidebar"><div class="p-6 pb-2"><div class="flex items-center justify-between mb-1"><button class="flex items-center text-xs font-bold text-gray-500 uppercase gap-1">STEP 8 OF 10 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button></div><div class="flex items-center gap-2 mb-4"><h2 class="text-xl font-semibold text-gray-900">Review Chemical Entities</h2><svg class="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div><div class="w-full bg-gray-100 h-1 rounded-full mb-6"><div class="bg-brand-blue h-1 rounded-full" style="width: 80%"></div></div></div><div class="mx-6 p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-3 relative mb-6"><svg class="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><p class="text-xs text-brand-blue font-medium pr-4 leading-normal">Confirm the correctness of the entity type tagged to each entity name.</p><button class="absolute top-2 right-2 text-brand-blue opacity-60 hover:opacity-100"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></button></div><div class="flex-1 overflow-y-auto px-6 space-y-4"><div class="flex items-center justify-between border-b border-gray-100 pb-2"><span class="font-bold text-sm text-gray-800">Unacknowledged (3)</span><div class="flex items-center gap-4 text-gray-400"><svg class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg><svg class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div></div><div class="space-y-3"><div class="p-4 bg-white border-2 border-brand-blue shadow-md rounded-lg flex flex-col gap-4"><div class="flex items-start gap-3"><div class="bg-error p-1 rounded-full shrink-0 mt-1"><svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div><p class="text-sm text-gray-700">We've tagged <span class="font-bold">'ZnCl2'</span> with entity type <span class="font-bold">'chemical'</span>. Please check.</p></div><div class="flex justify-end gap-2"><div class="relative"><button class="px-3 py-1.5 bg-blue-50 text-brand-blue text-xs font-bold rounded flex items-center gap-1 hover:bg-blue-100 transition">Change to <svg class="w-3 h-3" fill="currentColor" viewbox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg></button><div class="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 shadow-xl rounded py-1 z-50 text-xs text-gray-600"><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">ion</div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">org_compound</div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">hydrate</div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">complex</div><div class="px-4 py-2 bg-blue-50 text-brand-blue font-bold flex items-center justify-between">chem_group <svg class="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M7 2l12 11.22L11 16l3.5 4.5h-2.5L8.5 16 3 21V2z"></path></svg></div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">unknown</div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">space_group</div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">elec_state</div><div class="px-4 py-2 hover:bg-gray-50 cursor-pointer">chem.bond</div></div></div><button class="px-6 py-1.5 border border-brand-blue text-brand-blue text-xs font-bold rounded hover:bg-blue-50 transition">Accept</button></div></div><div class="p-4 bg-white border border-gray-100 shadow-sm rounded-lg flex items-start gap-3 opacity-60"><div class="bg-orange-500 p-1 rounded-full shrink-0 mt-1"><svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div><p class="text-sm text-gray-600 leading-snug">We've tagged 'N2O' with entity type 'org_compound'. Plea...</p></div><div class="p-4 bg-white border border-gray-100 shadow-sm rounded-lg flex items-start gap-3 opacity-60"><div class="bg-orange-500 p-1 rounded-full shrink-0 mt-1"><svg class="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div><p class="text-sm text-gray-600 leading-snug">We've tagged 'NH4-N' with entity type 'ion'. Please check.</p></div></div><div class="pt-6"><div class="flex items-center justify-between border-b border-gray-100 pb-2 mb-4"><span class="font-bold text-sm text-gray-800">Acknowledged (0)</span><svg class="w-4 h-4 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div></div></div></aside></main>"}]}
</body></html>