import { academyLessons } from './academy-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const allLessons = Array.isArray(academyLessons) ? academyLessons : [];
  const normalizeLesson = (lesson, index) => {
    const safeCategory = (lesson?.category || 'عام').toString().trim() || 'عام';

    return {
      id: (lesson?.id ?? `lesson-${index + 1}`).toString(),
      title: (lesson?.title ?? 'درس بدون عنوان').toString(),
      category: safeCategory,
      durationMinutes: Number.isFinite(Number(lesson?.durationMinutes)) ? Number(lesson.durationMinutes) : 5,
      publishedAt: (lesson?.publishedAt ?? '2024-01-01').toString(),
      summary: (lesson?.summary ?? 'تفاصيل الدرس ستتوفر قريباً.').toString(),
      tags: Array.isArray(lesson?.tags) ? lesson.tags : []
    };
  };

  const normalizedLessons = allLessons.map((lesson, index) => normalizeLesson(lesson, index));
  const categoryFilters = document.getElementById('categoryFilters');
  const lessonGrid = document.getElementById('academyLessonsGrid') || document.getElementById('lessonGrid');
  const searchInput = document.getElementById('lessonSearch');
  const emptyState = document.getElementById('lessonEmpty');
  const lessonCount = document.getElementById('lessonCount');

  console.info('ABH Academy lessons loaded', { total: normalizedLessons.length });

  if (!categoryFilters || !lessonGrid) return;

  const iconTemplates = {
    basics: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
    identity: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v10H5z"/><path d="M7 19h10"/><circle cx="9" cy="10" r="1.2"/><path d="M12 10h5"/></svg>',
    web: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M4 10h16"/><path d="M9 14h6"/></svg>',
    growth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17l5-6 4 3 5-7"/><path d="M14 7h6v6"/></svg>',
    operations: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v3H4z"/><path d="M6 14h12"/><path d="M9 17h6"/><circle cx="12" cy="11" r="1.4"/></svg>',
    finance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v10H4z"/><path d="M4 11h16"/><path d="M8 11v6"/><path d="M16 11v6"/></svg>',
    data: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v2H5z"/><path d="M7 10h10v2H7z"/><path d="M9 14h6v2H9z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 11h16"/><path d="M9 3v4"/><path d="M15 3v4"/></svg>'
  };

  const categoryMap = {
    'الأساسيات': { key: 'basics' },
    'الهوية والعلامة': { key: 'identity' },
    'الموقع والتحويل': { key: 'web' },
    'التسويق والنمو': { key: 'growth' },
    'الإدارة المالية': { key: 'finance' },
    'البيانات والقياس': { key: 'data' },
    'التشغيل والإمداد': { key: 'operations' },
    'العمليات واتخاذ القرار': { key: 'operations' },
    'عام': { key: 'basics' }
  };

  const uniqueCategories = ['الكل', ...new Set(normalizedLessons.map(item => item.category || 'عام'))];
  let activeCategory = 'الكل';
  let query = '';

  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const createLessonLink = (lessonId) => {
    const basePath = window.location.pathname.includes('/academy/')
      ? './lesson.html'
      : 'academy/lesson.html';

    const url = `${basePath}?id=${encodeURIComponent(lessonId)}`;
    return url;
  };

  const updateCount = (displayed) => {
    if (lessonCount) {
      lessonCount.textContent = `عدد الدروس: ${displayed} / ${normalizedLessons.length}`;
    }
  };

  const getFilteredLessons = () => {
    return normalizedLessons.filter(item => {
      const category = item.category?.toString().trim() || 'عام';
      const matchCategory = activeCategory === 'الكل' || category === activeCategory;
      const haystack = `${item.title || ''} ${item.summary || ''} ${(item.tags || []).join(' ')}`.toLowerCase();
      const matchQuery = haystack.includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  };

  const renderFilters = () => {
    categoryFilters.innerHTML = '';

    if (uniqueCategories.length <= 1) {
      categoryFilters.innerHTML = '<span class="filter-pill disabled">لا توجد فئات متاحة</span>';
      return;
    }

    uniqueCategories.forEach(cat => {
      const pill = document.createElement('button');
      pill.className = `filter-pill ${activeCategory === cat ? 'is-active' : ''}`;
      pill.type = 'button';
      pill.textContent = cat;
      pill.setAttribute('data-category', cat);
      pill.addEventListener('click', () => {
        activeCategory = cat;
        renderFilters();
        renderLessons(getFilteredLessons());
      });
      categoryFilters.appendChild(pill);
    });
  };

  const renderLessons = (list = []) => {
    const renderList = Array.isArray(list) ? list : [];
    lessonGrid.innerHTML = '';
    updateCount(renderList.length);

    if (renderList.length === 0) {
      emptyState?.classList.remove('hidden');
      return;
    }

    emptyState?.classList.add('hidden');

    renderList.forEach(item => {
      const displayCategory = item.category || 'عام';
      const catInfo = categoryMap[displayCategory] || {};
      const icon = iconTemplates[catInfo.key] || iconTemplates.basics;

      const card = document.createElement('article');
      card.className = 'lesson-card';

      card.innerHTML = `
        <div class="lesson-card-top">
            <div class="lesson-category">
                <span class="icon-pill">${icon}</span>
                <span class="category-label">${displayCategory}</span>
            </div>
            <div class="lesson-meta">
                <span class="meta-item">${iconTemplates.clock}<span>${item.durationMinutes} دقائق</span></span>
                <span class="meta-item">${iconTemplates.calendar}<span>${formatDate(item.publishedAt)}</span></span>
            </div>
        </div>
        <h3 class="lesson-title">${item.title}</h3>
        <p class="lesson-excerpt">${item.summary}</p>
        <a class="lesson-link" href="${createLessonLink(item.id)}">اقرأ الدرس</a>
      `;

      lessonGrid.appendChild(card);
    });
  };

  renderFilters();
  renderLessons(getFilteredLessons());

  searchInput?.addEventListener('input', (event) => {
    query = event.target.value || '';
    renderLessons(getFilteredLessons());
  });

  if (normalizedLessons.length === 0) {
    emptyState?.classList.remove('hidden');
    emptyState.textContent = 'لا توجد دروس متاحة حالياً.';
    updateCount(0);
  }
});
