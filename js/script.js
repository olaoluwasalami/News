const displayNews = () => {           
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5aaebfe73fa04a4abcd241c6b66ec792';
    $.ajax({
        url: url,        
        method: 'GET',        
        success: function (response) {
              $('.live-news').text('');
               for (var i = 0; i < 9; i++) {                       
                $('.live-news').append('<h3>' + response.articles[i].title + '</h3>  ');
                $('.live-news').append('<p> ' + response.articles[i].description + ' </p>');
                 $('.live-news').append('<img src=" ' + response.articles[i].urlToImage + ' height="40% width="50%"/>');
            }},       
        error: (err) => {
             $('.live-news').text(err.responseText);
               }
            });
    
  
        };

        
   


function searchNews(){
    let searchInput = $('.form-inline input:text').val();
    console.log(searchInput);
    let url = "https://content.guardianapis.com/search?q=" + searchInput + "&api-key=e792fbf9-cc02-45ce-8443-d700c924a275";
    
    $.ajax({
        url: url,
        method: 'GET',
        success: function (response) {
           console.log(response);
           $('.live-news').text('');
           for(var i = 0; i < 10; i++) {
               $('.live-news').append('<h3>' + response.response.results[i].webTitle + '</h3>');
               $('.live-news').append('<p><a href=" ' + response.response.results[i].webUrl + '">' + response.response.results[i].id + '  </a></p>'); 
            }},
         error: (err) => {
                $('.search-news').text(err.responseText);
            }, 
        })
     }



$(document).ready(() => {    
    displayNews();
   $(':button').click(() => {
        searchNews();
   })
searchNews();
})
