/**
 * 학교도서관 협력수업 관계망 탐색기
 * 초심자도 한눈에 이해할 수 있는 쉬운 우리말 해설 & 단계별 구역 지도 엔진
 */

// 1. 기본 온톨로지 데이터 (ant_library_collab.ttl 내장 폴백)
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
    :description "학교도서관과 독서교육을 총괄하며, 교과교사와 함께 자료 기반 탐구수업을 이끌어가는 핵심 선생님입니다." ;
    :interactsWith :SubjectTeacher, :SchoolLibrary .

:SubjectTeacher a :HumanActor ;
    :belongsToSystem :Microsystem ;
    :roleType "Mediator" ;
    :description "국어·사회·과학 등 각 교과의 전문 지식을 바탕으로 사서교사와 함께 수업을 공동 설계하고 진행하는 선생님입니다." ;
    :interactsWith :TeacherLibrarian, :SchoolLibrary .

:SchoolLibrary a :NonHumanActor ;
    :belongsToSystem :Microsystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "다양한 책과 디지털 정보자료, 그리고 모둠 탐구 공간을 제공하여 학생들의 깊이 있는 배움을 돕는 배움터입니다." ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher .

### 2. 중간체계 (Mesosystem)
:GradeLevelCouncil a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :roleType "Intermediary" ;
    :description "같은 학년을 담당하는 선생님들이 모여 수업 진도와 학사 일정을 함께 맞추고 조율하는 회의 모임입니다." ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher .

:PLC a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "사서교사와 교과교사가 동료 연구자로 모여 교육과정을 재구성하고 새로운 융합수업을 함께 개발하는 교내 자율 연구 모임입니다." ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher .

:StudentHome a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :roleType "Intermediary" ;
    :description "가정 내 독서 습관을 기르고 학부모 도서관 명예사서 활동 등으로 학교도서관과 소통하는 가정 환경입니다." ;
    :interactsWith :SchoolLibrary .

:LibraryOperationCommittee a :HumanActor ;
    :belongsToSystem :Mesosystem ;
    :roleType "Intermediary" ;
    :description "선생님과 학부모님이 함께 모여 학교도서관에 필요한 새로운 책을 선정하고 운영 계획을 살피는 교내 위원회입니다." ;
    :interactsWith :SchoolLibrary, :Principal .

### 3. 외체계 (Exosystem)
:Principal a :HumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Mediator" ;
    :description "도서관 협력수업이 학교 교육계획에 정식으로 반영되도록 승인하고, 수업 시간과 예산을 뒷받침해 주는 학교 관리자입니다." ;
    :interactsWith :TeacherLibrarian, :SchoolOperationCommittee .

:SchoolOperationCommittee a :HumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Intermediary" ;
    :description "학교 전체의 일 년 예산과 교육 운영 방침을 심의하여 도서관 자료 구입비와 프로그램 지원 규모를 결정하는 기구입니다." ;
    :interactsWith :Principal, :SchoolLibrary .

:OfficeOfEducation a :HumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Mediator" ;
    :description "학교에 사서교사를 배치하고, 독서·협력수업 지원 사업과 예산을 학교에 내려주는 교육 행정 기관입니다." ;
    :interactsWith :Principal, :TeacherLibrarian .

:PublicLibrary a :NonHumanActor ;
    :belongsToSystem :Exosystem ;
    :roleType "Intermediary" ;
    :description "학교도서관에 부족한 책을 꾸러미로 빌려주거나 작가 초청 강연 등을 함께 지원하는 동네 공공도서관입니다." ;
    :interactsWith :SchoolLibrary .

### 4. 거시체계 (Macrosystem)
:NationalCurriculum a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :isObligatoryPassagePoint true ;
    :roleType "BlackBox" ;
    :description "학생 스스로 자료를 찾고 탐구하는 수업과 융합 교육, 디지털 리터러시 교육을 강조하는 국가 차원의 교육 기준(2022 개정 교육과정)입니다." ;
    :interactsWith :TeacherLibrarian, :SubjectTeacher, :PLC .

:LibraryPromotionAct a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :roleType "BlackBox" ;
    :description "모든 학교에 도서관 시설과 장서, 전문 인력을 갖추도록 법으로 보장하는 제도적 뒷받침입니다." ;
    :interactsWith :TeacherLibrarian, :OfficeOfEducation .

:CollegeEntrancePreoccupation a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :roleType "BlackBox" ;
    :description "시험 점수와 문제 풀이, 빠른 진도 나가기만을 우선시하여 도서관 탐구·협력수업을 부담스러운 것으로 밀어내는 입시 위주 분위기입니다." ;
    :conflictsWith :TeacherLibrarian, :SubjectTeacher, :SchoolLibrary .

:KnowledgeInformationSociety a :NonHumanActor ;
    :belongsToSystem :Macrosystem ;
    :roleType "Mediator" ;
    :description "지식을 단순히 외우는 것보다 필요한 정보를 스스로 찾아 비판적으로 읽고 활용하는 힘을 중요하게 여기는 현대 사회의 흐름입니다." ;
    :interactsWith :TeacherLibrarian, :NationalCurriculum .

### 5. 시간체계 (Chronosystem)
:CareerLifeCycle a :NonHumanActor ;
    :belongsToSystem :Chronosystem ;
    :roleType "Mediator" ;
    :description "처음 임용되어 혼자 도서관 업무에 적응하던 시기를 지나, 경험이 쌓이면서 여러 교과 선생님과 협력의 폭을 넓혀가는 교직 성장 과정입니다." ;
    :interactsWith :TeacherLibrarian .

:DigitalTransformation a :NonHumanActor ;
    :belongsToSystem :Chronosystem ;
    :isObligatoryPassagePoint true ;
    :roleType "Mediator" ;
    :description "종이책 중심이던 교실과 도서관에 태블릿, 에듀테크, 생성형 AI 도구가 들어오며 수업 방식이 새롭게 바뀌는 기술 변화입니다." ;
    :interactsWith :SchoolLibrary, :TeacherLibrarian, :SubjectTeacher .

