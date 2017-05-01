$(function(){
    function getListenTitle (i) {
        if (i == 0) {
            return "限时免费听";
        }else if (i == 1){
            return "立即播放";
        }else if (i == 2){
            return "一元偷偷听";
        }
        return "播放试试";
    }
    function getNewQuestion () {
        $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
            var data = data.data.hot_list;
            var str = '';
            data.forEach(function(v){
                v.listen_status = getListenTitle(v.listen_status);
                str += 
                ` <li class="clearfix">
                        <p class="title">${v.question_content}</p>
                        <p class="answerer"><span>${v.nickname}</span> | <span>${v.intro}</span></p>
                        <div class="audio-box clearfix">
                            <div class="pic">
                                <img src="${v.headimgurl}">
                            </div>
                            <div class="audio-btn"><b></b><i></i>${v.listen_status}</div>
                            <span class="person-num"><b></b>${v.listen_count}人听过</span>
                        </div>
                    </li>`;
            });
            $('.content').html(str);
        }, 'json');
    }

    function getListenList() {
        $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
            var data = data.data.hot_list;
            var str = '';
            data.forEach(function(v){
                str += 
                ` <li class="clearfix">
                        <a href="#">
                            <div class="pic"><img src="${v.headimgurl}"></div>
                            <div class="text">
                                <p class="name">${v.nickname}</p>
                                <p class="post">${v.intro}</p>
                                <p class="other">
                                    <span class="reply"><b></b>${v.listen_count}个回答</span>
                                    <span class="listen"><b></b>${v.listen_count}人收听</span>
                                </p>
                                <div class="like"><b></b>收听</div>
                            </div>
                        </a>
                    </li>`;
            });
            $('.content').html(str);
        }, 'json');
    }
    getNewQuestion();
    $('#newQurstion').on('click', function(){
        getNewQuestion();
        $(this).addClass("clicked").siblings().removeClass('clicked');
        return false;
    });  
    $('#listenList').on('click', function(){
        getListenList();
        $(this).addClass("clicked").siblings().removeClass('clicked');
        return false;
    });  
    $('.content').on('click', '.like', function(){
        if ($(this).hasClass('liked')) {
            $(this).removeClass('liked').html('<b></b>收听')
        } else {
            $(this).addClass('liked').html('已收听');
        }
        return false;
    });
})