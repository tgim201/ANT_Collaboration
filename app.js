/**
 * ANT School Library Collaborative Instruction Platform
 * Combines Bronfenbrenner's Ecological Systems Theory (5 layers)
 * with Latour & Callon's Actor-Network Theory (ANT)
 */

// 1. Default Embedded TTL (from ant_library_collab.ttl)
const DEFAULT_TTL_CONTENT = `@prefix : <http://example.org/ant-library-collab#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://example.org/ant-library-collab> a owl:Ontology ;
    rdfs:label "Actor-Network Theory (ANT) & Ecological System Ontology for School Library Collaborative Instruction" ;
    rdfs:comment "사서교사-교과교사 협력 수업을 둘러싼 인간·비인간 행위자 네트워크 및 생태학적 체계 온톨로지" .

### 1. 미시체계 (Microsystem)
:TeacherLibrarian a :HumanActor ;
    :belongsToSystem :Microsystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "학교도서관과 독서교육 총괄의 주체로 협동과정의 리더이자 정보활용과 탐구학습을 촉진하는 핵심 행위자" ;
    :interactsWith :SubjectTeacher, :SchoolLibrary .

:SubjectTeacher a :HumanActor ;
    :belongsToSystem :Microsystem ;
    :roleType "Mediator" ;
    :description "교과지식을 가지고 있으며 사서교사와 협동하여 교과 성취기준 기반 수업을 공동 설계하는 주체" ;
    :interactsWith :TeacherLibrarian, :SchoolLibrary .

:SchoolLibrary a :NonHumanActor ;
    :belongsToSystem :Microsystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "학교교육정보자료의 중심지로 실물자료와 인적자료(사서교사 등)를 제공해 학생의 학습경험을 돕는 물리적·공간적·정보적 행위자" ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher .

### 2. 중간체계 (Mesosystem)
:GradeLevelCouncil a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :roleType "Intermediary" ;
    :description "같은 학년의 교과교사들과 사서교사가 모여 학년 공통의 수업 일정과 학사 일정을 조율하는 공식 회의체" ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher .

:PLC a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "전문적 학습공동체: 교과교사와 사서교사가 대등한 연구자로서 모여 교육과정 재구성과 융합 수업을 연구하는 교내 자발적 학습 조직" ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher .

:StudentHome a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :roleType "Intermediary" ;
    :description "도서관 자원봉사, 가정 독서 환경 조성, 학교도서관 행사 지원을 매개로 학교와 소통하는 보호자 조직" ;
    :interactsWith :SchoolLibrary .

:LibraryOperationCommittee a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :roleType "Intermediary" ;
    :description "교원, 학부모, 지역사회 인사가 모여 도서관 운영 규정과 자료 구입을 심의하는 교내 법정 위원회" ;
    :interactsWith :SchoolLibrary, :Principal .

### 3. 외체계 (Exosystem)
:Principal a :HumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Mediator" ;
    :description "도서관 협력수업의 학교 교육과정 반영, 교과 시수 인정, 관련 예산 집행을 최종 승인하는 결재권자" ;
    :interactsWith :TeacherLibrarian, :SchoolOperationCommittee .

:SchoolOperationCommittee a :HumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Intermediary" ;
    :description "학교 전체의 예산 배분과 학사 운영 방침을 심의·의결하여 도서관 지원 규모를 결정하는 최고 자치 기구" ;
    :interactsWith :Principal, :SchoolLibrary .

:OfficeOfEducation a :HumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Mediator" ;
    :description "사서교사 정원 배치, 협력수업 공모 사업 기획, 지원 예산 교부를 관할하는 교육행정 관청" ;
    :interactsWith :Principal, :TeacherLibrarian .

:PublicLibrary a :NonHumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Intermediary" ;
    :description "학교도서관에 도서 상호대차, 단체 대출, 작가 초청 프로그램 연계 등을 제공하는 지역 기반 도서관 인프라" ;
    :interactsWith :SchoolLibrary .

### 4. 거시체계 (Macrosystem)
:NationalCurriculum a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :isObligatoryPassagePoint true ;
    :roleType "BlackBox" ;
    :description "탐구 기반 학습, 융합 수업, 디지털 소양 교육을 국가 차원에서 의무화하는 표준 교육 지침(2022 개정 교육과정 등)" ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher, :PLC .

:LibraryPromotionAct a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :roleType "BlackBox" ;
    :description "학교도서관진흥법: 사서교사 배치, 학교도서관 시설 및 장서 기준을 국가가 법률로 강제하는 제도적 장치" ;
    :interactsWith :TeacherLibrarian, :OfficeOfEducation .

:CollegeEntrancePreoccupation a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :roleType "BlackBox" ;
    :description "입시주의: 지필평가 점수와 정답 암기만을 중시하여 도서관을 통한 탐구·협력 수업을 부차적인 것으로 밀어내는 사회적 풍토이자 저항 노드" ;
    :conflictsWith :TeacherLibrarian, :SubjectTeacher, :SchoolLibrary .

:KnowledgeInformationSociety a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :roleType "Mediator" ;
    :description "지식정보사회: 정보의 단순 소유보다 정보를 탐색·비판·활용하는 역량을 핵심 경쟁력으로 보는 현대 사회의 시대적 이념" ;
    :interactsWith :TeacherLibrarian, :NationalCurriculum .

### 5. 시간체계 (Chronosystem)
:CareerLifeCycle a :NonHumanActor ;
    :belongsToSystem :Chronosystem ;
    :roleType "Mediator" ;
    :description "교직 생애주기: 초임기의 단독 업무 적응에서 출발하여 경력 축적에 따라 타 교과 교사와의 협력 범위를 점진적으로 넓혀가는 사서교사의 경력 발달 단계" ;
    :interactsWith :TeacherLibrarian .

:DigitalTransformation a :NonHumanActor ;
    :belongsToSystem :Chronosystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "인쇄 매체 중심의 서가 환경에서 클라우드, 에듀테크, 생성형 AI 도구 중심으로 정보 환경이 급변하는 기술적 분기점" ;
    :interactsWith :SchoolLibrary, :TeacherLibrarian, :SubjectTeacher .

:CurriculumCycle a :NonHumanActor ;
    :belongsToSystem :Chronosystem ;
    :roleType "Intermediary" ;
    :description "2015, 2022 등 주기적으로 국가 교육 기조가 바뀌며 협력수업의 방향성과 평가 방식이 재편되는 정책적 주기" ;
    :interactsWith :NationalCurriculum .`;

// 2. Korean Label & Ecological Layer Metadata Map
const ACTANT_KOREAN_LABELS = {
  TeacherLibrarian: '사서교사',
  SubjectTeacher: '교과교사',
  SchoolLibrary: '학교도서관',
  GradeLevelCouncil: '학년협의회',
  PLC: '전문적 학습공동체(전학공)',
  StudentHome: '학생 가정(학부모)',
  LibraryOperationCommittee: '도서관운영위원회',
  Principal: '학교장(관리자)',
  SchoolOperationCommittee: '학교운영위원회',
  OfficeOfEducation: '교육청',
  PublicLibrary: '공공도서관',
  NationalCurriculum: '국가 교육과정',
  LibraryPromotionAct: '학교도서관진흥법',
  CollegeEntrancePreoccupation: '입시주의(진도·평가 압박)',
  KnowledgeInformationSociety: '지식정보사회',
  CareerLifeCycle: '교직 생애주기',
  DigitalTransformation: '디지털 전환(AI·에듀테크)',
  CurriculumCycle: '교육과정 개정 주기'
};

const SYSTEM_LAYER_META = {
  Microsystem: {
    ko: '미시체계 (Microsystem)',
    short: '미시체계',
    ringOrder: 1,
    radiusRatio: 0.14,
    color: '#f43f5e',
    bgBadge: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
  },
  Mesosystem: {
    ko: '중간체계 (Mesosystem)',
    short: '중간체계',
    ringOrder: 2,
    radiusRatio: 0.28,
    color: '#f59e0b',
    bgBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
  },
  Exosystem: {
    ko: '외체계 (Exosystem)',
    short: '외체계',
    ringOrder: 3,
    radiusRatio: 0.42,
    color: '#10b981',
    bgBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
  },
  Macrosystem: {
    ko: '거시체계 (Macrosystem)',
    short: '거시체계',
    ringOrder: 4,
    radiusRatio: 0.56,
    color: '#38bdf8',
    bgBadge: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
  },
  Chronosystem: {
    ko: '시간체계 (Chronosystem)',
    short: '시간체계',
    ringOrder: 5,
    radiusRatio: 0.70,
    color: '#a855f7',
    bgBadge: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
  }
};