:CurriculumCycle a :NonHumanActor ;
    :belongsToSystem :Chronosystem ;
    :roleType "Intermediary" ;
    :description "몇 년마다 국가 교육과정이 새로 개정되면서 학교 수업과 평가 방식이 함께 바뀌는 시간의 흐름입니다." ;
    :interactsWith :NationalCurriculum .`;

// 2. 쉬운 우리말 이름표 & 단계별 환경 메타데이터
const ACTANT_KOREAN_LABELS = {
  TeacherLibrarian: '사서교사',
  SubjectTeacher: '교과교사',
  SchoolLibrary: '학교도서관',
  GradeLevelCouncil: '학년협의회',
  PLC: '전문적 학습공동체',
  StudentHome: '학생 가정·학부모',
  LibraryOperationCommittee: '도서관운영위원회',
  Principal: '학교장(교장·교감)',
  SchoolOperationCommittee: '학교운영위원회',
  OfficeOfEducation: '교육청',
  PublicLibrary: '지역 공공도서관',
  NationalCurriculum: '국가 교육과정',
  LibraryPromotionAct: '학교도서관진흥법',
  CollegeEntrancePreoccupation: '입시·진도 위주 분위기',
  KnowledgeInformationSociety: '지식정보사회 흐름',
  CareerLifeCycle: '교사의 경력 성장',
  DigitalTransformation: '디지털·AI 전환',
  CurriculumCycle: '교육과정 개정 주기'
};

// 쉬운 한 줄 요약 (노드 밑이나 카드에 직관적으로 표시)
const ACTANT_EASY_SUBTITLE = {
  TeacherLibrarian: '독서·정보활용 수업 총괄 교사',
  SubjectTeacher: '교과 성취기준 수업 설계 교사',
  SchoolLibrary: '책·정보자료·탐구 배움 공간',
  GradeLevelCouncil: '같은 학년 수업 일정 조율 모임',
  PLC: '교사들이 함께 수업을 연구하는 모임',
  StudentHome: '가정 독서 및 학부모 참여',
  LibraryOperationCommittee: '도서 구입·운영 심의 위원회',
  Principal: '수업 시수·예산 승인 관리자',
  SchoolOperationCommittee: '학교 예산·학사 방침 심의 기구',
  OfficeOfEducation: '인력 배치·공모사업 지원 기관',
  PublicLibrary: '책 대여·작가 강연 연계 기관',
  NationalCurriculum: '탐구·융합수업을 권장하는 교육 기준',
  LibraryPromotionAct: '도서관 설치·지원을 보장하는 법',
  CollegeEntrancePreoccupation: '시험 점수·진도 압박을 주는 풍토',
  KnowledgeInformationSociety: '정보 탐색·활용 역량 중시 사회',
  CareerLifeCycle: '초임에서 베테랑으로 성장하는 과정',
  DigitalTransformation: '에듀테크·AI 도구 활용 환경 변화',
  CurriculumCycle: '주기적인 국가 교육 정책 변화'
};

const SYSTEM_LAYER_META = {
  Microsystem: {
    ko: '1단계: 교실·수업 현장',
    short: '1. 교실·수업',
    desc: '선생님과 학생이 도서관에서 직접 만나 수업을 만들고 진행하는 가장 가까운 현장입니다.',
    ringOrder: 1,
    radiusRatio: 0.14,
    color: '#f43f5e',
    bgBadge: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
  },
  Mesosystem: {
    ko: '2단계: 교내 소통·모임',
    short: '2. 교내 모임',
    desc: '선생님들과 학부모님이 수업 일정과 내용을 상의하고 연구하는 학교 안 소통 창구입니다.',
    ringOrder: 2,
    radiusRatio: 0.28,
    color: '#f59e0b',
    bgBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
  },
  Exosystem: {
    ko: '3단계: 학교 운영·지역 지원',
    short: '3. 학교·지역 지원',
    desc: '수업이 원활히 열리도록 예산과 시간, 외부 자료를 뒷받침해 주는 든든한 지원 체계입니다.',
    ringOrder: 3,
    radiusRatio: 0.42,
    color: '#10b981',
    bgBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
  },
  Macrosystem: {
    ko: '4단계: 제도·사회 분위기',
    short: '4. 제도·사회 분위기',
    desc: '국가 교육과정이나 법처럼 수업을 장려하기도 하고, 입시 분위기처럼 부담을 주기도 하는 큰 환경입니다.',
    ringOrder: 4,
    radiusRatio: 0.56,
    color: '#38bdf8',
    bgBadge: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
  },
  Chronosystem: {
    ko: '5단계: 기술·시대 변화',
    short: '5. 기술·시대 변화',
    desc: 'AI·디지털 기술의 등장이나 선생님의 경력 성장처럼 시간의 흐름에 따라 수업을 바꾸는 힘입니다.',
    ringOrder: 5,
    radiusRatio: 0.70,
    color: '#a855f7',
    bgBadge: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
  }
};

// 3. 현장 이야기 시나리오 (초심자 친화적 설명 포함)
const SAMPLE_INTERVIEWS = {
  librarian_a: {
    speaker: '사서교사 A (중학교 7년차)',
    title: '상황 1: 교사 학습모임(전학공)과 에듀테크가 만났을 때',
    targetActor: 'TeacherLibrarian',
    plainSummary:
      '사서교사와 교과교사가 "전문적 학습공동체"에서 함께 수업을 연구하고 "AI·에듀테크"를 활용하자, 도서관과 교육과정, 디지털 전환을 잇는 파란 협력선이 훨씬 굵고 튼튼해졌습니다!',
    transcript:
      '처음 발령받았을 때는 혼자 도서관 업무에 적응하느라 바빴지만, 경력이 쌓이면서 전문적학습공동체(전학공) 모임을 통해 교과 선생님들과 성취기준 재구성을 함께 연구했습니다. 특히 2022 개정 교육과정의 융합수업과 에듀테크, AI 리터러시 활동지를 학교도서관 탐구수업과 결합하니 선생님들의 참여가 크게 늘었습니다. 도서관 없이는 깊이 있는 탐구 수업이 어렵다는 공감대가 생겼고, 과정중심평가 기준표를 함께 만들어 정규 수업 시간으로 진행하고 있습니다.'
  },
  teacher_b: {
    speaker: '교과교사 B (고등학교 국어)',
    title: '상황 2: 수능·입시와 진도 압박, 평가 부담이 클 때',
    targetActor: 'SubjectTeacher',
    plainSummary:
      '고등학교 현장의 "수능·입시", "진도 압박", "평가 부담"이 커지면서, [입시·진도 위주 분위기]에서 [교과교사]로 향하는 빨간 점선(갈등·부담)이 굵어지고 사서교사와의 협력선은 약해졌습니다.',
    transcript:
      '솔직히 고등학교에서는 수능과 입시 결과에 대한 부담이 가장 큽니다. 정해진 교과서 진도 압박도 심하고 지필평가와 수행평가 채점 등 평가 부담이 너무 커서, 사서교사 선생님과 따로 시간을 맞춰 협력수업을 준비하기가 쉽지 않습니다. 예산 부족으로 수업에 필요한 책을 바로 사기도 어렵고, 각자 교실에서 혼자 수업하는 독립 업무 선호 분위기가 강해서 도서관 프로젝트 수업은 뒤로 밀리곤 합니다.'
  },
  principal_c: {
    speaker: '학교장 C (교장선생님)',
    title: '상황 3: 교육과정은 권장하지만 예산과 입시 부담이 공존할 때',
    targetActor: 'Principal',
    plainSummary:
      '교장선생님과 교육청이 "전문적 학습공동체"와 "디지털 탐구"를 적극 지원(파란선 강화)하고 있지만, 동시에 "예산 부족"과 "입시·진도 압박"(빨간 점선)이라는 현실적 고민도 함께 나타나는 모습입니다.',
    transcript:
      '국가 교육과정에서 강조하는 탐구 기반 학습과 디지털 전환 역량을 키우려면 학교도서관이 학교 수업의 중심이 되어야 합니다. 다만 학교 전체 예산 부족 문제와 학부모님들의 입시 위주 걱정, 그리고 일부 선생님들의 진도 압박 호소가 함께 존재합니다. 이를 풀어내기 위해 교육청 공모 사업 예산을 확보하고 전문적학습공동체 연구 시간을 학교 일정에 정식으로 배정하여 협력수업을 격려하고 있습니다.'
  },
  synthesis_d: {
    speaker: '사서교사·교과교사 공동 이야기',
    title: '상황 4: 수업 부담을 함께 해결하고 학교 전체로 퍼져나갈 때',
    targetActor: 'SubjectTeacher',
    plainSummary:
      '처음에는 입시와 진도 부담(빨간 점선)이 있었지만, 사서교사가 성취기준 재구성과 AI 팩트체크 활동지로 교과교사의 평가 부담을 덜어주면서 학습공동체와 학교장의 지원 속에 전 학년 수업으로 정착했습니다!',
    transcript:
      '처음에는 수능 입시와 진도 압박, 평가 부담 때문에 협력수업이 망설여졌습니다. 하지만 사서교사가 성취기준 재구성 자료와 에듀테크·AI 리터러시 활동지를 먼저 제안하며 교과 진도와 수행평가를 한 번에 해결하는 방법을 제시했습니다. 이후 전문적학습공동체와 학년협의회를 통해 연간 수업 계획서에 역할을 정식으로 약속했고, 교장선생님과 교육청의 예산 지원 속에 학교 전체 학년으로 융합수업이 넓어졌습니다.'
  }
};

// 4. 키워드 감지 규칙 (쉬운 우리말 설명 포함)
const BARRIER_TRIGGERS = [
  { keyword: '진도 압박', weight: 1.8, source: 'CollegeEntrancePreoccupation', desc: '교과서 진도를 나가야 하는 부담' },
  { keyword: '평가 부담', weight: 1.6, source: 'CollegeEntrancePreoccupation', desc: '시험 출제와 수행평가 채점 부담' },
  { keyword: '수능', weight: 2.0, source: 'CollegeEntrancePreoccupation', desc: '수능 문제풀이 위주 수업 분위기' },
  { keyword: '입시', weight: 2.0, source: 'CollegeEntrancePreoccupation', desc: '대입 결과 중심의 압박감' },
  { keyword: '예산 부족', weight: 1.5, source: 'SchoolOperationCommittee', desc: '수업 자료 및 도서 구입 예산 부족' },
  { keyword: '독립 업무 선호', weight: 1.5, source: 'CollegeEntrancePreoccupation', desc: '각자 교실에서 혼자 수업하려는 관성' },
  { keyword: '시간 부족', weight: 1.4, source: 'GradeLevelCouncil', desc: '함께 모여 수업을 준비할 시간 부족' }
];

const FACILITATOR_TRIGGERS = [
  { keyword: '에듀테크', weight: 1.8, target: 'DigitalTransformation', desc: '에듀테크 도구로 수업 흥미와 효율 향상' },
  { keyword: 'AI 리터러시', weight: 1.9, target: 'DigitalTransformation', desc: 'AI 활용 및 정보 판별 교육 결합' },
  { keyword: '디지털', weight: 1.5, target: 'DigitalTransformation', desc: '디지털 환경 변화를 수업에 적극 활용' },
  { keyword: '전문적학습공동체', weight: 2.2, target: 'PLC', desc: '선생님들이 함께 연구하는 모임 활성화' },
  { keyword: '전학공', weight: 2.0, target: 'PLC', desc: '교사 학습공동체를 통한 공동 수업 설계' },
  { keyword: '융합수업', weight: 1.8, target: 'NationalCurriculum', desc: '여러 교과와 도서관을 잇는 융합수업' },
  { keyword: '성취기준 재구성', weight: 2.1, target: 'NationalCurriculum', desc: '교육과정 성취기준에 맞춘 수업 재설계' },
  { keyword: '탐구', weight: 1.6, target: 'SchoolLibrary', desc: '학교도서관 자료를 활용한 깊이 있는 탐구' },
  { keyword: '과정중심평가', weight: 1.7, target: 'SubjectTeacher', desc: '수업과 수행평가를 하나로 해결하는 협력' },
  { keyword: '예산 확보', weight: 1.5, target: 'OfficeOfEducation', desc: '교육청 공모사업 등으로 수업 예산 확보' },
  { keyword: '예산 지원', weight: 1.5, target: 'Principal', desc: '학교장 및 학교 차원의 예산 뒷받침' }
];

// 5. 전역 상태 관리
let rawTTLText = DEFAULT_TTL_CONTENT;
let baseGraphData = { nodes: [], links: [] };
let currentGraphData = { nodes: [], links: [] };
let selectedNodeId = 'TeacherLibrarian';
let activeSystemFilter = 'ALL';
let mapLayoutMode = 'zones'; // 'zones' (단계별 구역 배치 - 기본값) | 'radial' (동심원 배치)
let d3Simulation = null;
let svgZoom = null;

let currentInterviewAnalysis = {
  isMutated: false,
  speaker: '기본 상태 (초기 관계망)',
  title: '기본 학교도서관 협력수업 관계망',
  plainSummary: '',
  targetActor: 'TeacherLibrarian',
  transcript: '',
  matchedBarriers: [],
  matchedFacilitators: [],
  cohesionScore: 82.4,
  translationStages: []
};

let firebaseConfig = null;
const STORAGE_KEY_SNAPSHOTS = 'ant_library_collab_snapshots_v2';
const STORAGE_KEY_FB_CONFIG = 'ant_library_collab_fb_config_v1';

// ============================================================================
// 초기화
// ============================================================================
window.addEventListener('DOMContentLoaded', async () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  const ttlTextarea = document.getElementById('ttl-editor-textarea');
  if (ttlTextarea) {
    ttlTextarea.value = rawTTLText;
  }

  baseGraphData = parseTurtleOntology(rawTTLText);
  resetToBaseOntology(false);

  initStorageAndFirebase();

  window.addEventListener('resize', () => {
    renderD3Network();
  });
});

function toggleBeginnerGuide() {
  const banner = document.getElementById('beginner-guide-banner');
  if (!banner) return;
  banner.classList.toggle('hidden');
}

function setMapLayoutMode(mode) {
  mapLayoutMode = mode;
  const btnZones = document.getElementById('layout-btn-zones');
  const btnRadial = document.getElementById('layout-btn-radial');

  if (btnZones && btnRadial) {
    if (mode === 'zones') {
      btnZones.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500 text-slate-950 transition flex items-center gap-1.5';
      btnRadial.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5';
    } else {
      btnRadial.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500 text-slate-950 transition flex items-center gap-1.5';
      btnZones.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5';
    }
  }
  renderD3Network();
}

// ============================================================================
// 온톨로지 파서 (내부용 - 화면에는 쉬운 한국어만 노출)
// ============================================================================
function parseTurtleOntology(ttlString) {
  const nodesMap = new Map();
  const rawLinks = [];

  const cleanLines = ttlString
    .split(/\r?\n/)
    .filter((line) => !line.trim().startsWith('#') && !line.trim().startsWith('@prefix'))
    .join('\n');

  const blocks = cleanLines
    .split(/\.\s*(?:\n|$)/)
    .map((b) => b.trim())
    .filter(Boolean);

  blocks.forEach((block) => {
    const subjMatch = block.match(/^:([A-Za-z0-9_-]+)\s+([\s\S]+)$/);
    if (!subjMatch) return;

    const id = subjMatch[1];
    const body = subjMatch[2];

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
      labelKo: ACTANT_KOREAN_LABELS[id] || id,
      subtitleKo: ACTANT_EASY_SUBTITLE[id] || '',
      actantType,
      systemLayer,
      isOPP,
      roleType,
      description,
      weight: isOPP ? 1.4 : 1.0,
      quotes: []
    });

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
// 영향력 점수 계산
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

  nodes.forEach((n) => {
    n.weightedDegree = Number(n.weightedDegree.toFixed(1));
  });
}

// ============================================================================
// 직관적인 2가지 지도 시각화 (1: 단계별 구역 배치, 2: 동심원 그물망 보기)
// ============================================================================
function renderD3Network() {
  const container = document.getElementById('network-canvas-container');
  const svgEl = document.getElementById('ant-network-svg');
  if (!container || !svgEl) return;

  const width = container.clientWidth || 920;
  const height = container.clientHeight || 600;
  const centerX = width / 2;
  const centerY = height / 2;
  const minDim = Math.min(width, height);

  if (d3Simulation) {
    d3Simulation.stop();
  }

  const svg = d3.select(svgEl);
  svg.selectAll('*').remove();

  const gRoot = svg.append('g').attr('class', 'canvas-root');

  svgZoom = d3
    .zoom()
    .scaleExtent([0.5, 2.5])
    .on('zoom', (event) => {
      gRoot.attr('transform', event.transform);
    });

  svg.call(svgZoom);

  const gBackground = gRoot.append('g').attr('class', 'bg-layer');

  const nodes = currentGraphData.nodes.map((n) => ({ ...n }));
  const links = currentGraphData.links.map((l) => ({
    ...l,
    source: typeof l.source === 'object' ? l.source.id : l.source,
    target: typeof l.target === 'object' ? l.target.id : l.target
  }));

  // 구역별 노드 정렬 및 목표 좌표 계산
  const layerKeys = ['Microsystem', 'Mesosystem', 'Exosystem', 'Macrosystem', 'Chronosystem'];
  const targetPositions = {};

  if (mapLayoutMode === 'zones') {
    // 5개 세로 구역(컬럼) 배치: 초심자가 겹침 없이 한눈에 구조를 파악할 수 있는 레이아웃
    const padX = 28;
    const padTop = 58;
    const padBottom = 95;
    const usableW = width - padX * 2;
    const usableH = height - padTop - padBottom;
    const colW = usableW / 5;

    layerKeys.forEach((sysKey, colIdx) => {
      const meta = SYSTEM_LAYER_META[sysKey];
      const colX = padX + colIdx * colW;
      const colCenterX = colX + colW / 2;

      // 배경 컬럼 박스
      gBackground
        .append('rect')
        .attr('x', colX + 5)
        .attr('y', 16)
        .attr('width', colW - 10)
        .attr('height', height - 32)
        .attr('rx', 14)
        .attr('fill', meta.color)
        .attr('fill-opacity', activeSystemFilter === 'ALL' || activeSystemFilter === sysKey ? 0.05 : 0.015)
        .attr('stroke', meta.color)
        .attr('stroke-opacity', activeSystemFilter === 'ALL' || activeSystemFilter === sysKey ? 0.25 : 0.08)
        .attr('stroke-width', 1);

      // 구역 상단 제목 배지
      gBackground
        .append('text')
        .attr('x', colCenterX)
        .attr('y', 38)
        .attr('text-anchor', 'middle')
        .attr('fill', meta.color)
        .attr('font-size', '12px')
        .attr('font-weight', '700')
        .text(meta.short);

      // 해당 구역의 노드들을 세로로 균등 배치
      const groupNodes = nodes.filter((n) => n.systemLayer === sysKey);
      const stepY = usableH / (groupNodes.length + 1);
      groupNodes.forEach((n, idx) => {
        // 선들이 서로 겹치지 않게 약간의 지그재그 오프셋 부여
        const offsetX = groupNodes.length > 3 ? (idx % 2 === 0 ? -12 : 12) : 0;
        targetPositions[n.id] = {
          x: colCenterX + offsetX,
          y: padTop + stepY * (idx + 1)
        };
        n.x = targetPositions[n.id].x;
        n.y = targetPositions[n.id].y;
      });
    });
  } else {
    // 동심원 그물망 보기
    Object.entries(SYSTEM_LAYER_META).forEach(([sysKey, meta]) => {
      const r = minDim * meta.radiusRatio;
      gBackground
        .append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', r)
        .attr('class', 'eco-ring')
        .attr('stroke', meta.color)
        .attr('stroke-width', 1.3)
        .attr('stroke-opacity', activeSystemFilter === 'ALL' || activeSystemFilter === sysKey ? 0.35 : 0.1);

      gBackground
        .append('text')
        .attr('x', centerX)
        .attr('y', centerY - r - 6)
        .attr('class', 'eco-ring-label')
        .attr('fill', meta.color)
        .text(meta.ko);
    });
  }

  // 연결선(Links) 그리기 (곡선 패스로 겹침 최소화)
  const gLinks = gRoot.append('g').attr('class', 'links-layer');
  const linkElements = gLinks
    .selectAll('path')
    .data(links, (d) => d.id)
    .enter()
    .append('path')
    .attr('class', (d) => {
      let cls = 'network-link';
      if (d.type === 'conflictsWith') cls += ' conflict-link';
      if (d.weight > 1.35 && d.type === 'interactsWith') cls += ' strengthened-link';
      if (d.weight > 1.5 && d.type === 'conflictsWith') cls += ' strengthened-conflict';
      return cls;
    })
    .attr('stroke', (d) => (d.type === 'conflictsWith' ? '#fb7185' : '#38bdf8'))
    .attr('stroke-width', (d) => Math.max(1.8, d.weight * 2.2))
    .attr('stroke-opacity', (d) => (d.type === 'conflictsWith' ? 0.9 : 0.55));

  // 노드(Nodes) 그리기
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
    .on('mouseenter', (event, d) => {
      highlightHoveredNode(d.id, true);
    })
    .on('mouseleave', () => {
      highlightHoveredNode(null, false);
    })
    .on('click', (event, d) => {
      event.stopPropagation();
      selectActantNode(d.id, true);
    });

  // 필수 연결고리(핵심 요소) 부드러운 강조 원
  nodeGroups
    .filter((d) => d.isOPP)
    .append('circle')
    .attr('class', 'hub-glow')
    .attr('r', 30);

  nodeGroups
    .filter((d) => d.isOPP)
    .append('circle')
    .attr('class', 'hub-ring')
    .attr('r', (d) => getNodeRadius(d) + 6);

  // 노드 도형: 사람·조직은 동그라미(Circle), 공간·제도·기술은 둥근 사각형(Rounded Rect)
  nodeGroups.each(function (d) {
    const el = d3.select(this);
    const radius = getNodeRadius(d);
    const fillColor = SYSTEM_LAYER_META[d.systemLayer]?.color || '#38bdf8';

    if (d.actantType === 'HumanActor') {
      el.append('circle')
        .attr('class', 'node-shape')
        .attr('r', radius)
        .attr('fill', fillColor)
        .attr('fill-opacity', 0.9)
        .attr('stroke', d.isOPP ? '#fbbf24' : '#f8fafc')
        .attr('stroke-width', d.isOPP ? 3 : 1.8);
    } else {
      const side = radius * 1.75;
      el.append('rect')
        .attr('class', 'node-shape')
        .attr('x', -side / 2)
        .attr('y', -side / 2)
        .attr('width', side)
        .attr('height', side)
        .attr('rx', 7)
        .attr('fill', fillColor)
        .attr('fill-opacity', 0.88)
        .attr('stroke', d.isOPP ? '#fbbf24' : '#f8fafc')
        .attr('stroke-width', d.isOPP ? 3 : 1.8);
    }
  });

  // 노드 안쪽 쉬운 구분 텍스트 ('사람' vs '환경')
  nodeGroups
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', '#0f172a')
    .attr('font-size', '10px')
    .attr('font-weight', '800')
    .attr('pointer-events', 'none')
    .text((d) => (d.actantType === 'HumanActor' ? '사람' : '환경'));

  // 필수 연결고리 상단 배지 ('★ 필수')
  const oppGroups = nodeGroups.filter((d) => d.isOPP);
  oppGroups
    .append('rect')
    .attr('x', -20)
    .attr('y', (d) => -getNodeRadius(d) - 21)
    .attr('width', 40)
    .attr('height', 15)
    .attr('rx', 5)
    .attr('fill', '#fbbf24')
    .attr('pointer-events', 'none');

  oppGroups
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('y', (d) => -getNodeRadius(d) - 10.5)
    .attr('fill', '#0f172a')
    .attr('font-size', '9.5px')
    .attr('font-weight', '800')
    .attr('pointer-events', 'none')
    .text('★ 필수');

  // 노드 아래 쉬운 한국어 이름표 배경 및 텍스트
  nodeGroups
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('y', (d) => getNodeRadius(d) + 16)
    .attr('fill', '#ffffff')
    .attr('font-size', '12.5px')
    .attr('font-weight', '700')
    .attr('pointer-events', 'none')
    .style('text-shadow', '0 2px 6px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.9)')
    .text((d) => d.labelKo);

  // 시뮬레이션 구성
  if (mapLayoutMode === 'zones') {
    d3Simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d.id)
          .strength(0.03)
      )
      .force(
        'x',
        d3.forceX((d) => targetPositions[d.id]?.x || centerX).strength(0.88)
      )
      .force(
        'y',
        d3.forceY((d) => targetPositions[d.id]?.y || centerY).strength(0.88)
      )
      .force('collide', d3.forceCollide().radius((d) => getNodeRadius(d) + 28))
      .on('tick', updatePositions);
  } else {
    d3Simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance((d) => (d.type === 'conflictsWith' ? 165 : 115 / Math.sqrt(d.weight)))
          .strength((d) => (d.type === 'conflictsWith' ? 0.15 : 0.3))
      )
      .force('charge', d3.forceManyBody().strength(-340))
      .force('collide', d3.forceCollide().radius((d) => getNodeRadius(d) + 28))
      .force(
        'radial',
        d3
          .forceRadial(
            (d) => {
              const meta = SYSTEM_LAYER_META[d.systemLayer];
              if (!meta) return 150;
              return meta.ringOrder === 1 ? minDim * 0.08 : minDim * meta.radiusRatio;
            },
            centerX,
            centerY
          )
          .strength(0.82)
      )
      .on('tick', updatePositions);
  }

  function updatePositions() {
    linkElements.attr('d', (d) => {
      const dx = d.target.x - d.source.x;
      const dy = d.target.y - d.source.y;
      const dr = Math.sqrt(dx * dx + dy * dy) * 1.6;
      return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
    });

    nodeGroups.attr('transform', (d) => `translate(${d.x},${d.y})`);
  }

  applyGraphFilters();
}

function getNodeRadius(d) {
  const base = d.isOPP ? 19 : 15;
  const weightBonus = Math.min(6, (d.weightedDegree || 1) * 0.65);
  return base + weightBonus;
}

// 마우스를 올렸을 때 연결된 요소만 또렷하게 보여주는 스포트라이트 기능
function highlightHoveredNode(hoveredId, isHovering) {
  if (!isHovering || !hoveredId) {
    applyGraphFilters();
    return;
  }

  const connectedNodeIds = new Set([hoveredId]);
  d3.selectAll('.network-link').classed('dimmed', function (d) {
    const s = typeof d.source === 'object' ? d.source.id : d.source;
    const t = typeof d.target === 'object' ? d.target.id : d.target;
    const isConnected = s === hoveredId || t === hoveredId;
    if (isConnected) {
      connectedNodeIds.add(s);
      connectedNodeIds.add(t);
    }
    return !isConnected;
  });

  d3.selectAll('.node-group').classed('dimmed', function (d) {
    return !connectedNodeIds.has(d.id);
  });
}

// ============================================================================
// 필터 & 컨트롤
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
    return !(visibleNodeIds.has(srcId) && visibleNodeIds.has(tgtId));
  });
}

function resetGraphView() {
  const svg = d3.select('#ant-network-svg');
  if (svgZoom) {
    svg.transition().duration(450).call(svgZoom.transform, d3.zoomIdentity);
  }
  renderD3Network();
}

// ============================================================================
// 선택한 요소 쉽게 보기 패널 (전문 용어 제거, 쉬운 우리말 설명)
// ============================================================================
function selectActantNode(nodeId, switchTab = false) {
  selectedNodeId = nodeId;
  d3.selectAll('.node-group').classed('selected', (d) => d.id === nodeId);

  if (switchTab) {
    switchDrawerTab('inspector');
  }
  renderActantInspector(nodeId);
}

function getFriendlyRoleTitle(roleType) {
  if (roleType === 'Mediator') return '적극적 변화 촉진자 (수업을 새롭게 바꾸고 연결함)';
  if (roleType === 'Intermediary') return '든든한 징검다리 (일정·예산·자료를 전달하고 조율함)';
  if (roleType === 'BlackBox') return '단단한 제도·환경 (학교 전체에 깔려 있는 기준·분위기)';
  return roleType;
}

function renderActantInspector(nodeId) {
  const container = document.getElementById('inspector-content');
  if (!container) return;

  const node = currentGraphData.nodes.find((n) => n.id === nodeId) || currentGraphData.nodes[0];
  if (!node) return;

  const sysMeta = SYSTEM_LAYER_META[node.systemLayer] || SYSTEM_LAYER_META.Microsystem;

  const relatedLinks = currentGraphData.links.filter((l) => {
    const s = typeof l.source === 'object' ? l.source.id : l.source;
    const t = typeof l.target === 'object' ? l.target.id : l.target;
    return s === node.id || t === node.id;
  });

  const linksHtml = relatedLinks
    .map((l) => {
      const s = typeof l.source === 'object' ? l.source.id : l.source;
      const t = typeof l.target === 'object' ? l.target.id : l.target;
      const otherId = s === node.id ? t : s;
      const otherNode = currentGraphData.nodes.find((n) => n.id === otherId);
      const isConflict = l.type === 'conflictsWith';

      let strengthLabel = '기본 연결';
      if (l.weight >= 1.8) strengthLabel = isConflict ? '심한 부담·갈등' : '매우 긴밀한 협력';
      else if (l.weight >= 1.3) strengthLabel = isConflict ? '갈등 커짐' : '협력 강화됨';

      return `
        <div onclick="selectActantNode('${otherId}', false)" class="cursor-pointer p-2.5 rounded-xl bg-slate-900/95 hover:bg-slate-800 border ${
          isConflict ? 'border-rose-500/40' : 'border-slate-700'
        } flex items-center justify-between transition">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md text-[11px] font-bold ${
              isConflict ? 'bg-rose-500/20 text-rose-300' : 'bg-sky-500/20 text-sky-300'
            }">
              ${isConflict ? '⚡ 부담·갈등' : '🤝 협력·지원'}
            </span>
            <span class="text-xs font-bold text-white">${otherNode ? otherNode.labelKo : otherId}</span>
          </div>
          <div class="flex items-center gap-1.5">
            ${
              l.isDynamic
                ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">현장 상황 반영됨</span>'
                : ''
            }
            <span class="text-[11px] text-slate-300 font-medium">${strengthLabel}</span>
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
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-200 leading-relaxed">
            <div class="text-[11px] font-bold text-amber-300 mb-1">💬 ${q.speaker}의 현장 이야기</div>
            "${q.text}"
          </div>
        `
          )
          .join('')
      : `<p class="text-xs text-slate-400">아직 이 요소에 연결된 현장 이야기가 없습니다. [현장 상황 적용해보기] 탭에서 상황 1~4번을 눌러보세요.</p>`;

  container.innerHTML = `
    <div class="border-b border-slate-800 pb-3">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="px-2.5 py-0.5 rounded-md text-xs font-bold border ${sysMeta.bgBadge}">
          ${sysMeta.ko}
        </span>
        <span class="px-2.5 py-0.5 rounded-md text-xs bg-slate-800 text-slate-200 font-medium">
          ${node.actantType === 'HumanActor' ? '● 사람·교내 모임' : '■ 공간·제도·기술'}
        </span>
        ${
          node.isOPP
            ? '<span class="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-400 text-slate-950">★ 필수 연결고리</span>'
            : ''
        }
      </div>
      <h3 class="text-lg font-bold text-white mt-2.5">${node.labelKo}</h3>
      <p class="text-xs text-sky-300 mt-0.5">${node.subtitleKo}</p>
    </div>

    <!-- 쉬운 설명 카드 -->
    <div class="space-y-2.5">
      <div class="p-3 rounded-xl bg-slate-900/95 border border-slate-800">
        <div class="text-[11px] text-slate-400 font-semibold mb-1">어떤 곳(또는 누구)인가요?</div>
        <p class="text-xs text-slate-100 leading-relaxed">${node.description}</p>
      </div>

      <div class="p-3 rounded-xl bg-slate-900/95 border border-slate-800">
        <div class="text-[11px] text-slate-400 font-semibold mb-0.5">협력수업에서의 역할 성격</div>
        <div class="text-xs font-bold text-sky-300">${getFriendlyRoleTitle(node.roleType)}</div>
        ${
          node.isOPP
            ? '<p class="text-[11px] text-amber-300 mt-1">💡 이 요소는 협력수업이 성사되고 유지되기 위해 반드시 거쳐야 하는 <strong>핵심 길목(필수 연결고리)</strong>입니다.</p>'
            : ''
        }
      </div>
    </div>

    <!-- 요약 수치 -->
    <div class="grid grid-cols-3 gap-2">
      <div class="p-2.5 rounded-xl bg-slate-900/95 border border-slate-800 text-center">
        <div class="text-[11px] text-slate-400">돕는 연결</div>
        <div class="text-base font-bold text-sky-300 mt-0.5">${node.allyCount}곳</div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-900/95 border border-slate-800 text-center">
        <div class="text-[11px] text-slate-400">부담·갈등 연결</div>
        <div class="text-base font-bold text-rose-400 mt-0.5">${node.conflictCount}곳</div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-900/95 border border-slate-800 text-center">
        <div class="text-[11px] text-slate-400">전체 영향력</div>
        <div class="text-base font-bold text-amber-300 mt-0.5">${node.weightedDegree}점</div>
      </div>
    </div>

    <!-- 연결된 요소 목록 -->
    <div class="space-y-1.5">
      <div class="text-xs font-bold text-slate-200 flex items-center justify-between">
        <span>무엇과 연결되어 있나요? (${relatedLinks.length}곳)</span>
        <span class="text-[11px] text-slate-400">누르면 해당 요소로 이동합니다</span>
      </div>
      <div class="space-y-1.5 max-h-48 overflow-y-auto pr-1">
        ${linksHtml}
      </div>
    </div>

    <!-- 현장 인터뷰 인용 -->
    <div class="space-y-1.5">
      <div class="text-xs font-bold text-slate-200">관련된 현장 이야기</div>
      <div class="space-y-1.5">
        ${quotesHtml}
      </div>
    </div>
  `;
}

// ============================================================================
// 현장 상황 시뮬레이터 & 그래프 자동 변화 엔진
// ============================================================================
function loadSampleInterview(sampleKey) {
  const sample = SAMPLE_INTERVIEWS[sampleKey];
  if (!sample) return;

  document.getElementById('interview-speaker').value = sample.speaker;
  document.getElementById('interview-target-actor').value = sample.targetActor;
  const textarea = document.getElementById('interview-textarea');
  if (textarea) {
    textarea.value = sample.transcript;
    textarea.focus();
  }

  runInterviewAnalysis(sample.title, sample.plainSummary);
}

function insertKeywordChip(keywordText) {
  const textarea = document.getElementById('interview-textarea');
  if (!textarea) return;
  const current = textarea.value.trim();
  if (!current) {
    textarea.value = `${keywordText} 관련하여 학교도서관 협력수업을 진행하면서 `;
  } else {
    textarea.value = `${current} ${keywordText}`;
  }
  textarea.focus();
  showToast(`'${keywordText}' 단어가 인터뷰 입력칸에 추가되었습니다.`, 'sky');
}

function clearInterviewInput() {
  const textarea = document.getElementById('interview-textarea');
  if (textarea) {
    textarea.value = '';
    textarea.focus();
  }
  resetToBaseOntology(true);
}

function runInterviewAnalysis(customTitle = '', customPlainSummary = '') {
  const speaker = document.getElementById('interview-speaker').value.trim() || '현장 교사';
  const targetActorId = document.getElementById('interview-target-actor').value || 'SubjectTeacher';
  const transcript = document.getElementById('interview-textarea').value.trim();

  if (!transcript) {
    showToast('현장 상황 버튼(1~4번)을 누르거나 내용을 입력해 주세요.', 'amber');
    return;
  }

  const mutatedNodes = baseGraphData.nodes.map((n) => ({ ...n, quotes: [] }));
  const mutatedLinks = baseGraphData.links.map((l) => ({
    ...l,
    source: typeof l.source === 'object' ? l.source.id : l.source,
    target: typeof l.target === 'object' ? l.target.id : l.target
  }));

  const matchedBarriers = [];
  const matchedFacilitators = [];

  // 1. 어려움/갈등 요인 검사
  BARRIER_TRIGGERS.forEach((rule) => {
    if (transcript.includes(rule.keyword)) {
      matchedBarriers.push(rule);
      upsertLink(mutatedLinks, rule.source, targetActorId, 'conflictsWith', rule.weight, true, rule.desc);

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

  // 2. 도움/촉진 요인 검사
  FACILITATOR_TRIGGERS.forEach((rule) => {
    if (transcript.includes(rule.keyword)) {
      matchedFacilitators.push(rule);
      upsertLink(mutatedLinks, targetActorId, rule.target, 'interactsWith', rule.weight, true, rule.desc);
      upsertLink(mutatedLinks, 'TeacherLibrarian', rule.target, 'interactsWith', rule.weight * 0.9, true, rule.desc);
    }
  });

  // 인용구 저장
  const targetNode = mutatedNodes.find((n) => n.id === targetActorId);
  if (targetNode) {
    targetNode.quotes.push({ speaker, text: transcript });
  }
  matchedFacilitators.forEach((f) => {
    const n = mutatedNodes.find((node) => node.id === f.target);
    if (n && n.quotes.length === 0) {
      n.quotes.push({ speaker, text: transcript });
    }
  });
  if (matchedBarriers.length > 0) {
    const entranceNode = mutatedNodes.find((n) => n.id === 'CollegeEntrancePreoccupation');
    if (entranceNode) {
      entranceNode.quotes.push({ speaker, text: transcript });
    }
  }

  computeNetworkMetrics(mutatedNodes, mutatedLinks);

  const totalAllyWeight = mutatedLinks
    .filter((l) => l.type === 'interactsWith')
    .reduce((acc, l) => acc + l.weight, 0);
  const totalConflictWeight = mutatedLinks
    .filter((l) => l.type === 'conflictsWith')
    .reduce((acc, l) => acc + l.weight, 0);
  const cohesionScore = Number(((totalAllyWeight / (totalAllyWeight + totalConflictWeight)) * 100).toFixed(1));

  // 쉬운 한 줄 요약 자동 생성 (직접 입력한 경우)
  let plainSummary = customPlainSummary;
  if (!plainSummary) {
    const targetKo = ACTANT_KOREAN_LABELS[targetActorId] || targetActorId;
    if (matchedFacilitators.length > 0 && matchedBarriers.length === 0) {
      plainSummary = `${speaker}의 이야기에서 '${matchedFacilitators.map((f) => f.keyword).join(', ')}' 같은 긍정적 요인이 나타나, [${targetKo}]와 주변 지원 요소들 사이의 파란 협력선이 더 굵어졌습니다.`;
    } else if (matchedBarriers.length > 0 && matchedFacilitators.length === 0) {
      plainSummary = `${speaker}의 이야기에서 '${matchedBarriers.map((b) => b.keyword).join(', ')}' 같은 현실적 부담이 크게 나타나, 빨간 점선(갈등·부담 관계)이 강해지고 협력 온도가 낮아졌습니다.`;
    } else {
      plainSummary = `'${matchedFacilitators.map((f) => f.keyword).join(', ')}' 같은 협력 요인과 '${matchedBarriers.map((b) => b.keyword).join(', ')}' 같은 부담 요인이 함께 나타나, 지원과 갈등이 공존하는 현장 모습을 보여줍니다.`;
    }
  }

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
    title: customTitle || `${speaker}의 현장 상황`,
    plainSummary,
    targetActor: targetActorId,
    transcript,
    matchedBarriers,
    matchedFacilitators,
    cohesionScore,
    translationStages
  };

  renderD3Network();
  renderInterviewExtractionResult();
  renderAllDashboardViews();
  selectActantNode(targetActorId, false);

  showToast(`'${speaker}' 상황이 지도에 반영되었습니다!`, 'emerald');
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
  const { title, plainSummary, matchedBarriers, matchedFacilitators, transcript, cohesionScore } =
    currentInterviewAnalysis;

  const badge = document.getElementById('analysis-sentiment-badge');
  const container = document.getElementById('extracted-keywords-container');
  const preview = document.getElementById('annotated-transcript-preview');
  const banner = document.getElementById('mutation-banner');
  const bannerTitle = document.getElementById('mutation-banner-title');
  const bannerText = document.getElementById('mutation-banner-text');

  if (matchedFacilitators.length > matchedBarriers.length) {
    badge.className = 'text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold';
    badge.textContent = `협력 활발 (협력 온도 ${cohesionScore}점)`;
  } else if (matchedBarriers.length > matchedFacilitators.length) {
    badge.className = 'text-[11px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold';
    badge.textContent = `어려움·부담 큼 (협력 온도 ${cohesionScore}점)`;
  } else {
    badge.className = 'text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold';
    badge.textContent = `지원과 부담 공존 (협력 온도 ${cohesionScore}점)`;
  }

  const facBadges =
    matchedFacilitators.length > 0
      ? matchedFacilitators
          .map(
            (f) =>
              `<span class="kw-facilitator text-[11px] inline-flex items-center gap-1 mr-1.5 mb-1.5">🤝 ${f.keyword} → ${ACTANT_KOREAN_LABELS[f.target] || f.target} 연결 강화</span>`
          )
          .join('')
      : '<span class="text-slate-500 text-xs">발견된 협력 촉진 표현 없음</span>';

  const barBadges =
    matchedBarriers.length > 0
      ? matchedBarriers
          .map(
            (b) =>
              `<span class="kw-barrier text-[11px] inline-flex items-center gap-1 mr-1.5 mb-1.5">⚡ ${b.keyword} (${b.desc})</span>`
          )
          .join('')
      : '<span class="text-slate-500 text-xs">발견된 어려움·갈등 표현 없음</span>';

  container.innerHTML = `
    <div class="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs text-slate-100 leading-relaxed">
      💡 <strong>한눈에 보는 변화 요약:</strong> ${plainSummary}
    </div>
    <div class="space-y-2 pt-1">
      <div>
        <div class="text-[11px] text-emerald-300 font-bold mb-1">파란 협력선을 굵게 만든 요인</div>
        <div class="flex flex-wrap">${facBadges}</div>
      </div>
      <div>
        <div class="text-[11px] text-rose-300 font-bold mb-1">빨간 점선(부담·갈등)을 만든 요인</div>
        <div class="flex flex-wrap">${barBadges}</div>
      </div>
    </div>
  `;

  let annotated = transcript;
  matchedFacilitators.forEach((f) => {
    annotated = annotated.replaceAll(f.keyword, `<span class="kw-facilitator">${f.keyword}</span>`);
  });
  matchedBarriers.forEach((b) => {
    annotated = annotated.replaceAll(b.keyword, `<span class="kw-barrier">${b.keyword}</span>`);
  });

  preview.classList.remove('hidden');
  preview.innerHTML = `<strong class="text-slate-200 block mb-1">[적용된 현장 이야기 원문]</strong>"${annotated}"`;

  if (banner && bannerText) {
    banner.classList.remove('hidden');
    if (bannerTitle) bannerTitle.textContent = title;
    bannerText.innerHTML = plainSummary;
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
    speaker: '기본 상태 (초기 관계망)',
    title: '기본 관계망 상태',
    plainSummary: '',
    targetActor: 'TeacherLibrarian',
    transcript: '',
    matchedBarriers: [],
    matchedFacilitators: [],
    cohesionScore: 82.4,
    translationStages: buildTranslationStages('', [], [], '기본 상태')
  };

  const banner = document.getElementById('mutation-banner');
  if (banner) banner.classList.add('hidden');

  renderD3Network();
  renderAllDashboardViews();
  renderActantInspector(selectedNodeId);

  if (notify) {
    showToast('기본 관계망 상태로 되돌아왔습니다.', 'sky');
  }
}

// ============================================================================
// 협력수업이 자리 잡는 4단계 과정 (쉬운 우리말 번역)
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
      stageKo: '1단계: 필요성 공감하기',
      subTitle: '왜 도서관과 함께 수업해야 할까?',
      oppFocus: '사서교사 & 학교도서관',
      actors: '사서교사, 교과교사, 학교도서관, 국가 교육과정',
      competitor: hasBarrier
        ? `입시·진도 부담(${barriers.map((b) => b.keyword).join(', ')})으로 인한 단독 암기 수업`
        : '시험 진도 부담 및 각자 교실에서 수업하려는 관성',
      evidence:
        '교실 안에서 교과서만으로는 깊이 있는 탐구와 정보 판별 교육이 어렵다는 점을 공감하고, 학교도서관과 사서교사를 수업의 필수 파트너로인식하는 단계입니다.',
      status: '공감대 형성됨',
      score: 92
    },
    {
      stageNo: 2,
      stageKo: '2단계: 수업 부담 덜어주기',
      subTitle: '진도와 평가 걱정을 어떻게 줄일까?',
      oppFocus: '디지털·AI 전환 & 교육과정 성취기준',
      actors: '사서교사, 교과교사, 에듀테크·AI 도구, 수행평가 활동지',
      competitor: '지필평가·수행평가 채점 부담, 수업 준비 시간 부족',
      evidence:
        hasDigital || hasCurriculum
          ? '사서교사가 교육과정 성취기준에 맞춘 AI·정보탐색 활동지와 평가 루브릭을 함께 준비하여 교과교사의 진도·평가 부담을 실질적으로 덜어주었습니다.'
          : hasBarrier
          ? `현재 '${barriers.map((b) => b.keyword).join(', ')}' 부담이 큰 상태입니다. 교과 진도와 수행평가를 한 번에 해결할 수 있는 공동 수업 자료 지원이 필요합니다.`
          : '교과 진도와 수행평가를 동시에 해결하는 맞춤형 활동지와 에듀테크 도구로 선생님의 부담을 줄여줍니다.',
      status: hasBarrier && !hasDigital && !hasCurriculum ? '부담 해법 필요' : '부담 완화 중',
      score: hasBarrier && !hasDigital ? 54 : 86
    },
    {
      stageNo: 3,
      stageKo: '3단계: 역할과 시간 약속하기',
      subTitle: '어디서 함께 계획하고 시간을 나눌까?',
      oppFocus: '전문적 학습공동체 & 학년협의회',
      actors: '전문적 학습공동체, 학년협의회, 사서교사, 교과교사',
      competitor: '일회성 이벤트 수업에 그치거나 회의 시간이 부족한 문제',
      evidence: hasPLC
        ? '전문적 학습공동체(교사 모임)에서 사서교사와 교과교사가 연간 수업 계획서와 시간표 시수를 정식으로 나누어 약속했습니다.'
        : '교사 학습공동체와 학년협의회를 통해 공동 수업 지도안과 역할 분담을 공식 일정으로 약속하는 단계입니다.',
      status: hasPLC ? '약속 완료' : '조율 진행 중',
      score: hasPLC ? 95 : 78
    },
    {
      stageNo: 4,
      stageKo: '4단계: 학교 전체로 넓히기',
      subTitle: '어떻게 학교 전체의 문화로 만들까?',
      oppFocus: '학교장(교장·교감) & 교육청 지원',
      actors: '학교장, 학교운영위원회, 교육청, 공공도서관, 학부모',
      competitor: '학교 예산 부족이나 담당 선생님이 바뀌면 수업이 끊기는 문제',
      evidence: hasAdmin
        ? '교장선생님의 시간표·예산 승인과 교육청 지원 사업이 더해져, 한두 명의 열정에만 기대지 않고 학교 전체 학년의 정규 문화로 자리 잡았습니다.'
        : '학교장의 교육과정 승인과 학교운영위원회의 예산 뒷받침을 통해 학교 전체의 지속 가능한 수업 문화로 넓혀가는 단계입니다.',
      status: hasAdmin ? '학교 문화 정착' : '확산 준비 중',
      score: hasAdmin ? 94 : 76
    }
  ];
}

// ============================================================================
// 대시보드 및 표 렌더링
// ============================================================================
function renderAllDashboardViews() {
  const oppCount = currentGraphData.nodes.filter((n) => n.isOPP).length;
  document.getElementById('kpi-actant-count').textContent = `${currentGraphData.nodes.length}개`;
  document.getElementById('kpi-opp-count').textContent = `${oppCount}개`;

  const cohesionEl = document.getElementById('kpi-cohesion');
  if (cohesionEl) {
    cohesionEl.textContent = `${currentInterviewAnalysis.cohesionScore}점`;
    cohesionEl.className =
      currentInterviewAnalysis.cohesionScore >= 75
        ? 'text-emerald-400 font-bold'
        : 'text-rose-400 font-bold';
  }

  // 하단 4단계 카드
  const studioCards = document.getElementById('studio-translation-cards');
  const statusBadge = document.getElementById('translation-status-badge');
  if (statusBadge) {
    statusBadge.textContent = currentInterviewAnalysis.isMutated
      ? `현재 적용됨: ${currentInterviewAnalysis.speaker}`
      : '기본 상태 진단';
  }

  if (studioCards) {
    studioCards.innerHTML = currentInterviewAnalysis.translationStages
      .map(
        (st) => `
        <div class="glass-card rounded-xl p-3.5 flex flex-col justify-between gap-2.5">
          <div>
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-xs font-bold text-amber-300">${st.stageKo}</span>
              <span class="text-[11px] px-2 py-0.5 rounded-full font-bold ${
                st.score >= 80
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'bg-rose-500/20 text-rose-300'
              }">${st.status} (${st.score}%)</span>
            </div>
            <div class="text-[11px] text-sky-300 font-semibold mb-1.5">핵심 연결: ${st.oppFocus}</div>
            <p class="text-xs text-slate-300 leading-relaxed">${st.evidence}</p>
          </div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div class="h-full ${
              st.score >= 80 ? 'bg-gradient-to-r from-sky-400 to-emerald-400' : 'bg-rose-500'
            }" style="width: ${st.score}%"></div>
          </div>
        </div>
      `
      )
      .join('');
  }

  // 탭 2: 4단계 과정 상세 표
  const transTbody = document.getElementById('translation-matrix-tbody');
  if (transTbody) {
    transTbody.innerHTML = currentInterviewAnalysis.translationStages
      .map(
        (st) => `
        <tr class="hover:bg-slate-900/50 transition">
          <td class="py-3 px-3 align-top">
            <div class="font-bold text-amber-300">${st.stageKo}</div>
            <div class="text-[11px] text-slate-400 mt-0.5">${st.subTitle}</div>
          </td>
          <td class="py-3 px-3 text-sky-300 font-semibold align-top">${st.oppFocus}</td>
          <td class="py-3 px-3 text-slate-200 align-top">${st.actors}</td>
          <td class="py-3 px-3 text-rose-300 align-top">${st.competitor}</td>
          <td class="py-3 px-3 text-slate-200 leading-relaxed align-top">${st.evidence}</td>
          <td class="py-3 px-3 text-center align-top">
            <span class="inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${
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

  // 탭 2: 18개 요소 전체 해설표
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
        const roleEasy =
          n.roleType === 'Mediator'
            ? '적극적 변화 촉진'
            : n.roleType === 'Intermediary'
            ? '실무·일정 징검다리'
            : '단단한 제도·풍토';

        return `
          <tr class="hover:bg-slate-900/60 transition cursor-pointer" onclick="switchMainTab('studio'); selectActantNode('${n.id}', true);">
            <td class="py-2.5 px-3">
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold border ${sysMeta.bgBadge}">
                ${sysMeta.short}
              </span>
            </td>
            <td class="py-2.5 px-3 font-bold text-white">${n.labelKo}</td>
            <td class="py-2.5 px-3 text-slate-300">
              ${n.actantType === 'HumanActor' ? '● 사람·모임' : '■ 공간·제도·기술'}
            </td>
            <td class="py-2.5 px-3">
              <span class="px-2 py-0.5 rounded bg-slate-800 text-sky-300 text-[11px] font-medium">${roleEasy}</span>
            </td>
            <td class="py-2.5 px-3 text-center">
              ${
                n.isOPP
                  ? '<span class="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[11px]">★ 필수</span>'
                  : '<span class="text-slate-600">-</span>'
              }
            </td>
            <td class="py-2.5 px-3 text-center">
              <span class="text-sky-300 font-semibold">협력 ${n.allyCount}</span> / <span class="text-rose-400 font-semibold">갈등 ${n.conflictCount}</span>
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-amber-300">${n.weightedDegree}점</td>
            <td class="py-2.5 px-3 text-slate-200 max-w-md leading-relaxed">${n.description}</td>
          </tr>
        `;
      })
      .join('');
  }
}

