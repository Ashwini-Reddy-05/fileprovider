ocument.getElementById('uploadBtn').onclick = () => {
    document.getElementById('fileInput').click();
};

document.getElementById('fileInput').onchange = (e) => {
    showFiles(e.target.files);
};

document.getElementById('dropArea').ondragover = (e) => {
    e.preventDefault();
};

document.getElementById('dropArea').ondrop = (e) => {
    e.preventDefault();
    showFiles(e.dataTransfer.files);
};

function showFiles(files) {
    const list = document.getElementById('fileList');
    
    for (let file of files) {
        const li = document.createElement('li');
        li.textContent = file.name;
        list.appendChild(li);
    }
}
