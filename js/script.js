const displayNews = () => {           
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5aaebfe73fa04a4abcd241c6b66ec792';
    $.ajax({
        url: url,        
        method: 'GET',        
        success: function (response) { 
            $('.live-news').text('');
               for (var i = 0; i < 6; i++) {                       
                $('.live-news').append('<h3>' + response.articles[i].title + '</h3>  ');
                $('.live-news').append('<p> ' + response.articles[i].description + ' </p>');
                 $('.live-news').append('<img src=" ' + response.articles[i].urlToImage + '" width="200px"; height="200px"/>');
            }},       
        error: (err) => {
             $('.live-news').text(err.responseText);
               }
            });
    
  
        };

        
   


function searchNews(){
    let searchQuery = $('.form-inline input:text').val();
    console.log(searchQuery);
    let url = "https://content.guardianapis.com/search?q=" + searchQuery + "&api-key=e792fbf9-cc02-45ce-8443-d700c924a275";
    
    $.ajax({
        url: url,
        method: 'GET',
        success: function (response) {
           console.log(response);
           $('.live-news').text('');
           for(var i = 0; i < 5; i++) {
               $('.live-news').append('<h2>' + result.response.results[i].title + '</h2>');
                 }},
         error: (err) => {
                $('.search-news').text(err.responseText);
            }, 
        })
     }



$(document).ready(() => {    
    displayNews();
   $(':button').click(() => {
       return searchNews();
   })

})
