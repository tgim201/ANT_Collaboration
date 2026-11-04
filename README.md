# ANT 학교도서관 협력수업 분석 플랫폼 (Bronfenbrenner × Latour & Callon)

사서교사(`:TeacherLibrarian`)와 교과교사(`:SubjectTeacher`)의 협력수업을 둘러싼 **브론펜브레너의 5계층 생태체계 이론**과 **라투르·칼롱의 행위자-네트워크 이론(ANT)**을 결합한 웹 기반 인터랙티브 온톨로지·질적 면담 분석 플랫폼입니다.

---

## 1. 프로젝트 파일 구조

| 파일 경로 | 설명 |
| :--- | :--- |
| `index.html` | 메인 단일 페이지 애플리케이션(SPA) UI 레이아웃 |
| `styles.css` | D3.js 동심원 궤도, OPP 황금 후광 애니메이션, 학술 인쇄용 스타일 |
| `app.js` | `.ttl` 파서, D3 Force 시뮬레이션, 면담 텍스트 추론 엔진, Firebase 연동 |
| `ant_library_collab.ttl` | 18개 인간/비인간 행위자 및 생태체계·ANT 관계 온톨로지 원문 |
| `firebase-seed-data.json` | Firebase Realtime Database 초기 데이터 임포트용 JSON 시드 파일 |
| `database.rules.json` | Firebase Realtime Database 보안 및 인덱싱 규칙 |
| `firestore.rules` | Cloud Firestore 보안 규칙 |
| `firebase.json` | Firebase CLI 호스팅 및 데이터베이스 설정 파일 |
| `.github/workflows/deploy-pages.yml` | GitHub Pages 자동 배포용 GitHub Actions 워크플로우 |

---

## 2. GitHub 연동 및 GitHub Pages 자동 배포 방법

### Step 1. GitHub 저장소(Repository) 생성
1. [GitHub](https://github.com/new)에 접속하여 새 저장소(예: `ant-library-collab`)를 **Public**으로 생성합니다.

### Step 2. 로컬 폴더에서 Git 초기화 및 푸시
현재 프로젝트 폴더(`행위객체이론`)에서 터미널(PowerShell 또는 Git Bash)을 열고 아래 명령어를 순서대로 실행합니다:

```powershell
git init
git add .
git commit -m "feat: deploy ANT school library collaboration platform with Firebase integration"
git branch -M main
git remote add origin https://github.com/<본인-깃허브-아이디>/<저장소-이름>.git
git push -u origin main
```

### Step 3. GitHub Pages 활성화
1. GitHub 저장소 상단 메뉴에서 **Settings** → 좌측 메뉴 **Pages**로 이동합니다.
2. **Build and deployment** 아래의 **Source**를 **`GitHub Actions`**(또는 `Deploy from a branch` → `main` / `/ (root)`)로 선택합니다.
3. `.github/workflows/deploy-pages.yml` 워크플로우가 자동 실행되며, 약 1분 뒤 `https://<본인-깃허브-아이디>.github.io/<저장소-이름>/` 주소로 사이트가 배포됩니다.

---

## 3. Firebase 연동 방법 (Realtime Database 기준)

### Step 1. Firebase 프로젝트 및 Realtime Database 생성
1. [Firebase 콘솔](https://console.firebase.google.com/)에 접속하여 **[프로젝트 추가]**를 클릭해 새 프로젝트를 생성합니다.
2. 좌측 메뉴에서 **빌드(Build) → Realtime Database**로 이동한 뒤 **[데이터베이스 만들기]**를 클릭합니다.
3. 데이터베이스 위치(예: `미국(us-central1)` 또는 `싱가포르(asia-southeast1)`)를 선택하고 **[테스트 모드에서 시작(Start in test mode)]**으로 생성합니다.
   - 또는 생성 후 **규칙(Rules)** 탭에 본 프로젝트의 `database.rules.json` 내용을 붙여넣고 **[게시]**를 클릭합니다.

### Step 2. 초기 데이터(`firebase-seed-data.json`) 넣기 (2가지 방법 중 택 1)
- **방법 A (웹 사이트 내에서 원클릭 업로드 - 권장)**:
  1. 배포된 웹 사이트 우측 상단의 **[LocalStorage 모드 ⚙]** 버튼을 클릭합니다.
  2. Firebase Realtime Database 상단에 표시된 URL(예: `https://your-project-default-rtdb.firebaseio.com`)을 입력하고 **[설정 저장 및 연결]**을 클릭합니다.
  3. 상단 탭 **[온톨로지(.ttl) & 스냅샷 저장소]**로 이동하여 **[초기 시드 DB 업로드]** 버튼을 클릭하면 `/ontology_meta`, `/interviews`, `/network_snapshots` 데이터가 즉시 Firebase에 생성됩니다.
- **방법 B (Firebase 콘솔에서 직접 JSON 가져오기)**:
  1. Firebase 콘솔의 **Realtime Database → 데이터** 탭 우측 상단 점 3개 메뉴(`⋮`)를 클릭합니다.
  2. **[JSON 가져오기(Import JSON)]**를 선택하고 프로젝트 폴더의 `firebase-seed-data.json` 파일을 업로드합니다.
