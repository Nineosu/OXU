document.addEventListener('DOMContentLoaded', () => {
    // chat

    const wrapper = document.querySelector('.wrapper');
    const chatContainer = document.querySelector('.chat__container');
    const chatMain = chatContainer.querySelector('.chat__main');
    const chatToggle = chatContainer.querySelector('.chat-toggle');

    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('chat--hidden');
        wrapper.classList.toggle('chat--hidden');
        chatMain.classList.toggle('chat--hidden');
        chatToggle.classList.toggle('toggled');
    });

    // punct toggle

    if (document.querySelector('.link-btn')) {
        const linkBtns = document.querySelectorAll('.link-btn');
        const pages = document.querySelectorAll('.dataPage');
        const previewSections = document.querySelectorAll('.previewSection');

        linkBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('mobile-menu__btn')) {
                    linkBtns.forEach(btn => {
                        btn.classList.remove('active');
                    });

                    btn.classList.add('active');
                }

                pages.forEach(page => {
                    if (btn.getAttribute('data-page') == page.getAttribute('data-page')) {
                        pages.forEach(item => {
                            item.classList.remove('page-show');
                        })

                        page.classList.add('page-show');

                        previewSections.forEach(section => {
                            section.classList.add('section-hide');
                        });
                    }

                    if (page.querySelector('.page__back-link')) {
                        page.querySelector('.page__back-link').addEventListener('click', () => {
                            page.classList.remove('page-show');
        
                            previewSections.forEach(section => {
                                section.classList.remove('section-hide');
                            });
                        });
                    }
                });
            });
        });
    }

    // modal

    const modal = document.querySelector('.modal');
    const modalTriggers = document.querySelectorAll('.modal-btn');
    const modalCloseBtns = modal.querySelectorAll('.modal-close');

    modalTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.toggle('modal-show');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.toggle('modal-show');
            document.body.style.overflow = '';
        });
    });

    if (window.innerWidth <= 800) {
        const mobileMenuBtns = document.querySelectorAll('.mobile-menu__btn');

        mobileMenuBtns.forEach(btn => {
            if (btn.getAttribute('data-page') == 'news-section') {
                btn.classList.add('active');
                document.querySelectorAll('.previewSection').forEach(section => {
                    section.classList.add('section-hide');
                });

                document.querySelectorAll('.dataPage').forEach(page => {
                    page.classList.add('section-hide');

                    if (page.getAttribute('data-page') == 'news-section') {
                        page.classList.add('page-show');
                        page.classList.remove('section-hide');
                    }
                });
            }
        });
    }

    if (document.querySelector('.chat__main-btn')) {
        const chatDialoguePanel = document.querySelector('.chat__main-btns');
        const chatDialogueBtns = document.querySelectorAll('.chat__main-btn');
        const chatMessages = document.querySelectorAll('.chat__main-message');
        const chatHint = document.querySelector('.chat__main-hint');
        const chatModalBtn = document.querySelector('.chat__modal-btn');

        chatDialogueBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                chatMessages.forEach(message => {
                    if (btn.getAttribute('data-message') == message.getAttribute('data-message')) {
                        message.classList.remove('message-hidden');

                        chatHint.style.display = 'none';
                        chatDialoguePanel.style.display = 'none';
                        
                        setTimeout(() => {
                            chatModalBtn.style.display = 'block';
                        }, 1000)
                    }
                });
            });
        });
    }

    // projects items
    if (document.querySelector('.preview__projects')) {
        const container = document.querySelector('.preview__projects');
        const items = container.querySelectorAll('.projects__item:not(.projects__item--wide)');
        const linkItem = container.querySelector('.projects__item--wide');

        const containerWidth = container.clientWidth - 100;
        const itemWidth = items[0].clientWidth;
        const wideItemWidth = linkItem.clientWidth;

        const availableWidth = containerWidth - wideItemWidth;
        let totalWidth = 0;
        let maxItems = 0;

        if (window.innerWidth >= 1300) {
            items.forEach((item) => {
                if (totalWidth + itemWidth <= availableWidth) {
                    totalWidth += itemWidth;
                    if (maxItems == 7) {
                        maxItems = 7;
                    } else {
                        maxItems++;
                    }
                }
            });

            items.forEach((item, index) => {
                if (index < maxItems) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });

            linkItem.classList.remove('hidden');

        } else {
            maxItems = 4;

            items.forEach((item, index) => {
                if (index < maxItems) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });

            linkItem.classList.remove('hidden');
        }
    }
});