// 3. Qualitative Interview Sample Scenarios
const SAMPLE_INTERVIEWS = {
  librarian_a: {
    speaker: '사서교사 A (중등 7년차)',
    targetActor: 'TeacherLibrarian',
    transcript:
      '초임 시절에는 단독 업무 적응에 급급했지만, 경력이 쌓이면서 전문적학습공동체(전학공)를 통해 교과교사 선생님들과 성취기준 재구성을 함께 연구했습니다. 특히 2022 개정 교육과정의 융합수업과 에듀테크, AI 리터러시 도구 활용을 학교도서관 정보활용교육과 결합하니 교과 선생님들의 참여가 크게 늘었습니다. 도서관 없이는 심층 탐구 수업이 불가능하다는 공감대(OPP)가 형성되었고, 과정중심평가 루브릭을 공동 제작하여 수업 시수로 공식 등록했습니다.'
  },
  teacher_b: {
    speaker: '교과교사 B (고교 국어교사)',
    targetActor: 'SubjectTeacher',
    transcript:
      '솔직히 고등학교 현장에서는 수능과 입시 결과에 대한 압박이 가장 큽니다. 정해진 교과서 진도 압박도 심하고 지필평가와 수행평가 채점 등 평가 부담이 막중해서, 사서교사 선생님과 시간을 맞춰 협력수업을 기획하기가 쉽지 않습니다. 예산 부족으로 원하는 학술 DB나 단행본을 즉시 구비하기도 어렵고, 교사마다 각자 교실에서 독립 업무 선호 경향이 강해서 도서관 프로젝트 수업은 후순위로 밀리곤 합니다.'
  },
  principal_c: {
    speaker: '관리자 C (학교장)',
    targetActor: 'Principal',
    transcript:
      '국가 교육과정에서 강조하는 탐구 기반 학습과 디지털 전환 역량을 키우려면 학교도서관이 학교 교육의 허브가 되어야 합니다. 다만 학교 전체 예산 부족 문제와 학부모님들의 입시 위주 민원, 그리고 일부 교사들의 진도 압박 호소가 공존하고 있습니다. 이를 해결하기 위해 교육청 공모 사업 예산을 확보하고 전문적학습공동체 연구 시간을 학사 일정에 공식 배정하여 협력수업을 장려하고 있습니다.'
  },
  synthesis_d: {
    speaker: '종단 심층면담 D (사서교사-교과교사 공동면담)',
    targetActor: 'SubjectTeacher',
    transcript:
      '처음에는 수능 입시와 진도 압박, 평가 부담 때문에 협력수업에 저항감이 있었습니다(문제제기). 하지만 사서교사가 성취기준 재구성 자료와 에듀테크·AI 리터러시 팩트체크 워크시트를 선제적으로 제안하며 교과 진도와 수행평가를 동시에 해결하는 방안을 제시했습니다(관심부여). 이후 전문적학습공동체와 학년협의회를 통해 연간 수업 계획서에 역할을 공식 등록(등록)했고, 학교장과 교육청의 예산 지원 속에 전교 모든 학년으로 융합수업이 확산(동원)되었습니다.'
  }
};

// 4. Autonomous NLP Trigger Dictionaries
const BARRIER_TRIGGERS = [
  { keyword: '진도 압박', weight: 1.8, source: 'CollegeEntrancePreoccupation', desc: '교과 진도 부담으로 인한 협력 기피' },
  { keyword: '평가 부담', weight: 1.6, source: 'CollegeEntrancePreoccupation', desc: '지필/수행평가 채점 및 공정성 부담' },
  { keyword: '수능', weight: 2.0, source: 'CollegeEntrancePreoccupation', desc: '수능 중심 문제풀이 수업 고착화' },
  { keyword: '입시', weight: 2.0, source: 'CollegeEntrancePreoccupation', desc: '입시주의 거시체계의 압력 강화' },
  { keyword: '예산 부족', weight: 1.5, source: 'SchoolOperationCommittee', desc: '자료 구입 및 프로그램 예산 제약' },
  { keyword: '독립 업무 선호', weight: 1.5, source: 'CollegeEntrancePreoccupation', desc: '교사 개인주의 및 단독 수업 관성' },
  { keyword: '시간 부족', weight: 1.4, source: 'GradeLevelCouncil', desc: '공동 수업 설계 및 협의 시간 부족' }
];

const FACILITATOR_TRIGGERS = [
  { keyword: '에듀테크', weight: 1.8, target: 'DigitalTransformation', desc: '디지털 도구 매개 수업 혁신' },
  { keyword: 'AI 리터러시', weight: 1.9, target: 'DigitalTransformation', desc: '생성형 AI·정보판별 역량 융합' },
  { keyword: '디지털', weight: 1.5, target: 'DigitalTransformation', desc: '디지털 전환 시간체계 동력' },
  { keyword: '전문적학습공동체', weight: 2.2, target: 'PLC', desc: '교내 자발적 연구 공동체 결속' },
  { keyword: '전학공', weight: 2.0, target: 'PLC', desc: '전문적 학습공동체 매개 강화' },
  { keyword: '융합수업', weight: 1.8, target: 'NationalCurriculum', desc: '교과 간 경계를 넘는 융합 설계' },
  { keyword: '성취기준 재구성', weight: 2.1, target: 'NationalCurriculum', desc: '국가 교육과정 성취기준 기반 번역' },
  { keyword: '탐구', weight: 1.6, target: 'SchoolLibrary', desc: '학교도서관 자료 기반 심층 탐구' },
  { keyword: '과정중심평가', weight: 1.7, target: 'SubjectTeacher', desc: '수업-평가 일체화 협력 모델' },
  { keyword: '예산 확보', weight: 1.5, target: 'OfficeOfEducation', desc: '교육청 및 학교 예산 지원' },
  { keyword: '예산 지원', weight: 1.5, target: 'Principal', desc: '관리자 행·재정적 승인 및 지지' }
];

// 5. Global Application State
let rawTTLText = DEFAULT_TTL_CONTENT;
let baseGraphData = { nodes: [], links: [] };
let currentGraphData = { nodes: [], links: [] };
let selectedNodeId = 'TeacherLibrarian';
let activeSystemFilter = 'ALL';
let showConcentricRings = true;
let d3Simulation = null;
let svgZoom = null;

// Current Interview & Translation State
let currentInterviewAnalysis = {
  isMutated: false,
  speaker: '기본 온톨로지 (초기 상태)',
  targetActor: 'TeacherLibrarian',
  transcript: '',
  matchedBarriers: [],
  matchedFacilitators: [],
  cohesionScore: 82.4,
  translationStages: []
};

// Firebase / Storage State
let firebaseConfig = null;
const STORAGE_KEY_SNAPSHOTS = 'ant_library_collab_snapshots_v1';
const STORAGE_KEY_FB_CONFIG = 'ant_library_collab_fb_config_v1';

// ============================================================================
// INITIALIZATION
// ============================================================================
window.addEventListener('DOMContentLoaded', async () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // Try loading ant_library_collab.ttl from workspace if served over HTTP
  try {
    const resp = await fetch('ant_library_collab.ttl');
    if (resp.ok) {
      const text = await resp.text();
      if (text && text.includes(':TeacherLibrarian')) {
        rawTTLText = text;
      }
    }
  } catch (err) {
    // Fallback to embedded DEFAULT_TTL_CONTENT (e.g. file:// protocol)
  }

  const ttlTextarea = document.getElementById('ttl-editor-textarea');
  if (ttlTextarea) {
    ttlTextarea.value = rawTTLText;
  }

  // Parse TTL and initialize graph
  baseGraphData = parseTurtleOntology(rawTTLText);
  resetToBaseOntology(false);

  // Load saved Firebase config & snapshots
  initStorageAndFirebase();

  // Handle window resize for responsive D3 canvas
  window.addEventListener('resize', () => {
    renderD3Network();
  });
});

// ============================================================================
// RDF / TURTLE (.TTL) PARSER
// ============================================================================
function parseTurtleOntology(ttlString) {
  const nodesMap = new Map();
  const rawLinks = [];

  // Remove comment lines starting with #
  const cleanLines = ttlString
    .split(/\r?\n/)
    .filter((line) => !line.trim().startsWith('#') && !line.trim().startsWith('@prefix'))
    .join('\n');

  // Split statements by period followed by whitespace or end of string
  const blocks = cleanLines
    .split(/\.\s*(?:\n|$)/)
    .map((b) => b.trim())
    .filter(Boolean);

  blocks.forEach((block) => {
    // Match subject starting with :Identifier
    const subjMatch = block.match(/^:([A-Za-z0-9_-]+)\s+([\s\S]+)$/);
    if (!subjMatch) return;

    const id = subjMatch[1];
    const body = subjMatch[2];

    // Check if it's a HumanActor or NonHumanActor
    const typeMatch = body.match(/a\s+:(HumanActor|NonHumanActor)/);
    if (!typeMatch) return;

    const actantType = typeMatch[1];
    const sysMatch = body.match(/:belongsToSystem\s+:([A-Za-z0-9_-]+)/);
    const oppMatch = body.match(/:isObligatoryPassagePoint\s+(true|false)/);
    const roleMatch = body.match(/:roleType\s+"([^"]+)"/);
    const descMatch = body.match(/:description\s+"([^"]+)"/);

    const systemLayer = sysMatch ? sysMatch[1] : 'Microsystem';
    const isOPP = oppMatch ? oppMatch[1] === 'true' : false;
    const roleType = roleMatch ? roleMatch[1] : 'Intermediary';
    const description = descMatch ? descMatch[1] : '';

    nodesMap.set(id, {
      id,
      uri: `:${id}`,
      labelKo: ACTANT_KOREAN_LABELS[id] || id,
      actantType,
      systemLayer,
      isOPP,
      roleType,
      description,
      weight: isOPP ? 1.4 : 1.0,
      quotes: []
    });

    // Extract :interactsWith targets
    const interactsMatch = body.match(/:interactsWith\s+([^;.]+)/);
    if (interactsMatch) {
      const targets = interactsMatch[1]
        .split(',')
        .map((t) => t.trim().replace(/^:/, ''))
        .filter(Boolean);
      targets.forEach((targetId) => {
        rawLinks.push({
          source: id,
          target: targetId,
          type: 'interactsWith',
          weight: 1.0,
          isDynamic: false
        });
      });
    }

    // Extract :conflictsWith targets
    const conflictsMatch = body.match(/:conflictsWith\s+([^;.]+)/);
    if (conflictsMatch) {
      const targets = conflictsMatch[1]
        .split(',')
        .map((t) => t.trim().replace(/^:/, ''))
        .filter(Boolean);
      targets.forEach((targetId) => {
        rawLinks.push({
          source: id,
          target: targetId,
          type: 'conflictsWith',
          weight: 1.2,
          isDynamic: false
        });
      });
    }
  });

  // Deduplicate undirected pairs of the same type so visual links are clean
  const linkMap = new Map();
  rawLinks.forEach((l) => {
    if (!nodesMap.has(l.source) || !nodesMap.has(l.target)) return;
    const pairKey = [l.source, l.target].sort().join('--') + '--' + l.type;
    if (!linkMap.has(pairKey)) {
      linkMap.set(pairKey, {
        id: pairKey,
        source: l.source,
        target: l.target,
        type: l.type,
        weight: l.weight,
        isDynamic: l.isDynamic,
        mutationNote: ''
      });
    }
  });

  const nodes = Array.from(nodesMap.values());
  const links = Array.from(linkMap.values());
  computeNetworkMetrics(nodes, links);
  return { nodes, links };
}

