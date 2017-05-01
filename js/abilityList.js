
$(function(){
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
})