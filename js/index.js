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
    $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
        var data = data.data.hot_list;
        console.log(data);
        var str = '';
        data.forEach(function(v){
            v.listen_status = getListenTitle(v.listen_status);
            str += 
               ` <li class="clearfix">
                    <a href="questionData.html">
                        <p class="title">${v.question_content}</p>
                        <p class="answerer"><span>${v.nickname}</span> | <span>${v.intro}</span></p>
                        <div class="audio-box clearfix">
                            <div class="pic">
                                <object>
                                    <a href="#">
                                        <img src="${v.headimgurl}">
                                    </a>
                                </object>
                            </div>
                            <div class="audio-btn"><b></b><i></i>${v.listen_status}</div>
                            <span class="person-num"><b></b>${v.listen_count}人听过</span>
                        </div>
                    </a>
                </li>`;
        });
        $('.content').html(str);
    }, 'json');
})