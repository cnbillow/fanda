$(function(){
    $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
        var data = data.data.hot_list;
        var str = '';
        data.forEach(function(v){
            str += 
               ` <li class="clearfix">
                    <a href="#">
                        <div class="text"> 
                            <p class="title">${v.question_content}</p>
                            <p class="name"><span>回答: ${v.nickname}</span> | <span>${v.intro}</span></p>
                        </div>
                    </a>
                </li>`;
        });
        $('.content').html(str);
    }, 'json');
});