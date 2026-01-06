import { academyLessons } from './academy-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');

  const lessons = Array.isArray(academyLessons) ? academyLessons : [];
  const lesson = lessons.find(item => String(item.id) === String(idParam));

  const metaContainer = document.getElementById('lessonMeta');
  const title = document.getElementById('lessonTitle');
  const summary = document.getElementById('lessonSummary');
  const content = document.getElementById('lessonContent');

  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const renderNotFound = () => {
    console.error(`Lesson not found for id=${idParam}`);
    title.textContent = 'لم يتم العثور على الدرس';
    summary.textContent = 'تأكد من الرابط أو عُد لصفحة الأكاديمية لقراءة الدروس المتاحة.';
    metaContainer.innerHTML = '';
    content.innerHTML = `
      <div class="empty-state">
        <p>الرابط الذي استخدمته لا يشير إلى درس متاح حالياً.</p>
        <a class="btn btn-primary btn-premium" href="../academy.html">العودة للدروس</a>
      </div>
    `;
  };

  const buildList = (items, ordered = false) => {
    const list = document.createElement(ordered ? 'ol' : 'ul');
    items.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = entry;
      list.appendChild(li);
    });
    return list;
  };

  const renderSections = (sections) => {
    if (!Array.isArray(sections) || sections.length === 0) return;

    sections.forEach(section => {
      const wrapper = document.createElement('section');
      wrapper.className = 'lesson-section';

      if (section.heading) {
        const headingEl = document.createElement('h2');
        headingEl.textContent = section.heading;
        wrapper.appendChild(headingEl);
      }

      if (Array.isArray(section.paragraphs)) {
        section.paragraphs.forEach(text => {
          const p = document.createElement('p');
          p.textContent = text;
          wrapper.appendChild(p);
        });
      }

      if (Array.isArray(section.steps)) {
        wrapper.appendChild(buildList(section.steps, true));
      }

      if (Array.isArray(section.bullets)) {
        wrapper.appendChild(buildList(section.bullets));
      }

      content.appendChild(wrapper);
    });
  };

  if (!lesson) {
    renderNotFound();
    return;
  }

  title.textContent = lesson.title;
  summary.textContent = lesson.summary;
  document.title = `${lesson.title} | أكاديمية ABH`;

  metaContainer.innerHTML = `
    <span class="pill meta-pill">${lesson.category}</span>
    <span class="pill meta-pill">${lesson.durationMinutes} دقائق</span>
    <span class="pill meta-pill">${formatDate(lesson.publishedAt)}</span>
  `;

  content.innerHTML = '';
  renderSections(lesson.content?.sections);
});
