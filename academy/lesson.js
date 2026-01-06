import { academyLessons } from './academy-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');
  const slugParam = params.get('slug');

  const lessons = Array.isArray(academyLessons) ? academyLessons : [];
  const lessonById = lessons.find(item => Number(item.id) === Number(idParam));
  const lessonBySlug = slugParam ? lessons.find(item => item.slug === slugParam) : undefined;
  const lesson = lessonById || lessonBySlug;

  const metaContainer = document.getElementById('lessonMeta');
  const title = document.getElementById('lessonTitle');
  const summary = document.getElementById('lessonSummary');
  const content = document.getElementById('lessonContent');

  if (!lesson) {
    title.textContent = 'لم يتم العثور على الدرس';
    summary.textContent = 'تأكد من الرابط أو عُد لصفحة الأكاديمية لقراءة الدروس المتاحة.';
    metaContainer.innerHTML = '';
    content.innerHTML = `
      <div class="empty-state">
        <p>الرابط الذي استخدمته لا يشير إلى درس متاح حالياً.</p>
        <a class="btn btn-primary btn-premium" href="../academy.html">عودة للأكاديمية</a>
      </div>
    `;
    return;
  }

  title.textContent = lesson.title_ar;
  summary.textContent = lesson.excerpt_ar;
  document.title = `${lesson.title_ar} | أكاديمية ABH`;

  metaContainer.innerHTML = `
    <span class="pill meta-pill">${lesson.category_ar}</span>
    <span class="pill meta-pill">${lesson.minutes} دقائق</span>
    <span class="pill meta-pill">${new Date(lesson.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
  `;

  const defaultContent = `
    <p>هذا الدرس يقدم تطبيقاً عملياً حول: ${lesson.title_ar}.</p>
    <p>استخدم القائمة المختصرة في بداية الدرس لتحديد أهم القرارات، ثم طبّق قائمة الفحص المرفقة لضمان جودة التنفيذ.</p>
    <p>إذا احتجت دعماً إضافياً أو تجهيز نموذج مخصص، تواصل معنا لنرسل لك نسخة قابلة للتعديل مع المتابعة.</p>
  `;

  content.innerHTML = lesson.content_html?.trim() || defaultContent;
});
