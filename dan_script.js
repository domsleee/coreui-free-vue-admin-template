// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.dailytelegraph.com.au/*
// @grant        none
// ==/UserScript==

function getCredits() {
	let credits = JSON.parse( localStorage.getItem( 'devfoundry_credits' ) );

	if ( null === credits ) {
		credits = 0;
	}

	return credits;
}

function getArticleCount() {
	let articleCount = JSON.parse( localStorage.getItem( 'devfoundry_articleCount' ) );

	if ( null === articleCount ) {
		articleCount = 0;
	}

	return articleCount;
}

function getPagesViewed() {
	let pagesViewed = JSON.parse( localStorage.getItem( 'devfoundry_pagesViewed' ) );

	if ( null === pagesViewed ) {
		pagesViewed =[];
	}

	return pagesViewed;
}

function getArticlesShared() {
	let articlesShared = JSON.parse( localStorage.getItem( 'devfoundry_articlesShared' ) );

	if ( null === articlesShared ) {
		articlesShared = 0;
	}

	return articlesShared;
}

function incrementArticlesShared() {
	let articlesShared = getArticlesShared();
	localStorage.setItem( 'devfoundry_articlesShared', JSON.stringify( Number( articlesShared ) + 1 ) );
}

function incrementArticleCount() {
	let articleCount = getArticleCount();
	localStorage.setItem( 'devfoundry_articleCount', JSON.stringify( Number( articleCount ) + 1 ) );
}

function addToPagesViewed( url ) {
	let pagesViewed = getPagesViewed();
	pagesViewed[ pagesViewed.length ] = url;
	localStorage.setItem( 'devfoundry_pagesViewed', JSON.stringify( pagesViewed ) );
}

function addCredits( creditsToAdd ) {
	let credits = getCredits();
	credits = Number( credits ) + Number( creditsToAdd );
	localStorage.setItem( 'devfoundry_credits', JSON.stringify( credits ) );
}

function createElements() {
	let articleCount = getArticleCount(),
		articlesShared = getArticlesShared(),
		credits = getCredits(),
		articleCountTextNode = document.createTextNode( 'Articles viewed: ' + articleCount ),
		articlesSharedTextNode = document.createTextNode( 'Articles shared: ' + articlesShared ),
		creditsTextNode = document.createTextNode( 'Credits: ' + credits ),
		articleCountPEl = document.createElement( 'p' ),
		articlesSharedPEl = document.createElement( 'p' ),
		creditsPEl = document.createElement( 'p' ),
		divEl = document.createElement( 'div' ),
		bodyEl = document.getElementsByTagName( 'body' )[0];

	divEl.setAttribute( 'class', 'devfoundry-popup-div' );
	articleCountPEl.setAttribute( 'class', 'devfoundry-article-count-p' );
	articleCountPEl.appendChild( articleCountTextNode );
	creditsPEl.setAttribute( 'class', 'devfoundry-credits-p' );
	creditsPEl.appendChild( creditsTextNode );
	articlesSharedPEl.setAttribute( 'class', 'devfoundry-articles-shared-p' );
	articlesSharedPEl.appendChild( articlesSharedTextNode );
	divEl.appendChild( articleCountPEl );
	divEl.appendChild( articlesSharedPEl );
	divEl.appendChild( creditsPEl );
	bodyEl.appendChild( divEl );
}

function styleElements() {
	let divEl = document.getElementsByClassName( 'devfoundry-popup-div' )[0],
		articleCountPEl = document.getElementsByClassName( 'devfoundry-article-count-p' )[0],
		creditsPEl = document.getElementsByClassName( 'devfoundry-credits-p' )[0];

	divEl.style.backgroundColor = 'grey';
	divEl.style.height = '200px';
	divEl.style.padding = '30px 30px';
	divEl.style.zIndex = '99999999';
	divEl.style.position = 'fixed';
	divEl.style.width = '100%';
	divEl.style.bottom = '0px';
	articleCountPEl.style.fontSize = '16px';
	articleCountPEl.style.color = 'black';
	creditsPEl.style.fontSize = '24px';
	creditsPEl.style.color = 'white';
}

function refreshCreditsElement() {
	let credits = getCredits(),
		creditsPEl = document.getElementsByClassName( 'devfoundry-credits-p' )[0];
	creditsPEl.innerText = "Credits: " + credits;
}

function refreshArticlesSharedElement() {
	let articlesShared = getArticlesShared(),
		articlesSharedEl = document.getElementsByClassName( 'devfoundry-articles-shared-p' )[0];
	articlesSharedEl.innerText = "Articles Shared: " + articlesShared;
}

function getLeafNode ( url ) {
	let parts = url.split( "/" );
	return parts[ parts.length - 1 ];
}

function thisIsAnArticlePage( currentUrl ) {
	let leafNode = getLeafNode( currentUrl ),
		thisIsAnArticlePage = false,
		regex = /([0-9a-f]{32})$/;

	if ( null !== leafNode.match( regex ) ) {
		thisIsAnArticlePage = true;
	}

	return thisIsAnArticlePage;
}

function notViewedBefore( currentUrl ) {
	let notViewedBefore = false,
		pagesViewed = getPagesViewed();

	if ( ! pagesViewed.includes( currentUrl ) ) {
		notViewedBefore = true;
	}

	return notViewedBefore;
}

function addClickListener() {
	document.addEventListener( 'click', clickListener, false );
}

function clickListener ( event ) {
	if (
		'Facebook' === event.target.title ||
		'Twitter' === event.target.title
	) {
		incrementArticlesShared();
		addCredits( 100 );

		refreshCreditsElement();
		refreshArticlesSharedElement();

		event.preventDefault();
	}
}

function replaceAccountLogin() {
	let elem = jQuery("[data-tgev-label=my-account]");
	if (elem) {
		elem.attr('href', 'my-profile');
	}
}

function init() {
	replaceAccountLogin();

	let currentUrl = window.location.href;

	if (
		thisIsAnArticlePage( currentUrl ) &&
		notViewedBefore( currentUrl )
	) {
		incrementArticleCount();
		addCredits( 10 );
	}

	addToPagesViewed( currentUrl );

	createElements();
	styleElements();

	addClickListener();
    addFrame();
}

function addFrame() {
    let iframe = document.createElement('iframe');
    iframe.src = 'https://domsleee.github.io/coreui-free-vue-admin-template/#/onpage';
    iframe.name = 'itsyaboi';
    iframe.id = 'itsyaboi';
    iframe.scrolling = 'no';
    iframe.style = `
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 230px;
    bottom: 200px;
    border: 0;
    overflow: hidden;`
    iframe.sandbox ="allow-same-origin allow-scripts allow-popups allow-forms";


    document.body.appendChild(iframe);
    waitForMyBoi(iframe);
}

// non-blocking
function waitForMyBoi(iframe) {

    return new Promise(resolve => {
        iframe.onload = () => {
            let myframe = window.frames.itsyaboi;
            console.log("ONLOAD");
            myframe.postMessage('yikes!');
        };
    });
}

init();

window.onload = function() {
	init();
    // ahahahhhhahahaahhahahahhah this script
};