// ============================================================================
// NETWORK METRICS & CENTRALITY CALCULATION
// ============================================================================
function computeNetworkMetrics(nodes, links) {
  const adj = new Map();
  nodes.forEach((n) => {
    n.allyCount = 0;
    n.conflictCount = 0;
    n.weightedDegree = 0;
    n.betweenness = 0;
    adj.set(n.id, []);
  });

  links.forEach((l) => {
    const srcId = typeof l.source === 'object' ? l.source.id : l.source;
    const tgtId = typeof l.target === 'object' ? l.target.id : l.target;
    const srcNode = nodes.find((n) => n.id === srcId);
    const tgtNode = nodes.find((n) => n.id === tgtId);
    if (!srcNode || !tgtNode) return;

    if (l.type === 'interactsWith') {
      srcNode.allyCount += 1;
      tgtNode.allyCount += 1;
      srcNode.weightedDegree += l.weight;
      tgtNode.weightedDegree += l.weight;
      adj.get(srcId).push(tgtId);
      adj.get(tgtId).push(srcId);
    } else {
      srcNode.conflictCount += 1;
      tgtNode.conflictCount += 1;
      srcNode.weightedDegree += l.weight * 0.6;
      tgtNode.weightedDegree += l.weight * 0.6;
    }
  });

  // Unweighted Brandes Betweenness Centrality on collaborative graph
  const nodeIds = nodes.map((n) => n.id);
  const cb = {};
  nodeIds.forEach((id) => (cb[id] = 0));

  nodeIds.forEach((s) => {
    const stack = [];
    const pred = {};
    const sigma = {};
    const dist = {};
    nodeIds.forEach((v) => {
      pred[v] = [];
      sigma[v] = 0;
      dist[v] = -1;
    });
    sigma[s] = 1;
    dist[s] = 0;
    const queue = [s];

    while (queue.length > 0) {
      const v = queue.shift();
      stack.push(v);
      (adj.get(v) || []).forEach((w) => {
        if (dist[w] < 0) {
          queue.push(w);
          dist[w] = dist[v] + 1;
        }
        if (dist[w] === dist[v] + 1) {
          sigma[w] += sigma[v];
          pred[w].push(v);
        }
      });
    }

    const delta = {};
    nodeIds.forEach((v) => (delta[v] = 0));
    while (stack.length > 0) {
      const w = stack.pop();
      pred[w].forEach((v) => {
        delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]);
      });
      if (w !== s) {
        cb[w] += delta[w];
      }
    }
  });

  const maxCb = Math.max(...Object.values(cb), 1);
  nodes.forEach((n) => {
    n.betweenness = Number(((cb[n.id] / maxCb) * 100).toFixed(1));
    n.weightedDegree = Number(n.weightedDegree.toFixed(1));
  });
}

// ============================================================================
// D3.JS HIERARCHICAL ECOLOGICAL FORCE GRAPH
// ============================================================================
function renderD3Network() {
  const container = document.getElementById('network-canvas-container');
  const svgEl = document.getElementById('ant-network-svg');
  if (!container || !svgEl) return;

  const width = container.clientWidth || 900;
  const height = container.clientHeight || 620;
  const centerX = width / 2;
  const centerY = height / 2;
  const minDim = Math.min(width, height);

  const svg = d3.select(svgEl);
  svg.selectAll('*').remove();

  // Definitions for arrowheads & glow filters
  const defs = svg.append('defs');

  // Root zoomable group
  const gRoot = svg.append('g').attr('class', 'canvas-root');

  svgZoom = d3
    .zoom()
    .scaleExtent([0.45, 2.8])
    .on('zoom', (event) => {
      gRoot.attr('transform', event.transform);
    });

  svg.call(svgZoom);

  // 1. Draw Bronfenbrenner 5 Ecological System Concentric Rings
  const gRings = gRoot.append('g').attr('class', 'ecological-rings-layer');
  if (showConcentricRings) {
    Object.entries(SYSTEM_LAYER_META).forEach(([sysKey, meta]) => {
      const r = minDim * meta.radiusRatio;
      gRings
        .append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', r)
        .attr('class', 'eco-ring')
        .attr('stroke', meta.color)
        .attr('stroke-width', 1.2)
        .attr('stroke-opacity', activeSystemFilter === 'ALL' || activeSystemFilter === sysKey ? 0.35 : 0.1);

      gRings
        .append('text')
        .attr('x', centerX)
        .attr('y', centerY - r - 5)
        .attr('class', 'eco-ring-label')
        .attr('fill', meta.color)
        .text(meta.ko);
    });
  }

  // Deep clone nodes & links for D3 simulation
  const nodes = currentGraphData.nodes.map((n) => ({ ...n }));
  const links = currentGraphData.links.map((l) => ({
    ...l,
    source: typeof l.source === 'object' ? l.source.id : l.source,
    target: typeof l.target === 'object' ? l.target.id : l.target
  }));

  // 2. Draw Links
  const gLinks = gRoot.append('g').attr('class', 'links-layer');
  const linkElements = gLinks
    .selectAll('line')
    .data(links, (d) => d.id)
    .enter()
    .append('line')
    .attr('class', (d) => {
      let cls = 'network-link';
      if (d.type === 'conflictsWith') cls += ' conflict-link';
      if (d.weight > 1.35 && d.type === 'interactsWith') cls += ' strengthened-link';
      if (d.weight > 1.5 && d.type === 'conflictsWith') cls += ' strengthened-conflict';
      return cls;
    })
    .attr('stroke', (d) => (d.type === 'conflictsWith' ? '#f43f5e' : '#38bdf8'))
    .attr('stroke-width', (d) => Math.max(1.5, d.weight * 2.1))
    .attr('stroke-opacity', (d) => (d.type === 'conflictsWith' ? 0.88 : 0.62));

  // 3. Draw Nodes
  const gNodes = gRoot.append('g').attr('class', 'nodes-layer');
  const nodeGroups = gNodes
    .selectAll('g')
    .data(nodes, (d) => d.id)
    .enter()
    .append('g')
    .attr('class', (d) => `node-group ${d.id === selectedNodeId ? 'selected' : ''}`)
    .call(
      d3
        .drag()
        .on('start', (event, d) => {
          if (!event.active) d3Simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) d3Simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
    )
    .on('click', (event, d) => {
      event.stopPropagation();
      selectActantNode(d.id, true);
    });

  // 3a. OPP Golden Animated Halo & Outer Glow
  nodeGroups
    .filter((d) => d.isOPP)
    .append('circle')
    .attr('class', 'opp-outer-glow')
    .attr('r', 30);

  nodeGroups
    .filter((d) => d.isOPP)
    .append('circle')
    .attr('class', 'opp-halo')
    .attr('r', (d) => getNodeRadius(d) + 7);

  // 3b. Actant Shape: Circle for HumanActor, Rounded Diamond/Square for NonHumanActor
  nodeGroups.each(function (d) {
    const el = d3.select(this);
    const radius = getNodeRadius(d);
    const fillColor = SYSTEM_LAYER_META[d.systemLayer]?.color || '#38bdf8';

    if (d.actantType === 'HumanActor') {
      el.append('circle')
        .attr('class', 'node-shape')
        .attr('r', radius)
        .attr('fill', fillColor)
        .attr('fill-opacity', 0.88)
        .attr('stroke', d.isOPP ? '#fbbf24' : '#e2e8f0')
        .attr('stroke-width', d.isOPP ? 2.8 : 1.6);
    } else {
      // NonHumanActor: Diamond / Rotated Square
      const side = radius * 1.55;
      el.append('rect')
        .attr('class', 'node-shape')
        .attr('x', -side / 2)
        .attr('y', -side / 2)
        .attr('width', side)
        .attr('height', side)
        .attr('rx', 4)
        .attr('transform', 'rotate(45)')
        .attr('fill', fillColor)
        .attr('fill-opacity', 0.85)
        .attr('stroke', d.isOPP ? '#fbbf24' : '#e2e8f0')
        .attr('stroke-width', d.isOPP ? 2.8 : 1.6);
    }
  });

  // 3c. Role Symbol inside node (M = Mediator, I = Intermediary, B = BlackBox)
  nodeGroups
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', '#0f172a')
    .attr('font-size', '10px')
    .attr('font-weight', '800')
    .attr('pointer-events', 'none')
    .text((d) => (d.isOPP ? 'OPP' : d.roleType[0]));

  // 3d. Node Label (Korean + Role badge)
  nodeGroups
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('y', (d) => getNodeRadius(d) + 15)
    .attr('fill', '#f8fafc')
    .attr('font-size', '11.5px')
    .attr('font-weight', (d) => (d.isOPP ? '700' : '500'))
    .attr('pointer-events', 'none')
    .style('text-shadow', '0 2px 6px rgba(0,0,0,0.95)')
    .text((d) => d.labelKo);

  // 4. Configure Force Simulation with Ecological Radial Gravity
  d3Simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance((d) => (d.type === 'conflictsWith' ? 165 : 115 / Math.sqrt(d.weight)))
        .strength((d) => (d.type === 'conflictsWith' ? 0.18 : 0.35 * Math.min(1.6, d.weight)))
    )
    .force('charge', d3.forceManyBody().strength(-320))
    .force('collide', d3.forceCollide().radius((d) => getNodeRadius(d) + 26))
    .force(
      'radial',
      d3
        .forceRadial(
          (d) => {
            const meta = SYSTEM_LAYER_META[d.systemLayer];
            if (!meta) return 150;
            // Microsystem clusters tightly near the center
            return meta.ringOrder === 1 ? minDim * 0.08 : minDim * meta.radiusRatio;
          },
          centerX,
          centerY
        )
        .strength(showConcentricRings ? 0.82 : 0.25)
    )
    .on('tick', () => {
      linkElements
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      nodeGroups.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });

  // Apply any active filters
  applyGraphFilters();
}

