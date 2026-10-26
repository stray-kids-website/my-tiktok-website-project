// Display posts
function showPosts() {
    let feed = document.getElementById("feed");
    feed.innerHTML = "";

    posts.forEach((post, index) => {
        feed.innerHTML += `
            <div>
                <h3>@${post.username}</h3>
                <p>${post.caption}</p>
                <button onclick="likePost(${index})">
                    ❤️ ${post.likes}
                </button>
            </div>
        `;
    });
}

// Like a post
function likePost(index) {
    posts[index].likes++;
    showPosts();
}

// Add a post
function addPost() {
    let caption = document.getElementById("caption").value;

    if (caption.trim() !== "") {
        posts.unshift({
            username: "you",
            caption: caption,
            likes: 0
        });

        document.getElementById("caption").value = "";
        showPosts();
    }
}

showPosts();