// ============================================================================
// 탭 전환
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
          ? 'main-tab-btn flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all bg-sky-500/20 text-sky-300 border border-sky-500/40'
          : 'main-tab-btn flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all text-slate-400 hover:text-slate-200';
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
    ? 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40'
    : 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-200';

  document.getElementById('drawer-tab-inspector').className = !isInterview
    ? 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-500/20 text-sky-300 border border-sky-500/40'
    : 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-200';
}

function reparseCustomTTL() {
  const text = document.getElementById('ttl-editor-textarea')?.value;
  if (!text) return;
  try {
    const parsed = parseTurtleOntology(text);
    if (parsed.nodes.length === 0) {
      showToast('데이터 형식을 다시 확인해 주세요.', 'rose');
      return;
    }
    rawTTLText = text;
    baseGraphData = parsed;
    resetToBaseOntology(false);
    showToast(`새로운 설정이 지도에 적용되었습니다 (${parsed.nodes.length}개 요소).`, 'emerald');
    switchMainTab('studio');
  } catch (e) {
    showToast('데이터 적용 중 오류가 발생했습니다.', 'rose');
  }
}

// ============================================================================
// 저장소 & Firebase 연동
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
      createdAt: '2026-11-04 09:30',
      speaker: '상황 1: 사서교사 A (학습공동체·에듀테크 협력)',
      targetActor: 'TeacherLibrarian',
      transcript: SAMPLE_INTERVIEWS.librarian_a.transcript,
      cohesionScore: 89.2,
      barrierCount: 0,
      facilitatorCount: 8
    },
    {
      id: 'snap-seed-2',
      createdAt: '2026-11-04 09:35',
      speaker: '상황 2: 교과교사 B (수능·입시·진도 부담)',
      targetActor: 'SubjectTeacher',
      transcript: SAMPLE_INTERVIEWS.teacher_b.transcript,
      cohesionScore: 61.4,
      barrierCount: 6,
      facilitatorCount: 0
    },
    {
      id: 'snap-seed-3',
      createdAt: '2026-11-04 09:40',
      speaker: '상황 3: 학교장 C (교육과정 지원과 예산 고민)',
      targetActor: 'Principal',
      transcript: SAMPLE_INTERVIEWS.principal_c.transcript,
      cohesionScore: 78.6,
      barrierCount: 3,
      facilitatorCount: 3
    },
    {
      id: 'snap-seed-4',
      createdAt: '2026-11-04 09:45',
      speaker: '상황 4: 공동 이야기 D (부담 해결 및 전교 확산)',
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
  const transcript = document.getElementById('interview-textarea')?.value || currentInterviewAnalysis.transcript || '기본 관계망 기록';

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

  const list = getLocalSnapshots();
  list.unshift(snapshotRecord);
  localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(list));

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
      showToast('클라우드(Firebase)와 브라우저 보관함에 모두 저장되었습니다.', 'emerald');
    } catch (e) {
      showToast('현재 브라우저 보관함에 안전하게 저장되었습니다.', 'emerald');
    }
  } else {
    showToast('현재 분석 기록이 보관함에 저장되었습니다.', 'emerald');
  }

  renderSavedSnapshotsList();
}

