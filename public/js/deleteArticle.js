document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".delete-link").forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default navigation
  
        if (!confirm("Are you sure you want to delete this article?")) {
          return; // Stop if the user cancels
        }
  
        const deleteUrl = this.href; // Get the href from the link
  
        fetch(deleteUrl, {
          method: "GET", // Keep the GET request since your backend expects this
          headers: { "Accept": "application/json" } // Ensure we receive JSON response
        })
        .then(response => response.json()) // Parse JSON response
        .then(data => {
          if (data.success) {
            alert(data.message || "Article deleted successfully.");
            location.reload(); // Refresh the page after successful deletion
          } else {
            alert("Error: " + (data.message || "Could not delete article."));
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("An error occurred while deleting the article.");
        });
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const restoreBtn = document.getElementById("restoreArticles");
    
    if (restoreBtn) { // Check if element exists to avoid errors
        restoreBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents navigation

            fetch("/restore", { method: "GET" })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Articles restored successfully!");
                        location.reload(); // Refresh the page to reflect changes
                    } else {
                        alert("Error restoring articles: " + data.error);
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    }
});
