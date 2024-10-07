document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadProgress = document.getElementById('uploadProgress');
    const progressBar = uploadProgress.querySelector('progress');
    const progressText = uploadProgress.querySelector('span');

    uploadBtn.addEventListener('click', function() {
        // 模拟文件上传
        uploadProgress.style.display = 'block';
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.value = progress;
            progressText.textContent = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                alert('文件上传成功！');
                uploadProgress.style.display = 'none';
            }
        }, 500);
    });

    // 模拟软件列表
    const softwareList = [
        { name: '示例软件1', description: '这是一个示例软件', size: '10MB', date: '2024-03-01', downloads: 1000 },
        { name: '示例软件2', description: '另一个示例软件', size: '20MB', date: '2024-03-02', downloads: 500 },
    ];

    const softwareListElement = document.getElementById('softwareList');
    softwareList.forEach(software => {
        const softwareElement = document.createElement('div');
        softwareElement.className = 'software-item';
        softwareElement.innerHTML = `
            <h3>${software.name}</h3>
            <p>${software.description}</p>
            <p>大小：${software.size} | 上传日期：${software.date} | 下载次数：${software.downloads}</p>
            <button class="download-btn">下载</button>
        `;
        softwareListElement.appendChild(softwareElement);
    });
});