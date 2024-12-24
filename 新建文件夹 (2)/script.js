// 音乐控制
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    
    // 尝试自动播放
    function tryAutoplay() {
        // 设置音量为0.5
        music.volume = 0.5;
        
        // 尝试自动播放
        let playPromise = music.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // 自动播放成功
                console.log('Autoplay started');
                musicBtn.classList.remove('paused');
            }).catch(error => {
                // 自动播放失败，等待用户交互
                console.log("Autoplay prevented:", error);
                music.play().catch(function(error) {
                    console.log("Audio play failed:", error);
                });
            });
        }
    }

    // 页面加载后立即尝试自动播放
    tryAutoplay();

    // 音乐控制按钮点击事件
    musicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicBtn.classList.remove('paused');
        } else {
            music.pause();
            musicBtn.classList.add('paused');
        }
    });
});

// 优化雪花生成功能，添加颜色变化
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // 随机选择雪花字符
    const snowflakes = ['❅', '❆', '❄', '✺'];  // 减少字符种类，保持统一风格
    snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    
    // 随机位置和大小
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.fontSize = Math.random() * 6 + 8 + 'px';
    
    // 随机动画时间
    const duration = Math.random() * 3 + 9;
    snowflake.style.animationDuration = duration + 's';
    
    // 设置初始位置在视口上方
    snowflake.style.top = '-20px';
    
    // 随机透明度
    snowflake.style.opacity = Math.random() * 0.3 + 0.5;
    
    // 随机颜色变化
    const colors = ['#ffd1dc', '#ffb6c1', '#ffc0cb'];
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // 添加到容器
    document.querySelector('.snowflakes').appendChild(snowflake);
    
    // 动画结束后移除
    setTimeout(() => {
        snowflake.remove();
    }, (duration + 1) * 1000);
}

// 初始生成一批雪花，位置分散
for(let i = 0; i < 15; i++) {
    setTimeout(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = ['❅', '❆', '❄'][Math.floor(Math.random() * 3)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.top = Math.random() * 100 + 'vh';
        snowflake.style.fontSize = Math.random() * 6 + 8 + 'px';
        snowflake.style.opacity = Math.random() * 0.3 + 0.5;
        snowflake.style.color = ['#ffd1dc', '#ffb6c1', '#ffc0cb'][Math.floor(Math.random() * 3)];
        snowflake.style.animationDuration = (Math.random() * 3 + 9) + 's';
        document.querySelector('.snowflakes').appendChild(snowflake);
    }, i * 200);
} 