async function pullSnapshotsFromFirebase() {
  const baseUrl = getResolvedDatabaseUrl();
  if (!baseUrl) {
    openFirebaseModal();
    showToast('먼저 클라우드(Firebase) 주소를 입력해 주세요.', 'amber');
    return;
  }

  try {
    const resp = await fetch(`${baseUrl}/network_snapshots.json`);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    if (!data) {
      showToast('클라우드에 저장된 기록이 없습니다. [기본 예시 클라우드 업로드]를 먼저 눌러보세요.', 'amber');
      return;
    }
    const remoteList = Object.values(data).sort((a, b) =>
      String(b.createdAt || '').localeCompare(String(a.createdAt || ''))
    );
    localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(remoteList));
    renderSavedSnapshotsList();
    showToast(`클라우드에서 기록 ${remoteList.length}건을 불러왔습니다.`, 'emerald');
  } catch (err) {
    showToast('클라우드 불러오기에 실패했습니다. 주소와 권한 설정을 확인해 주세요.', 'rose');
  }
}

async function seedFirebaseDatabase() {
  const baseUrl = getResolvedDatabaseUrl();
  if (!baseUrl) {
    openFirebaseModal();
    showToast('먼저 클라우드(Firebase) 주소를 입력해 주세요.', 'amber');
    return;
  }

  try {
    let seedPayload = null;
    try {
      const resp = await fetch('firebase-seed-data.json');
      if (resp.ok) {
        seedPayload = await resp.json();
      }
    } catch (_) {}

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
    showToast('4가지 기본 현장 상황 예시가 클라우드에 업로드되었습니다!', 'emerald');
  } catch (err) {
    showToast('업로드 실패: 데이터베이스 주소와 읽기/쓰기 권한을 확인해 주세요.', 'rose');
  }
}

