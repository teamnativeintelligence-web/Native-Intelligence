// knowledge-base.js — Native Intelligence Indigenous Reference Database
// NO AI USED. All content curated from verified Indigenous-led sources.

const INDIGENOUS_KB = {

  // ── Kept small — just the most critical myths ─────────────────────────────
  myths: [
    {
      id: "myth-001",
      myth: "Indigenous peoples are a single, homogeneous group",
      fact: "There are over 630 First Nations in Canada and 574+ federally recognised tribes in the US. Each nation has distinct languages, governance, ceremonies, and traditions.",
      source: "Assembly of First Nations",
      source_url: "https://www.afn.ca",
      tags: ["diversity", "nations", "culture"]
    },
    {
      id: "myth-002",
      myth: "Residential schools were well-intentioned",
      fact: "Residential schools were instruments of cultural genocide, confirmed by Canada's Truth and Reconciliation Commission. Children were forcibly removed, forbidden their languages, and subjected to widespread abuse.",
      source: "Truth and Reconciliation Commission of Canada",
      source_url: "https://www.rcaanc-cirnac.gc.ca/eng/1450124405592/1529106060525",
      tags: ["residential schools", "TRC", "genocide", "history"]
    },
    {
      id: "myth-003",
      myth: "Indigenous peoples do not pay taxes",
      fact: "Indigenous peoples pay the same taxes as all Canadians in most circumstances. Limited exemptions apply only to status Indians earning income on-reserve — a narrow legal provision, not a blanket exemption.",
      source: "National Congress of American Indians",
      source_url: "https://www.ncai.org/resources/faq",
      tags: ["taxes", "legal"]
    },
    {
      id: "myth-004",
      myth: "The land was empty before Europeans arrived",
      fact: "The Americas were home to tens of millions of people with complex land stewardship. The doctrine of terra nullius is a legal fiction rejected by courts worldwide.",
      source: "UN Declaration on the Rights of Indigenous Peoples",
      source_url: "https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html",
      tags: ["land", "colonialism", "history"]
    },
    {
      id: "myth-005",
      myth: "Indigenous peoples belong only to the past",
      fact: "Indigenous populations are growing. In Canada, the Indigenous population grew 9.4% between 2016–2021. Indigenous peoples are active contemporary contributors to every sector of society.",
      source: "Statistics Canada 2021 Census",
      source_url: "https://www12.statcan.gc.ca/census-recensement/2021/as-sa/98-200-X/2021009/98-200-X2021009-eng.cfm",
      tags: ["population", "contemporary", "erasure"]
    }
  ],

  terminology: [
    { id: "t1", avoid: "Indian", preferred: "First Nations, Indigenous, or the specific Nation name", context: "In Canada, 'Indian' is an outdated colonial legal term. Always defer to individual preference.", source: "First Nations Information Governance Centre", source_url: "https://fnigc.ca" },
    { id: "t2", avoid: "Eskimo", preferred: "Inuit (plural) or Inuk (singular)", context: "'Eskimo' is considered offensive. Inuit are a distinct people with their own language, Inuktitut.", source: "Inuit Tapiriit Kanatami", source_url: "https://www.itk.ca" },
    { id: "t3", avoid: "Half-breed", preferred: "Métis", context: "Métis are a distinct Indigenous people with their own culture and rights — not simply people of mixed ancestry.", source: "Métis National Council", source_url: "https://www.metisnation.ca" },
    { id: "t4", avoid: "Savage / primitive / uncivilised", preferred: "Specific Nation name, or 'Indigenous peoples'", context: "These terms dehumanise Indigenous peoples and reflect colonial ideology.", source: "Canadian Human Rights Commission", source_url: "https://www.chrc-ccdp.gc.ca" },
    { id: "t5", avoid: "Spirit animal (used casually)", preferred: "Avoid using this phrase casually", context: "Spirit animals are sacred in many Indigenous traditions. Using it casually trivialises Indigenous spirituality.", source: "Cultural Survival", source_url: "https://www.culturalsurvival.org" },
    { id: "t6", avoid: "Pow-wow (to mean any meeting)", preferred: "Meeting, gathering, discussion", context: "A pow-wow is a sacred cultural gathering with ceremony and community significance.", source: "Native American Rights Fund", source_url: "https://www.narf.org" },
    { id: "t7", avoid: "Aboriginal (in Canadian context)", preferred: "Indigenous, First Nations, Métis, or Inuit", context: "'Aboriginal' is being phased out in Canada in favour of 'Indigenous', per the UN Declaration.", source: "Crown-Indigenous Relations Canada", source_url: "https://www.rcaanc-cirnac.gc.ca" }
  ],

  organisations: [
    { name: "Assembly of First Nations", desc: "National organisation representing First Nations citizens in Canada.", url: "https://www.afn.ca", region: "Canada" },
    { name: "National Congress of American Indians", desc: "Oldest and largest organisation of American Indian and Alaska Native tribal governments.", url: "https://www.ncai.org", region: "United States" },
    { name: "Inuit Tapiriit Kanatami", desc: "Represents 65,000 Inuit in Canada across four regions.", url: "https://www.itk.ca", region: "Canada" },
    { name: "Métis National Council", desc: "Advocates for Métis Nation rights and recognition across Canada.", url: "https://www.metisnation.ca", region: "Canada" },
    { name: "First Nations University of Canada", desc: "University controlled by First Nations, enriched by Indigenous knowledge.", url: "https://www.fnuniv.ca", region: "Canada" },
    { name: "Yellowhead Institute", desc: "First Nations-led research centre focused on land and sovereignty.", url: "https://yellowheadinstitute.org", region: "Canada" },
    { name: "Cultural Survival", desc: "Partners with Indigenous peoples globally to defend lands, languages, and cultures.", url: "https://www.culturalsurvival.org", region: "Global" },
    { name: "Native American Rights Fund", desc: "Non-profit legal organisation for tribal rights and sovereignty.", url: "https://www.narf.org", region: "United States" },
    { name: "First Peoples' Cultural Council", desc: "Supports First Nations language and culture revitalisation in BC.", url: "https://fpcc.ca", region: "Canada — BC" },
    { name: "Native Women's Association of Canada", desc: "Represents the political, social, and cultural interests of Indigenous women.", url: "https://www.nwac.ca", region: "Canada" },
    { name: "First Nations Information Governance Centre", desc: "Supports First Nations data sovereignty and research governance.", url: "https://fnigc.ca", region: "Canada" },
    { name: "UN Permanent Forum on Indigenous Issues", desc: "Advisory body to the UN with a mandate to discuss Indigenous issues globally.", url: "https://www.un.org/development/desa/indigenouspeoples/", region: "Global" }
  ],

  acknowledgements: [
    { region: "Vancouver / Coast Salish", nations: ["Musqueam", "Squamish", "Tsleil-Waututh"], example: "We acknowledge that we are gathered on the unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.", notes: "Vancouver is on unceded territory — these nations never signed treaties surrendering their land.", url: "https://musqueam.bc.ca" },
    { region: "Toronto, Ontario", nations: ["Mississaugas of the Credit", "Anishinaabe", "Haudenosaunee", "Huron-Wendat"], example: "Toronto is in the Dish With One Spoon Territory, the traditional territory of the Mississaugas of the Credit, the Anishinaabe, the Haudenosaunee, and the Huron-Wendat peoples.", notes: "The Dish With One Spoon Wampum Belt is a treaty to share and care for the territory together.", url: "https://www.toronto.ca/city-government/accessibility-human-rights/indigenous-affairs-office/land-acknowledgement/" },
    { region: "Calgary, Alberta", nations: ["Blackfoot Confederacy", "Stoney Nakoda", "Tsuut'ina"], example: "Calgary is located within the traditional territories of the Blackfoot Confederacy — Siksika, Kainai, and Piikani — as well as the Stoney Nakoda and Tsuut'ina Nations.", notes: "Treaty 7 was signed in 1877. Interpretations of what was agreed differ significantly between the Crown and these nations.", url: "https://www.calgary.ca/communities/indigenous-peoples.html" },
    { region: "Winnipeg, Manitoba", nations: ["Anishinaabe", "Cree", "Oji-Cree", "Métis", "Dakota"], example: "Winnipeg is located in the heart of the homeland of the Métis Nation and on Treaty 1 territory.", notes: "Winnipeg has one of the largest urban Indigenous populations in Canada.", url: "https://www.winnipeg.ca/indigenous" },
    { region: "Find any location", nations: [], example: "Use native-land.ca to find the specific territories for any address or location worldwide.", notes: "A land acknowledgement is most meaningful when accompanied by action, learning, and relationship-building with local Indigenous communities.", url: "https://native-land.ca" }
  ],

  // ── Q&A — the heart of this new version ──────────────────────────────────
  qa: [
    {
      id: "qa-001",
      question: "What is the difference between First Nations, Métis, and Inuit?",
      answer: "These are three distinct Indigenous peoples in Canada, each with their own histories, cultures, and rights.\n\n• First Nations refers to the original inhabitants of Canada south of the Arctic, comprising over 630 distinct nations with their own languages and governance systems.\n\n• Métis are a distinct people who emerged from the unions of First Nations women and European fur traders, primarily in the Red River Settlement. They have their own unique culture, language (Michif), and identity.\n\n• Inuit are the Indigenous peoples of the Arctic regions of Canada, Alaska, Greenland, and Russia. They are distinct from First Nations and have their own language family (Inuktitut).\n\nTogether, these three groups are referred to as 'Indigenous peoples' or 'Aboriginal peoples' under Section 35 of Canada's Constitution Act, 1982.",
      sources: [
        { title: "Government of Canada — Indigenous Peoples", url: "https://www.rcaanc-cirnac.gc.ca/eng/1100100013785/1529102490303" },
        { title: "Métis National Council — Who are the Métis?", url: "https://www.metisnation.ca/about/the-metis-nation" },
        { title: "Inuit Tapiriit Kanatami — About Inuit", url: "https://www.itk.ca/about-canadian-inuit/" }
      ],
      tags: ["identity", "First Nations", "Métis", "Inuit", "basics"]
    },
    {
      id: "qa-002",
      question: "What is the Truth and Reconciliation Commission (TRC)?",
      answer: "The Truth and Reconciliation Commission of Canada (2008–2015) was established to document the history and impacts of the residential school system on Indigenous peoples.\n\nKey findings:\n• Over 150,000 First Nations, Métis, and Inuit children were forced to attend residential schools from the 1870s to 1996.\n• The TRC documented physical, sexual, and emotional abuse, as well as the deaths of at least 3,200 children — likely far more.\n• The TRC concluded that residential schools constituted cultural genocide.\n• The Commission issued 94 Calls to Action for governments, institutions, and Canadians to advance reconciliation.\n\nThe National Day for Truth and Reconciliation (September 30) was established in 2021 in response to the TRC.",
      sources: [
        { title: "TRC Final Report — National Centre for Truth and Reconciliation", url: "https://nctr.ca/records/reports/" },
        { title: "94 Calls to Action", url: "https://nctr.ca/records/reports/#trc-reports" },
        { title: "Government of Canada — Residential Schools", url: "https://www.rcaanc-cirnac.gc.ca/eng/1100100015576/1571581687074" }
      ],
      tags: ["TRC", "residential schools", "reconciliation", "history"]
    },
    {
      id: "qa-003",
      question: "What does 'unceded territory' mean?",
      answer: "Unceded territory refers to land that Indigenous peoples never surrendered, sold, or signed away through treaties with the Crown or colonial governments.\n\nMuch of British Columbia, for example, was never covered by treaties — meaning First Nations never legally gave up sovereignty over their lands. This is distinct from treaty territories, where nations signed agreements (though Indigenous peoples often argue these were misrepresented or violated).\n\nThe concept is central to ongoing land rights cases and reconciliation discussions. Courts, including the Supreme Court of Canada, have increasingly recognised Indigenous title to unceded lands.",
      sources: [
        { title: "Yellowhead Institute — Land Back", url: "https://yellowheadinstitute.org/land-back/" },
        { title: "BC Treaty Commission", url: "https://www.bctreaty.ca/issues-explained" },
        { title: "Supreme Court of Canada — Tsilhqot'in Nation v British Columbia", url: "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/14246/index.do" }
      ],
      tags: ["land", "treaties", "unceded", "sovereignty", "BC"]
    },
    {
      id: "qa-004",
      question: "What is MMIWG?",
      answer: "MMIWG stands for Missing and Murdered Indigenous Women and Girls — and increasingly, 2SLGBTQQIA+ people (MMIWG2S).\n\nThe National Inquiry into MMIWG (2016–2019) found that Indigenous women and girls face disproportionately high rates of violence in Canada. Key findings:\n• Indigenous women are 12 times more likely to be murdered or go missing than non-Indigenous women.\n• The inquiry concluded that this constitutes genocide — a finding that was controversial but supported by extensive evidence.\n• The final report issued 231 Calls for Justice directed at governments, institutions, industry, and Canadians.\n\nThe crisis is linked to colonialism, systemic racism, poverty, and failures in policing and the justice system.",
      sources: [
        { title: "National Inquiry into MMIWG — Final Report", url: "https://www.mmiwg-ffada.ca/final-report/" },
        { title: "Native Women's Association of Canada", url: "https://www.nwac.ca/policy-areas/mmiwg/" },
        { title: "Human Rights Watch — Canada MMIWG", url: "https://www.hrw.org/tag/missing-and-murdered-indigenous-women" }
      ],
      tags: ["MMIWG", "violence", "women", "genocide", "justice"]
    },
    {
      id: "qa-005",
      question: "What are Indigenous treaty rights?",
      answer: "Treaties are legally binding agreements between Indigenous nations and the Crown (British or Canadian government). They are recognised and affirmed under Section 35 of Canada's Constitution Act, 1982.\n\nTreaty rights vary by treaty but often include:\n• Rights to hunt, fish, and trap on traditional lands\n• Rights to land use and resource sharing\n• Rights to education and health services\n\nIndigenous peoples and the Crown often have very different interpretations of what was agreed — Indigenous oral histories frequently describe treaties as nation-to-nation relationships of sharing, not land surrenders.\n\nHistoric treaties (pre-Confederation through Treaty 11) cover much of Canada. Many areas, especially in BC, have no treaties at all.",
      sources: [
        { title: "Crown-Indigenous Relations — Historic Treaties", url: "https://www.rcaanc-cirnac.gc.ca/eng/1100100028574/1529354437231" },
        { title: "Assembly of First Nations — Treaties", url: "https://www.afn.ca/treaty-rights/" },
        { title: "First Nations Studies Program — UBC", url: "https://indigenousfoundations.arts.ubc.ca/treaties_in_bc/" }
      ],
      tags: ["treaties", "rights", "land", "constitution", "legal"]
    },
    {
      id: "qa-006",
      question: "What is the Indian Act and why is it controversial?",
      answer: "The Indian Act (1876) is a Canadian federal law that controls nearly every aspect of life for registered 'Indians' — including land, governance, education, and identity.\n\nWhy it is controversial:\n• It was designed to assimilate Indigenous peoples and eliminate their cultures and governments.\n• It imposed the band council system, replacing traditional governance structures.\n• It controlled who qualified as 'Indian', stripping status from women who married non-Indigenous men (until 1985).\n• It prohibited ceremonies like the potlatch and sun dance until 1951.\n• It controls reserve lands and prevents First Nations from owning land individually.\n\nMany First Nations leaders call for its abolition; others argue for reform. The Act remains in force today.",
      sources: [
        { title: "Government of Canada — Indian Act", url: "https://laws-lois.justice.gc.ca/eng/acts/i-5/" },
        { title: "CBC — What is the Indian Act?", url: "https://www.cbc.ca/news/canada/the-indian-act-explained-1.1279123" },
        { title: "Yellowhead Institute — Indian Act Explainer", url: "https://yellowheadinstitute.org/indian-act/" }
      ],
      tags: ["Indian Act", "law", "colonialism", "governance", "identity"]
    },
    {
      id: "qa-007",
      question: "What is UNDRIP?",
      answer: "UNDRIP is the United Nations Declaration on the Rights of Indigenous Peoples, adopted by the UN General Assembly in 2007.\n\nIt sets minimum standards for the survival, dignity, and well-being of Indigenous peoples worldwide. Key rights include:\n• The right to self-determination\n• The right to free, prior, and informed consent (FPIC) before any project affecting their lands\n• The right to maintain and strengthen their cultural practices\n• The right to their traditional lands, territories, and resources\n\nCanada initially opposed UNDRIP but endorsed it in 2016. In 2021, Canada passed Bill C-15, which requires Canadian laws to align with UNDRIP — a landmark step, though implementation remains contested.",
      sources: [
        { title: "UN — Full text of UNDRIP", url: "https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html" },
        { title: "Government of Canada — UNDRIP Act", url: "https://www.justice.gc.ca/eng/declaration/index.html" },
        { title: "Assembly of First Nations — UNDRIP", url: "https://www.afn.ca/undrip/" }
      ],
      tags: ["UNDRIP", "rights", "UN", "self-determination", "consent", "international"]
    },
    {
      id: "qa-008",
      question: "What is the Sixties Scoop?",
      answer: "The Sixties Scoop refers to the mass removal of Indigenous children from their families by Canadian child welfare authorities, primarily between the 1960s and 1980s.\n\nKey facts:\n• Tens of thousands of Indigenous children were taken and placed with non-Indigenous families in Canada, the US, and Europe.\n• Children lost their languages, cultures, and connections to their communities.\n• The practice is considered a continuation of the assimilationist goals of the residential school system.\n• In 2017, the Canadian government reached a $750 million settlement with Sixties Scoop survivors.\n• The child welfare crisis continues today — Indigenous children are vastly overrepresented in the foster care system.",
      sources: [
        { title: "Sixties Scoop Network", url: "https://sixtiesscoop.net" },
        { title: "National Collaborating Centre for Indigenous Health", url: "https://www.nccih.ca/docs/context/FS-SixtiesScoop-EN.pdf" },
        { title: "CBC — Sixties Scoop settlement", url: "https://www.cbc.ca/news/politics/sixties-scoop-settlement-1.4386462" }
      ],
      tags: ["Sixties Scoop", "child welfare", "history", "colonialism", "family"]
    },
    {
      id: "qa-009",
      question: "What is Land Back?",
      answer: "Land Back is a movement and framework centred on returning land, resources, and decision-making power to Indigenous peoples.\n\nIt does not necessarily mean removing all non-Indigenous people from their homes. Rather, it encompasses:\n• Returning jurisdiction and governance of unceded territories to Indigenous nations\n• Honouring and enforcing treaty rights\n• Restoring Indigenous stewardship of lands and waters\n• Addressing ongoing resource extraction from Indigenous territories without consent\n\nThe movement draws on the principle that many of the social crises facing Indigenous communities — poverty, health disparities, loss of language — are rooted in dispossession from land.",
      sources: [
        { title: "Yellowhead Institute — Land Back Report", url: "https://yellowheadinstitute.org/land-back/" },
        { title: "Landback — Official Movement Site", url: "https://landback.org" },
        { title: "Cultural Survival — Land Rights", url: "https://www.culturalsurvival.org/issues/land-rights" }
      ],
      tags: ["Land Back", "land rights", "sovereignty", "movement", "reconciliation"]
    },
    {
      id: "qa-010",
      question: "How should I write or speak about Indigenous peoples accurately?",
      answer: "General principles for accurate, respectful representation:\n\n1. Be specific — name the nation when possible (e.g. 'Cree Nation' not 'Indigenous people in general').\n2. Use current, preferred terminology — 'First Nations', 'Métis', 'Inuit', or 'Indigenous peoples' in Canada.\n3. Avoid pan-Indigenous generalisations — there is no single Indigenous culture, tradition, or experience.\n4. Centre Indigenous voices — cite Indigenous scholars, organisations, and community members as primary sources.\n5. Avoid the past tense — Indigenous peoples, cultures, and languages are living and present.\n6. Do not describe Indigenous spiritual practices as 'primitive' or treat them as exotic.\n7. Acknowledge the land you are on.\n8. When in doubt, ask — and be open to correction.\n\nFor journalism and research: seek guidance from the Indigenous Journalists Association and Reporting in Indigenous Communities.",
      sources: [
        { title: "Indigenous Journalists Association", url: "https://indigenousjournalists.org" },
        { title: "Reporting in Indigenous Communities — Guide", url: "https://riic.ca" },
        { title: "First Nations Information Governance Centre", url: "https://fnigc.ca" }
      ],
      tags: ["writing", "language", "representation", "journalism", "guide"]
    },
    {
      id: "qa-011",
      question: "What is Two-Spirit identity?",
      answer: "Two-Spirit (2S) is an umbrella term used by some Indigenous peoples to describe a person who fulfils a traditional third-gender or other gender-variant role in their culture.\n\nImportant context:\n• The term was created in 1990 at the Third Annual Inter-tribal Native American/First Nations Gay and Lesbian Conference as an English-language term to distinguish Indigenous concepts of gender from Western LGBTQ+ identities.\n• Two-Spirit is not a pan-Indigenous concept — different nations have their own specific terms and traditions (e.g. Winkte in Lakota, Nadleeh in Diné/Navajo).\n• Two-Spirit people historically held respected, often sacred roles in many Indigenous communities.\n• Colonisation and Christianity suppressed these identities, and reclamation is part of broader cultural revitalisation.\n• Non-Indigenous people should not use the term 'Two-Spirit' to describe themselves.",
      sources: [
        { title: "2-Spirited People of the 1st Nations", url: "https://www.2spirits.com" },
        { title: "National Inquiry MMIWG2S — 2S chapter", url: "https://www.mmiwg-ffada.ca/final-report/" },
        { title: "CBC — Two-Spirit explainer", url: "https://www.cbc.ca/news/canada/british-columbia/two-spirit-identity-reclamation-1.5500009" }
      ],
      tags: ["Two-Spirit", "gender", "identity", "2SLGBTQ", "culture"]
    },
    {
      id: "qa-012",
      question: "What is cultural appropriation vs cultural appreciation in Indigenous contexts?",
      answer: "Cultural appropriation occurs when elements of a marginalised culture are taken by members of a dominant culture without permission, understanding, or credit — often for profit or aesthetics.\n\nExamples of appropriation:\n• Wearing headdresses at festivals (war bonnets are sacred and earned honours)\n• Selling fake 'Native-made' art or crafts\n• Using 'spirit animal' casually\n• Non-Indigenous people performing sacred ceremonies\n\nCultural appreciation involves genuine engagement, learning, and respect:\n• Buying directly from Indigenous artists and artisans\n• Learning about a specific nation's culture with their guidance\n• Supporting Indigenous-led cultural events\n• Citing Indigenous knowledge holders and scholars\n\nThe key question is: does the community consent, and do they benefit?",
      sources: [
        { title: "First Nations University — Cultural Appropriation Guide", url: "https://www.fnuniv.ca" },
        { title: "Cultural Survival — Appropriation", url: "https://www.culturalsurvival.org/issues/cultural-appropriation" },
        { title: "Indigenous Corporate Training", url: "https://www.ictinc.ca/blog/cultural-appropriation-vs-cultural-appreciation" }
      ],
      tags: ["cultural appropriation", "appreciation", "ceremony", "art", "respect"]
    }
  ]
};

// ── Zero-AI keyword checker ───────────────────────────────────────────────────
function checkTextAgainstKB(text) {
  const lower = text.toLowerCase();
  const results = { myths: [], terms: [], qa: [] };

  INDIGENOUS_KB.myths.forEach(m => {
    const tagMatch  = m.tags.some(t => lower.includes(t));
    const wordMatch = m.myth.toLowerCase().split(/\s+/).filter(w => w.length > 5).some(w => lower.includes(w));
    if (tagMatch || wordMatch) results.myths.push(m);
  });

  INDIGENOUS_KB.terminology.forEach(t => {
    if (lower.includes(t.avoid.toLowerCase())) results.terms.push(t);
  });

  INDIGENOUS_KB.qa.forEach(q => {
    const tagMatch = q.tags.some(t => lower.includes(t));
    if (tagMatch) results.qa.push(q);
  });

  return results;
}

window.INDIGENOUS_KB      = INDIGENOUS_KB;
window.checkTextAgainstKB = checkTextAgainstKB;
