$(function () {
    $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
        var v = data.data.hot_list[0];
        console.log(data);
        var str = 
            `<div class="pic">
                <img src="${v.headimgurl}" alt="">
            </div>
            <p>${v.nickname}</p>
            <p>${v.title}<b></b>${v.like_count}人收听</p>
            <p>“${v.title}”</p>`;
        $('.info').html(str);
    }, 'json');
    
});