function getNodeRadius(d) {
  const base = d.isOPP ? 19 : 14;
  const weightBonus = Math.min(8, (d.weightedDegree || 1) * 0.9);
  return base + weightBonus;
}

// ============================================================================
// GRAPH FILTERING & CONTROLS
// ============================================================================
function setSystemFilter(sys) {
  activeSystemFilter = sys;
  document.querySelectorAll('.sys-filter-btn').forEach((btn) => {
    const isMatch = btn.getAttribute('data-sys') === sys;
    btn.className = isMatch
      ? 'sys-filter-btn active px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/40 transition'
      : 'sys-filter-btn px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-500 transition';
  });
  applyGraphFilters();
}

function applyGraphFilters() {
  const actantFilter = document.getElementById('actant-type-filter')?.value || 'ALL';
  const linkFilter = document.getElementById('link-type-filter')?.value || 'ALL';

  const visibleNodeIds = new Set();

  d3.selectAll('.node-group').classed('dimmed', function (d) {
    const sysOk = activeSystemFilter === 'ALL' || d.systemLayer === activeSystemFilter;
    let actantOk = true;
    if (actantFilter === 'HumanActor') actantOk = d.actantType === 'HumanActor';
    if (actantFilter === 'NonHumanActor') actantOk = d.actantType === 'NonHumanActor';
    if (actantFilter === 'OPP_ONLY') actantOk = d.isOPP === true;

    const visible = sysOk && actantOk;
    if (visible) visibleNodeIds.add(d.id);
    return !visible;
  });

  d3.selectAll('.network-link').classed('dimmed', function (d) {
    const srcId = typeof d.source === 'object' ? d.source.id : d.source;
    const tgtId = typeof d.target === 'object' ? d.target.id : d.target;
    const linkOk = linkFilter === 'ALL' || d.type === linkFilter;
    const endpointsVisible = visibleNodeIds.has(srcId) && visibleNodeIds.has(tgtId);
    return !(linkOk && endpointsVisible);
  });
}

function toggleConcentricRings() {
  showConcentricRings = !showConcentricRings;
  const btn = document.getElementById('toggle-rings-btn');
  if (btn) {
    btn.className = showConcentricRings
      ? 'px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 transition flex items-center gap-1'
      : 'px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 transition flex items-center gap-1';
  }
  renderD3Network();
}

function resetGraphView() {
  const svg = d3.select('#ant-network-svg');
  if (svgZoom) {
    svg.transition().duration(500).call(svgZoom.transform, d3.zoomIdentity);
  }
}

// ============================================================================
// ACTANT INSPECTOR DRAWER
// ============================================================================
function selectActantNode(nodeId, switchTab = false) {
  selectedNodeId = nodeId;
  d3.selectAll('.node-group').classed('selected', (d) => d.id === nodeId);

  if (switchTab) {
    switchDrawerTab('inspector');
  }
  renderActantInspector(nodeId);
}

function renderActantInspector(nodeId) {
  const container = document.getElementById('inspector-content');
  if (!container) return;

  const node = currentGraphData.nodes.find((n) => n.id === nodeId) || currentGraphData.nodes[0];
  if (!node) return;

  const sysMeta = SYSTEM_LAYER_META[node.systemLayer] || SYSTEM_LAYER_META.Microsystem;

  // Find connected links
  const relatedLinks = currentGraphData.links.filter((l) => {
    const s = typeof l.source === 'object' ? l.source.id : l.source;
    const t = typeof l.target === 'object' ? l.target.id : l.target;
    return s === node.id || t === node.id;
  });

  const roleDescMap = {
    Mediator: '매개자 (Mediator) — 네트워크의 의미를 변형·증폭·창출하는 능동적 행위자',
    Intermediary: '단순 전달자 (Intermediary) — 의미 변형 없이 정보나 자원을 전달하는 통로',
    BlackBox: '블랙박스 (BlackBox) — 당연시되어 쉽게 해체되지 않는 견고화된 제도·구조'
  };

  const linksHtml = relatedLinks
    .map((l) => {
      const s = typeof l.source === 'object' ? l.source.id : l.source;
      const t = typeof l.target === 'object' ? l.target.id : l.target;
      const otherId = s === node.id ? t : s;
      const otherNode = currentGraphData.nodes.find((n) => n.id === otherId);
      const isConflict = l.type === 'conflictsWith';

      return `
        <div onclick="selectActantNode('${otherId}', false)" class="cursor-pointer p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border ${
          isConflict ? 'border-rose-500/40' : 'border-slate-700/80'
        } flex items-center justify-between transition">
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-mono-code ${
              isConflict ? 'bg-rose-500/20 text-rose-300' : 'bg-sky-500/20 text-sky-300'
            }">
              :${l.type}
            </span>
            <span class="text-xs font-semibold text-white">${otherNode ? otherNode.labelKo : otherId}</span>
            <span class="text-[10px] text-slate-400 font-mono-code">(:${otherId})</span>
          </div>
          <div class="flex items-center gap-1.5">
            ${
              l.isDynamic
                ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">면담 추론</span>'
                : ''
            }
            <span class="text-[11px] font-mono-code text-slate-300">w=${l.weight.toFixed(1)}</span>
          </div>
        </div>
      `;
    })
    .join('');

  const quotesHtml =
    node.quotes && node.quotes.length > 0
      ? node.quotes
          .map(
            (q) => `
          <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-200 leading-relaxed">
            <div class="text-[10px] font-bold text-amber-300 mb-1">💬 ${q.speaker} 면담 근거</div>
            "${q.text}"
          </div>
        `
          )
          .join('')
      : `<p class="text-xs text-slate-500 italic">현재 노드에 직접 매핑된 면담 인용구가 없습니다. 면담 분석 탭에서 시나리오를 실행해 보세요.</p>`;

  container.innerHTML = `
    <div class="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2 py-0.5 rounded-md text-[11px] font-semibold border ${sysMeta.bgBadge}">
            ${sysMeta.ko}
          </span>
          <span class="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-slate-800 text-slate-300">
            :${node.actantType === 'HumanActor' ? '인간 행위자 (HumanActor)' : '비인간 행위자 (NonHumanActor)'}
          </span>
          ${
            node.isOPP
              ? '<span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/50">★ 의무통과점 (OPP)</span>'
              : ''
          }
        </div>
        <h3 class="text-lg font-bold text-white mt-2 flex items-center gap-2">
          <span>${node.labelKo}</span>
          <span class="text-xs font-mono-code text-slate-400">${node.uri}</span>
        </h3>
      </div>
    </div>

    <!-- ANT Role & Description -->
    <div class="space-y-2">
      <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
        <div class="text-[11px] text-slate-400 font-semibold mb-0.5">ANT 행위자 역할 (roleType)</div>
        <div class="text-xs font-bold text-sky-300">${roleDescMap[node.roleType] || node.roleType}</div>
      </div>

      <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
        <div class="text-[11px] text-slate-400 font-semibold mb-1">온톨로지 정의 (:description)</div>
        <p class="text-xs text-slate-200 leading-relaxed">${node.description}</p>
      </div>
    </div>

    <!-- Centrality Metrics Grid -->
    <div class="grid grid-cols-3 gap-2">
      <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
        <div class="text-[10px] text-slate-400">가중 연결중심성</div>
        <div class="text-base font-bold text-sky-300 font-mono-code mt-0.5">${node.weightedDegree}</div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
        <div class="text-[10px] text-slate-400">매개 중심성</div>
        <div class="text-base font-bold text-amber-300 font-mono-code mt-0.5">${node.betweenness}</div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
        <div class="text-[10px] text-slate-400">연대 / 갈등 링크</div>
        <div class="text-base font-bold text-emerald-300 font-mono-code mt-0.5">${node.allyCount} / <span class="text-rose-400">${node.conflictCount}</span></div>
      </div>
    </div>

    <!-- Connected RDF Triples -->
    <div class="space-y-1.5">
      <div class="text-xs font-bold text-slate-300 flex items-center justify-between">
        <span>연결된 온톨로지 관계 트리플 (${relatedLinks.length}건)</span>
        <span class="text-[10px] text-slate-400">클릭하여 해당 노드 이동</span>
      </div>
      <div class="space-y-1.5 max-h-48 overflow-y-auto pr-1">
        ${linksHtml}
      </div>
    </div>

    <!-- Qualitative Interview Evidence -->
    <div class="space-y-1.5">
      <div class="text-xs font-bold text-slate-300">관련 질적 면담 증거 (Inscription Evidence)</div>
      <div class="space-y-1.5">
        ${quotesHtml}
      </div>
    </div>
  `;
}

