import { useEffect } from "react";

const GoogleTranslate = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,tr,ru,pr,fa,ar,hi,zh-CN', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element')
    }

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    // useEffect(() => {
    //     // in some cases, the google translate script adds a style to the opening html tag.
    //     // this added style disables scrolling.
    //     // the next 3 lines removes this added style in order to re-enable scrolling.
    //     if (window.document.scrollingElement.hasAttribute("style")) {
    //         window.document.scrollingElement.setAttribute("style", "");
    //     }
    // },[]);

    return (
        <div id="google_translate_element"></div>
    );
};

export default GoogleTranslate;