function renderSavedSnapshotsList() {
  const container = document.getElementById('saved-snapshots-list');
  if (!container) return;

  const list = getLocalSnapshots();
  if (list.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400">저장된 기록이 없습니다.</p>`;
    return;
  }

  container.innerHTML = list
    .map(
      (item) => `
      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition space-y-2">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <span class="text-xs font-bold text-white">${item.speaker}</span>
            <span class="text-[11px] text-slate-400 ml-2">${item.createdAt}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">도움 요인 ${item.facilitatorCount}개</span>
            <span class="text-[11px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-300">부담 요인 ${item.barrierCount}개</span>
            <span class="text-[11px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 font-bold">협력 온도 ${item.cohesionScore}점</span>
          </div>
        </div>
        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">"${item.transcript}"</p>
        <div class="flex items-center justify-end gap-2 pt-1">
          <button onclick="deleteSavedSnapshot('${item.id}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 text-xs transition">
            삭제
          </button>
          <button onclick="restoreSavedSnapshot('${item.id}')" class="px-3 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-bold transition">
            이 상황 지도에 불러오기
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
  runInterviewAnalysis(found.speaker);
}

function deleteSavedSnapshot(id) {
  const list = getLocalSnapshots().filter((i) => i.id !== id);
  localStorage.setItem(STORAGE_KEY_SNAPSHOTS, JSON.stringify(list));
  renderSavedSnapshotsList();
  showToast('기록이 삭제되었습니다.', 'sky');
}

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
      showToast('입력한 JSON 형식을 확인해 주세요.', 'rose');
      return;
    }
  }

  if (!cfg.projectId && !cfg.databaseURL) {
    showToast('데이터베이스 주소 또는 프로젝트 ID를 입력해 주세요.', 'amber');
    return;
  }

  firebaseConfig = cfg;
  localStorage.setItem(STORAGE_KEY_FB_CONFIG, JSON.stringify(cfg));
  updateFirebaseStatusBadge(true);
  closeFirebaseModal();
  showToast('클라우드 데이터베이스 연결 설정이 저장되었습니다.', 'emerald');
}

function clearFirebaseConfig() {
  firebaseConfig = null;
  localStorage.removeItem(STORAGE_KEY_FB_CONFIG);
  updateFirebaseStatusBadge(false);
  closeFirebaseModal();
  showToast('브라우저 자동 저장 모드로 전환되었습니다.', 'sky');
}

function updateFirebaseStatusBadge(isConnected) {
  const dot = document.getElementById('db-status-dot');
  const label = document.getElementById('db-status-label');
  if (!dot || !label) return;

  if (isConnected && firebaseConfig) {
    dot.className = 'w-2 h-2 rounded-full bg-emerald-400';
    label.textContent = '클라우드 연결됨';
  } else {
    dot.className = 'w-2 h-2 rounded-full bg-emerald-400';
    label.textContent = '자동 저장 켜짐';
  }
}

// ============================================================================
// 리포트 파일 다운로드 (JSON & CSV)
// ============================================================================
function exportNetworkJSON() {
  const payload = {
    metadata: {
      title: '학교도서관 협력수업 관계망 분석 데이터',
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
  a.download = `학교도서관_협력수업_관계망_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('데이터(JSON) 파일이 다운로드되었습니다.', 'sky');
}

function exportMatrixCSV() {
  const headers = [
    '환경단계',
    '요소이름',
    '구분',
    '수업에서의역할',
    '필수연결고리여부',
    '돕는연결수',
    '갈등연결수',
    '전체영향력점수',
    '쉬운설명'
  ];

  const rows = currentGraphData.nodes.map((n) => {
    const sysMeta = SYSTEM_LAYER_META[n.systemLayer] || SYSTEM_LAYER_META.Microsystem;
    const roleEasy =
      n.roleType === 'Mediator'
        ? '적극적 변화 촉진'
        : n.roleType === 'Intermediary'
        ? '실무·일정 징검다리'
        : '단단한 제도·풍토';

    return [
      `"${sysMeta.ko}"`,
      `"${n.labelKo}"`,
      n.actantType === 'HumanActor' ? '사람·모임' : '공간·제도·기술',
      `"${roleEasy}"`,
      n.isOPP ? '필수 연결고리' : '일반 요소',
      n.allyCount,
      n.conflictCount,
      n.weightedDegree,
      `"${(n.description || '').replace(/"/g, '""')}"`
    ];
  });

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `학교도서관_협력수업_해설표_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('엑셀(CSV) 해설표 파일이 다운로드되었습니다.', 'emerald');
}

// ============================================================================
// 알림 메시지
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