// ============================================================================
// AUTONOMOUS QUALITATIVE INTERVIEW PARSER & GRAPH MUTATION ENGINE
// ============================================================================
function loadSampleInterview(sampleKey) {
  const sample = SAMPLE_INTERVIEWS[sampleKey];
  if (!sample) return;

  document.getElementById('interview-speaker').value = sample.speaker;
  document.getElementById('interview-target-actor').value = sample.targetActor;
  document.getElementById('interview-textarea').value = sample.transcript;

  runInterviewAnalysis();
}

function clearInterviewInput() {
  document.getElementById('interview-textarea').value = '';
  resetToBaseOntology(true);
}

function runInterviewAnalysis() {
  const speaker = document.getElementById('interview-speaker').value.trim() || '익명 면담자';
  const targetActorId = document.getElementById('interview-target-actor').value || 'SubjectTeacher';
  const transcript = document.getElementById('interview-textarea').value.trim();

  if (!transcript) {
    showToast('면담 전사 텍스트를 입력하거나 상단 샘플 시나리오를 선택해 주세요.', 'amber');
    return;
  }

  // Start from fresh copy of base ontology so repeated runs don't compound uncontrollably
  const mutatedNodes = baseGraphData.nodes.map((n) => ({ ...n, quotes: [] }));
  const mutatedLinks = baseGraphData.links.map((l) => ({
    ...l,
    source: typeof l.source === 'object' ? l.source.id : l.source,
    target: typeof l.target === 'object' ? l.target.id : l.target
  }));

  const matchedBarriers = [];
  const matchedFacilitators = [];

  // 1. Scan Resistance / Barrier Triggers
  BARRIER_TRIGGERS.forEach((rule) => {
    if (transcript.includes(rule.keyword)) {
      matchedBarriers.push(rule);
      // Spawn or strengthen :conflictsWith link between :CollegeEntrancePreoccupation (or rule.source) and targetActorId
      upsertLink(mutatedLinks, rule.source, targetActorId, 'conflictsWith', rule.weight, true, rule.desc);

      // Weaken collaborative link between TeacherLibrarian and SubjectTeacher
      const collabLink = mutatedLinks.find(
        (l) =>
          l.type === 'interactsWith' &&
          ((l.source === 'TeacherLibrarian' && l.target === 'SubjectTeacher') ||
            (l.source === 'SubjectTeacher' && l.target === 'TeacherLibrarian'))
      );
      if (collabLink) {
        collabLink.weight = Math.max(0.4, collabLink.weight - 0.25);
      }
    }
  });

  // 2. Scan Facilitator Triggers
  FACILITATOR_TRIGGERS.forEach((rule) => {
    if (transcript.includes(rule.keyword)) {
      matchedFacilitators.push(rule);
      // Strengthen link with PLC, DigitalTransformation, NationalCurriculum, and TeacherLibrarian
      upsertLink(mutatedLinks, targetActorId, rule.target, 'interactsWith', rule.weight, true, rule.desc);
      upsertLink(mutatedLinks, 'TeacherLibrarian', rule.target, 'interactsWith', rule.weight * 0.9, true, rule.desc);
    }
  });

  // Attach quote evidence to relevant nodes
  const targetNode = mutatedNodes.find((n) => n.id === targetActorId);
  if (targetNode) {
    targetNode.quotes.push({ speaker, text: transcript });
  }
  matchedFacilitators.forEach((f) => {
    const n = mutatedNodes.find((node) => node.id === f.target);
    if (n && n.quotes.length === 0) {
      n.quotes.push({ speaker, text: `[촉진 키워드: ${f.keyword}] ${transcript}` });
    }
  });
  if (matchedBarriers.length > 0) {
    const entranceNode = mutatedNodes.find((n) => n.id === 'CollegeEntrancePreoccupation');
    if (entranceNode) {
      entranceNode.quotes.push({
        speaker,
        text: `[저항/장벽 키워드: ${matchedBarriers.map((b) => b.keyword).join(', ')}] ${transcript}`
      });
    }
  }

  // Recompute Centrality Metrics
  computeNetworkMetrics(mutatedNodes, mutatedLinks);

  // Calculate network cohesion score
  const totalAllyWeight = mutatedLinks
    .filter((l) => l.type === 'interactsWith')
    .reduce((acc, l) => acc + l.weight, 0);
  const totalConflictWeight = mutatedLinks
    .filter((l) => l.type === 'conflictsWith')
    .reduce((acc, l) => acc + l.weight, 0);
  const cohesionScore = Number(((totalAllyWeight / (totalAllyWeight + totalConflictWeight)) * 100).toFixed(1));

  // Auto-map Callon's 4 stages of translation
  const translationStages = buildTranslationStages(
    transcript,
    matchedFacilitators,
    matchedBarriers,
    speaker
  );

  currentGraphData = { nodes: mutatedNodes, links: mutatedLinks };
  currentInterviewAnalysis = {
    isMutated: true,
    speaker,
    targetActor: targetActorId,
    transcript,
    matchedBarriers,
    matchedFacilitators,
    cohesionScore,
    translationStages
  };

  // Update UI
  renderD3Network();
  renderInterviewExtractionResult();
  renderAllDashboardViews();
  selectActantNode(targetActorId, false);

  showToast(`'${speaker}' 면담 분석 완료: 촉진 ${matchedFacilitators.length}건, 저항 ${matchedBarriers.length}건 반영됨`, 'emerald');
}

function upsertLink(linksArray, src, tgt, type, addedWeight, isDynamic, note) {
  if (src === tgt) return;
  const existing = linksArray.find(
    (l) =>
      l.type === type &&
      ((l.source === src && l.target === tgt) || (l.source === tgt && l.target === src))
  );
  if (existing) {
    existing.weight = Math.min(3.5, existing.weight + addedWeight * 0.55);
    existing.isDynamic = true;
    existing.mutationNote = note;
  } else {
    const pairKey = [src, tgt].sort().join('--') + '--' + type;
    linksArray.push({
      id: pairKey,
      source: src,
      target: tgt,
      type,
      weight: addedWeight,
      isDynamic,
      mutationNote: note
    });
  }
}

function renderInterviewExtractionResult() {
  const { speaker, matchedBarriers, matchedFacilitators, transcript, cohesionScore } =
    currentInterviewAnalysis;

  const badge = document.getElementById('analysis-sentiment-badge');
  const container = document.getElementById('extracted-keywords-container');
  const preview = document.getElementById('annotated-transcript-preview');
  const banner = document.getElementById('mutation-banner');
  const bannerText = document.getElementById('mutation-banner-text');

  if (matchedFacilitators.length > matchedBarriers.length) {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold';
    badge.textContent = `연대/번역 촉진 우세 (결속도 ${cohesionScore}%)`;
  } else if (matchedBarriers.length > matchedFacilitators.length) {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold';
    badge.textContent = `입시·저항 갈등 우세 (결속도 ${cohesionScore}%)`;
  } else {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold';
    badge.textContent = `촉진·저항 길항 상태 (결속도 ${cohesionScore}%)`;
  }

  const facBadges =
    matchedFacilitators.length > 0
      ? matchedFacilitators
          .map(
            (f) =>
              `<span class="kw-facilitator text-[11px] inline-flex items-center gap-1 mr-1 mb-1">+ ${f.keyword} → :${f.target}</span>`
          )
          .join('')
      : '<span class="text-slate-500 text-[11px]">검출된 촉진 키워드 없음</span>';

  const barBadges =
    matchedBarriers.length > 0
      ? matchedBarriers
          .map(
            (b) =>
              `<span class="kw-barrier text-[11px] inline-flex items-center gap-1 mr-1 mb-1">⚡ ${b.keyword} ↔ :${b.source}</span>`
          )
          .join('')
      : '<span class="text-slate-500 text-[11px]">검출된 저항/장벽 키워드 없음</span>';

  container.innerHTML = `
    <div class="space-y-1.5">
      <div>
        <div class="text-[10px] text-emerald-400 font-semibold mb-1">촉진 요인 (Facilitator Triggers → 연대 링크 강화)</div>
        <div class="flex flex-wrap">${facBadges}</div>
      </div>
      <div>
        <div class="text-[10px] text-rose-400 font-semibold mb-1">저항/장벽 요인 (Barrier Triggers → 점선 갈등 링크 생성·강화)</div>
        <div class="flex flex-wrap">${barBadges}</div>
      </div>
    </div>
  `;

  // Highlight keywords in transcript
  let annotated = transcript;
  matchedFacilitators.forEach((f) => {
    annotated = annotated.replaceAll(f.keyword, `<span class="kw-facilitator">${f.keyword}</span>`);
  });
  matchedBarriers.forEach((b) => {
    annotated = annotated.replaceAll(b.keyword, `<span class="kw-barrier">${b.keyword}</span>`);
  });

  preview.classList.remove('hidden');
  preview.innerHTML = `<strong class="text-slate-200 block mb-1">[하이라이트 전사문]</strong>${annotated}`;

  if (banner && bannerText) {
    banner.classList.remove('hidden');
    bannerText.innerHTML = `<strong>${speaker}</strong> 데이터 반영: 촉진 트리거 <strong>${matchedFacilitators.length}건</strong>, 저항 트리거 <strong>${matchedBarriers.length}건</strong>이 그래프 가중치에 적용되었습니다.`;
  }
}

