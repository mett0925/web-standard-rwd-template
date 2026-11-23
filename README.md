# web-standard-rwd-template

빌드 도구 없이 HTML/CSS/바닐라 JS로 만든 반응형 웹 템플릿입니다.

## 실행 방법

설치할 것이 없습니다.

- `index.html`을 브라우저로 열기만 하면 됩니다.
- 또는 VS Code **Live Server** 확장으로 실행하면 수정 즉시 새로고침됩니다.

> Swiper, AOS는 CDN에서 불러오므로 인터넷 연결이 필요합니다.

## 기능

- **반응형 레이아웃**: `css/media.css`에서 1024px / 768px 기준으로 레이아웃 전환
- **히어로 슬라이더**: Swiper로 만든 무한 루프 슬라이드
- **스크롤 애니메이션**: AOS, 최신 글 카드가 `data-aos-delay`로 하나씩 올라옴
- **헤더/TOP 버튼**: 스크롤 위치에 따라 헤더 투명 처리, TOP 버튼은 3초 후 자동으로 숨김
- **탭 가이드**: 탭을 클릭하면 해당 콘텐츠로 전환
- **모바일 메뉴**: 햄버거 버튼, `aria-expanded`/`aria-label` 상태 동기화
- **모달**: 사진 라이트박스, 글 상세보기 (`<dialog>`), 바깥을 클릭하면 닫힘

## 핵심 코드와 이유

```js
topBtn.classList.toggle("show", window.scrollY > 100);
```
**왜?** `toggle(class, 조건)`을 쓰면 if/else로 add·remove를 나눌 필요 없이 한 줄로 상태를 맞출 수 있습니다.

```js
postModal.showModal();
```
**왜?** 네이티브 `<dialog>`를 쓰면 포커스 가두기, ESC로 닫기, 배경 처리가 기본으로 제공되어 직접 구현할 필요가 없습니다.

```js
disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
```
**왜?** OS에서 "동작 줄이기"를 켠 사용자에게는 애니메이션을 끄기 위해서입니다(접근성).

## 구조

```
index.html
css/style.css   기본 스타일
css/media.css   반응형(미디어쿼리)
js/app.js       인터랙션
img/            이미지, 파비콘
```
