(function() {
    const statusBadge = document.getElementById('jsStatusBadge');
    const setJsStatus = (text, variant = 'info') => {
        if (!statusBadge) return;
        statusBadge.textContent = text;
        statusBadge.className = `js-status-badge ${variant}`;
        statusBadge.style.display = 'inline-flex';
    };

    window.addEventListener('error', (event) => {
        setJsStatus(`JS Error ❌: ${event.error?.message || event.message}`, 'error');
    });

    window.addEventListener('unhandledrejection', (event) => {
        setJsStatus(`JS Error ❌: ${event.reason?.message || event.reason}`, 'error');
    });

    const run = () => {
        // Basic nav toggle for dashboard page
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const spans = navToggle.querySelectorAll('span');
                if (spans.length === 3) {
                    if (navMenu.classList.contains('active')) {
                        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                        spans[1].style.opacity = '0';
                        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
                    } else {
                        spans[0].style.transform = '';
                        spans[1].style.opacity = '';
                        spans[2].style.transform = '';
                    }
                }
            });

            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = '';
                        span.style.opacity = '';
                    });
                });
            });
        }

        const normalizeCode = (value) => {
            const dashNormalized = (value || '').replace(/[‐‑‒–—−﹣－]/g, '-');
            return dashNormalized.trim().toUpperCase();
        };
        const normalizeName = (value) => (value || '').trim().toLowerCase();

        const ADMIN_MODE_CODE = 'ABH-ADMIN-2024';
        const ACCESS_CODES = Object.freeze([
            'ABH-94K2-7XM',
            'ABH-57GQ-29N',
            'ABH-81PV-4T3',
            'ABH-63WD-8YL',
            'ABH-10CR-5ZU',
            'ABH-46MN-2QS'
        ].map(normalizeCode));
        const ACCESS_KEY = 'abh_access_code';
        const TASK_KEY = 'abh_dashboard_tasks';
        const EXPORT_VERSION = '1.0.0';
        const SPECIALISTS = ['أحمد', 'سارة', 'ليلى', 'خالد', 'مها', 'يوسف'];
        const statusLabels = {
            'New': 'جديدة',
            'Assigned': 'مُسندة',
            'In Progress': 'قيد التنفيذ',
            'Review': 'مراجعة',
            'Delivered': 'تم التسليم'
        };

        const accessCard = document.getElementById('accessCard');
        const dashboardPanel = document.getElementById('dashboardPanel');
        const accessForm = document.getElementById('accessForm');
        const accessCodeInput = document.getElementById('accessCode');
        const toggleAccessVisibility = document.getElementById('toggleAccessVisibility');
        const resetAccess = document.getElementById('resetAccess');
        const taskBody = document.getElementById('taskBody');
        const taskCards = document.getElementById('taskCards');
        const newTitle = document.getElementById('newTitle');
        const newOwner = document.getElementById('newOwner');
        const newStatus = document.getElementById('newStatus');
        const newAssignee = document.getElementById('newAssignee');
        const addTaskBtn = document.getElementById('addTask');
        const claimNameInput = document.getElementById('claimName');
        const exportBtn = document.getElementById('exportTasks');
        const downloadBtn = document.getElementById('downloadTasks');
        const importBtn = document.getElementById('importTasks');
        const uploadFile = document.getElementById('uploadFile');
        const backupText = document.getElementById('backupText');
        const importError = document.getElementById('importError');
        const statusFilter = document.getElementById('statusFilter');
        const assigneeFilter = document.getElementById('assigneeFilter');
        const searchBox = document.getElementById('searchBox');
        const sortBy = document.getElementById('sortBy');
        const statusChips = document.querySelectorAll('.status-chip');
        const copyAllCodesBtn = document.getElementById('copyAllCodes');
        const accessCodesList = document.getElementById('accessCodesList');
        const copyStatus = document.getElementById('copyStatus');
        const adminToggle = document.getElementById('adminToggle');
        const adminModeBadge = document.getElementById('adminModeBadge');
        const adminTaskBoard = document.getElementById('adminTaskBoard');
        const adminCodeSection = document.getElementById('adminCodeSection');
        const adminCodeValue = document.getElementById('adminCodeValue');
        const copyAdminCodeBtn = document.getElementById('copyAdminCode');
        const adminCopyStatus = document.getElementById('adminCopyStatus');
        const accessDiagnostics = document.getElementById('accessDiagnostics');
        const diagnosticsList = document.getElementById('diagnosticsList');
        const counters = {
            All: document.getElementById('countAll'),
            New: document.getElementById('countNew'),
            'In Progress': document.getElementById('countInProgress'),
            Review: document.getElementById('countReview'),
            Delivered: document.getElementById('countDelivered')
        };
        const adminGroupList = document.getElementById('adminGroupList');
        const accessDiagnosticsCard = document.getElementById('preLoginDiagnostics');
        const rawInputPreview = document.getElementById('rawInputPreview');
        const normalizedPreview = document.getElementById('normalizedPreview');
        const accessCodeCount = document.getElementById('accessCodeCount');
        const storageKeyPreview = document.getElementById('storageKeyPreview');

        if (!accessForm || !accessCodeInput || !accessCard || !dashboardPanel) {
            throw new Error('Missing required dashboard elements.');
        }

        let adminMode = false;
        adminCodeValue.textContent = ADMIN_MODE_CODE;

        function isValidAccessCode(code) {
            return ACCESS_CODES.includes(normalizeCode(code));
        }

        function isValidAdminCode(code) {
            return normalizeCode(code) === normalizeCode(ADMIN_MODE_CODE);
        }

        function normalizeTask(task) {
            if (task.assignedTo && !task.assignee) {
                task.assignee = task.assignedTo;
            }
            if (!task.assignee) {
                task.assignee = '';
            }
            if (!task.lastUpdated) {
                task.lastUpdated = new Date().toISOString();
            }
            if (!task.reviewerNotes) {
                task.reviewerNotes = '';
            }
            if (!task.link) {
                task.link = '';
            }
            return task;
        }

        function loadTasks() {
            try {
                const saved = localStorage.getItem(TASK_KEY);
                if (saved) {
                    return JSON.parse(saved).map(task => normalizeTask(task));
                }
            } catch (e) {
                console.warn('تعذر قراءة المهام من التخزين المحلي', e);
            }
            return [
                normalizeTask({ id: Date.now(), title: 'تحديث صفحة الخدمات', owner: 'فريق المحتوى', status: 'New', assignee: '', notes: '', reviewerNotes: '', link: '' }),
                normalizeTask({ id: Date.now() + 1, title: 'إعداد حملة إطلاق', owner: 'التسويق', status: 'Assigned', assignee: 'أحمد', notes: 'حاجة لتأكيد الميزانية', reviewerNotes: '', link: '' })
            ];
        }

        function touchTask(task) {
            task.lastUpdated = new Date().toISOString();
        }

        let tasks = loadTasks();

        setAdminMode(false);

        function setAccessVisibility(isVisible) {
            if (!accessCodeInput) return;
            accessCodeInput.type = isVisible ? 'text' : 'password';
            if (toggleAccessVisibility) {
                toggleAccessVisibility.textContent = isVisible ? 'إخفاء' : 'إظهار';
                toggleAccessVisibility.setAttribute('aria-pressed', (!isVisible).toString());
            }
        }

        setAccessVisibility(true);

        function saveTasks() {
            localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
        }

        function persistAndRender() {
            saveTasks();
            renderTasks();
        }

        function getStoredAccessCode() {
            return normalizeCode(localStorage.getItem(ACCESS_KEY));
        }

        function persistAccessCode(code) {
            localStorage.setItem(ACCESS_KEY, normalizeCode(code));
        }

        function hasAccess() {
            return isValidAccessCode(getStoredAccessCode());
        }

        function showDashboard() {
            accessCard.style.display = 'none';
            dashboardPanel.style.display = 'block';
            renderAccessCodes();
            renderTasks();
            renderAccessDiagnostics();
        }

        function showGate() {
            accessCard.style.display = 'block';
            dashboardPanel.style.display = 'none';
            setAdminMode(false);
        }

        function formatDate(value) {
            if (!value) return '';
            try {
                return new Date(value).toLocaleString('ar-EG');
            } catch (e) {
                return value;
            }
        }

        function createStatusBadge(status) {
            const badge = document.createElement('span');
            badge.className = `status-badge status-${status.replace(/\s+/g,'-').toLowerCase()}`;
            const icons = {
                'New': '🆕',
                'Assigned': '🧭',
                'In Progress': '⏳',
                'Review': '🧐',
                'Delivered': '✅'
            };
            badge.textContent = `${icons[status] || ''} ${statusLabels[status] || status}`;
            return badge;
        }

        function currentUser() {
            return claimNameInput.value.trim();
        }

        function userMatchesAssignee(task) {
            return task.assignee && normalizeName(task.assignee) === normalizeName(currentUser());
        }

        function canEditTask(task) {
            if (adminMode) return true;
            return !!task.assignee && userMatchesAssignee(task);
        }

        function canClaimTask(task) {
            if (adminMode) return true;
            if (!task.assignee) return false;
            return userMatchesAssignee(task);
        }

        function buildSpecialistOptions(selectEl, selectedValue = '') {
            selectEl.innerHTML = '';
            const emptyOption = document.createElement('option');
            emptyOption.value = '';
            emptyOption.textContent = 'غير مسندة';
            selectEl.appendChild(emptyOption);

            SPECIALISTS.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                selectEl.appendChild(option);
            });

            if (selectedValue && !SPECIALISTS.includes(selectedValue)) {
                const customOption = document.createElement('option');
                customOption.value = selectedValue;
                customOption.textContent = selectedValue;
                selectEl.appendChild(customOption);
            }

            selectEl.value = selectedValue || '';
        }

        function refreshAssigneeFilterOptions() {
            const currentValue = assigneeFilter.value;
            const uniqueNames = Array.from(new Set([
                ...SPECIALISTS,
                ...tasks.filter(t => t.assignee).map(t => t.assignee.trim())
            ])).filter(Boolean);

            assigneeFilter.innerHTML = '';
            const allOption = document.createElement('option');
            allOption.value = '';
            allOption.textContent = 'الكل';
            assigneeFilter.appendChild(allOption);

            const unassignedOption = document.createElement('option');
            unassignedOption.value = '__unassigned';
            unassignedOption.textContent = 'غير مسندة';
            assigneeFilter.appendChild(unassignedOption);

            uniqueNames.forEach(name => {
                const opt = document.createElement('option');
                opt.value = name;
                opt.textContent = name;
                assigneeFilter.appendChild(opt);
            });

            if (currentValue && Array.from(assigneeFilter.options).some(opt => opt.value === currentValue)) {
                assigneeFilter.value = currentValue;
            }
        }

        function claimTask(task) {
            if (!task.assignee) {
                alert('هذه المهمة غير مسندة. يرجى تعيين مسؤول قبل البدء.');
                return;
            }
            const claimer = currentUser() || prompt('أدخل اسمك للاستلام وفق التعيين المسجّل');
            if (!claimer) return;
            claimNameInput.value = claimer;
            if (!canClaimTask(task)) {
                alert('فقط الأخصائي المعيّن يمكنه استلام هذه المهمة.');
                return;
            }
            task.status = task.status === 'Delivered' ? 'Delivered' : 'In Progress';
            touchTask(task);
            persistAndRender();
        }

        function unclaimTask(task) {
            if (!adminMode && !userMatchesAssignee(task)) {
                alert('يمكن إلغاء الاستلام فقط من قبل نفس المسؤول أو في وضع المشرف.');
                return;
            }
            task.assignee = '';
            touchTask(task);
            persistAndRender();
        }

        function deleteTask(task) {
            const confirmed = confirm('تأكيد حذف المهمة؟ لن يمكن التراجع.');
            if (confirmed) {
                tasks = tasks.filter(t => t.id !== task.id);
                persistAndRender();
            }
        }

        function buildTaskActions(task) {
            const wrap = document.createElement('div');
            wrap.className = 'action-stack';

            const claimButton = document.createElement('button');
            claimButton.type = 'button';
            claimButton.className = 'btn btn-primary btn-small';
            claimButton.textContent = 'استلام';
            claimButton.addEventListener('click', () => claimTask(task));
            claimButton.disabled = !canClaimTask(task);

            const unclaimButton = document.createElement('button');
            unclaimButton.type = 'button';
            unclaimButton.className = 'btn btn-secondary btn-small';
            unclaimButton.textContent = 'إلغاء الاستلام';
            unclaimButton.addEventListener('click', () => unclaimTask(task));
            unclaimButton.disabled = !canEditTask(task);

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'btn btn-danger btn-small';
            deleteButton.textContent = 'حذف';
            deleteButton.addEventListener('click', () => deleteTask(task));
            deleteButton.style.display = adminMode ? 'inline-flex' : 'none';

            wrap.append(claimButton, unclaimButton, deleteButton);
            return wrap;
        }

        function buildTaskRow(task) {
            const row = document.createElement('tr');

            const titleCell = document.createElement('td');
            titleCell.textContent = task.title;

            const statusCell = document.createElement('td');
            statusCell.appendChild(createStatusBadge(task.status));

            const assigneeCell = document.createElement('td');
            const assigneeSelect = document.createElement('select');
            assigneeSelect.className = 'task-select';
            buildSpecialistOptions(assigneeSelect, task.assignee);
            assigneeSelect.addEventListener('change', () => {
                task.assignee = assigneeSelect.value;
                touchTask(task);
                persistAndRender();
            });
            assigneeSelect.disabled = !canEditTask(task);
            assigneeCell.appendChild(assigneeSelect);

            const notesCell = document.createElement('td');
            const notesInput = document.createElement('textarea');
            notesInput.value = task.notes || '';
            notesInput.placeholder = 'ملاحظات التنفيذ';
            notesInput.addEventListener('input', () => {
                task.notes = notesInput.value;
                touchTask(task);
                saveTasks();
            });
            notesInput.disabled = !canEditTask(task);
            notesCell.appendChild(notesInput);

            const linkCell = document.createElement('td');
            const linkInput = document.createElement('input');
            linkInput.type = 'url';
            linkInput.placeholder = 'رابط التسليم';
            linkInput.value = task.link || '';
            linkInput.addEventListener('input', () => {
                task.link = linkInput.value;
                touchTask(task);
                saveTasks();
            });
            linkInput.disabled = !canEditTask(task);
            linkCell.appendChild(linkInput);

            const updatedCell = document.createElement('td');
            updatedCell.textContent = formatDate(task.lastUpdated);

            const actionCell = document.createElement('td');
            actionCell.appendChild(buildTaskActions(task));

            row.append(titleCell, statusCell, assigneeCell, notesCell, linkCell, updatedCell, actionCell);
            return row;
        }

        function buildTaskCard(task) {
            const card = document.createElement('div');
            card.className = 'task-card';

            const header = document.createElement('div');
            header.className = 'task-card-header';
            const title = document.createElement('h4');
            title.textContent = task.title;
            const statusBadgeEl = createStatusBadge(task.status);
            header.append(title, statusBadgeEl);

            const ownerRow = document.createElement('p');
            ownerRow.innerHTML = `<strong>المالك:</strong> ${task.owner || '—'}`;

            const assigneeRow = document.createElement('div');
            assigneeRow.className = 'task-card-field';
            const assigneeLabel = document.createElement('label');
            assigneeLabel.textContent = 'المسؤول:';
            const assigneeSelect = document.createElement('select');
            assigneeSelect.className = 'task-select';
            buildSpecialistOptions(assigneeSelect, task.assignee);
            assigneeSelect.addEventListener('change', () => {
                task.assignee = assigneeSelect.value;
                touchTask(task);
                persistAndRender();
            });
            assigneeSelect.disabled = !canEditTask(task);
            assigneeRow.append(assigneeLabel, assigneeSelect);

            const notesRow = document.createElement('div');
            notesRow.className = 'task-card-field';
            const notesLabel = document.createElement('label');
            notesLabel.textContent = 'ملاحظات:';
            const notesInput = document.createElement('textarea');
            notesInput.value = task.notes || '';
            notesInput.placeholder = 'ملاحظات التنفيذ';
            notesInput.addEventListener('input', () => {
                task.notes = notesInput.value;
                touchTask(task);
                saveTasks();
            });
            notesInput.disabled = !canEditTask(task);
            notesRow.append(notesLabel, notesInput);

            const linkRow = document.createElement('div');
            linkRow.className = 'task-card-field';
            const linkLabel = document.createElement('label');
            linkLabel.textContent = 'رابط التسليم:';
            const linkInput = document.createElement('input');
            linkInput.type = 'url';
            linkInput.value = task.link || '';
            linkInput.placeholder = 'رابط التسليم';
            linkInput.addEventListener('input', () => {
                task.link = linkInput.value;
                touchTask(task);
                saveTasks();
            });
            linkInput.disabled = !canEditTask(task);
            linkRow.append(linkLabel, linkInput);

            const footer = document.createElement('div');
            footer.className = 'task-card-footer';
            const updated = document.createElement('span');
            updated.className = 'updated-at';
            updated.textContent = `آخر تحديث: ${formatDate(task.lastUpdated)}`;
            const actions = buildTaskActions(task);
            footer.append(updated, actions);

            card.append(header, ownerRow, assigneeRow, notesRow, linkRow, footer);
            return card;
        }

        function applyFilters(task) {
            const statusValue = statusFilter.value;
            const assigneeValue = assigneeFilter.value;
            const searchValue = (searchBox.value || '').toLowerCase();

            const matchesStatus = !statusValue || task.status === statusValue;
            const matchesAssignee = !assigneeValue || (assigneeValue === '__unassigned' ? !task.assignee : task.assignee === assigneeValue);
            const matchesSearch = !searchValue ||
                task.title.toLowerCase().includes(searchValue) ||
                (task.owner || '').toLowerCase().includes(searchValue) ||
                (task.assignee || '').toLowerCase().includes(searchValue) ||
                (task.notes || '').toLowerCase().includes(searchValue);

            return matchesStatus && matchesAssignee && matchesSearch;
        }

        function sortTasks(list) {
            const mode = sortBy.value;
            const copy = [...list];
            if (mode === 'recent') {
                return copy.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
            }
            if (mode === 'newest') {
                return copy.sort((a, b) => b.id - a.id);
            }
            if (mode === 'oldest') {
                return copy.sort((a, b) => a.id - b.id);
            }
            return copy;
        }

        function renderTasks() {
            if (!taskBody || !taskCards) return;
            taskBody.innerHTML = '';
            taskCards.innerHTML = '';

            refreshAssigneeFilterOptions();

            const filtered = sortTasks(tasks.filter(applyFilters));
            filtered.forEach(task => {
                taskBody.appendChild(buildTaskRow(task));
                taskCards.appendChild(buildTaskCard(task));
            });
            updateStatusCounts();
            renderAdminTaskBoard();
        }

        function renderAdminTaskBoard() {
            if (!adminTaskBoard || !adminGroupList) return;
            adminTaskBoard.style.display = adminMode ? 'block' : 'none';
            adminGroupList.innerHTML = '';
            if (!adminMode) return;

            const grouped = tasks.reduce((acc, task) => {
                const key = task.assignee || 'غير مسندة';
                acc[key] = acc[key] || [];
                acc[key].push(task);
                return acc;
            }, {});

            Object.keys(grouped).forEach(name => {
                const wrapper = document.createElement('div');
                wrapper.className = 'admin-group-card';
                const title = document.createElement('h4');
                title.textContent = name;
                wrapper.appendChild(title);

                const list = document.createElement('ul');
                list.className = 'admin-task-list';
                grouped[name].forEach(task => {
                    const item = document.createElement('li');
                    item.textContent = `${task.title} — ${statusLabels[task.status] || task.status}`;
                    if (!task.assignee) {
                        item.classList.add('unassigned');
                    }
                    list.appendChild(item);
                });
                wrapper.appendChild(list);
                adminGroupList.appendChild(wrapper);
            });
        }

        function updateStatusCounts() {
            const totals = { All: tasks.length, New: 0, 'In Progress': 0, Review: 0, Delivered: 0 };
            tasks.forEach(task => {
                if (totals.hasOwnProperty(task.status)) {
                    totals[task.status] += 1;
                }
            });
            Object.keys(totals).forEach(key => {
                if (counters[key]) {
                    counters[key].textContent = totals[key];
                }
            });
        }

        function renderAccessCodes() {
            if (!accessCodesList) return;
            accessCodesList.innerHTML = '';
            ACCESS_CODES.forEach(code => {
                const item = document.createElement('li');
                item.className = 'code-item';
                const text = document.createElement('span');
                text.textContent = code;
                const copyBtn = document.createElement('button');
                copyBtn.type = 'button';
                copyBtn.className = 'btn btn-primary btn-small';
                copyBtn.textContent = 'نسخ';
                copyBtn.addEventListener('click', () => copyToClipboard(code));
                item.append(text, copyBtn);
                accessCodesList.appendChild(item);
            });
        }

        function copyToClipboard(text, statusElement = copyStatus) {
            if (!text) return;
            navigator.clipboard.writeText(text).then(() => {
                if (statusElement) {
                    statusElement.textContent = '✔ تم النسخ';
                    setTimeout(() => statusElement.textContent = '', 1200);
                }
            }).catch(() => {
                if (statusElement) {
                    statusElement.textContent = '';
                }
            });
        }

        function renderPreLoginDiagnostics() {
            if (!normalizedPreview || !accessCodeCount || !storageKeyPreview) return;
            if (rawInputPreview) {
                rawInputPreview.textContent = (accessCodeInput.value || '').trim() || '—';
            }
            const normalizedValue = normalizeCode(accessCodeInput.value);
            normalizedPreview.textContent = normalizedValue || '—';
            accessCodeCount.textContent = ACCESS_CODES.length;
            storageKeyPreview.textContent = ACCESS_KEY;
        }

        function renderAccessDiagnostics() {
            if (!accessDiagnostics) return;
            const unlocked = hasAccess();
            accessDiagnostics.style.display = unlocked ? 'block' : 'none';
            diagnosticsList.innerHTML = '';

            const activeCodes = document.createElement('li');
            activeCodes.className = 'code-item';
            activeCodes.textContent = `الرموز النشطة: ${ACCESS_CODES.length}`;

            const adminState = document.createElement('li');
            adminState.className = 'code-item';
            adminState.textContent = adminMode ? 'وضع المشرف: مفعل' : 'وضع المشرف: غير مفعل';

            const storageItem = document.createElement('li');
            storageItem.className = 'code-item';
            storageItem.textContent = `مفاتيح التخزين: ${ACCESS_KEY}, ${TASK_KEY} (لا يتم تخزين وضع المشرف)`;

            diagnosticsList.append(activeCodes, adminState, storageItem);
        }

        function updateAdminUiState() {
            adminToggle.textContent = adminMode ? 'وضع المشرف مفعل' : 'تفعيل وضع المشرف';
            adminToggle.classList.toggle('active', adminMode);
            if (adminModeBadge) {
                adminModeBadge.style.display = adminMode ? 'inline-flex' : 'none';
            }
            if (adminTaskBoard) {
                adminTaskBoard.style.display = adminMode ? 'block' : 'none';
            }
            if (adminCodeSection) {
                adminCodeSection.style.display = adminMode ? 'block' : 'none';
            }
            renderTasks();
            renderAdminTaskBoard();
            renderAccessDiagnostics();
        }

        function setAdminMode(value) {
            adminMode = !!value;
            updateAdminUiState();
        }

        function exportPayload() {
            return {
                version: EXPORT_VERSION,
                exportedAt: new Date().toISOString(),
                tasks
            };
        }

        function handleImport(jsonText) {
            try {
                const parsed = JSON.parse(jsonText);
                const candidateTasks = Array.isArray(parsed) ? parsed : parsed.tasks;
                if (!Array.isArray(candidateTasks)) {
                    throw new Error('صيغة غير صالحة: لم يتم العثور على قائمة مهام.');
                }
                tasks = candidateTasks.map(task => normalizeTask(task));
                persistAndRender();
                importError.textContent = '';
            } catch (err) {
                importError.textContent = err.message || 'تعذر قراءة بيانات JSON.';
            }
        }

        accessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const providedCode = accessCodeInput.value;
            if (isValidAccessCode(providedCode)) {
                persistAccessCode(providedCode);
                showDashboard();
            } else {
                accessCodeInput.value = '';
                renderPreLoginDiagnostics();
                alert('الرمز غير صحيح.');
            }
        });

        accessCodeInput.addEventListener('input', renderPreLoginDiagnostics);

        if (toggleAccessVisibility) {
            toggleAccessVisibility.addEventListener('click', function() {
                const showText = accessCodeInput.type !== 'text';
                setAccessVisibility(showText);
            });
        }

        resetAccess.addEventListener('click', function() {
            localStorage.removeItem(ACCESS_KEY);
            accessCodeInput.value = '';
            renderPreLoginDiagnostics();
            showGate();
        });

        addTaskBtn.addEventListener('click', function() {
            const title = newTitle.value.trim();
            if (!title) {
                alert('الرجاء كتابة عنوان للمهمة.');
                return;
            }
            const owner = newOwner.value.trim();
            const status = newStatus.value;
            const newTask = normalizeTask({
                id: Date.now(),
                title,
                owner,
                status,
                assignee: newAssignee.value.trim(),
                notes: '',
                reviewerNotes: '',
                link: ''
            });
            touchTask(newTask);
            tasks.push(newTask);
            persistAndRender();
            newTitle.value = '';
            newOwner.value = '';
            newAssignee.value = '';
        });

        exportBtn.addEventListener('click', function() {
            const payload = exportPayload();
            backupText.value = JSON.stringify(payload, null, 2);
            navigator.clipboard.writeText(backupText.value).catch(() => {});
        });

        downloadBtn.addEventListener('click', function() {
            const payload = exportPayload();
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'tasks-backup.json';
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        });

        importBtn.addEventListener('click', function() {
            if (!backupText.value.trim()) return;
            handleImport(backupText.value);
        });

        uploadFile.addEventListener('change', function() {
            const file = uploadFile.files && uploadFile.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => handleImport(e.target.result);
            reader.readAsText(file);
            uploadFile.value = '';
        });

        statusFilter.addEventListener('change', renderTasks);
        assigneeFilter.addEventListener('change', renderTasks);
        searchBox.addEventListener('input', renderTasks);
        sortBy.addEventListener('change', renderTasks);

        statusChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const status = chip.dataset.status;
                statusFilter.value = status;
                renderTasks();
            });
        });

        copyAllCodesBtn.addEventListener('click', () => copyToClipboard(ACCESS_CODES.join('\n')));

        copyAdminCodeBtn.addEventListener('click', () => copyToClipboard(ADMIN_MODE_CODE, adminCopyStatus));

        adminToggle.addEventListener('click', () => {
            const code = prompt('أدخل رمز تفعيل وضع المشرف');
            if (code === null) return;
            if (isValidAdminCode(code)) {
                setAdminMode(true);
            } else {
                alert('رمز غير صحيح.');
            }
        });

        renderPreLoginDiagnostics();

        if (hasAccess()) {
            showDashboard();
        } else {
            showGate();
        }

        setJsStatus('JS Loaded ✅', 'success');
    };

    try {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', run);
        } else {
            run();
        }
    } catch (err) {
        setJsStatus(`JS Error ❌: ${err.message}` , 'error');
        console.error(err);
    }
})();