function resetToBaseOntology(notify = true) {
  currentGraphData = {
    nodes: baseGraphData.nodes.map((n) => ({ ...n, quotes: [] })),
    links: baseGraphData.links.map((l) => ({
      ...l,
      source: typeof l.source === 'object' ? l.source.id : l.source,
      target: typeof l.target === 'object' ? l.target.id : l.target
    }))
  };
  computeNetworkMetrics(currentGraphData.nodes, currentGraphData.links);

  currentInterviewAnalysis = {
    isMutated: false,
    speaker: '기본 온톨로지 (초기 상태)',
    targetActor: 'TeacherLibrarian',
    transcript: '',
    matchedBarriers: [],
    matchedFacilitators: [],
    cohesionScore: 82.4,
    translationStages: buildTranslationStages('', [], [], '기본 온톨로지')
  };

  const banner = document.getElementById('mutation-banner');
  if (banner) banner.classList.add('hidden');

  renderD3Network();
  renderAllDashboardViews();
  renderActantInspector(selectedNodeId);

  if (notify) {
    showToast('초기 온톨로지(ant_library_collab.ttl) 네트워크 상태로 복원되었습니다.', 'sky');
  }
}

// ============================================================================
// CALLON'S 4 STAGES OF TRANSLATION AUTO-MAPPER
// ============================================================================
function buildTranslationStages(transcript, facilitators, barriers, speaker) {
  const hasBarrier = barriers.length > 0;
  const hasPLC = facilitators.some((f) => f.target === 'PLC');
  const hasDigital = facilitators.some((f) => f.target === 'DigitalTransformation');
  const hasCurriculum = facilitators.some((f) => f.target === 'NationalCurriculum');
  const hasAdmin = facilitators.some((f) => f.target === 'Principal' || f.target === 'OfficeOfEducation');

  return [
    {
      stageNo: 1,
      stageEn: 'Problematization',
      stageKo: '1단계: 문제제기 (Problematization)',
      oppFocus: '사서교사(:TeacherLibrarian) & 학교도서관(:SchoolLibrary)',
      actors: '사서교사, 교과교사, 학교도서관, 2022 개정 교육과정',
      competitor: hasBarrier
        ? `입시주의(${barriers.map((b) => b.keyword).join(', ')})에 의한 암기식 단독 수업 회귀`
        : '입시주의(:CollegeEntrancePreoccupation) 및 교과 진도 부담',
      evidence: transcript
        ? `[${speaker}] "${transcript.slice(0, 95)}..." → 도서관과 사서교사를 거치지 않고는 성취기준 기반 심층 탐구가 불가능함을 의무통과점(OPP)으로 설정.`
        : '2022 개정 교육과정의 심층 탐구·디지털 소양 목표 달성에서 학교도서관과 사서교사를 필수불가결한 의무통과점(OPP)으로 정의.',
      status: '달성 (OPP 확립)',
      score: 92
    },
    {
      stageNo: 2,
      stageEn: 'Interessement',
      stageKo: '2단계: 관심부여 (Interessement)',
      oppFocus: '디지털 전환(:DigitalTransformation) & 국가 교육과정(:NationalCurriculum)',
      actors: '사서교사, 교과교사, 에듀테크/AI 도구, 과정중심평가 루브릭',
      competitor: '지필평가 부담, 수업 시수 부족, 독립 업무 선호 관성',
      evidence:
        hasDigital || hasCurriculum
          ? `성취기준 재구성 및 에듀테크·AI 리터러시 기제를 투입하여 교과교사의 '진도/평가 부담'을 완화하고 입시주의 결속을 차단함.`
          : hasBarrier
          ? `현재 '${barriers.map((b) => b.keyword).join(', ')}' 저항이 강하게 작동 중이므로, 성취기준 재구성 및 수행평가 공동 루브릭이라는 관심부여 장치 투입이 시급함.`
          : '교과 진도와 수행평가를 동시에 해결하는 정보활용 워크시트 및 에듀테크 도구로 교과교사의 관심을 유인.',
      status: hasBarrier && !hasDigital && !hasCurriculum ? '갈등/지연' : '진행/강화',
      score: hasBarrier && !hasDigital ? 54 : 86
    },
    {
      stageNo: 3,
      stageEn: 'Enrolment',
      stageKo: '3단계: 등록 (Enrolment)',
      oppFocus: '전문적 학습공동체(:PLC) & 학년협의회(:GradeLevelCouncil)',
      actors: '전문적 학습공동체(전학공), 학년협의회, 사서교사, 교과교사',
      competitor: '일회성 행사 수업으로의 축소, 형식적 협의회 운영',
      evidence: hasPLC
        ? `전문적 학습공동체(:PLC)를 통해 사서교사와 교과교사가 대등한 연구자로서 연간 지도안과 시간표 시수를 공식 배정·기입(Inscription)함.`
        : '전문적 학습공동체(PLC)와 학년협의회를 매개로 공동 수업안, 평가 기준표, 시간표 배정을 공식 문서로 기입(Inscription).',
      status: hasPLC ? '강력 결속' : '안정적 유지',
      score: hasPLC ? 95 : 78
    },
    {
      stageNo: 4,
      stageEn: 'Mobilization',
      stageKo: '4단계: 동원 (Mobilization)',
      oppFocus: '학교장(:Principal), 교육청(:OfficeOfEducation), 학교도서관진흥법',
      actors: '학교장, 학교운영위원회, 교육청, 공공도서관, 학부모',
      competitor: '학교 예산 삭감, 담당 교사 전보에 따른 단절',
      evidence: hasAdmin
        ? `학교장 및 교육청의 예산·제도 승인을 통해 특정 교사 개인의 노력을 넘어 학교 전체 교육과정의 블랙박스(Black-box)로 제도화됨.`
        : '학교장의 교육과정 결재, 학교운영위원회의 예산 심의, 교육청 공모사업 연계를 통해 전교적 협력수업 체계로 동원 및 확산.',
      status: hasAdmin ? '전교적 제도화' : '확산 단계',
      score: hasAdmin ? 94 : 76
    }
  ];
}

// ============================================================================
// DASHBOARD & TABLE RENDERERS
// ============================================================================
function renderAllDashboardViews() {
  // 1. Update Top KPI Bar
  const oppCount = currentGraphData.nodes.filter((n) => n.isOPP).length;
  document.getElementById('kpi-actant-count').textContent = currentGraphData.nodes.length;
  document.getElementById('kpi-opp-count').textContent = oppCount;

  const cohesionEl = document.getElementById('kpi-cohesion');
  if (cohesionEl) {
    cohesionEl.textContent = `${currentInterviewAnalysis.cohesionScore}%`;
    cohesionEl.className =
      currentInterviewAnalysis.cohesionScore >= 75
        ? 'text-emerald-400 font-mono-code'
        : 'text-rose-400 font-mono-code';
  }

  // Top centrality node
  const sortedByCentrality = [...currentGraphData.nodes].sort(
    (a, b) => b.weightedDegree + b.betweenness * 0.05 - (a.weightedDegree + a.betweenness * 0.05)
  );
  const topNode = sortedByCentrality[0];
  const topCentralityEl = document.getElementById('canvas-top-centrality');
  if (topCentralityEl && topNode) {
    topCentralityEl.textContent = `${topNode.labelKo} (${topNode.uri}, w=${topNode.weightedDegree})`;
  }

  // 2. Render Studio Bottom 4-Stage Cards
  const studioCards = document.getElementById('studio-translation-cards');
  const statusBadge = document.getElementById('translation-status-badge');
  if (statusBadge) {
    statusBadge.textContent = currentInterviewAnalysis.isMutated
      ? `면담 반영: ${currentInterviewAnalysis.speaker}`
      : '기본 온톨로지 기준';
  }

  if (studioCards) {
    studioCards.innerHTML = currentInterviewAnalysis.translationStages
      .map(
        (st) => `
        <div class="glass-card rounded-xl p-3 flex flex-col justify-between gap-2">
          <div>
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-xs font-bold text-amber-300">${st.stageKo}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                st.score >= 80
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'bg-rose-500/20 text-rose-300'
              }">${st.status} (${st.score}%)</span>
            </div>
            <div class="text-[11px] text-sky-300 font-medium mb-1">OPP: ${st.oppFocus}</div>
            <p class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">${st.evidence}</p>
          </div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div class="h-full ${
              st.score >= 80 ? 'bg-gradient-to-r from-amber-400 to-emerald-400' : 'bg-rose-500'
            }" style="width: ${st.score}%"></div>
          </div>
        </div>
      `
      )
      .join('');
  }

  // 3. Render Tab 2: Translation Matrix Table
  const transTbody = document.getElementById('translation-matrix-tbody');
  if (transTbody) {
    transTbody.innerHTML = currentInterviewAnalysis.translationStages
      .map(
        (st) => `
        <tr class="hover:bg-slate-900/50 transition">
          <td class="py-3 px-3 font-bold text-amber-300 align-top">${st.stageKo}</td>
          <td class="py-3 px-3 text-sky-300 font-medium align-top">${st.oppFocus}</td>
          <td class="py-3 px-3 text-slate-200 align-top">${st.actors}</td>
          <td class="py-3 px-3 text-rose-300 align-top">${st.competitor}</td>
          <td class="py-3 px-3 text-slate-300 leading-relaxed align-top">${st.evidence}</td>
          <td class="py-3 px-3 text-center align-top">
            <span class="inline-block px-2 py-1 rounded-lg text-[11px] font-bold ${
              st.score >= 80
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
            }">${st.status}<br/>(${st.score}%)</span>
          </td>
        </tr>
      `
      )
      .join('');
  }

  // 4. Render Tab 2: 18 Actants Inventory & Centrality Table
  const invTbody = document.getElementById('actant-inventory-tbody');
  if (invTbody) {
    const orderedNodes = [...currentGraphData.nodes].sort((a, b) => {
      const rA = SYSTEM_LAYER_META[a.systemLayer]?.ringOrder || 9;
      const rB = SYSTEM_LAYER_META[b.systemLayer]?.ringOrder || 9;
      if (rA !== rB) return rA - rB;
      return b.weightedDegree - a.weightedDegree;
    });

    invTbody.innerHTML = orderedNodes
      .map((n) => {
        const sysMeta = SYSTEM_LAYER_META[n.systemLayer] || SYSTEM_LAYER_META.Microsystem;
        return `
          <tr class="hover:bg-slate-900/60 transition cursor-pointer" onclick="switchMainTab('studio'); selectActantNode('${n.id}', true);">
            <td class="py-2.5 px-3">
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold border ${sysMeta.bgBadge}">
                ${sysMeta.short}
              </span>
            </td>
            <td class="py-2.5 px-3 font-bold text-white">
              ${n.labelKo} <span class="text-[11px] font-mono-code text-slate-400">(${n.uri})</span>
            </td>
            <td class="py-2.5 px-3 text-slate-300">
              ${n.actantType === 'HumanActor' ? '인간 (원형)' : '비인간 (마름모)'}
            </td>
            <td class="py-2.5 px-3">
              <span class="px-2 py-0.5 rounded bg-slate-800 text-sky-300 font-mono-code text-[11px]">${n.roleType}</span>
            </td>
            <td class="py-2.5 px-3 text-center">
              ${
                n.isOPP
                  ? '<span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[11px]">★ OPP</span>'
                  : '<span class="text-slate-600">-</span>'
              }
            </td>
            <td class="py-2.5 px-3 text-center font-mono-code">
              <span class="text-sky-400">${n.allyCount}</span> / <span class="text-rose-400">${n.conflictCount}</span>
            </td>
            <td class="py-2.5 px-3 text-center font-mono-code font-bold text-white">${n.weightedDegree}</td>
            <td class="py-2.5 px-3 text-center font-mono-code text-amber-300">${n.betweenness}</td>
            <td class="py-2.5 px-3 text-slate-300 max-w-md">${n.description}</td>
          </tr>
        `;
      })
      .join('');
  }
}

