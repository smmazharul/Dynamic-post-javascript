//dummy data
const posts = [
    {
        img: 'https://images.freeimages.com/images/small-previews/775/rainbow-1313671.jpg',
        body:'this is body 1'
    },
    {
        img: 'https://images.freeimages.com/images/small-previews/20f/autumn-colors-1361908.jpg',
        body:'this is body 2'
    },
    {
        img: 'https://images.freeimages.com/images/small-previews/c31/colors-1383652.jpg',
        body:'this is body 3'
    },
    {
        img: 'https://images.freeimages.com/images/small-previews/bf9/fall-colors-1385363.jpg',
        body:'this is body 4'
    }
]


//selection

const postElements = document.querySelector('.posts');

const loadAllData = () => {
    posts.map(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
        <img class="post-title" src="${post.img}"/>
        <h2 class="post-body"> ${post.body}</h2>
        `
        postElements.appendChild(postElement)
    });
    
}
loadAllData();