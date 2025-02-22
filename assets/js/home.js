document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post"); // Danh sách tất cả bài viết
    const postsPerPage = 5; // Số bài viết mỗi trang
    let currentPage = 1;
    
    function showPage(page) {
        let start = (page - 1) * postsPerPage;
        let end = start + postsPerPage;

        posts.forEach((post, index) => {
            post.style.display = index >= start && index < end ? "flex" : "none";
        });

        document.getElementById("pageNumber").innerText = page;
        document.getElementById("prevPage").disabled = page === 1;
        document.getElementById("nextPage").disabled = end >= posts.length;
    }

    document.getElementById("prevPage").addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("nextPage").addEventListener("click", function () {
        if (currentPage * postsPerPage < posts.length) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