// ============================================================================
// TAB NAVIGATION & UI HELPERS
// ============================================================================
function switchMainTab(tabName) {
  ['studio', 'matrix', 'repo'].forEach((t) => {
    const content = document.getElementById(`tab-content-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    if (content) {
      if (t === tabName) {
        content.classList.remove('hidden');
        content.classList.add(t === 'studio' ? 'grid' : 'flex');
      } else {
        content.classList.add('hidden');
        content.classList.remove('grid', 'flex');
      }
    }
    if (btn) {
      btn.className =
        t === tabName
          ? 'main-tab-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-sky-500/20 text-sky-300 border border-sky-500/40'
          : 'main-tab-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-slate-400 hover:text-slate-200';
    }
  });

  if (tabName === 'studio') {
    setTimeout(() => renderD3Network(), 50);
  }
}

function switchDrawerTab(tabName) {
  const isInterview = tabName === 'interview';
  document.getElementById('drawer-panel-interview').classList.toggle('hidden', !isInterview);
  document.getElementById('drawer-panel-inspector').classList.toggle('hidden', isInterview);

  document.getElementById('drawer-tab-interview').className = isInterview
    ? 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40'
    : 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-200';

  document.getElementById('drawer-tab-inspector').className = !isInterview
    ? 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-500/20 text-sky-300 border border-sky-500/40'
    : 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-200';
}

function reparseCustomTTL() {
  const text = document.getElementById('ttl-editor-textarea')?.value;
  if (!text) return;
  try {
    const parsed = parseTurtleOntology(text);
    if (parsed.nodes.length === 0) {
      showToast('유효한 Actant 노드를 찾지 못했습니다. TTL 문법을 확인해 주세요.', 'rose');
      return;
    }
    rawTTLText = text;
    baseGraphData = parsed;
    resetToBaseOntology(false);
    showToast(`TTL 재파싱 완료: 행위자 ${parsed.nodes.length}개, 링크 ${parsed.links.length}개 로드됨`, 'emerald');
    switchMainTab('studio');
  } catch (e) {
    showToast('TTL 파싱 중 오류가 발생했습니다.', 'rose');
  }
}

// ============================================================================
// FIREBASE & LOCALSTORAGE PERSISTENCE (/interviews & /network_snapshots)
// ============================================================================
function initStorageAndFirebase() {
  const savedConfig = localStorage.getItem(STORAGE_KEY_FB_CONFIG);
  if (savedConfig) {
    try {
      firebaseConfig = JSON.parse(savedConfig);
      updateFirebaseStatusBadge(true);
    } catch (e) {
      firebaseConfig = null;
    }
  }

  // Ensure initial default snapshots exist in LocalStorage
  const existing = getLocalSnapshots();
  if (existing.length === 0) {
    seedDefaultSnapshots();
  }
  renderSavedSnapshotsList();
}

function getLocalSnapshots() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SNAPSHOTS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function seedDefaultSnapshots() {
  const seeds = [
    {
      id: 'snap-seed-1',
      createdAt: '2026-11-04 09:30:00',
      speaker: '사서교사 A (중등 7년차) [샘플 스냅샷]',
      targetActor: 'TeacherLibrarian',
      transcript: SAMPLE_INTERVIEWS.librarian_a.transcript,
      cohesionScore: 89.2,
      barrierCount: 0,
      facilitatorCount: 8
    },
    {
      id: 'snap-seed-2',
      createdAt: '2026-11-04 09:35:00',
      speaker: '교과교사 B (고교 국어) [입시/진도 저항 스냅샷]',
      targetActor: 'SubjectTeacher',
      transcript: SAMPLE_INTERVIEWS.teacher_b.transcript,
      cohesionScore: 61.4,
      barrierCount: 6,
      facilitatorCount: 0
    },
    {
      id: 'snap-seed-3',
      createdAt: '2026-11-04 09:40:00',
      speaker: '관리자 C (학교장) [제도/예산 길항 스냅샷]',
      targetActor: 'Principal',
      transcript: SAMPLE_INTERVIEWS.principal_c.transcript,
      cohesionScore: 78.6,
      barrierCount: 3,
      facilitatorCount: 3
    },
    {
      id: 'snap-seed-4',
      createdAt: '2026-11-04 09:45:00',
      speaker: '종단 심층면담 D (통합) [번역 4단계 완성 스냅샷]',
      targetActor: 'SubjectTeacher',
      transcript: SAMPLE_INTERVIEWS.synthesis_d.transcript,
      cohesionScore: 81.5,
      barrierCount: 4,
      facilitatorCount: 6
    }
  ];
  localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(seeds));
  return seeds;
}

function getResolvedDatabaseUrl() {
  if (!firebaseConfig) return '';
  if (firebaseConfig.databaseURL) {
    return firebaseConfig.databaseURL.replace(/\/$/, '');
  }
  if (firebaseConfig.projectId) {
    return `https://${firebaseConfig.projectId}-default-rtdb.firebaseio.com`;
  }
  return '';
}

async function saveCurrentAnalysisSnapshot() {
  const speaker = document.getElementById('interview-speaker')?.value || currentInterviewAnalysis.speaker;
  const targetActor = document.getElementById('interview-target-actor')?.value || currentInterviewAnalysis.targetActor;
  const transcript = document.getElementById('interview-textarea')?.value || currentInterviewAnalysis.transcript || '기본 온톨로지 스냅샷';

  const snapshotRecord = {
    id: 'snap-' + Date.now(),
    createdAt: new Date().toLocaleString('ko-KR'),
    speaker,
    targetActor,
    transcript,
    cohesionScore: currentInterviewAnalysis.cohesionScore,
    barrierCount: currentInterviewAnalysis.matchedBarriers.length,
    facilitatorCount: currentInterviewAnalysis.matchedFacilitators.length
  };

  // Save to LocalStorage
  const list = getLocalSnapshots();
  list.unshift(snapshotRecord);
  localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(list));

  // Push to Firebase Realtime DB (/interviews & /network_snapshots) if configured
  const baseUrl = getResolvedDatabaseUrl();
  if (baseUrl) {
    try {
      await fetch(`${baseUrl}/interviews/${snapshotRecord.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: snapshotRecord.id,
          speaker: snapshotRecord.speaker,
          targetActor: snapshotRecord.targetActor,
          transcript: snapshotRecord.transcript,
          createdAt: snapshotRecord.createdAt
        })
      });
      await fetch(`${baseUrl}/network_snapshots/${snapshotRecord.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(snapshotRecord)
      });
      showToast('Firebase (/interviews, /network_snapshots) 및 로컬 저장소에 동기화되었습니다.', 'emerald');
    } catch (e) {
      showToast('로컬 저장소에 저장되었습니다 (Firebase 네트워크 오프라인 폴백).', 'amber');
    }
  } else {
    showToast('현재 면담 및 네트워크 스냅샷이 LocalStorage에 저장되었습니다.', 'emerald');
  }

  renderSavedSnapshotsList();
}

async function pullSnapshotsFromFirebase() {
  const baseUrl = getResolvedDatabaseUrl();
  if (!baseUrl) {
    openFirebaseModal();
    showToast('먼저 Firebase 설정(Database URL 또는 Project ID)을 입력해 주세요.', 'amber');
    return;
  }

  try {
    const resp = await fetch(`${baseUrl}/network_snapshots.json`);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    if (!data) {
      showToast('Firebase에 저장된 스냅샷이 없습니다. [초기 시드 DB 업로드]를 먼저 실행해 보세요.', 'amber');
      return;
    }
    const remoteList = Object.values(data).sort((a, b) =>
      String(b.createdAt || '').localeCompare(String(a.createdAt || ''))
    );
    localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(remoteList));
    renderSavedSnapshotsList();
    showToast(`Firebase에서 스냅샷 ${remoteList.length}건을 성공적으로 불러왔습니다.`, 'emerald');
  } catch (err) {
    showToast('Firebase 불러오기 실패: Database URL 또는 데이터베이스 보안 규칙(.read: true)을 확인하세요.', 'rose');
  }
}

