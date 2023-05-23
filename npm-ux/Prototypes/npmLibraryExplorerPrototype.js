let landing_page = $("#wrapper");
let npm_status_monitor = $("#npm-status-monitor");
let library_info_hub = $("#library-info-hub");
let npm_library_search_page = $("#npm_library_search_page");

$(document).ready(function(){

    console.log("Document ready");
    togglePageSections();
});

function togglePageSections(){
    function toggleHomeStatus(){
        $("#wrapper").toggle();
        $("#npm-status-monitor").toggle();
    }

    function toggleHomeLibrary(){
        $("#wrapper").toggle();
        $("#library-info-hub").toggle();
    }

    function toggleHomeSearch(){
        $("#wrapper").toggle();
        $("#npm_library_search_page").toggle();
    }

    function toggleLibrarySearch(){
        $("#library-info-hub").toggle();
        $("#npm_library_search_page").toggle();
    }

    $("#npm-resgistry-btn").click(()=>{
        toggleHomeStatus();
        $('title').html("Npm Status Monitor");
    })

    $("#library-info-btn").click(()=>{
        toggleHomeLibrary();
        $('title').html("Library Info Hub");

    })

    $("#library-search-btn").click(()=>{
        toggleHomeSearch();
        $('title').html("Npm Library Search");
    })

    $("#home-page-btn-2").click(()=>{
        toggleHomeStatus();
        $('title').html("Npm Library Explorer");
    })

    $("#library-info-btn-2").click(()=>{
        $("#npm-status-monitor").toggle();
        $("#library-info-hub").toggle();
        $('title').html("Library Info Hub");
    })

    $("#home-page-btn-3").click(()=>{
        toggleHomeLibrary();
        $('title').html("Npm Library Explorer");
    })

    $("#library-search-btn-2").click(()=>{
        toggleLibrarySearch();
    })

    $("#npm-status-monitor-btn-2").click(()=>{
        $("#npm-status-monitor").toggle();
        $("#npm_library_search_page").toggle();
        $('title').html("Npm Status Monitor");
    })

    $("#home-page-btn-4").click(()=>{
        toggleHomeSearch()
        $('title').html("Npm Library Search");
    })
}