$(document).ready(function() {
 
    $('#nav li a').click(function(){
    
    var toLoad = $(this).attr('href')+' #content';
    $('#content').hide('fast',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    function loadContent() {
     $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
     $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
     $('#load').fadeOut('normal');
    }
    return false;
    
    });
});