async function seedFirebaseDatabase() {
  const baseUrl = getResolvedDatabaseUrl();
  if (!baseUrl) {
    openFirebaseModal();
    showToast('먼저 Firebase 설정(Database URL 또는 Project ID)을 입력해 주세요.', 'amber');
    return;
  }

  try {
    let seedPayload = null;
    try {
      const resp = await fetch('firebase-seed-data.json');
      if (resp.ok) {
        seedPayload = await resp.json();
      }
    } catch (_) {
      // Fallback if running via file:// protocol
    }

    if (!seedPayload) {
      const seeds = seedDefaultSnapshots();
      const interviewsMap = {};
      const snapshotsMap = {};
      seeds.forEach((s) => {
        interviewsMap[s.id] = {
          id: s.id,
          speaker: s.speaker,
          targetActor: s.targetActor,
          transcript: s.transcript,
          createdAt: s.createdAt
        };
        snapshotsMap[s.id] = s;
      });
      seedPayload = {
        interviews: interviewsMap,
        network_snapshots: snapshotsMap
      };
    }

    const putResp = await fetch(`${baseUrl}/.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seedPayload)
    });

    if (!putResp.ok) throw new Error('HTTP ' + putResp.status);

    await pullSnapshotsFromFirebase();
    showToast('초기 시드 데이터(/ontology_meta, /interviews, /network_snapshots)가 Firebase에 업로드되었습니다!', 'emerald');
  } catch (err) {
    showToast('Firebase 업로드 실패: Realtime Database URL과 규칙(.write: true)을 확인해 주세요.', 'rose');
  }
}

function renderSavedSnapshotsList() {
  const container = document.getElementById('saved-snapshots-list');
  if (!container) return;

  const list = getLocalSnapshots();
  if (list.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500">저장된 스냅샷이 없습니다.</p>`;
    return;
  }

  container.innerHTML = list
    .map(
      (item) => `
      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div>
            <span class="text-xs font-bold text-white">${item.speaker}</span>
            <span class="text-[10px] text-slate-400 font-mono-code ml-2">${item.createdAt}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">촉진 ${item.facilitatorCount}</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-300">저항 ${item.barrierCount}</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 font-mono-code">결속 ${item.cohesionScore}%</span>
          </div>
        </div>
        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">"${item.transcript}"</p>
        <div class="flex items-center justify-end gap-2 pt-1">
          <button onclick="deleteSavedSnapshot('${item.id}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 text-[11px] transition">
            삭제
          </button>
          <button onclick="restoreSavedSnapshot('${item.id}')" class="px-3 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-[11px] font-semibold transition">
            이 스냅샷으로 네트워크 복원
          </button>
        </div>
      </div>
    `
    )
    .join('');
}

function restoreSavedSnapshot(id) {
  const list = getLocalSnapshots();
  const found = list.find((i) => i.id === id);
  if (!found) return;

  document.getElementById('interview-speaker').value = found.speaker;
  document.getElementById('interview-target-actor').value = found.targetActor || 'SubjectTeacher';
  document.getElementById('interview-textarea').value = found.transcript;

  switchMainTab('studio');
  runInterviewAnalysis();
}

function deleteSavedSnapshot(id) {
  const list = getLocalSnapshots().filter((i) => i.id !== id);
  localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(list));
  renderSavedSnapshotsList();
  showToast('스냅샷이 삭제되었습니다.', 'sky');
}

// Firebase Modal Handlers
function openFirebaseModal() {
  const modal = document.getElementById('firebase-modal');
  if (!modal) return;
  if (firebaseConfig) {
    document.getElementById('fb-apiKey').value = firebaseConfig.apiKey || '';
    document.getElementById('fb-projectId').value = firebaseConfig.projectId || '';
    document.getElementById('fb-databaseURL').value = firebaseConfig.databaseURL || '';
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeFirebaseModal() {
  const modal = document.getElementById('firebase-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveFirebaseConfig() {
  const rawJson = document.getElementById('fb-rawJson').value.trim();
  let cfg = {
    apiKey: document.getElementById('fb-apiKey').value.trim(),
    projectId: document.getElementById('fb-projectId').value.trim(),
    databaseURL: document.getElementById('fb-databaseURL').value.trim()
  };

  if (rawJson) {
    try {
      const parsed = JSON.parse(rawJson);
      cfg = { ...cfg, ...parsed };
    } catch (e) {
      showToast('JSON 형식이 올바르지 않습니다.', 'rose');
      return;
    }
  }

  if (!cfg.projectId && !cfg.databaseURL) {
    showToast('Project ID 또는 Database URL을 입력해 주세요.', 'amber');
    return;
  }

  firebaseConfig = cfg;
  localStorage.setItem(STORAGE_KEY_FB_CONFIG, JSON.stringify(cfg));
  updateFirebaseStatusBadge(true);
  closeFirebaseModal();
  showToast(`Firebase 프로젝트(${cfg.projectId || 'RTDB'}) 연동 설정이 저장되었습니다.`, 'emerald');
}

function clearFirebaseConfig() {
  firebaseConfig = null;
  localStorage.removeItem(STORAGE_KEY_FB_CONFIG);
  updateFirebaseStatusBadge(false);
  closeFirebaseModal();
  showToast('LocalStorage 오프라인 모드로 전환되었습니다.', 'sky');
}

function updateFirebaseStatusBadge(isConnected) {
  const dot = document.getElementById('db-status-dot');
  const label = document.getElementById('db-status-label');
  if (!dot || !label) return;

  if (isConnected && firebaseConfig) {
    dot.className = 'w-2 h-2 rounded-full bg-emerald-400';
    label.textContent = `Firebase 연동 (${firebaseConfig.projectId || 'Connected'})`;
  } else {
    dot.className = 'w-2 h-2 rounded-full bg-amber-400 animate-pulse';
    label.textContent = 'LocalStorage 모드';
  }
}

// ============================================================================
// RESEARCH EXPORT (JSON & CSV)
// ============================================================================
function exportNetworkJSON() {
  const payload = {
    metadata: {
      title: 'ANT School Library Collaborative Instruction Network Snapshot',
      exportedAt: new Date().toISOString(),
      speaker: currentInterviewAnalysis.speaker,
      cohesionScore: currentInterviewAnalysis.cohesionScore
    },
    nodes: currentGraphData.nodes,
    links: currentGraphData.links,
    translationStages: currentInterviewAnalysis.translationStages
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ant_network_snapshot_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('네트워크 및 번역 4단계 JSON 파일이 다운로드되었습니다.', 'sky');
}

function exportMatrixCSV() {
  const headers = [
    'URI',
    '행위자명(국문)',
    '행위자유형',
    '생태체계층위',
    'ANT역할',
    '의무통과점(OPP)',
    '연대링크수',
    '갈등링크수',
    '가중연결중심성',
    '매개중심성',
    '정의'
  ];

  const rows = currentGraphData.nodes.map((n) => [
    n.uri,
    `"${n.labelKo}"`,
    n.actantType,
    n.systemLayer,
    n.roleType,
    n.isOPP ? 'TRUE' : 'FALSE',
    n.allyCount,
    n.conflictCount,
    n.weightedDegree,
    n.betweenness,
    `"${(n.description || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ant_actants_centrality_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('행위자 중심성 매트릭스 CSV 파일이 다운로드되었습니다.', 'emerald');
}

// ============================================================================
// TOAST NOTIFICATION
// ============================================================================
function showToast(message, color = 'sky') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const colorMap = {
    sky: 'border-sky-500/50 bg-slate-900/95 text-sky-200',
    emerald: 'border-emerald-500/50 bg-slate-900/95 text-emerald-200',
    amber: 'border-amber-500/50 bg-slate-900/95 text-amber-200',
    rose: 'border-rose-500/50 bg-slate-900/95 text-rose-200'
  };

  const el = document.createElement('div');
  el.className = `px-4 py-2.5 rounded-xl border shadow-xl text-xs font-medium transition-all duration-300 ${
    colorMap[color] || colorMap.sky
  }`;
  el.textContent = message;
  container.appendChild(el);

  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 300);
  }, 3200);
}
