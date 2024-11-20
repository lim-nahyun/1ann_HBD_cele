function goToPage(pageId) {
    const pages = document.querySelectorAll("div[id^='page'], div[id^='gift']");
    pages.forEach(page => page.classList.add('hidden'));

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
    }
}